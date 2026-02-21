import DocsToc from "@/components/docs/DocsToc";
import NavbarsPage from "@/components/docs/pages/NavbarsPage";

export default function NavbarsDocsPage() {
  return (
    <>
      <div className="flex-1 min-w-0 flex">
        <article className="flex-1 min-w-0 max-w-[860px] py-12 px-10 pb-20">
          <NavbarsPage />
        </article>
        <DocsToc pageId="navbars" />
      </div>
    </>
  );
}
