import type { Metadata } from "next";
import DocsToc from "@/components/docs/DocsToc";
import LoadersPage from "@/components/docs/pages/LoadersPage";
import { buildDocMeta } from "@/lib/seo";

export const metadata: Metadata = buildDocMeta(
  "Loaders",
  "Copy-paste loader and spinner components for Tailwind CSS. 12 loaders in OutletUI.",
  "/docs/loaders",
  ["loaders", "spinner", "loading animation", "Tailwind loader", "copy paste loader", "AI search", "UI loaders"]
);

export default function LoadersDocsPage() {
  return (
    <>
      <div className="flex-1 min-w-0 flex">
        <article className="flex-1 min-w-0 max-w-[860px] py-12 px-10 pb-20">
          <LoadersPage />
        </article>
        <DocsToc pageId="loaders" />
      </div>
    </>
  );
}
