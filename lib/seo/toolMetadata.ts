import type { Metadata } from "next";

type ToolMetaParams = {
  title: string;
  description: string;
  slug: string;
};

const BASE_URL =
  "https://my-tools-site-git-main-uniunierrors-projects.vercel.app";

export function createToolMetadata({
  title,
  description,
  slug,
}: ToolMetaParams): Metadata {
  const url = `${BASE_URL}/tools/${slug}`;

  return {
    title: `${title}｜無料ツール`,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
  };
}
