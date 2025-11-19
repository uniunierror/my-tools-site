import type { Metadata } from "next";
import DateCalcClient from "./DateCalcClient";

export const metadata: Metadata = {
  title: "日付計算ツール | MyTools",
  description: "2つの日付の差（日数）を即時に計算できる無料ツール。旅行やスケジュール管理に便利です。",
  keywords: ["日付計算", "日数カウント", "期間計算", "スケジュール管理", "無料ツール"],
  openGraph: {
    title: "日付計算ツール | MyTools",
    description: "開始日と終了日を入力するだけで日数差を自動計算します。",
    url: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/tools/date-calc",
    siteName: "MyTools",
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/tools/date-calc" },
};

export default function DateCalcPage() {
  return <DateCalcClient />;
}
