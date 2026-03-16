import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }

  try {
    const session = await getStripe().checkout.sessions.retrieve(id);

    return NextResponse.json({
      domain: session.metadata?.domain ?? null,
      email: session.customer_email ?? session.customer_details?.email ?? null,
      status: session.payment_status,
    });
  } catch {
    return NextResponse.json({ error: "Session not found" }, { status: 404 });
  }
}
