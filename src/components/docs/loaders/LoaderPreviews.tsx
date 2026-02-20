"use client";

import LoaderCard from "./LoaderCard";
import type { LoaderId } from "@/config/loaderSnippets";

const LOADERS: { id: LoaderId; name: string }[] = [
  { id: "spinner", name: "Spinner" },
  { id: "dots", name: "Dots Bounce" },
  { id: "bar", name: "Indeterminate Bar" },
  { id: "ring", name: "Double Ring" },
  { id: "skeleton", name: "Skeleton" },
  { id: "blob", name: "Pulse Blob" },
  { id: "orbit", name: "Orbit" },
  { id: "typewriter", name: "Typewriter" },
  { id: "squares", name: "Squares" },
  { id: "progress", name: "Progress Bar" },
  { id: "heartbeat", name: "Heartbeat" },
  { id: "ripple", name: "Ripple" },
];

type LoaderPreviewsProps = {
  onCopy?: () => void;
};

export default function LoaderPreviews({ onCopy }: LoaderPreviewsProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-3 mt-2">
      <LoaderCard id="spinner" name="Spinner" onCopy={onCopy}>
        <div className="docs-loader-spinner" />
      </LoaderCard>
      <LoaderCard id="dots" name="Dots Bounce" onCopy={onCopy}>
        <div className="docs-loader-dots">
          <span /><span /><span />
        </div>
      </LoaderCard>
      <LoaderCard id="bar" name="Indeterminate Bar" onCopy={onCopy}>
        <div className="docs-loader-bar-wrap">
          <div className="docs-loader-bar" />
        </div>
      </LoaderCard>
      <LoaderCard id="ring" name="Double Ring" onCopy={onCopy}>
        <div className="docs-loader-ring" />
      </LoaderCard>
      <LoaderCard id="skeleton" name="Skeleton" onCopy={onCopy} className="items-stretch">
        <div className="docs-loader-skeleton">
          <div className="docs-skel h-3 w-3/5" />
          <div className="docs-skel h-2 w-full" />
          <div className="docs-skel h-2 w-4/5" />
          <div className="docs-skel h-2 w-[90%]" />
          <div className="docs-skel h-2 w-[55%]" />
        </div>
      </LoaderCard>
      <LoaderCard id="blob" name="Pulse Blob" onCopy={onCopy}>
        <div className="docs-loader-blob">
          <div className="docs-blob-inner" />
        </div>
      </LoaderCard>
      <LoaderCard id="orbit" name="Orbit" onCopy={onCopy}>
        <div className="docs-loader-orbit">
          <div className="docs-orbit-ring" />
          <div className="docs-orbit-core" />
        </div>
      </LoaderCard>
      <LoaderCard id="typewriter" name="Typewriter" onCopy={onCopy}>
        <div className="docs-loader-type">
          <div className="docs-type-text">Loading...</div>
        </div>
      </LoaderCard>
      <LoaderCard id="squares" name="Squares" onCopy={onCopy}>
        <div className="docs-loader-squares">
          <div className="docs-sq" />
          <div className="docs-sq" />
          <div className="docs-sq" />
          <div className="docs-sq" />
        </div>
      </LoaderCard>
      <LoaderCard id="progress" name="Progress Bar" onCopy={onCopy} className="items-stretch">
        <div className="docs-loader-progress">
          <div className="flex justify-between text-[11px] text-[var(--muted)]">
            <span>Loading</span>
            <span>...</span>
          </div>
          <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
            <div className="docs-progress-fill" />
          </div>
        </div>
      </LoaderCard>
      <LoaderCard id="heartbeat" name="Heartbeat" onCopy={onCopy}>
        <svg className="w-[120px] h-10" viewBox="0 0 120 40">
          <path
            className="docs-heart-path"
            d="M0,20 L20,20 L30,5 L40,35 L50,12 L60,28 L70,20 L120,20"
          />
        </svg>
      </LoaderCard>
      <LoaderCard id="ripple" name="Ripple" onCopy={onCopy}>
        <div className="docs-loader-ripple">
          <div className="docs-ripple-circle" />
          <div className="docs-ripple-circle" />
          <div className="docs-ripple-circle" />
          <div className="docs-ripple-dot" />
        </div>
      </LoaderCard>
    </div>
  );
}
