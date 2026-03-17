/**
 * Shared provisioning utilities for the domain → repo → deploy pipeline.
 *
 * Each function calls a single external API and returns a typed result.
 * `provisionSite` orchestrates all steps and updates Supabase, handling
 * partial failures so orphaned resources are cleaned up when possible.
 */

import { createServiceClient } from "./supabase";

/* eslint-disable @typescript-eslint/no-explicit-any */

// ─── Types ──────────────────────────────────────────────────────────────────

export interface ProvisionParams {
  customerId: string;
  domainName: string;
  sitePrompt: string;
  orderId: string;
}

export interface StepResult {
  success: boolean;
  error?: string;
  data?: Record<string, unknown>;
}

export interface ProvisionResult {
  success: boolean;
  steps: {
    github: StepResult;
    vercel: StepResult;
    dns: StepResult;
    database: StepResult;
  };
  siteId?: string;
}

interface GitHubRepoResult {
  fullName: string;
  cloneUrl: string;
  htmlUrl: string;
}

interface VercelProjectResult {
  projectId: string;
  deploymentUrl: string;
}

// ─── Environment helpers ────────────────────────────────────────────────────

function requireEnv(name: string): string {
  const val = process.env[name];
  if (!val) throw new Error(`Missing required environment variable: ${name}`);
  return val;
}

// ─── Sanitization ───────────────────────────────────────────────────────────

/**
 * Converts a domain name into a valid GitHub repository name.
 * e.g. "my-business.com" → "my-business-com"
 */
export function sanitizeRepoName(domain: string): string {
  return domain
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9.-]/g, "-") // replace invalid chars
    .replace(/\./g, "-") // dots → hyphens
    .replace(/-+/g, "-") // collapse consecutive hyphens
    .replace(/^-|-$/g, ""); // trim leading/trailing hyphens
}

// ─── GitHub ─────────────────────────────────────────────────────────────────

/**
 * Creates a GitHub repo from the egowebdesign/site-template template.
 * Uses the "generate from template" API endpoint.
 */
export async function createGitHubRepo(domain: string): Promise<GitHubRepoResult> {
  const token = requireEnv("GITHUB_TOKEN");
  const templateOwner = "bri9and";
  const templateRepo = "site-template";
  const repoName = sanitizeRepoName(domain);

  const res = await fetch(
    `https://api.github.com/repos/${templateOwner}/${templateRepo}/generate`,
    {
      method: "POST",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({
        owner: "bri9and",
        name: repoName,
        description: `Site for ${domain} — provisioned by EGO`,
        private: false,
        include_all_branches: false,
      }),
    }
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(
      `GitHub repo creation failed (${res.status}): ${(err as Record<string, unknown>).message || res.statusText}`
    );
  }

  const data = await res.json();
  return {
    fullName: data.full_name,
    cloneUrl: data.clone_url,
    htmlUrl: data.html_url,
  };
}

// ─── Vercel ─────────────────────────────────────────────────────────────────

/**
 * Creates a Vercel project linked to the GitHub repo, then adds the
 * custom domain. Returns the project ID and initial deployment URL.
 */
export async function createVercelProject(
  repoName: string,
  domain: string
): Promise<VercelProjectResult> {
  const token = requireEnv("EWD_VERCEL_TOKEN");
  const teamId = requireEnv("VERCEL_TEAM_ID");
  const githubOrg = "bri9and";

  // Step 1 — Create the project linked to the GitHub repo
  const createRes = await fetch(
    `https://api.vercel.com/v10/projects?teamId=${teamId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: sanitizeRepoName(domain),
        framework: "nextjs",
        gitRepository: {
          type: "github",
          repo: `${githubOrg}/${repoName}`,
        },
        buildCommand: "next build",
        outputDirectory: ".next",
      }),
    }
  );

  if (!createRes.ok) {
    const err = await createRes.json().catch(() => ({}));
    throw new Error(
      `Vercel project creation failed (${createRes.status}): ${(err as Record<string, unknown>).message || createRes.statusText}`
    );
  }

  const project = await createRes.json();
  const projectId: string = project.id;

  // Step 2 — Add the custom domain
  const domainRes = await fetch(
    `https://api.vercel.com/v10/projects/${projectId}/domains?teamId=${teamId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: domain }),
    }
  );

  if (!domainRes.ok) {
    const err = await domainRes.json().catch(() => ({}));
    // Non-fatal — log but don't throw; the project still exists
    console.error(
      `[Provision] Warning: failed to add domain ${domain} to Vercel project: ${(err as Record<string, unknown>).message || domainRes.statusText}`
    );
  }

  // Also add www subdomain
  const wwwRes = await fetch(
    `https://api.vercel.com/v10/projects/${projectId}/domains?teamId=${teamId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: `www.${domain}` }),
    }
  );

  if (!wwwRes.ok) {
    console.error(`[Provision] Warning: failed to add www.${domain} to Vercel project`);
  }

  return {
    projectId,
    deploymentUrl: `https://${sanitizeRepoName(domain)}.vercel.app`,
  };
}

