const items = [
  "Navbars",
  "Hero Sections",
  "Modals",
  "Data Tables",
  "Forms",
  "Sidebars",
  "Cards",
  "Footers",
  "Pricing Tables",
  "Dashboards",
];

export default function Marquee() {
  return (
    <div className="border-t border-b border-[var(--border)] py-[18px] overflow-hidden relative z-[1]">
      <div className="flex gap-12 animate-marquee w-max">
        {[...items, ...items].map((label, i) => (
          <div
            key={`${label}-${i}`}
            className="font-syne font-semibold text-[13px] text-[var(--muted)] tracking-[0.1em] uppercase whitespace-nowrap flex items-center gap-4"
          >
            <span className="text-[var(--accent)] text-lg">◆</span>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
