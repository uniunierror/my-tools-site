"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // ✅ メニュー外クリックで閉じる
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative text-sm">
      {/* トリガー */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="px-3 py-1 border rounded hover:bg-white/10 flex items-center gap-1"
      >
        {icon(theme)}
        <span className="hidden sm:inline">{label(theme)}</span>
      </button>

      {/* メニュー */}
      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-lg border bg-gray-900 shadow-lg overflow-hidden z-50">
          <Item
            active={theme === "light"}
            onClick={() => select("light")}
          >
            🌞 Light
          </Item>
          <Item
            active={theme === "dark"}
            onClick={() => select("dark")}
          >
            🌙 Dark
          </Item>
          <Item
            active={theme === "system"}
            onClick={() => select("system")}
          >
            💻 System
          </Item>
        </div>
      )}
    </div>
  );

  function select(t: "light" | "dark" | "system") {
    setTheme(t);
    setOpen(false);
  }
}

function Item({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full px-4 py-2 text-left
        ${active ? "bg-white/15" : "hover:bg-white/10"}
      `}
    >
      {children}
    </button>
  );
}

function label(theme: string) {
  return theme === "light"
    ? "Light"
    : theme === "dark"
    ? "Dark"
    : "System";
}

function icon(theme: string) {
  return theme === "light" ? "🌞" : theme === "dark" ? "🌙" : "💻";
}
