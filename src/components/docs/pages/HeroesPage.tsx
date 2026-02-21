"use client";

import Link from "next/link";
import { Callout, CodeBlock, PageTabs, PageTab, TabPane } from "../ui";
import HeroPreviews from "../heroes/HeroPreviews";
import DocNav from "../DocNav";

function showToast() {
  window.dispatchEvent(new CustomEvent("docs:copy"));
}

const VARIANTS_TABLE = [
  { num: 1, name: "Electric Dark", theme: "Dark", bestFor: "SaaS, Product", tags: "Grid BG, Stats" },
  { num: 2, name: "Split Layout", theme: "Light", bestFor: "Agency, Editorial", tags: "Text + Visual, Serif" },
  { num: 3, name: "Brutalist Magazine", theme: "Light", bestFor: "Editorial, Art", tags: "Strip, Bold" },
  { num: 4, name: "Gradient Mesh + CTA", theme: "Dark", bestFor: "SaaS, Startup", tags: "Email input, Mesh BG" },
  { num: 5, name: "Cinematic Full-bleed", theme: "Dark", bestFor: "Film, Media", tags: "Bottom-anchored" },
  { num: 6, name: "Typographic Spotlight", theme: "Light", bestFor: "Portfolio, Minimal", tags: "Outline text" },
  { num: 7, name: "Neon Terminal", theme: "Dark", bestFor: "Dev tools, API", tags: "Glow, Terminal" },
  { num: 8, name: "Warm Pastel Startup", theme: "Light", bestFor: "Startup, SaaS", tags: "Blob BG, Social proof" },
  { num: 9, name: "Feature List + Dashboard", theme: "Dark", bestFor: "SaaS, Dashboard", tags: "Two-column, Metrics" },
];

