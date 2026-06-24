"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: bots fill hidden fields; humans don't. Field is named to avoid
    // browser autofill (a "company"-named field gets autofilled and would
    // wrongly trip this).
    if (data.contact_time_pref) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-lg shadow-brand-900/10">
        <CheckCircle2 className="mx-auto text-brand-600" size={48} />
        <h3 className="mt-4 text-xl font-semibold text-slate-900">
          Thanks — we&apos;ve got your message
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          A member of the Aeterna team will get back to you shortly at the email
          you provided.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-lg shadow-brand-900/10 sm:p-8"
    >
      {/* Honeypot — visually hidden, off-screen, not announced. Named so that
          browser autofill leaves it alone (real users never fill it). */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Preferred contact time
          <input
            type="text"
            name="contact_time_pref"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Dr. Juan dela Cruz" />
        <Field
          label="Clinic name"
          name="clinic"
          placeholder="Dela Cruz Family Clinic"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          placeholder="you@clinic.com"
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="0917 000 0000"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="inquiryType"
          className="block text-sm font-medium text-slate-700"
        >
          What can we help with?
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          defaultValue="Book a demo"
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        >
          <option>Book a demo</option>
          <option>General inquiry</option>
        </select>
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us a little about your clinic and what you're looking for."
          className="mt-1.5 w-full resize-y rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <ArrowRight size={18} />
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-slate-400">
        We&apos;ll only use your details to respond to your inquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700"
      >
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
      />
    </div>
  );
}
