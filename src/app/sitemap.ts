import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";
import { SIDEBAR_SECTIONS } from "@/config/docs";

/** Extra indexable routes (landing sections, key entry points) for better crawl coverage. */
const EXTRA_INDEX_PATHS = [
  "/docs",
  "/docs/installation",
  "/docs/loaders",
  "/docs/navbars",
  "/docs/heroes",
  "/docs/cards",
  "/docs/how-to-use",
  "/docs/tailwind-setup",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const docPaths = SIDEBAR_SECTIONS.flatMap((section) =>
    section.links.map((link) => link.href)
  );
  const allPaths = [...new Set([...EXTRA_INDEX_PATHS, ...docPaths])];

  const docUrls = allPaths.map((path) => {
    const isHighPriority = path === "/docs" || path === "/docs/installation" || path === "/docs/loaders" || path === "/docs/navbars" || path === "/docs/heroes" || path === "/docs/cards";
    return {
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "/docs" ? 0.95 : isHighPriority ? 0.85 : 0.8,
    };
  });

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...docUrls,
  ];
}
