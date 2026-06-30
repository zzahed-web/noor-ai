"use client";

type Props = {
  step: number;
  total: number;
};

export default function ProgressHeader({
  step,
  total,
}: Props) {
  const percent = (step / total) * 100;

  return (
    <div className="w-full">

      <div className="mb-3 flex justify-between text-sm text-slate-400">
        <span>الخطوة {step}</span>
        <span>{total} خطوات</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-800">

        <div
          className="h-full rounded-full bg-emerald-500 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />

      </div>

    </div>
  );
}