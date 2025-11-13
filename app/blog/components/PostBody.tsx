"use client";

import { useEffect, useRef } from "react";

type Props = {
  html: string;
};

// ✅ 記事本文描画（React 19対応）
export default function PostBody({ html }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = html;
    }
  }, [html]);

  return (
    <article
      ref={ref}
      className="prose prose-neutral max-w-none"
      suppressHydrationWarning
    />
  );
}
