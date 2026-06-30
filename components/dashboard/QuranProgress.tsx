export default function QuranProgress() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
      <h3 className="text-xl font-bold">📖 ورد القرآن</h3>

      <p className="mt-4 text-slate-400">
        أنجزت اليوم
      </p>

      <div className="mt-6 h-3 rounded-full bg-slate-700 overflow-hidden">
        <div className="h-full w-3/5 bg-emerald-500 rounded-full"></div>
      </div>

      <p className="mt-3 text-emerald-400 font-bold">
        3 / 5 صفحات
      </p>
    </div>
  );
}