import type { Metadata } from "next";
import DocsToc from "@/components/docs/DocsToc";
import PlaceholderPage from "@/components/docs/pages/PlaceholderPage";
import { buildDocMeta } from "@/lib/seo";

export const metadata: Metadata = buildDocMeta(
  "Tailwind CSS Setup",
  "Configure Tailwind CSS for OutletUI. Copy-paste UI components with Tailwind.",
  "/docs/tailwind-setup"
);

export default function TailwindSetupDocsPage() {
  return (
    <>
      <div className="flex-1 min-w-0 flex">
        <article className="flex-1 min-w-0 max-w-[860px] py-12 px-10 pb-20">
          <PlaceholderPage title="Tailwind CSS Setup" />
        </article>
        <DocsToc pageId="tailwind-setup" />
      </div>
    </>
  );
}
