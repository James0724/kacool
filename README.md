# Kahosh Portfolio

James Kahoro's editorial portfolio, built as a **Next.js 14 (App Router)** app with **Tailwind CSS** and **Framer Motion**. Ported from a static HTML design into reusable, typed React components.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Tech stack

- **Next.js 14.2** — App Router, React 18
- **TypeScript**
- **Tailwind CSS 3.4** — design tokens wired to CSS variables (see `app/globals.css` + `tailwind.config.ts`)
- **Framer Motion 11** — scroll reveals, scroll-linked word reveal, animated testimonial carousel, mobile menu
- **next/font** — Clash Display + Satoshi (local `.woff2`) and Geist Mono (Google)

## Project structure

```
app/
  layout.tsx        Root layout — fonts + metadata
  page.tsx          Assembles the page sections
  globals.css       Design tokens + base styles + complex CSS effects
  fonts.ts          next/font setup (CSS variables --font-display/-body/-mono)
components/
  Background.tsx    Atmospheric gradient field + grain
  Nav.tsx           Sticky nav + animated mobile menu
  Hero.tsx          Hero with rotating avatar badge
  SpecialtyStrip.tsx  Infinite specialty marquee
  About.tsx         Scroll-linked word-by-word reveal + stats
  Projects.tsx      Selected-projects list with hover preview
  Expertise.tsx     Expertise cards + dual skills marquee
  Testimonials.tsx  Auto-advancing quote carousel
  CTA.tsx           Closing call-to-action
  Footer.tsx        Footer + socials
  Reveal.tsx        Reusable scroll-reveal wrapper (Framer Motion)
  icons.tsx         Shared inline SVG icon set
lib/
  data.ts           All content — projects, skills, testimonials, copy
public/
  fonts/  images/  skills/   Static assets
```

## Editing content

All copy and data live in **`lib/data.ts`** — projects, skills, testimonials, stats, social links, and the about paragraph. Edit there; components read from it.

## Design tokens

Colors, fonts, and layout values are defined as CSS variables in `app/globals.css` (`:root`) and mapped into Tailwind in `tailwind.config.ts`, so utilities like `text-accent`, `bg-card`, `border-line`, and `font-display` resolve to the design system.
