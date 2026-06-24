export default function Bottleneck() {
  return (
    <section className="bg-[#E9EAEB]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-20">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-brand-600 sm:text-3xl">
          The Paper-Based Bottleneck
        </h2>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-0">
          {/* Left: stat */}
          <div className="text-center lg:pr-16">
            <div className="text-6xl font-extrabold tracking-tight text-brand-400 sm:text-7xl lg:text-8xl">
              28% - 55%
            </div>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Potential Revenue Loss
            </p>
          </div>

          {/* Right: explanation, with a divider on large screens */}
          <div className="lg:border-l lg:border-slate-300 lg:pl-16">
            <h3 className="text-2xl font-semibold text-slate-700 sm:text-3xl">
              Cost of Paper-Based Systems
            </h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500">
              A private clinical practice in the Philippines relying on legacy,
              paper-based operations typically loses a significant portion of
              its potential annual revenue due to compounding physical
              inefficiencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
