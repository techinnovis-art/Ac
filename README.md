# Service Hub — AC Repair & Geyser Service (Lahore)

A premium, fast, SEO-optimized, conversion-focused website built with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**. Dark theme by default with a light-theme toggle. Mobile-first, fully responsive, and Vercel-ready.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Production build (what Vercel runs)
npm run build
npm run start
```

> Requires **Node.js 18.17+** (Node 20 recommended).

---

## ✏️ Where to edit your details (IMPORTANT)

**Almost everything you'll want to change lives in ONE file:**

### `lib/site.js`

Open it and update:

| What | Field |
|------|-------|
| 📞 Phone (pretty) | `phoneDisplay` |
| 📞 Phone (for tap-to-call) | `phoneTel` |
| 💬 WhatsApp number | `whatsappNumber` (format: `923XXXXXXXXX`, no `+`) |
| ✉️ Email | `email` |
| 🌐 Live site URL (after deploy) | `url` |
| 🕒 Business hours | `hours` |
| 📍 Areas covered | `areas` |
| 💰 Gas prices | `gasPricing` |
| 🛠️ Services list | `services` |
| ⭐ Reviews | `reviews` |
| ❓ FAQs | `faqs` |

Every placeholder phone number (`+92 300 0000000` / `923000000000`) is in this file — change it once and it updates the whole site (navbar, footer, buttons, forms, sticky bar).

---

## 🖼️ Adding images

- Drop images into the `/public` folder.
- Use Next's optimized `<Image>` component, e.g.:
  ```jsx
  import Image from 'next/image';
  <Image src="/hero.jpg" alt="AC repair in Lahore" width={600} height={400} priority />
  ```
- **Brand logos:** `components/Brands.jsx` currently shows text badges. Replace the `<span>{brand}</span>` with `<Image>` logos placed in `/public/brands/`.
- **Map:** `components/ContactContent.jsx` has a map placeholder with a commented-out `<iframe>` — paste your Google Maps embed URL there.

---

## 📨 Form submissions

Both the **Booking** and **Contact** forms currently open **WhatsApp** with all details pre-filled (no backend required — perfect for a local service business).

To send forms to email or a database instead, see the commented `handleSubmit` in:
- `components/BookingForm.jsx`
- `components/ContactForm.jsx`

You can POST the form data to a Next.js API route (e.g. `app/api/booking/route.js`) and use a service like Resend, Formspree, or your own backend.

---

## 🎨 Theme & colors

- Color tokens are defined as CSS variables in `app/globals.css` (`:root` = light, `.dark` = dark).
- Brand accents (electric blue, cyan, ember/orange) and design tokens are in `tailwind.config.js`.
- Dark is the default. The toggle (sun/moon in the navbar) persists the choice in `localStorage`.

---

## 📁 Project structure

```
app/
  layout.jsx        # fonts, SEO metadata, providers, navbar/footer/sticky CTA
  page.jsx          # Home
  services/page.jsx
  about/page.jsx
  contact/page.jsx
  booking/page.jsx
  faq/page.jsx
  sitemap.js        # SEO sitemap
  robots.js         # SEO robots
  icon.svg          # favicon
  globals.css       # theme tokens + base styles
components/
  Navbar, Footer, StickyCTA, ThemeProvider, ThemeToggle
  Hero, ServicesOverview, WhyChooseUs, Brands, PricingTable,
  Process, Reviews, EmergencyCTA, FAQ
  BookingForm, ContactForm, ContactContent, AboutContent, PageHeader
  ui/  -> Reveal, SectionHeading, CTAButtons, Icon  (reusable primitives)
lib/
  site.js           # ★ ALL editable business data ★
```

---

## ☁️ Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Vercel auto-detects Next.js — just click **Deploy**. No extra config needed.
4. After deploy, copy your live URL into `site.url` in `lib/site.js` and redeploy (improves SEO/sitemap).

That's it. 🎉

---

## ✅ What's included

- Dark + light theme with smooth toggle
- Sticky WhatsApp button (all devices) + sticky Call/Book bar (mobile)
- Framer Motion animations, glassmorphism cards, gradient backgrounds
- All required pages & sections (Home, Services, About, Contact, Booking, FAQ)
- Gas pricing table with "starting from" rates + inspection disclaimer
- SEO metadata, OpenGraph, JSON-LD LocalBusiness schema, sitemap & robots
- Fully responsive, accessible forms & buttons, optimized fonts
```

---

## ✨ Premium Animation Upgrade (added)

No new packages required — this uses the **Framer Motion** already installed (and `lucide-react` for the floating icons).

### New reusable animation components
- **`components/SectionWrapper.jsx`** (exports `SectionWrapper` and alias `AnimatedSection`)
  Scroll-linked section transitions: each block rises + fades + scales in from below, and softly lifts away/fades/blurs as it leaves the top, so the previous section "moves above and removes at the top" while the next comes into focus. Props: `first` (top/hero — only animates on exit), `blur` (toggle focus-blur, default on), `id`, `className`.
- **`components/FloatingIconsBackground.jsx`**
  Slow-floating low-opacity service icons (snowflake, fan, wrench, thermometer, compressor, geyser flame, etc.) with a cursor parallax effect — icons gently drift away from the pointer. Mounted globally in `app/layout.jsx`.
- **`components/MagneticButton.jsx`**
  Wraps any button/link so it’s magnetically pulled toward the cursor and springs back. Used by `CTAButtons`.
- **`components/GlowCard.jsx`**
  Glass card with a cursor-tracking radial spotlight, animated gradient border, hover lift and icon motion. Used by the service cards.

### What changed in existing files (content & routing untouched)
- `app/layout.jsx` — animated background glows + mounts `FloatingIconsBackground`.
- `app/globals.css` — added spotlight, button shine + hover-glow, input focus glow, animated gradient, nav hover underline, glow-pulse utilities.
- `app/page.jsx`, `app/services|about|faq|contact|booking/page.jsx` — sections wrapped in `SectionWrapper` (same content, same routes).
- `components/Hero.jsx` — animated gradient atmosphere layer; CTAs now magnetic + shine.
- `components/ServicesOverview.jsx` — cards now use `GlowCard`.
- `components/ui/CTAButtons.jsx` — buttons wrapped in `MagneticButton`.
- `components/Navbar.jsx` — animated hover underline on links.
- `components/StickyCTA.jsx` — soft glow-pulse on the floating WhatsApp button.

### Accessibility & performance
- Everything respects **`prefers-reduced-motion`** — scroll transforms, parallax, magnetic pull and the floating animation all switch off, leaving a clean static layout.
- Pointer effects update CSS variables / motion values directly (no React re-renders), and use GPU-friendly transforms/opacity to avoid jank.
