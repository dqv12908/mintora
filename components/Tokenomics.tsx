"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, type MotionValue } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";

/* ---------- SVG Illustrations ---------- */

function NativeMintingIllustration() {
  return (
    <svg viewBox="0 0 320 140" fill="none" className="w-full h-36 md:h-40">
      <defs>
        <linearGradient id="nm-eth" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="nm-coin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#00c4cc" />
        </linearGradient>
      </defs>
      <g transform="translate(30, 30)">
        <polygon points="28,0 50,28 28,38 6,28" fill="url(#nm-eth)" opacity="0.8" />
        <polygon points="28,42 50,32 28,56 6,32" fill="url(#nm-eth)" opacity="0.5" />
        <line x1="28" y1="0" x2="28" y2="56" stroke="#0a0a0f" strokeWidth="0.5" opacity="0.3" />
        <text x="28" y="76" fill="#a855f7" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="bold">ETH</text>
      </g>
      <line x1="88" y1="58" x2="118" y2="58" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.6" />
      <polyline points="114,53 122,58 114,63" fill="none" stroke="#00f0ff" strokeWidth="1.5" opacity="0.6" />
      <g transform="translate(125, 30)">
        <rect x="0" y="0" width="70" height="56" rx="6" fill="#0a0a0f" stroke="#00f0ff" strokeWidth="1.5" opacity="0.8" />
        <rect x="0" y="0" width="70" height="56" rx="6" fill="#00f0ff" opacity="0.05" />
        <circle cx="35" cy="22" r="8" fill="none" stroke="#00f0ff" strokeWidth="1.2" opacity="0.6" />
        <circle cx="35" cy="22" r="3" fill="#00f0ff" opacity="0.3" />
        <line x1="35" y1="12" x2="35" y2="14" stroke="#00f0ff" strokeWidth="1.5" opacity="0.5" />
        <line x1="35" y1="30" x2="35" y2="32" stroke="#00f0ff" strokeWidth="1.5" opacity="0.5" />
        <line x1="25" y1="22" x2="27" y2="22" stroke="#00f0ff" strokeWidth="1.5" opacity="0.5" />
        <line x1="43" y1="22" x2="45" y2="22" stroke="#00f0ff" strokeWidth="1.5" opacity="0.5" />
        <text x="35" y="46" fill="#00f0ff" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">MINT</text>
      </g>
      <line x1="198" y1="42" x2="225" y2="30" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.6" />
      <polyline points="220,25 228,28 222,34" fill="none" stroke="#00f0ff" strokeWidth="1.5" opacity="0.6" />
      <circle cx="240" cy="22" r="12" fill="url(#nm-coin)" opacity="0.9" />
      <text x="240" y="26" fill="#0a0a0f" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">M</text>
      <circle cx="260" cy="18" r="10" fill="url(#nm-coin)" opacity="0.7" />
      <text x="260" y="22" fill="#0a0a0f" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="monospace">M</text>
      <circle cx="278" cy="24" r="8" fill="url(#nm-coin)" opacity="0.5" />
      <text x="278" y="27" fill="#0a0a0f" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">M</text>
      <text x="258" y="46" fill="#00f0ff" fontSize="9" textAnchor="middle" fontFamily="monospace" opacity="0.7">MTR</text>
      <line x1="198" y1="72" x2="225" y2="85" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.6" />
      <polyline points="222,80 228,87 220,89" fill="none" stroke="#00f0ff" strokeWidth="1.5" opacity="0.6" />
      <g transform="translate(230, 62)">
        <rect x="0" y="0" width="65" height="45" rx="6" fill="#0a0a0f" stroke="#00ff88" strokeWidth="1.2" opacity="0.6" />
        <rect x="0" y="0" width="65" height="45" rx="6" fill="#00ff88" opacity="0.04" />
        <rect x="6" y="18" width="53" height="21" rx="2" fill="#00ff88" opacity="0.08" />
        <rect x="6" y="26" width="53" height="13" rx="2" fill="#00ff88" opacity="0.15" />
        <text x="33" y="10" fill="#00ff88" fontSize="7" textAnchor="middle" fontFamily="monospace" opacity="0.8">RESERVE</text>
      </g>
    </svg>
  );
}

