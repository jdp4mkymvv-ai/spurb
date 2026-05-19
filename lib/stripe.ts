import Stripe from "stripe";

let stripeServerClient: Stripe | null = null;

export function getStripeServerClient() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing STRIPE_SECRET_KEY");
  }

  stripeServerClient ??= new Stripe(process.env.STRIPE_SECRET_KEY);
  return stripeServerClient;
}

export const stripePublishableKey =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "";
