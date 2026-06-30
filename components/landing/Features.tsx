"use client";

import { motion } from "framer-motion";
import {
  Brain,
  BookOpen,
  Target,
  HeartHandshake,
  MoonStar,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "ذكاء اصطناعي إسلامي",
    description:
      "رفيق ذكي يساعدك على العبادة والتعلم وفق منهج واضح.",
  },
  {
    icon: BookOpen,
    title: "القرآن الكريم",
    description:
      "قراءة، تفسير، حفظ، مراجعة، وورد يومي.",
  },
  {
    icon: MoonStar,
    title: "الأذكار",
    description:
      "أذكار الصباح والمساء والنوم مع تذكير ذكي.",
  },
  {
    icon: Target,
    title: "التحديات الإيمانية",
    description:
      "خطط عملية لبناء عادات إيمانية مستمرة.",
  },
  {
    icon: HeartHandshake,
    title: "رفيق يومي",
    description:
      "يتابع تقدمك ويشجعك بطريقة لطيفة ومحفزة.",
  },
  {
    icon: Trophy,
    title: "الإنجازات",
    description:
      "اكسب أوسمة وغراس الجنة مع كل تقدم تحققه.",
  },
];

export default function Features() {
  return (
    <section className="py-32 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-white">
            كل ما تحتاجه...
            <span className="text-emerald-400"> في مكان واحد</span>
          </h2>

          <p className="mt-6 text-slate-400 text-xl max-w-3xl mx-auto leading-9">
            Noor AI ليس مجرد تطبيق،
            بل رفيق يساعدك على بناء علاقتك بالله
            بطريقة عملية ومتدرجة.
          </p>
        </motion.div>

        <div className="grid gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.04,
                  y: -8,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"
              >

                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center">

                  <Icon className="w-8 h-8 text-emerald-400" />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">

                  {feature.title}

                </h3>

                <p className="mt-4 text-slate-400 leading-8">

                  {feature.description}

                </p>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}