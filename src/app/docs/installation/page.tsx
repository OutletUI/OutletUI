import type { Metadata } from "next";
import DocsToc from "@/components/docs/DocsToc";
import InstallationPage from "@/components/docs/pages/InstallationPage";
import { buildDocMeta } from "@/lib/seo";

export const metadata: Metadata = buildDocMeta(
  "Installation / Setup",
  "Install OutletUI via CDN, Tailwind CLI, or your framework. Quick setup for copy-paste Tailwind UI components.",
  "/docs/installation",
  ["installation", "setup", "CDN", "Tailwind CLI", "OutletUI install", "AI search"]
);

export default function InstallationDocsPage() {
  return (
    <>
      <div className="flex-1 min-w-0 flex">
        <article className="flex-1 min-w-0 max-w-[860px] py-12 px-10 pb-20">
          <InstallationPage />
        </article>
        <DocsToc pageId="installation" />
      </div>
    </>
  );
}