// ─── DNS (NameSilo) ─────────────────────────────────────────────────────────

/**
 * Configures DNS at NameSilo to point the domain to Vercel.
 * Adds a CNAME for the root (if supported) and www subdomain.
 */
export async function configureDNS(domain: string): Promise<void> {
  const apiKey = requireEnv("NAMESILO_API_KEY");
  const base = "https://www.namesilo.com/api";
  const vercelCname = "cname.vercel-dns.com";

  // NameSilo API — add DNS resource record
  // For root domain: use A record with Vercel's IP (76.76.21.21)
  // For www: use CNAME pointing to cname.vercel-dns.com

  // Add A record for root domain (NameSilo doesn't support CNAME at root)
  const aRecordUrl =
    `${base}/dnsAddRecord?version=1&type=json&key=${apiKey}` +
    `&domain=${encodeURIComponent(domain)}` +
    `&rrtype=A&rrhost=&rrvalue=76.76.21.21&rrttl=3600`;

  const aRes = await fetch(aRecordUrl);
  const aData = await aRes.json();
  const aCode = String(aData.reply?.code);

  if (aCode !== "300") {
    console.error(
      `[DNS] A record for ${domain} failed: ${aData.reply?.detail || `code ${aCode}`}`
    );
    // Don't throw — try www anyway
  } else {
    console.log(`[DNS] A record for ${domain} → 76.76.21.21 added`);
  }

  // Add CNAME for www subdomain
  const cnameUrl =
    `${base}/dnsAddRecord?version=1&type=json&key=${apiKey}` +
    `&domain=${encodeURIComponent(domain)}` +
    `&rrtype=CNAME&rrhost=www&rrvalue=${vercelCname}&rrttl=3600`;

  const cnameRes = await fetch(cnameUrl);
  const cnameData = await cnameRes.json();
  const cnameCode = String(cnameData.reply?.code);

  if (cnameCode !== "300") {
    throw new Error(
      `DNS CNAME for www.${domain} failed: ${cnameData.reply?.detail || `code ${cnameCode}`}`
    );
  }

  console.log(`[DNS] CNAME www.${domain} → ${vercelCname} added`);
}

// ─── Cleanup helpers ────────────────────────────────────────────────────────

