"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";

const XIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function Introduction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="philosophy" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-0 w-[40%] h-[60%] bg-neon-red/[0.04] blur-3xl -translate-y-1/2 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[40%] h-[60%] bg-neon-cyan/[0.04] blur-3xl -translate-y-1/2 rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            {(() => {
              const title = t.philosophy.title;
              const idx = title.indexOf("Mintoria");
              if (idx !== -1) {
                return (
                  <>
                    {title.slice(0, idx)}
                    <span className="text-gradient-cyan-purple">Mintoria</span>
                    {title.slice(idx + 8)}
                  </>
                );
              }
              return title;
            })()}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t.philosophy.subtitle}
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-stretch gap-0">

          {/* ── Problem Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative p-6 sm:p-8 bg-neon-red/[0.03] border border-neon-red/20 overflow-hidden"
          >
            {/* Diagonal hatch texture */}
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, #ff4466 0, #ff4466 1px, transparent 0, transparent 50%)",
                backgroundSize: "14px 14px",
              }}
            />
            {/* Top label */}
            <div className="relative flex items-center gap-3 mb-7">
              <div className="w-9 h-9 bg-neon-red/10 border border-neon-red/25 flex items-center justify-center text-neon-red">
                <XIcon />
              </div>
              <div>
                <p className="text-[10px] font-mono text-neon-red/50 uppercase tracking-[0.2em] leading-none mb-0.5">
                  The Problem
                </p>
                <h3 className="text-base sm:text-lg font-heading font-semibold text-slate-300">
                  {t.philosophy.oldWayTitle}
                </h3>
              </div>
            </div>

            {/* Items */}
            <ul className="relative space-y-4 sm:space-y-5">
              {t.philosophy.oldWay.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.4 + i * 0.09 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-[3px] text-neon-red opacity-80 shrink-0">
                    <XIcon />
                  </span>
                  <span className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── VS Divider (desktop) ── */}
          <div className="hidden md:flex flex-col items-center justify-center self-stretch px-5">
            <div className="flex-1 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
            <div className="my-5 relative">
              <div className="absolute inset-0 bg-neon-cyan/10 blur-xl rounded-full" />
              <div className="relative w-11 h-11 rounded-full border border-slate-600 bg-bg-primary flex items-center justify-center text-slate-400 text-[11px] font-mono font-bold tracking-wider">
                VS
              </div>
            </div>
            <div className="flex-1 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
          </div>

          {/* ── VS Divider (mobile) ── */}
          <div className="md:hidden flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gradient-to-r from-neon-red/20 to-slate-800" />
            <span className="text-slate-500 text-[11px] font-mono font-bold tracking-widest">VS</span>
            <div className="flex-1 h-px bg-gradient-to-l from-neon-cyan/20 to-slate-800" />
          </div>

          {/* ── Solution Column ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative p-6 sm:p-8 bg-neon-cyan/[0.03] border border-neon-cyan/20 overflow-hidden"
          >
            {/* Corner glow */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-neon-cyan/[0.08] blur-3xl pointer-events-none" />

            {/* Top label */}
            <div className="relative flex items-center gap-3 mb-7">
              <div className="w-9 h-9 bg-neon-green/10 border border-neon-green/25 flex items-center justify-center text-neon-green">
                <CheckIcon />
              </div>
              <div>
                <p className="text-[10px] font-mono text-neon-cyan/50 uppercase tracking-[0.2em] leading-none mb-0.5">
                  The Solution
                </p>
                <h3 className="text-base sm:text-lg font-heading font-semibold text-white">
                  {t.philosophy.mintoriaWayTitle}
                </h3>
              </div>
            </div>

            {/* Items */}
            <ul className="relative space-y-4 sm:space-y-5">
              {t.philosophy.mintoriaWay.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 14 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.5 + i * 0.09 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-[3px] text-neon-green opacity-90 shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center text-xs text-slate-600 font-mono mt-8 tracking-wider uppercase"
        >
          Protocol-enforced · Math-verified · On-chain settled
        </motion.p>
      </div>
    </section>
  );
}
