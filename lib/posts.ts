import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  category: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

const postsDirectory = path.join(
  __dirname, 
  "..", 
  "..", 
  "..", 
  "content", 
  "posts"
);

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  const filePaths = getAllMarkdownFiles(postsDirectory);

  const posts = await Promise.all(
    filePaths.map(async (fullPath) => {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      const slug = path.basename(fullPath).replace(/\.md$/, "");

      return {
        slug,
        title: data.title || slug,
        date: data.date || "1970-01-01",
        description: data.description || "",
        category: data.category || "other",
      };
    })
  );

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}


export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePaths = getAllMarkdownFiles(postsDirectory);

  const targetPath = filePaths.find(
    (filePath) => path.basename(filePath) === `${slug}.md`
  );

  if (!targetPath) return null;

  const fileContents = fs.readFileSync(targetPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "1970-01-01",
    description: data.description || "",
    category: data.category || "other",
    contentHtml: processed.toString(),
  };
}


function getAllMarkdownFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getAllMarkdownFiles(fullPath);
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      return [fullPath];
    }

    return [];
  });
}
