import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AssetCards } from "@/components/landing/AssetCards";
import { FAQ } from "@/components/landing/FAQ";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";

export default function HomePage() {
  return (
    <main className="grain-overlay overflow-hidden pb-20">
      <Hero />
      <HowItWorks />
      <AssetCards />
      <Pricing />
      <FAQ />

      <section className="section-shell mt-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#f26f25]/20 via-white/5 to-[#50ae5c]/20 p-8 shadow-halo sm:p-12">
          <span className="section-kicker">Owner launch</span>
          <div className="grid gap-8 lg:grid-cols-[1.6fr_0.9fr] lg:items-end">
            <div>
              <h2 className="font-display text-4xl leading-none text-white sm:text-5xl">
                Your space is ready to earn. Spurb is ready to operate it.
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-white/78">
                Tell us what you have. We turn idle square footage into a
                managed monthly revenue line.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <Link
                href="/onboarding"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:translate-x-1"
              >
                List my space free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-white/80 underline decoration-white/20 underline-offset-4"
              >
                Preview the owner dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
