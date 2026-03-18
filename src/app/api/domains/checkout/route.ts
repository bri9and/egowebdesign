import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { getStripe } from "@/lib/stripe";
import { createServiceClient } from "@/lib/supabase";
import rateLimit from "@/lib/rate-limit";

const limiter = rateLimit({ interval: 60_000, uniqueTokenPerInterval: 500 });

/* eslint-disable @typescript-eslint/no-explicit-any */

const PORKBUN_API_KEY = process.env.PORKBUN_API_KEY;
const PORKBUN_SECRET_KEY = process.env.PORKBUN_SECRET_API_KEY;
const PORKBUN_BASE = "https://api.porkbun.com/api/json/v3";
const MARKUP_MULTIPLIER = 1.75; // 75% markup on wholesale price

// Site package pricing (in cents)
const SITE_PACKAGES: Record<string, { name: string; priceCents: number; description: string }> = {
  starter: {
    name: "Starter Site Build",
    priceCents: 1650_00,
    description: "3-5 page custom website — mobile-responsive, SEO, contact form",
  },
  professional: {
    name: "Professional Site Build",
    priceCents: 2750_00,
    description: "5-10 page site with CMS, SEO optimization, and analytics",
  },
  premium: {
    name: "Premium Site Build",
    priceCents: 5500_00,
    description: "10+ pages with ecommerce, integrations, and brand strategy",
  },
};

/**
 * Fetch the wholesale price for a domain directly from Porkbun.
 * This ensures the price is authoritative and cannot be tampered with by the client.
 */
async function getVerifiedWholesalePrice(domain: string): Promise<number | null> {
  try {
    // First check availability
    const availRes = await fetch(`${PORKBUN_BASE}/domain/checkAvailability`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apikey: PORKBUN_API_KEY,
        secretapikey: PORKBUN_SECRET_KEY,
        domain,
      }),
    });
    const availData = await availRes.json();

    if (availData.status !== "SUCCESS" || availData.avail !== true) {
      return null; // Domain not available
    }

    // Get pricing from the availability response or pricing API
    if (availData.pricing?.registration) {
      const price = parseFloat(availData.pricing.registration);
      if (!isNaN(price) && price > 0) return price;
    }

    // Fallback: get from TLD pricing
    const tld = domain.slice(domain.indexOf(".") + 1);
    const pricingRes = await fetch(`${PORKBUN_BASE}/pricing/get`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ apikey: PORKBUN_API_KEY, secretapikey: PORKBUN_SECRET_KEY }),
    });
    const pricingData = await pricingRes.json();

    if (pricingData.status === "SUCCESS" && pricingData.pricing?.[tld]) {
      const price = parseFloat(pricingData.pricing[tld].registration);
      if (!isNaN(price) && price > 0) return price;
    }

    return null;
  } catch (err) {
    console.error("[Checkout] Porkbun price verification failed:", err);
    return null;
  }
}

export async function POST(req: NextRequest) {
  // ── Auth check ──
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json(
      { error: "You must be signed in to purchase a domain" },
      { status: 401 }
    );
  }

  // ── Rate limit by authenticated user ──
  const { success } = limiter.check(30, userId);
  if (!success) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    );
  }

  const body = await req.json();
  const { domain, years = 1, customerId, sitePackage } = body;

  if (!domain) {
    return NextResponse.json({ error: "domain is required" }, { status: 400 });
  }

  if (!PORKBUN_API_KEY || !PORKBUN_SECRET_KEY) {
    return NextResponse.json({ error: "Domain service not configured" }, { status: 503 });
  }

  // Validate that the customerId matches the authenticated user
  if (customerId && customerId !== userId) {
    return NextResponse.json({ error: "Customer ID mismatch" }, { status: 403 });
  }

  // Validate site package if provided
  if (sitePackage && !SITE_PACKAGES[sitePackage]) {
    return NextResponse.json({ error: "Invalid site package" }, { status: 400 });
  }

  // ── Server-side price verification ──
  // SECURITY: Never trust client-provided prices. Always verify with Porkbun.
  const wholesalePrice = await getVerifiedWholesalePrice(domain);

  if (wholesalePrice === null) {
    return NextResponse.json(
      { error: "Unable to verify domain price. The domain may no longer be available." },
      { status: 422 }
    );
  }

  // ── Ensure customer exists in Supabase ──
  const supabase = createServiceClient();
  try {
    await (supabase.from("customers") as any).upsert(
      {
        clerk_id: userId,
        email: "",
        updated_at: new Date().toISOString(),
      },
      { onConflict: "clerk_id", ignoreDuplicates: true }
    );
  } catch (err) {
    console.error("[Checkout] Failed to upsert customer:", err);
  }

  // ── Build Stripe line items ──
  const retailPrice = Math.ceil(wholesalePrice * MARKUP_MULTIPLIER * 100);

  const lineItems: Array<{
    price_data: {
      currency: string;
      product_data: { name: string; description: string };
      unit_amount: number;
    };
    quantity: number;
  }> = [
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: domain,
          description: `Domain registration — ${years} year${years > 1 ? "s" : ""} · Free WHOIS privacy`,
        },
        unit_amount: retailPrice,
      },
      quantity: 1,
    },
  ];

  // Add site package as second line item if requested
  if (sitePackage && SITE_PACKAGES[sitePackage]) {
    const pkg = SITE_PACKAGES[sitePackage];
    lineItems.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: pkg.name,
          description: pkg.description,
        },
        unit_amount: pkg.priceCents,
      },
      quantity: 1,
    });
  }

  const origin = req.nextUrl.origin;

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      metadata: {
        domain,
        years: String(years),
        wholesalePrice: String(wholesalePrice),
        customer_id: userId,
        ...(sitePackage ? { site_package: sitePackage } : {}),
        ...(sitePackage ? { site_prompt: `Build a ${SITE_PACKAGES[sitePackage].name.toLowerCase()} for ${domain}` } : {}),
      },
      success_url: `${origin}/domains/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/domains?cancelled=1`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
