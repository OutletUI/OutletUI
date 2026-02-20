export function StepsList({ children }: { children: React.ReactNode }) {
  return (
    <ol className="counter-reset-[step] my-5 list-none p-0" style={{ counterReset: "step" }}>
      {children}
    </ol>
  );
}

export function StepItem({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4 py-5 border-b border-[var(--border)] [&:last-child]:border-b-0">
      <span
        className="w-8 h-8 flex-shrink-0 rounded-lg border border-[var(--border)] flex items-center justify-center font-syne font-bold text-[13px] text-[var(--accent)] bg-[rgba(232,255,71,0.06)]"
        aria-hidden
      >
        {number}
      </span>
      <div>
        <h4 className="font-syne font-bold text-sm mb-1.5">{title}</h4>
        <div className="text-[13.5px] text-[var(--muted2)] [&_p]:m-0 [&_p]:text-[13.5px]">
          {children}
        </div>
      </div>
    </li>
  );
}
