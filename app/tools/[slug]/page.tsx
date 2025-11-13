"use client";
import dynamic from "next/dynamic";
import { tools, Tool } from "@/lib/tools";

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) return <div>ツールが見つかりません</div>;

  const Component = dynamic(() =>
    import(`@/app/tools/${tool.slug}/${tool.slug}Client`)
  );

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">{tool.title}</h2>
      <p className="text-gray-600 mb-8">{tool.desc}</p>
      <Component />
    </section>
  );
}
