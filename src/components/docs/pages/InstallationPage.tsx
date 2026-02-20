import Link from "next/link";
import { Callout, CodeBlock } from "../ui";
import DocNav from "../DocNav";

export default function InstallationPage() {
  return (
    <>
      <div className="flex items-center gap-2 text-xs text-[var(--muted)] mb-5">
        <Link href="/docs" className="text-[var(--muted)] no-underline hover:text-[var(--text)]">Docs</Link>
        <span>›</span>
        <span>Getting Started</span>
        <span>›</span>
        <span>Installation</span>
      </div>
      <h1 className="font-syne font-extrabold text-[38px] leading-[1.05] tracking-tight mb-3.5">
        Installation & Setup
      </h1>
      <p className="text-base text-[var(--muted2)] leading-[1.75] mb-9 max-w-[620px]">
        OutletUI has no npm package. Setup is just making sure Tailwind CSS is available in your project.
      </p>

      <Callout type="tip" icon="✅">
        <div>If you already have Tailwind CSS in your project, you&apos;re done. Just start copying components.</div>
      </Callout>

      <h2
        id="option-1"
        className="font-syne font-bold text-[21px] tracking-tight mt-[52px] mb-4 pt-[52px] border-t border-[var(--border)] scroll-mt-20 first:mt-0 first:border-0 first:pt-0"
      >
        Option 1 — CDN (Quickest)
      </h2>
      <p className="text-[var(--muted2)] leading-[1.75] mb-3.5">
        If you&apos;re building a static page or just want to prototype fast, add the Tailwind CDN to your HTML. No build step required.
      </p>
      <CodeBlock
        lang="HTML"
        code={`<!-- Add to your <head> -->
<script src="https://cdn.tailwindcss.com"></script>`}
      >
        <span className="text-[#7ee787]">{`<!-- Add to your <head> -->`}</span>
        {"\n"}
        <span className="text-[#7ee787]">{`<script`}</span>{" "}
        <span className="text-[#79c0ff]">src</span>
        <span className="text-[#c9d1d9]">=</span>
        <span className="text-[#a5d6ff]">&quot;https://cdn.tailwindcss.com&quot;</span>
        <span className="text-[#7ee787]">{`></script>`}</span>
      </CodeBlock>
      <Callout type="warn" icon="⚠️">
        <div>
          The CDN version is <strong className="text-inherit">not recommended for production</strong> — it loads all Tailwind utilities (~3MB). Use the CLI or PostCSS for production.
        </div>
      </Callout>

      <h2
        id="option-2"
        className="font-syne font-bold text-[21px] tracking-tight mt-[52px] mb-4 pt-[52px] border-t border-[var(--border)] scroll-mt-20"
      >
        Option 2 — Tailwind CLI
      </h2>
      <p className="text-[var(--muted2)] leading-[1.75] mb-3.5">
        The recommended way for any real project. Install Tailwind as a dev dependency and generate a minimal CSS bundle.
      </p>
      <CodeBlock
        lang="Terminal"
        code={`# Install Tailwind CSS
npm install -D tailwindcss
npx tailwindcss init

# Or with PostCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
      />
      <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">Configure content paths</h3>
      <p className="text-[var(--muted2)] leading-[1.75] mb-3.5">
        Tell Tailwind where your HTML files are so it can purge unused classes:
      </p>
      <CodeBlock
        lang="tailwind.config.js"
        code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
      />
      <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">Add directives to your CSS</h3>
      <CodeBlock
        lang="CSS"
        code={`/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`}
      />

      <h2
        id="option-3"
        className="font-syne font-bold text-[21px] tracking-tight mt-[52px] mb-4 pt-[52px] border-t border-[var(--border)] scroll-mt-20"
      >
        Option 3 — Framework Setups
      </h2>
      <div className="flex flex-wrap gap-2 my-3">
        <span className="text-xs py-1 px-3 rounded-full border border-[var(--border)] text-[var(--accent)] bg-[rgba(232,255,71,0.1)] border-[rgba(232,255,71,0.3)]">
          Next.js
        </span>
        <span className="text-xs py-1 px-3 rounded-full border border-[var(--border)] text-[var(--muted2)] cursor-pointer hover:border-[rgba(232,255,71,0.3)] hover:text-[var(--accent)]">
          Vite + React
        </span>
        <span className="text-xs py-1 px-3 rounded-full border border-[var(--border)] text-[var(--muted2)] cursor-pointer hover:border-[rgba(232,255,71,0.3)] hover:text-[var(--accent)]">
          SvelteKit
        </span>
        <span className="text-xs py-1 px-3 rounded-full border border-[var(--border)] text-[var(--muted2)] cursor-pointer hover:border-[rgba(232,255,71,0.3)] hover:text-[var(--accent)]">
          Astro
        </span>
        <span className="text-xs py-1 px-3 rounded-full border border-[var(--border)] text-[var(--muted2)] cursor-pointer hover:border-[rgba(232,255,71,0.3)] hover:text-[var(--accent)]">
          Laravel
        </span>
      </div>
      <CodeBlock
        lang="Terminal — Next.js"
        code={`npx create-next-app@latest my-app --tailwind
# Tailwind is included by default ✓`}
      />

      <DocNav
        prev={{ href: "/docs", title: "Introduction" }}
        next={{ href: "/docs/how-to-use", title: "How to Use" }}
      />
    </>
  );
}
