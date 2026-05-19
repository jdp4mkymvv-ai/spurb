import OpenAI from "openai";

type PricingAgentInput = {
  assetType: string;
  city: string;
  features: string[];
};

function getClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY");
  }

  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

export function buildPricingPrompt(input: PricingAgentInput) {
  return [
    "You are Spurb's pricing agent.",
    "Estimate a monthly rent band for the asset and explain the pricing logic briefly.",
    `Asset type: ${input.assetType}`,
    `City: ${input.city}`,
    `Features: ${input.features.join(", ")}`
  ].join("\n");
}

export async function estimateMonthlyPrice(input: PricingAgentInput) {
  const client = getClient();
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: buildPricingPrompt(input)
  });

  return response.output_text;
}
