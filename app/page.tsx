import Link from "next/link";

export const metadata = {
  title: "便利ツール集 | MyTools",
  description:
    "文字数カウント・日付計算・改行削除など、日常に役立つ無料ツールをまとめたサイト。",
  alternates: {
    canonical: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app",
  },
};


const tools = [
  { title: "文字数カウント", slug: "text-counter", desc: "入力した文章の文字数を即時にカウント" },
  { title: "日付計算", slug: "date-calc", desc: "2つの日付の差を計算します" },
  { title: "改行削除", slug: "remove-newline", desc: "文章中の改行をまとめて削除" },
  { title: "スペース削除", slug: "remove-space", desc: "文章中の空白を一括削除" },
  { title: "パスワード生成", slug: "password-gen", desc: "安全なパスワードをワンクリック生成" },
];


export default function HomePage() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">便利ツール集</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="block p-6 bg-white/10 rounded-2xl shadow hover:bg-white/20 transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{tool.title}</h3>
            <p className="text-gray-300 text-sm">{tool.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
