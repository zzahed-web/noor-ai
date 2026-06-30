export default function DashboardSidebar() {

  const items = [
    "🏠 الرئيسية",
    "🤖 نور AI",
    "📖 القرآن",
    "🕌 الصلاة",
    "📿 الأذكار",
    "🏆 التحديات",
    "⚙️ الإعدادات",
  ];

  return (
    <aside className="w-72 bg-slate-900 border-l border-white/10 p-6">

      <h2 className="text-2xl font-bold text-emerald-400">
        Noor AI
      </h2>

      <div className="mt-10 space-y-3">

        {items.map((item) => (
          <button
            key={item}
            className="w-full rounded-xl p-4 text-right hover:bg-slate-800 transition"
          >
            {item}
          </button>
        ))}

      </div>

    </aside>
  );
}