"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";

const PASSWORD_RULES = [
  { label: "At least 8 characters",          test: (p: string) => p.length >= 8         },
  { label: "One uppercase letter (A–Z)",      test: (p: string) => /[A-Z]/.test(p)       },
  { label: "One lowercase letter (a–z)",      test: (p: string) => /[a-z]/.test(p)       },
  { label: "One number (0–9)",                test: (p: string) => /[0-9]/.test(p)       },
  { label: "One special character (@, #, !)", test: (p: string) => /[@#!$%^&*]/.test(p)  },
];

export default function LoginPage() {
  const { login }  = useAuth();
  const router     = useRouter();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [showPwdRules, setShowPwdRules] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise(r => setTimeout(r, 700));
    const ok = login(email, password);
    setLoading(false);
    if (ok) {
      router.push("/");
    } else {
      setError("Invalid credentials. Please use the demo credentials below.");
    }
  }

  function fillDemo() {
    setEmail("demo@keploy.io");
    setPassword("Keploy@123");
    setError("");
    setShowPwdRules(false);
  }

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Logo */}
        <div className="login-logo">
          <span className="login-logo-mark">K</span>
          <span className="login-logo-text">Keploy × Go</span>
        </div>

        <h1 className="login-title">Welcome back</h1>
        <p className="login-subtitle">Sign in to save your tutorial progress across sessions</p>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="login-error">⚠ {error}</div>}

          <div className="login-field">
            <label className="login-label" htmlFor="email">Email address</label>
            <input
              id="email" type="email" required autoComplete="email"
              className="login-input"
              placeholder="demo@keploy.io"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="login-field">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label className="login-label" htmlFor="password">Password</label>
              <button
                type="button"
                className="pwd-rules-toggle"
                onClick={() => setShowPwdRules(v => !v)}
              >
                Requirements ▾
              </button>
            </div>

            <input
              id="password" type="password" required autoComplete="current-password"
              className="login-input"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            {/* Password strength rules */}
            {showPwdRules && (
              <div className="pwd-rules-box">
                <p className="pwd-rules-title">Password must include:</p>
                <ul className="pwd-rules-list">
                  {PASSWORD_RULES.map((rule) => {
                    const ok = password.length > 0 && rule.test(password);
                    return (
                      <li key={rule.label} className={`pwd-rule ${ok ? "pwd-rule-ok" : "pwd-rule-fail"}`}>
                        <span className="pwd-rule-icon">{ok ? "✓" : "○"}</span>
                        {rule.label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Signing in…" : "Sign In →"}
          </button>
        </form>

        {/* Demo credentials */}
        <div className="login-hint">
          <div className="login-hint-title">🔑 Demo credentials</div>
          <div className="login-hint-row">
            <span>Email</span>
            <code>demo@keploy.io</code>
          </div>
          <div className="login-hint-row">
            <span>Password</span>
            <code>Keploy@123</code>
          </div>
          <div className="login-pwd-note">
            <span className="pwd-note-chip">A</span> Uppercase &nbsp;
            <span className="pwd-note-chip">a</span> Lowercase &nbsp;
            <span className="pwd-note-chip">1</span> Number &nbsp;
            <span className="pwd-note-chip">@</span> Special char
          </div>
          <button className="login-autofill-btn" type="button" onClick={fillDemo}>
            ⚡ Autofill credentials
          </button>
        </div>

        <a href="/" className="login-skip">Continue without signing in →</a>
      </div>
    </div>
  );
}
