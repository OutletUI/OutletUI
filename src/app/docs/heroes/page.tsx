import type { Metadata } from "next";
import DocsToc from "@/components/docs/DocsToc";
import HeroesPage from "@/components/docs/pages/HeroesPage";
import { buildDocMeta } from "@/lib/seo";

export const metadata: Metadata = buildDocMeta(
  "Hero Sections",
  "Copy-paste hero section components for Tailwind CSS. 9 hero sections in OutletUI.",
  "/docs/heroes",
  ["hero section", "landing hero", "Tailwind hero", "copy paste hero", "AI search", "React hero", "above the fold"]
);

export default function HeroesDocsPage() {
  return (
    <>
      <div className="flex-1 min-w-0 flex">
        <article className="flex-1 min-w-0 max-w-[860px] py-12 px-10 pb-20">
          <HeroesPage />
        </article>
        <DocsToc pageId="heroes" />
      </div>
    </>
  );
}
