import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createServiceClient } from "@/lib/supabase";

/* eslint-disable @typescript-eslint/no-explicit-any */

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function POST(req: NextRequest) {
  // ── Auth ──────────────────────────────────────────────────────────────────
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // ── Validate input ────────────────────────────────────────────────────────
  let body: { draftId?: string; siteId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { draftId, siteId } = body;

  if (!draftId || typeof draftId !== "string") {
    return NextResponse.json(
      { error: "draftId is required" },
      { status: 400 }
    );
  }
  if (!siteId || typeof siteId !== "string") {
    return NextResponse.json(
      { error: "siteId is required" },
      { status: 400 }
    );
  }

  if (!GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "GitHub integration not configured" },
      { status: 503 }
    );
  }

  const supabase = createServiceClient();

  // ── Verify ownership ─────────────────────────────────────────────────────
  const { data: customer } = await (supabase
    .from("customers") as any)
    .select("id")
    .eq("clerk_id", userId)
    .single();

  if (!customer) {
    return NextResponse.json({ error: "Customer not found" }, { status: 404 });
  }

  // Fetch the site
  const { data: site, error: siteErr } = await (supabase
    .from("sites") as any)
    .select("id, customer_id, github_repo, name")
    .eq("id", siteId)
    .single();

  if (siteErr || !site) {
    return NextResponse.json({ error: "Site not found" }, { status: 404 });
  }

  if (site.customer_id !== customer.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (!site.github_repo) {
    return NextResponse.json(
      { error: "Site has no GitHub repository configured" },
      { status: 400 }
    );
  }

  // Fetch the draft
  const { data: draft, error: draftErr } = await (supabase
    .from("site_drafts") as any)
    .select("*")
    .eq("id", draftId)
    .single();

  if (draftErr || !draft) {
    return NextResponse.json({ error: "Draft not found" }, { status: 404 });
  }

  if (draft.customer_id !== customer.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (draft.site_id !== siteId) {
    return NextResponse.json(
      { error: "Draft does not belong to this site" },
      { status: 400 }
    );
  }

  if (!draft.generated_code) {
    return NextResponse.json(
      { error: "Draft has no generated code" },
      { status: 400 }
    );
  }

  // ── Commit to GitHub ─────────────────────────────────────────────────────
  // github_repo format: "owner/repo"
  const repo = site.github_repo;
  const filePath = "src/app/page.tsx";
  const commitMessage = `Update site: ${site.name}\n\nGenerated via KPT Designs AI builder\nDraft ID: ${draft.id}`;

  try {
    // Step 1: Check if file already exists (to get its SHA for updates)
    let existingSha: string | undefined;

    const getRes = await fetch(
      `https://api.github.com/repos/${repo}/contents/${filePath}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (getRes.ok) {
      const existing = await getRes.json();
      existingSha = existing.sha;
    }

    // Step 2: Create or update the file
    const content = Buffer.from(draft.generated_code).toString("base64");

    const putBody: Record<string, unknown> = {
      message: commitMessage,
      content,
      branch: "main",
    };

    if (existingSha) {
      putBody.sha = existingSha;
    }

    const putRes = await fetch(
      `https://api.github.com/repos/${repo}/contents/${filePath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(putBody),
      }
    );

    if (!putRes.ok) {
      const errorData = await putRes.json().catch(() => ({}));
      return NextResponse.json(
        {
          error: "GitHub commit failed",
          details: errorData,
        },
        { status: 502 }
      );
    }

    const commitData = await putRes.json();
    const commitSha = commitData.commit?.sha ?? "unknown";

    // ── Update records ────────────────────────────────────────────────────
    // Mark draft as approved
    await (supabase.from("site_drafts") as any)
      .update({
        status: "approved",
        approved_at: new Date().toISOString(),
      })
      .eq("id", draftId);

    // Update site timestamp
    await (supabase.from("sites") as any)
      .update({ updated_at: new Date().toISOString() })
      .eq("id", siteId);

    return NextResponse.json({
      success: true,
      commitSha,
      commitUrl: commitData.commit?.html_url ?? null,
      message: "Site committed and deployment triggered",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to commit to GitHub: " + String(error) },
      { status: 500 }
    );
  }
}
