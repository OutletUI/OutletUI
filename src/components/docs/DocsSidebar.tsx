"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDEBAR_SECTIONS } from "@/config/docs";

type DocsSidebarProps = { open?: boolean; onClose?: () => void };

export default function DocsSidebar({ open = false, onClose }: DocsSidebarProps) {
  const pathname = usePathname() ?? "";

  return (
    <aside
      id="docs-sidebar"
      className={`w-[260px] fixed top-14 left-0 bottom-0 overflow-y-auto overflow-x-hidden bg-[var(--surface)] border-r border-[var(--border)] py-6 pb-10 z-[200] transition-transform duration-300 md:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {SIDEBAR_SECTIONS.map((section) => (
        <div key={section.label} className="mb-7">
          <div className="flex items-center gap-1.5 px-5 pb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
            {section.label}
            <span className="flex-1 h-px bg-[var(--border)]" />
          </div>
          {section.links
            .filter((l) => !("sub" in l && l.sub))
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`docs-sb-link flex items-center justify-between gap-2 py-[7px] px-5 text-[13.5px] no-underline border-l-2 border-transparent transition-all duration-150 gap-2 ${
                  pathname === link.href
                    ? "text-[var(--accent)] border-l-[var(--accent)] bg-[rgba(232,255,71,0.05)] font-medium"
                    : "text-[var(--muted2)] hover:text-[var(--text)] hover:bg-white/[0.04]"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-[18px] text-center text-sm" aria-hidden>
                    {link.icon}
                  </span>
                  {link.label}
                </span>
                {"badge" in link && link.badge && (
                  <span
                    className={`text-[10px] font-semibold py-0.5 px-[7px] rounded-full tracking-wide ${
                      "badgeType" in link && link.badgeType === "new"
                        ? "bg-[rgba(232,255,71,0.15)] text-[var(--accent)]"
                        : "bg-[rgba(71,255,178,0.12)] text-[var(--accent2)]"
                    }`}
                  >
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          {section.links.some((l) => "sub" in l && l.sub) && (
            <div className="pl-4">
              {section.links
                .filter((l) => "sub" in l && l.sub)
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`docs-sb-link docs-sb-sub flex items-center justify-between gap-2 py-[5px] pl-3 pr-5 ml-5 text-[12.5px] no-underline border-l border-[var(--border)] transition-all duration-150 ${
                      pathname === link.href
                        ? "text-[var(--accent)] border-l-[var(--accent)] font-medium"
                        : "text-[var(--muted2)] hover:text-[var(--text)] hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-[18px] text-center text-sm" aria-hidden>
                        {link.icon}
                      </span>
                      {link.label}
                    </span>
                  </Link>
                ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
