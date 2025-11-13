import { getPostBySlug, getAllPostsMeta } from "@/lib/posts";
import { notFound } from "next/navigation";
import PostBody from "../components/PostBody";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

// ✅ SEO用メタデータ生成（Next.js 15対応）
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // ← ✅ Promiseをアンラップ
  const post = await getPostBySlug(slug);

  if (!post) return { title: "記事が見つかりません" };

  return {
    title: `${post.title} | My Tools Blog`,
    description: post.description || post.contentHtml.slice(0, 120),
  };
}

// ✅ 静的パス生成
export async function generateStaticParams() {
  const posts = await getAllPostsMeta();
  return posts.map((p) => ({ slug: p.slug }));
}

// ✅ 記事ページ本体
export default async function PostPage({ params }: Props) {
  const { slug } = await params; // ← ✅ Promiseをアンラップ
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-6">
        {new Date(post.date).toLocaleDateString("ja-JP")}
      </div>

      <PostBody html={post.contentHtml} />
    </main>
  );
}
