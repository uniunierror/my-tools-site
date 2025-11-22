"use client";

import dynamic from "next/dynamic";
import { getTool } from "@/lib/tools";
import { notFound } from "next/navigation";

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getTool(params.slug);

  if (!tool) return notFound();

  // ツールコンポーネントを動的 import
  const Component = dynamic(
    () => import(`@/app/tools/${tool.slug}/${toPascal(tool.slug)}Client`)
  );

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{tool.title}</h1>
      <p className="text-gray-600 mb-8">{tool.description}</p>

      <Component />
    </section>
  );
}

function toPascal(slug: string): string {
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}
