"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How long does implementation take?",
    a: "Most clinics are live within a few weeks. The timeline depends on how many paper records need digitizing and how many staff need training — we scope it with you up front so there are no surprises.",
  },
  {
    q: "What happens to our existing paper records?",
    a: "They come with you. Aeterna includes record digitization with built-in OCR, so scanned charts are turned into structured, searchable records rather than left behind in a filing cabinet.",
  },
  {
    q: "Does it work if our internet goes down?",
    a: "Aeterna is built as a resilient web app and keeps your team working through brief connectivity hiccups, syncing changes automatically once you're back online.",
  },
  {
    q: "Can different staff see different things?",
    a: "Yes. Access is role-based — doctors and assistants each see the modules relevant to their work, configured to match how your clinic is organized.",
  },
  {
    q: "Is our patient data secure and portable?",
    a: "Your data is yours. Records are protected with role-based access and secure backups, and your clinic's data remains exportable — you're never locked in.",
  },
  {
    q: "How is pricing structured?",
    a: "There's a one-time implementation fee to set Aeterna up around your clinic, then a flat monthly retainer covering the system, updates, and support. Both are scoped to your clinic's size — reach out for a quote.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Questions clinics ask us
          </h2>
        </div>

        <dl className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="py-1">
                <dt>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-slate-900">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-brand-600 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </dt>
                {isOpen && (
                  <dd className="pb-5 pr-8 text-sm leading-relaxed text-slate-600">
                    {item.a}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
