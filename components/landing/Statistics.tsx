"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Target, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "25K+",
    title: "مستخدم نشط",
  },
  {
    icon: BookOpen,
    number: "1M+",
    title: "صفحة قرآن تمت قراءتها",
  },
  {
    icon: Target,
    number: "500K+",
    title: "تحدٍ مكتمل",
  },
  {
    icon: Sparkles,
    number: "99%",
    title: "رضا المستخدمين",
  },
];

export default function Statistics() {
  return (
    <section className="bg-slate-950 py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-white">

            Noor AI بالأرقام

          </h2>

          <p className="mt-5 text-slate-400 text-xl">

            بداية رحلة كبيرة بإذن الله

          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20">

                  <Icon className="h-8 w-8 text-emerald-400" />

                </div>

                <h3 className="mt-8 text-5xl font-extrabold text-white">

                  {item.number}

                </h3>

                <p className="mt-4 text-slate-400">

                  {item.title}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}