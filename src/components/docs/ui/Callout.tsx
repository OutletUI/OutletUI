type CalloutType = "info" | "tip" | "warn";

type CalloutProps = {
  type: CalloutType;
  icon: string;
  children: React.ReactNode;
};

const styles: Record<CalloutType, string> = {
  info: "bg-[rgba(96,165,250,0.08)] border-[rgba(96,165,250,0.2)] text-[#93c5fd]",
  tip: "bg-[rgba(232,255,71,0.07)] border-[rgba(232,255,71,0.18)] text-[#d4e87a]",
  warn: "bg-[rgba(255,107,71,0.07)] border-[rgba(255,107,71,0.18)] text-[#ffa58a]",
};

export default function Callout({ type, icon, children }: CalloutProps) {
  return (
    <div
      className={`rounded-[10px] p-4 py-4 px-5 flex gap-3.5 items-start my-5 text-[13.5px] leading-[1.65] border ${styles[type]}`}
    >
      <span className="text-base flex-shrink-0 mt-0.5" aria-hidden>
        {icon}
      </span>
      <div>{children}</div>
    </div>
  );
}
