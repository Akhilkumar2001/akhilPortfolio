# Akhil Kumar — Portfolio

A premium, Awwwards-style developer portfolio built with **Next.js 15**, the App Router, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, GSAP and React Three Fiber.

## ✨ Features

- **Premium one-page experience** with 11 distinct sections, each with its own identity
- **Interactive 3D hero** (React Three Fiber) with floating objects + a custom cursor
- **Dark / light theme** with system detection (`next-themes`)
- **Work showcase** with live category filtering + search, 3D tilt cards and dedicated **case-study pages**
- **Conversion flows**: dedicated Hiring section + a Freelance Booking form (React Hook Form + Zod) and a validated Contact form
- **Smooth scroll** (Lenis), scroll-reveal, magnetic buttons, text reveal, animated counters, marquee
- **SEO**: dynamic metadata, OpenGraph/Twitter cards, JSON-LD structured data, `sitemap.xml`, `robots.txt`, canonical URLs
- **Accessible**: keyboard-friendly, reduced-motion aware, semantic markup

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the build
```

## 🔧 Make it yours (5-minute setup)

All personal details live in **one file**: [`lib/site-config.ts`](lib/site-config.ts).
Search for `TODO` and replace:

- `url` — your production domain
- `contact` — email, phone, WhatsApp, Calendly
- `social` — GitHub, LinkedIn, Twitter
- `resumeUrl` — drop your PDF at `public/akhil-kumar-resume.pdf`

Other content lives in [`lib/data/`](lib/data/):

| File | Controls |
| --- | --- |
| `projects.ts` | Work showcase + case-study pages |
| `experience.ts` | Experience timeline |
| `skills.ts` | Skill categories + tech marquee |
| `services.ts` | Services grid |
| `testimonials.ts` | Testimonials + certifications |

Add an Open Graph image at `public/og.png` (1200×630) for rich link previews.

## 🧱 Architecture

```
app/                # Routes, layout, SEO (sitemap/robots), API routes
components/
  ui/               # shadcn/ui primitives
  layout/           # Navbar, Footer
  sections/         # One file per page section
  animations/       # Reveal, TextReveal, Magnetic
  shared/           # Cursor, ThemeToggle, AnimatedCounter, TiltCard, …
  three/            # React Three Fiber scene
  providers/        # Theme + smooth-scroll providers
lib/
  data/             # Content (typed)
  site-config.ts    # ← your details
  validations.ts    # Zod schemas
  seo.ts            # Metadata + JSON-LD
```

## 📨 Form delivery

The Contact and Booking forms POST to `/api/contact` and `/api/booking`, which
validate with Zod and currently log server-side. Wire up real delivery (Resend,
Nodemailer, a DB, etc.) where the `TODO` comment lives in each route handler.

---

Built with care using Next.js, Three.js & Framer Motion.
