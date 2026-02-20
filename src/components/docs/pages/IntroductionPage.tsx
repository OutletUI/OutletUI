import Link from "next/link";
import { Callout, StepsList, StepItem } from "../ui";
import DocNav from "../DocNav";

export default function IntroductionPage() {
  return (
    <>
      <div className="flex items-center gap-2 text-xs text-[var(--muted)] mb-5">
        <Link href="/docs" className="text-[var(--muted)] no-underline hover:text-[var(--text)]">
          Docs
        </Link>
        <span>›</span>
        <span>Introduction</span>
      </div>
      <h1 className="font-syne font-extrabold text-[38px] leading-[1.05] tracking-tight mb-3.5">
        Welcome to OutletUI
      </h1>
      <p className="text-base text-[var(--muted2)] leading-[1.75] mb-9 max-w-[620px]">
        Beautiful, copy-paste UI components powered by Tailwind CSS. Zero install, zero config — just
        open, copy, and ship.
      </p>

      <Callout type="info" icon="💡">
        <div>
          OutletUI is <strong className="text-inherit">not an npm package</strong>. There&apos;s
          nothing to install. Browse a component, copy the code, paste it into your project — done.
        </div>
      </Callout>

      <h2
        id="what-is"
        className="font-syne font-bold text-[21px] tracking-tight mt-[52px] mb-4 pt-[52px] border-t border-[var(--border)] scroll-mt-20 first:mt-0 first:border-0 first:pt-0"
      >
        What is OutletUI?
      </h2>
      <p className="text-[var(--muted2)] leading-[1.75] mb-3.5">
        OutletUI is a free, open-source library of production-ready UI components built with{" "}
        <strong className="text-[var(--text)] font-semibold">Tailwind CSS</strong>. Unlike
        traditional component libraries, OutletUI requires no installation, no bundler, and no
        framework dependency.
      </p>
      <p className="text-[var(--muted2)] leading-[1.75] mb-3.5">
        Every component is <strong className="text-[var(--text)] font-semibold">plain HTML + Tailwind
        classes</strong>. You browse, preview, click copy, and paste. The component is already
        styled and responsive — customize it however you like.
      </p>

      <h2
        id="why"
        className="font-syne font-bold text-[21px] tracking-tight mt-[52px] mb-4 pt-[52px] border-t border-[var(--border)] scroll-mt-20"
      >
        Why OutletUI?
      </h2>
      <StepsList>
        <StepItem number={1} title="No Installation">
          <p>Zero npm packages to install. No peer dependencies, no version conflicts, no{" "}
            <code className="font-mono text-xs bg-white/[0.07] border border-[var(--border)] rounded px-1.5 py-0.5 text-[var(--accent)]">
              node_modules
            </code>.
          </p>
        </StepItem>
        <StepItem number={2} title="Framework Agnostic">
          <p>Works with React, Vue, Svelte, plain HTML — any project that uses Tailwind CSS.</p>
        </StepItem>
        <StepItem number={3} title="Fully Yours">
          <p>Once you copy the code, it&apos;s yours. No theme provider, no context, no magic — just markup you control.</p>
        </StepItem>
        <StepItem number={4} title="Multiple Themes">
          <p>Switch between 15+ pre-built themes or tweak individual components with your own Tailwind config.</p>
        </StepItem>
      </StepsList>

      <DocNav next={{ href: "/docs/installation", title: "Installation / Setup" }} />
    </>
  );
}
