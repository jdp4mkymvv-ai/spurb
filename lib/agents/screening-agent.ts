import OpenAI from "openai";

type ScreeningAgentInput = {
  tenantName: string;
  scoreSignals: string[];
};

function getClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY");
  }

  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

export function buildScreeningPrompt(input: ScreeningAgentInput) {
  return [
    "You are Spurb's tenant screening agent.",
    "Summarize applicant quality for an owner in neutral, risk-aware language.",
    `Tenant: ${input.tenantName}`,
    `Signals: ${input.scoreSignals.join(", ")}`
  ].join("\n");
}

export async function summarizeTenantRisk(input: ScreeningAgentInput) {
  const client = getClient();
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: buildScreeningPrompt(input)
  });

  return response.output_text;
}
