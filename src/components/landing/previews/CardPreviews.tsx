/** Small preview blocks used inside component cards on the landing page */

export function PreviewNav() {
  return (
    <div className="w-full rounded-lg border border-white/10 bg-white/5 p-2.5 px-3.5 flex items-center justify-between">
      <div className="w-[60px] h-2 bg-white/30 rounded" />
      <div className="flex gap-2.5">
        <div className="w-7 h-1.5 bg-white/10 rounded-sm" />
        <div className="w-7 h-1.5 bg-white/10 rounded-sm" />
        <div className="w-7 h-1.5 bg-white/10 rounded-sm" />
      </div>
      <div className="w-12 h-[22px] bg-[var(--accent)] rounded" />
    </div>
  );
}

export function PreviewHero() {
  return (
    <div className="w-full text-center">
      <div className="w-20 h-3.5 bg-[rgba(232,255,71,0.2)] rounded-full mx-auto mb-2.5" />
      <div className="w-36 h-5 bg-white/50 rounded mx-auto mb-2" />
      <div className="w-[110px] h-2 bg-white/15 rounded-sm mx-auto mb-3.5" />
      <div className="flex gap-1.5 justify-center">
        <div className="w-[52px] h-5 bg-[var(--accent)] rounded" />
        <div className="w-[52px] h-5 border border-white/15 rounded" />
      </div>
    </div>
  );
}

export function PreviewCardGrid() {
  const colors = [
    "rgba(232,255,71,0.2)",
    "rgba(71,255,178,0.2)",
    "rgba(255,107,71,0.2)",
    "rgba(167,139,250,0.2)",
  ];
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      {colors.map((bg, i) => (
        <div
          key={i}
          className="rounded-lg border border-white/10 bg-white/5 p-2.5"
        >
          <div className="w-[22px] h-[22px] rounded-md mb-1.5" style={{ background: bg }} />
          <div className="w-[70%] h-1.5 bg-white/30 rounded-sm mb-1" />
          <div className="w-1/2 h-1 bg-white/10 rounded-sm" />
        </div>
      ))}
    </div>
  );
}

export function PreviewTable() {
  return (
    <div className="w-full rounded-md border border-white/10 bg-white/[0.02] overflow-hidden">
      <div className="bg-white/5 px-2.5 py-1.5 flex gap-3">
        <div className="h-1.5 w-[50px] rounded-sm bg-white/20" />
        <div className="h-1.5 w-10 rounded-sm bg-white/20" />
        <div className="h-1.5 w-[35px] rounded-sm bg-white/20" />
        <div className="h-1.5 w-7 rounded-sm bg-[rgba(232,255,71,0.3)]" />
      </div>
      {[false, true, false, true].map((highlight, i) => (
        <div
          key={i}
          className="px-2.5 py-1.5 flex gap-3 border-t border-white/5"
          style={highlight ? { background: "rgba(232,255,71,0.03)" } : undefined}
        >
          <div className="h-1.5 w-[50px] rounded-sm bg-white/10" />
          <div className="h-1.5 w-10 rounded-sm bg-white/10" />
          <div className="h-1.5 w-[35px] rounded-sm bg-white/10" />
          <div className="h-1.5 w-7 rounded-sm bg-white/10" />
        </div>
      ))}
    </div>
  );
}

export function PreviewForm() {
  return (
    <div className="w-full flex flex-col gap-2.5">
      <div className="flex flex-col gap-1">
        <div className="h-1.5 w-10 bg-white/20 rounded-sm" />
        <div className="h-7 border border-white/10 rounded-md bg-white/5" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="h-1.5 w-10 bg-white/20 rounded-sm" />
        <div className="h-7 border border-[var(--accent)] rounded-md bg-white/5 shadow-[0_0_0_3px_rgba(232,255,71,0.1)]" />
      </div>
      <div className="h-[30px] bg-[var(--accent)] rounded-md mt-1" />
    </div>
  );
}

export function PreviewSidebar() {
  return (
    <div className="flex w-full h-[130px] gap-2">
      <div className="w-[70px] rounded-md border border-white/10 bg-white/5 p-2 py-2 flex flex-col gap-1">
        <div className="h-[18px] rounded flex items-center gap-1 px-1 bg-[rgba(232,255,71,0.15)]">
          <div className="w-2 h-2 rounded-sm bg-[var(--accent)] shrink-0" />
          <div className="h-1 flex-1 bg-[rgba(232,255,71,0.4)] rounded-sm" />
        </div>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-[18px] rounded flex items-center gap-1 px-1">
            <div className="w-2 h-2 rounded-sm bg-white/15 shrink-0" />
            <div className="h-1 flex-1 bg-white/10 rounded-sm" />
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="flex-1 rounded-md border border-white/10 bg-white/5" />
        <div className="flex-1 rounded-md border border-white/10 bg-white/5" />
      </div>
    </div>
  );
}

export function PreviewModal() {
  return (
    <div className="w-full rounded-lg bg-black/50 flex items-center justify-center h-[130px] relative">
      <div className="bg-[var(--surface2)] border border-white/10 rounded-[10px] p-3.5 w-40 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
        <div className="w-20 h-2 bg-white/40 rounded-sm mb-2" />
        <div className="w-[120px] h-1 bg-white/10 rounded-sm mb-1" />
        <div className="w-[90px] h-1 bg-white/10 rounded-sm mb-1" />
        <div className="flex gap-1.5 justify-end mt-2.5">
          <div className="w-10 h-[18px] bg-white/10 rounded" />
          <div className="w-10 h-[18px] bg-[var(--accent)] rounded" />
        </div>
      </div>
    </div>
  );
}
