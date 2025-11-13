// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "MyTools（仮） | 便利ツール集",
  description: "文字数カウントや日付計算など、日常に役立つ無料ツールをまとめたサイト。",
};

function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold hover:text-blue-400">
          MyTools
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/privacy" className="hover:text-blue-400 transition">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-blue-400 transition">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
          <Link href="/tools" className="hover:text-blue-400 transition">
            Tools
          </Link>
          <Link href="/blog" className="hover:text-blue-400 transition">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-950 text-gray-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto px-6 py-8">{children}</main>
        <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-800">
          © {new Date().getFullYear()} MyTools（仮）
        </footer>
      </body>
    </html>
  );
}
