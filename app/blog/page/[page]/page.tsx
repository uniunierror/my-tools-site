import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";
import type { Metadata } from "next";

const POSTS_PER_PAGE = 10;
const BASE_URL =
  "https://my-tools-site-git-main-uniunierrors-projects.vercel.app";

type Props = {
  params: Promise<{ page: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;

  return {
    title: `ブログ一覧（${page}ページ目） | My Tools`,
    description: `${page}ページ目のブログ記事一覧です。`,
    alternates: {
      canonical: `${BASE_URL}/blog/page/${page}`,
    },
    openGraph: {
      title: `ブログ一覧（${page}ページ目） | My Tools`,
      description: `${page}ページ目のブログ記事一覧です。`,
      url: `${BASE_URL}/blog/page/${page}`,
      type: "website",
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { page } = await params;
  const pageNum = parseInt(page);

  const allPosts = await getAllPostsMeta();

  const startIndex = (pageNum - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;

  const posts = allPosts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  return (
    <main className="py-16 max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        ブログ（{pageNum}ページ目）
      </h1>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl font-semibold hover:underline"
            >
              {post.title}
            </Link>
            <div className="text-sm opacity-70">
              {new Date(post.date).toLocaleDateString("ja-JP")}
            </div>
            {post.description && (
              <p className="mt-1 opacity-70">{post.description}</p>
            )}
          </li>
        ))}
      </ul>

      <Pagination currentPage={pageNum} totalPages={totalPages} />
    </main>
  );
}

// --------------------------------------------
// 共通ページネーションコンポーネント
// --------------------------------------------
function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex gap-2 justify-center mt-10">
      {pages.map((num) => (
        <Link
          key={num}
          href={num === 1 ? `/blog` : `/blog/page/${num}`}
          className={`px-4 py-2 rounded-md border ${
            num === currentPage ? "bg-(--foreground) text-(--background)" : "hover:bg-white/20"
          }`}
        >
          {num}
        </Link>
      ))}
    </div>
  );
}
