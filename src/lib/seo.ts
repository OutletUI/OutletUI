import type { Metadata } from "next";

/** Base URL for canonical links, Open Graph, sitemap. Set NEXT_PUBLIC_SITE_URL in production. */
export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://outletui.com";

const defaultTitle = "OutletUI — Plug in. Ship faster.";
const defaultDescription =
  "Beautiful, copy-paste UI components built with Tailwind CSS. No installs. No config. Just open, copy, and ship.";

export const defaultMeta: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: defaultTitle, template: "%s | OutletUI" },
  description: defaultDescription,
  keywords: [
    "Tailwind CSS components",
    "copy paste UI",
    "React UI components",
    "Tailwind UI",
    "component library",
    "OutletUI",
    "copy paste components",
    "free UI components",
    "Tailwind components library",
    "React Tailwind components",
    "hero sections",
    "navbar components",
    "loader spinner components",
    "card components Tailwind",
    "AI search",
    "AI discoverable",
    "searchable UI library",
    "developer components",
    "frontend UI kit",
    "no install components",
    "CDN UI components",
    "copy paste frontend",
  ],
  authors: [{ name: "OutletUI" }],
  creator: "OutletUI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "OutletUI",
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "OutletUI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: BASE_URL },
};

/** Build doc page metadata for better search titles and descriptions. */
export function buildDocMeta(
  title: string,
  description: string,
  path: string,
  keywords?: string[]
): Metadata {
  const url = `${BASE_URL}${path}`;
  const meta: Metadata = {
    title,
    description,
    keywords: keywords ?? [
      "OutletUI",
      "Tailwind CSS",
      "copy paste components",
      "documentation",
      "UI components",
    ],
    openGraph: {
      title: `${title} | OutletUI`,
      description,
      url,
    },
    twitter: { title: `${title} | OutletUI`, description },
    alternates: { canonical: url },
  };
  return meta;
}
