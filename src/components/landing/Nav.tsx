import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-5 md:px-12 backdrop-blur-[24px] border-b border-[var(--border)] bg-[rgba(9,9,11,0.7)]">
      <Link
        href="#"
        className="font-syne font-extrabold text-[22px] flex items-center gap-2 text-[var(--text)] no-underline"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent),0_0_24px_rgba(232,255,71,0.4)] animate-[pulse-dot_2s_ease-in-out_infinite]" />
        OutletUI
      </Link>
      <div className="hidden md:flex items-center gap-9">
        <Link
          href="#components"
          className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:right-0 after:h-px after:bg-[var(--accent)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
        >
          Components
        </Link>
        <Link
          href="#themes"
          className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:right-0 after:h-px after:bg-[var(--accent)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
        >
          Themes
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:right-0 after:h-px after:bg-[var(--accent)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
        >
          Docs
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:right-0 after:h-px after:bg-[var(--accent)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
        >
          Changelog
        </Link>
      </div>
      <Link
        href="#"
        className="font-syne font-bold text-[13px] py-2.5 px-5 rounded-md bg-[var(--accent)] text-[#09090b] no-underline tracking-wide border-0 transition-[transform,box-shadow] hover:translate-y-[-1px] hover:shadow-[0_8px_30px_rgba(232,255,71,0.3)]"
      >
        Get Started →
      </Link>
    </nav>
  );
}