function ProtocolBurnIllustration() {
  return (
    <svg viewBox="0 0 320 155" fill="none" className="w-full h-36 md:h-40">
      <defs>
        <linearGradient id="pb-flame" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ff4466" />
          <stop offset="50%" stopColor="#ff6622" />
          <stop offset="100%" stopColor="#ffaa00" />
        </linearGradient>
        <linearGradient id="pb-coin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#00c4cc" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="20" r="12" fill="url(#pb-coin)" opacity="0.8" />
      <text x="50" y="24" fill="#0a0a0f" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">M</text>
      <circle cx="82" cy="20" r="12" fill="url(#pb-coin)" opacity="0.7" />
      <text x="82" y="24" fill="#0a0a0f" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">M</text>
      <circle cx="114" cy="20" r="12" fill="url(#pb-coin)" opacity="0.6" />
      <text x="114" y="24" fill="#0a0a0f" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">M</text>
      <circle cx="146" cy="20" r="12" fill="url(#pb-coin)" opacity="0.5" />
      <text x="146" y="24" fill="#0a0a0f" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">M</text>
      <circle cx="178" cy="20" r="12" fill="url(#pb-coin)" opacity="0.4" />
      <text x="178" y="24" fill="#0a0a0f" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">M</text>
      <line x1="82" y1="35" x2="114" y2="50" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
      <line x1="114" y1="35" x2="114" y2="50" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
      <line x1="146" y1="35" x2="114" y2="50" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
      <path d="M90,90 C90,70 100,55 114,50 C128,55 138,70 138,90 C138,95 132,100 114,100 C96,100 90,95 90,90Z" fill="url(#pb-flame)" opacity="0.7" />
      <path d="M102,90 C102,77 108,67 114,63 C120,67 126,77 126,90 C126,93 122,95 114,95 C106,95 102,93 102,90Z" fill="#ffaa00" opacity="0.5" />
      <path d="M110,87 C110,80 112,73 114,70 C116,73 118,80 118,87 C118,89 116,90 114,90 C112,90 110,89 110,87Z" fill="#ffffff" opacity="0.3" />
      <text x="114" y="115" fill="#ff4466" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">BURN</text>
      <circle cx="90" cy="135" r="8" fill="url(#pb-coin)" opacity="0.6" />
      <text x="90" y="138" fill="#0a0a0f" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">M</text>
      <circle cx="138" cy="135" r="8" fill="url(#pb-coin)" opacity="0.4" />
      <text x="138" y="138" fill="#0a0a0f" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">M</text>
      <g transform="translate(195, 25)">
        <rect x="0" y="0" width="90" height="75" rx="4" fill="#ffffff" opacity="0.02" />
        <rect x="0" y="0" width="90" height="75" rx="4" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.1" />
        <line x1="10" y1="18" x2="80" y2="18" stroke="#ffffff" strokeWidth="0.3" opacity="0.1" />
        <line x1="10" y1="37" x2="80" y2="37" stroke="#ffffff" strokeWidth="0.3" opacity="0.1" />
        <line x1="10" y1="56" x2="80" y2="56" stroke="#ffffff" strokeWidth="0.3" opacity="0.1" />
        <polyline points="12,15 28,22 44,35 60,50 76,60" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="15" r="2.5" fill="#00ff88" />
        <circle cx="28" cy="22" r="2.5" fill="#00ff88" />
        <circle cx="44" cy="35" r="2.5" fill="#00ff88" />
        <circle cx="60" cy="50" r="2.5" fill="#00ff88" />
        <circle cx="76" cy="60" r="2.5" fill="#00ff88" />
        <polyline points="68,18 74,26 80,18" fill="none" stroke="#00ff88" strokeWidth="1.5" opacity="0.6" />
      </g>
      <text x="240" y="115" fill="#00ff88" fontSize="8" textAnchor="middle" fontFamily="monospace" opacity="0.6">DEFLATION</text>
    </svg>
  );
}

const orbitCoins = [
  { delay: 0, size: 14, radius: 55 },
  { delay: 1.2, size: 10, radius: 50 },
  { delay: 2.4, size: 12, radius: 58 },
  { delay: 3.6, size: 8, radius: 52 },
  { delay: 4.8, size: 11, radius: 56 },
];

function PercentDisplay({ value }: { value: MotionValue<number> }) {
  const [display, setDisplay] = useState("0%");

  useEffect(() => {
    const unsubscribe = value.on("change", (v: number) => {
      setDisplay(`${Math.round(v)}%`);
    });
    return unsubscribe;
  }, [value]);

  return <>{display}</>;
}