export default function HeroesPage() {
  return (
    <>
      <div className="flex items-center gap-2 text-xs text-[var(--muted)] mb-5">
        <Link href="/docs" className="text-[var(--muted)] no-underline hover:text-[var(--text)]">
          Docs
        </Link>
        <span>›</span>
        <span>Components</span>
        <span>›</span>
        <span>Hero Sections</span>
      </div>
      <h1 className="font-syne font-extrabold text-[38px] leading-[1.05] tracking-tight mb-3.5">
        Hero Sections
      </h1>
      <p className="text-base text-[var(--muted2)] leading-[1.75] mb-9 max-w-[620px]">
        9 battle-tested hero layouts — dark, light, split, cinematic, editorial, neon, pastel. Every one is live. Click Copy HTML to grab the code.
      </p>

      <Callout type="info" icon="💡">
        <div>
          Use the filter chips to show <strong className="text-inherit">All</strong>, <strong className="text-inherit">Dark</strong>, <strong className="text-inherit">Light</strong>, <strong className="text-inherit">Split</strong>, <strong className="text-inherit">Centered</strong>, or <strong className="text-inherit">Animated</strong> heroes. Each card has a Copy HTML button for the full Tailwind markup.
        </div>
      </Callout>

      <PageTabs defaultTab="hero-preview">
        <PageTab id="hero-preview">Preview</PageTab>
        <PageTab id="hero-code">Code</PageTab>
        <PageTab id="hero-variants">Variants</PageTab>

        <TabPane id="hero-preview">
          <HeroPreviews onCopy={showToast} />
        </TabPane>

        <TabPane id="hero-code">
          <h3 className="font-syne font-bold text-[15px] mt-0 mb-2.5">1. Electric Dark (SaaS)</h3>
          <CodeBlock
            lang="HTML"
            code={`<!-- Grid + glow + badge + stats -->
<section class="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#080810] overflow-hidden">
  <div class="absolute inset-0 pointer-events-none"
    style="background-image:linear-gradient(rgba(255,255,255,.025)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025)1px,transparent 1px);background-size:48px 48px;mask-image:radial-gradient(ellipse 70% 60% at 50% 50%,black,transparent)">
  </div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
    style="background:radial-gradient(ellipse,rgba(232,255,71,.1),transparent 70%)"></div>
  <div class="relative flex items-center gap-2 bg-yellow-400/[0.08] border border-yellow-400/20 rounded-full px-4 py-1.5 text-xs text-yellow-400 mb-7">
    <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
    Now in Public Beta
  </div>
  <h1 class="relative font-black text-white leading-none tracking-tight mb-5" style="font-size:clamp(44px,8vw,80px);letter-spacing:-0.03em">
    Build faster<br>ship <span class="text-yellow-400">smarter</span>
  </h1>
  <p class="relative text-white/45 text-lg max-w-md leading-relaxed mb-9">The UI component library that gets out of your way.</p>
  <div class="relative flex gap-3">
    <button class="bg-yellow-400 text-black font-bold text-sm px-7 py-3.5 rounded-lg">Get Started →</button>
    <button class="bg-white/[0.06] text-white font-semibold text-sm px-7 py-3.5 rounded-lg border border-white/10">View Demo</button>
  </div>
  <div class="relative flex gap-10 mt-14">
    <div class="text-center"><div class="font-black text-white text-2xl">200+</div><div class="text-[11px] text-white/35 uppercase">Components</div></div>
    <div class="text-center"><div class="font-black text-white text-2xl">15K</div><div class="text-[11px] text-white/35 uppercase">Developers</div></div>
    <div class="text-center"><div class="font-black text-white text-2xl">100%</div><div class="text-[11px] text-white/35 uppercase">Free</div></div>
  </div>
</section>`}
          />
          <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">4. Gradient Mesh + Email CTA</h3>
          <CodeBlock
            lang="HTML"
            code={`<!-- Mesh background + gradient headline + email input -->
<section class="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#06060f] overflow-hidden">
  <div class="absolute inset-0 pointer-events-none" style="background:
    radial-gradient(ellipse 60% 50% at 20% 20%,rgba(71,255,178,.12),transparent 60%),
    radial-gradient(ellipse 50% 40% at 80% 80%,rgba(255,107,71,.1),transparent 60%),
    radial-gradient(ellipse 40% 60% at 60% 10%,rgba(232,255,71,.08),transparent 60%)">
  </div>
  <h1 class="relative font-black text-white leading-none" style="font-size:clamp(40px,7vw,88px);letter-spacing:-0.03em">
    Create without
    <span style="background:linear-gradient(135deg,#e8ff47,#47ffb2,#60a5fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">limits</span>
  </h1>
  <div class="relative flex w-full max-w-md bg-white/[0.05] border border-white/10 rounded-xl overflow-hidden mt-5">
    <input type="email" placeholder="Enter your email..." class="flex-1 bg-transparent border-none outline-none px-5 py-3.5 text-sm text-white placeholder:text-white/25">
    <button class="bg-yellow-400 text-black font-bold text-sm px-6 py-3.5 whitespace-nowrap">Start free →</button>
  </div>
</section>`}
          />
          <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">9. Feature List + Dashboard</h3>
          <CodeBlock
            lang="HTML"
            code={`<!-- Two-column: features + metric cards -->
<section class="bg-[#0c0c14] min-h-screen grid grid-cols-2 items-center">
  <div class="px-16 py-20">
    <div class="flex items-center gap-2 mb-5">
      <div class="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
      <span class="text-xs font-bold tracking-widest uppercase text-yellow-400">Built for scale</span>
    </div>
    <h1 class="font-black text-white leading-tight mb-5" style="font-size:clamp(32px,4vw,52px);letter-spacing:-0.025em">
      The toolkit your team actually ships with.
    </h1>
    <div class="flex flex-col gap-3 mb-9">
      <div class="flex items-center gap-2.5 text-sm text-white/60">
        <div class="w-4.5 h-4.5 rounded-md bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-[10px] text-yellow-400">✓</div>
        Zero install, works instantly
      </div>
      <!-- ... more features ... -->
    </div>
    <button class="bg-yellow-400 text-black font-bold text-sm px-6 py-3 rounded-lg">Get started →</button>
  </div>
  <div class="flex flex-col gap-3 px-10 py-20">
    <div class="bg-[#141420] border border-white/[0.07] rounded-xl p-4">
      <div class="flex items-center gap-2.5 mb-3">
        <div class="w-8 h-8 rounded-lg bg-yellow-400/10 flex items-center justify-center text-sm">⚡</div>
        <span class="font-bold text-white text-sm">Performance</span>
        <span class="text-xs text-white/35 ml-auto">98/100</span>
      </div>
      <div class="h-1 bg-white/[0.06] rounded-full overflow-hidden">
        <div class="h-full w-[98%] bg-yellow-400 rounded-full"></div>
      </div>
    </div>
    <!-- ... more metric cards ... -->
  </div>
</section>`}
          />
        </TabPane>

        <TabPane id="hero-variants">
          <h3 className="font-syne font-bold text-[15px] mt-0 mb-2.5">All Hero Variants</h3>
          <div className="overflow-x-auto my-4">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr>
                  <th className="text-left py-2.5 px-3.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)] border-b border-[var(--border)]">
                    #
                  </th>
                  <th className="text-left py-2.5 px-3.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)] border-b border-[var(--border)]">
                    Name
                  </th>
                  <th className="text-left py-2.5 px-3.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)] border-b border-[var(--border)]">
                    Theme
                  </th>
                  <th className="text-left py-2.5 px-3.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)] border-b border-[var(--border)]">
                    Best For
                  </th>
                  <th className="text-left py-2.5 px-3.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)] border-b border-[var(--border)]">
                    Tags
                  </th>
                </tr>
              </thead>
              <tbody>
                {VARIANTS_TABLE.map((row) => (
                  <tr key={row.num} className="hover:bg-white/[0.02]">
                    <td className="py-2.5 px-3.5 text-[var(--muted2)] border-b border-white/[0.04]">
                      {row.num}
                    </td>
                    <td className="py-2.5 px-3.5 text-[var(--muted2)] border-b border-white/[0.04]">
                      {row.name}
                    </td>
                    <td className="py-2.5 px-3.5 text-[var(--muted2)] border-b border-white/[0.04]">
                      {row.theme}
                    </td>
                    <td className="py-2.5 px-3.5 text-[var(--muted2)] border-b border-white/[0.04]">
                      {row.bestFor}
                    </td>
                    <td className="py-2.5 px-3.5 text-[var(--muted2)] border-b border-white/[0.04] text-xs">
                      {row.tags}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPane>
      </PageTabs>

      <DocNav
        prev={{ href: "/docs/navbars", title: "Navbars" }}
        next={{ href: "/docs/cards", title: "Cards" }}
      />
    </>
  );
}
