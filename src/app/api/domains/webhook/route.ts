import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import Stripe from "stripe";

const NAMESILO_KEY = process.env.NAMESILO_API_KEY;
const NAMESILO_BASE = "https://www.namesilo.com/api";
const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

async function registerDomain(domain: string, years: number): Promise<{ success: boolean; error?: string }> {
  const url = `${NAMESILO_BASE}/registerDomain?version=1&type=json&key=${NAMESILO_KEY}&domain=${encodeURIComponent(domain)}&years=${years}&private=1&auto_renew=0`;

  const res = await fetch(url);
  const data = await res.json();
  const code = String(data.reply?.code);

  if (code === "300" || code === "301" || code === "302") {
    return { success: true };
  }

  return { success: false, error: data.reply?.detail || `NameSilo error code ${code}` };
}

export async function POST(req: NextRequest) {
  const body = await req.text();

  // Verify webhook signature if secret is configured
  let event: Stripe.Event;
  if (WEBHOOK_SECRET) {
    const sig = req.headers.get("stripe-signature");
    if (!sig) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }
    try {
      event = getStripe().webhooks.constructEvent(body, sig, WEBHOOK_SECRET);
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }
  } else {
    // In test mode without webhook secret, parse directly
    event = JSON.parse(body) as Stripe.Event;
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status === "paid" && session.metadata) {
      const { domain, years } = session.metadata;

      if (domain) {
        console.log(`[Domain] Registering ${domain} for ${years} year(s)...`);
        const result = await registerDomain(domain, parseInt(years || "1", 10));

        if (result.success) {
          console.log(`[Domain] Successfully registered ${domain}`);
        } else {
          // Log the failure — manual intervention needed
          console.error(`[Domain] FAILED to register ${domain}: ${result.error}`);
          console.error(`[Domain] Session ID: ${session.id}, Customer: ${session.customer_email}`);
          // TODO: Send alert email to admin, issue refund if needed
        }
      }
    }
  }

  return NextResponse.json({ received: true });
}
