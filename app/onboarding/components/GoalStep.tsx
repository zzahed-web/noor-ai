"use client";

import { Button } from "@/components/ui/button";

type Props = {
  goal: string;
  setGoal: (value: string) => void;
  onNext: () => void;
};

const goals = [
  "المحافظة على الصلاة",
  "قراءة القرآن",
  "الأذكار اليومية",
  "طلب العلم",
  "تحسين علاقتي بالله",
];

export default function GoalStep({
  goal,
  setGoal,
  onNext,
}: Props) {
  return (
    <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900 p-10">

      <h2 className="text-4xl font-bold text-white">
        ما هدفك الأساسي؟
      </h2>

      <p className="mt-4 text-slate-400">
        اختر الهدف الذي تريد أن نبدأ به.
      </p>

      <div className="mt-8 space-y-4">

        {goals.map((item) => (

          <button
            key={item}
            onClick={() => setGoal(item)}
            className={`w-full rounded-xl border p-5 text-right transition

            ${
              goal === item
                ? "border-emerald-500 bg-emerald-500/20"
                : "border-slate-700 hover:border-emerald-500"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

      <Button
        className="mt-8 w-full"
        disabled={!goal}
        onClick={onNext}
      >
        التالي
      </Button>

    </div>
  );
}