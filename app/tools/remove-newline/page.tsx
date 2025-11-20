import type { Metadata } from "next";
import RemoveNewlineClient from "./remove-newlineClient";

export const metadata: Metadata = {
  title: "改行削除ツール｜MyTools",
  description:
    "文章中の改行をまとめて削除する無料ツール。テキスト整形・コピペ時の整備・データ加工に最適です。",
  keywords: ["改行削除", "改行を消す", "テキスト整形", "無料ツール"],
  openGraph: {
    title: "改行削除ツール｜MyTools",
    description: "文章中の改行をワンクリックで削除できる便利な無料ツール。",
    url: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/tools/remove-newline",
    images: ["/og/default-og.png"],
  },
  alternates: {
    canonical:
      "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/tools/remove-newline",
  },
};


export default function RemoveNewlinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "改行削除ツール",
            url: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/tools/remove-newline",
            description:
              "文章中の改行をまとめて削除する無料ツール。",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "All",
          }),
        }}
      />

      <RemoveNewlineClient />
    </>
  );
}
