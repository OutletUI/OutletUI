import DocsToc from "@/components/docs/DocsToc";
import PlaceholderPage from "@/components/docs/pages/PlaceholderPage";
import { PLACEHOLDER_TITLES } from "@/config/docs";

function getTitle(slug: string): string {
  return PLACEHOLDER_TITLES[slug] ?? slug.replace(/-/g, " ");
}

export default function DocsPlaceholderPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug?.[0] ?? "coming-soon";
  const title = getTitle(slug);

  return (
    <>
      <div className="flex-1 min-w-0 flex">
        <article className="flex-1 min-w-0 max-w-[860px] py-12 px-10 pb-20">
          <PlaceholderPage title={title} />
        </article>
        <DocsToc pageId={slug} />
      </div>
    </>
  );
}
