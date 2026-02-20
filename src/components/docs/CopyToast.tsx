"use client";

import { useEffect, useState } from "react";

export default function CopyToast() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handler = () => {
      setVisible(true);
      timeout = setTimeout(() => setVisible(false), 2000);
    };
    window.addEventListener("docs:copy", handler);
    return () => {
      window.removeEventListener("docs:copy", handler);
      clearTimeout(timeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-7 left-1/2 -translate-x-1/2 z-[999] px-6 py-2.5 rounded-lg border border-[rgba(232,255,71,0.3)] text-[var(--accent)] font-syne font-semibold text-[13px] bg-[#18181c] shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300"
    >
      ✓ Copied to clipboard
    </div>
  );
}
