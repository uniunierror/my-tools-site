import type { Metadata } from "next";
import PasswordGenClient from "./PasswordGenClient";

export const metadata: Metadata = {
  title: "パスワード生成ツール | MyTools",
  description: "安全で強力なパスワードをワンクリックで生成できる無料ツール。英数字・記号を自由に組み合わせ可能です。",
  keywords: ["パスワード生成", "セキュリティ", "強力なパスワード", "無料ツール", "安全"],
  openGraph: {
    title: "パスワード生成ツール | MyTools",
    description: "安全なパスワードを簡単に生成できる無料ツール。",
    url: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/tools/password-gen",
    siteName: "MyTools",
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/tools/password-gen" },
};

export default function PasswordGenPage() {
  return <PasswordGenClient />;
}
