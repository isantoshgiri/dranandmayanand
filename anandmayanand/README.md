# drswamianandmayanand.com — Frontend

Luxury spiritual website for H.H. Shree Guru Dr. Anandmayanand's mission:
Aatma Milan — Sankalp Siddhi, meditation programs, the SBK Cancer Charitable
Hospital ("Hospital of Hope") campaign, and the wider charitable mission.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion ·
Radix UI primitives · Lucide Icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's built so far

- Full project setup: `tailwind.config.ts`, `postcss.config.mjs`, `next.config.mjs`
- Global theme (`src/app/globals.css`) — dark/light mode via `.dark` class,
  glassmorphism utilities, gold/navy/saffron/cream design tokens
- Root layout with Google Fonts (Playfair Display, Poppins, Inter), full SEO
  metadata, Open Graph, Twitter cards, and JSON-LD structured data
- Sticky glass **Navbar** with mega menu and mobile drawer
- Luxury **Footer** with newsletter, quick links, socials
- **Home page**, fully built, with 13 sections: Hero (with the signature
  rotating mandala motif), Mission, Journey/Timeline, Stats counter, Aatma
  Milan preview, Meditation Programs, Upcoming Events, Testimonials, Hospital
  Project preview, Gallery preview, Latest Media, Donation CTA (with the
  trust's real bank transfer details), Newsletter
- Reusable primitives: `Button`, `SectionHeading`, `ScrollReveal`, `Mandala`
- Hooks: `useCountUp` (stat animation), `useTheme` (dark/light persistence)
- Central content file `src/lib/site-data.ts` — all real copy (guru bio,
  Aatma Milan pillars, hospital facilities, donation account) lives here so
  every page pulls from one source of truth

## Still to build (page by page, as requested)

- `/about-guru` — full biography, mission/vision, achievements gallery
- `/aatma-milan` — full program page with FAQ accordion
- `/meditation` — course registration flow
- `/events` — past/upcoming events, retreat gallery
- `/hospital-project` — master plan, progress timeline, donation progress bar
- `/charity` — Cow Seva, food donation, education, volunteer
- `/gallery`, `/media`, `/blog` — full listing + detail pages
- `/donate` — full multi-cause donation page with progress bars
- `/contact` — luxury form + map placeholder

## Replacing placeholders

Two spots use text placeholders instead of real media until you supply
assets:

- `src/components/sections/Hero.tsx` — guru portrait card (swap for
  `next/image` pointing at `/public/images/guru-portrait.jpg`), and the video
  background comment shows where to drop in `/public/hero.mp4`
- `src/components/sections/GalleryPreview.tsx` and
  `HospitalProjectPreview.tsx` — same pattern

## Design tokens

See `tailwind.config.ts` → `theme.extend.colors`:

- `navy` — deep indigo-navy dark surface (meditation/night)
- `gold` — temple gold accent (divinity/premium)
- `saffron` — marigold-saffron accent (Indian spiritual color, used for
  eyebrows/highlights in light mode)
- `cream` — warm light-mode background
