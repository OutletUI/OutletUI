"use client";

import { useCallback, useMemo } from "react";

type CodeBlockProps = {
  lang: string;
  code: string;
  children?: React.ReactNode;
};

// IDE-style syntax highlighting for HTML/CSS code
function highlightCode(raw: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let key = 0;
  let pos = 0;

  // Match in order: comments, tag brackets+names, attr="val", CSS @rules, rest
  const commentRe = /<!--[\s\S]*?-->/g;
  const tagRe = /<\/?[\w-]+/g;
  const attrRe = /\s[\w-]+(?=\s*=)/g;
  const quotedRe = /"[^"]*"|'[^']*'/g;

  const tokens: { start: number; end: number; type: string }[] = [];
  let m;
  commentRe.lastIndex = 0;
  while ((m = commentRe.exec(raw)) !== null) {
    tokens.push({ start: m.index, end: m.index + m[0].length, type: "comment" });
  }
  tagRe.lastIndex = 0;
  while ((m = tagRe.exec(raw)) !== null) {
    tokens.push({ start: m.index, end: m.index + m[0].length, type: "tag" });
  }
  attrRe.lastIndex = 0;
  while ((m = attrRe.exec(raw)) !== null) {
    tokens.push({ start: m.index, end: m.index + m[0].length, type: "attr" });
  }
  quotedRe.lastIndex = 0;
  while ((m = quotedRe.exec(raw)) !== null) {
    tokens.push({ start: m.index, end: m.index + m[0].length, type: "value" });
  }
  tokens.sort((a, b) => a.start - b.start);

  const span = (type: string, text: string) => {
    const classes: Record<string, string> = {
      comment: "text-[#8b949e] italic",
      tag: "text-[#7ee787]",
      attr: "text-[#79c0ff]",
      value: "text-[#a5d6ff]",
    };
    return (
      <span key={key++} className={classes[type] ?? "text-[#c9d1d9]"}>
        {text}
      </span>
    );
  };

  while (pos < raw.length) {
    const atPos = tokens.find((t) => t.start === pos);
    const nextToken = tokens.find((t) => t.start > pos);
    const nextStart = nextToken ? nextToken.start : raw.length;

    if (atPos) {
      parts.push(span(atPos.type, raw.slice(atPos.start, atPos.end)));
      pos = atPos.end;
      continue;
    }
    const chunk = raw.slice(pos, nextStart);
    if (chunk.length > 0) {
      parts.push(span("default", chunk));
      pos = nextStart;
    } else {
      pos++;
    }
  }

  return parts;
}

export default function CodeBlock({ lang, code, children }: CodeBlockProps) {
  const copy = useCallback(() => {
    navigator.clipboard.writeText(code);
    window.dispatchEvent(new CustomEvent("docs:copy"));
  }, [code]);

  const highlighted = useMemo(() => {
    if (children != null) return children;
    return highlightCode(code);
  }, [code, children]);

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
      <pre className="p-5 text-[13px] leading-[1.75] overflow-x-auto text-[#c9d1d9] whitespace-pre font-normal">
        <code className="font-mono">{highlighted}</code>
      </pre>
    </div>
  );
}
