"use client";

import { useEffect, useState } from "react";
import { BookOpen, CheckCircle2, Menu, X, FileText, RotateCcw } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useAuth } from "./auth-provider";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const navigation = [
  { title: "Introduction",          href: "#keploy-go-from-api-traffic-to-automated-tests", step: null },
  { title: "What you'll build",     href: "#what-youll-build",                              step: null },
  { title: "Prerequisites",         href: "#prerequisites",                                  step: null },
  { title: "Get the Go sample",     href: "#1-get-the-go-sample-app",                       step: 1    },
  { title: "Start MySQL",           href: "#2-start-mysql-with-docker",                     step: 2    },
  { title: "Set DB connection",     href: "#3-set-the-database-connection",                 step: 3    },
  { title: "Build the Go app",      href: "#4-build-the-go-app",                            step: 4    },
  { title: "Record API traffic",    href: "#5-record-api-traffic-with-keploy",              step: 5    },
  { title: "Send API requests",     href: "#6-send-real-api-requests",                      step: 6    },
  { title: "Inspect tests & mocks", href: "#7-inspect-the-generated-tests-and-mocks",       step: 7    },
  { title: "Replay the tests",      href: "#8-replay-the-tests",                            step: 8    },
  { title: "Troubleshooting",       href: "#9-troubleshooting",                             step: 9    },
  { title: "Final result",          href: "#10-final-result",                               step: 10   },
];

// Storage key is PER USER — guest has separate progress from signed-in user
const getStorageKey = (email?: string) =>
  email ? `keploy-progress-${email}` : "keploy-progress-guest";

