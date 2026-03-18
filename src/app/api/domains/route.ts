import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.PORKBUN_API_KEY;
const SECRET_KEY = process.env.PORKBUN_SECRET_API_KEY;
const BASE_URL = "https://api.porkbun.com/api/json/v3";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface AvailableDomain {
  domain: string;
  available: true;
  price: number;
  premium: boolean;
}

/**
 * Check a single domain's availability and pricing via Porkbun.
 */
async function checkDomain(domain: string): Promise<{ available: boolean; price: number }> {
  const res = await fetch(`${BASE_URL}/domain/checkAvailability`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      apikey: API_KEY,
      secretapikey: SECRET_KEY,
      domain,
    }),
  });
  const data = await res.json();

  if (data.status === "SUCCESS" && data.avail === true) {
    // Price is in the pricing endpoint; Porkbun returns registration price
    const price = parseFloat(data.pricing?.registration || "0");
    return { available: true, price };
  }

  return { available: false, price: 0 };
}

/**
 * Get pricing for a TLD from Porkbun's pricing API.
 */
async function getTldPricing(): Promise<Record<string, number>> {
  const res = await fetch(`${BASE_URL}/pricing/get`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ apikey: API_KEY, secretapikey: SECRET_KEY }),
  });
  const data = await res.json();

  if (data.status !== "SUCCESS" || !data.pricing) return {};

  const prices: Record<string, number> = {};
  for (const [tld, info] of Object.entries(data.pricing)) {
    prices[tld] = parseFloat((info as any).registration || "0");
  }
  return prices;
}

// Cache TLD pricing for 5 minutes
let pricingCache: Record<string, number> = {};
let pricingCacheTime = 0;
const PRICING_CACHE_TTL = 5 * 60 * 1000;

async function getCachedPricing(): Promise<Record<string, number>> {
  if (Date.now() - pricingCacheTime < PRICING_CACHE_TTL && Object.keys(pricingCache).length > 0) {
    return pricingCache;
  }
  pricingCache = await getTldPricing();
  pricingCacheTime = Date.now();
  return pricingCache;
}

/**
 * Check multiple domains in parallel via Porkbun.
 */
async function checkDomains(domains: string[]): Promise<{ available: AvailableDomain[]; unavailable: string[] }> {
  const pricing = await getCachedPricing();

  const results = await Promise.allSettled(
    domains.map(async (domain) => {
      const res = await fetch(`${BASE_URL}/domain/checkAvailability`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apikey: API_KEY,
          secretapikey: SECRET_KEY,
          domain,
        }),
      });
      const data = await res.json();
      return { domain, data };
    })
  );

  const available: AvailableDomain[] = [];
  const unavailable: string[] = [];

  for (const result of results) {
    if (result.status === "rejected") continue;
    const { domain, data } = result.value;

    if (data.status === "SUCCESS" && data.avail === true) {
      // Get price from pricing cache by TLD
      const tld = domain.slice(domain.indexOf(".") + 1);
      const price = pricing[tld] || parseFloat(data.pricing?.registration || "0");
      available.push({
        domain,
        available: true,
        price,
        premium: data.premium === true,
      });
    } else {
      unavailable.push(domain);
    }
  }

  return { available, unavailable };
}

function generateSuggestions(baseName: string, alreadyChecked: Set<string>): string[] {
  const prefixes = ["get", "my", "the", "go", "try", "use", "hey"];
  const suffixes = ["hq", "app", "site", "now", "zone", "hub", "spot", "lab", "club", "place"];
  const topTlds = [".com", ".net", ".io"];

  const suggestions: string[] = [];
  const seen = new Set(alreadyChecked);

  const add = (d: string) => {
    if (!seen.has(d) && suggestions.length < 40) {
      seen.add(d);
      suggestions.push(d);
    }
  };

  // 1. Prefix variations across top TLDs
  for (const pre of prefixes) {
    for (const tld of topTlds) add(`${pre}${baseName}${tld}`);
  }

  // 2. Suffix variations across top TLDs
  for (const suf of suffixes) {
    for (const tld of topTlds) add(`${baseName}${suf}${tld}`);
  }

  // 3. Hyphenated split — try inserting a hyphen at each vowel/consonant boundary
  for (let i = 2; i < baseName.length - 2; i++) {
    const left = baseName.slice(0, i);
    const right = baseName.slice(i);
    if (left.length >= 3 && right.length >= 3) {
      add(`${left}-${right}.com`);
      if (suggestions.length >= 40) break;
    }
  }

  // 4. Plural / minor mutations
  if (!baseName.endsWith("s")) {
    add(`${baseName}s.com`);
    add(`${baseName}s.net`);
  }

  return suggestions;
}

export async function POST(req: NextRequest) {
  if (!API_KEY || !SECRET_KEY) {
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
      const baseName = hasDot ? clean.slice(0, clean.indexOf(".")) : clean;
      const checkedSet = new Set(domains);
      const toCheck = generateSuggestions(baseName, checkedSet);

      if (toCheck.length > 0) {
        try {
          // Check in batches of 20, max 2 batches
          const batch1 = toCheck.slice(0, 20);
          const batch2 = toCheck.slice(20, 40);
          const r1 = await checkDomains(batch1);
          suggestions.push(...r1.available);
          if (batch2.length > 0) {
            const r2 = await checkDomains(batch2);
            suggestions.push(...r2.available);
          }
          suggestions.sort((a, b) => a.price - b.price);
          suggestions = suggestions.slice(0, 15);
        } catch {
          // Suggestion check failed — still return the main results
        }
      }
    }

    return NextResponse.json({ results: available, suggestions });
  } catch (err) {
    console.error("Porkbun API error:", err);
    return NextResponse.json({ error: "Failed to check domain availability" }, { status: 502 });
  }
}
