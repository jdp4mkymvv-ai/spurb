import { Megaphone, Search, FileText, CreditCard, BarChart2, Bell } from "lucide-react";

const features = [
  {
    icon: Megaphone,
    title: "Publication automatique",
    body: "Annonces déployées simultanément sur Neighbor, Airbnb, Turo, Facebook Marketplace et toutes les plateformes adaptées à votre bien."
  },
  {
    icon: Search,
    title: "Screening des locataires par IA",
    body: "L'agent filtre les candidats, vérifie les profils et ne vous soumet que les demandes sérieuses. Vous gardez le dernier mot."
  },
  {
    icon: FileText,
    title: "Génération automatique des contrats",
    body: "Chaque location génère un contrat juridiquement valable, adapté à votre type de bien. Signature électronique incluse."
  },
  {
    icon: CreditCard,
    title: "Encaissement mensuel automatique",
    body: "Les paiements sont collectés et virés sur votre compte chaque mois. Zéro friction, zéro intervention de votre part."
  },
  {
    icon: BarChart2,
    title: "Optimisation des prix en temps réel",
    body: "L’agent surveille la demande 24h/24 et ajuste automatiquement vos tarifs pour maximiser vos revenus sans compromettre le taux d’occupation."
  },
  {
    icon: Bell,
    title: "Notifications pour les décisions importantes",
    body: "Vous êtes averti uniquement quand une décision nécessite votre accord. Le reste ? L'IA gère."
  }
];

export function AgentFeatures() {
  return (
    <section className="section-shell mt-28">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        {/* Left */}
        <div className="lg:sticky lg:top-24">
          <span className="section-kicker">Ce que fait l&apos;agent</span>
          <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            L&apos;IA qui travaille pendant que vous dormez.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/50">
            Oubliez les annonces à rédiger, les messages à répondre, les contrats à signer. Spurb automatise l&apos;intégralité du cycle — de la publication à l&apos;encaissement.
          </p>
        </div>

        {/* Right — feature list */}
        <div className="grid gap-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-hover group flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-500/25 bg-violet-500/10 transition-colors group-hover:border-violet-500/40 group-hover:bg-violet-500/15">
                <feature.icon className="h-4.5 w-4.5 h-4 w-4 text-violet-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/48">{feature.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
