import Link from "next/link";
import { ArrowUpRight, CircleDollarSign, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Average monthly earnings", value: "$312" },
  { label: "Average time to first tenant", value: "4 days" },
  { label: "Upfront cost to list", value: "$0" }
];

export function Hero() {
  return (
    <section className="section-shell relative pt-6">
      <div className="rounded-[2rem] border border-white/10 bg-hero-glow px-6 pb-8 pt-6 shadow-halo sm:px-8 lg:px-10 lg:pb-12">
        <header className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl font-bold text-white">
              S
            </div>
            <div>
              <div className="font-display text-2xl text-white">Spurb</div>
              <div className="text-xs uppercase tracking-[0.22em] text-white/55">
                space income ops
              </div>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-white/68">
            <Link href="#how-it-works" className="hover:text-white">
              How it works
            </Link>
            <Link href="#pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link href="#faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="/dashboard" className="hover:text-white">
              Dashboard
            </Link>
          </nav>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-end">
          <div>
            <Badge className="mb-5">No upfront cost. No landlord busywork.</Badge>
            <h1 className="display-balance max-w-4xl font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Your garage is paying your neighbor&apos;s mortgage. Time to fix
              that.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Spurb lists your garage or driveway, screens tenants, generates
              the lease, and collects rent. You keep the income without running
              the operation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild>
                <Link href="/onboarding">
                  List my space free
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="#how-it-works">See how it works</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/58">
              No credit card required. Cancel anytime. Owner approval stays in
              the loop.
            </p>
          </div>

          <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-black/25 p-5 backdrop-blur-sm">
            <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
              <div className="mb-3 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/50">
                <Sparkles className="h-4 w-4 text-[#f9c94b]" />
                agent workflow
              </div>
              <div className="space-y-3 text-sm text-white/74">
                <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  Listing agent drafts cross-platform copy and distribution plan.
                </div>
                <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  Pricing agent estimates rent bands from asset details.
                </div>
                <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  Screening agent prepares tenant review summaries for owner approval.
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.25rem] border border-white/8 bg-white/5 p-4"
                >
                  <div className="font-display text-3xl text-white">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs leading-5 text-white/56">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/8 bg-[#50ae5c]/10 p-4 text-sm text-white/72">
              <ShieldCheck className="h-5 w-5 text-[#50ae5c]" />
              Screening, lease generation, and collections are designed as
              modular services from day one.
            </div>
            <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/8 bg-[#f26f25]/10 p-4 text-sm text-white/72">
              <CircleDollarSign className="h-5 w-5 text-[#f26f25]" />
              Clear fee model: Spurb monetizes only when the space is earning.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
