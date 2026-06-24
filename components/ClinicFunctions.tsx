"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

type FunctionTab = {
  id: string;
  label: string;
  headline: string;
  body: string;
  demo: string;
};

const TABS: FunctionTab[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    headline: "Your clinic at a glance",
    body: "Doctors open to today's schedule, the live queue, and the patients waiting — the whole clinic in a single view the moment they log in.",
    demo: "/demo-dashboard.svg",
  },
  {
    id: "patients",
    label: "Patients",
    headline: "Complete records, instantly searchable",
    body: "Demographics, visit history, SOAP notes, immunizations, and lab results in one chart — with paper records digitized and brought along.",
    demo: "/demo-patients.svg",
  },
  {
    id: "queue",
    label: "Queue",
    headline: "A front desk that runs in real time",
    body: "Assistants move patients from check-in to consultation on a live queue board. Walk-ins and follow-ups are added in seconds and the doctor sees them instantly.",
    demo: "/demo-queue.svg",
  },
  {
    id: "appointments",
    label: "Appointments",
    headline: "Scheduling with follow-ups built in",
    body: "Book, reschedule, and track appointments, with automatic follow-up management so patients come back when they should.",
    demo: "/demo-appointments.svg",
  },
  {
    id: "billing",
    label: "Billing",
    headline: "Nothing billable slips through",
    body: "Capture consultations and services at the point of care. Every visit that should be billed, is — without chasing paper at the end of the day.",
    demo: "/demo-billing.svg",
  },
  {
    id: "tasks",
    label: "Tasks",
    headline: "Follow-through, organized",
    body: "Track lab follow-ups, callbacks, and to-dos across the team so the things that fall through the cracks on paper don't here.",
    demo: "/demo-tasks.svg",
  },
  {
    id: "analytics",
    label: "Analytics",
    headline: "The numbers, without the scramble",
    body: "Patient volume, revenue, and clinic performance trends — the month-end picture available any day of the month.",
    demo: "/demo-analytics.svg",
  },
  {
    id: "settings",
    label: "Settings",
    headline: "Configured around your roles",
    body: "Role-based access for doctors and assistants, your fee schedule, and the modules each person sees — set up to match how your clinic is organized.",
    demo: "/demo-settings.svg",
  },
];

export default function ClinicFunctions() {
  const [active, setActive] = useState(TABS[0].id);
  const current = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <section id="functions" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            Essential clinic functions
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            See it in action
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Pick a function to watch how it works. Each one is built to replace a
            paper-based step in your clinic&apos;s day.
          </p>
        </div>

        {/* Tab bar */}
        <div
          role="tablist"
          aria-label="Clinic functions"
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {TABS.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="mt-10 grid items-center gap-8 lg:grid-cols-5 lg:gap-12"
        >
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-slate-900">
              {current.headline}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {current.body}
            </p>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              <PlayCircle size={18} />
              Watch the {current.label.toLowerCase()} demo
            </button>
          </div>

          <div className="lg:col-span-3">
            <div className="relative rounded-2xl border border-slate-200 bg-slate-900 p-2 shadow-xl shadow-brand-900/10">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                {/* Placeholder demo media per function — swap for video later */}
                <Image
                  key={current.id}
                  src={current.demo}
                  alt={`${current.label} demo placeholder`}
                  fill
                  className="animate-fade-in object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                    <PlayCircle size={40} className="text-white" />
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-slate-400">
              Placeholder — video demo for {current.label} coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
