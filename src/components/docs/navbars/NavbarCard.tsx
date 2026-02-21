"use client";

import { useCallback, useState } from "react";
import { NAVBAR_SNIPPETS, NavbarId } from "@/config/navbarSnippets";

type NavbarCardProps = {
  id: NavbarId;
  name: string;
  tags: { label: string; light?: boolean; accent?: boolean }[];
  onCopy?: () => void;
  children: React.ReactNode;
  previewClassName?: string;
};

export default function NavbarCard({
  id,
  name,
  tags,
  onCopy,
  children,
  previewClassName = "",
}: NavbarCardProps) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    const code = NAVBAR_SNIPPETS[id];
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      onCopy?.();
    }
  }, [id, onCopy]);

  return (
    <div className="border border-[var(--border)] rounded-[14px] overflow-hidden bg-[var(--surface)] transition-[border-color] duration-250 hover:border-[rgba(232,255,71,0.2)]">
      <div className="flex items-center justify-between py-3 px-4 border-b border-[var(--border)] bg-white/[0.02]">
        <div className="flex items-center gap-2.5">
          <span className="font-syne font-bold text-[13px]">{name}</span>
          {tags.map((t) => (
            <span
              key={t.label}
              className={`text-[11px] py-0.5 px-2 rounded-full ${
                t.accent
                  ? "bg-[rgba(232,255,71,0.1)] text-[var(--accent)] border border-[rgba(232,255,71,0.2)]"
                  : t.light
                    ? "bg-black/5 text-zinc-600"
                    : "bg-white/[0.06] text-[var(--muted)]"
              }`}
            >
              {t.label}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            copy();
          }}
          className={`text-[11px] py-1 px-3 rounded-md font-medium font-sans transition-all ${
            copied
              ? "text-[var(--accent2)] border-[rgba(71,255,178,0.3)] bg-[rgba(71,255,178,0.08)]"
              : "bg-[rgba(232,255,71,0.1)] border border-[rgba(232,255,71,0.25)] text-[var(--accent)] hover:bg-[rgba(232,255,71,0.18)]"
          }`}
        >
          {copied ? "✓ Copied!" : "Copy HTML"}
        </button>
      </div>
      <div
        className={`min-h-[90px] flex items-center py-6 px-5 ${previewClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
