import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left relative z-[1]">
      <div className="flex items-center gap-2">
        <Link
          href="#"
          className="font-syne font-extrabold text-lg flex items-center gap-2 text-[var(--text)] no-underline"
        >
          <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
          OutletUI
        </Link>
        <span className="text-[13px] text-[var(--muted)] ml-3">— Plug in. Ship faster.</span>
      </div>
      <div className="flex gap-7">
        <Link href="#components" className="text-[13px] text-[var(--muted)] no-underline transition-colors hover:text-[var(--text)]">
          Components
        </Link>
        <Link href="#themes" className="text-[13px] text-[var(--muted)] no-underline transition-colors hover:text-[var(--text)]">
          Themes
        </Link>
        <Link href="#" className="text-[13px] text-[var(--muted)] no-underline transition-colors hover:text-[var(--text)]">
          Docs
        </Link>
        <Link href="#" className="text-[13px] text-[var(--muted)] no-underline transition-colors hover:text-[var(--text)]">
          GitHub
        </Link>
        <Link href="#" className="text-[13px] text-[var(--muted)] no-underline transition-colors hover:text-[var(--text)]">
          Twitter
        </Link>
      </div>
    </footer>
  );
}
