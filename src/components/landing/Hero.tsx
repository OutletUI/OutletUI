import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center pt-[120px] pb-20 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[length:60px_60px]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
        }}
      />
      <div
        className="absolute w-[700px] h-[400px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]"
        style={{
          background: "radial-gradient(ellipse, rgba(232,255,71,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(232,255,71,0.2)] bg-[rgba(232,255,71,0.08)] px-4 py-1.5 text-xs font-medium text-[var(--accent)] tracking-[0.06em] uppercase mb-8 animate-[fadeUp_0.6s_ease_both]">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-[pulse-dot_1.5s_ease-in-out_infinite]" />
        Now in Public Beta
      </div>

      <h1 className="font-syne font-extrabold text-[clamp(52px,8vw,108px)] leading-[0.95] tracking-[-0.03em] animate-[fadeUp_0.6s_0.1s_ease_both] max-w-[900px]">
        Plug in.
        <br />
        Ship <span className="text-[var(--accent)] inline-block relative after:content-[''] after:absolute after:bottom-2 after:left-0 after:right-0 after:h-1 after:bg-[var(--accent)] after:rounded-sm after:opacity-40">faster</span>.
      </h1>

      <p className="text-lg text-[var(--muted)] max-w-[520px] mt-7 mx-auto leading-[1.7] font-light animate-[fadeUp_0.6s_0.2s_ease_both]">
        Beautiful, copy-paste UI components built with Tailwind CSS. No installs. No config. Just open, copy, and ship.
      </p>

      <div className="flex gap-3.5 mt-11 flex-wrap justify-center animate-[fadeUp_0.6s_0.3s_ease_both]">
        <Link
          href="#components"
          className="font-syne font-bold text-[15px] py-3.5 px-8 rounded-lg bg-[var(--accent)] text-[#09090b] border-0 flex items-center gap-2 transition-[transform,box-shadow] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(232,255,71,0.35)]"
        >
          Browse Components
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <a
          href="#"
          className="font-syne font-semibold text-[15px] py-3.5 px-8 rounded-lg bg-transparent text-[var(--text)] border border-[var(--border)] flex items-center gap-2 transition-[border-color,background] hover:border-white/20 hover:bg-white/5"
        >
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          GitHub
        </a>
      </div>

      <div className="inline-flex items-center gap-2 mt-5 rounded-lg border border-[var(--border)] bg-white/5 px-4 py-2 font-mono text-[13px] text-[var(--accent)] animate-[fadeUp_0.6s_0.5s_ease_both]">
        <span className="text-[var(--muted)] font-sans">No install needed —</span>
        just copy & paste your component
      </div>

      <div className="flex gap-12 mt-[72px] animate-[fadeUp_0.6s_0.4s_ease_both] md:gap-7">
        <div className="text-center">
          <div className="font-syne font-extrabold text-[28px] text-[var(--text)]">200+</div>
          <div className="text-xs text-[var(--muted)] mt-0.5 tracking-wider">Components</div>
        </div>
        <div className="text-center">
          <div className="font-syne font-extrabold text-[28px] text-[var(--text)]">15</div>
          <div className="text-xs text-[var(--muted)] mt-0.5 tracking-wider">Themes</div>
        </div>
        <div className="text-center">
          <div className="font-syne font-extrabold text-[28px] text-[var(--text)]">100%</div>
          <div className="text-xs text-[var(--muted)] mt-0.5 tracking-wider">Free Forever</div>
        </div>
      </div>
    </section>
  );
}
