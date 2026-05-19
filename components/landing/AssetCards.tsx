const assets = [
  {
    title: "Garages & detached bays",
    blurb: "High-trust storage inventory with stronger rent potential and longer stays."
  },
  {
    title: "Driveways & parking pads",
    blurb: "Low-friction, fast-launch supply for commuters, overflow parking, and urban events."
  },
  {
    title: "Storage rooms & basements",
    blurb: "Excellent candidates for repeat monthly occupancy in dense neighborhoods."
  }
];

export function AssetCards() {
  return (
    <section className="section-shell mt-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <span className="section-kicker">Asset coverage</span>
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Empty square footage is a product line waiting to happen.
          </h2>
          <p className="mt-4 max-w-xl text-white/68">
            Spurb starts with the overlooked categories homeowners already own
            and already understand.
          </p>
        </div>
        <div className="grid gap-4">
          {assets.map((asset, index) => (
            <div
              key={asset.title}
              className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:grid-cols-[84px_1fr]"
            >
              <div className="font-display text-6xl leading-none text-white/18">
                {index + 1}
              </div>
              <div>
                <h3 className="font-display text-2xl text-white">
                  {asset.title}
                </h3>
                <p className="mt-3 text-white/68">{asset.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
