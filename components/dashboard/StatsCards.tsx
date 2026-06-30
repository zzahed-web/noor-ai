export default function StatsCards() {

  const cards = [
    {
      title: "الصلاة",
      value: "5 / 5",
    },
    {
      title: "ورد القرآن",
      value: "4 صفحات",
    },
    {
      title: "الأذكار",
      value: "72%",
    },
    {
      title: "النقاط",
      value: "1250",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-2xl bg-slate-900 border border-white/10 p-6"
        >

          <p className="text-slate-400">
            {card.title}
          </p>

          <h3 className="mt-4 text-3xl font-bold text-emerald-400">
            {card.value}
          </h3>

        </div>

      ))}

    </div>
  );
}