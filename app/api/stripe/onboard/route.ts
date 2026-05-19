import { NextResponse } from "next/server";
import Stripe from "stripe";

function getStripeClient() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-06-20" as never
  });
}

export async function POST(req: Request) {
  const { email } = await req.json();
  const stripe = getStripeClient();
  const account = await stripe.accounts.create({ type: "express", email });
  const accountLink = await stripe.accountLinks.create({
    account: account.id,
    refresh_url: `${process.env.NEXTAUTH_URL}/onboard/refresh`,
    return_url: `${process.env.NEXTAUTH_URL}/onboard/success`,
    type: "account_onboarding"
  });

  return NextResponse.json({ url: accountLink.url });
}
