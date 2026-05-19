import OpenAI from "openai";

type ListingAgentInput = {
  assetType: string;
  title: string;
  address: string;
  description?: string;
};

function getClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY");
  }

  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

export function buildListingPrompt(input: ListingAgentInput) {
  return [
    "You are Spurb's listing agent.",
    "Write concise, conversion-oriented marketplace copy for an underused homeowner asset.",
    `Asset type: ${input.assetType}`,
    `Title: ${input.title}`,
    `Address: ${input.address}`,
    `Description: ${input.description ?? "No additional notes provided."}`,
    "Return a title, short summary, and 4 bullet highlights."
  ].join("\n");
}

export async function generateListingDraft(input: ListingAgentInput) {
  const client = getClient();
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: buildListingPrompt(input)
  });

  return response.output_text;
}
