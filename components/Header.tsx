"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "#functions", label: "Solution" },
  { href: "#pricing", label: "Pricing" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Left: logo + primary links */}
        <div className="flex items-center gap-10">
          <a href="#top" className="flex items-center" aria-label="Aeterna home">
            <Logo variant="light" />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: contact + CTA */}
        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#contact"
            className="text-sm font-semibold text-white/90 transition-colors hover:text-white"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-brand-400 px-4 py-2 text-sm font-semibold text-ink shadow-sm transition-colors hover:bg-brand-300"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mx-4 rounded-xl border border-white/10 bg-ink/95 backdrop-blur md:hidden">
          <nav className="flex flex-col gap-1 p-3">
            {[...NAV_LINKS, { href: "#contact", label: "Contact" }].map(
              (link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-brand-400 px-3 py-2.5 text-center text-sm font-semibold text-ink"
            >
              Book a Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
