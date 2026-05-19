import { MapPin, Radio, Banknote } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    number: "01",
    title: "Dites-nous ce que vous avez",
    body: "Dites à Spurb ce que vous possédez — garage, voiture, chambre, jardin, cave, serveur. En quelques minutes, notre IA analyse votre bien et évalue son potentiel de revenus."
  },
  {
    icon: Radio,
    number: "02",
    title: "L'IA publie partout",
    body: "L'agent Spurb rédige vos annonces, les publie simultanément sur Neighbor, Airbnb, Turo, Facebook Marketplace et les plateformes adaptées. Prix optimisé en temps réel. Candidats filtrés automatiquement."
  },
  {
    icon: Banknote,
    number: "03",
    title: "L'argent arrive chaque mois",
    body: "Contrats générés automatiquement. Paiements collectés et virés sur votre compte. Vous ne faites rien — l'IA s'occupe de tout, de la première annonce au dernier virement."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-shell mt-28">
      <div className="mb-14 text-center">
        <span className="section-kicker">Comment ça marche</span>
        <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
          Trois étapes.{" "}
          <span className="text-white/45">Zéro effort.</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Connecting line (desktop) */}
        <div className="absolute left-1/2 top-10 hidden h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent lg:block" />

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="card-hover group relative rounded-2xl border border-white/8 bg-white/[0.03] p-7"
            >
              {/* Glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-violet-600/0 transition-all group-hover:bg-violet-600/5" />

              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10">
                  <step.icon className="h-5 w-5 text-violet-400" />
                </div>
                <span className="font-display text-4xl font-semibold text-white/10">
                  {step.number}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
