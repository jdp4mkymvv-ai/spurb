import { ArrowUpRight } from "lucide-react";

type AssetCardProps = {
  title: string;
  type: string;
  status: string;
  monthly: string;
  occupancy: string;
};

export function AssetCard({
  title,
  type,
  status,
  monthly,
  occupancy
}: AssetCardProps) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-white/48">
            {type}
          </div>
          <h3 className="mt-2 font-display text-2xl text-white">{title}</h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-white/35" />
      </div>
      <div className="mt-5 grid gap-3 text-sm text-white/70">
        <div className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
          {status}
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
          <span>Projected income</span>
          <span className="font-semibold text-white">{monthly}</span>
        </div>
        <div className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
          {occupancy}
        </div>
      </div>
    </div>
  );
}
