"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    "الرئيسية",
    "الخدمات",
    "التحديات",
    "العلماء",
    "تواصل معنا",
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-xl font-bold text-slate-900">
            ن
          </div>

          <div>

            <h1 className="text-xl font-bold text-white">
              Noor AI
            </h1>

            <p className="text-xs text-slate-400">
              رفيقك في رحلتك إلى الله
            </p>

          </div>

        </div>

        {/* Menu */}

        <nav className="hidden gap-8 lg:flex">

          {links.map((item) => (
            <a
              key={item}
              href="#"
              className="text-slate-300 transition hover:text-emerald-400"
            >
              {item}
            </a>
          ))}

        </nav>

        {/* Button */}

        <button className="rounded-xl bg-emerald-500 px-6 py-3 font-bold transition hover:bg-emerald-600">
          ابدأ الآن
        </button>

      </div>
    </motion.header>
  );
}