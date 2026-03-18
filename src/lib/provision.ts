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

// ─── DNS (Porkbun) ──────────────────────────────────────────────────────────

/**
 * Configures DNS at Porkbun to point the domain to Vercel.
 * Adds an A record for the root and a CNAME for www.
 */
export async function configureDNS(domain: string): Promise<void> {
  const apiKey = requireEnv("PORKBUN_API_KEY");
  const secretKey = requireEnv("PORKBUN_SECRET_API_KEY");
  const base = "https://api.porkbun.com/api/json/v3";
  const vercelCname = "cname.vercel-dns.com";

  // Add A record for root domain
  const aRes = await fetch(`${base}/dns/create/${domain}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      apikey: apiKey,
      secretapikey: secretKey,
      type: "A",
      name: "",
      content: "76.76.21.21",
      ttl: "3600",
    }),
  });
  const aData = await aRes.json();

  if (aData.status !== "SUCCESS") {
    console.error(
      `[DNS] A record for ${domain} failed: ${aData.message || aData.status}`
    );
    // Don't throw — try www anyway
  }

  // Add CNAME for www subdomain
  const cnameRes = await fetch(`${base}/dns/create/${domain}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      apikey: apiKey,
      secretapikey: secretKey,
      type: "CNAME",
      name: "www",
      content: vercelCname,
      ttl: "3600",
    }),
  });
  const cnameData = await cnameRes.json();

  if (cnameData.status !== "SUCCESS") {
    throw new Error(
      `DNS CNAME for www.${domain} failed: ${cnameData.message || cnameData.status}`
    );
  }
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
    if (!res.ok) {
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
    if (!res.ok) {
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
  try {
    const repo = await createGitHubRepo(domainName);
    repoFullName = repo.fullName;
    repoName = sanitizeRepoName(domainName);
    result.steps.github = {
      success: true,
      data: { fullName: repo.fullName, cloneUrl: repo.cloneUrl, htmlUrl: repo.htmlUrl },
    };
  } catch (err) {
    result.steps.github = { success: false, error: String(err) };
    console.error(`[Provision] Step 1 failed:`, err);
    // Nothing to clean up yet
    return result;
  }

  // ── Step 2: Create Vercel project ──
  try {
    const vercel = await createVercelProject(repoName!, domainName);
    vercelProjectId = vercel.projectId;
    vercelUrl = vercel.deploymentUrl;
    result.steps.vercel = {
      success: true,
      data: { projectId: vercel.projectId, deploymentUrl: vercel.deploymentUrl },
    };
  } catch (err) {
    result.steps.vercel = { success: false, error: String(err) };
    console.error(`[Provision] Step 2 failed — cleaning up GitHub repo:`, err);
    await deleteGitHubRepo(repoFullName!);
    return result;
  }

  // ── Step 3: Configure DNS ──
  try {
    await configureDNS(domainName);
    result.steps.dns = { success: true };
  } catch (err) {
    result.steps.dns = { success: false, error: String(err) };
    console.error(`[Provision] Step 3 failed — cleaning up:`, err);
    await deleteVercelProject(vercelProjectId!);
    await deleteGitHubRepo(repoFullName!);
    return result;
  }

  // ── Step 4: Update Supabase ──
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
  } catch (err) {
    result.steps.database = { success: false, error: String(err) };
    console.error(`[Provision] Step 4 (database) failed:`, err);
    // Don't clean up infrastructure on DB failure — the site is live,
    // just flag it for manual DB reconciliation
    return result;
  }

  result.success = true;
  return result;
}
