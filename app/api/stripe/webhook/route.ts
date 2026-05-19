import type Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { getStripeServerClient } from "@/lib/stripe";

export async function POST(request: Request) {
  const payload = await request.text();
  const signature = headers().get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event | Record<string, unknown>;

  try {
    if (signature && webhookSecret) {
      event = getStripeServerClient().webhooks.constructEvent(
        payload,
        signature,
        webhookSecret
      );
    } else {
      event = JSON.parse(payload) as Record<string, unknown>;
    }
  } catch (error) {
    return NextResponse.json(
      {
        received: false,
        error: error instanceof Error ? error.message : "Invalid webhook payload"
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    received: true,
    type: "type" in event ? event.type : "unverified_event"
  });
}
