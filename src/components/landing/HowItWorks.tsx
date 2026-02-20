import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    icon: "🔍",
    iconBg: "rgba(232,255,71,0.1)",
    title: "Browse",
    text: "Explore 200+ components across categories. Filter by type, theme, or style. Preview everything live before you grab it.",
  },
  {
    num: "02",
    icon: "📋",
    iconBg: "rgba(71,255,178,0.1)",
    title: "Copy",
    text: "Click \"Copy Code\" and get clean, minimal Tailwind CSS HTML. No dependencies. No npm. No bundler required.",
    border: true,
  },
  {
    num: "03",
    icon: "🚀",
    iconBg: "rgba(255,107,71,0.1)",
    title: "Ship",
    text: "Paste it into your project. Customize colors and spacing. Deploy. That's it — you're done.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 md:px-12">
      <Reveal>
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--accent)] flex items-center gap-2.5 mb-5">
          <span className="w-7 h-px bg-[var(--accent)]" />
          How it works
        </div>
      </Reveal>
      <Reveal>
        <h2 className="font-syne font-extrabold text-[clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.02em] max-w-[640px]">
          Three steps to shipping.
        </h2>
      </Reveal>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-16 border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--border)]">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[var(--surface)] p-11 px-9 relative"
              style={
                step.border
                  ? {
                      borderLeft: "1px solid var(--border)",
                      borderRight: "1px solid var(--border)",
                    }
                  : undefined
              }
            >
              <div
                className="font-syne font-extrabold text-[72px] leading-none text-white/[0.04] absolute top-5 right-6 pointer-events-none"
                aria-hidden
              >
                {step.num}
              </div>
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center text-xl mb-5"
                style={{ background: step.iconBg }}
              >
                {step.icon}
              </div>
              <h3 className="font-syne font-bold text-[19px] mb-2.5">{step.title}</h3>
              <p className="text-[var(--muted)] text-sm leading-[1.7]">{step.text}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
