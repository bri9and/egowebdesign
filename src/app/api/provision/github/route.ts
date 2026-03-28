import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createGitHubRepo, sanitizeRepoName } from "@/lib/provision";

/**
 * POST /api/provision/github
 *
 * Creates a GitHub repo from the KPT Designs site-template template.
 * Standalone endpoint for granular control or retries.
 */
export async function POST(req: NextRequest) {
  // ── Auth check ──
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // ── Parse + validate input ──
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { domainName } = body as { domainName?: string };

  if (!domainName || typeof domainName !== "string") {
    return NextResponse.json({ error: "domainName is required" }, { status: 400 });
  }

  const cleanDomain = domainName
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/.*$/, "");

  if (!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z]{2,})+$/.test(cleanDomain)) {
    return NextResponse.json({ error: "Invalid domain name" }, { status: 400 });
  }

  try {
    const repo = await createGitHubRepo(cleanDomain);

    return NextResponse.json({
      success: true,
      repoFullName: repo.fullName,
      repoName: sanitizeRepoName(cleanDomain),
      cloneUrl: repo.cloneUrl,
      htmlUrl: repo.htmlUrl,
    });
  } catch (err) {
    console.error("[GitHub] Repo creation failed:", err);
    return NextResponse.json(
      { error: "Failed to create GitHub repo", detail: String(err) },
      { status: 502 }
    );
  }
}