export function DocsShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [activeHref, setActiveHref]         = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [mounted, setMounted]               = useState(false);
  const { user, logout } = useAuth();

  // Dynamic key based on who is logged in
  const storageKey = getStorageKey(user?.email);

  // Load from localStorage — reload when user changes (sign in / sign out)
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
    try {
      const key = getStorageKey(user?.email);
      const saved = localStorage.getItem(key);
      setCompletedSteps(saved ? new Set(JSON.parse(saved)) : new Set());
    } catch { /* ignore */ }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email, mounted]);

  // Save to localStorage under the correct user key
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(storageKey, JSON.stringify([...completedSteps]));
  }, [completedSteps, mounted, storageKey]);

  // Scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      const headings = navigation
        .map(item => ({ href: item.href, el: document.getElementById(item.href.replace("#", "")) }))
        .filter(x => x.el != null);

      let current = "";
      for (const { href, el } of headings) {
        if (el!.getBoundingClientRect().top <= 110) current = href;
      }
      if (current) setActiveHref(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle step done/undone by clicking the badge
  function toggleStep(step: number, e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setCompletedSteps(prev => {
      const next = new Set(prev);
      next.has(step) ? next.delete(step) : next.add(step);
      return next;
    });
  }

  function resetProgress() {
    setCompletedSteps(new Set());
  }

  // Smooth scroll + highlight — all steps freely navigable
  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string, step: number | null) {
    e.preventDefault();
    void step; // step param kept for future use
    setMobileOpen(false);
    const target = document.getElementById(href.replace("#", ""));
    if (!target) return;
    const headerHeight =
      parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim(), 10) || 60;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - headerHeight - 20, behavior: "smooth" });
    target.classList.remove("section-highlighted");
    void target.offsetWidth;
    target.classList.add("section-highlighted");
    setTimeout(() => target.classList.remove("section-highlighted"), 1800);
  }

  function handleBrandClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    const h1 = document.querySelector(".docs-content h1") as HTMLElement | null;
    if (h1) {
      h1.classList.remove("section-highlighted");
      void h1.offsetWidth;
      h1.classList.add("section-highlighted");
      setTimeout(() => h1.classList.remove("section-highlighted"), 1800);
    }
  }

  const stepsTotal = navigation.filter(n => n.step !== null).length;
  const stepsActive = mounted ? completedSteps.size : 0;
  const allDone = stepsActive === stepsTotal;

  // First uncompleted step number (the "current" one)
  const stepItems = navigation.filter(n => n.step !== null);
  const currentStep = mounted
    ? (stepItems.find(n => !completedSteps.has(n.step!))?.step ?? null)
    : 1;

  return (
    <div className="site-shell">
      <div className="reading-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      <header className="top-header">
        <div className="header-inner">
          <a href="#" className="brand" onClick={handleBrandClick}>
            <span className="brand-mark">K</span>
            <span className="brand-text">
              <strong>Keploy</strong>
              <span className="brand-sep">×</span>
              <strong>Go</strong>
            </span>
            <span className="brand-badge">Tutorial</span>
          </a>

          <div className="header-actions">
            <a href="https://keploy.io/docs" target="_blank" rel="noreferrer"
              className="hdr-icon-btn" aria-label="Keploy Docs" data-tip="Docs">
              <FileText size={17} />
            </a>
            <a href="https://github.com/keploy/samples-go" target="_blank" rel="noreferrer"
              className="hdr-icon-btn" aria-label="GitHub" data-tip="GitHub">
              <GitHubIcon size={17} />
            </a>
            <ThemeToggle />

            {/* Auth: sign-in pill or user info */}
            {user ? (
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div className="hdr-user-pill">
                  <div className="hdr-user-avatar">{user.name[0].toUpperCase()}</div>
                  <span className="hdr-user-name">{user.name}</span>
                </div>
                <button className="hdr-logout-btn" onClick={logout} type="button">
                  Sign out
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span className="hdr-demo-chip" title="demo@keploy.io / Keploy@123">
                  demo credentials
                </span>
                <a href="/login" className="hdr-signin-btn">Sign In</a>
              </div>
            )}

            <button className="mobile-menu-button" type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className="docs-layout">
        <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
          <div className="sidebar-header">
            <div className="sidebar-label">
              <BookOpen size={15} />
              <span>On this page</span>
            </div>
            <button className="sidebar-close" type="button"
              onClick={() => setMobileOpen(false)} aria-label="Close">
              <X size={18} />
            </button>
          </div>

          <nav className="sidebar-nav">
            {navigation.map((item) => {
              const done    = mounted && item.step !== null && completedSteps.has(item.step);
              const current = mounted && item.step !== null && item.step === currentStep;
              const isActive = activeHref === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={[
                    isActive ? "active" : "",
                    done     ? "step-done" : "",
                    current  ? "step-current" : "",
                  ].filter(Boolean).join(" ")}
                  onClick={e => handleNavClick(e, item.href, item.step)}
                >
                  {item.step === null ? (
                    <span className="nav-dot" />
                  ) : done ? (
                    /* ✅ Tap to un-mark */
                    <span
                      className="nav-step-dot nav-step-done"
                      title="Click to mark incomplete"
                      onClick={e => toggleStep(item.step!, e)}
                    >
                      <CheckCircle2 size={11} />
                    </span>
                  ) : current ? (
                    /* ▶ Current step — pulse ring + click to mark done */
                    <span
                      className="nav-step-dot nav-step-current"
                      title="Click to mark as complete"
                      onClick={e => toggleStep(item.step!, e)}
                    >
                      {item.step}
                    </span>
                  ) : (
                    /* ○ Future step — plain number */
                    <span className="nav-step-dot nav-step-future">
                      {item.step}
                    </span>
                  )}
                  <span className="nav-title">{item.title}</span>
                </a>
              );
            })}
          </nav>

          {/* Progress */}
          <div className="sidebar-progress-wrap">
            <div className="sidebar-progress-header">
              <CheckCircle2 size={14} />
              {/* Personalized title when signed in */}
              {mounted && user ? (
                <span className="progress-user-label">
                  <span className="progress-user-avatar">{user.name[0]}</span>
                  {user.name.split(" ")[0]}&apos;s progress
                </span>
              ) : (
                <span>Tutorial progress</span>
              )}
              {mounted && stepsActive > 0 && (
                <button className="reset-btn" onClick={resetProgress}
                  title="Reset all progress" type="button">
                  <RotateCcw size={11} />
                </button>
              )}
            </div>
            <div className="sidebar-progress-bar">
              <div className="sidebar-progress-fill"
                style={{ width: `${stepsTotal > 0 ? (stepsActive / stepsTotal) * 100 : 0}%` }} />
            </div>
            <div className="sidebar-progress-label">
              {stepsActive} / {stepsTotal} steps completed
              {/* Honest: guest progress saves locally too */}
              {mounted && !user && (
                <span className="progress-local-badge" title="Progress is saved in your browser">
                  · saved locally
                </span>
              )}
            </div>
          </div>

          <div className={`sidebar-result ${allDone && mounted ? "sidebar-result-done" : ""}`}>
            <div className="sidebar-result-icon"><CheckCircle2 size={17} /></div>
            <div>
              <strong>{allDone && mounted ? "🎉 All steps done!" : "Quickstart completed"}</strong>
              <span>3 tests passed · 0 failed</span>
            </div>
          </div>
        </aside>

        {mobileOpen && (
          <button className="mobile-overlay" aria-label="Close navigation"
            onClick={() => setMobileOpen(false)} />
        )}

        <main className="docs-main">
          <div className="docs-content">{children}</div>
        </main>
      </div>
    </div>
  );
}