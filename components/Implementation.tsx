const STEPS = [
  "Workflow Review",
  "System Design",
  "Configuration",
  "Guided Rollout",
  "Ongoing Partnership",
];

export default function Implementation() {
  return (
    <section className="bg-[#3E928A] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            How We Implement
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/80">
            We start with discovery, map the current workflow, define the right
            setup, build the system, and support rollout with training and
            maintenance. The goal is a smooth transition, not a disruptive
            overhaul.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {STEPS.map((label) => (
            <div
              key={label}
              className="flex aspect-[3/4] items-end rounded-xl bg-white/10 p-5 ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/15"
            >
              <span className="text-sm font-medium text-white/95">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
