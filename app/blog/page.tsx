// app/blog/page.tsx
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ一覧 | My Tools",
  description: "最新の記事一覧をお届けします。",
  openGraph: {
    title: "ブログ一覧 | My Tools",
    description: "最新の記事一覧をお届けします。",
    url: "https://your-domain.com/blog",
    siteName: "My Tools",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ブログ一覧 | My Tools",
    description: "最新の記事一覧をお届けします。",
  },
  alternates: {
    canonical: "https://your-domain.com/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPostsMeta();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">ブログ</h1>

      {/* ✅ 構造化データ（JSON-LD） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "My Tools Blog",
            url: "https://your-domain.com/blog",
            description: "最新の記事一覧をお届けします。",
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: `https://your-domain.com/blog/${post.slug}`,
              datePublished: post.date,
              description: post.description,
            })),
          }),
        }}
      />

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl font-semibold hover:underline"
            >
              {post.title}
            </Link>
            <div className="text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString("ja-JP")}
            </div>
            {post.description && (
              <p className="text-gray-700 mt-1">{post.description}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
