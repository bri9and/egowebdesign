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

function generateSuggestions(name: string, tld: string, alreadyChecked: Set<string>): string[] {
  const prefixes = ["get", "my", "the", "go", "try", "use", "hey"];
  const suffixes = ["hq", "app", "site", "now", "online", "pro", "hub"];
  const altTlds = [".com", ".net", ".org", ".io", ".co", ".dev", ".us", ".pro"];

  const suggestions: string[] = [];

  // Name variations with same TLD
  for (const pre of prefixes) {
    suggestions.push(`${pre}${name}${tld}`);
  }
  for (const suf of suffixes) {
    suggestions.push(`${name}${suf}${tld}`);
  }

  // Same name, alternative TLDs
  for (const alt of altTlds) {
    if (alt !== tld) {
      suggestions.push(`${name}${alt}`);
    }
  }

  return suggestions.filter((d) => !alreadyChecked.has(d));
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
      const checkedSet = new Set(domains);
      const allSuggestions: string[] = [];

      for (const taken of unavailable) {
        const dotIdx = taken.indexOf(".");
        if (dotIdx === -1) continue;
        const name = taken.slice(0, dotIdx);
        const tld = taken.slice(dotIdx);
        const sugs = generateSuggestions(name, tld, checkedSet);
        for (const s of sugs) {
          if (!checkedSet.has(s)) {
            checkedSet.add(s);
            allSuggestions.push(s);
          }
        }
      }

      // Check suggestions in batches of 20 (NameSilo limit)
      const batches: string[][] = [];
      for (let i = 0; i < allSuggestions.length; i += 20) {
        batches.push(allSuggestions.slice(i, i + 20));
      }

      const batchResults = await Promise.all(batches.map((batch) => checkDomains(batch)));
      for (const result of batchResults) {
        suggestions.push(...result.available);
      }

      suggestions.sort((a, b) => a.price - b.price);
      // Cap suggestions to keep response reasonable
      suggestions = suggestions.slice(0, 15);
    }

    return NextResponse.json({ results: available, suggestions });
  } catch (err) {
    console.error("NameSilo API error:", err);
    return NextResponse.json({ error: "Failed to check domain availability" }, { status: 502 });
  }
}
