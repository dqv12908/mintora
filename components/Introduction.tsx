"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";

export default function Introduction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Phase 1: Heading reveals (0-15%)
  const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0, 0.15], [30, 0]);

  // Phase 2: Old Way card visible (15-55%)
  const oldWayOpacity = useTransform(scrollYProgress, [0.15, 0.3, 0.5, 0.65], [0, 1, 1, 0]);
  const oldWayX = useTransform(scrollYProgress, [0.15, 0.3], [-40, 0]);
  const oldWayRotateY = useTransform(scrollYProgress, [0.5, 0.65], [0, 90]);

  const oldItem0Opacity = useTransform(scrollYProgress, [0.2, 0.24], [0, 1]);
  const oldItem1Opacity = useTransform(scrollYProgress, [0.24, 0.28], [0, 1]);
  const oldItem2Opacity = useTransform(scrollYProgress, [0.28, 0.32], [0, 1]);
  const oldItem3Opacity = useTransform(scrollYProgress, [0.32, 0.36], [0, 1]);
  const oldItemOpacities = [oldItem0Opacity, oldItem1Opacity, oldItem2Opacity, oldItem3Opacity];

  // Phase 3: Card flip — Mintoria Way (55-80%)
  const mintoriaRotateY = useTransform(scrollYProgress, [0.55, 0.7], [-90, 0]);
  const mintoriaFlipOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  const newItem0Opacity = useTransform(scrollYProgress, [0.68, 0.72], [0, 1]);
  const newItem1Opacity = useTransform(scrollYProgress, [0.72, 0.76], [0, 1]);
  const newItem2Opacity = useTransform(scrollYProgress, [0.76, 0.80], [0, 1]);
  const newItem3Opacity = useTransform(scrollYProgress, [0.80, 0.84], [0, 1]);
  const newItemOpacities = [newItem0Opacity, newItem1Opacity, newItem2Opacity, newItem3Opacity];

  // Phase 4: Glow
  const glowOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            style={{ opacity: headingOpacity, y: headingY }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
              {(() => {
                const title = t.philosophy.title;
                const idx = title.indexOf("Mintoria");
                if (idx === -1) return title;
                return (
                  <>
                    {title.slice(0, idx)}
                    <span className="text-gradient-cyan-purple">Mintoria</span>
                    {title.slice(idx + 8)}
                  </>
                );
              })()}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              {t.philosophy.subtitle}
            </p>
          </motion.div>

          {/* Card flip area */}
          <div className="perspective-container max-w-2xl mx-auto">
            <div className="relative min-h-[280px] sm:min-h-[320px]">
              {/* Old Way Card */}
              <motion.div
                className="absolute inset-0 p-6 md:p-8 bg-bg-surface border border-white/5"
                style={{
                  opacity: oldWayOpacity,
                  x: oldWayX,
                  rotateY: oldWayRotateY,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-neon-red/10 border border-neon-red/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-neon-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-slate-300">
                    {t.philosophy.oldWayTitle}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {t.philosophy.oldWay.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      style={{ opacity: oldItemOpacities[i] ?? 1 }}
                    >
                      <svg className="w-5 h-5 text-neon-red shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-slate-400">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Mintoria Way Card */}
              <motion.div
                className="absolute inset-0 p-6 md:p-8 bg-bg-surface border border-neon-cyan/10 overflow-hidden"
                style={{
                  opacity: mintoriaFlipOpacity,
                  rotateY: mintoriaRotateY,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Glow */}
                <motion.div
                  className="absolute top-0 right-0 w-48 h-48 bg-neon-cyan/10 blur-3xl"
                  style={{ opacity: glowOpacity }}
                />

                <div className="relative flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white">
                    {t.philosophy.mintoriaWayTitle}
                  </h3>
                </div>
                <ul className="relative space-y-4">
                  {t.philosophy.mintoriaWay.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      style={{ opacity: newItemOpacities[i] ?? 1 }}
                    >
                      <svg className="w-5 h-5 text-neon-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
