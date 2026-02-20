import Reveal from "./Reveal";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-20 px-6 md:px-12 pb-[120px]">
      <Reveal>
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl py-20 px-6 md:px-12 text-center relative overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
            aria-hidden
          />
          <div
            className="absolute w-[400px] h-[300px] -top-[100px] left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(232,255,71,0.06) 0%, transparent 70%)",
            }}
            aria-hidden
          />
          <h2 className="font-syne font-extrabold text-[clamp(36px,5vw,72px)] leading-none tracking-[-0.03em] mb-5 relative">
            Start building
            <br />
            <span className="text-[var(--accent)]">right now.</span>
          </h2>
          <p className="text-[var(--muted)] text-[17px] mb-10 relative">
            No account needed. No credit card. Open the browser, pick a component, ship.
          </p>
          <div className="flex gap-3 justify-center flex-wrap relative">
            <Link
              href="#components"
              className="font-syne font-bold text-base py-4 px-9 rounded-lg bg-[var(--accent)] text-[#09090b] border-0 inline-flex items-center gap-2 transition-[transform,box-shadow] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(232,255,71,0.35)]"
            >
              Browse Components →
            </Link>
            <a
              href="#"
              className="font-syne font-semibold text-base py-4 px-9 rounded-lg bg-transparent text-[var(--text)] border border-[var(--border)] inline-flex items-center gap-2 transition-[border-color,background] hover:border-white/20 hover:bg-white/5"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
