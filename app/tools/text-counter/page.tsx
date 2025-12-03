import "./text-counter.css";
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
    <main className="tool-container">
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

      <h1 className="tool-title">文字数カウントツール</h1>

      <p className="tool-description">
        入力した文章の文字数をリアルタイムでカウントできる無料ツールです。
        ブログ執筆、SNS投稿、レポート作成などにご利用ください。
      </p>

      <TextCounterClient />

      <section className="tool-section">
        <h2>この文字数カウントツールでできること</h2>
        <ul>
          <li>文章の文字数を即時にカウント</li>
          <li>改行・空白も含めた正確な文字数計測</li>
          <li>ブログ・SNS・レポート対応</li>
        </ul>

        <h2>こんな用途におすすめ</h2>
        <p>
          Twitter（X）の文字数制限チェック、ブログ投稿前の文字数確認、
          学校レポートや志望動機書の作成などに活用できます。
        </p>
      </section>
    </main>
  );
}
