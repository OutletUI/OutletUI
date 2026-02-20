"use client";

import { useCallback } from "react";

type CodeBlockProps = {
  lang: string;
  code: string;
  children?: React.ReactNode;
};

export default function CodeBlock({ lang, code, children }: CodeBlockProps) {
  const copy = useCallback(() => {
    navigator.clipboard.writeText(code);
    window.dispatchEvent(new CustomEvent("docs:copy"));
  }, [code]);

  return (
    <div className="bg-[var(--surface2)] border border-[var(--border)] rounded-[10px] overflow-hidden my-4 font-mono">
      <div className="flex items-center justify-between py-2.5 px-4 border-b border-[var(--border)] bg-white/[0.02]">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)]">
          {lang}
        </span>
        <button
          type="button"
          onClick={copy}
          className="text-[11px] text-[var(--muted)] bg-transparent border border-[var(--border)] rounded-md py-1 px-2.5 cursor-pointer font-sans transition-colors hover:text-[var(--text)] hover:border-[var(--border2)]"
        >
          Copy
        </button>
      </div>
      <pre className="p-5 text-[13px] leading-[1.7] overflow-x-auto text-[#c9d1d9]">
        {children ?? code}
      </pre>
    </div>
  );
}
