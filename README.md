# Aeterna — Marketing Website

The public website for **Aeterna**, a clinic management / EHR system designed around how real clinics work. Built with Next.js (App Router), TypeScript, and Tailwind CSS, and ready to deploy on Vercel.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        # Root layout, fonts, metadata
  page.tsx          # Landing page (composes the sections)
  globals.css       # Tailwind + base styles
components/
  Header.tsx        # Sticky nav (client)
  Hero.tsx          # Hero with media placeholder
  Bottleneck.tsx    # "Paper-based bottleneck" stat band
  Features.tsx      # Core feature grid
  Implementation.tsx# "How we implement" steps
  WhyMatters.tsx    # 3-up value cards
  ClinicFunctions.tsx # Tabbed function demos (client) — clicking a tab swaps the demo
  WhyDifferent.tsx  # Differentiators band
  Pricing.tsx       # Implementation fee + monthly retainer
  FAQ.tsx           # Accordion (client)
  Footer.tsx        # Final CTA + footer
  Logo.tsx          # Aeterna brand mark
public/
  *.svg             # Logo, favicons, and placeholder media
```

## Placeholders to replace

These are intentionally placeholders and meant to be swapped for real assets:

- **Hero media** — `public/hero-placeholder.svg`. Replace with the animated hero
  video/image (update `components/Hero.tsx`; swap the `<Image>` for a `<video>` if needed).
- **Clinic function demos** — `public/demo-*.svg` (one per function: dashboard,
  patients, queue, appointments, billing, tasks, analytics, settings). Clicking a
  tab in the "Essential Clinic Functions" section shows the matching demo. Replace
  each with the real per-function video (update `components/ClinicFunctions.tsx`).

## Deploying to Vercel

1. Push this directory to a Git repository.
2. Import the repo in Vercel — it auto-detects Next.js, no extra config needed.
3. Deploy. (`vercel.json` pins the framework for clarity.)

## Brand

- Primary teal: `#0d9488` (Tailwind `brand-600`)
- Deep teal (logo backplate): `#004D40` (Tailwind `ink`)
- Font: Inter
