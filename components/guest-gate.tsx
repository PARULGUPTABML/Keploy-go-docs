"use client";
import { useAuth } from "./auth-provider";

export function GuestGate({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  // Signed in → full content, nothing extra
  if (user) return <>{children}</>;

  // Guest → show content faded with gradient overlay + sign-in CTA
  return (
    <div className="guest-blur-wrap">

      {/* Top credentials banner */}
      <div className="guest-blur-banner">
        <span>🔑 Sign in to follow along</span>
        <span className="guest-banner-creds">
          <code>demo@keploy.io</code>
          <span>/</span>
          <code>Keploy@123</code>
        </span>
        <a href="/login" className="guest-banner-btn">Sign In →</a>
      </div>

      {/* Content with fade overlay */}
      <div className="guest-blur-content">
        {children}

        {/* Gradient fade + CTA overlay */}
        <div className="guest-blur-overlay">
          <div className="guest-blur-cta">
            <div className="guest-blur-cta-icon">🔓</div>
            <p className="guest-blur-cta-text">Sign in to read all 10 steps</p>
            <a href="/login" className="guest-blur-cta-btn">Sign In to Read →</a>
            <p className="guest-blur-cta-hint">
              Use <code>demo@keploy.io</code> / <code>Keploy@123</code>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
