import TextCounterClient from "./TextCounterClient";
import { createToolMetadata } from "@/lib/seo/toolMetadata";
import ToolStructuredData from "@/components/seo/ToolStructuredData";

export const metadata = createToolMetadata({
  title: "文字数カウントツール",
  description:
    "文章・ブログ・SNS投稿の文字数を即時にカウントできる無料ツール。",
  slug: "text-counter",
});

export default function TextCounterPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      {/* ✅ 構造化データ（共通化） */}
      <ToolStructuredData
        name="文字数カウントツール"
        url="https://my-tools-site-git-main-uniunierrors-projects.vercel.app/tools/text-counter"
        faqs={[
          {
            q: "改行や空白も文字数に含まれますか？",
            a: "はい、改行や空白も含めてカウントされます。",
          },
          {
            q: "スマートフォンでも使えますか？",
            a: "はい、PC・スマートフォンどちらでも利用可能です。",
          },
        ]}
      />

      {/* ✅ H1（SEOの軸） */}
      <h1 className="text-3xl font-bold mb-4">
        文字数カウントツール
      </h1>

      {/* ✅ 導入文（評価される本文） */}
      <p className="text-gray-300 mb-8">
        入力した文章の文字数をリアルタイムでカウントできる無料ツールです。
        ブログ執筆、SNS投稿、レポート作成などにご利用ください。
      </p>

      {/* ✅ ツール本体 */}
      <TextCounterClient />

      {/* ✅ 補足コンテンツ（SEO底上げ） */}
      <section className="mt-12 space-y-6">
        <h2 className="text-xl font-semibold">
          この文字数カウントツールでできること
        </h2>
        <ul className="list-disc pl-6 text-gray-300">
          <li>文章の文字数を即時にカウント</li>
          <li>改行・空白も含めた正確な文字数計測</li>
          <li>ブログ・SNS・レポート対応</li>
        </ul>

        <h2 className="text-xl font-semibold">
          こんな用途におすすめ
        </h2>
        <p className="text-gray-300">
          Twitter（X）の文字数制限チェック、ブログ投稿前の文字数確認、
          学校レポートや志望動機書の作成などに活用できます。
        </p>
      </section>
    </main>
  );
}
