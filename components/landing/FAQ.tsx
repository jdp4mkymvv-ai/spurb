const faqs = [
  {
    question: "What kinds of assets can Spurb manage first?",
    answer:
      "The initial data model supports garages, driveways, storage spaces, rooms, apartments, gardens, basements, and even compute capacity."
  },
  {
    question: "How does owner approval work?",
    answer:
      "The screening flow is designed so Spurb summarizes applicants and the owner remains the final decision-maker before a lease starts."
  },
  {
    question: "Is Stripe already wired end to end?",
    answer:
      "This initialization includes the server webhook scaffold and Stripe utility layer. Product setup and subscription flows can be added in the next task."
  },
  {
    question: "Can this foundation support live database-backed onboarding?",
    answer:
      "Yes. Prisma schema, client setup, and `POST /api/assets` are ready so the onboarding form can be connected to persistence next."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="section-shell mt-20">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="section-kicker">FAQ</span>
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            The obvious questions, answered cleanly.
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-6 open:bg-white/8"
            >
              <summary className="cursor-pointer list-none font-display text-2xl text-white">
                {item.question}
              </summary>
              <p className="mt-4 max-w-3xl text-white/68">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
