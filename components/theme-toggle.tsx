"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const current =
      document.documentElement.classList.contains("dark");

    setDark(current);
  }, []);

  function toggleTheme() {
    const nextDark = !dark;

    document.documentElement.classList.toggle(
      "dark",
      nextDark
    );

    localStorage.setItem(
      "theme",
      nextDark ? "dark" : "light"
    );

    setDark(nextDark);
  }

  if (!mounted) {
    return (
      <button
        className="icon-button"
        type="button"
        aria-label="Toggle theme"
      >
        <Moon size={18} />
      </button>
    );
  }

  return (
    <button
      className="icon-button"
      type="button"
      onClick={toggleTheme}
      aria-label={
        dark ? "Switch to light mode" : "Switch to dark mode"
      }
      title={dark ? "Light mode" : "Dark mode"}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}