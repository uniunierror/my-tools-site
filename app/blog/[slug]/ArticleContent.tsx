// // app/blog/[slug]/ArticleContent.tsx
// "use client";
// import { useEffect, useRef } from "react";

// export default function ArticleContent({
//   title,
//   date,
//   html,
// }: {
//   title: string;
//   date: string;
//   html: string;
// }) {
//   const ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.innerHTML = html;
//     }
//   }, [html]);

//   return (
//     <article className="prose prose-invert max-w-3xl mx-auto py-16">
//       <h1 className="text-3xl font-bold mb-4">{title}</h1>
//       <div className="text-gray-400 text-sm mb-8">{new Date(date).toLocaleDateString()}</div>
//       <div ref={ref} />
//     </article>
//   );
// }
