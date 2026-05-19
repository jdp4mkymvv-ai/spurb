"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Comment l'IA publie mes annonces ?",
    answer:
      "L'agent IA analyse le type de bien que vous déclarez, sa localisation, et les plateformes où la demande est la plus forte. Pour une voiture, il choisit Turo ou Getaround. Pour une chambre, Airbnb. Pour un garage, Neighbor ou Facebook Marketplace. La sélection de plateformes est automatique et ajustée en continu selon les performances."
  },
  {
    question: "Quels assets sont supportés ?",
    answer:
      "Spurb supporte : garages & allées, voitures inutilisées, chambres & logements, caves & débarras, jardins & terrains, et capacité de calcul (serveurs). D'autres catégories sont en cours d'intégration."
  },
  {
    question: "Comment suis-je payé ?",
    answer:
      "Spurb collecte le paiement directement via la plateforme avant que le locataire accède à votre bien. Vous recevez votre virement uniquement après encaissement effectif. Les virements sont automatiques et mensuels."
  },
  {
    question: "Et si je veux garder le contrôle ?",
    answer:
      "Vous gardez toujours le dernier mot. L'IA Spurb répond aux demandes et filtre les candidats non qualifiés, mais vous êtes notifié pour les décisions importantes : validation d'un locataire, signature d'un contrat, résolution d'un litige. Le reste est automatisé."
  },
  {
    question: "Est-ce légal ?",
    answer:
      "Oui. Spurb génère des contrats conformes à la réglementation locale pour chaque type de bien (bail de garage, contrat de location de véhicule, location courte durée…). Les modèles sont mis à jour régulièrement selon l'évolution des lois. Les deux parties signent électroniquement."
  }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-shell mt-28">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-24">
          <span className="section-kicker">FAQ</span>
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            Questions sur l&apos;IA ?{" "}
            <span className="text-white/45">On répond.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div
              key={item.question}
              className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] transition-colors hover:border-violet-500/20"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-white">{item.question}</span>
                <div
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all ${
                    open === index
                      ? "border-violet-500/50 bg-violet-500/15 text-violet-400"
                      : "border-white/15 text-white/40"
                  }`}
                >
                  <Plus
                    className={`h-3.5 w-3.5 transition-transform ${open === index ? "rotate-45" : ""}`}
                  />
                </div>
              </button>
              {open === index && (
                <div className="border-t border-white/8 px-6 pb-5 pt-4">
                  <p className="text-sm leading-relaxed text-white/55">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
