"use client";

import Link from "next/link";
import { Callout, CodeBlock, PageTabs, PageTab, TabPane } from "../ui";
import LoaderPreviews from "../loaders/LoaderPreviews";
import DocNav from "../DocNav";

function showToast() {
  window.dispatchEvent(new CustomEvent("docs:copy"));
}

export default function LoadersPage() {
  return (
    <>
      <div className="flex items-center gap-2 text-xs text-[var(--muted)] mb-5">
        <Link href="/docs" className="text-[var(--muted)] no-underline hover:text-[var(--text)]">Docs</Link>
        <span>›</span>
        <span>Components</span>
        <span>›</span>
        <span>Loaders</span>
      </div>
      <h1 className="font-syne font-extrabold text-[38px] leading-[1.05] tracking-tight mb-3.5">
        Loaders
      </h1>
      <p className="text-base text-[var(--muted2)] leading-[1.75] mb-9 max-w-[620px]">
        12 animated loading indicators — from classic spinners to skeleton screens, pulses, orbits, and more. All CSS-only, no JS required.
      </p>

      <Callout type="info" icon="💡">
        <div>
          All loaders are <strong className="text-inherit">CSS animation only</strong>. No JavaScript, no library. Hover a card to reveal the Copy button.
        </div>
      </Callout>

      <PageTabs defaultTab="preview">
        <PageTab id="preview">Preview</PageTab>
        <PageTab id="code-all">All Code</PageTab>
        <PageTab id="props">Variants</PageTab>
      </PageTabs>

      <TabPane id="preview">
        <LoaderPreviews onCopy={showToast} />
      </TabPane>

      <TabPane id="code-all">
        <h3 className="font-syne font-bold text-[15px] mt-0 mb-2.5">1. Spinner</h3>
        <CodeBlock
          lang="HTML"
          code={`<div class="w-10 h-10 rounded-full border-[2.5px]
  border-yellow-400/20 border-t-yellow-400 animate-spin"></div>`}
        />
        <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">2. Dots Bounce</h3>
        <CodeBlock
          lang="HTML"
          code={`<div class="flex items-center gap-2">
  <span class="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-bounce" style="animation-delay:0s"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-bounce" style="animation-delay:0.2s"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-orange-400 animate-bounce" style="animation-delay:0.4s"></span>
</div>`}
        />
        <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">3. Indeterminate Bar</h3>
        <CodeBlock
          lang="HTML + CSS"
          code={`<div class="w-36 h-1 bg-white/10 rounded-full overflow-hidden">
  <div class="h-full bg-gradient-to-r from-yellow-400 to-emerald-400 rounded-full animate-[bar_1.6s_ease-in-out_infinite]"></div>
</div>

/* Add to your CSS */
@keyframes bar {
  0% { width: 0%; margin-left: 0%; }
  50% { width: 60%; margin-left: 20%; }
  100% { width: 0%; margin-left: 100%; }
}`}
        />
        <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">4. Double Ring</h3>
        <CodeBlock
          lang="HTML"
          code={`<div class="relative w-11 h-11">
  <div class="absolute inset-0 rounded-full border-[2.5px] border-transparent border-t-yellow-400 animate-[spin_.9s_linear_infinite]"></div>
  <div class="absolute inset-[7px] rounded-full border-[2.5px] border-transparent border-b-emerald-400 animate-[spin_.6s_linear_infinite_reverse]"></div>
</div>`}
        />
        <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">5. Skeleton</h3>
        <CodeBlock
          lang="HTML + CSS"
          code={`<div class="flex flex-col gap-2.5 w-48">
  <div class="h-3 w-3/5 rounded skeleton"></div>
  <div class="h-2 w-full rounded skeleton"></div>
  <div class="h-2 w-4/5 rounded skeleton"></div>
</div>

/* Add to CSS */
.skeleton {
  background: linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%);
  background-size: 400% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}
@keyframes shimmer {
  0% { background-position: 100% 0; }
  100% { background-position: -100% 0; }
}`}
        />
        <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">6. Pulse Blob</h3>
        <CodeBlock
          lang="HTML"
          code={`<div class="w-12 h-12 flex items-center justify-center">
  <div class="w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
</div>`}
        />
        <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">7. Orbit</h3>
        <CodeBlock
          lang="HTML"
          code={`<div class="relative w-12 h-12 flex items-center justify-center">
  <div class="w-3.5 h-3.5 bg-emerald-400 rounded-full z-10"></div>
  <div class="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_2s_linear_infinite]"></div>
</div>`}
        />
        <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">8. Typewriter</h3>
        <CodeBlock
          lang="HTML + CSS"
          code={`<span class="font-mono text-yellow-400 border-r-2 border-yellow-400 pr-1 overflow-hidden whitespace-nowrap animate-[typing_2.5s_steps(14)_infinite_alternate]">Loading...</span>

/* Add to CSS if needed */
@keyframes typing {
  from { width: 0; }
  to { width: 14ch; }
}`}
        />
        <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">9. Squares</h3>
        <CodeBlock
          lang="HTML + CSS"
          code={`<div class="grid grid-cols-2 gap-1">
  <div class="w-3.5 h-3.5 rounded bg-yellow-400 animate-[sq_.9s_ease-in-out_infinite]"></div>
  <div class="w-3.5 h-3.5 rounded bg-emerald-400 animate-[sq_.9s_ease-in-out_infinite]" style="animation-delay:.3s"></div>
  <div class="w-3.5 h-3.5 rounded bg-orange-400 animate-[sq_.9s_ease-in-out_infinite]" style="animation-delay:.15s"></div>
  <div class="w-3.5 h-3.5 rounded bg-violet-400 animate-[sq_.9s_ease-in-out_infinite]" style="animation-delay:.45s"></div>
</div>

/* Add to CSS */
@keyframes sq {
  0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
  40% { opacity: 1; transform: scale(1.1); }
}`}
        />
        <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">10. Progress Bar</h3>
        <CodeBlock
          lang="HTML + CSS"
          code={`<div class="w-36 flex flex-col gap-2">
  <div class="flex justify-between text-xs text-zinc-500"><span>Loading</span><span>...</span></div>
  <div class="h-1.5 bg-white/5 rounded-full overflow-hidden">
    <div class="h-full bg-yellow-400 rounded-full animate-[progress_2.5s_ease-in-out_infinite]"></div>
  </div>
</div>

/* Add to CSS */
@keyframes progress {
  0% { width: 0%; }
  60% { width: 80%; }
  85% { width: 82%; }
  100% { width: 100%; }
}`}
        />
        <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">11. Heartbeat</h3>
        <CodeBlock
          lang="HTML + CSS"
          code={`<svg viewBox="0 0 120 40" class="w-32 h-10">
  <path d="M0,20 L20,20 L30,5 L40,35 L50,12 L60,28 L70,20 L120,20"
    stroke="#e8ff47" stroke-width="2" fill="none"
    stroke-dasharray="300" stroke-dashoffset="300"
    style="animation: draw 1.8s ease-in-out infinite"/>
</svg>

/* Add to CSS */
@keyframes draw {
  0% { stroke-dashoffset: 300; opacity: 0; }
  30% { opacity: 1; }
  70% { stroke-dashoffset: 0; opacity: 1; }
  100% { stroke-dashoffset: -300; opacity: 0; }
}`}
        />
        <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">12. Ripple</h3>
        <CodeBlock
          lang="HTML + CSS"
          code={`<div class="relative w-14 h-14 flex items-center justify-center">
  <div class="ripple-ring"></div>
  <div class="ripple-ring" style="animation-delay:0.7s"></div>
  <div class="ripple-ring" style="animation-delay:1.4s"></div>
  <div class="w-2 h-2 bg-yellow-400 rounded-full z-10"></div>
</div>

.ripple-ring {
  position: absolute; border-radius: 50%;
  border: 1.5px solid #e8ff47;
  animation: ripple 2s ease-out infinite;
}
@keyframes ripple {
  0%  { width: 8px; height: 8px; opacity: 1; }
  100%{ width: 56px; height: 56px; opacity: 0; }
}`}
        />
      </TabPane>

      <TabPane id="props">
        <h3 className="font-syne font-bold text-[15px] mt-0 mb-2.5">Available Loaders</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr>
                <th className="text-left py-2.5 px-3.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)] border-b border-[var(--border)]">
                  Name
                </th>
                <th className="text-left py-2.5 px-3.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)] border-b border-[var(--border)]">
                  Type
                </th>
                <th className="text-left py-2.5 px-3.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)] border-b border-[var(--border)]">
                  Use Case
                </th>
                <th className="text-left py-2.5 px-3.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)] border-b border-[var(--border)]">
                  CSS Only
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["spinner", "ring", "General loading states", "✓"],
                ["dots-bounce", "dots", "Chat, typing indicator", "✓"],
                ["bar", "linear", "Page top, file upload", "✓"],
                ["double-ring", "ring", "Processing, sync", "✓"],
                ["skeleton", "placeholder", "Content placeholder", "✓"],
                ["pulse-blob", "blob", "Status indicator", "✓"],
                ["orbit", "orbital", "Complex processing", "✓"],
                ["typewriter", "text", "AI/chat interfaces", "✓"],
                ["squares", "grid", "Dashboard loading", "✓"],
                ["progress", "linear", "Upload, download", "✓"],
                ["heartbeat", "svg line", "Health/monitoring", "✓"],
                ["ripple", "radial", "Location, broadcast", "✓"],
              ].map(([name, type, useCase, css]) => (
                <tr key={name} className="hover:bg-white/[0.02]">
                  <td className="py-2.5 px-3.5 text-[#60a5fa] font-mono text-xs border-b border-white/[0.04]">
                    {name}
                  </td>
                  <td className="py-2.5 px-3.5 text-[var(--accent3)] font-mono text-xs border-b border-white/[0.04]">
                    {type}
                  </td>
                  <td className="py-2.5 px-3.5 text-[var(--muted2)] border-b border-white/[0.04]">
                    {useCase}
                  </td>
                  <td className="py-2.5 px-3.5 text-[var(--muted2)] border-b border-white/[0.04]">
                    {css}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="font-syne font-bold text-[15px] mt-7 mb-2.5">Color Customization</h3>
        <p className="text-[var(--muted2)] leading-[1.75] mb-3.5">
          Every loader uses CSS custom properties that match your Tailwind theme. Swap colors by replacing the accent classes:
        </p>
        <div className="flex flex-wrap gap-2 my-3">
          <span className="text-xs py-1 px-3 rounded-full border border-[var(--border)] text-[var(--accent)] bg-[rgba(232,255,71,0.1)] border-[rgba(232,255,71,0.3)]">
            yellow-400 (default)
          </span>
          <span className="text-xs py-1 px-3 rounded-full border border-[var(--border)] text-[var(--muted2)] cursor-pointer hover:border-[rgba(232,255,71,0.3)] hover:text-[var(--accent)]">
            blue-500
          </span>
          <span className="text-xs py-1 px-3 rounded-full border border-[var(--border)] text-[var(--muted2)] cursor-pointer hover:border-[rgba(232,255,71,0.3)] hover:text-[var(--accent)]">
            emerald-400
          </span>
          <span className="text-xs py-1 px-3 rounded-full border border-[var(--border)] text-[var(--muted2)] cursor-pointer hover:border-[rgba(232,255,71,0.3)] hover:text-[var(--accent)]">
            rose-500
          </span>
          <span className="text-xs py-1 px-3 rounded-full border border-[var(--border)] text-[var(--muted2)] cursor-pointer hover:border-[rgba(232,255,71,0.3)] hover:text-[var(--accent)]">
            violet-500
          </span>
          <span className="text-xs py-1 px-3 rounded-full border border-[var(--border)] text-[var(--muted2)] cursor-pointer hover:border-[rgba(232,255,71,0.3)] hover:text-[var(--accent)]">
            white
          </span>
        </div>
      </TabPane>

      <DocNav
        prev={{ href: "/docs/how-to-use", title: "How to Use" }}
        next={{ href: "/docs/navbars", title: "Navbars" }}
      />
    </>
  );
}
