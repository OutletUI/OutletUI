import type { Metadata } from "next";
import DocsToc from "@/components/docs/DocsToc";
import CardsPage from "@/components/docs/pages/CardsPage";
import { buildDocMeta } from "@/lib/seo";

export const metadata: Metadata = buildDocMeta(
  "Cards",
  "Copy-paste card components for Tailwind CSS. 12 card designs in OutletUI.",
  "/docs/cards",
  ["card component", "Tailwind card", "copy paste card", "AI search", "React card", "UI card design"]
);

export default function CardsDocsPage() {
  return (
    <>
      <div className="flex-1 min-w-0 flex">
        <article className="flex-1 min-w-0 max-w-[860px] py-12 px-10 pb-20">
          <CardsPage />
        </article>
        <DocsToc pageId="cards" />
      </div>
    </>
  );
}
