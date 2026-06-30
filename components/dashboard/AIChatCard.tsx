"use client";

import { useState } from "react";

export default function AIChatCard() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askNoor() {
    if (!message.trim()) return;

    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    const data = await res.json();

    setAnswer(data.reply);

    setLoading(false);
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold">
        🤖 اسأل نور
      </h2>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="اكتب سؤالك..."
        className="mt-5 h-36 w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none"
      />

      <button
        onClick={askNoor}
        disabled={loading}
        className="mt-4 w-full rounded-xl bg-emerald-500 py-3 font-bold hover:bg-emerald-600 disabled:opacity-50"
      >
        {loading ? "جاري التفكير..." : "اسأل نور"}
      </button>

      {answer && (
        <div className="mt-6 rounded-xl bg-slate-800 p-4 leading-8 whitespace-pre-wrap">
          {answer}
        </div>
      )}
    </div>
  );
}