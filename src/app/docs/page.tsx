import DocsToc from "@/components/docs/DocsToc";
import IntroductionPage from "@/components/docs/pages/IntroductionPage";

export default function DocsPage() {
  return (
    <>
      <div className="flex-1 min-w-0 flex">
        <article className="flex-1 min-w-0 max-w-[860px] py-12 px-10 pb-20">
          <IntroductionPage />
        </article>
        <DocsToc pageId="introduction" />
      </div>
    </>
  );
}
