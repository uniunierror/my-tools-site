export type Tool = {
  title: string;
  slug: string;
  desc: string;
  componentKey: "text-counter" | "date-calc" | "password-gen";
};

export const tools: Tool[] = [
  {
    title: "文字数カウント",
    slug: "text-counter",
    desc: "入力した文章の文字数を即時にカウントします。",
    componentKey: "text-counter",
  },
  {
    title: "日付計算",
    slug: "date-calc",
    desc: "2つの日付の差を計算します。",
    componentKey: "date-calc",
  },
  {
    title: "パスワード生成",
    slug: "password-gen",
    desc: "安全なランダムパスワードを生成します。",
    componentKey: "password-gen",
  },
];
