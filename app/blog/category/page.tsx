import { getAllPostsMeta } from "@/lib/posts";
import { getCategoryLabel } from "@/lib/category"; // ← 追加
import Link from "next/link";

export default async function CategoryListPage() {
  const posts = await getAllPostsMeta();

  // カテゴリ一覧（重複排除）
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">カテゴリ一覧</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <li key={cat}>
            <Link
              href={`/blog/category/${cat}`}
              className="block p-4 bg-white/10 rounded-xl hover:bg-white/20 transition"
            >
              {/* 🟩 英語 → 日本語ラベルへ変換 */}
              <span className="text-xl font-semibold">
                {getCategoryLabel(cat)}
              </span>

              {/* 🟦（任意）英語カテゴリも薄字で表示すると便利 */}
              {/* <span className="block text-gray-400 text-sm mt-1">{cat}</span> */}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
