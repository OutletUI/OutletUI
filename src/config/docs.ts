export const SIDEBAR_SECTIONS = [
  {
    label: "Getting Started",
    links: [
      { href: "/docs", label: "Introduction", icon: "📖" },
      { href: "/docs/installation", label: "Installation / Setup", icon: "⚙️" },
      { href: "/docs/tailwind-setup", label: "Tailwind CSS Setup", icon: "🎨" },
      { href: "/docs/how-to-use", label: "How to Use", icon: "🔌" },
    ],
  },
  {
    label: "Components",
    links: [
      { href: "/docs/loaders", label: "Loaders", icon: "⏳", badge: "12" as const, badgeType: "new" },
      { href: "/docs/navbars", label: "Navbars", icon: "🧭", badge: "10", badgeType: "new" },
      { href: "/docs/heroes", label: "Hero Sections", icon: "🦸", badge: "9", badgeType: "new" },
      { href: "/docs/cards", label: "Cards", icon: "🃏", badge: "12", badgeType: "new" },
      { href: "/docs/modals", label: "Modals", icon: "🧩", badge: "soon" as const, badgeType: "beta" },
      { href: "/docs/forms", label: "Forms", icon: "📝" },
      { href: "/docs/tables", label: "Data Tables", icon: "📊" },
      { href: "/docs/sidebars", label: "Sidebars", icon: "📌" },
      { href: "/docs/badges", label: "Badges & Chips", icon: "🏷️", sub: true },
      { href: "/docs/buttons", label: "Buttons", icon: "🔘", sub: true },
      { href: "/docs/toasts", label: "Toasts", icon: "🍞", sub: true },
    ],
  },
  {
    label: "Theming",
    links: [
      { href: "/docs/themes", label: "Theme System", icon: "🎭" },
      { href: "/docs/dark-mode", label: "Dark Mode", icon: "🌙" },
      { href: "/docs/custom", label: "Customization", icon: "✏️" },
    ],
  },
  {
    label: "Resources",
    links: [
      { href: "/docs/changelog", label: "Changelog", icon: "📋" },
      { href: "/docs/report-bug", label: "Report a Bug", icon: "🐛" },
    ],
  },
] as const;

export const DOCS_TOC: Record<string, { label: string; id: string }[]> = {
  introduction: [
    { label: "What is OutletUI?", id: "what-is" },
    { label: "Why OutletUI?", id: "why" },
  ],
  installation: [
    { label: "Option 1 — CDN", id: "option-1" },
    { label: "Option 2 — Tailwind CLI", id: "option-2" },
    { label: "Option 3 — Frameworks", id: "option-3" },
  ],
  "how-to-use": [
    { label: "Step 1 — Browse", id: "step1" },
    { label: "Step 2 — Copy", id: "step2" },
    { label: "Step 3 — Paste", id: "step3" },
  ],
  loaders: [],
  navbars: [],
  heroes: [],
  cards: [],
};

export const PLACEHOLDER_TITLES: Record<string, string> = {
  "tailwind-setup": "Tailwind CSS Setup",
  navbars: "Navbars",
  heroes: "Hero Sections",
  cards: "Cards",
  modals: "Modals",
  forms: "Forms",
  tables: "Data Tables",
  sidebars: "Sidebars",
  badges: "Badges & Chips",
  buttons: "Buttons",
  toasts: "Toasts",
  themes: "Theme System",
  "dark-mode": "Dark Mode",
  custom: "Customization",
  changelog: "Changelog",
  "report-bug": "Report a Bug",
};

export type DocPageId =
  | "introduction"
  | "installation"
  | "tailwind-setup"
  | "how-to-use"
  | "loaders"
  | keyof typeof PLACEHOLDER_TITLES;
