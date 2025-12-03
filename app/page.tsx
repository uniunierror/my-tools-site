import Link from "next/link";
import { tools } from "@/lib/tools";

export const metadata = {
  title: "便利ツール集 | MyTools",
  description:
    "文字数カウント・日付計算・改行削除など、日常に役立つ無料ツールをまとめたサイト。",
  alternates: {
    canonical: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app",
  },
};

export default function HomePage() {
  return (
    <section className="py-16">
      <h2 className="section-title">便利ツール集</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="block p-6 bg-white/10 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
            <p className="text-gray-200 text-sm">{tool.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
