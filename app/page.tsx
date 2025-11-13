// app/page.tsx
import Link from "next/link";

const tools = [
  { title: "文字数カウント", slug: "text-counter", desc: "入力した文章の文字数を即時にカウント" },
  { title: "日付計算ツール", slug: "date-calc", desc: "2つの日付の差を計算します" },
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
