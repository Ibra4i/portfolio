"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") {
        document.body.classList.add("dark-mode");
        document.body.classList.add("theme-chosen");
        document.body.classList.remove("light-mode");
        setDark(true);
      } else if (saved === "light") {
        document.body.classList.add("light-mode");
        document.body.classList.add("theme-chosen");
        document.body.classList.remove("dark-mode");
        setDark(false);
      } else {
        // default to prefers-color-scheme or light
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark) {
          document.body.classList.add("dark-mode");
          document.body.classList.remove("light-mode");
          setDark(true);
        }
      }
    } catch (e) {
      // ignore
    }
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    if (next) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      document.body.classList.add("theme-chosen");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      document.body.classList.add("theme-chosen");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <button
      aria-label="Toggle theme"
      title="Toggle dark / light"
      onClick={toggle}
      className="ml-4 inline-flex items-center justify-center rounded-md border border-transparent bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800 hover:bg-gray-300 dark:opacity-90"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
