
export type Tool = {
  title: string;
  slug: string;
  desc: string;
};

export const tools: Tool[] = [
  {
    title: "文字数カウントあああ",
    slug: "text-counter",
    desc: "入力した文章の文字数を即時にカウントします。",
  },
  {
    title: "日付計算",
    slug: "date-calc",
    desc: "2つの日付の差を計算します。",
  },
  {
    title: "パスワード生成",
    slug: "password-gen",
    desc: "安全なランダムパスワードを生成します。",
  },
  {
    title: "改行削除ツール",
    slug: "remove-newline",
    desc: "文章内の改行を一括削除して1行にまとめます。",
  },
  {
    title: "スペース削除ツール",
    slug: "remove-space",
    desc: "文章内の空白・スペースをまとめて削除します。",
  },
];
