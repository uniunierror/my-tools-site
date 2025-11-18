import type { Metadata } from "next";
import RemoveSpaceClient from "./remove-spaceClient";

export const metadata: Metadata = {
  title: "スペース削除ツール｜MyTools",
  description:
    "文章中のスペース（空白）を一括削除する無料ツール。テキスト整形・データ加工・コピペ前の整理に便利です。",
  keywords: [
    "スペース削除",
    "空白削除",
    "テキスト整形",
    "スペース除去",
    "オンラインツール",
    "無料",
  ],
  openGraph: {
    title: "スペース削除ツール｜MyTools",
    description:
      "文章中のスペースをワンクリックで削除できる便利な無料ツール。",
    url: "https://example.com/tools/remove-space",
    siteName: "MyTools",
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://example.com/tools/remove-space" },
};

export default function RemoveSpacePage() {
  return <RemoveSpaceClient />;
}
