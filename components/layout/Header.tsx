"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../ThemeToggle";

const siteName = "MyTools";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="site-logo">
          {siteName}
        </Link>

        {/* PCメニュー */}
        <nav className="site-nav">
          <NavLinks />
          <ThemeToggle />
        </nav>

        {/* ハンバーガー */}
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* モバイルメニュー */}
      {open && (
        <div className="mobile-menu">
          <nav>
            <NavLinks onClick={() => setOpen(false)} />
            <ThemeToggle />
          </nav>
        </div>
      )}
      
    </header>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Link href="/about" onClick={onClick}>About</Link>
      <Link href="/privacy" onClick={onClick}>Privacy</Link>
      <Link href="/terms" onClick={onClick}>Terms</Link>
      <Link href="/contact" onClick={onClick}>Contact</Link>
      <Link href="/tools" onClick={onClick}>Tools</Link>
      <Link href="/blog" onClick={onClick}>Blog</Link>
    </>
  );
}
