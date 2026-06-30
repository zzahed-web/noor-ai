"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 pt-20 text-white">

      <div className="absolute h-[700px] w-[700px] rounded-full bg-emerald-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl text-center"
      >

        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-emerald-300">
          ✨ Noor AI
        </span>

        <h1 className="mt-10 text-5xl font-extrabold leading-tight md:text-7xl">

          رفيقك الذكي

          <br />

          في رحلتك إلى الله

        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">

          تطبيق يعتمد على الذكاء الاصطناعي لمساعدتك في الصلاة،
          والقرآن، والأذكار، والتحديات الإيمانية،
          وبناء علاقة أقرب مع الله تعالى.

        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button className="rounded-2xl bg-emerald-500 px-10 py-5 font-bold transition hover:bg-emerald-600">
            ابدأ رحلتك
          </button>

          <button className="rounded-2xl border border-white/20 px-10 py-5 transition hover:bg-white/10">
            شاهد المزايا
          </button>

        </div>

      </motion.div>

    </section>
  );
}