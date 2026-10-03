"use client";
import { useAuth } from "./auth-provider";
import { Lock } from "lucide-react";

export function AuthGate() {
  const { user } = useAuth();
  if (user) return null; // logged in — show nothing, content flows normally

  return (
    <div className="auth-gate">
      <div className="auth-gate-icon">
        <Lock size={26} />
      </div>
      <h3 className="auth-gate-title">Sign in to access Steps 1 – 10</h3>
      <p className="auth-gate-desc">
        The Introduction, "What you'll build", and Prerequisites above are free to read.
        Create a free account or sign in with the demo credentials to unlock all 10 tutorial steps.
      </p>
      <div className="auth-gate-actions">
        <a href="/login" className="auth-gate-btn-primary">Sign In →</a>
        <a href="/login" className="auth-gate-btn-secondary">View demo credentials</a>
      </div>
      <div className="auth-gate-credentials">
        <span>Quick demo:</span>
        <code>demo@keploy.io</code>
        <span>/</span>
        <code>Keploy@123</code>
      </div>
    </div>
  );
}
