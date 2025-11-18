"use client";
import { useState } from "react";

export default function RemoveNewlineClient() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleRemove = () => {
    setResult(text.replace(/\n/g, ""));
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-40 p-3 border rounded mb-4"
        placeholder="ここにテキストを入力"
      />

      <button
        onClick={handleRemove}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        改行を削除
      </button>

      <textarea
        value={result}
        readOnly
        className="w-full h-40 p-3 border rounded mt-4"
        placeholder="結果がここに表示されます"
      />
    </div>
  );
}
