"use client";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const included = [
  "Publication automatique sur toutes les plateformes",
  "Optimisation du prix en temps réel",
  "Filtrage et vérification des locataires",
  "Génération de contrats et e-signatures",
  "Collecte des paiements et virements automatiques",
  "Tableau de bord de suivi des revenus",
  "Support IA disponible 24h/24"
];

export function Pricing() {
  return (
    <section id="pricing" className="section-shell mt-28">
      <div className="mb-14 text-center">
        <span className="section-kicker">Tarifs</span>
        <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
          Aucun frais fixe.{" "}
          <span className="text-white/45">On gagne quand vous gagnez.</span>
        </h2>
      </div>

      <div className="mx-auto max-w-lg">
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-b from-violet-500/10 to-transparent p-8 shadow-halo">
          {/* Background glow */}
          <div className="pointer-events-none absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[60px]" />

          <div className="relative">
            {/* Plan name */}
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-violet-400">
              Plan unique
            </div>

            {/* Price */}
            <div className="mt-6 flex items-end gap-2">
              <span className="font-display text-8xl font-semibold text-white">15%</span>
              <span className="mb-3 text-sm text-white/45">des revenus générés</span>
            </div>

            <p className="mt-2 text-base font-medium text-white/60">
              Vous ne payez que si vous gagnez
            </p>

            {/* Example calculation */}
            <div className="mt-6 rounded-2xl border border-white/8 bg-white/5 p-4">
              <div className="text-sm text-white/45">Exemple concret</div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-white/70">Garage — 300 €/mois générés</span>
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-white/8 pt-2">
                <span className="text-sm font-medium text-white">Vous encaissez</span>
                <span className="font-display text-xl font-semibold text-white">255 €</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/40">Commission Spurb</span>
                <span className="text-sm text-white/40">45 €</span>
              </div>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-500/20">
                    <Check className="h-2.5 w-2.5 text-violet-400" />
                  </div>
                  <span className="text-sm text-white/60">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/onboarding"
              onClick={() => (typeof window !== "undefined" && window.posthog?.capture("cta_clicked", { location: "pricing" }))}
              className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-halo transition hover:bg-violet-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]"
            >
              Commencer gratuitement
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <p className="mt-4 text-center text-xs text-white/30">
              Sans carte bancaire · Commencer est gratuit · Vous payez uniquement quand vous gagnez
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
