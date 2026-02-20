/**
 * Copy-paste snippets for each loader. Used on the Loaders docs page.
 */
export const LOADER_SNIPPETS: Record<string, string> = {
  spinner: `<div class="w-10 h-10 rounded-full border-[2.5px]
  border-yellow-400/20 border-t-yellow-400 animate-spin">
</div>`,
  dots: `<div class="flex items-center gap-2">
  <span class="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-bounce" style="animation-delay:0s"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-bounce" style="animation-delay:0.2s"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-orange-400 animate-bounce" style="animation-delay:0.4s"></span>
</div>`,
  bar: `<div class="w-36 h-1 bg-white/10 rounded-full overflow-hidden">
  <div class="h-full bg-gradient-to-r from-yellow-400 to-emerald-400 rounded-full animate-[bar_1.6s_ease-in-out_infinite]"></div>
</div>`,
  ring: `<div class="relative w-11 h-11">
  <div class="absolute inset-0 rounded-full border-[2.5px] border-transparent border-t-yellow-400 animate-[spin_.9s_linear_infinite]"></div>
  <div class="absolute inset-[7px] rounded-full border-[2.5px] border-transparent border-b-emerald-400 animate-[spin_.6s_linear_infinite_reverse]"></div>
</div>`,
  skeleton: `<div class="flex flex-col gap-2.5 w-48">
  <div class="h-3 w-3/5 rounded skeleton"></div>
  <div class="h-2 w-full rounded skeleton"></div>
  <div class="h-2 w-4/5 rounded skeleton"></div>
</div>
/* CSS: .skeleton { background: linear-gradient(90deg,rgba(255,255,255,.05),rgba(255,255,255,.1),rgba(255,255,255,.05)); background-size:400% 100%; animation: shimmer 1.5s ease-in-out infinite; } */`,
  blob: `<div class="w-12 h-12 flex items-center justify-center">
  <div class="w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
</div>`,
  orbit: `<div class="relative w-12 h-12 flex items-center justify-center">
  <div class="w-3.5 h-3.5 bg-emerald-400 rounded-full z-10"></div>
  <div class="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_2s_linear_infinite]"></div>
</div>`,
  typewriter: `<span class="font-mono text-yellow-400 border-r-2 border-yellow-400 pr-1 overflow-hidden whitespace-nowrap animate-[typing_2.5s_steps(14)_infinite_alternate]">Loading...</span>`,
  squares: `<div class="grid grid-cols-2 gap-1">
  <div class="w-3.5 h-3.5 rounded bg-yellow-400 animate-[sq_.9s_ease-in-out_infinite]"></div>
  <div class="w-3.5 h-3.5 rounded bg-emerald-400 animate-[sq_.9s_ease-in-out_infinite]" style="animation-delay:.3s"></div>
  <div class="w-3.5 h-3.5 rounded bg-orange-400 animate-[sq_.9s_ease-in-out_infinite]" style="animation-delay:.15s"></div>
  <div class="w-3.5 h-3.5 rounded bg-violet-400 animate-[sq_.9s_ease-in-out_infinite]" style="animation-delay:.45s"></div>
</div>`,
  progress: `<div class="w-36 flex flex-col gap-2">
  <div class="flex justify-between text-xs text-zinc-500"><span>Loading</span><span>...</span></div>
  <div class="h-1.5 bg-white/5 rounded-full overflow-hidden">
    <div class="h-full bg-yellow-400 rounded-full animate-[progress_2.5s_ease-in-out_infinite]"></div>
  </div>
</div>`,
  heartbeat: `<svg viewBox="0 0 120 40" class="w-32 h-10">
  <path d="M0,20 L20,20 L30,5 L40,35 L50,12 L60,28 L70,20 L120,20" stroke="#e8ff47" stroke-width="2" fill="none" stroke-dasharray="300" stroke-dashoffset="300" style="animation: draw 1.8s ease-in-out infinite"/>
</svg>`,
  ripple: `<div class="relative w-14 h-14 flex items-center justify-center">
  <div class="ripple-ring"></div>
  <div class="ripple-ring" style="animation-delay:0.7s"></div>
  <div class="ripple-ring" style="animation-delay:1.4s"></div>
  <div class="w-2 h-2 bg-yellow-400 rounded-full z-10"></div>
</div>`,
};

export type LoaderId = keyof typeof LOADER_SNIPPETS;
