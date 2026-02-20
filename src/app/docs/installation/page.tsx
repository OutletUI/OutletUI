import DocsToc from "@/components/docs/DocsToc";
import InstallationPage from "@/components/docs/pages/InstallationPage";

export default function InstallationDocsPage() {
  return (
    <>
      <div className="flex-1 min-w-0 flex">
        <article className="flex-1 min-w-0 max-w-[860px] py-12 px-10 pb-20">
          <InstallationPage />
        </article>
        <DocsToc pageId="installation" />
      </div>
    </>
  );
}
