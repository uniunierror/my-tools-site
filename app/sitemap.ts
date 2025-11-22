import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/posts";
import { tools } from "@/lib/tools";

const baseUrl = "https://my-tools-site-git-main-uniunierrors-projects.vercel.app";
const NOW = new Date().toISOString();
const POSTS_PER_PAGE = 10;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: NOW },
    { url: `${baseUrl}/about`, lastModified: NOW },
    { url: `${baseUrl}/contact`, lastModified: NOW },
    { url: `${baseUrl}/privacy`, lastModified: NOW },
    { url: `${baseUrl}/terms`, lastModified: NOW },
    { url: `${baseUrl}/tools`, lastModified: NOW },
    { url: `${baseUrl}/blog`, lastModified: NOW },
    { url: `${baseUrl}/blog/category`, lastModified: NOW },
  ];

  const toolPages: MetadataRoute.Sitemap = tools.map((t) => ({
    url: `${baseUrl}/tools/${t.slug}`,
    lastModified: NOW,
  }));

  const posts = await getAllPostsMeta();

  const postPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date).toISOString(),
  }));

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const blogPaginationPages: MetadataRoute.Sitemap = Array.from(
    { length: totalPages },
    (_, i) => ({
      url: `${baseUrl}/blog/page/${i + 1}`,
      lastModified: NOW,
    })
  );

  const categories = Array.from(new Set(posts.map((p) => p.category)));

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${baseUrl}/blog/category/${c}`,
    lastModified: NOW,
  }));

  return [
    ...staticPages,
    ...toolPages,
    ...postPages,
    ...blogPaginationPages,
    ...categoryPages,
  ];
}
