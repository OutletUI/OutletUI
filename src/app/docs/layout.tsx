import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import CopyToast from "@/components/docs/CopyToast";
import { buildDocMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildDocMeta(
    "Documentation",
    "Documentation for OutletUI. Copy-paste UI components powered by Tailwind CSS. Loaders, navbars, heroes, cards, and more.",
    "/docs"
  ),
  title: "Docs",
};

export default function DocsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocsLayout>
      {children}
      <CopyToast />
    </DocsLayout>
  );
}
