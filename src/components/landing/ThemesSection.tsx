import Reveal from "./Reveal";

const themes = [
  {
    id: "t1",
    name: "Violet Dark",
    tag: "Dark · Purple · Modern",
    previewBg: "#0d0d14",
    barLogo: "#a78bfa",
    barLink: "rgba(255,255,255,0.1)",
    barBtn: "#a78bfa",
    heroH: "rgba(255,255,255,0.7)",
    heroS: "rgba(255,255,255,0.2)",
    heroB: "#a78bfa",
  },
  {
    id: "t2",
    name: "Clean White",
    tag: "Light · Minimal · Corporate",
    previewBg: "#fff",
    barLogo: "#1a1a2e",
    barLink: "rgba(0,0,0,0.15)",
    barBtn: "#1a1a2e",
    heroH: "rgba(0,0,0,0.7)",
    heroS: "rgba(0,0,0,0.2)",
    heroB: "#1a1a2e",
  },
  {
    id: "t3",
    name: "Ocean Blue",
    tag: "Dark · Cyan · SaaS",
    previewBg: "#0a1628",
    barLogo: "#38bdf8",
    barLink: "rgba(255,255,255,0.1)",
    barBtn: "#38bdf8",
    heroH: "rgba(255,255,255,0.7)",
    heroS: "rgba(255,255,255,0.2)",
    heroB: "#38bdf8",
  },
  {
    id: "t4",
    name: "Ember Dark",
    tag: "Dark · Orange · Bold",
    previewBg: "#0f0f0f",
    barLogo: "#ff6b47",
    barLink: "rgba(255,255,255,0.1)",
    barBtn: "#ff6b47",
    heroH: "rgba(255,255,255,0.7)",
    heroS: "rgba(255,255,255,0.2)",
    heroB: "#ff6b47",
  },
  {
    id: "t5",
    name: "Warm Sand",
    tag: "Light · Neutral · Editorial",
    previewBg: "#f5f0e8",
    barLogo: "#3d3a35",
    barLink: "rgba(0,0,0,0.12)",
    barBtn: "#3d3a35",
    heroH: "rgba(0,0,0,0.6)",
    heroS: "rgba(0,0,0,0.2)",
    heroB: "#3d3a35",
  },
];

export default function ThemesSection() {
  return (
    <section id="themes" className="py-20 px-6 md:px-12">
      <Reveal>
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--accent)] flex items-center gap-2.5 mb-5">
          <span className="w-7 h-px bg-[var(--accent)]" />
          Themes
        </div>
      </Reveal>
      <Reveal>
        <h2 className="font-syne font-extrabold text-[clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.02em] max-w-[640px]">
          Every component, your style.
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-[var(--muted)] text-[17px] mt-4 max-w-[500px] leading-[1.7]">
          Switch between pre-built themes or mix and match. Same component, totally different vibe.
        </p>
      </Reveal>

      <Reveal>
        <div className="flex gap-4 mt-14 overflow-x-auto pb-4 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {themes.map((t) => (
            <div
              key={t.id}
              className="theme-card shrink-0 w-[260px] rounded-xl overflow-hidden border border-[var(--border)] transition-[transform,box-shadow] hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
              style={{ background: "var(--surface)" }}
            >
              <div
                className="h-40 p-5 flex flex-col gap-2"
                style={{ background: t.previewBg }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div
                    className="w-10 h-1.5 rounded-sm"
                    style={{ background: t.barLogo }}
                  />
                  <div className="flex gap-1.5">
                    <div
                      className="w-5 h-1 rounded-sm"
                      style={{ background: t.barLink }}
                    />
                    <div
                      className="w-5 h-1 rounded-sm"
                      style={{ background: t.barLink }}
                    />
                  </div>
                  <div
                    className="w-8 h-4 rounded-sm"
                    style={{ background: t.barBtn }}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center gap-1.5">
                  <div
                    className="h-3.5 rounded-sm"
                    style={{ background: t.heroH }}
                  />
                  <div
                    className="h-2 rounded-sm w-[70%]"
                    style={{ background: t.heroS }}
                  />
                  <div
                    className="w-14 h-5 rounded mt-1"
                    style={{ background: t.heroB }}
                  />
                </div>
              </div>
              <div className="font-syne font-bold text-sm py-3.5 px-4 pt-3.5 border-t border-[var(--border)] bg-[var(--surface)]">
                {t.name}
              </div>
              <div className="text-[11px] text-[var(--muted)] px-4 pb-3.5 bg-[var(--surface)]">
                {t.tag}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
