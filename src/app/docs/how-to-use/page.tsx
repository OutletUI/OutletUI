import DocsToc from "@/components/docs/DocsToc";
import HowToUsePage from "@/components/docs/pages/HowToUsePage";

export default function HowToUseDocsPage() {
  return (
    <>
      <div className="flex-1 min-w-0 flex">
        <article className="flex-1 min-w-0 max-w-[860px] py-12 px-10 pb-20">
          <HowToUsePage />
        </article>
        <DocsToc pageId="how-to-use" />
      </div>
    </>
  );
}
