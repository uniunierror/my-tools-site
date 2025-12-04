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
    <section className="home-section">
      <h2 className="section-title">便利ツール集</h2>
      <div className="tool-grid">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="tool-card"
          >
            <h3 className="tool-title">{tool.title}</h3>
            <p className="tool-desc">{tool.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
