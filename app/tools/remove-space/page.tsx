import type { Metadata } from "next";
import RemoveSpaceClient from "./remove-spaceClient";

export const metadata: Metadata = {
  title: "スペース削除ツール｜MyTools",
  description:
    "文章中のスペース（空白）を一括削除する無料ツール。テキスト整形・データ加工・コピペ前の整理に便利です。",
  keywords: ["スペース削除", "空白削除", "テキスト整形"],
  openGraph: {
    title: "スペース削除ツール｜MyTools",
    description: "文章中のスペースをワンクリックで削除できる便利な無料ツール。",
    url: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/tools/remove-space",
    images: ["/og/default-og.png"],
  },
  alternates: {
    canonical:
      "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/tools/remove-space",
  },
};


export default function RemoveSpacePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "スペース削除ツール",
            url: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/tools/remove-space",
            description:
              "文章中のスペース（空白）を一括削除する無料ツール。",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "All",
          }),
        }}
      />

      <RemoveSpaceClient />
    </>
  );
}
