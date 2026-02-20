"use client";

import { useState } from "react";
import DocsTopbar from "./DocsTopbar";
import DocsSidebar from "./DocsSidebar";

export default function DocsLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <DocsTopbar onMenuClick={() => setSidebarOpen((o) => !o)} />
      <div className="flex pt-14 min-h-screen">
        <DocsSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 min-w-0 flex md:ml-[260px]">{children}</main>
      </div>
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-[190] bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
