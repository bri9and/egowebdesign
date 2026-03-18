import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { configureDNS } from "@/lib/provision";

/**
 * POST /api/provision/dns
 *
 * Configures DNS at Porkbun to point the domain to Vercel.
 * Adds an A record for the root and a CNAME for www.
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
    await configureDNS(cleanDomain);

    return NextResponse.json({
      success: true,
      domain: cleanDomain,
      records: [
        { type: "A", host: "@", value: "76.76.21.21", ttl: 3600 },
        { type: "CNAME", host: "www", value: "cname.vercel-dns.com", ttl: 3600 },
      ],
    });
  } catch (err) {
    console.error("[DNS] Configuration failed:", err);
    return NextResponse.json(
      { error: "Failed to configure DNS", detail: String(err) },
      { status: 502 }
    );
  }
}
