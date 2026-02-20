import Link from "next/link";
import { Callout } from "../ui";
import DocNav from "../DocNav";

type PlaceholderPageProps = {
  title: string;
};

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <>
      <div className="flex items-center gap-2 text-xs text-[var(--muted)] mb-5">
        <Link href="/docs" className="text-[var(--muted)] no-underline hover:text-[var(--text)]">Docs</Link>
        <span>›</span>
        <span id="placeholder-crumb">{title}</span>
      </div>
      <h1 className="font-syne font-extrabold text-[38px] leading-[1.05] tracking-tight mb-3.5">
        {title}
      </h1>
      <p className="text-base text-[var(--muted2)] leading-[1.75] mb-9 max-w-[620px]">
        This page is being written. Check back soon — or jump over to the Loaders page to see a complete example.
      </p>
      <Callout type="tip" icon="🚧">
        <div>
          OutletUI is in public beta. New component docs are added weekly.{" "}
          <a href="#" className="text-[var(--accent)] no-underline hover:underline">
            Star on GitHub
          </a>{" "}
          to stay updated.
        </div>
      </Callout>
      <DocNav prev={{ href: "/docs/loaders", title: "Loaders" }} />
    </>
  );
}
