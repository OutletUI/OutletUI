/** Tailwind HTML snippets for Cards docs — Copy HTML per variant */
export const CARD_SNIPPETS: Record<number, string> = {
  1: `<!-- Feature Card — OutletUI -->
<div class="relative w-56 bg-[#141420] border border-white/[0.07] rounded-2xl p-6
  cursor-pointer group overflow-hidden
  hover:border-yellow-400/25 hover:-translate-y-1
  hover:shadow-[0_16px_40px_rgba(0,0,0,.4)] transition-all duration-200">

  <div class="absolute inset-0 bg-gradient-to-br from-yellow-400/[0.04] to-transparent
    opacity-0 group-hover:opacity-100 transition-opacity"></div>

  <div class="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center text-lg mb-4">
    ⚡
  </div>

  <h3 class="font-bold text-white text-sm mb-2">Lightning Fast</h3>

  <p class="text-[12.5px] text-zinc-400 leading-relaxed">
    Optimised for performance out of the box. Zero config, instant results.
  </p>

  <div class="flex items-center gap-1.5 text-xs text-yellow-400 font-medium mt-3.5">
    Learn more →
  </div>
</div>`,

  2: `<!-- Stat Card with Sparkline — OutletUI -->
<div class="w-52 bg-[#111118] border border-white/[0.07] rounded-xl p-5
  hover:border-white/[0.14] hover:-translate-y-0.5 transition-all">

  <div class="flex items-center justify-between text-[11px] text-zinc-500 uppercase tracking-widest mb-2.5">
    Monthly Revenue
    <span class="bg-emerald-400/10 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">↑ 12%</span>
  </div>

  <div class="font-black text-yellow-400 text-3xl leading-none tracking-tight mb-1.5">$84.2k</div>

  <div class="text-xs text-zinc-500">vs $75.1k last month</div>

  <div class="flex items-end gap-0.5 h-9 mt-3.5">
    <div class="flex-1 rounded-sm min-h-1" style="height:40%;background:rgba(232,255,71,.3)"></div>
    <div class="flex-1 rounded-sm" style="height:55%;background:rgba(232,255,71,.3)"></div>
    <div class="flex-1 rounded-sm" style="height:70%;background:rgba(232,255,71,.35)"></div>
    <div class="flex-1 rounded-sm" style="height:80%;background:rgba(232,255,71,.4)"></div>
    <div class="flex-1 rounded-sm" style="height:100%;background:#e8ff47"></div>
  </div>
</div>`,

  3: `<!-- Profile Card — OutletUI -->
<div class="w-52 bg-[#13131c] border border-white/[0.07] rounded-2xl overflow-hidden
  hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,.5)] transition-all duration-200">

  <div class="h-[72px] bg-gradient-to-br from-[#1a0533] to-[#0a1628] relative">
    <div class="absolute bottom-[-26px] left-4 w-[52px] h-[52px] rounded-full border-[3px] border-[#13131c]
      bg-gradient-to-br from-yellow-400 to-emerald-400"></div>
  </div>

  <div class="pt-8 px-4 pb-4">
    <div class="font-bold text-white text-sm">Alex Kim</div>
    <div class="text-xs text-zinc-500 mt-0.5 mb-3">Product Designer</div>

    <div class="flex gap-4 pt-3 border-t border-white/[0.06]">
      <div class="text-center">
        <div class="font-bold text-white text-sm">248</div>
        <div class="text-[10px] text-zinc-500 mt-0.5">Posts</div>
      </div>
      <div class="text-center">
        <div class="font-bold text-white text-sm">14.2k</div>
        <div class="text-[10px] text-zinc-500 mt-0.5">Followers</div>
      </div>
      <div class="text-center">
        <div class="font-bold text-white text-sm">320</div>
        <div class="text-[10px] text-zinc-500 mt-0.5">Following</div>
      </div>
    </div>

    <button class="w-full mt-3 py-2 rounded-lg bg-white/[0.06] border border-white/[0.08]
      text-white font-bold text-xs hover:bg-white/10 transition-colors">
      Follow
    </button>
  </div>
</div>`,

  4: `<!-- Pricing Card (Popular) — OutletUI -->
<div class="relative w-52 bg-yellow-400 rounded-2xl p-6 scale-[1.04]">

  <div class="absolute -top-2.5 left-1/2 -translate-x-1/2
    bg-zinc-900 text-yellow-400 text-[9px] font-bold tracking-widest uppercase
    px-3 py-1 rounded-full whitespace-nowrap">
    Most popular
  </div>

  <div class="text-[11px] font-semibold tracking-widest uppercase text-black/50 mb-3.5">Pro</div>

  <div class="font-black text-black text-4xl leading-none tracking-tight mb-1">$19</div>
  <div class="text-xs text-black/45 mb-5">per month</div>

  <div class="flex flex-col gap-2.5 mb-5">
    <div class="flex items-center gap-2 text-[12.5px] text-black/65">
      <div class="w-4 h-4 rounded-md bg-black/10 flex items-center justify-center text-[9px]">✓</div>
      200+ components
    </div>
    <div class="flex items-center gap-2 text-[12.5px] text-black/65">
      <div class="w-4 h-4 rounded-md bg-black/10 flex items-center justify-center text-[9px]">✓</div>
      All themes
    </div>
    <div class="flex items-center gap-2 text-[12.5px] text-black/65">
      <div class="w-4 h-4 rounded-md bg-black/10 flex items-center justify-center text-[9px]">✓</div>
      Priority support
    </div>
  </div>

  <button class="w-full py-2.5 rounded-lg bg-black text-yellow-400 font-bold text-xs">
    Start Pro →
  </button>
</div>`,

  5: `<!-- Product Card — OutletUI -->
<div class="w-52 bg-white rounded-2xl overflow-hidden
  hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,.15)] transition-all duration-200">

  <div class="h-40 bg-green-50 flex items-center justify-center text-5xl relative">
    🎧
    <span class="absolute top-2.5 left-2.5 bg-green-100 text-green-800 text-[10px]
      font-bold px-2.5 py-0.5 rounded-full">New</span>
    <button class="absolute top-2.5 right-2.5 w-7 h-7 bg-white rounded-full
      flex items-center justify-center text-sm shadow-md">🤍</button>
  </div>

  <div class="p-4">
    <div class="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-1">Audio</div>
    <div class="font-bold text-stone-900 text-sm mb-1">Pro Studio Headset</div>
    <div class="flex items-center gap-1.5 text-[11px] text-stone-400 mb-3">
      <span class="text-amber-400 text-xs">★★★★★</span> 4.9 (128)
    </div>
    <div class="flex items-center justify-between">
      <div>
        <span class="font-black text-stone-900 text-base">$129</span>
        <span class="text-[11px] text-stone-300 line-through ml-1">$179</span>
      </div>
      <button class="w-8 h-8 rounded-lg bg-stone-900 text-white text-lg flex items-center justify-center
        hover:bg-stone-700 transition-colors">+</button>
    </div>
  </div>
</div>`,

  6: `<!-- Blog Card — OutletUI -->
<div class="w-64 bg-[#12121a] border border-white/[0.07] rounded-2xl overflow-hidden
  hover:-translate-y-1 hover:border-white/[0.14] transition-all duration-200">

  <div class="h-36 bg-gradient-to-br from-[#0d1117] to-[#1a0533]
    flex items-center justify-center text-4xl relative">
    🚀
    <div class="absolute bottom-2.5 left-3 bg-yellow-400/15 text-yellow-400
      text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full">
      Design
    </div>
  </div>

  <div class="p-4">
    <div class="flex items-center gap-2.5 text-[11px] text-zinc-500 mb-2.5">
      <span>Jun 12</span>
      <span class="w-1 h-1 rounded-full bg-zinc-600"></span>
      <span>4 min read</span>
    </div>
    <h3 class="font-bold text-white text-sm leading-snug mb-2">
      The death of the boring landing page
    </h3>
    <p class="text-[12.5px] text-zinc-400 leading-relaxed mb-3.5">
      Why the most successful products today have UIs that feel alive and unexpected.
    </p>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-emerald-400"></div>
        <span class="text-xs font-medium">Maya Chen</span>
      </div>
      <span class="text-xs text-yellow-400 font-semibold">Read →</span>
    </div>
  </div>
</div>`,

  7: `<!-- Notification Card — OutletUI -->
<div class="w-72 bg-[#0f0f18] border border-white/[0.07] rounded-2xl overflow-hidden">

  <div class="flex items-center justify-between px-4 py-3.5 border-b border-white/[0.05]">
    <span class="font-bold text-white text-sm">Notifications</span>
    <span class="bg-orange-500 text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center">3</span>
  </div>

  <div class="flex items-start gap-2.5 px-4 py-3 border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
    <div class="relative flex-shrink-0">
      <div class="w-8 h-8 rounded-xl bg-yellow-400/10 flex items-center justify-center text-sm">⭐</div>
      <div class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-yellow-400 rounded-full border-2 border-[#0f0f18]"></div>
    </div>
    <div class="flex-1">
      <p class="text-[12.5px] text-zinc-400 leading-snug">
        <strong class="text-white">Alex Kim</strong> starred your component
      </p>
      <p class="text-[11px] text-zinc-600 mt-0.5">2 minutes ago</p>
    </div>
  </div>

  <div class="flex items-start gap-2.5 px-4 py-3 border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
    <div class="relative flex-shrink-0">
      <div class="w-8 h-8 rounded-xl bg-emerald-400/10 flex items-center justify-center text-sm">💬</div>
      <div class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full border-2 border-[#0f0f18]"></div>
    </div>
    <div class="flex-1">
      <p class="text-[12.5px] text-zinc-400 leading-snug">
        <strong class="text-white">Sam Rivera</strong> replied to your comment
      </p>
      <p class="text-[11px] text-zinc-600 mt-0.5">14 minutes ago</p>
    </div>
  </div>

</div>`,

  8: `<!-- Task Card — OutletUI -->
<div class="w-72 bg-[#0e0e16] border border-white/[0.07] rounded-2xl p-5">

  <div class="flex items-center justify-between mb-4">
    <span class="font-bold text-white text-sm">Design System v2</span>
    <span class="text-zinc-500 cursor-pointer">⋯</span>
  </div>

  <div class="mb-4">
    <div class="flex justify-between text-[11px] text-zinc-500 mb-1.5">
      <span>Progress</span>
      <span class="text-yellow-400">68%</span>
    </div>
    <div class="h-1 bg-white/[0.06] rounded-full overflow-hidden">
      <div class="h-full w-[68%] rounded-full bg-gradient-to-r from-yellow-400 to-emerald-400"></div>
    </div>
  </div>

  <div class="flex flex-col gap-2 mb-4">
    <div class="flex items-center gap-2.5 text-[12.5px] text-zinc-500 line-through">
      <div class="w-4 h-4 rounded-md bg-yellow-400 border border-yellow-400 flex items-center justify-center text-[9px] text-black flex-shrink-0">✓</div>
      Research & audit
    </div>
    <div class="flex items-center gap-2.5 text-[12.5px] text-zinc-400">
      <div class="w-4 h-4 rounded-md border border-white/15 flex-shrink-0"></div>
      Token system setup
    </div>
  </div>

  <div class="flex items-center justify-between pt-3.5 border-t border-white/[0.05]">
    <div class="flex">
      <div class="w-6 h-6 rounded-full border-2 border-[#0e0e16] bg-gradient-to-br from-yellow-400 to-emerald-400"></div>
      <div class="w-6 h-6 rounded-full border-2 border-[#0e0e16] -ml-1.5 bg-gradient-to-br from-blue-400 to-violet-400"></div>
    </div>
    <span class="text-[11px] text-zinc-500 bg-white/[0.04] border border-white/[0.06] rounded-md px-2.5 py-1">Due Jun 30</span>
  </div>
</div>`,

  9: `<!-- Testimonial Card — OutletUI -->
<div class="w-72 bg-[#111118] border border-white/[0.07] rounded-2xl p-6
  hover:-translate-y-0.5 hover:border-white/[0.13] transition-all">

  <div class="text-amber-400 tracking-widest text-sm mb-3.5">★★★★★</div>

  <p class="text-sm text-zinc-400 leading-relaxed mb-4.5 relative">
    <span class="absolute -top-2 -left-1 font-black text-5xl leading-none text-yellow-400/15">
      "
    </span>
    OutletUI is the first component library where I actually kept the designs as-is. Nothing needed changing.
  </p>

  <div class="flex items-center gap-2.5 pt-3.5 border-t border-white/[0.05]">
    <div class="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 to-emerald-400"></div>
    <div>
      <div class="font-bold text-white text-[13px]">Alex Kim</div>
      <div class="text-[11px] text-zinc-500 mt-0.5">Product Lead @ Stripe</div>
    </div>
  </div>
</div>`,

  10: `<!-- Gradient Accent Card — OutletUI -->
<div class="relative w-56 rounded-2xl p-7 overflow-hidden text-white
  bg-gradient-to-br from-[#1a0533] to-[#4c1d95]
  hover:-translate-y-1.5 transition-transform duration-200">

  <div class="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10"></div>
  <div class="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/[0.07]"></div>

  <div class="relative z-10 w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-xl mb-4">
    ⚡
  </div>

  <h3 class="relative z-10 font-black text-base mb-2">Ship faster</h3>
  <p class="relative z-10 text-sm opacity-75 leading-relaxed mb-5">
    Zero config. Just copy the code and go. No installs.
  </p>

  <button class="relative z-10 flex items-center gap-1.5 bg-white/20 hover:bg-white/30
    font-bold text-xs px-4 py-1.5 rounded-full transition-colors">
    Start →
  </button>
</div>`,

  11: `<!-- Glassmorphism Card — OutletUI -->
<div class="relative overflow-hidden rounded-2xl"
  style="background:linear-gradient(135deg,#1a0533,#0a1628,#001a12)">

  <div class="absolute w-72 h-72 rounded-full -top-16 -left-16 blur-[60px]"
    style="background:rgba(139,92,246,.35)"></div>
  <div class="absolute w-52 h-52 rounded-full -bottom-10 right-10 blur-[60px]"
    style="background:rgba(20,184,166,.3)"></div>

  <div class="relative z-10 m-8 w-48 rounded-2xl p-5
    bg-white/[0.08] backdrop-blur-xl border border-white/15
    shadow-[0_8px_32px_rgba(0,0,0,.3)]
    hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,.4)] transition-all">

    <div class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center text-base mb-3.5">🚀</div>
    <h3 class="font-bold text-white text-sm mb-1.5">Launch Ready</h3>
    <p class="text-xs text-white/55 leading-relaxed mb-4">Ship production-quality UI in minutes.</p>

    <div class="flex items-center justify-between">
      <span class="text-[10px] text-white/50 bg-white/[0.08] px-2.5 py-0.5 rounded-full">Components</span>
      <span class="text-white/60 text-sm">→</span>
    </div>
  </div>
</div>`,

  12: `<!-- Horizontal List Card — OutletUI -->
<div class="flex items-center gap-3.5 bg-[#111118] border border-white/[0.07] rounded-xl px-4 py-4
  hover:border-white/[0.13] hover:bg-[#141420] transition-all">

  <div class="w-11 h-11 rounded-xl bg-yellow-400/10 flex items-center justify-center text-xl flex-shrink-0">
    ⚡
  </div>

  <div class="flex-1">
    <div class="font-bold text-white text-sm mb-0.5">Loaders Pack</div>
    <div class="text-[12.5px] text-zinc-400">12 animated CSS-only loaders for every use case</div>
  </div>

  <div class="flex flex-col items-end gap-1.5 flex-shrink-0">
    <span class="bg-yellow-400/10 text-yellow-400 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">New</span>
    <span class="text-[11px] text-zinc-600">Today</span>
  </div>
</div>`,
};

export function getAllCardSnippets(): string {
  return Object.values(CARD_SNIPPETS).join("\n\n\n");
}
