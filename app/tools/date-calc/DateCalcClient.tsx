"use client";
import { useState, useMemo } from "react";

export default function DateCalcClient() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const diffDays = useMemo(() => {
    if (!start || !end) return null;
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  }, [start, end]);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white/10 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">日付計算</h1>
      <div className="flex flex-col gap-3">
        <input
          type="date"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="date"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="border p-2 rounded"
        />
        <p className="mt-3 text-gray-200">
          {diffDays !== null ? (
            <>
              日数差: <strong>{diffDays}</strong> 日
            </>
          ) : (
            "日付を入力してください"
          )}
        </p>
      </div>
    </div>
  );
}
