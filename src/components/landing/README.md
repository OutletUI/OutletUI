# Landing Page Components

This folder contains all UI for the OutletUI marketing/landing page.

## Structure

- **`Nav.tsx`** — Fixed top navigation (logo, links, Get Started CTA).
- **`Hero.tsx`** — Hero section: badge, headline, subtext, primary/secondary buttons, stats, code pill.
- **`Marquee.tsx`** — Horizontal scrolling marquee of component categories.
- **`ComponentsSection.tsx`** — “Everything you need” section and grid of component cards (Navbar, Hero, Cards, Tables, Forms, Sidebars, Modals, +200 more).
- **`HowItWorks.tsx`** — Three steps: Browse → Copy → Ship.
- **`ThemesSection.tsx`** — Horizontal theme preview cards (Violet Dark, Clean White, Ocean Blue, etc.).
- **`CtaSection.tsx`** — “Start building right now” CTA box.
- **`Footer.tsx`** — Footer with logo and links.

## Client components (interactivity)

- **`Cursor.tsx`** — Custom cursor dot + ring; follows mouse and expands on hover targets.
- **`Reveal.tsx`** — Wrapper that reveals children on scroll (Intersection Observer).
- **`LandingLayout.tsx`** — Wraps the landing page, mounts `Cursor` and adds `cursor-custom` to `body`.

## Shared / previews

- **`previews/CardPreviews.tsx`** — Small mockups used inside component cards (PreviewNav, PreviewHero, PreviewTable, etc.).

## Usage

The main app page composes the full landing:

```tsx
<LandingLayout>
  <Nav />
  <main>
    <Hero />
    <Marquee />
    <ComponentsSection />
    <HowItWorks />
    <ThemesSection />
    <CtaSection />
    <Footer />
  </main>
</LandingLayout>
```

Design tokens (colors, etc.) live in `src/app/globals.css` as CSS variables and in `tailwind.config.ts` as theme extensions.
