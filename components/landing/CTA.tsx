"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32">

      <div className="absolute inset-0 bg-emerald-500/10 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl rounded-3xl border border-emerald-500/20 bg-white/5 p-16 text-center backdrop-blur-xl"
      >

        <h2 className="text-5xl font-bold text-white">
          ابدأ رحلتك اليوم
        </h2>

        <p className="mt-8 text-xl leading-9 text-slate-300">
          اجعل الذكاء الاصطناعي رفيقك اليومي في الصلاة والقرآن والأذكار
          والتحديات الإيمانية.
        </p>

        <button className="mt-12 rounded-2xl bg-emerald-500 px-10 py-5 text-lg font-bold transition hover:bg-emerald-600">
          🚀 ابدأ مجانًا
        </button>

      </motion.div>

    </section>
  );
}