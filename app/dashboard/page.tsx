import Link from "next/link";
import { ArrowRight, CalendarRange, Wallet } from "lucide-react";
import { AssetCard } from "@/components/dashboard/AssetCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const assets = [
  {
    id: "garage-01",
    title: "Detached garage in Richmond",
    type: "Garage",
    status: "Live on 2 platforms",
    monthly: "$285/mo",
    occupancy: "Occupied until Aug 31"
  },
  {
    id: "driveway-02",
    title: "Two-car driveway in East Austin",
    type: "Driveway",
    status: "3 vetted leads pending approval",
    monthly: "$140/mo",
    occupancy: "Open next week"
  }
];

export default function DashboardPage() {
  return (
    <main className="section-shell py-10">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Badge className="mb-4">Owner dashboard</Badge>
          <h1 className="font-display text-4xl text-white sm:text-5xl">
            Revenue, listings, and tenant activity in one place.
          </h1>
          <p className="mt-4 max-w-3xl text-white/72">
            This initial dashboard gives Spurb owners a clean operating view:
            live assets, projected income, and the leasing pipeline.
          </p>
        </div>
        <Button asChild>
          <Link href="/onboarding">
            Add a new asset
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <div className="mb-3 flex items-center gap-2 text-white/70">
            <Wallet className="h-4 w-4" />
            Monthly projected income
          </div>
          <div className="font-display text-4xl text-white">$425</div>
          <p className="mt-2 text-sm text-white/60">After Spurb fee estimate</p>
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <div className="mb-3 flex items-center gap-2 text-white/70">
            <CalendarRange className="h-4 w-4" />
            Next payout window
          </div>
          <div className="font-display text-4xl text-white">June 1</div>
          <p className="mt-2 text-sm text-white/60">ACH transfer pending 2 leases</p>
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <div className="mb-3 text-white/70">Lead screening</div>
          <div className="font-display text-4xl text-white">4</div>
          <p className="mt-2 text-sm text-white/60">
            Applicants ready for owner approval
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        <RevenueChart />
        <div className="rounded-[2rem] border border-white/10 bg-[#0c1423] p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-display text-2xl text-white">Your assets</h2>
              <p className="mt-1 text-sm text-white/62">
                Launch status and occupancy at a glance.
              </p>
            </div>
            <Badge variant="secondary">2 active</Badge>
          </div>
          <div className="space-y-4">
            {assets.map((asset) => (
              <AssetCard key={asset.id} {...asset} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
