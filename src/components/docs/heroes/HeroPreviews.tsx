"use client";

import { useState } from "react";
import HeroCard from "./HeroCard";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "dark", label: "Dark" },
  { id: "light", label: "Light" },
  { id: "split", label: "Split" },
  { id: "centered", label: "Centered" },
  { id: "animated", label: "Animated" },
] as const;

type HeroPreviewsProps = { onCopy?: () => void };

export default function HeroPreviews({ onCopy }: HeroPreviewsProps) {
  const [filter, setFilter] = useState<string>("all");

  const matchesFilter = (dataTags: string) =>
    filter === "all" || dataTags.includes(filter);

  return (
    <div className="docs-hero-scope">
      {/* Filter bar — exact design from HTML */}
      <div className="filter-bar">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`filter-chip ${filter === f.id ? "on" : ""}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Hero 1: Electric Dark — exact structure from HTML */}
      {matchesFilter("dark centered animated") && (
        <HeroCard
          id={1}
          name="Electric Dark"
          tags={[
            { label: "Dark" },
            { label: "Grid BG" },
            { label: "Animated" },
            { label: "Popular", accent: true },
          ]}
          dataTags="dark centered animated"
          onCopy={onCopy}
        >
          <div className="h1-preview">
            <div className="h1-grid" />
            <div className="h1-glow" />
            <div className="h1-badge">
              <div className="h1-badge-dot" /> Now in Public Beta
            </div>
            <h1 className="h1-title">
              Build faster
              <br />
              ship <em>smarter</em>
            </h1>
            <p className="h1-sub">
              The UI component library that gets out of your way. Copy, paste, ship — no installs, no drama.
            </p>
            <div className="h1-btns">
              <button type="button" className="h1-btn-p">
                Get Started →
              </button>
              <button type="button" className="h1-btn-s">
                View Demo
              </button>
            </div>
            <div className="h1-stats">
              <div className="h1-stat">
                <div className="h1-stat-num">200+</div>
                <div className="h1-stat-label">Components</div>
              </div>
              <div className="h1-stat">
                <div className="h1-stat-num">15K</div>
                <div className="h1-stat-label">Developers</div>
              </div>
              <div className="h1-stat">
                <div className="h1-stat-num">100%</div>
                <div className="h1-stat-label">Free</div>
              </div>
            </div>
          </div>
        </HeroCard>
      )}

      {/* Hero 2: Split Layout */}
      {matchesFilter("light split") && (
        <HeroCard
          id={2}
          name="Split Layout"
          tags={[
            { label: "Light", light: true },
            { label: "Text + Visual" },
            { label: "Serif" },
          ]}
          dataTags="light split"
          onCopy={onCopy}
        >
          <div className="h2-preview">
            <div className="h2-left">
              <div className="h2-eyebrow">Introducing v2.0</div>
              <h1 className="h2-title">
                Design that <em>speaks</em> for itself.
              </h1>
              <p className="h2-sub">
                Refined components, built with precision. Every pixel intentional, every interaction considered.
              </p>
              <div className="h2-btns">
                <button type="button" className="h2-btn-p">
                  Explore Components
                </button>
                <button type="button" className="h2-btn-s">
                  Read Docs
                </button>
              </div>
            </div>
            <div className="h2-right">
              <div className="h2-bg-pattern" />
              <div className="h2-big-num">02</div>
              <div className="h2-card-mock">
                <div className="h2-card-icon">⚡</div>
                <div className="h2-card-t">Performance</div>
                <div className="h2-card-s">
                  Optimised for speed and production-grade output.
                </div>
                <div className="h2-card-bar">
                  <div className="h2-card-bar-fill" />
                </div>
              </div>
            </div>
          </div>
        </HeroCard>
      )}

      {/* Hero 3: Brutalist Magazine */}
      {matchesFilter("light split") && (
        <HeroCard
          id={3}
          name="Brutalist Magazine"
          tags={[
            { label: "Light", light: true },
            { label: "Editorial" },
            { label: "Bold" },
          ]}
          dataTags="light split"
          onCopy={onCopy}
        >
          <div className="h3-preview">
            <div className="h3-top-strip">
              <span className="h3-strip-item">✦ ISSUE 2025</span>
              <span className="h3-strip-item">✦ COMPONENTS</span>
              <span className="h3-strip-item">✦ OPEN SOURCE</span>
              <span className="h3-strip-item">✦ TAILWIND CSS</span>
              <span className="h3-strip-item">✦ FREE FOREVER</span>
            </div>
            <div className="h3-body">
              <div className="h3-left">
                <div className="h3-issue">Volume 01 / 2025</div>
                <h1 className="h3-title">
                  NO
                  <br />
                  <mark>INSTALLS.</mark>
                  <br />
                  JUST CODE.
                </h1>
                <p className="h3-desc">
                  Copy the component. Paste it. Customize. That&apos;s the whole workflow. No npm. No config files. No boilerplate.
                </p>
                <button type="button" className="h3-btn">
                  Browse →
                </button>
              </div>
              <div className="h3-right">
                <div className="h3-num-bg">01</div>
                <div className="h3-badge-stack">
                  <div className="h3-b">
                    <strong>200+</strong>Components ready
                  </div>
                  <div className="h3-b">
                    <strong>15</strong>Theme presets
                  </div>
                  <div className="h3-b">
                    <strong>∞</strong>Combinations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeroCard>
      )}

      {/* Hero 4: Gradient Mesh + Email */}
      {matchesFilter("dark centered animated") && (
        <HeroCard
          id={4}
          name="Gradient Mesh + CTA"
          tags={[
            { label: "Dark" },
            { label: "Email Input" },
            { label: "Colorful" },
          ]}
          dataTags="dark centered animated"
          onCopy={onCopy}
        >
          <div className="h4-preview">
            <div className="h4-mesh" />
            <div className="h4-label">The future of UI is here</div>
            <h1 className="h4-title">
              Create without <span className="grad-text">limits</span>
            </h1>
            <p className="h4-sub">
              The component library that adapts to you. Start building in seconds — no setup required.
            </p>
            <div className="h4-input-row">
              <input
                className="h4-input"
                type="email"
                placeholder="Enter your email..."
                readOnly
              />
              <button type="button" className="h4-submit">
                Start free →
              </button>
            </div>
            <p className="h4-note">No credit card. No install. Works everywhere.</p>
          </div>
        </HeroCard>
      )}

      {/* Hero 5: Cinematic Full-bleed */}
      {matchesFilter("dark split animated") && (
        <HeroCard
          id={5}
          name="Cinematic Full-bleed"
          tags={[
            { label: "Dark" },
            { label: "Bottom-anchored" },
            { label: "Film" },
          ]}
          dataTags="dark split animated"
          onCopy={onCopy}
        >
          <div className="h5-preview">
            <div className="h5-bg" />
            <div className="h5-noise" />
            <div className="h5-lines">
              <div className="h5-line" />
              <div className="h5-line" />
              <div className="h5-line" />
            </div>
            <div className="h5-content">
              <div className="h5-left">
                <div className="h5-cat">Cinematic Theme</div>
                <h1 className="h5-title">
                  Where great
                  <br />
                  stories begin.
                </h1>
                <p className="h5-sub">
                  A component library crafted for teams who care deeply about every detail — from the first pixel to the last interaction.
                </p>
                <div className="h5-btns">
                  <button type="button" className="h5-btn-p">
                    Get started
                  </button>
                  <button type="button" className="h5-btn-s">
                    <span className="h5-play-icon">▶</span>
                    Watch video
                  </button>
                </div>
              </div>
              <div className="h5-right">
                <div className="h5-scroll">
                  <div className="h5-scroll-line" />
                  Scroll to explore
                </div>
              </div>
            </div>
          </div>
        </HeroCard>
      )}

      {/* Hero 6: Typographic Spotlight */}
      {matchesFilter("light") && (
        <HeroCard
          id={6}
          name="Typographic Spotlight"
          tags={[
            { label: "Light", light: true },
            { label: "Outline Text" },
            { label: "Minimal" },
          ]}
          dataTags="light"
          onCopy={onCopy}
        >
          <div className="h6-preview">
            <div className="h6-bg-text">UI</div>
            <div className="h6-top">
              <span className="h6-num">01/09</span>
              <div className="h6-line-sep" />
              <span className="h6-category">Hero Sections</span>
            </div>
            <h1 className="h6-title">
              <span>Beautiful</span>
              <span className="h6-outline">Components</span>
              <span>for everyone.</span>
            </h1>
            <div className="h6-bottom">
              <p className="h6-desc">
                Copy-paste components built with Tailwind CSS. Open source, always free.
              </p>
              <div className="h6-cta-group">
                <button type="button" className="h6-btn">
                  Browse →
                </button>
                <span className="h6-link">View source</span>
              </div>
            </div>
          </div>
        </HeroCard>
      )}

      {/* Hero 7: Neon Terminal */}
      {matchesFilter("dark centered animated") && (
        <HeroCard
          id={7}
          name="Neon Terminal"
          tags={[
            { label: "Dark" },
            { label: "Glow Effects" },
            { label: "Trending", accent: true },
          ]}
          dataTags="dark centered animated"
          onCopy={onCopy}
        >
          <div className="h7-preview">
            <div className="h7-scanlines" />
            <div className="h7-glow-left" />
            <div className="h7-glow-right" />
            <div className="h7-terminal-line">
              $ outletui init<span className="h7-cursor" />
            </div>
            <h1 className="h7-title">
              Code <span className="neon-green">greener.</span>
              <br />
              Ship <span className="neon-blue">faster.</span>
            </h1>
            <p className="h7-sub">
              A component toolkit built for developers who think in systems. Open source. Zero vendor lock-in.
            </p>
            <div className="h7-btns">
              <button type="button" className="h7-btn-p">
                Start building →
              </button>
              <button type="button" className="h7-btn-s">
                $ npm i outletui
              </button>
            </div>
          </div>
        </HeroCard>
      )}

      {/* Hero 8: Warm Pastel Startup */}
      {matchesFilter("light centered") && (
        <HeroCard
          id={8}
          name="Warm Pastel Startup"
          tags={[
            { label: "Light", light: true },
            { label: "Blob BG" },
            { label: "Social Proof" },
          ]}
          dataTags="light centered"
          onCopy={onCopy}
        >
          <div className="h8-preview">
            <div className="h8-blob1" />
            <div className="h8-blob2" />
            <div className="h8-inner">
              <div className="h8-tag">
                <span className="h8-emoji">✨</span>Trusted by 15,000+ teams
              </div>
              <h1 className="h8-title">
                Your ideas deserve
                <br />
                <span>better UI.</span>
              </h1>
              <p className="h8-sub">
                Beautiful, warm, and accessible components that make your product feel human.
              </p>
              <div className="h8-btns">
                <button type="button" className="h8-btn-p">
                  Start for free
                </button>
                <button type="button" className="h8-btn-s">
                  See examples
                </button>
              </div>
              <div className="h8-social">
                <div className="h8-avatars">
                  <div className="h8-av" />
                  <div className="h8-av" />
                  <div className="h8-av" />
                  <div className="h8-av" />
                </div>
                <div className="h8-social-text">
                  Loved by <strong>15,000+</strong> developers worldwide
                </div>
              </div>
            </div>
          </div>
        </HeroCard>
      )}

      {/* Hero 9: Feature List + Dashboard */}
      {matchesFilter("dark split") && (
        <HeroCard
          id={9}
          name="Feature List + Dashboard"
          tags={[
            { label: "Dark" },
            { label: "Two-column" },
            { label: "SaaS" },
          ]}
          dataTags="dark split"
          onCopy={onCopy}
        >
          <div className="h9-preview">
            <div className="h9-left">
              <div className="h9-kicker">
                <div className="h9-kicker-dot" />
                <span className="h9-kicker-text">Built for scale</span>
              </div>
              <h1 className="h9-title">
                The toolkit your team actually ships with.
              </h1>
              <p className="h9-sub">
                Components that work together. Designed for real products, not demos.
              </p>
              <div className="h9-features">
                <div className="h9-feat">
                  <div className="h9-feat-check">✓</div>Zero install, works instantly
                </div>
                <div className="h9-feat">
                  <div className="h9-feat-check">✓</div>Tailwind CSS — fully customizable
                </div>
                <div className="h9-feat">
                  <div className="h9-feat-check">✓</div>200+ components & growing
                </div>
                <div className="h9-feat">
                  <div className="h9-feat-check">✓</div>Dark, light & custom themes
                </div>
              </div>
              <div className="h9-btns">
                <button type="button" className="h9-btn-p">
                  Get started →
                </button>
                <button type="button" className="h9-btn-s">
                  View docs
                </button>
              </div>
            </div>
            <div className="h9-right">
              <div className="h9-mock-card">
                <div className="h9-mock-top">
                  <div
                    className="h9-mock-icon"
                    style={{ background: "rgba(232,255,71,0.1)" }}
                  >
                    ⚡
                  </div>
                  <span className="h9-mock-label">Performance</span>
                  <span className="h9-mock-val">98/100</span>
                </div>
                <div className="h9-mock-bar-wrap">
                  <div
                    className="h9-mock-bar"
                    style={{ width: "98%", background: "var(--accent)" }}
                  />
                </div>
              </div>
              <div className="h9-mock-card">
                <div className="h9-mock-top">
                  <div
                    className="h9-mock-icon"
                    style={{ background: "rgba(71,255,178,0.1)" }}
                  >
                    🛡
                  </div>
                  <span className="h9-mock-label">Accessibility</span>
                  <span className="h9-mock-val">AA+</span>
                </div>
                <div className="h9-mock-bar-wrap">
                  <div
                    className="h9-mock-bar"
                    style={{ width: "92%", background: "#47ffb2" }}
                  />
                </div>
              </div>
              <div className="h9-mock-card">
                <div className="h9-mock-top">
                  <div
                    className="h9-mock-icon"
                    style={{ background: "rgba(96,165,250,0.1)" }}
                  >
                    📦
                  </div>
                  <span className="h9-mock-label">Bundle size</span>
                  <span className="h9-mock-val">0 KB</span>
                </div>
                <div className="h9-mock-bar-wrap">
                  <div
                    className="h9-mock-bar"
                    style={{ width: "100%", background: "#60a5fa" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </HeroCard>
      )}
    </div>
  );
}
