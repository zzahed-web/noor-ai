"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "أحمد",
    text: "كنت أؤخر صلاة الفجر كثيرًا، ومع نور أصبحت أواظب عليها منذ 21 يومًا.",
  },
  {
    name: "فاطمة",
    text: "أصبحت أقرأ وردي اليومي من القرآن بسهولة، والتذكيرات كانت رائعة.",
  },
  {
    name: "محمد",
    text: "التحديات اليومية حفزتني على المحافظة على الأذكار والصلاة.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-900 py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-white">
            ماذا يقول مستخدمونا؟
          </h2>

          <p className="mt-5 text-slate-400 text-xl">
            بداية رحلة مليئة بالإنجازات
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="mb-6 flex gap-1 text-yellow-400">
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
              </div>

              <p className="leading-8 text-slate-300">
                "{item.text}"
              </p>

              <h3 className="mt-8 text-xl font-bold text-white">
                {item.name}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}