"use client";
import { useState } from "react";

export default function PasswordGenClient() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const generate = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white/10 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">パスワード生成</h1>
      <div className="flex items-center gap-3">
        <label>桁数:</label>
        <input
          type="number"
          min={4}
          max={50}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="border rounded p-1 w-20"
        />
        <button
          onClick={generate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          生成
        </button>
      </div>
      {password && (
        <p className="mt-4 break-all bg-gray-800 p-3 rounded">{password}</p>
      )}
    </div>
  );
}
