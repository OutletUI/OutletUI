"use client";

import { useCallback, useState } from "react";
import { HERO_SNIPPETS } from "@/config/heroSnippets";

type HeroCardProps = {
  id: number;
  name: string;
  tags: { label: string; light?: boolean; accent?: boolean }[];
  dataTags: string;
  onCopy?: () => void;
  children: React.ReactNode;
};

export default function HeroCard({
  id,
  name,
  tags,
  dataTags,
  onCopy,
  children,
}: HeroCardProps) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    const code = HERO_SNIPPETS[id];
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
      onCopy?.();
    }
  }, [id, onCopy]);

  return (
    <div className="hero-card" data-tags={dataTags}>
      <div className="hc-toolbar">
        <div className="hc-meta">
          <span className="hc-name">{name}</span>
          {tags.map((t) => (
            <span
              key={t.label}
              className={`hc-tag ${t.light ? "light-tag" : ""} ${t.accent ? "new-tag" : ""}`}
            >
              {t.label}
            </span>
          ))}
        </div>
        <div className="hc-actions">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              copy();
            }}
            className={`hc-copy ${copied ? "copied" : ""}`}
          >
            Copy HTML
          </button>
        </div>
      </div>
      <div className="hc-preview">{children}</div>
    </div>
  );
}
