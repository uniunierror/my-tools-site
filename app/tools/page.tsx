// app/tools/page.tsx
import Link from "next/link";
import { tools } from "@/lib/tools";

export default function ToolsPage() {
  return (
    <section className="py-16 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">ツール一覧</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="block p-6 bg-white/10 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{tool.title}</h2>
            <p className="text-gray-200 text-sm">{tool.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
