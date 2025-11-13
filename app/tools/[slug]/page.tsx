import { tools } from "@/lib/tools";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  return {
    title: tool ? `${tool.title} | MyTools` : "ツールが見つかりません",
    description: tool?.desc,
  };
}

export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) return notFound();

  return (
    <section className="py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">{tool.title}</h2>
      <p className="text-gray-600 mb-8">{tool.desc}</p>
      {tool.component}
    </section>
  );
}
