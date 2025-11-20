import { getAllPostsMeta } from "@/lib/posts";
import { getCategoryLabel } from "@/lib/category";
import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ category: string }>; // ← Next.js App RouterではPromise
};

const BASE_URL =
  "https://my-tools-site-git-main-uniunierrors-projects.vercel.app";

// -------------------------------
// SEO Metadata
// -------------------------------
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params; // ← 必ず await
  const label = getCategoryLabel(category);

  return {
    title: `「${label}」の記事一覧 | MyTools Blog`,
    description: `カテゴリ「${label}」に関する記事一覧です。`,
    alternates: {
      canonical: `${BASE_URL}/blog/category/${category}`,
    },
    openGraph: {
      title: `「${label}」の記事一覧`,
      description: `カテゴリ「${label}」の記事一覧ページです。`,
      url: `${BASE_URL}/blog/category/${category}`,
      type: "website",
    },
  };
}

// -------------------------------
// ページ本体
// -------------------------------
export default async function CategoryPage({ params }: Props) {
  const { category } = await params; // ← 必ず await
  const label = getCategoryLabel(category);

  const posts = await getAllPostsMeta();
  const filtered = posts.filter((p) => p.category === category);

  return (
    <section className="space-y-8">
      {/* パンくず */}
      <nav className="text-sm text-gray-400">
        <ol className="flex gap-1">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            &gt;
          </li>
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>{" "}
            &gt;
          </li>
          <li className="text-gray-200">カテゴリ: {label}</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-6">「{label}」の記事一覧</h1>

      {filtered.length === 0 && (
        <p>このカテゴリの記事はまだありません。</p>
      )}

      <ul className="space-y-4">
        {filtered.map((post) => (
          <li
            key={post.slug}
            className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-400 text-sm">{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
