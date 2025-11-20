import type { Metadata } from "next";
import TextCounterClient from "./TextCounterClient";

export const metadata: Metadata = {
  title: "文字数カウントツール | MyTools",
  description:
    "文章の文字数を即時にカウントできる無料ツール。SNS投稿や記事作成に便利です。",
  keywords: ["文字数カウント", "ワード数", "文字カウンター"],
  openGraph: {
    title: "文字数カウントツール | MyTools",
    description: "入力した文字数をリアルタイムでカウントします。",
    url: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/tools/text-counter",
    images: ["/og/default-og.png"],
  },
  alternates: {
    canonical:
      "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/tools/text-counter",
  },
};


export default function TextCounterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "文字数カウントツール",
            url: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/tools/text-counter",
            description:
              "文章の文字数を即時にカウントできる無料ツール。",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "All",
          }),
        }}
      />

      <TextCounterClient />
    </>
  );
}
