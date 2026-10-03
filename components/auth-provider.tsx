"use client";
import { createContext, useContext, useEffect, useState } from "react";

const DEMO_EMAIL = "demo@keploy.io";
const DEMO_PASS  = "Keploy@123";
const KEY = "keploy-auth";

type User   = { name: string; email: string };
type AuthCtx = { user: User | null; login: (e: string, p: string) => boolean; logout: () => void };

const Ctx = createContext<AuthCtx>({ user: null, login: () => false, logout: () => {} });
export const useAuth = () => useContext(Ctx);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser]       = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = sessionStorage.getItem(KEY);
      if (saved) setUser(JSON.parse(saved));
    } catch { /* ignore */ }
  }, []);

  function login(email: string, pass: string): boolean {
    if (email.trim() === DEMO_EMAIL && pass === DEMO_PASS) {
      const u: User = { name: "Demo User", email: email.trim() };
      setUser(u);
      sessionStorage.setItem(KEY, JSON.stringify(u));
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
    sessionStorage.removeItem(KEY);
  }

  return (
    <Ctx.Provider value={{ user: mounted ? user : null, login, logout }}>
      {children}
    </Ctx.Provider>
  );
}
