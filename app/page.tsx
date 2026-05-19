import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { AssetCards } from "@/components/landing/AssetCards";
import { AgentFeatures } from "@/components/landing/AgentFeatures";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <main className="grain-overlay overflow-hidden">
      <Hero />
      <SocialProof />
      <HowItWorks />
      <AssetCards />
      <AgentFeatures />
      <Pricing />
      <FAQ />

      {/* Final CTA */}
      <section className="section-shell mt-28">
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/25 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent p-10 text-center sm:p-16">
          {/* Background blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-violet-500/15 blur-[80px]" />
            <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-violet-600/10 blur-[60px]" />
          </div>

          <div className="relative">
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Laissez votre IA travailler{" "}
              <span className="text-white/45">pendant que vous dormez.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/55">
              Dites à Spurb ce que vous possédez. L&apos;agent fait le reste — annonces, contrats, paiements. Vous encaissez. C&apos;est tout.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/onboarding"
                className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-halo transition hover:bg-violet-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]"
              >
                Commencer gratuitement
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm text-white/45 transition hover:text-white/75"
              >
                Voir comment ça marche →
              </Link>
            </div>
            <p className="mt-5 text-xs text-white/25">
              Sans carte bancaire · Sans frais fixes · Commission de 15% sur les revenus générés uniquement
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
