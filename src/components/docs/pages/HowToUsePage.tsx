import Link from "next/link";
import { Callout, CodeBlock } from "../ui";
import DocNav from "../DocNav";

export default function HowToUsePage() {
  return (
    <>
      <div className="flex items-center gap-2 text-xs text-[var(--muted)] mb-5">
        <Link href="/docs" className="text-[var(--muted)] no-underline hover:text-[var(--text)]">Docs</Link>
        <span>›</span>
        <span>Getting Started</span>
        <span>›</span>
        <span>How to Use</span>
      </div>
      <h1 className="font-syne font-extrabold text-[38px] leading-[1.05] tracking-tight mb-3.5">
        How to Use
      </h1>
      <p className="text-base text-[var(--muted2)] leading-[1.75] mb-9 max-w-[620px]">
        Three steps to go from browsing to shipped. Each component is copy-paste ready.
      </p>

      <h2
        id="step1"
        className="font-syne font-bold text-[21px] tracking-tight mt-[52px] mb-4 pt-[52px] border-t border-[var(--border)] scroll-mt-20 first:mt-0 first:border-0 first:pt-0"
      >
        Step 1 — Browse
      </h2>
      <p className="text-[var(--muted2)] leading-[1.75] mb-3.5">
        Navigate the sidebar to find the component you need. Each component page shows all variants with live previews.
      </p>

      <h2 id="step2" className="font-syne font-bold text-[21px] tracking-tight mt-[52px] mb-4 pt-[52px] border-t border-[var(--border)] scroll-mt-20">
        Step 2 — Copy
      </h2>
      <p className="text-[var(--muted2)] leading-[1.75] mb-3.5">
        Click the <strong className="text-[var(--text)] font-semibold">Copy</strong> button on any preview. The full HTML with Tailwind classes is copied to your clipboard.
      </p>
      <Callout type="tip" icon="💡">
        <div>
          Each component also has a <strong className="text-inherit">JSX tab</strong> for React users and a <strong className="text-inherit">Vue tab</strong> for Vue users — same component, framework-ready syntax.
        </div>
      </Callout>

      <h2 id="step3" className="font-syne font-bold text-[21px] tracking-tight mt-[52px] mb-4 pt-[52px] border-t border-[var(--border)] scroll-mt-20">
        Step 3 — Paste & Customize
      </h2>
      <p className="text-[var(--muted2)] leading-[1.75] mb-3.5">
        Paste the code into your project. Because it&apos;s just Tailwind classes, you customize it like any other HTML: change colors, sizes, spacing directly in your markup.
      </p>
      <CodeBlock
        lang="HTML — Example: Spinner Loader"
        code={`<!-- Paste this wherever you need a loader -->
<div class="flex items-center justify-center">
  <div class="w-10 h-10 rounded-full border-2 border-yellow-400/20 border-t-yellow-400 animate-spin">
  </div>
</div>`}
      />
      <p className="text-[var(--muted2)] leading-[1.75] mb-3.5">
        That&apos;s really it. No provider wrapping, no context, no imports from any package.
      </p>

      <DocNav
        prev={{ href: "/docs/installation", title: "Installation" }}
        next={{ href: "/docs/loaders", title: "Loaders" }}
      />
    </>
  );
}
