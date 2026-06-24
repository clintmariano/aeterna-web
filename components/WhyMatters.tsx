const CARDS = [
  "Many clinics still use paper workflows. That means there's a clear opportunity to make records, scheduling, and billing more organized and easier to manage.",
  "Small workflow improvements can create meaningful time savings. Even a modest reduction in manual steps can help teams move faster and spend more time on patient care.",
  "More streamlined operations can support stronger financial performance. A tailored system can help clinics capture more value from the work they are already doing every day.",
];

export default function WhyMatters() {
  return (
    <section className="bg-[#D0D2D5]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-700 sm:text-3xl">
            Why This Matters
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-500">
            This focus lets us design for real operational pain instead of
            trying to serve every healthcare setting at once. It also keeps the
            product practical for smaller private clinics that want digital
            transformation without the complexity of a hospital-grade system.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((body, i) => (
            <div
              key={i}
              className="rounded-xl bg-[#FAFBFB] p-7 shadow-sm"
            >
              <p className="text-sm leading-relaxed text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
