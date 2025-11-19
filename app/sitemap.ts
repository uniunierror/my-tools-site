import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/posts";
import { tools } from "@/lib/tools";

const baseUrl = "https://your-domain.com"; // ← ここを実ドメインに変更

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/privacy`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/terms`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/tools`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() },
  ];

  const toolPages: MetadataRoute.Sitemap = tools.map((t) => ({
    url: `${baseUrl}/tools/${t.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const posts = await getAllPostsMeta();
  const postPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date).toISOString(),
  }));

  return [...staticPages, ...toolPages, ...postPages];
}
