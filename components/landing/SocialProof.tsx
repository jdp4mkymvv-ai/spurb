const stats = [
  { value: "2 400", label: "assets gérés" },
  { value: "+€180k", label: "générés pour les propriétaires" },
  { value: "15%", label: "commission seulement" }
];

export function SocialProof() {
  return (
    <section className="section-shell mt-6">
      <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-6 py-5">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center sm:py-2 ${
                i > 0 ? "sm:border-l sm:border-white/8" : ""
              }`}
            >
              <div className="font-display text-3xl font-semibold text-white sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-white/45">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
