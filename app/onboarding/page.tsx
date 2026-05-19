import { CheckCircle2, MapPinHouse, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const checklist = [
  "Space type, address, and dimensions",
  "Target monthly rent and availability",
  "Owner approval preferences for tenant screening"
];

export default function OnboardingPage() {
  return (
    <main className="section-shell py-10">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.2fr]">
        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <Badge className="mb-4">Asset onboarding</Badge>
          <h1 className="font-display text-4xl text-white sm:text-5xl">
            Add your first space in five minutes.
          </h1>
          <p className="mt-5 text-white/72">
            Spurb uses this intake to generate listing copy, set pricing
            guidance, and start tenant screening workflows.
          </p>

          <div className="mt-8 space-y-4">
            {checklist.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#f9c94b]" />
                <span className="text-sm text-white/78">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 text-sm text-white/68">
            <div className="flex items-center gap-3">
              <MapPinHouse className="h-4 w-4 text-[#50ae5c]" />
              Stored in Prisma for listing and lease generation.
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-[#f26f25]" />
              Enriched by pricing and listing agents.
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-4 w-4 text-[#f9c94b]" />
              Ready for future screening and payment automations.
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-[#0c1423] p-8 shadow-halo">
          <form className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-white/78">
                Owner email
                <Input
                  type="email"
                  name="ownerEmail"
                  placeholder="owner@example.com"
                />
              </label>
              <label className="grid gap-2 text-sm text-white/78">
                Owner name
                <Input type="text" name="ownerName" placeholder="Morgan Lee" />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-white/78">
                Asset type
                <select
                  name="type"
                  className="h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none ring-0 transition focus:border-[#f26f25]"
                  defaultValue="GARAGE"
                >
                  <option value="GARAGE">Garage</option>
                  <option value="DRIVEWAY">Driveway</option>
                  <option value="STORAGE">Storage</option>
                  <option value="CAR">Car</option>
                  <option value="ROOM">Room</option>
                  <option value="APARTMENT">Apartment</option>
                  <option value="GARDEN">Garden</option>
                  <option value="BASEMENT">Basement</option>
                  <option value="COMPUTE">Compute</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm text-white/78">
                Target rent / month
                <Input type="number" name="priceMonth" placeholder="275" />
              </label>
            </div>

            <label className="grid gap-2 text-sm text-white/78">
              Asset title
              <Input
                type="text"
                name="title"
                placeholder="Detached garage near downtown"
              />
            </label>

            <label className="grid gap-2 text-sm text-white/78">
              Address
              <Input
                type="text"
                name="address"
                placeholder="412 Orchard Street, Portland, OR"
              />
            </label>

            <label className="grid gap-2 text-sm text-white/78">
              Description
              <Textarea
                name="description"
                placeholder="Access details, dimensions, availability, security features..."
              />
            </label>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button type="submit">Create asset record</Button>
              <p className="text-sm text-white/58">
                This screen is ready to wire to `POST /api/assets`.
              </p>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
