"use client";
import { useState } from "react";

export default function TextCounterClient() {
  const [text, setText] = useState("");

  return (
    <div className="p-6 bg-white/10 rounded-2xl shadow">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ここにテキストを入力"
        className="w-full border rounded p-3 h-40 resize-none"
      />

      <p className="mt-3 text-gray-200">
        文字数：<strong>{text.length}</strong>
      </p>
    </div>
  );
}
