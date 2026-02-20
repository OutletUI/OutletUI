import DocsToc from "@/components/docs/DocsToc";
import LoadersPage from "@/components/docs/pages/LoadersPage";

export default function LoadersDocsPage() {
  return (
    <>
      <div className="flex-1 min-w-0 flex">
        <article className="flex-1 min-w-0 max-w-[860px] py-12 px-10 pb-20">
          <LoadersPage />
        </article>
        <DocsToc pageId="loaders" />
      </div>
    </>
  );
}
