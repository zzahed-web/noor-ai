"use client";

import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

export default function AISection() {
  return (
    <section className="relative bg-slate-950 py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            🤖 Noor AI
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            تحدث مع نور...
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-400">
            ليس مجرد روبوت يجيب عن الأسئلة،
            بل رفيق يساعدك خطوة بخطوة.
          </p>
        </motion.div>

        <div className="mx-auto mt-20 max-w-4xl space-y-6">

          {/* User */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-end"
          >
            <div className="flex items-start gap-3">

              <div className="rounded-3xl bg-emerald-500 px-6 py-5 text-lg font-medium text-white shadow-xl">
                أشعر بالكسل عن صلاة الفجر...
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500">
                <User className="h-6 w-6" />
              </div>

            </div>
          </motion.div>

          {/* Noor */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-start"
          >
            <div className="flex items-start gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800">
                <Bot className="h-6 w-6 text-emerald-400" />
              </div>

              <div className="max-w-xl rounded-3xl border border-emerald-500/20 bg-white/5 px-6 py-5 text-lg leading-9 text-slate-200 backdrop-blur-xl">
                🌿 لا بأس...
                <br /><br />

                كلنا نمر بفترات ضعف.

                <br /><br />

                ما رأيك أن نبدأ بهدف بسيط؟

                <br />

                الاستيقاظ قبل الأذان بعشر دقائق فقط.

                <br /><br />

                وسأرافقك يوميًا حتى تصبح صلاة الفجر عادة جميلة بإذن الله.
              </div>

            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}