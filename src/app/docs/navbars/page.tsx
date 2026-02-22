import type { Metadata } from "next";
import DocsToc from "@/components/docs/DocsToc";
import NavbarsPage from "@/components/docs/pages/NavbarsPage";
import { buildDocMeta } from "@/lib/seo";

export const metadata: Metadata = buildDocMeta(
  "Navbars",
  "Copy-paste navbar and navigation components for Tailwind CSS. 10 navbars in OutletUI.",
  "/docs/navbars",
  ["navbar", "navigation", "header component", "Tailwind navbar", "copy paste nav", "AI search", "React navbar"]
);

export default function NavbarsDocsPage() {
  return (
    <>
      <div className="flex-1 min-w-0 flex">
        <article className="flex-1 min-w-0 max-w-[860px] py-12 px-10 pb-20">
          <NavbarsPage />
        </article>
        <DocsToc pageId="navbars" />
      </div>
    </>
  );
}
