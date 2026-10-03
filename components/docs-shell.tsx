"use client";

import { useEffect, useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  Menu,
  X,
  GitBranch,
  ExternalLink,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  {
    title: "Introduction",
    href: "#keploy-go-from-api-traffic-to-automated-tests",
    step: null,
  },
  {
    title: "What you'll build",
    href: "#what-youll-build",
    step: null,
  },
  {
    title: "Prerequisites",
    href: "#prerequisites",
    step: null,
  },
  {
    title: "Get the Go sample",
    href: "#1-get-the-go-sample-app",
    step: 1,
  },
  {
    title: "Start MySQL",
    href: "#2-start-mysql-with-docker",
    step: 2,
  },
  {
    title: "Set DB connection",
    href: "#3-set-the-database-connection",
    step: 3,
  },
  {
    title: "Build the Go app",
    href: "#4-build-the-go-app",
    step: 4,
  },
  {
    title: "Record API traffic",
    href: "#5-record-api-traffic-with-keploy",
    step: 5,
  },
  {
    title: "Send API requests",
    href: "#6-send-real-api-requests",
    step: 6,
  },
  {
    title: "Inspect tests & mocks",
    href: "#7-inspect-the-generated-tests-and-mocks",
    step: 7,
  },
  {
    title: "Replay the tests",
    href: "#8-replay-the-tests",
    step: 8,
  },
  {
    title: "Troubleshooting",
    href: "#9-troubleshooting",
    step: 9,
  },
  {
    title: "Final result",
    href: "#10-final-result",
    step: 10,
  },
];

export function DocsShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [highlightedHref, setHighlightedHref] = useState<string>("");
  const [activeHref, setActiveHref] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll-spy: detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      // Progress bar
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // Active section
      const headings = navigation
        .map((item) => {
          const id = item.href.replace("#", "");
          const el = document.getElementById(id);
          return { href: item.href, el };
        })
        .filter((x) => x.el != null);

      let current = "";
      for (const { href, el } of headings) {
        const rect = el!.getBoundingClientRect();
        if (rect.top <= 110) {
          current = href;
        }
      }
      if (current) setActiveHref(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click a nav link → smooth scroll + flash highlight the target heading
  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    e.preventDefault();
    setMobileOpen(false);

    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;

    // Scroll with header offset
    const headerHeight = parseInt(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--header-height")
        .trim(),
      10
    ) || 60;

    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight - 20;

    window.scrollTo({ top, behavior: "smooth" });

    // Flash highlight: add class → remove after animation
    target.classList.add("section-highlighted");
    setHighlightedHref(href);
    setTimeout(() => {
      target.classList.remove("section-highlighted");
      setHighlightedHref("");
    }, 1800);
  }

  const stepsTotal = navigation.filter((n) => n.step !== null).length;
  const stepsActive = navigation.filter(
    (n) =>
      n.step !== null &&
      navigation.findIndex((x) => x.href === activeHref) >=
        navigation.findIndex((x) => x.href === n.href)
  ).length;

  return (
    <div className="site-shell">
      {/* Reading progress bar */}
      <div
        className="reading-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header className="top-header">
        <div className="header-inner">
          <a href="#" className="brand">
            <span className="brand-mark">K</span>
            <span className="brand-text">
              <strong>Keploy</strong>
              <span>+</span>
              <strong>Go</strong>
            </span>
          </a>

          <div className="header-actions">
            <a
              href="https://keploy.io"
              target="_blank"
              rel="noreferrer"
              className="github-link docs-link"
            >
              <ExternalLink size={14} />
              <span>Docs</span>
            </a>

            <a
              href="https://github.com/keploy/samples-go"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <GitBranch size={14} />
              <span>GitHub</span>
            </a>

            <ThemeToggle />

            <button
              className="mobile-menu-button"
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className="docs-layout">
        <aside
          className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}
        >
          <div className="sidebar-header">
            <div className="sidebar-label">
              <BookOpen size={16} />
              <span>On this page</span>
            </div>

            <button
              className="sidebar-close"
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="sidebar-nav">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeHref === item.href ? "active" : ""}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.step !== null && (
                  <span className="nav-step-dot">{item.step}</span>
                )}
                {item.title}
              </a>
            ))}
          </nav>

          <div className="sidebar-progress-wrap">
            <div className="sidebar-progress-header">
              <CheckCircle2 size={15} />
              <span>Tutorial progress</span>
            </div>
            <div className="sidebar-progress-bar">
              <div
                className="sidebar-progress-fill"
                style={{
                  width: `${stepsTotal > 0 ? (stepsActive / stepsTotal) * 100 : 0}%`,
                }}
              />
            </div>
            <div className="sidebar-progress-label">
              {stepsActive} / {stepsTotal} steps
            </div>
          </div>

          <div className="sidebar-result">
            <div className="sidebar-result-icon">
              <CheckCircle2 size={17} />
            </div>
            <div>
              <strong>Quickstart completed</strong>
              <span>3 tests passed · 0 failed</span>
            </div>
          </div>
        </aside>

        {mobileOpen && (
          <button
            className="mobile-overlay"
            aria-label="Close navigation"
            onClick={() => setMobileOpen(false)}
          />
        )}

        <main className="docs-main">
          <div className="docs-content">{children}</div>
        </main>
      </div>
    </div>
  );
}