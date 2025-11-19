import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

const siteName = "MyTools";
const siteUrl = "https://example.com"; // ★本番公開前に必ず変更！
const siteDescription =
  "文字数カウントや日付計算など、日常に役立つ無料ツールをまとめたサイト。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteName} | 便利ツール集`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,

  openGraph: {
    title: `${siteName} | 便利ツール集`,
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: "/og/default-og.png", // public/og/default-og.png を配置してください
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteName} | 便利ツール集`,
    description: siteDescription,
    images: ["/og/default-og.png"],
  },

  alternates: {
    canonical: "./", // ✅ 修正: 相対パスにすることで各ページのURLに対応
  },
};

function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold hover:text-blue-400">
          {siteName}
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>
          <Link href="/privacy" className="hover:text-blue-400 transition">Privacy</Link>
          <Link href="/terms" className="hover:text-blue-400 transition">Terms</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
          <Link href="/tools" className="hover:text-blue-400 transition">Tools</Link>
          <Link href="/blog" className="hover:text-blue-400 transition">Blog</Link>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-950 text-gray-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto px-6 py-8">{children}</main>
        <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-800">
          © {new Date().getFullYear()} {siteName}
        </footer>
      </body>
    </html>
  );
}