"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type TabId = string;

const TabsContext = createContext<{
  active: TabId;
  setActive: (id: TabId) => void;
} | null>(null);

export function PageTabs({
  defaultTab,
  children,
}: {
  defaultTab: TabId;
  children: ReactNode;
}) {
  const [active, setActive] = useState<TabId>(defaultTab);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div className="flex gap-1 mb-9 border-b border-[var(--border)] pb-0 mt-8">
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function PageTab({ id, children }: { id: TabId; children: ReactNode }) {
  const ctx = useContext(TabsContext);
  const isActive = ctx?.active === id;
  const onClick = useCallback(() => ctx?.setActive(id), [ctx, id]);
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-[13px] font-medium py-2 px-4 text-[var(--muted)] cursor-pointer border-b-2 border-transparent mb-[-1px] transition-colors hover:text-[var(--text)] ${
        isActive ? "text-[var(--accent)] border-b-[var(--accent)]" : ""
      }`}
    >
      {children}
    </button>
  );
}

export function TabPane({
  id,
  children,
}: {
  id: TabId;
  children: ReactNode;
}) {
  const ctx = useContext(TabsContext);
  const isActive = ctx?.active === id;
  return (
    <div role="tabpanel" hidden={!isActive} className={isActive ? "block" : "hidden"}>
      {children}
    </div>
  );
}
