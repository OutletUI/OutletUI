import { DOCS_TOC } from "@/config/docs";

type DocsTocProps = {
  pageId: string;
};

export default function DocsToc({ pageId }: DocsTocProps) {
  const links = DOCS_TOC[pageId];
  if (!links?.length) return null;

  return (
    <nav className="hidden xl:block w-[220px] flex-shrink-0 sticky top-[calc(56px+32px)] self-start py-0 px-6" aria-label="On this page">
      <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--muted)] mb-3">
        On this page
      </div>
      <div className="flex flex-col">
        {links.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block text-xs text-[var(--muted)] no-underline py-1 pl-3 border-l border-[var(--border)] transition-colors hover:text-[var(--text)] hover:border-[var(--border2)] [&.active]:text-[var(--accent)] [&.active]:border-[var(--accent)]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
