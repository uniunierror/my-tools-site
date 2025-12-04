import Link from "next/link";

const siteName = "MyTools";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">

          <div>
            <p className="footer-title">{siteName}</p>
            <p className="footer-text">
              文字数カウントや日付計算など、
              日常に役立つ無料ツールを提供するサイトです。
            </p>
          </div>

          <nav className="footer-nav">
            <Link href="/about">About</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} {siteName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
