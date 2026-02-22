import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { defaultMeta, BASE_URL } from "@/lib/seo";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = defaultMeta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "OutletUI",
        description: "Beautiful, copy-paste UI components built with Tailwind CSS. No installs. No config. Just open, copy, and ship.",
        keywords: "Tailwind CSS components, copy paste UI, React UI components, Tailwind UI, component library, OutletUI, free UI components, hero sections, navbar components, loader components, card components, AI search, developer components, frontend UI kit, no install components",
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/docs?q={search_term_string}` },
          "search-term-parameter": "search_term_string",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${BASE_URL}/#software`,
        name: "OutletUI",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        description: "Copy-paste UI components for Tailwind CSS. Loaders, navbars, hero sections, cards. No install. AI search friendly.",
        url: BASE_URL,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        keywords: "Tailwind, React, UI components, copy paste, loaders, navbars, heroes, cards, AI search, frontend",
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "OutletUI",
        url: BASE_URL,
      },
    ],
  };

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${playfair.variable}`}>
      <body className={dmSans.className} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
