import DocsToc from "@/components/docs/DocsToc";
import HeroesPage from "@/components/docs/pages/HeroesPage";

export default function HeroesDocsPage() {
  return (
    <>
      <div className="flex-1 min-w-0 flex">
        <article className="flex-1 min-w-0 max-w-[860px] py-12 px-10 pb-20">
          <HeroesPage />
        </article>
        <DocsToc pageId="heroes" />
      </div>
    </>
  );
}
