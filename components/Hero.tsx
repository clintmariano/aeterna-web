import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#00483C] text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-6 lg:pb-28 lg:pt-36">
        {/* Left: copy */}
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Not a generic EHR. A system designed for your clinic.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Aeterna helps private medical practices replace paper-based
            workflows with a tailored digital system built around how they
            actually operate.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand-400 px-6 py-3 text-base font-semibold text-ink shadow-sm transition-colors hover:bg-brand-300"
            >
              Book a Demo
            </a>
            <a
              href="#functions"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Right: angled tablet device, bleeding off the right edge */}
        <div className="relative animate-fade-in lg:translate-x-12">
          <div className="relative mx-auto w-full max-w-2xl lg:ml-auto lg:mr-[-6%]">
            {/* device bezel */}
            <div className="rounded-[1.75rem] bg-slate-900 p-3 shadow-2xl shadow-black/40 ring-1 ring-white/10">
              <div className="relative aspect-[11/8] w-full overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/hero-patient-record.svg"
                  alt="Aeterna patient record screen"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-white/40 lg:mt-6">
            Placeholder — product walkthrough video coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
