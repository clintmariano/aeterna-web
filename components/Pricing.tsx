import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Implementation",
    cadence: "one-time",
    tagline: "Get your clinic up and running on Aeterna.",
    features: [
      "Workflow mapping with your team",
      "System configured to your practice",
      "Paper-record digitization & data migration",
      "On-site staff training and guided rollout",
      "Go-live support alongside your team",
    ],
    featured: false,
  },
  {
    name: "Monthly Retainer",
    cadence: "per month",
    tagline: "Ongoing use, support, and partnership.",
    features: [
      "Full access to every clinic module",
      "Real-time sync across all devices",
      "Secure backups and updates included",
      "Priority support for your staff",
      "Continuous adjustments as you grow",
    ],
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Two parts, no surprises
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A one-time implementation to set Aeterna up around your clinic, then
            a flat monthly retainer for the system, support, and partnership.
            Pricing is scoped to your clinic&apos;s size and needs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.featured
                  ? "border-brand-600 bg-white shadow-lg shadow-brand-900/10 ring-1 ring-brand-600"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  Recurring
                </span>
              )}
              <h3 className="text-xl font-semibold text-slate-900">
                {plan.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight text-slate-900">
                  Custom
                </span>
                <span className="text-sm text-slate-500">{plan.cadence}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{plan.tagline}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-brand-600"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.featured
                    ? "bg-brand-600 text-white hover:bg-brand-700"
                    : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
