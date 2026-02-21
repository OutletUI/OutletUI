"use client";

import Link from "next/link";
import { Callout, PageTabs, PageTab, TabPane } from "../ui";
import CardPreviews from "../cards/CardPreviews";
import DocNav from "../DocNav";

function showToast() {
  window.dispatchEvent(new CustomEvent("docs:copy"));
}

export default function CardsPage() {
  return (
    <>
      <div className="flex items-center gap-2 text-xs text-[var(--muted)] mb-5">
        <Link href="/docs" className="text-[var(--muted)] no-underline hover:text-[var(--text)]">
          Docs
        </Link>
        <span>›</span>
        <span>Components</span>
        <span>›</span>
        <span>Cards</span>
      </div>
      <h1 className="font-syne font-extrabold text-[38px] leading-[1.05] tracking-tight mb-3.5">
        Cards
      </h1>
      <p className="text-base text-[var(--muted2)] leading-[1.75] mb-9 max-w-[620px]">
        12 card styles — feature, stat, profile, pricing, product, blog, notification, task, testimonial, glass, gradient, and more. All copy-paste ready.
      </p>

      <Callout type="info" icon="💡">
        <div>
          Use the filter chips to show <strong className="text-inherit">All</strong>, <strong className="text-inherit">Dark</strong>, <strong className="text-inherit">Light</strong>, <strong className="text-inherit">Interactive</strong>, <strong className="text-inherit">Data</strong>, <strong className="text-inherit">Commerce</strong>, or <strong className="text-inherit">Glass</strong>. Each card has a Copy HTML button for the Tailwind markup.
        </div>
      </Callout>

      <PageTabs defaultTab="cards-preview">
        <PageTab id="cards-preview">Preview</PageTab>

        <TabPane id="cards-preview">
          <CardPreviews onCopy={showToast} />
        </TabPane>
      </PageTabs>

      <DocNav
        prev={{ href: "/docs/heroes", title: "Heroes" }}
        next={{ href: "/docs/modals", title: "Modals" }}
      />
    </>
  );
}
