import { NextResponse } from "next/server";
import Stripe from "stripe";

function getStripeClient() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-06-20" as never
  });
}

export async function POST(req: Request) {
  const { amount, connectedAccountId } = await req.json();
  const stripe = getStripeClient();
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100),
    currency: "eur",
    application_fee_amount: Math.round(amount * 100 * 0.15),
    transfer_data: { destination: connectedAccountId }
  });

  return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}
