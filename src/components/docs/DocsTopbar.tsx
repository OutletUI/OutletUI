"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const topbarNav = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "#", label: "Components" },
  { href: "#", label: "GitHub" },
];

type DocsTopbarProps = { onMenuClick?: () => void };

export default function DocsTopbar({ onMenuClick }: DocsTopbarProps) {
  const pathname = usePathname();
  const isDocs = pathname?.startsWith("/docs");

  return (
    <header className="fixed top-0 left-0 right-0 z-[200] h-14 flex items-center justify-between px-6 bg-[rgba(9,9,11,0.85)] backdrop-blur-[20px] border-b border-[var(--border)]">
      <div className="flex items-center gap-8">
        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden p-2 rounded-md border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)]"
          onClick={onMenuClick}
        >
          ☰
        </button>
        <Link
          href="/"
          className="font-syne font-extrabold text-lg text-[var(--text)] no-underline flex items-center gap-[7px]"
        >
          <span
            className="w-[9px] h-[9px] rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] animate-[blink_2s_ease-in-out_infinite]"
            aria-hidden
          />
          OutletUI
        </Link>
        <nav className="hidden md:flex gap-1">
          {topbarNav.map((item) => {
            const active =
              item.href === "/docs"
                ? isDocs && pathname === "/docs"
                : item.href === "/"
                  ? pathname === "/"
                  : false;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[13px] py-1.5 px-3 rounded-md transition-all duration-200 no-underline ${
                  active
                    ? "text-[var(--accent)]"
                    : "text-[var(--muted)] hover:text-[var(--text)] hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 w-[200px] py-[7px] px-[14px] rounded-lg bg-[var(--surface2)] border border-[var(--border)] text-[13px] text-[var(--muted)] cursor-pointer transition-colors hover:border-[var(--border2)]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          Search docs...
          <kbd className="ml-auto font-mono text-[10px] text-[var(--muted)] bg-white/[0.07] py-0.5 px-1.5 rounded">
            ⌘K
          </kbd>
        </div>
        <Link
          href="/docs"
          className="bg-[var(--accent)] text-[#09090b] font-syne font-bold text-xs py-[7px] px-4 rounded-md border-0 cursor-pointer no-underline"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
