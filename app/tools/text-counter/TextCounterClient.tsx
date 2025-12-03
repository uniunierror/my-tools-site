"use client";
import { useState } from "react";

export default function TextCounterClient() {
  const [text, setText] = useState("");

  return (
    <div className="tool-box">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ここにテキストを入力"
        className="tool-textarea"
      />

      <p className="tool-result">
        文字数：<strong>{text.length}</strong>
      </p>
    </div>
  );
}
