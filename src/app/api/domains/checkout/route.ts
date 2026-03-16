import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

const NAMESILO_KEY = process.env.NAMESILO_API_KEY;
const MARKUP_MULTIPLIER = 1.30; // 30% markup on wholesale price

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { domain, wholesalePrice, years = 1 } = body;

  if (!domain || !wholesalePrice) {
    return NextResponse.json({ error: "domain and wholesalePrice are required" }, { status: 400 });
  }

  if (!NAMESILO_KEY) {
    return NextResponse.json({ error: "Domain service not configured" }, { status: 503 });
  }

  // Calculate retail price with markup (in cents for Stripe)
  const retailPrice = Math.ceil(wholesalePrice * MARKUP_MULTIPLIER * 100);

  const origin = req.nextUrl.origin;

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
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
      ],
      metadata: {
        domain,
        years: String(years),
        wholesalePrice: String(wholesalePrice),
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
