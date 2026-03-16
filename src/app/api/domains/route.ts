import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.NAMESILO_API_KEY;
const BASE_URL = "https://www.namesilo.com/api";

/* eslint-disable @typescript-eslint/no-explicit-any */

// NameSilo response normalizers — handles inconsistent single vs array formats
const normalizeAvailable = (raw: any): any[] => {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  if (raw.domain && typeof raw.domain === "string" && raw.price !== undefined) return [raw];
  if (raw.domain) {
    const d = raw.domain;
    return Array.isArray(d) ? d.map((x: any) => (typeof x === "string" ? { domain: x } : x)) : [typeof d === "string" ? { domain: d } : d];
  }
  return [];
};

const normalizeUnavailable = (raw: any): string[] => {
  if (!raw) return [];
  if (typeof raw === "string") return [raw];
  if (Array.isArray(raw)) return raw.map((x: any) => (typeof x === "string" ? x : x.domain));
  if (raw.domain) {
    const d = raw.domain;
    if (typeof d === "string") return [d];
    if (Array.isArray(d)) return d;
  }
  return [];
};

interface AvailableDomain {
  domain: string;
  available: true;
  price: number;
  premium: boolean;
}

async function checkDomains(domains: string[]): Promise<{ available: AvailableDomain[]; unavailable: string[] }> {
  const url = `${BASE_URL}/checkRegisterAvailability?version=1&type=json&key=${API_KEY}&domains=${domains.join(",")}`;
  const res = await fetch(url, { next: { revalidate: 0 } });
  const data = await res.json();
  const reply = data.reply;

  if (String(reply.code) !== "300") {
    return { available: [], unavailable: [] };
  }

  const avail = normalizeAvailable(reply.available);
  const unavail = normalizeUnavailable(reply.unavailable);

  return {
    available: avail.map((d: any) => ({
      domain: d.domain,
      available: true as const,
      price: typeof d.price === "number" ? d.price : parseFloat(d.price),
      premium: d.premium === 1 || d.premium === "1",
    })),
    unavailable: unavail,
  };
}

function generateSuggestions(baseName: string, alreadyChecked: Set<string>): string[] {
  const prefixes = ["get", "my", "the", "go", "try", "use", "hey"];
  const suffixes = ["hq", "app", "site", "now", "online", "pro", "hub"];

  const suggestions: string[] = [];
  const seen = new Set(alreadyChecked);

  const add = (d: string) => {
    if (!seen.has(d)) {
      seen.add(d);
      suggestions.push(d);
    }
  };

  // Prefix/suffix variations — only .com (the most popular TLD)
  for (const pre of prefixes) add(`${pre}${baseName}.com`);
  for (const suf of suffixes) add(`${baseName}${suf}.com`);

  return suggestions;
}

export async function POST(req: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json({ error: "Domain service not configured" }, { status: 503 });
  }

  const body = await req.json();
  const { query } = body;

  if (!query || typeof query !== "string") {
    return NextResponse.json({ error: "query is required" }, { status: 400 });
  }

  const clean = query
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/.*$/, "");

  const hasDot = clean.includes(".");
  const tlds = [".com", ".net", ".org", ".io", ".co", ".dev", ".us", ".biz", ".info", ".pro"];
  const domains = hasDot ? [clean] : tlds.map((tld) => clean + tld);

  try {
    // First pass: check the exact domains
    const { available, unavailable } = await checkDomains(domains);

    // Sort available by price
    available.sort((a, b) => a.price - b.price);

    // If any domains were taken, generate and check suggestions
    let suggestions: AvailableDomain[] = [];
    if (unavailable.length > 0) {
      // Extract base name from the query (not per-TLD — avoids redundant variations)
      const baseName = hasDot ? clean.slice(0, clean.indexOf(".")) : clean;
      const checkedSet = new Set(domains);
      const toCheck = generateSuggestions(baseName, checkedSet);

      if (toCheck.length > 0) {
        try {
          const sugResult = await checkDomains(toCheck);
          suggestions = sugResult.available;
          suggestions.sort((a, b) => a.price - b.price);
          suggestions = suggestions.slice(0, 12);
        } catch {
          // Suggestion check failed — still return the main results
        }
      }
    }

    return NextResponse.json({ results: available, suggestions });
  } catch (err) {
    console.error("NameSilo API error:", err);
    return NextResponse.json({ error: "Failed to check domain availability" }, { status: 502 });
  }
}
