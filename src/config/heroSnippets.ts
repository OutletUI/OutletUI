export const HERO_SNIPPETS: Record<number, string> = {
  1: `<!-- HERO 1: Electric Dark — OutletUI -->
<!-- Requires: Tailwind CSS -->
<section class="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#080810] overflow-hidden">

  <!-- Grid background -->
  <div class="absolute inset-0 pointer-events-none"
    style="background-image:linear-gradient(rgba(255,255,255,.025)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025)1px,transparent 1px);background-size:48px 48px;mask-image:radial-gradient(ellipse 70% 60% at 50% 50%,black,transparent)">
  </div>

  <!-- Glow -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
    style="background:radial-gradient(ellipse,rgba(232,255,71,.1),transparent 70%)"></div>

  <!-- Badge -->
  <div class="relative flex items-center gap-2 bg-yellow-400/[0.08] border border-yellow-400/20 rounded-full px-4 py-1.5 text-xs text-yellow-400 mb-7">
    <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
    Now in Public Beta
  </div>

  <!-- Title -->
  <h1 class="relative font-black text-white leading-none tracking-tight mb-5"
    style="font-size:clamp(44px,8vw,80px);letter-spacing:-0.03em">
    Build faster<br>ship <span class="text-yellow-400">smarter</span>
  </h1>

  <!-- Subtitle -->
  <p class="relative text-white/45 text-lg max-w-md leading-relaxed mb-9">
    The UI component library that gets out of your way. Copy, paste, ship — no installs, no drama.
  </p>

  <!-- Buttons -->
  <div class="relative flex gap-3">
    <button class="bg-yellow-400 text-black font-bold text-sm px-7 py-3.5 rounded-lg
      hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(232,255,71,0.3)] transition-all">
      Get Started →
    </button>
    <button class="bg-white/[0.06] text-white font-semibold text-sm px-7 py-3.5 rounded-lg
      border border-white/10 hover:bg-white/10 transition-colors">
      View Demo
    </button>
  </div>

  <!-- Stats -->
  <div class="relative flex gap-10 mt-14">
    <div class="text-center">
      <div class="font-black text-white text-2xl">200+</div>
      <div class="text-[11px] text-white/35 mt-0.5 tracking-widest uppercase">Components</div>
    </div>
    <div class="text-center">
      <div class="font-black text-white text-2xl">15K</div>
      <div class="text-[11px] text-white/35 mt-0.5 tracking-widest uppercase">Developers</div>
    </div>
    <div class="text-center">
      <div class="font-black text-white text-2xl">100%</div>
      <div class="text-[11px] text-white/35 mt-0.5 tracking-widest uppercase">Free</div>
    </div>
  </div>

</section>`,

  2: `<!-- HERO 2: Split Layout — OutletUI -->
<section class="flex min-h-screen">

  <!-- Left: Text -->
  <div class="flex-1 flex flex-col justify-center px-16 py-20 bg-white">
    <p class="flex items-center gap-2.5 text-[11px] font-bold tracking-widest uppercase text-stone-400 mb-5
      before:content-[''] before:w-6 before:h-px before:bg-stone-300">
      Introducing v2.0
    </p>
    <h1 class="font-black leading-[1.05] tracking-tight text-stone-900 mb-5"
      style="font-family:'Playfair Display',serif;font-size:clamp(34px,4vw,58px)">
      Design that <em>speaks</em><br>for itself.
    </h1>
    <p class="text-base text-stone-500 leading-relaxed mb-9 max-w-sm">
      Refined components, built with precision. Every pixel intentional, every interaction considered.
    </p>
    <div class="flex gap-3">
      <button class="bg-stone-900 text-white font-bold text-sm px-6 py-3.5 rounded-md hover:bg-stone-700 transition-colors">
        Explore Components
      </button>
      <button class="border-[1.5px] border-stone-200 text-stone-900 font-bold text-sm px-6 py-3.5 rounded-md hover:border-stone-400 transition-colors">
        Read Docs
      </button>
    </div>
  </div>

  <!-- Right: Visual -->
  <div class="w-[42%] bg-stone-900 relative flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 opacity-30"
      style="background-image:repeating-linear-gradient(45deg,rgba(255,255,255,.03)0,rgba(255,255,255,.03)1px,transparent 1px,transparent 40px)">
    </div>
    <!-- Mock card -->
    <div class="relative z-10 bg-[#1a1a1a] border border-white/[0.08] rounded-xl p-6 w-52
      shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
      <div class="w-9 h-9 bg-yellow-400 rounded-lg flex items-center justify-center text-base mb-3.5">⚡</div>
      <div class="font-bold text-white text-sm mb-1.5">Performance</div>
      <div class="text-xs text-white/40 leading-relaxed">Optimised for speed and production-grade output.</div>
      <div class="h-0.5 bg-white/[0.07] rounded-full mt-4 overflow-hidden">
        <div class="h-full w-[68%] bg-yellow-400 rounded-full"></div>
      </div>
    </div>
  </div>

</section>`,

  3: `<!-- HERO 3: Brutalist Magazine — OutletUI -->
<section class="flex flex-col bg-[#f2ede4]">

  <!-- Top strip -->
  <div class="bg-stone-900 text-stone-100 px-10 py-2.5 text-[11px] font-bold tracking-widest uppercase flex gap-10 overflow-hidden">
    <span>✦ ISSUE 2025</span>
    <span>✦ COMPONENTS</span>
    <span>✦ OPEN SOURCE</span>
    <span>✦ TAILWIND CSS</span>
  </div>

  <!-- Body -->
  <div class="flex flex-1">
    <!-- Left -->
    <div class="flex-1 p-16 border-r-[3px] border-stone-900 flex flex-col justify-center">
      <p class="text-[11px] font-bold tracking-widest uppercase text-stone-400 mb-4">Volume 01 / 2025</p>
      <h1 class="font-black leading-[0.92] tracking-tight text-stone-900 mb-6"
        style="font-size:clamp(40px,6vw,72px)">
        NO<br><mark class="bg-yellow-400 text-stone-900 px-1">INSTALLS.</mark><br>JUST CODE.
      </h1>
      <p class="text-stone-500 text-sm leading-relaxed max-w-xs mb-8">
        Copy the component. Paste it. Customize. No npm. No config. No boilerplate.
      </p>
      <button class="inline-flex items-center gap-2.5 bg-stone-900 text-stone-100 font-black text-[13px]
        uppercase tracking-wider px-7 py-3.5 border-[3px] border-stone-900
        hover:bg-yellow-400 hover:text-stone-900 transition-all w-fit">
        Browse →
      </button>
    </div>

    <!-- Right -->
    <div class="w-[36%] bg-stone-900 flex items-center justify-center p-8">
      <div class="flex flex-col gap-3">
        <div class="border border-white/10 rounded-lg px-4 py-3 text-white/70 text-xs">
          <strong class="block text-white text-lg font-black">200+</strong>
          Components ready
        </div>
        <div class="border border-white/10 rounded-lg px-4 py-3 text-white/70 text-xs">
          <strong class="block text-white text-lg font-black">15</strong>
          Theme presets
        </div>
        <div class="border border-white/10 rounded-lg px-4 py-3 text-white/70 text-xs">
          <strong class="block text-white text-lg font-black">∞</strong>
          Combinations
        </div>
      </div>
    </div>
  </div>

</section>`,

  4: `<!-- HERO 4: Gradient Mesh + Email CTA — OutletUI -->
<section class="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#06060f] overflow-hidden">

  <!-- Mesh background -->
  <div class="absolute inset-0 pointer-events-none" style="background:
    radial-gradient(ellipse 60% 50% at 20% 20%,rgba(71,255,178,.12),transparent 60%),
    radial-gradient(ellipse 50% 40% at 80% 80%,rgba(255,107,71,.1),transparent 60%),
    radial-gradient(ellipse 40% 60% at 60% 10%,rgba(232,255,71,.08),transparent 60%)">
  </div>

  <p class="relative text-xs font-semibold tracking-widest uppercase text-white/35 mb-5">
    The future of UI is here
  </p>

  <h1 class="relative font-black text-white leading-none tracking-tight mb-4"
    style="font-size:clamp(40px,7vw,88px);letter-spacing:-0.03em">
    Create without
    <span style="background:linear-gradient(135deg,#e8ff47,#47ffb2,#60a5fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">
      limits
    </span>
  </h1>

  <p class="relative text-white/40 text-lg max-w-md leading-relaxed my-5">
    The component library that adapts to you. Start building in seconds.
  </p>

  <!-- Email input -->
  <div class="relative flex w-full max-w-md bg-white/[0.05] border border-white/10 rounded-xl overflow-hidden">
    <input type="email" placeholder="Enter your email..."
      class="flex-1 bg-transparent border-none outline-none px-5 py-3.5 text-sm text-white placeholder:text-white/25 font-[DM_Sans,sans-serif]">
    <button class="bg-yellow-400 text-black font-bold text-sm px-6 py-3.5 whitespace-nowrap hover:opacity-85 transition-opacity">
      Start free →
    </button>
  </div>

  <p class="relative text-xs text-white/25 mt-3.5">No credit card. No install. Works everywhere.</p>

</section>`,

  5: `<!-- HERO 5: Cinematic Full-bleed — OutletUI -->
<section class="relative min-h-screen bg-black flex items-end overflow-hidden">

  <!-- Overlay -->
  <div class="absolute inset-0"
    style="background:linear-gradient(to bottom,rgba(0,0,0,.2) 0%,rgba(0,0,0,.8) 70%,rgba(0,0,0,.95) 100%)">
  </div>

  <!-- Diagonal texture -->
  <div class="absolute inset-0 opacity-[0.03]"
    style="background-image:repeating-linear-gradient(-45deg,transparent 0,transparent 30px,white 30px,white 31px)">
  </div>

  <!-- Content -->
  <div class="relative z-10 w-full flex items-end justify-between gap-10 px-16 py-14">
    <div class="max-w-xl">
      <div class="border-l-2 border-yellow-400 pl-2.5 text-[11px] font-bold tracking-widest uppercase text-white/40 mb-5">
        Cinematic Theme
      </div>
      <h1 class="font-black text-white leading-[0.95] tracking-tight mb-5"
        style="font-size:clamp(38px,5vw,72px);letter-spacing:-0.03em">
        Where great<br>stories begin.
      </h1>
      <p class="text-white/45 text-sm leading-relaxed mb-8 max-w-sm">
        A component library crafted for teams who care deeply about every detail.
      </p>
      <div class="flex items-center gap-3">
        <button class="bg-white text-black font-bold text-sm px-6 py-3 rounded-md hover:bg-yellow-400 transition-colors">
          Get started
        </button>
        <button class="flex items-center gap-2 text-white/60 font-semibold text-sm hover:text-white transition-colors">
          <span class="w-8 h-8 rounded-full border border-current flex items-center justify-center text-xs">▶</span>
          Watch video
        </button>
      </div>
    </div>
    <div class="text-right text-[11px] text-white/25 tracking-widest uppercase flex items-center gap-2 justify-end">
      <div class="w-10 h-px bg-white/20"></div>
      Scroll to explore
    </div>
  </div>

</section>`,

  6: `<!-- HERO 6: Typographic Spotlight — OutletUI -->
<section class="relative bg-[#fafaf8] min-h-screen flex flex-col justify-center px-16 py-20 overflow-hidden">

  <!-- Background decorative text -->
  <div class="absolute right-0 top-1/2 -translate-y-1/2 font-black text-[200px] leading-none
    text-black/[0.04] pointer-events-none select-none tracking-tighter" style="letter-spacing:-0.04em">
    UI
  </div>

  <!-- Number / category -->
  <div class="flex items-center gap-3 mb-7">
    <span class="font-mono text-xs text-stone-400">01/09</span>
    <div class="w-14 h-px bg-stone-200"></div>
    <span class="text-xs font-semibold tracking-widest uppercase text-stone-400">Hero Sections</span>
  </div>

  <!-- Title with outline variant -->
  <h1 class="font-black leading-[0.92] tracking-tight text-stone-900 mb-8 max-w-4xl"
    style="font-size:clamp(42px,6vw,78px);letter-spacing:-0.035em">
    <span class="block">Beautiful</span>
    <span class="block" style="-webkit-text-stroke:2px #111;color:transparent">Components</span>
    <span class="block">for everyone.</span>
  </h1>

  <!-- Bottom row -->
  <div class="flex items-center gap-10">
    <p class="text-stone-500 text-sm leading-relaxed max-w-xs">
      Copy-paste components built with Tailwind CSS. Open source, always free.
    </p>
    <div class="flex items-center gap-4">
      <button class="bg-stone-900 text-stone-50 font-bold text-sm px-6 py-3.5 rounded-md">
        Browse →
      </button>
      <button class="text-sm text-stone-500 underline underline-offset-4 hover:text-stone-900 transition-colors">
        View source
      </button>
    </div>
  </div>

</section>`,

  7: `<!-- HERO 7: Neon Terminal — OutletUI -->
<section class="relative min-h-screen bg-[#050510] flex flex-col items-center justify-center text-center px-6 overflow-hidden">

  <!-- Scanlines -->
  <div class="absolute inset-0 pointer-events-none" style="background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,255,0,.007)2px,rgba(0,255,0,.007)4px)"></div>

  <!-- Side glows -->
  <div class="absolute left-[-100px] top-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
    style="background:radial-gradient(circle,rgba(71,255,178,.12),transparent 70%)"></div>
  <div class="absolute right-[-100px] top-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
    style="background:radial-gradient(circle,rgba(96,165,250,.1),transparent 70%)"></div>

  <!-- Terminal prompt -->
  <div class="relative flex items-center gap-2 font-mono text-[13px] text-emerald-400/60 mb-7">
    $ outletui init<span class="inline-block w-2 h-4 bg-emerald-400 animate-[blink_1s_step-end_infinite]"></span>
  </div>

  <!-- Title -->
  <h1 class="relative font-black text-white leading-none tracking-tight mb-4"
    style="font-size:clamp(38px,7vw,80px);letter-spacing:-0.025em">
    Code
    <span class="text-emerald-400" style="text-shadow:0 0 30px rgba(71,255,178,.5)">greener.</span><br>
    Ship
    <span class="text-blue-400" style="text-shadow:0 0 30px rgba(96,165,250,.4)">faster.</span>
  </h1>

  <p class="relative text-white/35 text-base max-w-md leading-relaxed mb-10">
    A component toolkit for developers who think in systems. Zero lock-in.
  </p>

  <div class="relative flex gap-3">
    <button class="font-bold text-black text-sm px-7 py-3.5 rounded-lg
      shadow-[0_0_30px_rgba(71,255,178,.3)] hover:shadow-[0_0_50px_rgba(71,255,178,.5)] transition-shadow"
      style="background:linear-gradient(135deg,#47ffb2,#60a5fa)">
      Start building →
    </button>
    <button class="font-mono text-sm text-white/60 px-6 py-3.5 rounded-lg border border-emerald-400/20
      hover:border-emerald-400/50 hover:text-emerald-400 transition-all">
      $ npm i outletui
    </button>
  </div>

</section>`,

  8: `<!-- HERO 8: Warm Pastel Startup — OutletUI -->
<section class="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
  style="background:linear-gradient(135deg,#fff8f0,#fef0e8,#fde8ff)">

  <!-- Blobs -->
  <div class="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
    style="background:radial-gradient(circle,rgba(255,150,80,.15),transparent 70%)"></div>
  <div class="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
    style="background:radial-gradient(circle,rgba(200,120,255,.12),transparent 70%)"></div>

  <div class="relative max-w-lg">
    <div class="inline-flex items-center gap-1.5 bg-black/[0.05] rounded-full px-4 py-1.5 text-xs text-stone-600 mb-6">
      ✨ Trusted by 15,000+ teams
    </div>
    <h1 class="font-black leading-tight tracking-tight text-stone-900 mb-4"
      style="font-size:clamp(38px,5vw,66px);letter-spacing:-0.025em">
      Your ideas deserve<br>
      <span style="background:linear-gradient(135deg,#ff6b35,#c026d3);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">
        better UI.
      </span>
    </h1>
    <p class="text-stone-500 text-lg leading-relaxed mb-9">
      Beautiful, warm, and accessible components that make your product feel human.
    </p>
    <div class="flex gap-3 justify-center flex-wrap">
      <button class="bg-stone-900 text-white font-bold text-sm px-7 py-3.5 rounded-full hover:scale-105 transition-transform">
        Start for free
      </button>
      <button class="bg-black/[0.06] text-stone-600 font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-black/10 transition-colors">
        See examples
      </button>
    </div>
    <!-- Social proof -->
    <div class="flex items-center justify-center gap-3 mt-9">
      <div class="flex">
        <div class="w-7 h-7 rounded-full border-2 border-white" style="background:linear-gradient(135deg,#ff6b35,#c026d3)"></div>
        <div class="w-7 h-7 rounded-full border-2 border-white -ml-2" style="background:linear-gradient(135deg,#60a5fa,#47ffb2)"></div>
        <div class="w-7 h-7 rounded-full border-2 border-white -ml-2" style="background:linear-gradient(135deg,#a78bfa,#f472b6)"></div>
        <div class="w-7 h-7 rounded-full border-2 border-white -ml-2" style="background:linear-gradient(135deg,#fbbf24,#f87171)"></div>
      </div>
      <p class="text-sm text-stone-500">Loved by <strong class="text-stone-700">15,000+</strong> developers</p>
    </div>
  </div>

</section>`,

  9: `<!-- HERO 9: Feature List + Dashboard — OutletUI -->
<section class="bg-[#0c0c14] min-h-screen grid grid-cols-2 items-center">

  <!-- Left -->
  <div class="px-16 py-20">
    <div class="flex items-center gap-2 mb-5">
      <div class="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
      <span class="text-xs font-bold tracking-widest uppercase text-yellow-400">Built for scale</span>
    </div>
    <h1 class="font-black text-white leading-tight tracking-tight mb-5"
      style="font-size:clamp(32px,4vw,52px);letter-spacing:-0.025em">
      The toolkit your team actually ships with.
    </h1>
    <p class="text-white/40 text-sm leading-relaxed mb-8">
      Components that work together. Designed for real products, not demos.
    </p>
    <!-- Features -->
    <div class="flex flex-col gap-3 mb-9">
      <div class="flex items-center gap-2.5 text-sm text-white/60">
        <div class="w-4.5 h-4.5 rounded-md bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-[10px] text-yellow-400">✓</div>
        Zero install, works instantly
      </div>
      <div class="flex items-center gap-2.5 text-sm text-white/60">
        <div class="w-4.5 h-4.5 rounded-md bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-[10px] text-yellow-400">✓</div>
        Tailwind CSS — fully customizable
      </div>
      <div class="flex items-center gap-2.5 text-sm text-white/60">
        <div class="w-4.5 h-4.5 rounded-md bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-[10px] text-yellow-400">✓</div>
        200+ components & growing
      </div>
      <div class="flex items-center gap-2.5 text-sm text-white/60">
        <div class="w-4.5 h-4.5 rounded-md bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-[10px] text-yellow-400">✓</div>
        Dark, light & custom themes
      </div>
    </div>
    <div class="flex gap-2.5">
      <button class="bg-yellow-400 text-black font-bold text-sm px-6 py-3 rounded-lg">Get started →</button>
      <button class="bg-white/[0.06] text-white/70 font-semibold text-sm px-6 py-3 rounded-lg border border-white/[0.08]">View docs</button>
    </div>
  </div>

  <!-- Right: metric cards -->
  <div class="flex flex-col gap-3 px-10 py-20">
    <div class="bg-[#141420] border border-white/[0.07] rounded-xl p-4 hover:border-yellow-400/15 transition-colors">
      <div class="flex items-center gap-2.5 mb-3">
        <div class="w-8 h-8 rounded-lg bg-yellow-400/10 flex items-center justify-center text-sm">⚡</div>
        <span class="font-bold text-white text-sm">Performance</span>
        <span class="text-xs text-white/35 ml-auto">98/100</span>
      </div>
      <div class="h-1 bg-white/[0.06] rounded-full overflow-hidden">
        <div class="h-full w-[98%] bg-yellow-400 rounded-full"></div>
      </div>
    </div>
    <div class="bg-[#141420] border border-white/[0.07] rounded-xl p-4 hover:border-emerald-400/15 transition-colors">
      <div class="flex items-center gap-2.5 mb-3">
        <div class="w-8 h-8 rounded-lg bg-emerald-400/10 flex items-center justify-center text-sm">🛡</div>
        <span class="font-bold text-white text-sm">Accessibility</span>
        <span class="text-xs text-white/35 ml-auto">AA+</span>
      </div>
      <div class="h-1 bg-white/[0.06] rounded-full overflow-hidden">
        <div class="h-full w-[92%] bg-emerald-400 rounded-full"></div>
      </div>
    </div>
    <div class="bg-[#141420] border border-white/[0.07] rounded-xl p-4 hover:border-blue-400/15 transition-colors">
      <div class="flex items-center gap-2.5 mb-3">
        <div class="w-8 h-8 rounded-lg bg-blue-400/10 flex items-center justify-center text-sm">📦</div>
        <span class="font-bold text-white text-sm">Bundle size</span>
        <span class="text-xs text-white/35 ml-auto">0 KB</span>
      </div>
      <div class="h-1 bg-white/[0.06] rounded-full overflow-hidden">
        <div class="h-full w-full bg-blue-400 rounded-full"></div>
      </div>
    </div>
  </div>

</section>`,
};

export type HeroId = keyof typeof HERO_SNIPPETS;
