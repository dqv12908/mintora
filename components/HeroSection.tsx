"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FloatingParticles from "./effects/FloatingParticles";
import { useLanguage } from "@/providers/LanguageProvider";

/* ---------- Hero 3D Illustration ---------- */

function HeroIllustration() {
  return (
    <motion.div
      className="relative w-full h-64 md:h-80 lg:h-[26rem]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,240,255,0.10) 0%, rgba(168,85,247,0.04) 45%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.18, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 3D Stage */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ---- Orbit A , largest, cyan ---- */}
        <motion.div
          className="absolute w-48 h-48 sm:w-72 sm:h-72 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem]"
          style={{ rotateX: 72, transformStyle: "preserve-3d" }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
            <circle cx="200" cy="200" r="190" stroke="#00f0ff" strokeWidth="0.7" opacity="0.12" />
            <circle
              cx="200" cy="200" r="190"
              stroke="#00f0ff" strokeWidth="1.5"
              strokeDasharray="28 92" strokeLinecap="round" opacity="0.35"
            />
            <circle cx="390" cy="200" r="4.5" fill="#00f0ff" opacity="0.75">
              <animate attributeName="opacity" values="0.75;0.25;0.75" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="10" cy="200" r="3" fill="#00f0ff" opacity="0.3" />
            <circle cx="200" cy="10" r="2.5" fill="#00f0ff" opacity="0.4" />
            <circle cx="200" cy="390" r="2" fill="#00f0ff" opacity="0.2" />
          </svg>
        </motion.div>

        {/* ---- Orbit B , medium, purple ---- */}
        <motion.div
          className="absolute w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[21rem] lg:h-[21rem]"
          style={{ rotateX: 72, rotateY: 55, transformStyle: "preserve-3d" }}
          animate={{ rotateZ: -360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 340 340" className="w-full h-full" fill="none">
            <circle cx="170" cy="170" r="160" stroke="#a855f7" strokeWidth="0.7" opacity="0.10" />
            <circle
              cx="170" cy="170" r="160"
              stroke="#a855f7" strokeWidth="1.5"
              strokeDasharray="20 78" strokeLinecap="round" opacity="0.28"
            />
            <circle cx="330" cy="170" r="4" fill="#a855f7" opacity="0.65">
              <animate attributeName="opacity" values="0.65;0.2;0.65" dur="2.6s" repeatCount="indefinite" />
            </circle>
            <circle cx="10" cy="170" r="2.5" fill="#a855f7" opacity="0.25" />
            <circle cx="170" cy="330" r="2" fill="#a855f7" opacity="0.2" />
          </svg>
        </motion.div>

        {/* ---- Orbit C , smallest, green ---- */}
        <motion.div
          className="absolute w-28 h-28 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64"
          style={{ rotateX: 72, rotateY: -55, transformStyle: "preserve-3d" }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 260 260" className="w-full h-full" fill="none">
            <circle cx="130" cy="130" r="120" stroke="#00ff88" strokeWidth="0.5" opacity="0.08" />
            <circle
              cx="130" cy="130" r="120"
              stroke="#00ff88" strokeWidth="1.2"
              strokeDasharray="14 62" strokeLinecap="round" opacity="0.22"
            />
            <circle cx="250" cy="130" r="3.5" fill="#00ff88" opacity="0.55">
              <animate attributeName="opacity" values="0.55;0.15;0.55" dur="1.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="10" cy="130" r="2" fill="#00ff88" opacity="0.18" />
          </svg>
        </motion.div>

        {/* ---- Central Core , rotating hexagonal wireframe ---- */}
        <motion.div
          className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
          style={{ rotateX: 20, transformStyle: "preserve-3d" }}
          animate={{ rotateY: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 140 140" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="hero3d-hg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <polygon
              points="70,8 122,34 122,106 70,132 18,106 18,34"
              stroke="url(#hero3d-hg)" strokeWidth="1.5" strokeLinejoin="round"
              fill="none" opacity="0.35"
            />
            <polygon
              points="70,25 107,47 107,93 70,115 33,93 33,47"
              stroke="url(#hero3d-hg)" strokeWidth="0.8" strokeLinejoin="round"
              fill="none" opacity="0.18"
            />
            <line x1="70" y1="8" x2="70" y2="25" stroke="#00f0ff" strokeWidth="0.5" opacity="0.2" />
            <line x1="122" y1="34" x2="107" y2="47" stroke="#a855f7" strokeWidth="0.5" opacity="0.2" />
            <line x1="122" y1="106" x2="107" y2="93" stroke="#00f0ff" strokeWidth="0.5" opacity="0.2" />
            <line x1="70" y1="132" x2="70" y2="115" stroke="#a855f7" strokeWidth="0.5" opacity="0.2" />
            <line x1="18" y1="106" x2="33" y2="93" stroke="#00f0ff" strokeWidth="0.5" opacity="0.2" />
            <line x1="18" y1="34" x2="33" y2="47" stroke="#a855f7" strokeWidth="0.5" opacity="0.2" />
            <circle cx="70" cy="8" r="2" fill="#00f0ff" opacity="0.5" />
            <circle cx="122" cy="34" r="2" fill="#a855f7" opacity="0.45" />
            <circle cx="122" cy="106" r="2" fill="#00f0ff" opacity="0.5" />
            <circle cx="70" cy="132" r="2" fill="#a855f7" opacity="0.45" />
            <circle cx="18" cy="106" r="2" fill="#00f0ff" opacity="0.5" />
            <circle cx="18" cy="34" r="2" fill="#a855f7" opacity="0.45" />
            <circle cx="70" cy="70" r="8" fill="#00f0ff" opacity="0.12">
              <animate attributeName="r" values="8;13;8" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.12;0.04;0.12" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="70" cy="70" r="3" fill="#ffffff" opacity="0.85" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

const badgeIcons = [
  <svg key="code" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  <svg key="self" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="verify" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
];

const badgeFromDirs = [
  { x: -40, y: 0 },
  { x: 0, y: 40 },
  { x: 40, y: 0 },
];

const titleChars = "Mintoria".split("");

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const subtitleChars = t.hero.subtitle.split("");

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const gradientY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const gradientScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const leftOrbY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rightOrbY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const badges = [
    { icon: badgeIcons[0], text: t.hero.badge1, from: badgeFromDirs[0] },
    { icon: badgeIcons[1], text: t.hero.badge2, from: badgeFromDirs[1] },
    { icon: badgeIcons[2], text: t.hero.badge3, from: badgeFromDirs[2] },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layer 0: Grid background */}
      <motion.div
        className="absolute inset-0 grid-bg will-change-transform"
        style={{ y: gridY }}
      />

      {/* Layer 1: Radial gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-neon-cyan/5 via-transparent to-transparent will-change-transform"
        style={{ y: gradientY, scale: gradientScale }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Layer 2: Left orb */}
      <motion.div
        className="absolute top-1/4 left-[10%] w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-neon-cyan/5 blur-3xl will-change-transform"
        style={{ y: leftOrbY }}
      />

      {/* Layer 3: Right orb */}
      <motion.div
        className="absolute bottom-1/4 right-[10%] w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-neon-purple/5 blur-3xl will-change-transform"
        style={{ y: rightOrbY }}
      />

      {/* Layer 4: Content */}
      <motion.div
        className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full will-change-transform"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-8 lg:gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left order-1">
            {/* Protocol tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-sm mb-6"
            >
              <span className="w-2 h-2 bg-neon-cyan animate-pulse" />
              {t.hero.tag}
            </motion.div>

            {/* Headline , Character-by-character reveal */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-heading font-bold uppercase leading-tight mb-2">
              <span className="inline-block">
                {titleChars.map((char, i) => (
                  <motion.span
                    key={`title-${i}`}
                    className="inline-block text-white"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.03,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    style={{ transformOrigin: "bottom" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-heading font-bold uppercase leading-tight mb-5 lg:whitespace-nowrap">
              <span className="inline">
                {subtitleChars.map((char, i) => (
                  <motion.span
                    key={`sub-${i}`}
                    className="inline-block text-gradient-cyan-purple"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + i * 0.02,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    style={{
                      transformOrigin: "bottom",
                      ...(char === " " ? { width: "0.3em" } : {}),
                    }}
                  >
                    {char === " " ? "\u00a0" : char}
                  </motion.span>
                ))}
              </span>
            </h2>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 mb-8"
            >
              {t.hero.description}
            </motion.p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {badges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: badge.from.x, y: badge.from.y }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.4 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 text-slate-300 text-sm"
                >
                  <span className="text-neon-cyan">{badge.icon}</span>
                  {badge.text}
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.7,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <a
                href="#philosophy"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-bg-primary bg-neon-cyan hover:bg-neon-cyan/90 glow-cyan transition-all duration-300"
              >
                {t.hero.cta1}
              </a>
              <a
                href="https://mintoria.gitbook.io/mintoria-docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300"
              >
                {t.hero.cta2}
              </a>
            </motion.div>
          </div>

          {/* Right: 3D Illustration */}
          <div className="order-2 flex items-center justify-center overflow-hidden">
            <HeroIllustration />
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <span className="text-xs text-slate-500 uppercase tracking-wider">{t.hero.scroll}</span>
        <motion.svg
          className="w-5 h-5 text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
