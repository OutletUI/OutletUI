import DocsLayout from "@/components/docs/DocsLayout";
import CopyToast from "@/components/docs/CopyToast";

export const metadata = {
  title: "OutletUI — Docs",
  description:
    "Documentation for OutletUI. Copy-paste UI components powered by Tailwind CSS.",
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
