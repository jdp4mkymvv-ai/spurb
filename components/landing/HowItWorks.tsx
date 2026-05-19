import { ClipboardList, Megaphone, WalletCards } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Sign up in five minutes",
    body: "Capture the asset basics once: address, access details, dimensions, price target, and availability."
  },
  {
    icon: Megaphone,
    title: "Spurb lists and screens",
    body: "We prepare listing copy, publish to target channels, field leads, and distill applicant quality for approval."
  },
  {
    icon: WalletCards,
    title: "Lease and rent collection",
    body: "Approved tenants move into a structured lease flow with monthly payment tracking and owner reporting."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-shell mt-20">
      <span className="section-kicker">How it works</span>
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Three steps. Zero hassle.
          </h2>
          <p className="mt-4 max-w-3xl text-white/68">
            The product foundation is built around owner simplicity and
            operator leverage.
          </p>
        </div>
        <p className="max-w-sm text-sm uppercase tracking-[0.2em] text-white/45">
          Sign-up → listing automation → recurring cash flow
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
          >
            <div className="mb-8 flex items-center justify-between">
              <step.icon className="h-7 w-7 text-[#f9c94b]" />
              <span className="font-display text-4xl text-white/20">
                0{index + 1}
              </span>
            </div>
            <h3 className="font-display text-2xl text-white">{step.title}</h3>
            <p className="mt-4 text-white/68">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
