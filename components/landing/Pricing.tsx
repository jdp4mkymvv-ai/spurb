import { Badge } from "@/components/ui/badge";

const tiers = [
  {
    name: "Free to list",
    price: "$0",
    description: "Best for owners testing demand before committing to full service.",
    features: [
      "Initial asset intake",
      "Listing-ready asset record",
      "Basic launch workflow"
    ]
  },
  {
    name: "Spurb Standard",
    price: "10%",
    description: "Hands-off operations once the asset is rented.",
    features: [
      "Listing and inquiry management",
      "Tenant screening summaries",
      "Lease generation and payment tracking"
    ],
    featured: true
  },
  {
    name: "Spurb Pro",
    price: "8%",
    description: "Reserved for owners managing several spaces.",
    features: [
      "Portfolio reporting",
      "Priority listing review",
      "Dedicated operational support"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="section-shell mt-20">
      <div className="mb-10">
        <span className="section-kicker">Pricing</span>
        <h2 className="font-display text-4xl text-white sm:text-5xl">
          Free to list. We only win when you do.
        </h2>
        <p className="mt-4 max-w-3xl text-white/68">
          The product surface is positioned around aligned incentives: owner
          revenue first, Spurb fee second.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-[1.9rem] border p-6 ${
              tier.featured
                ? "border-[#f26f25]/40 bg-[#f26f25]/10 shadow-halo"
                : "border-white/10 bg-white/5"
            }`}
          >
            {tier.featured ? <Badge className="mb-4">Most aligned</Badge> : null}
            <h3 className="font-display text-3xl text-white">{tier.name}</h3>
            <div className="mt-4 font-display text-5xl text-white">
              {tier.price}
            </div>
            <p className="mt-4 min-h-[72px] text-white/68">{tier.description}</p>
            <div className="mt-6 space-y-3">
              {tier.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/72"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
