import { getPostBySlug, getAllPostsMeta } from "@/lib/posts";
import { notFound } from "next/navigation";
import PostBody from "../components/PostBody";
import type { Metadata } from "next";
import { getCategoryLabel } from "@/lib/category";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "記事が見つかりません" };

  const cleanDescription = stripHtml(post.contentHtml).slice(0, 120);
  const categoryLabel = getCategoryLabel(post.category);

  return {
    title: `${post.title} | ${categoryLabel} | My Tools Blog`,
    description: post.description || `${cleanDescription}...`,
    alternates: {
      canonical: `https://my-tools-site-git-main-uniunierrors-projects.vercel.app/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPostsMeta();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  const label = getCategoryLabel(post.category);

  return (
    <main className="w-full max-w-3xl mx-auto p-6">

      {/* 🧭 パンくずリスト */}
      <nav className="text-sm mb-4">
        <ul className="flex items-center gap-2  opacity-70">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/blog/category/${post.category}`}>
              {label}
            </Link>
          </li>
          <li>/</li>
          <li>{post.title}</li>
        </ul>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

      <div className="text-sm mb-6">
        {new Date(post.date).toLocaleDateString("ja-JP")}
      </div>

      {/* 🏷 カテゴリ表示（日本語ラベル化） */}
      <p className="text-sm mb-4">
        カテゴリ：
        <Link
          href={`/blog/category/${post.category}`}
          className=""
        >
          {label}
        </Link>
      </p>

      <PostBody html={post.contentHtml} />
    </main>
  );
}
