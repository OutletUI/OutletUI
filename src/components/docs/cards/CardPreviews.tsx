"use client";

import { useState, useCallback } from "react";
import { CARD_SNIPPETS, getAllCardSnippets } from "@/config/cardSnippets";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "dark", label: "Dark" },
  { id: "light", label: "Light" },
  { id: "interactive", label: "Interactive" },
  { id: "data", label: "Data" },
  { id: "commerce", label: "Commerce" },
  { id: "glass", label: "Glass" },
] as const;

type CardPreviewsProps = { onCopy?: () => void };

function CopyButton({
  snippetId,
  onCopy,
}: {
  snippetId: number;
  onCopy?: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const handleClick = useCallback(() => {
    const text = CARD_SNIPPETS[snippetId];
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        onCopy?.();
        setTimeout(() => setCopied(false), 2200);
      });
    }
  }, [snippetId, onCopy]);
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`cs-copy ${copied ? "copied" : ""}`}
    >
      {copied ? "✓ Copied!" : "Copy HTML"}
    </button>
  );
}

export default function CardPreviews({ onCopy }: CardPreviewsProps) {
  const [filter, setFilter] = useState<string>("all");

  const matchesFilter = (dataTags: string) =>
    filter === "all" || (dataTags || "").includes(filter);

  const handleCopyAll = useCallback(() => {
    navigator.clipboard.writeText(getAllCardSnippets()).then(() => onCopy?.());
  }, [onCopy]);

  return (
    <div className="docs-cards-scope">
      <div className="filter-row">
        <button
          type="button"
          onClick={handleCopyAll}
          className="tb-copy-all"
        >
          Copy All
        </button>
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`chip ${filter === f.id ? "on" : ""}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* 1. Feature Cards */}
      <div
        className="card-showcase"
        data-tags="dark interactive"
        style={{ display: matchesFilter("dark interactive") ? undefined : "none" }}
      >
        <div className="cs-toolbar">
          <div className="cs-meta">
            <span className="cs-name">Feature Cards</span>
            <span className="cs-tag">Dark</span>
            <span className="cs-tag">Icon</span>
            <span className="cs-tag accent">Popular</span>
          </div>
          <CopyButton snippetId={1} onCopy={onCopy} />
        </div>
        <div className="cs-preview">
          <div className="feat-card">
            <div className="feat-icon" style={{ background: "rgba(232,255,71,.1)" }}>⚡</div>
            <div className="feat-title">Lightning Fast</div>
            <div className="feat-desc">Optimised for performance out of the box. Zero config, instant results.</div>
            <div className="feat-link">Learn more →</div>
          </div>
          <div className="feat-card">
            <div className="feat-icon" style={{ background: "rgba(71,255,178,.1)" }}>🛡️</div>
            <div className="feat-title">Secure by Default</div>
            <div className="feat-desc">Built with security best practices baked in at every layer of the stack.</div>
            <div className="feat-link">Learn more →</div>
          </div>
          <div className="feat-card">
            <div className="feat-icon" style={{ background: "rgba(96,165,250,.1)" }}>🔌</div>
            <div className="feat-title">Plug & Play</div>
            <div className="feat-desc">No install needed. Copy the code, drop it in, customize and ship.</div>
            <div className="feat-link">Learn more →</div>
          </div>
          <div className="feat-card">
            <div className="feat-icon" style={{ background: "rgba(255,107,71,.1)" }}>🎨</div>
            <div className="feat-title">Fully Themeable</div>
            <div className="feat-desc">15+ themes included. Swap accent colors, fonts, and spacing freely.</div>
            <div className="feat-link">Learn more →</div>
          </div>
        </div>
      </div>

      {/* 2. Stat / Metric Cards */}
      <div
        className="card-showcase"
        data-tags="dark data"
        style={{ display: matchesFilter("dark data") ? undefined : "none" }}
      >
        <div className="cs-toolbar">
          <div className="cs-meta">
            <span className="cs-name">Stat / Metric Cards</span>
            <span className="cs-tag">Dark</span>
            <span className="cs-tag">Dashboard</span>
            <span className="cs-tag green">Data</span>
          </div>
          <CopyButton snippetId={2} onCopy={onCopy} />
        </div>
        <div className="cs-preview">
          <div className="stat-card">
            <div className="stat-label">Monthly Revenue <span className="stat-arrow-up">↑ 12%</span></div>
            <div className="stat-num" style={{ color: "var(--accent)" }}>$84.2k</div>
            <div className="stat-change">vs $75.1k last month</div>
            <div className="stat-sparkline">
              {[40, 55, 45, 70, 60, 80, 100].map((h, i) => (
                <div key={i} className="spark-bar" style={{ height: `${h}%`, background: i === 6 ? "var(--accent)" : "rgba(232,255,71,.3)" }} />
              ))}
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Active Users <span className="stat-arrow-up">↑ 8%</span></div>
            <div className="stat-num" style={{ color: "var(--accent2)" }}>12,847</div>
            <div className="stat-change">↑ 947 this week</div>
            <div className="stat-sparkline">
              {[50, 65, 55, 75, 70, 90, 100].map((h, i) => (
                <div key={i} className="spark-bar" style={{ height: `${h}%`, background: i === 6 ? "#47ffb2" : "rgba(71,255,178,.25)" }} />
              ))}
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Churn Rate <span className="stat-arrow-down">↓ 2%</span></div>
            <div className="stat-num" style={{ color: "var(--accent3)" }}>3.2%</div>
            <div className="stat-change">↓ 0.4% improvement</div>
            <div className="stat-sparkline">
              {[100, 90, 85, 75, 65, 55, 45].map((h, i) => (
                <div key={i} className="spark-bar" style={{ height: `${h}%`, background: i === 6 ? "#ff6b47" : "rgba(255,107,71,.25)" }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Profile / Team Cards */}
      <div
        className="card-showcase"
        data-tags="dark interactive"
        style={{ display: matchesFilter("dark interactive") ? undefined : "none" }}
      >
        <div className="cs-toolbar">
          <div className="cs-meta">
            <span className="cs-name">Profile / Team Cards</span>
            <span className="cs-tag">Dark</span>
            <span className="cs-tag">Social</span>
          </div>
          <CopyButton snippetId={3} onCopy={onCopy} />
        </div>
        <div className="cs-preview">
          <div className="profile-card">
            <div className="profile-banner" style={{ background: "linear-gradient(135deg,#1a0533,#0a1628)" }}>
              <div className="profile-avatar" style={{ background: "linear-gradient(135deg,#e8ff47,#47ffb2)" }} />
            </div>
            <div className="profile-body">
              <div className="profile-name">Alex Kim</div>
              <div className="profile-role">Product Designer</div>
              <div className="profile-stats">
                <div className="profile-stat"><div className="profile-stat-num">248</div><div className="profile-stat-label">Posts</div></div>
                <div className="profile-stat"><div className="profile-stat-num">14.2k</div><div className="profile-stat-label">Followers</div></div>
                <div className="profile-stat"><div className="profile-stat-num">320</div><div className="profile-stat-label">Following</div></div>
              </div>
              <button type="button" className="profile-btn">Follow</button>
            </div>
          </div>
          <div className="profile-card">
            <div className="profile-banner" style={{ background: "linear-gradient(135deg,#001a12,#0a2800)" }}>
              <div className="profile-avatar" style={{ background: "linear-gradient(135deg,#47ffb2,#60a5fa)" }} />
            </div>
            <div className="profile-body">
              <div className="profile-name">Sam Rivera</div>
              <div className="profile-role">Full-stack Engineer</div>
              <div className="profile-stats">
                <div className="profile-stat"><div className="profile-stat-num">97</div><div className="profile-stat-label">Posts</div></div>
                <div className="profile-stat"><div className="profile-stat-num">8.9k</div><div className="profile-stat-label">Followers</div></div>
                <div className="profile-stat"><div className="profile-stat-num">204</div><div className="profile-stat-label">Following</div></div>
              </div>
              <button type="button" className="profile-btn">Follow</button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Pricing Cards */}
      <div
        className="card-showcase"
        data-tags="dark commerce interactive"
        style={{ display: matchesFilter("dark commerce interactive") ? undefined : "none" }}
      >
        <div className="cs-toolbar">
          <div className="cs-meta">
            <span className="cs-name">Pricing Cards</span>
            <span className="cs-tag">Dark</span>
            <span className="cs-tag">Commerce</span>
            <span className="cs-tag accent">SaaS</span>
          </div>
          <CopyButton snippetId={4} onCopy={onCopy} />
        </div>
        <div className="cs-preview">
          <div className="price-card">
            <div className="price-plan">Starter</div>
            <div className="price-num">$0</div>
            <div className="price-per">per month</div>
            <div className="price-features">
              <div className="price-feat"><div className="price-check">✓</div>10 components</div>
              <div className="price-feat"><div className="price-check">✓</div>2 themes</div>
              <div className="price-feat"><div className="price-check">✓</div>Community support</div>
            </div>
            <button type="button" className="price-btn">Get started</button>
          </div>
          <div className="price-card popular">
            <div className="price-popular-badge">Most popular</div>
            <div className="price-plan">Pro</div>
            <div className="price-num">$19</div>
            <div className="price-per">per month</div>
            <div className="price-features">
              <div className="price-feat"><div className="price-check">✓</div>200+ components</div>
              <div className="price-feat"><div className="price-check">✓</div>All themes</div>
              <div className="price-feat"><div className="price-check">✓</div>Priority support</div>
              <div className="price-feat"><div className="price-check">✓</div>Early access</div>
            </div>
            <button type="button" className="price-btn">Start Pro →</button>
          </div>
          <div className="price-card">
            <div className="price-plan">Team</div>
            <div className="price-num">$49</div>
            <div className="price-per">per month</div>
            <div className="price-features">
              <div className="price-feat"><div className="price-check">✓</div>Everything in Pro</div>
              <div className="price-feat"><div className="price-check">✓</div>5 seats</div>
              <div className="price-feat"><div className="price-check">✓</div>Custom themes</div>
            </div>
            <button type="button" className="price-btn">Start Team</button>
          </div>
        </div>
      </div>

      {/* 5. Product / E-comm Cards */}
      <div
        className="card-showcase"
        data-tags="light commerce interactive"
        style={{ display: matchesFilter("light commerce interactive") ? undefined : "none" }}
      >
        <div className="cs-toolbar">
          <div className="cs-meta">
            <span className="cs-name">Product Cards</span>
            <span className="cs-tag" style={{ background: "rgba(0,0,0,.06)", color: "#888" }}>Light</span>
            <span className="cs-tag" style={{ background: "rgba(0,0,0,.06)", color: "#888" }}>E-commerce</span>
          </div>
          <CopyButton snippetId={5} onCopy={onCopy} />
        </div>
        <div className="cs-preview light-canvas">
          <div className="product-card">
            <div className="product-img" style={{ background: "#f0fdf4" }}>
              🎧
              <div className="product-badge" style={{ background: "#dcfce7", color: "#166534" }}>New</div>
              <div className="product-wishlist">🤍</div>
            </div>
            <div className="product-body">
              <div className="product-category">Audio</div>
              <div className="product-name">Pro Studio Headset</div>
              <div className="product-rating"><span className="product-stars">★★★★★</span> 4.9 (128)</div>
              <div className="product-footer">
                <div><span className="product-price">$129</span><span className="product-old-price">$179</span></div>
                <button type="button" className="product-add">+</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img" style={{ background: "#fef3c7" }}>
              ⌚
              <div className="product-badge" style={{ background: "#fef9c3", color: "#854d0e" }}>Sale</div>
              <div className="product-wishlist">❤️</div>
            </div>
            <div className="product-body">
              <div className="product-category">Wearables</div>
              <div className="product-name">Smart Watch X</div>
              <div className="product-rating"><span className="product-stars">★★★★☆</span> 4.6 (84)</div>
              <div className="product-footer">
                <div><span className="product-price">$249</span><span className="product-old-price">$349</span></div>
                <button type="button" className="product-add">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Blog / Article Cards */}
      <div
        className="card-showcase"
        data-tags="dark interactive"
        style={{ display: matchesFilter("dark interactive") ? undefined : "none" }}
      >
        <div className="cs-toolbar">
          <div className="cs-meta">
            <span className="cs-name">Blog / Article Cards</span>
            <span className="cs-tag">Dark</span>
            <span className="cs-tag">Editorial</span>
          </div>
          <CopyButton snippetId={6} onCopy={onCopy} />
        </div>
        <div className="cs-preview">
          <div className="blog-card">
            <div className="blog-img" style={{ background: "linear-gradient(135deg,#0d1117,#1a0533)" }}>
              🚀
              <div className="blog-tag" style={{ background: "rgba(232,255,71,.15)", color: "var(--accent)" }}>Design</div>
            </div>
            <div className="blog-body">
              <div className="blog-meta"><span>Jun 12</span><span className="blog-meta-dot" /><span>4 min read</span></div>
              <div className="blog-title">The death of the boring landing page</div>
              <div className="blog-excerpt">Why the most successful products today have UIs that feel alive, personal, and unexpected.</div>
              <div className="blog-footer">
                <div className="blog-author">
                  <div className="blog-author-av" style={{ background: "linear-gradient(135deg,#e8ff47,#47ffb2)" }} />
                  <span className="blog-author-name">Maya Chen</span>
                </div>
                <div className="blog-read">Read →</div>
              </div>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-img" style={{ background: "linear-gradient(135deg,#001a12,#0a2800)" }}>
              ⚡
              <div className="blog-tag" style={{ background: "rgba(71,255,178,.15)", color: "#47ffb2" }}>Dev</div>
            </div>
            <div className="blog-body">
              <div className="blog-meta"><span>Jun 8</span><span className="blog-meta-dot" /><span>6 min read</span></div>
              <div className="blog-title">Tailwind tricks even seniors miss</div>
              <div className="blog-excerpt">15 utility patterns that will change how you write styles — guaranteed to save hours.</div>
              <div className="blog-footer">
                <div className="blog-author">
                  <div className="blog-author-av" style={{ background: "linear-gradient(135deg,#47ffb2,#60a5fa)" }} />
                  <span className="blog-author-name">Sam Rivera</span>
                </div>
                <div className="blog-read">Read →</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Notification Cards */}
      <div
        className="card-showcase"
        data-tags="dark data interactive"
        style={{ display: matchesFilter("dark data interactive") ? undefined : "none" }}
      >
        <div className="cs-toolbar">
          <div className="cs-meta">
            <span className="cs-name">Notification / Activity Cards</span>
            <span className="cs-tag">Dark</span>
            <span className="cs-tag">App UI</span>
          </div>
          <CopyButton snippetId={7} onCopy={onCopy} />
        </div>
        <div className="cs-preview">
          <div className="notif-card">
            <div className="notif-header">
              <div className="notif-header-title">Notifications</div>
              <div className="notif-badge">3</div>
            </div>
            <div className="notif-item">
              <div className="notif-dot-wrap">
                <div className="notif-av" style={{ background: "rgba(232,255,71,.1)" }}>⭐</div>
                <div className="notif-unread" />
              </div>
              <div className="notif-content">
                <div className="notif-text"><strong>Alex Kim</strong> starred your component</div>
                <div className="notif-time">2 minutes ago</div>
              </div>
            </div>
            <div className="notif-item">
              <div className="notif-dot-wrap">
                <div className="notif-av" style={{ background: "rgba(71,255,178,.1)" }}>💬</div>
                <div className="notif-unread" style={{ background: "#47ffb2" }} />
              </div>
              <div className="notif-content">
                <div className="notif-text"><strong>Sam Rivera</strong> replied to your comment on <strong>Hero Sections</strong></div>
                <div className="notif-time">14 minutes ago</div>
              </div>
            </div>
            <div className="notif-item" style={{ opacity: 0.5 }}>
              <div className="notif-dot-wrap">
                <div className="notif-av" style={{ background: "rgba(255,255,255,.06)" }}>🎉</div>
              </div>
              <div className="notif-content">
                <div className="notif-text"><strong>Jordan Lee</strong> followed you</div>
                <div className="notif-time">Yesterday</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. Task Cards */}
      <div
        className="card-showcase"
        data-tags="dark data interactive"
        style={{ display: matchesFilter("dark data interactive") ? undefined : "none" }}
      >
        <div className="cs-toolbar">
          <div className="cs-meta">
            <span className="cs-name">Task / Project Cards</span>
            <span className="cs-tag">Dark</span>
            <span className="cs-tag">Dashboard</span>
          </div>
          <CopyButton snippetId={8} onCopy={onCopy} />
        </div>
        <div className="cs-preview">
          <div className="task-card">
            <div className="task-card-top">
              <div className="task-card-title">Design System v2</div>
              <div className="task-card-menu">⋯</div>
            </div>
            <div className="task-progress">
              <div className="task-progress-row"><span>Progress</span><span style={{ color: "var(--accent)" }}>68%</span></div>
              <div className="task-progress-bar"><div className="task-progress-fill" style={{ width: "68%" }} /></div>
            </div>
            <div className="task-items">
              <div className="task-item done-item"><div className="task-cb done">✓</div>Research & audit</div>
              <div className="task-item done-item"><div className="task-cb done">✓</div>Component inventory</div>
              <div className="task-item"><div className="task-cb" />Token system setup</div>
              <div className="task-item"><div className="task-cb" />Documentation draft</div>
            </div>
            <div className="task-footer">
              <div className="task-assignees">
                <div className="task-av" style={{ background: "linear-gradient(135deg,#e8ff47,#47ffb2)" }} />
                <div className="task-av" style={{ background: "linear-gradient(135deg,#60a5fa,#a78bfa)" }} />
                <div className="task-av" style={{ background: "linear-gradient(135deg,#ff6b47,#fbbf24)" }} />
              </div>
              <div className="task-due">Due Jun 30</div>
            </div>
          </div>
          <div className="task-card">
            <div className="task-card-top">
              <div className="task-card-title">Hero Sections Pack</div>
              <div className="task-card-menu">⋯</div>
            </div>
            <div className="task-progress">
              <div className="task-progress-row"><span>Progress</span><span style={{ color: "#47ffb2" }}>100%</span></div>
              <div className="task-progress-bar"><div className="task-progress-fill" style={{ width: "100%" }} /></div>
            </div>
            <div className="task-items">
              <div className="task-item done-item"><div className="task-cb done">✓</div>Design 9 variants</div>
              <div className="task-item done-item"><div className="task-cb done">✓</div>Write HTML snippets</div>
              <div className="task-item done-item"><div className="task-cb done">✓</div>Add filter system</div>
              <div className="task-item done-item"><div className="task-cb done">✓</div>Ship to production</div>
            </div>
            <div className="task-footer">
              <div className="task-assignees">
                <div className="task-av" style={{ background: "linear-gradient(135deg,#47ffb2,#60a5fa)" }} />
              </div>
              <div className="task-due" style={{ color: "#47ffb2", borderColor: "rgba(71,255,178,.2)", background: "rgba(71,255,178,.06)" }}>Complete ✓</div>
            </div>
          </div>
        </div>
      </div>

      {/* 9. Testimonial Cards */}
      <div
        className="card-showcase"
        data-tags="dark"
        style={{ display: matchesFilter("dark") ? undefined : "none" }}
      >
        <div className="cs-toolbar">
          <div className="cs-meta">
            <span className="cs-name">Testimonial Cards</span>
            <span className="cs-tag">Dark</span>
            <span className="cs-tag">Social Proof</span>
          </div>
          <CopyButton snippetId={9} onCopy={onCopy} />
        </div>
        <div className="cs-preview">
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <div className="testi-quote">OutletUI is the first component library where I actually kept the designs as-is. Nothing needed changing.</div>
            <div className="testi-author">
              <div className="testi-av" style={{ background: "linear-gradient(135deg,#e8ff47,#47ffb2)" }} />
              <div><div className="testi-name">Alex Kim</div><div className="testi-role">Product Lead @ Stripe</div></div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <div className="testi-quote">Saved us 3 weeks of UI work. We went from wireframes to shipped in a single sprint.</div>
            <div className="testi-author">
              <div className="testi-av" style={{ background: "linear-gradient(135deg,#60a5fa,#a78bfa)" }} />
              <div><div className="testi-name">Sam Rivera</div><div className="testi-role">CTO @ BuildFast</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* 10. Gradient Accent Cards */}
      <div
        className="card-showcase"
        data-tags="dark interactive"
        style={{ display: matchesFilter("dark interactive") ? undefined : "none" }}
      >
        <div className="cs-toolbar">
          <div className="cs-meta">
            <span className="cs-name">Gradient Accent Cards</span>
            <span className="cs-tag">Colorful</span>
            <span className="cs-tag">Marketing</span>
          </div>
          <CopyButton snippetId={10} onCopy={onCopy} />
        </div>
        <div className="cs-preview pure-dark">
          <div className="grad-card" style={{ background: "linear-gradient(135deg,#1a0533,#4c1d95)", color: "#fff" }}>
            <div className="grad-icon">⚡</div>
            <div className="grad-title">Ship faster</div>
            <div className="grad-desc">Zero config. Just copy the code and go. No installs.</div>
            <button type="button" className="grad-btn">Start →</button>
          </div>
          <div className="grad-card" style={{ background: "linear-gradient(135deg,#001a12,#065f46)", color: "#fff" }}>
            <div className="grad-icon">🛡️</div>
            <div className="grad-title">Always free</div>
            <div className="grad-desc">Open source forever. No paywalls, no limits, no catch.</div>
            <button type="button" className="grad-btn">Browse →</button>
          </div>
          <div className="grad-card" style={{ background: "linear-gradient(135deg,#1a0a00,#92400e)", color: "#fff" }}>
            <div className="grad-icon">🎨</div>
            <div className="grad-title">15+ themes</div>
            <div className="grad-desc">Dark, light, pastel, brutal. Swap with one class change.</div>
            <button type="button" className="grad-btn">Explore →</button>
          </div>
        </div>
      </div>

      {/* 11. Glassmorphism Cards */}
      <div
        className="card-showcase"
        data-tags="glass dark interactive"
        style={{ display: matchesFilter("glass dark interactive") ? undefined : "none" }}
      >
        <div className="cs-toolbar">
          <div className="cs-meta">
            <span className="cs-name">Glassmorphism Cards</span>
            <span className="cs-tag">Dark</span>
            <span className="cs-tag">Glass</span>
            <span className="cs-tag accent">Trending</span>
          </div>
          <CopyButton snippetId={11} onCopy={onCopy} />
        </div>
        <div className="cs-preview" style={{ padding: 0 }}>
          <div className="glass-bg">
            <div className="glass-bg-blob" style={{ width: 280, height: 280, background: "rgba(139,92,246,.35)", position: "absolute", top: -60, left: -60 }} />
            <div className="glass-bg-blob" style={{ width: 220, height: 220, background: "rgba(20,184,166,.3)", position: "absolute", bottom: -40, right: 40 }} />
            <div className="glass-bg-blob" style={{ width: 180, height: 180, background: "rgba(232,255,71,.2)", position: "absolute", top: 30, right: -40 }} />
            <div className="glass-card">
              <div className="glass-icon">🚀</div>
              <div className="glass-title">Launch Ready</div>
              <div className="glass-desc">Ship production-quality UI in minutes, not days.</div>
              <div className="glass-footer"><span className="glass-tag">Components</span><span className="glass-arrow">→</span></div>
            </div>
            <div className="glass-card">
              <div className="glass-icon">⚡</div>
              <div className="glass-title">Blazing Fast</div>
              <div className="glass-desc">Pure Tailwind, zero runtime overhead, tiny bundles.</div>
              <div className="glass-footer"><span className="glass-tag">Performance</span><span className="glass-arrow">→</span></div>
            </div>
            <div className="glass-card">
              <div className="glass-icon">🎨</div>
              <div className="glass-title">Themeable</div>
              <div className="glass-desc">Swap colors, fonts, and radius in seconds.</div>
              <div className="glass-footer"><span className="glass-tag">Theming</span><span className="glass-arrow">→</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* 12. Horizontal List Cards */}
      <div
        className="card-showcase"
        data-tags="dark data interactive"
        style={{ display: matchesFilter("dark data interactive") ? undefined : "none" }}
      >
        <div className="cs-toolbar">
          <div className="cs-meta">
            <span className="cs-name">Horizontal / List Cards</span>
            <span className="cs-tag">Dark</span>
            <span className="cs-tag">List View</span>
            <span className="cs-tag">App UI</span>
          </div>
          <CopyButton snippetId={12} onCopy={onCopy} />
        </div>
        <div className="cs-preview" style={{ flexDirection: "column", alignItems: "center" }}>
          <div className="horiz-card">
            <div className="horiz-icon" style={{ background: "rgba(232,255,71,.1)" }}>⚡</div>
            <div className="horiz-body">
              <div className="horiz-title">Loaders Pack</div>
              <div className="horiz-desc">12 animated CSS-only loaders for every use case</div>
            </div>
            <div className="horiz-right">
              <span className="horiz-badge" style={{ background: "rgba(232,255,71,.1)", color: "var(--accent)" }}>New</span>
              <span className="horiz-time">Today</span>
            </div>
          </div>
          <div className="horiz-card">
            <div className="horiz-icon" style={{ background: "rgba(71,255,178,.1)" }}>🧭</div>
            <div className="horiz-body">
              <div className="horiz-title">Navbars v2</div>
              <div className="horiz-desc">10 navigation bar variants — dark, light, pill, brutalist</div>
            </div>
            <div className="horiz-right">
              <span className="horiz-badge" style={{ background: "rgba(71,255,178,.1)", color: "#47ffb2" }}>Updated</span>
              <span className="horiz-time">Yesterday</span>
            </div>
          </div>
          <div className="horiz-card">
            <div className="horiz-icon" style={{ background: "rgba(96,165,250,.1)" }}>🦸</div>
            <div className="horiz-body">
              <div className="horiz-title">Hero Sections</div>
              <div className="horiz-desc">9 battle-tested hero layouts — cinematic, editorial, neon</div>
            </div>
            <div className="horiz-right">
              <span className="horiz-badge" style={{ background: "rgba(96,165,250,.1)", color: "#60a5fa" }}>Popular</span>
              <span className="horiz-time">2 days ago</span>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
