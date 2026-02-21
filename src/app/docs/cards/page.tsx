import DocsToc from "@/components/docs/DocsToc";
import CardsPage from "@/components/docs/pages/CardsPage";

export default function CardsDocsPage() {
  return (
    <>
      <div className="flex-1 min-w-0 flex">
        <article className="flex-1 min-w-0 max-w-[860px] py-12 px-10 pb-20">
          <CardsPage />
        </article>
        <DocsToc pageId="cards" />
      </div>
    </>
  );
}
