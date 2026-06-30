"use client";

import { motion } from "framer-motion";
import { Flame, Sunrise, BookOpen, Heart } from "lucide-react";

const challenges = [
  {
    icon: Sunrise,
    title: "تحدي صلاة الفجر",
    days: "7 أيام",
    progress: 75,
  },
  {
    icon: BookOpen,
    title: "ورد القرآن",
    days: "30 يومًا",
    progress: 45,
  },
  {
    icon: Heart,
    title: "أذكار الصباح",
    days: "14 يومًا",
    progress: 90,
  },
];

export default function Challenges() {
  return (
    <section className="bg-slate-900 py-32">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-emerald-400">
            🔥 التحديات
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            ابنِ عادات إيمانية
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-400">
            تحديات يومية بسيطة تساعدك على الاستمرار والثبات.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {challenges.map((challenge, index) => {

            const Icon = challenge.icon;

            return (

              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.03 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20">

                    <Icon className="h-8 w-8 text-emerald-400" />

                  </div>

                  <div className="flex items-center gap-2 text-orange-400">

                    <Flame className="h-5 w-5" />

                    <span>متفاعل</span>

                  </div>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {challenge.title}
                </h3>

                <p className="mt-2 text-slate-400">
                  المدة: {challenge.days}
                </p>

                <div className="mt-8">

                  <div className="mb-3 flex justify-between text-sm text-slate-400">
                    <span>نسبة الإنجاز</span>
                    <span>{challenge.progress}%</span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-700">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${challenge.progress}%` }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-emerald-500"
                    />

                  </div>

                </div>

                <button className="mt-8 w-full rounded-xl bg-emerald-500 py-4 font-bold transition hover:bg-emerald-600">
                  ابدأ التحدي
                </button>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}