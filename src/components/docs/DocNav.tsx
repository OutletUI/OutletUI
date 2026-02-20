import Link from "next/link";

type DocNavProps = {
  prev?: { href: string; title: string };
  next?: { href: string; title: string };
};

export default function DocNav({ prev, next }: DocNavProps) {
  return (
    <nav className="flex justify-between gap-4 mt-16 pt-8 border-t border-[var(--border)]">
      {prev ? (
        <Link
          href={prev.href}
          className="flex-1 p-4 border border-[var(--border)] rounded-[10px] no-underline text-[var(--text)] transition-colors hover:border-[var(--border2)] hover:bg-white/[0.03] flex flex-col gap-1"
        >
          <span className="text-[11px] text-[var(--muted)]">← Previous</span>
          <span className="font-syne font-bold text-sm">{prev.title}</span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          href={next.href}
          className="flex-1 p-4 border border-[var(--border)] rounded-[10px] no-underline text-[var(--text)] transition-colors hover:border-[var(--border2)] hover:bg-white/[0.03] flex flex-col gap-1 text-right"
        >
          <span className="text-[11px] text-[var(--muted)]">Next →</span>
          <span className="font-syne font-bold text-sm">{next.title}</span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
