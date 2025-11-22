"use client";
import dynamic from "next/dynamic";
import { tools } from "@/lib/tools";
import { notFound } from "next/navigation";

const TOOL_COMPONENTS: Record<string, React.ComponentType<Record<string, never>>> = {
  "text-counter": dynamic(() => import("@/app/tools/text-counter/TextCounterClient")),
  "date-calc": dynamic(() => import("@/app/tools/date-calc/DateCalcClient")),
  "password-gen": dynamic(() => import("@/app/tools/password-gen/PasswordGenClient")),
  "remove-newline": dynamic(() => import("@/app/tools/remove-newline/remove-newlineClient")),
  "remove-space": dynamic(() => import("@/app/tools/remove-space/remove-spaceClient")),
};

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  
  if (!tool) {
    return notFound();
  }

  const Component = TOOL_COMPONENTS[params.slug];

  if (!Component) {
    return <div>このツールのコンポーネントは準備中です。</div>;
  }

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">{tool.title}</h2>
      <p className="text-gray-600 mb-8">{tool.desc}</p>
      {/* コンポーネントを表示 */}
      <Component />
    </section>
  );
}