export default function Tokenomics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const strokeDashoffset = useTransform(scrollYProgress, [0.1, 0.5], [502.65, 0]);
  const percentValue = useTransform(scrollYProgress, [0.1, 0.5], [0, 100]);

  const labelOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const labelScale = useTransform(scrollYProgress, [0.45, 0.55], [0.8, 1]);

  return (
    <section id="tokenomics" ref={sectionRef} className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            {(() => {
              const title = t.tokenomics.title;
              const words = title.split(" ");
              const last = words.pop();
              return (
                <>
                  {words.join(" ")}{" "}
                  <span className="text-gradient-cyan-purple">{last}</span>
                </>
              );
            })()}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t.tokenomics.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Pie Chart */}
          <div className="flex justify-center px-6 sm:px-0" ref={chartRef}>
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(0, 240, 255, 0.1)" strokeWidth="2" />
                <motion.circle
                  cx="100" cy="100" r="80"
                  fill="none"
                  stroke="url(#tokenGradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray="502.65"
                  style={{ strokeDashoffset }}
                  transform="rotate(-90 100 100)"
                />
                <circle cx="100" cy="100" r="65" fill="none" stroke="rgba(0, 240, 255, 0.05)" strokeWidth="1" />
                <defs>
                  <linearGradient id="tokenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                <text x="100" y="92" textAnchor="middle" fill="#00f0ff" fontSize="28" fontWeight="bold" fontFamily="Space Grotesk, sans-serif">
                  <PercentDisplay value={percentValue} />
                </text>
                <text x="100" y="115" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="Inter, sans-serif">
                  {t.tokenomics.communityMint}
                </text>
              </svg>

              {/* Orbit coins */}
              {orbitCoins.map((coin, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 animate-spin-slow"
                  style={{
                    width: `${coin.radius * 2}%`,
                    height: `${coin.radius * 2}%`,
                    marginLeft: `-${coin.radius}%`,
                    marginTop: `-${coin.radius}%`,
                    animationDelay: `${coin.delay}s`,
                    animationDuration: `${12 + i * 2}s`,
                  }}
                >
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 bg-neon-cyan/20 border border-neon-cyan/30 flex items-center justify-center"
                    style={{ width: coin.size, height: coin.size }}
                  >
                    <span className="text-[6px] text-neon-cyan font-bold">M</span>
                  </div>
                </div>
              ))}

              {/* Labels */}
              <motion.div
                className="absolute -top-2 left-1/2 -translate-x-1/2 text-center"
                style={{ opacity: labelOpacity, scale: labelScale }}
              >
                <span className="text-[10px] sm:text-xs text-neon-green font-medium px-2 sm:px-3 py-1 bg-neon-green/10 border border-neon-green/20">
                  {t.tokenomics.teamPercent}
                </span>
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-2 sm:-right-4 -translate-y-1/2"
                style={{ opacity: labelOpacity, scale: labelScale }}
              >
                <span className="text-[10px] sm:text-xs text-neon-green font-medium px-2 sm:px-3 py-1 bg-neon-green/10 border border-neon-green/20">
                  {t.tokenomics.privatePercent}
                </span>
              </motion.div>
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2"
                style={{ opacity: labelOpacity, scale: labelScale }}
              >
                <span className="text-[10px] sm:text-xs text-neon-cyan font-medium px-2 sm:px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/20 whitespace-nowrap">
                  {t.tokenomics.communityPercent}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Right: Mechanism Cards */}
          <div className="space-y-6">
            {/* Native Minting Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 bg-bg-surface border border-white/5 glass-card-hover"
            >
              <div className="mb-4">
                <NativeMintingIllustration />
              </div>
              <h3 className="text-lg font-heading font-semibold text-white mb-3">
                {t.tokenomics.nativeMintingTitle}
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                {t.tokenomics.nativeMintingItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neon-cyan shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Protocol Burn Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="p-6 bg-bg-surface border border-white/5 glass-card-hover"
            >
              <div className="mb-4">
                <ProtocolBurnIllustration />
              </div>
              <h3 className="text-lg font-heading font-semibold text-white mb-3">
                {t.tokenomics.protocolBurnTitle}
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                {t.tokenomics.protocolBurnItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neon-purple shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
