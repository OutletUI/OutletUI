export const NAVBAR_SNIPPETS: Record<string, string> = {
  nb1: `<nav class="flex items-center justify-between bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-xl px-5 py-3">
  <div class="flex items-center gap-1.5 font-black text-white text-base">
    <div class="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_#e8ff47]"></div>
    Acme
  </div>
  <div class="flex gap-1">
    <a href="#" class="text-sm px-3 py-1.5 rounded-lg hover:bg-white/[0.07] transition-colors text-white/55">Home</a>
    <a href="#" class="text-sm px-3 py-1.5 rounded-lg hover:bg-white/[0.07] transition-colors text-white/55">Products</a>
    <a href="#" class="text-sm px-3 py-1.5 rounded-lg hover:bg-white/[0.07] transition-colors text-white/55">Pricing</a>
  </div>
  <div class="flex items-center gap-2.5">
    <div class="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-emerald-400"></div>
    <button class="bg-yellow-400 text-black font-bold text-xs px-4 py-1.5 rounded-lg">Get Started</button>
  </div>
</nav>`,
  nb2: `<nav class="flex items-center justify-between border-b border-stone-200 pb-4">
  <div class="font-black text-lg text-stone-900">Studio</div>
  <div class="flex gap-7">
    <a href="#" class="text-sm text-stone-400 font-medium hover:text-stone-900 transition-colors">Work</a>
    <a href="#" class="text-sm text-stone-900 font-medium border-b-2 border-stone-900 pb-[18px] -mb-4">About</a>
    <a href="#" class="text-sm text-stone-400 font-medium hover:text-stone-900 transition-colors">Journal</a>
    <a href="#" class="text-sm text-stone-400 font-medium hover:text-stone-900 transition-colors">Contact</a>
  </div>
  <button class="border-[1.5px] border-stone-900 text-stone-900 text-xs font-bold px-4 py-2 rounded-md hover:bg-stone-900 hover:text-stone-50 transition-all">Hire us</button>
</nav>`,
  nb3: `<div class="flex justify-center">
  <nav class="flex items-center gap-1 bg-zinc-900 border border-white/10 rounded-full px-4 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
    <span class="font-black text-white text-sm mr-2">⬡</span>
    <a href="#" class="text-xs px-3.5 py-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/[0.07] transition-all">Home</a>
    <a href="#" class="text-xs px-3.5 py-1.5 rounded-full bg-yellow-400 text-black font-semibold">Explore</a>
    <a href="#" class="text-xs px-3.5 py-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/[0.07] transition-all">Pricing</a>
    <button class="ml-2 text-xs font-bold bg-white/90 text-black px-4 py-1.5 rounded-full">Sign up</button>
  </nav>
</div>`,
  nb4: `<nav class="flex items-stretch bg-zinc-950 border-b border-white/[0.06]">
  <div class="flex items-center gap-2 px-6 border-r border-white/[0.06] font-black text-white text-sm min-w-[140px] py-3.5">
    <div class="w-6 h-6 bg-yellow-400 rounded-md flex items-center justify-center font-black text-xs text-black">O</div>
    OutletUI
  </div>
  <div class="flex">
    <a href="#" class="text-[12.5px] px-5 flex items-center text-white border-b-2 border-yellow-400">Dashboard</a>
    <a href="#" class="text-[12.5px] px-5 flex items-center text-white/40 border-b-2 border-transparent hover:text-white transition-colors">Analytics</a>
    <a href="#" class="text-[12.5px] px-5 flex items-center text-white/40 border-b-2 border-transparent hover:text-white transition-colors">Projects</a>
  </div>
  <div class="flex items-center gap-2 px-4 ml-auto">
    <div class="w-8 h-8 rounded-md border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-sm">🔔</div>
    <div class="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-emerald-400"></div>
  </div>
</nav>`,
  nb5: `<nav class="flex items-stretch">
  <div class="bg-zinc-900 flex items-center gap-8 px-7">
    <span class="font-black text-yellow-400 text-base">BOLD.</span>
    <div class="flex gap-1">
      <a href="#" class="text-xs text-white/50 hover:text-white px-2.5 py-1.5 rounded transition-colors">Work</a>
      <a href="#" class="text-xs text-white/50 hover:text-white px-2.5 py-1.5 rounded transition-colors">Studio</a>
    </div>
  </div>
  <div class="flex-1 bg-white flex items-center justify-end gap-5 px-6 border-y border-stone-200">
    <div class="flex gap-5">
      <a href="#" class="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium">Services</a>
      <a href="#" class="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium">About</a>
    </div>
    <button class="bg-stone-900 text-white text-xs font-bold px-4 py-2 rounded-md">Contact →</button>
  </div>
</nav>`,
  nb6: `<nav class="flex items-center">
  <div class="flex gap-1 flex-1">
    <a href="#" class="text-[12.5px] text-white/45 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-all">Collection</a>
    <a href="#" class="text-[12.5px] text-white/45 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-all">Lookbook</a>
  </div>
  <div class="font-black text-white text-lg px-8 whitespace-nowrap tracking-tight">✦ MAISON ✦</div>
  <div class="flex gap-1 flex-1 justify-end items-center">
    <a href="#" class="text-[12.5px] text-white/45 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-all">Stores</a>
    <a href="#" class="text-[12.5px] text-white/45 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-all">Journal</a>
    <button class="bg-yellow-400 text-black font-bold text-xs px-3.5 py-1.5 rounded-md">Shop</button>
  </div>
</nav>`,
  nb7: `<!-- Requires CSS: .grad-border { background: linear-gradient(90deg,#e8ff47,#47ffb2,#ff6b47,#e8ff47); background-size:300% 100%; animation: gs 4s linear infinite; } @keyframes gs{0%{background-position:0%}100%{background-position:300%}} -->
<div class="p-[1.5px] rounded-xl grad-border">
  <nav class="bg-[#0d0d1a] rounded-[10px] flex items-center justify-between px-5 py-2.5">
    <span class="font-black text-white text-sm">⬡ Gradient</span>
    <div class="flex gap-1">
      <a href="#" class="text-xs text-white/50 hover:text-white px-3 py-1.5 rounded-md transition-colors">Features</a>
      <a href="#" class="text-xs text-white/50 hover:text-white px-3 py-1.5 rounded-md transition-colors">Pricing</a>
    </div>
    <button class="text-xs font-bold px-4 py-1.5 rounded-lg bg-gradient-to-r from-yellow-400 to-emerald-400 text-black">Start free →</button>
  </nav>
</div>`,
  nb8: `<nav class="flex items-stretch border-b-[3px] border-black bg-[#f0ede6]">
  <div class="px-6 py-3.5 border-r-[3px] border-black bg-yellow-400 font-black text-lg tracking-tight">BRUT</div>
  <div class="flex">
    <a href="#" class="px-5 flex items-center text-[11px] font-bold uppercase tracking-widest border-r border-black/10 bg-black text-yellow-400">Work</a>
    <a href="#" class="px-5 flex items-center text-[11px] font-bold uppercase tracking-widest border-r border-black/10 hover:bg-black hover:text-[#f0ede6] transition-colors">About</a>
    <a href="#" class="px-5 flex items-center text-[11px] font-bold uppercase tracking-widest border-r border-black/10 hover:bg-black hover:text-[#f0ede6] transition-colors">Blog</a>
  </div>
  <div class="ml-auto flex items-center px-5">
    <button class="bg-black text-yellow-400 font-black text-[11px] uppercase tracking-wider px-5 py-2">Contact</button>
  </div>
</nav>`,
  nb9: `<nav class="flex items-center justify-between">
  <div class="font-black text-white text-sm flex items-center gap-1 before:content-['●'] before:text-yellow-400 before:text-[8px]">Pixel</div>
  <div class="flex items-center">
    <a href="#" class="text-[12.5px] text-white/40 hover:text-white px-3.5 py-1.5 transition-colors">Home</a>
    <a href="#" class="text-[12.5px] text-yellow-400 px-3.5 py-1.5">Portfolio</a>
    <a href="#" class="text-[12.5px] text-white/40 hover:text-white px-3.5 py-1.5 transition-colors">Services</a>
  </div>
  <div class="flex items-center gap-2.5">
    <div class="flex items-center gap-1.5 bg-white/5 border border-white/[0.08] rounded-lg px-3 py-1.5 text-[11.5px] text-white/30">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      Search
    </div>
    <button class="border border-yellow-400/40 text-yellow-400 text-[11px] font-bold px-3.5 py-1.5 rounded-lg hover:bg-yellow-400/10 transition-colors">Hire me</button>
  </div>
</nav>`,
  nb10: `<nav class="flex items-center gap-4 px-5 py-2.5 bg-[#0f0f17] border-b border-white/[0.06]">
  <div class="flex items-center gap-2 font-black text-white text-sm min-w-[110px]">
    <div class="w-6 h-6 bg-yellow-400 rounded-md flex items-center justify-center font-black text-xs text-black">O</div>
    Outlet
  </div>
  <div class="flex items-center gap-1.5 text-xs text-white/35">
    <span class="text-white/60">App</span>
    <span class="opacity-30">/</span>
    <span class="text-white/70">Overview</span>
  </div>
  <div class="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-1.5 text-xs text-white/25 flex-1 max-w-xs ml-4">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    Search anything...
  </div>
  <div class="ml-auto flex items-center gap-2">
    <div class="relative w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-sm cursor-pointer">
      🔔
      <div class="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-orange-500 rounded-full border-2 border-[#0f0f17]"></div>
    </div>
    <div class="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-emerald-400 border-2 border-yellow-400/30"></div>
    <div class="flex flex-col">
      <span class="text-xs font-semibold text-white leading-tight">Alex K.</span>
      <span class="text-[10px] text-white/30 leading-tight">Admin</span>
    </div>
  </div>
</nav>`,
};

export type NavbarId = keyof typeof NAVBAR_SNIPPETS;
