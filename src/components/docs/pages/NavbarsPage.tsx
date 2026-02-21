"use client";

import Link from "next/link";
import { Callout, CodeBlock, PageTabs, PageTab, TabPane } from "../ui";
import NavbarPreviews from "../navbars/NavbarPreviews";
import DocNav from "../DocNav";

function showToast() {
  window.dispatchEvent(new CustomEvent("docs:copy"));
}

const VARIANTS_TABLE = [
  { num: 1, name: "Frosted Glass", theme: "Dark", bestFor: "SaaS, Apps", effect: "Backdrop blur" },
  { num: 2, name: "Minimal Light", theme: "Light", bestFor: "Agency, Portfolio", effect: "Underline active" },
  { num: 3, name: "Floating Pill", theme: "Dark", bestFor: "Landing pages", effect: "Pill active highlight" },
  { num: 4, name: "Tabbed Dashboard", theme: "Dark", bestFor: "Admin panels", effect: "Border-bottom tabs" },
  { num: 5, name: "Bold Split", theme: "Two-tone", bestFor: "Creative agency", effect: "Dark/light split" },
  { num: 6, name: "Centered Logo", theme: "Dark", bestFor: "Fashion, Luxury", effect: "Symmetric layout" },
  { num: 7, name: "Gradient Border", theme: "Dark", bestFor: "AI, Startup", effect: "Animated gradient" },
  { num: 8, name: "Brutalist", theme: "Light", bestFor: "Editorial, Art", effect: "Hard borders, uppercase" },
  { num: 9, name: "Dot Accent", theme: "Dark", bestFor: "Dev, Portfolio", effect: "Dot separator + search" },
  { num: 10, name: "Dashboard App Bar", theme: "Dark", bestFor: "SaaS dashboards", effect: "Breadcrumb + notif badge" },
];

