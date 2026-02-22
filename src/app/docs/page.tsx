import type { Metadata } from "next";
import DocsToc from "@/components/docs/DocsToc";
import IntroductionPage from "@/components/docs/pages/IntroductionPage";
import { buildDocMeta } from "@/lib/seo";

export const metadata: Metadata = buildDocMeta(
  "Introduction",
  "What is OutletUI? Beautiful, copy-paste UI components built with Tailwind CSS. No installs. No config. Just open, copy, and ship.",
  "/docs",
  ["OutletUI", "Tailwind components", "copy paste UI", "AI search", "component library", "documentation"]
);

export default function DocsPage() {
  return (
    <>
      <div className="flex-1 min-w-0 flex">
        <article className="flex-1 min-w-0 max-w-[860px] py-12 px-10 pb-20">
          <IntroductionPage />
        </article>
        <DocsToc pageId="introduction" />
      </div>
    </>
  );
}