async function deleteGitHubRepo(repoFullName: string): Promise<void> {
  try {
    const token = requireEnv("GITHUB_TOKEN");
    const res = await fetch(`https://api.github.com/repos/${repoFullName}`, {
      method: "DELETE",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    if (res.ok) {
      console.log(`[Cleanup] Deleted GitHub repo ${repoFullName}`);
    } else {
      console.error(`[Cleanup] Failed to delete GitHub repo ${repoFullName}: ${res.status}`);
    }
  } catch (err) {
    console.error(`[Cleanup] Error deleting GitHub repo: ${err}`);
  }
}

async function deleteVercelProject(projectId: string): Promise<void> {
  try {
    const token = requireEnv("EWD_VERCEL_TOKEN");
    const teamId = requireEnv("VERCEL_TEAM_ID");
    const res = await fetch(
      `https://api.vercel.com/v9/projects/${projectId}?teamId=${teamId}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (res.ok) {
      console.log(`[Cleanup] Deleted Vercel project ${projectId}`);
    } else {
      console.error(`[Cleanup] Failed to delete Vercel project ${projectId}: ${res.status}`);
    }
  } catch (err) {
    console.error(`[Cleanup] Error deleting Vercel project: ${err}`);
  }
}

// ─── Master orchestrator ────────────────────────────────────────────────────

/**
 * Provisions a full site: GitHub repo → Vercel project → DNS → Supabase.
 * On partial failure, cleans up any resources that were successfully created.
 */
export async function provisionSite(params: ProvisionParams): Promise<ProvisionResult> {
  const { customerId, domainName, sitePrompt, orderId } = params;
  const supabase = createServiceClient();

  const result: ProvisionResult = {
    success: false,
    steps: {
      github: { success: false },
      vercel: { success: false },
      dns: { success: false },
      database: { success: false },
    },
  };

  let repoFullName: string | null = null;
  let repoName: string | null = null;
  let vercelProjectId: string | null = null;
  let vercelUrl: string | null = null;

  // ── Step 1: Create GitHub repo ──
  console.log(`[Provision] Step 1: Creating GitHub repo for ${domainName}...`);
  try {
    const repo = await createGitHubRepo(domainName);
    repoFullName = repo.fullName;
    repoName = sanitizeRepoName(domainName);
    result.steps.github = {
      success: true,
      data: { fullName: repo.fullName, cloneUrl: repo.cloneUrl, htmlUrl: repo.htmlUrl },
    };
    console.log(`[Provision] Step 1 complete: ${repo.fullName}`);
  } catch (err) {
    result.steps.github = { success: false, error: String(err) };
    console.error(`[Provision] Step 1 failed:`, err);
    // Nothing to clean up yet
    return result;
  }

  // ── Step 2: Create Vercel project ──
  console.log(`[Provision] Step 2: Creating Vercel project for ${repoName}...`);
  try {
    const vercel = await createVercelProject(repoName!, domainName);
    vercelProjectId = vercel.projectId;
    vercelUrl = vercel.deploymentUrl;
    result.steps.vercel = {
      success: true,
      data: { projectId: vercel.projectId, deploymentUrl: vercel.deploymentUrl },
    };
    console.log(`[Provision] Step 2 complete: project ${vercel.projectId}`);
  } catch (err) {
    result.steps.vercel = { success: false, error: String(err) };
    console.error(`[Provision] Step 2 failed — cleaning up GitHub repo:`, err);
    await deleteGitHubRepo(repoFullName!);
    return result;
  }

  // ── Step 3: Configure DNS ──
  console.log(`[Provision] Step 3: Configuring DNS for ${domainName}...`);
  try {
    await configureDNS(domainName);
    result.steps.dns = { success: true };
    console.log(`[Provision] Step 3 complete: DNS configured`);
  } catch (err) {
    result.steps.dns = { success: false, error: String(err) };
    console.error(`[Provision] Step 3 failed — cleaning up:`, err);
    await deleteVercelProject(vercelProjectId!);
    await deleteGitHubRepo(repoFullName!);
    return result;
  }

  // ── Step 4: Update Supabase ──
  console.log(`[Provision] Step 4: Updating database records...`);
  try {
    // Look up the domain record
    const { data: domainRecord } = await (supabase
      .from("domains") as any)
      .select("id")
      .eq("customer_id", customerId)
      .eq("domain_name", domainName)
      .single();

    const domainId: string | null = domainRecord?.id ?? null;

    // Create or update the site record
    // Note: cast to `any` because the Database type is missing `Relationships`
    // required by @supabase/supabase-js v2.99+ generics. This is a known issue
    // across the codebase (see ai/generate/route.ts).
    const { data: site, error: siteErr } = await (supabase
      .from("sites") as any)
      .insert({
        customer_id: customerId,
        domain_id: domainId,
        name: domainName,
        github_repo: repoFullName,
        vercel_project_id: vercelProjectId,
        vercel_url: vercelUrl,
        status: "provisioning",
        template_prompt: sitePrompt,
      })
      .select("id")
      .single();

    if (siteErr) throw siteErr;

    const siteId: string = site.id;
    result.siteId = siteId;

    // Update domain status to active if we have a domain record
    if (domainId) {
      await (supabase.from("domains") as any)
        .update({ status: "active" })
        .eq("id", domainId);
    }

    // Link the order to the site
    if (orderId) {
      await (supabase.from("orders") as any)
        .update({ site_id: siteId, status: "paid" })
        .eq("id", orderId);
    }

    result.steps.database = { success: true, data: { siteId } };
    console.log(`[Provision] Step 4 complete: site ${siteId}`);
  } catch (err) {
    result.steps.database = { success: false, error: String(err) };
    console.error(`[Provision] Step 4 (database) failed:`, err);
    // Don't clean up infrastructure on DB failure — the site is live,
    // just flag it for manual DB reconciliation
    return result;
  }

  result.success = true;
  console.log(`[Provision] All steps complete for ${domainName}`);
  return result;
}
