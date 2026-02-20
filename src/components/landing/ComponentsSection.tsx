import type { ReactNode } from "react";
import Reveal from "./Reveal";
import {
  PreviewNav,
  PreviewHero,
  PreviewCardGrid,
  PreviewTable,
  PreviewForm,
  PreviewSidebar,
  PreviewModal,
} from "./previews/CardPreviews";
import Link from "next/link";

const componentCardClass =
  "bg-[var(--surface)] p-0 relative overflow-hidden transition-colors hover:bg-[var(--surface2)] after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-[rgba(232,255,71,0.04)] after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity component-card";

const cardPreviewClass = "h-[180px] border-b border-[var(--border)] flex items-center justify-center p-6 relative overflow-hidden";
const cardInfoClass = "p-5 px-[22px]";
const cardNameClass = "font-syne font-bold text-[15px] mb-1";
const cardDescClass = "text-[13px] text-[var(--muted)] leading-snug";
const tagClass =
  "text-[11px] py-0.5 px-2.5 rounded-full bg-white/5 border border-white/10 text-[var(--muted)]";
const tagAccentClass =
  "bg-[rgba(232,255,71,0.08)] border-[rgba(232,255,71,0.2)] text-[var(--accent)]";

const components: Array<{
  name: string;
  description: string;
  tags: Array<{ label: string; accent?: boolean }>;
  preview: ReactNode;
  previewClass?: string;
}> = [
  {
    name: "Navbar",
    description:
      "Responsive navigation headers with logo, links, and CTA. Sticky, transparent, and minimal variants.",
    tags: [{ label: "6 variants", accent: true }, { label: "Tailwind" }, { label: "Accessible" }],
    preview: <PreviewNav />,
  },
  {
    name: "Hero Section",
    description:
      "Impactful landing page heroes with badges, headings, CTAs and visual accents.",
    tags: [{ label: "8 variants", accent: true }, { label: "Tailwind" }, { label: "Animated" }],
    preview: <PreviewHero />,
  },
  {
    name: "Cards",
    description:
      "Feature cards, stat cards, pricing cards, and profile cards with rich hover states.",
    tags: [{ label: "12 variants", accent: true }, { label: "Tailwind" }],
    preview: <PreviewCardGrid />,
  },
  {
    name: "Data Tables",
    description:
      "Sortable, filterable tables with pagination. Minimal and full-featured variants.",
    tags: [{ label: "5 variants", accent: true }, { label: "Tailwind" }, { label: "Sortable" }],
    preview: <PreviewTable />,
    previewClass: "items-start pt-7",
  },
  {
    name: "Forms",
    description:
      "Login, signup, contact and settings forms. Beautiful focus states and validation styles.",
    tags: [{ label: "7 variants", accent: true }, { label: "Tailwind" }, { label: "Validated" }],
    preview: <PreviewForm />,
  },
  {
    name: "Sidebars",
    description:
      "Dashboard sidebars with nested navigation, icons, and collapsible sections.",
    tags: [{ label: "4 variants", accent: true }, { label: "Tailwind" }, { label: "Collapsible" }],
    preview: <PreviewSidebar />,
    previewClass: "p-4",
  },
  {
    name: "Modals & Dialogs",
    description:
      "Centered dialogs, slide-over panels, and confirmation modals with backdrop blur.",
    tags: [{ label: "6 variants", accent: true }, { label: "Tailwind" }, { label: "Animated" }],
    preview: <PreviewModal />,
  },
];

export default function ComponentsSection() {
  return (
    <section id="components" className="py-[120px] px-6 md:px-12 relative z-[1]">
      <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--accent)] flex items-center gap-2.5 mb-5">
        <span className="w-7 h-px bg-[var(--accent)]" />
        Components
      </div>
      <Reveal>
        <h2 className="font-syne font-extrabold text-[clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.02em] max-w-[640px]">
          Everything you need. Nothing you don&apos;t.
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-[var(--muted)] text-[17px] mt-4 max-w-[500px] leading-[1.7]">
          Hand-crafted components, each with multiple variants. Built with Tailwind CSS, ready to drop into any project.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px mt-16 border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--border)]">
        {components.map((card) => (
          <div key={card.name} className={componentCardClass}>
            <div className={`${cardPreviewClass} ${card.previewClass ?? ""}`}>
              {card.preview}
            </div>
            <div className={cardInfoClass}>
              <div className={cardNameClass}>{card.name}</div>
              <div className={cardDescClass}>{card.description}</div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {card.tags.map((t) => (
                  <span
                    key={t.label}
                    className={t.accent ? `${tagClass} ${tagAccentClass}` : tagClass}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div
          className={`${componentCardClass} min-h-[260px] flex items-center justify-center border border-dashed border-white/10`}
        >
          <div className="text-center p-6">
            <div className="text-4xl mb-3">+</div>
            <div className="font-syne font-bold text-base mb-2">200+ more</div>
            <div className="text-[13px] text-[var(--muted)]">
              Badges, Toasts, Tabs, Accordions,
              <br />
              Pricing, Testimonials, and more.
            </div>
            <Link
              href="#components"
              className="font-syne font-bold text-[13px] py-2.5 px-6 mt-5 mx-auto inline-flex rounded-lg bg-[var(--accent)] text-[#09090b] border-0 transition-[transform,box-shadow] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(232,255,71,0.35)]"
            >
              Browse All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
