export default function PrayerCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
      <h3 className="text-xl font-bold">🕌 الصلاة</h3>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between">
          <span>الفجر</span>
          <span className="text-emerald-400">✓</span>
        </div>

        <div className="flex justify-between">
          <span>الظهر</span>
          <span>○</span>
        </div>

        <div className="flex justify-between">
          <span>العصر</span>
          <span>○</span>
        </div>

        <div className="flex justify-between">
          <span>المغرب</span>
          <span>○</span>
        </div>

        <div className="flex justify-between">
          <span>العشاء</span>
          <span>○</span>
        </div>
      </div>
    </div>
  );
}