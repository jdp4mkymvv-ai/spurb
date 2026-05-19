const assets = [
  {
    emoji: "🏠",
    title: "Garage & Stockage",
    body: "Transformez votre espace inutilisé en revenu mensuel garanti. Spurb liste sur Neighbor et les plateformes de stockage."
  },
  {
    emoji: "🚗",
    title: "Voiture inutilisée",
    body: "Votre voiture dort dans l'allée ? L'IA la déploie sur Turo, Getaround. Assurance, contrats et paiements inclus."
  },
  {
    emoji: "🛏",
    title: "Chambre / Logement",
    body: "Spurb crée et gère votre annonce Airbnb, règle les disponibilités, répond aux voyageurs et encaisse les réservations."
  },
  {
    emoji: "📦",
    title: "Cave & Débarras",
    body: "Même quelques mètres carrés ont de la valeur. L'IA optimise le prix et trouve les bons locataires automatiquement."
  },
  {
    emoji: "🌱",
    title: "Jardin & Terrain",
    body: "Location pour événements, potager partagé, stationnement. Spurb explore toutes les options et déploie les annonces."
  },
  {
    emoji: "⚡",
    title: "Compute / Serveur",
    body: "De la capacité de calcul inutilisée ? Spurb la connecte aux marketplaces de compute distribué pour des revenus passifs."
  }
];

export function AssetCards() {
  return (
    <section id="assets" className="section-shell mt-28">
      <div className="mb-14 text-center">
        <span className="section-kicker">Assets supportés</span>
        <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
          Tout ce que vous possédez{" "}
          <br className="hidden sm:block" />
          <span className="text-white/45">peut travailler pour vous.</span>
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {assets.map((asset) => (
          <div
            key={asset.title}
            className="card-hover group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-6"
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-violet-500/30 transition-opacity group-hover:opacity-100" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/0 blur-2xl transition-all group-hover:bg-violet-500/15" />

            <div className="mb-4 text-4xl">{asset.emoji}</div>
            <h3 className="font-display text-lg font-semibold text-white">
              {asset.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/48">
              {asset.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
