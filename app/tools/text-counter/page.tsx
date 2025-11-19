import type { Metadata } from "next";
import TextCounterClient from "./TextCounterClient";

export const metadata: Metadata = {
  title: "文字数カウントツール | MyTools",
  description: "文章の文字数を即時にカウントできる無料ツール。日本語・英語どちらにも対応。SNSやブログ投稿前のチェックに最適。",
  keywords: ["文字数カウント", "ワード数", "文字カウンター", "文章チェック"],
  openGraph: {
    title: "文字数カウントツール | MyTools",
    description: "入力したテキストの文字数をリアルタイムでカウントできます。",
    url: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/tools/text-counter",
    siteName: "MyTools",
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/tools/text-counter" },
};

export default function TextCounterPage() {
  return <TextCounterClient />;
}