export default function NavbarsPage() {
  return (
    <>
      <div className="flex items-center gap-2 text-xs text-[var(--muted)] mb-5">
        <Link href="/docs" className="text-[var(--muted)] no-underline hover:text-[var(--text)]">
          Docs
        </Link>
        <span>›</span>
        <span>Components</span>
        <span>›</span>
        <span>Navbars</span>
      </div>
      <h1 className="font-syne font-extrabold text-[38px] leading-[1.05] tracking-tight mb-3.5">
        Navbars
      </h1>
      <p className="text-base text-[var(--muted2)] leading-[1.75] mb-9 max-w-[620px]">
        10 production-ready navigation bars — from floating pills to brutalist banners. Every variant is live, interactive, and copy-paste ready. No JS required for most styles.
      </p>

      <Callout type="info" icon="💡">
        <div>
          All navbars are <strong className="text-inherit">fully responsive</strong>. Click <strong className="text-inherit">Copy HTML</strong> on any card to grab the code. Hover links inside the previews to see transition effects.
        </div>
      </Callout>

      <PageTabs defaultTab="nb-preview">
        <PageTab id="nb-preview">Preview</PageTab>
        <PageTab id="nb-code">Code</PageTab>
        <PageTab id="nb-variants">Variants</PageTab>

        <TabPane id="nb-preview">
          <NavbarPreviews onCopy={showToast} />
        </TabPane>

        <TabPane id="nb-code">
          <h3 className="font-syne font-bold text-[15px] mt-0 mb-2.5">1. Frosted Glass</h3>
          <CodeBlock
            lang="HTML + CSS"
            code={`<!-- Frosted Glass Navbar -->
<nav class="flex items-center justify-between
  bg-white/[0.04] backdrop-blur-xl border border-white/[0.08]
  rounded-xl px-5 py-3">

  <!-- Logo -->
  <div class="flex items-center gap-1.5 font-black text-white text-base">
    <div class="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_#e8ff47]"></div>
    Acme
  </div>

  <!-- Links -->
  <div class="flex gap-1">
    <a href="#" class="text-sm px-3 py-1.5 rounded-lg hover:bg-white/[0.07] transition-colors text-white/55">Home</a>
    <a href="#" class="text-sm px-3 py-1.5 rounded-lg hover:bg-white/[0.07] transition-colors text-white/55">Products</a>
    <a href="#" class="text-sm px-3 py-1.5 rounded-lg hover:bg-white/[0.07] transition-colors text-white/55">Pricing</a>
  </div>

  <!-- CTA -->
  <div class="flex items-center gap-2.5">
    <div class="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-emerald-400"></div>
    <button class="bg-yellow-400 text-black font-bold text-xs px-4 py-1.5 rounded-lg">Get Started</button>
  </div>

</nav>`}
          />
          <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">3. Floating Pill</h3>
          <CodeBlock
            lang="HTML"
            code={`<div class="flex justify-center">
  <nav class="flex items-center gap-1 bg-zinc-900 border border-white/10 rounded-full px-4 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
    <span class="font-black text-white text-sm mr-2">⬡</span>
    <a href="#" class="text-xs px-3.5 py-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/[0.07] transition-all">Home</a>
    <a href="#" class="text-xs px-3.5 py-1.5 rounded-full bg-yellow-400 text-black font-semibold">Explore</a>
    <a href="#" class="text-xs px-3.5 py-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/[0.07] transition-all">Pricing</a>
    <button class="ml-2 text-xs font-bold bg-white/90 text-black px-4 py-1.5 rounded-full">Sign up</button>
  </nav>
</div>`}
          />
          <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">7. Animated Gradient Border</h3>
          <CodeBlock
            lang="HTML + CSS"
            code={`<!-- Gradient border needs custom CSS keyframe -->
<div class="p-[1.5px] rounded-xl nav-grad-wrap">
  <nav class="bg-[#0d0d1a] rounded-[10px] flex items-center justify-between px-5 py-2.5">
    <span class="font-black text-white text-sm">⬡ Gradient</span>
    <div class="flex gap-1">
      <a href="#" class="text-xs text-white/50 hover:text-white px-3 py-1.5 rounded-md transition-colors">Features</a>
      <a href="#" class="text-xs text-white/50 hover:text-white px-3 py-1.5 rounded-md transition-colors">Pricing</a>
    </div>
    <button class="text-xs font-bold px-4 py-1.5 rounded-lg bg-gradient-to-r from-yellow-400 to-emerald-400 text-black">Start free →</button>
  </nav>
</div>

/* Required CSS */
.nav-grad-wrap {
  background: linear-gradient(90deg, #e8ff47, #47ffb2, #ff6b47, #e8ff47);
  background-size: 300% 100%;
  animation: grad-shift 4s linear infinite;
}
@keyframes grad-shift {
  0% { background-position: 0%; }
  100% { background-position: 300%; }
}`}
          />
          <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">8. Brutalist</h3>
          <CodeBlock
            lang="HTML"
            code={`<nav class="flex items-stretch border-b-[3px] border-black bg-[#f0ede6]">
  <div class="px-6 py-3.5 border-r-[3px] border-black bg-yellow-400 font-black text-lg tracking-tight">BRUT</div>
  <div class="flex">
    <a href="#" class="px-5 flex items-center text-[11px] font-bold uppercase tracking-widest border-r border-black/10 bg-black text-yellow-400">Work</a>
    <a href="#" class="px-5 flex items-center text-[11px] font-bold uppercase tracking-widest border-r border-black/10 hover:bg-black hover:text-[#f0ede6] transition-colors">About</a>
    <a href="#" class="px-5 flex items-center text-[11px] font-bold uppercase tracking-widest border-r border-black/10 hover:bg-black hover:text-[#f0ede6] transition-colors">Blog</a>
  </div>
  <div class="ml-auto flex items-center px-5">
    <button class="bg-black text-yellow-400 font-black text-[11px] uppercase tracking-wider px-5 py-2">Contact</button>
  </div>
</nav>`}
          />
        </TabPane>

        <TabPane id="nb-variants">
          <h3 className="font-syne font-bold text-[15px] mt-0 mb-2.5">All Navbar Variants</h3>
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
                    Special Effect
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
                    <td className="py-2.5 px-3.5 text-[var(--muted2)] border-b border-white/[0.04]">
                      {row.effect}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">Customization Tips</h3>
          <p className="text-[var(--muted2)] leading-[1.75] mb-3.5">
            All navbars use semantic Tailwind classes. Common things to change:
          </p>
          <Callout type="tip" icon="🎨">
            <div>
              <strong>Swap accent color:</strong> Replace <code>yellow-400</code> / <code>#e8ff47</code> with any Tailwind color like <code>blue-500</code>, <code>violet-500</code>, or <code>rose-400</code>.
              <br />
              <br />
              <strong>Make it sticky:</strong> Add <code>fixed top-0 left-0 right-0 z-50</code> to any navbar wrapper.
              <br />
              <br />
              <strong>Add blur on scroll:</strong> Use a tiny JS scroll listener to toggle <code>backdrop-blur-lg bg-black/60</code> classes dynamically.
            </div>
          </Callout>
        </TabPane>
      </PageTabs>

      <DocNav
        prev={{ href: "/docs/loaders", title: "Loaders" }}
        next={{ href: "/docs/heroes", title: "Hero Sections" }}
      />
    </>
  );
}
