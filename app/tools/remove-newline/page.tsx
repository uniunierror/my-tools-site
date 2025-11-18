import type { Metadata } from "next";
import RemoveNewlineClient from "./remove-newlineClient";

export const metadata: Metadata = {
  title: "改行削除ツール｜MyTools",
  description:
    "文章中の改行をまとめて削除する無料ツール。テキスト整形・コピペ時の整備・データ加工に最適です。",
  keywords: [
    "改行削除",
    "改行を消す",
    "テキスト整形",
    "オンラインツール",
    "無料ツール",
    "改行除去",
  ],
  openGraph: {
    title: "改行削除ツール｜MyTools",
    description:
      "文章中の改行をワンクリックで削除できる便利な無料ツール。",
    url: "https://example.com/tools/remove-newline",
    siteName: "MyTools",
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://example.com/tools/remove-newline" },
};

export default function RemoveNewlinePage() {
  return <RemoveNewlineClient />;
}
