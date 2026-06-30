"use client";

import { Button } from "@/components/ui/button";

type Props = {
  name: string;
  setName: (value: string) => void;
  onNext: () => void;
};

export default function NameStep({
  name,
  setName,
  onNext,
}: Props) {
  return (
    <div className="w-full max-w-xl rounded-3xl bg-slate-900 p-10 border border-white/10">

      <h2 className="text-4xl font-bold text-white">
        بماذا تحب أن أناديك؟
      </h2>

      <p className="mt-4 text-slate-400">
        اكتب الاسم الذي تفضل أن أخاطبك به.
      </p>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="مثال: زكريا"
        className="mt-8 w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none focus:border-emerald-500"
      />

      <Button
        className="mt-8 w-full"
        disabled={!name.trim()}
        onClick={onNext}
      >
        التالي
      </Button>

    </div>
  );
}