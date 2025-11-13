"use client";
import { useState } from "react";

export default function TextCounterClient() {
  const [text, setText] = useState("");
  return (
    <div className="max-w-lg mx-auto p-6 bg-white/10 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">文字数カウント</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ここにテキストを入力"
        className="w-full border rounded p-3 h-40 resize-none"
      />
      <p className="mt-3 text-gray-200">
        文字数: <strong>{text.length}</strong>
      </p>
    </div>
  );
}
