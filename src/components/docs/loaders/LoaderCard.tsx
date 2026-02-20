"use client";

import { useCallback } from "react";
import { LOADER_SNIPPETS, LoaderId } from "@/config/loaderSnippets";

type LoaderCardProps = {
  id: LoaderId;
  name: string;
  onCopy?: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function LoaderCard({ id, name, onCopy, children, className = "" }: LoaderCardProps) {
  const copy = useCallback(() => {
    const code = LOADER_SNIPPETS[id];
    if (code) {
      navigator.clipboard.writeText(code);
      onCopy?.();
    }
  }, [id, onCopy]);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={copy}
      onKeyDown={(e) => e.key === "Enter" && copy()}
      className={`flex flex-col items-center gap-4 py-7 px-5 bg-[var(--surface2)] border border-[var(--border)] rounded-xl cursor-pointer transition-all duration-200 min-w-[160px] hover:border-[rgba(232,255,71,0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(232,255,71,0.08)] group ${className}`}
    >
      {children}
      <span className="font-syne font-semibold text-xs text-[var(--muted2)] tracking-wide">
        {name}
      </span>
      <span className="text-[11px] text-[var(--muted)] bg-white/[0.04] border border-[var(--border)] rounded-md py-1 px-2.5 cursor-pointer font-sans transition-opacity opacity-0 group-hover:opacity-100">
        Copy code
      </span>
    </div>
  );
}
