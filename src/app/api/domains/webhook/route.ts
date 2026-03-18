import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createServiceClient } from "@/lib/supabase";
import { provisionSite } from "@/lib/provision";
import Stripe from "stripe";

/* eslint-disable @typescript-eslint/no-explicit-any */

const PORKBUN_API_KEY = process.env.PORKBUN_API_KEY;
const PORKBUN_SECRET_KEY = process.env.PORKBUN_SECRET_API_KEY;
const PORKBUN_BASE = "https://api.porkbun.com/api/json/v3";
const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
const MARKUP_MULTIPLIER = 1.75; // 75% markup — must match checkout route

// Site package pricing (in cents) — must match checkout route
const SITE_PACKAGE_PRICES: Record<string, number> = {
  starter: 1650_00,
  professional: 2750_00,
  premium: 5500_00,
};

async function registerDomain(domain: string, years: number): Promise<{ success: boolean; error?: string }> {
  const res = await fetch(`${PORKBUN_BASE}/domain/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      apikey: PORKBUN_API_KEY,
      secretapikey: PORKBUN_SECRET_KEY,
      domain,
      years,
      whoisPrivacy: "1",
      autoRenew: "0",
    }),
  });

  const data = await res.json();

  if (data.status === "SUCCESS") {
    return { success: true };
  }

  return { success: false, error: data.message || `Porkbun registration failed: ${data.status}` };
}

/**
 * After a successful domain registration, record it in Supabase and
 * trigger the full provisioning pipeline if a site package was purchased.
 */
async function handleSuccessfulPurchase(session: Stripe.Checkout.Session): Promise<void> {
  const metadata = session.metadata;
  if (!metadata?.domain) return;

  const domain = metadata.domain;
  const years = parseInt(metadata.years || "1", 10);
  const clerkId = metadata.customer_id || null;
  const sitePackage = metadata.site_package || null;
  const sitePrompt = metadata.site_prompt || null;
  const wholesalePrice = parseFloat(metadata.wholesalePrice || "0");
  const customerEmail = session.customer_details?.email || session.customer_email || "";

  const supabase = createServiceClient();

  // ── Step 1: Upsert customer in Supabase ──
  let customerId: string | null = null;

  if (clerkId) {
    try {
      const { data: existingCustomer } = await (supabase
        .from("customers") as any)
        .select("id")
        .eq("clerk_id", clerkId)
        .single();

      if (existingCustomer?.id) {
        customerId = existingCustomer.id;
        if (customerEmail) {
          await (supabase.from("customers") as any)
            .update({ email: customerEmail, updated_at: new Date().toISOString() })
            .eq("id", customerId);
        }
      } else {
        const { data: newCustomer, error: custErr } = await (supabase
          .from("customers") as any)
          .insert({
            clerk_id: clerkId,
            email: customerEmail,
            updated_at: new Date().toISOString(),
          })
          .select("id")
          .single();

        if (custErr) {
          console.error(`[Webhook] Failed to create customer: ${custErr.message}`);
        } else {
          customerId = newCustomer.id;
        }
      }
    } catch (err) {
      console.error(`[Webhook] Customer upsert error:`, err);
    }
  }

  // ── Step 2: Register domain at Porkbun ──
  const regResult = await registerDomain(domain, years);

  if (!regResult.success) {
    console.error(`[Webhook] FAILED to register ${domain}: ${regResult.error}`);
    console.error(`[Webhook] Session ID: ${session.id}, Customer: ${customerEmail}`);
    // TODO: Send alert email to admin, issue refund if needed
    return;
  }

  // ── Step 3: Create domain record in Supabase ──
  let domainId: string | null = null;

  if (customerId) {
    try {
      const expiresAt = new Date();
      expiresAt.setFullYear(expiresAt.getFullYear() + years);

      const { data: domainRecord, error: domainErr } = await (supabase.from("domains") as any).insert({
        customer_id: customerId,
        domain_name: domain,
        registrar: "porkbun",
        status: "active",
        purchased_at: new Date().toISOString(),
        expires_at: expiresAt.toISOString(),
        namesilo_order_id: session.id,
      })
        .select("id")
        .single();

      if (domainErr) {
        console.error(`[Webhook] Failed to save domain record: ${domainErr.message}`);
      } else {
        domainId = domainRecord.id;
      }
    } catch (err) {
      console.error(`[Webhook] Database error saving domain:`, err);
    }
  }

  // ── Step 4: Create domain order record ──
  let domainOrderId: string | null = null;

  if (customerId) {
    try {
      const domainRetailCents = Math.ceil(wholesalePrice * MARKUP_MULTIPLIER * 100);
      const { data: orderRecord, error: orderErr } = await (supabase.from("orders") as any).insert({
        customer_id: customerId,
        domain_id: domainId,
        type: "domain",
        amount_cents: domainRetailCents,
        currency: "usd",
        stripe_payment_intent_id: session.payment_intent as string,
        status: "paid",
      })
        .select("id")
        .single();

      if (orderErr) {
        console.error(`[Webhook] Failed to save domain order: ${orderErr.message}`);
      } else {
        domainOrderId = orderRecord.id;
      }
    } catch (err) {
      console.error(`[Webhook] Database error saving order:`, err);
    }
  }

  // ── Step 5: If site package was purchased, create site order and trigger provisioning ──
  if (customerId && sitePackage && sitePrompt) {
    let siteOrderId: string | null = null;

    try {
      const sitePriceCents = SITE_PACKAGE_PRICES[sitePackage] || 0;
      const { data: siteOrder, error: siteOrderErr } = await (supabase.from("orders") as any).insert({
        customer_id: customerId,
        domain_id: domainId,
        type: "site_design",
        amount_cents: sitePriceCents,
        currency: "usd",
        stripe_payment_intent_id: session.payment_intent as string,
        status: "paid",
      })
        .select("id")
        .single();

      if (siteOrderErr) {
        console.error(`[Webhook] Failed to save site order: ${siteOrderErr.message}`);
      } else {
        siteOrderId = siteOrder.id;
      }
    } catch (err) {
      console.error(`[Webhook] Database error saving site order:`, err);
    }

    if (siteOrderId) {
      try {
        const result = await provisionSite({
          customerId,
          domainName: domain,
          sitePrompt,
          orderId: siteOrderId,
        });

        if (!result.success) {
          console.error(`[Webhook] Provisioning partially failed for ${domain}:`, result.steps);
        }
      } catch (err) {
        console.error(`[Webhook] Provisioning error for ${domain}:`, err);
      }
    }
  }
}

export async function POST(req: NextRequest) {
  const body = await req.text();

  let event: Stripe.Event;
  if (!WEBHOOK_SECRET) {
    if (process.env.NODE_ENV === "production") {
      console.error("[Domains Webhook] STRIPE_WEBHOOK_SECRET is not set in production");
      return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
    }
    event = JSON.parse(body) as Stripe.Event;
  } else {
    const sig = req.headers.get("stripe-signature");
    if (!sig) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }
    try {
      event = getStripe().webhooks.constructEvent(body, sig, WEBHOOK_SECRET);
    } catch (err) {
      console.error("[Domains Webhook] Signature verification failed:", err);
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status === "paid") {
      handleSuccessfulPurchase(session).catch((err) => {
        console.error("[Webhook] Unhandled error in purchase handler:", err);
      });
    }
  }

  return NextResponse.json({ received: true });
}
