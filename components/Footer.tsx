import Logo from "./Logo";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <>
      {/* Contact / final CTA + inquiry form */}
      <section id="contact" className="bg-brand-700">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="lg:pt-4">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              See how Aeterna fits your clinic
            </h2>
            <p className="mt-4 max-w-md text-lg text-brand-50/90">
              Tell us how your clinic runs today and we&apos;ll show you exactly
              how Aeterna would work for your team — no obligation.
            </p>
            <p className="mt-6 text-sm text-brand-50/80">
              Prefer email? Reach us at{" "}
              <a
                href="mailto:inquire@aeterna-ehr.com"
                className="font-semibold text-white underline-offset-2 hover:underline"
              >
                inquire@aeterna-ehr.com
              </a>
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
            <div className="max-w-sm">
              <Logo variant="light" />
              <p className="mt-4 text-sm leading-relaxed text-brand-50/70">
                A clinic system designed around your workflow — replacing paper
                charts with one connected source of truth for your practice.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
              <FooterCol
                title="Product"
                links={[
                  { label: "Features", href: "#features" },
                  { label: "Clinic Functions", href: "#functions" },
                  { label: "Pricing", href: "#pricing" },
                ]}
              />
              <FooterCol
                title="Company"
                links={[
                  { label: "Why Aeterna", href: "#why" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Contact", href: "#contact" },
                ]}
              />
              <FooterCol
                title="Get in touch"
                links={[
                  { label: "inquire@aeterna-ehr.com", href: "mailto:inquire@aeterna-ehr.com" },
                  { label: "Book a Demo", href: "#contact" },
                ]}
              />
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-brand-50/60">
            © {new Date().getFullYear()} Aeterna. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-brand-50/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
