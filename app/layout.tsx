import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "../providers/ThemeProvider";
import { ThemeScript } from "./theme-script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const siteName = "MyTools";
const siteUrl = "https://my-tools-site-git-main-uniunierrors-projects.vercel.app";
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
        url: "/og/default-og.png",
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
    canonical: siteUrl,
  },

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteName,
              url: siteUrl,
              description: siteDescription,
              publisher: {
                "@type": "Organization",
                name: siteName,
                url: siteUrl,
              },
            }),
          }}
        />
        <ThemeScript />
      </head>

      <body className="bg-gray-950 text-gray-100 min-h-screen flex flex-col">
        <ThemeProvider>
        <Header />
        <main className="flex-1 max-w-5xl mx-auto px-6 py-8">{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
