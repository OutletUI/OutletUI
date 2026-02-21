"use client";

import NavbarCard from "./NavbarCard";

const SearchIcon = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
  >
    <circle cx={11} cy={11} r={8} />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

type NavbarPreviewsProps = { onCopy?: () => void };

export default function NavbarPreviews({ onCopy }: NavbarPreviewsProps) {
  return (
    <div className="space-y-5 mt-2">
      {/* 1. Frosted Glass */}
      <NavbarCard
        id="nb1"
        name="Frosted Glass"
        tags={[{ label: "Dark" }, { label: "Glassmorphism" }]}
        onCopy={onCopy}
        previewClassName="bg-gradient-to-br from-[#0d1117] to-[#161b22] py-5 px-5"
      >
        <nav className="w-full flex items-center justify-between bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-xl px-5 py-3">
          <div className="flex items-center gap-1.5 font-extrabold text-white text-base">
            <div className="w-2 h-2 rounded-full bg-[#e8ff47] shadow-[0_0_8px_#e8ff47]" />
            Acme
          </div>
          <div className="flex gap-1">
            <a href="#" className="text-sm px-3 py-1.5 rounded-lg bg-white/10 text-white">
              Home
            </a>
            <a href="#" className="text-sm px-3 py-1.5 rounded-lg text-white/55 hover:bg-white/[0.07] hover:text-white transition-colors">
              Products
            </a>
            <a href="#" className="text-sm px-3 py-1.5 rounded-lg text-white/55 hover:bg-white/[0.07] hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#" className="text-sm px-3 py-1.5 rounded-lg text-white/55 hover:bg-white/[0.07] hover:text-white transition-colors">
              Blog
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#e8ff47] to-[#47ffb2]" />
            <button className="bg-[#e8ff47] text-black font-bold text-xs px-4 py-1.5 rounded-lg">
              Get Started
            </button>
          </div>
        </nav>
      </NavbarCard>

      {/* 2. Minimal Light */}
      <NavbarCard
        id="nb2"
        name="Minimal Light"
        tags={[{ label: "Light", light: true }, { label: "Underline", light: true }]}
        onCopy={onCopy}
        previewClassName="bg-[#f8f8f6] py-6 px-7"
      >
        <nav className="w-full flex items-center justify-between border-b border-stone-200 pb-4">
          <div className="font-extrabold text-base text-stone-900">Studio</div>
          <div className="flex gap-7">
            <a href="#" className="text-sm text-stone-400 font-medium hover:text-stone-900 transition-colors">
              Work
            </a>
            <a href="#" className="text-sm text-stone-900 font-medium border-b-2 border-stone-900 pb-[18px] -mb-4">
              About
            </a>
            <a href="#" className="text-sm text-stone-400 font-medium hover:text-stone-900 transition-colors">
              Journal
            </a>
            <a href="#" className="text-sm text-stone-400 font-medium hover:text-stone-900 transition-colors">
              Contact
            </a>
          </div>
          <button className="border-[1.5px] border-stone-900 text-stone-900 text-xs font-bold px-4 py-2 rounded-md hover:bg-stone-900 hover:text-stone-50 transition-all">
            Hire us
          </button>
        </nav>
      </NavbarCard>

      {/* 3. Floating Pill */}
      <NavbarCard
        id="nb3"
        name="Floating Pill"
        tags={[{ label: "Dark" }, { label: "Centered" }]}
        onCopy={onCopy}
        previewClassName="bg-[#05050a] py-5 px-5"
      >
        <div className="w-full flex justify-center">
          <nav className="flex items-center gap-1 bg-[#111115] border border-white/10 rounded-full px-4 py-1.5 pl-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            <span className="font-extrabold text-white text-sm mr-2">⬡</span>
            <a href="#" className="text-xs px-3.5 py-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/[0.07] transition-all">
              Home
            </a>
            <a href="#" className="text-xs px-3.5 py-1.5 rounded-full bg-[#e8ff47] text-black font-semibold">
              Explore
            </a>
            <a href="#" className="text-xs px-3.5 py-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/[0.07] transition-all">
              Pricing
            </a>
            <a href="#" className="text-xs px-3.5 py-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/[0.07] transition-all">
              Docs
            </a>
            <button className="ml-1.5 text-xs font-bold bg-white/90 text-black px-4 py-1.5 rounded-full">
              Sign up
            </button>
          </nav>
        </div>
      </NavbarCard>

      {/* 4. Tabbed Dashboard Bar */}
      <NavbarCard
        id="nb4"
        name="Tabbed Dashboard Bar"
        tags={[{ label: "Dark" }, { label: "App-style" }]}
        onCopy={onCopy}
        previewClassName="bg-[#0c0c14] p-0 overflow-hidden"
      >
        <nav className="w-full flex items-stretch bg-[#0c0c14] border-b border-white/[0.07]">
          <div className="flex items-center gap-2 px-6 py-3.5 border-r border-white/[0.07] font-extrabold text-white text-[15px] min-w-[160px]">
            <div className="w-[22px] h-[22px] bg-[#e8ff47] rounded-md flex items-center justify-center text-[11px] text-black font-extrabold">
              O
            </div>
            OutletUI
          </div>
          <div className="flex flex-1">
            <a href="#" className="text-[12.5px] px-[18px] flex items-center text-white border-b-2 border-[#e8ff47]">
              Dashboard
            </a>
            <a href="#" className="text-[12.5px] px-[18px] flex items-center text-white/45 border-b-2 border-transparent hover:text-white transition-colors">
              Analytics
            </a>
            <a href="#" className="text-[12.5px] px-[18px] flex items-center text-white/45 border-b-2 border-transparent hover:text-white transition-colors">
              Projects
            </a>
            <a href="#" className="text-[12.5px] px-[18px] flex items-center text-white/45 border-b-2 border-transparent hover:text-white transition-colors">
              Settings
            </a>
          </div>
          <div className="flex items-center gap-2 px-4 ml-auto">
            <div className="w-8 h-8 rounded-[7px] border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-sm">
              🔔
            </div>
            <div className="w-8 h-8 rounded-[7px] border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-sm">
              ⚙️
            </div>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#e8ff47] to-[#47ffb2]" />
          </div>
        </nav>
      </NavbarCard>

      {/* 5. Bold Split */}
      <NavbarCard
        id="nb5"
        name="Bold Split"
        tags={[{ label: "Two-tone", light: true }, { label: "Agency", light: true }]}
        onCopy={onCopy}
        previewClassName="p-0 overflow-hidden"
      >
        <nav className="w-full flex items-stretch min-h-[56px]">
          <div className="bg-zinc-900 flex items-center gap-8 px-7">
            <span className="font-extrabold text-[#e8ff47] text-base">BOLD.</span>
            <div className="flex gap-1">
              <a href="#" className="text-xs text-white/50 hover:text-white px-2.5 py-1.5 rounded transition-colors">
                Work
              </a>
              <a href="#" className="text-xs text-white/50 hover:text-white px-2.5 py-1.5 rounded transition-colors">
                Studio
              </a>
              <a href="#" className="text-xs text-white/50 hover:text-white px-2.5 py-1.5 rounded transition-colors">
                Lab
              </a>
            </div>
          </div>
          <div className="flex-1 bg-white flex items-center justify-end gap-4 px-6 border-t border-stone-200 border-b border-stone-200">
            <div className="flex gap-5">
              <a href="#" className="text-sm text-stone-500 font-medium hover:text-stone-900 transition-colors">
                Services
              </a>
              <a href="#" className="text-sm text-stone-500 font-medium hover:text-stone-900 transition-colors">
                About
              </a>
              <a href="#" className="text-sm text-stone-500 font-medium hover:text-stone-900 transition-colors">
                Press
              </a>
            </div>
            <button className="bg-stone-900 text-white text-xs font-bold px-4 py-2 rounded-md">
              Contact →
            </button>
          </div>
        </nav>
      </NavbarCard>

      {/* 6. Centered Logo */}
      <NavbarCard
        id="nb6"
        name="Centered Logo"
        tags={[{ label: "Dark" }, { label: "Symmetrical" }]}
        onCopy={onCopy}
        previewClassName="bg-[#0a0a12] py-4 px-6"
      >
        <nav className="w-full flex items-center">
          <div className="flex gap-1 flex-1">
            <a href="#" className="text-[12.5px] text-white/45 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-all">
              Collection
            </a>
            <a href="#" className="text-[12.5px] text-white/45 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-all">
              Lookbook
            </a>
          </div>
          <div className="font-extrabold text-white text-[17px] px-8 whitespace-nowrap tracking-tight">
            ✦ MAISON ✦
          </div>
          <div className="flex gap-1 flex-1 justify-end items-center">
            <a href="#" className="text-[12.5px] text-white/45 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-all">
              Stores
            </a>
            <a href="#" className="text-[12.5px] text-white/45 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-all">
              Journal
            </a>
            <button className="bg-[#e8ff47] text-black font-bold text-xs px-3.5 py-1.5 rounded-md">
              Shop
            </button>
          </div>
        </nav>
      </NavbarCard>

      {/* 7. Gradient Border */}
      <NavbarCard
        id="nb7"
        name="Gradient Border"
        tags={[{ label: "Dark" }, { label: "Animated" }]}
        onCopy={onCopy}
        previewClassName="bg-[#07070f] py-5 px-6"
      >
        <div className="w-full docs-nav-grad-wrap">
          <nav className="bg-[#0d0d1a] rounded-[11px] flex items-center justify-between px-5 py-2.5">
            <span className="font-extrabold text-white text-[15px]">⬡ Gradient</span>
            <div className="flex gap-1">
              <a href="#" className="text-[12.5px] text-white/50 hover:text-white px-3 py-1.5 rounded-md transition-colors">
                Features
              </a>
              <a href="#" className="text-[12.5px] text-white/50 hover:text-white px-3 py-1.5 rounded-md transition-colors">
                Pricing
              </a>
              <a href="#" className="text-[12.5px] text-white/50 hover:text-white px-3 py-1.5 rounded-md transition-colors">
                Docs
              </a>
              <a href="#" className="text-[12.5px] text-white/50 hover:text-white px-3 py-1.5 rounded-md transition-colors">
                Blog
              </a>
            </div>
            <button className="font-bold text-xs px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#e8ff47] to-[#47ffb2] text-black">
              Start free →
            </button>
          </nav>
        </div>
      </NavbarCard>

      {/* 8. Brutalist */}
      <NavbarCard
        id="nb8"
        name="Brutalist"
        tags={[{ label: "Light", light: true }, { label: "Bold", light: true }]}
        onCopy={onCopy}
        previewClassName="p-0 overflow-hidden bg-[#f0ede6]"
      >
        <nav className="w-full flex items-stretch border-b-[3px] border-black bg-[#f0ede6]">
          <div className="px-6 py-3.5 border-r-[3px] border-black bg-[#e8ff47] font-extrabold text-base text-black tracking-tight">
            BRUT
          </div>
          <div className="flex">
            <a href="#" className="px-5 flex items-center text-[11px] font-bold uppercase tracking-widest border-r border-black/10 bg-black text-[#e8ff47]">
              Work
            </a>
            <a href="#" className="px-5 flex items-center text-[11px] font-bold uppercase tracking-widest border-r border-black/10 text-black hover:bg-black hover:text-[#f0ede6] transition-colors">
              About
            </a>
            <a href="#" className="px-5 flex items-center text-[11px] font-bold uppercase tracking-widest border-r border-black/10 text-black hover:bg-black hover:text-[#f0ede6] transition-colors">
              Blog
            </a>
            <a href="#" className="px-5 flex items-center text-[11px] font-bold uppercase tracking-widest border-r border-black/10 text-black hover:bg-black hover:text-[#f0ede6] transition-colors">
              Shop
            </a>
          </div>
          <div className="ml-auto flex items-center px-5 gap-3">
            <button className="bg-black text-[#e8ff47] font-extrabold text-[11px] uppercase tracking-wider px-5 py-2">
              Contact
            </button>
          </div>
        </nav>
      </NavbarCard>

      {/* 9. Dot Accent */}
      <NavbarCard
        id="nb9"
        name="Dot Accent"
        tags={[{ label: "Dark" }, { label: "With Search" }]}
        onCopy={onCopy}
        previewClassName="bg-[#09090b] py-4 px-7"
      >
        <nav className="w-full flex items-center justify-between">
          <div className="font-extrabold text-white text-[15px] flex items-center gap-1.5">
            <span className="text-[8px] text-[#e8ff47]">●</span>
            Pixel
          </div>
          <div className="flex items-center gap-0">
            <a href="#" className="text-[12.5px] text-white/40 hover:text-white px-3.5 py-1.5 transition-colors">
              Home
            </a>
            <a href="#" className="text-[12.5px] text-[#e8ff47] px-3.5 py-1.5">
              Portfolio
            </a>
            <a href="#" className="text-[12.5px] text-white/40 hover:text-white px-3.5 py-1.5 transition-colors">
              Services
            </a>
            <a href="#" className="text-[12.5px] text-white/40 hover:text-white px-3.5 py-1.5 transition-colors">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/[0.08] rounded-lg px-3 py-1.5 text-[11.5px] text-white/30">
              <SearchIcon />
              Search
            </div>
            <button className="border border-[#e8ff47]/40 text-[#e8ff47] text-[11px] font-bold px-3.5 py-1.5 rounded-lg hover:bg-[#e8ff47]/10 transition-colors">
              Hire me
            </button>
          </div>
        </nav>
      </NavbarCard>

      {/* 10. Dashboard App Bar */}
      <NavbarCard
        id="nb10"
        name="Dashboard App Bar"
        tags={[{ label: "Dark" }, { label: "Rich" }, { label: "New", accent: true }]}
        onCopy={onCopy}
        previewClassName="p-0 overflow-hidden bg-[#0f0f17]"
      >
        <nav className="w-full flex items-center gap-4 px-5 py-2.5 bg-[#0f0f17] border-b border-white/[0.06]">
          <div className="flex items-center gap-2 font-extrabold text-white text-[15px] min-w-[120px]">
            <div className="w-[26px] h-[26px] bg-[#e8ff47] rounded-[7px] flex items-center justify-center font-black text-xs text-black">
              O
            </div>
            Outlet
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/35">
            <span className="text-white/60">App</span>
            <span className="opacity-30">/</span>
            <span className="text-white/60">Dashboard</span>
            <span className="opacity-30">/</span>
            <span className="text-white/70">Overview</span>
          </div>
          <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-1.5 text-xs text-white/25 flex-1 max-w-[240px] ml-5">
            <SearchIcon />
            Search anything...
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-sm cursor-pointer">
              🔔
              <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#ff6b47] rounded-full border-2 border-[#0f0f17]" />
            </div>
            <div className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-sm">
              ⚙️
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-[#e8ff47] to-[#47ffb2] border-2 border-[#e8ff47]/30" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white leading-tight">Alex K.</span>
                <span className="text-[10px] text-white/30 leading-tight">Admin</span>
              </div>
            </div>
          </div>
        </nav>
      </NavbarCard>
    </div>
  );
}
