"use client";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="section-shell relative pt-8">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div
          className="animate-blob absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-[100px]"
        />
        <div
          className="animate-blob-delay absolute top-10 right-1/4 h-72 w-72 rounded-full bg-violet-400/15 blur-[80px]"
        />
      </div>

      {/* Nav */}
      <nav className="relative z-10 mb-20 flex items-center justify-between animate-fade-up">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-sm font-bold text-white shadow-halo">
            S
          </div>
          <span className="font-display text-xl font-semibold text-white tracking-tight">Spurb</span>
        </div>
        <div className="hidden items-center gap-6 text-sm text-white/55 sm:flex">
          <Link href="#how-it-works" className="transition hover:text-white">Comment ça marche</Link>
          <Link href="#assets" className="transition hover:text-white">Assets</Link>
          <Link href="#pricing" className="transition hover:text-white">Tarifs</Link>
          <Link href="#faq" className="transition hover:text-white">FAQ</Link>
        </div>
        <Link
          href="/onboarding"
          className="rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500"
        >
          Commencer
        </Link>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-4xl pb-24 text-center">
        {/* Badge */}
        <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 badge-shimmer px-4 py-2 text-sm font-medium text-violet-300">
          <Zap className="h-3.5 w-3.5 fill-current" />
          100% piloté par IA
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-1 display-balance font-display text-6xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl">
          Vos biens travaillent.{" "}
          <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
            Vous, non.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-2 mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
          Spurb est un agent IA qui monétise automatiquement tout ce que vous
          possédez — garages, voitures, chambres, jardins.{" "}
          <span className="text-white/85">Zéro effort. Revenus mensuels.</span>
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-3 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/onboarding"
            onClick={() => window.posthog?.capture("cta_clicked", { location: "hero_primary" })}
            className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-halo transition hover:bg-violet-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.45)]"
          >
            Commencer — c&apos;est gratuit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/75 transition hover:border-white/30 hover:text-white"
          >
            Voir comment ça marche
          </Link>
        </div>

        {/* Trust line */}
        <p className="animate-fade-in mt-6 text-sm text-white/35">
          Sans frais fixes · Commission uniquement sur les revenus générés · Annulez quand vous voulez
        </p>
      </div>
    </section>
  );
}
