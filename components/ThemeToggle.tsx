"use client";

import { useTheme } from "@/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setTheme("light")}
        className={btn(theme === "light")}
      >
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={btn(theme === "dark")}
      >
        Dark
      </button>
      <button
        onClick={() => setTheme("system")}
        className={btn(theme === "system")}
      >
        System
      </button>
    </div>
  );
}

function btn(active: boolean) {
  return `
    px-3 py-1 rounded border
    ${active ? "bg-white text-black" : "hover:bg-white/20"}
  `;
}
