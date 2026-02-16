"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useTiltEffect } from "@/hooks/useTiltEffect";

/* ---------- SVG Illustrations ---------- */

function IntrinsicValueIllustration() {
  return (
    <svg viewBox="0 0 320 160" fill="none" className="w-full h-36 md:h-40">
      <defs>
        <linearGradient id="iv-coin1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#00c4cc" />
        </linearGradient>
        <linearGradient id="iv-coin2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4e0" />
          <stop offset="100%" stopColor="#00a0b0" />
        </linearGradient>
        <linearGradient id="iv-coin3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="iv-floor" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Floor gradient fill */}
      <rect x="40" y="115" width="240" height="40" fill="url(#iv-floor)" rx="2" />

      {/* Dashed price floor line */}
      <line x1="40" y1="115" x2="280" y2="115" stroke="#00f0ff" strokeWidth="2.5" strokeDasharray="8 5" opacity="0.7" />

      {/* FLOOR label */}
      <text x="275" y="130" fill="#00f0ff" fontSize="10" fontFamily="monospace" textAnchor="end" opacity="0.6">FLOOR</text>

      {/* Coin stack — bottom coin */}
      <ellipse cx="140" cy="105" rx="42" ry="14" fill="url(#iv-coin1)" opacity="0.5" />
      <rect x="98" y="92" width="84" height="13" fill="url(#iv-coin1)" opacity="0.5" />
      <ellipse cx="140" cy="92" rx="42" ry="14" fill="url(#iv-coin1)" />
      <ellipse cx="140" cy="92" rx="32" ry="10" fill="none" stroke="#0a0a0f" strokeWidth="1" opacity="0.3" />

      {/* Coin stack — middle coin */}
      <ellipse cx="148" cy="80" rx="42" ry="14" fill="url(#iv-coin2)" opacity="0.5" />
      <rect x="106" y="67" width="84" height="13" fill="url(#iv-coin2)" opacity="0.5" />
      <ellipse cx="148" cy="67" rx="42" ry="14" fill="url(#iv-coin2)" />
      <ellipse cx="148" cy="67" rx="32" ry="10" fill="none" stroke="#0a0a0f" strokeWidth="1" opacity="0.3" />

      {/* Coin stack — top coin */}
      <ellipse cx="155" cy="55" rx="42" ry="14" fill="url(#iv-coin3)" opacity="0.5" />
      <rect x="113" y="42" width="84" height="13" fill="url(#iv-coin3)" opacity="0.5" />
      <ellipse cx="155" cy="42" rx="42" ry="14" fill="url(#iv-coin3)" />
      <text x="155" y="46" fill="#0a0a0f" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">MTR</text>

      {/* Upward arrow */}
      <line x1="200" y1="85" x2="200" y2="30" stroke="#a855f7" strokeWidth="2" opacity="0.8" />
      <polyline points="193,40 200,28 207,40" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.8" />

      {/* Small value indicator */}
      <rect x="210" y="28" width="40" height="16" rx="3" fill="#a855f7" opacity="0.15" />
      <text x="230" y="39" fill="#a855f7" fontSize="8" textAnchor="middle" fontFamily="monospace">VALUE</text>
    </svg>
  );
}

function PredictabilityIllustration() {
  return (
    <svg viewBox="0 0 320 160" fill="none" className="w-full h-36 md:h-40">
      <defs>
        <linearGradient id="pred-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="pred-band" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Grid lines */}
      <line x1="60" y1="20" x2="60" y2="135" stroke="#ffffff" strokeWidth="0.5" opacity="0.08" />
      <line x1="125" y1="20" x2="125" y2="135" stroke="#ffffff" strokeWidth="0.5" opacity="0.08" />
      <line x1="190" y1="20" x2="190" y2="135" stroke="#ffffff" strokeWidth="0.5" opacity="0.08" />
      <line x1="255" y1="20" x2="255" y2="135" stroke="#ffffff" strokeWidth="0.5" opacity="0.08" />

      <line x1="45" y1="40" x2="290" y2="40" stroke="#ffffff" strokeWidth="0.5" opacity="0.08" />
      <line x1="45" y1="70" x2="290" y2="70" stroke="#ffffff" strokeWidth="0.5" opacity="0.08" />
      <line x1="45" y1="100" x2="290" y2="100" stroke="#ffffff" strokeWidth="0.5" opacity="0.08" />

      {/* Axes */}
      <line x1="45" y1="135" x2="290" y2="135" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
      <line x1="45" y1="20" x2="45" y2="135" stroke="#ffffff" strokeWidth="1" opacity="0.2" />

      {/* Axis labels */}
      <text x="168" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">SUPPLY</text>
      <text x="18" y="80" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace" transform="rotate(-90, 18, 80)">COST</text>

      {/* Confidence band (purple translucent) */}
      <path d="M60,125 C100,118 150,95 190,72 Q230,52 270,32 L270,42 Q230,62 190,82 C150,105 100,128 60,135 Z" fill="url(#pred-band)" />

      {/* Area fill under the curve */}
      <path d="M60,130 C100,123 150,100 190,77 Q230,57 270,37 L270,135 L60,135 Z" fill="url(#pred-fill)" />

      {/* Main bezier curve */}
      <path d="M60,130 C100,123 150,100 190,77 Q230,57 270,37" stroke="#00f0ff" strokeWidth="2.5" strokeLinecap="round" />

      {/* Data points along the curve */}
      <circle cx="60" cy="130" r="4" fill="#0a0a0f" stroke="#00f0ff" strokeWidth="2" />
      <circle cx="112" cy="115" r="4" fill="#0a0a0f" stroke="#00f0ff" strokeWidth="2" />
      <circle cx="165" cy="93" r="4" fill="#0a0a0f" stroke="#00f0ff" strokeWidth="2" />
      <circle cx="218" cy="67" r="4" fill="#0a0a0f" stroke="#00f0ff" strokeWidth="2" />
      <circle cx="270" cy="37" r="4" fill="#0a0a0f" stroke="#00f0ff" strokeWidth="2" />
    </svg>
  );
}

function SafetyFirstIllustration() {
  return (
    <svg viewBox="0 0 320 160" fill="none" className="w-full h-36 md:h-40">
      <defs>
        <radialGradient id="sf-glow" cx="50%" cy="45%" r="45%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sf-shield" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Radiating glow */}
      <circle cx="160" cy="70" r="70" fill="url(#sf-glow)" />

      {/* Glow lines */}
      <line x1="160" y1="5" x2="160" y2="15" stroke="#00f0ff" strokeWidth="1.5" opacity="0.3" />
      <line x1="215" y1="15" x2="210" y2="24" stroke="#00f0ff" strokeWidth="1.5" opacity="0.2" />
      <line x1="105" y1="15" x2="110" y2="24" stroke="#00f0ff" strokeWidth="1.5" opacity="0.2" />
      <line x1="235" y1="45" x2="226" y2="50" stroke="#00f0ff" strokeWidth="1.5" opacity="0.15" />
      <line x1="85" y1="45" x2="94" y2="50" stroke="#00f0ff" strokeWidth="1.5" opacity="0.15" />

      {/* Shield shape */}
      <path
        d="M160,18 L205,35 C208,36 210,39 210,42 L210,72 C210,95 188,115 160,125 C132,115 110,95 110,72 L110,42 C110,39 112,36 115,35 Z"
        fill="url(#sf-shield)"
        stroke="#00f0ff"
        strokeWidth="2"
        opacity="0.9"
      />
      {/* Shield inner border */}
      <path
        d="M160,28 L198,42 L198,72 C198,90 181,107 160,115 C139,107 122,90 122,72 L122,42 Z"
        fill="none"
        stroke="#00f0ff"
        strokeWidth="0.5"
        opacity="0.3"
      />

      {/* Padlock body */}
      <rect x="147" y="62" width="26" height="20" rx="3" fill="#0a0a0f" stroke="#00f0ff" strokeWidth="1.5" />
      {/* Padlock shackle */}
      <path d="M152,62 L152,55 C152,49 156,45 160,45 C164,45 168,49 168,55 L168,62" fill="none" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
      {/* Keyhole */}
      <circle cx="160" cy="71" r="3" fill="#00f0ff" opacity="0.6" />
      <rect x="159" y="72" width="2" height="5" rx="1" fill="#00f0ff" opacity="0.6" />

      {/* Left key with X */}
      <g transform="translate(60, 55)">
        <circle cx="12" cy="12" r="7" fill="none" stroke="#94a3b8" strokeWidth="1.2" opacity="0.5" />
        <line x1="19" y1="12" x2="38" y2="12" stroke="#94a3b8" strokeWidth="1.2" opacity="0.5" />
        <line x1="32" y1="12" x2="32" y2="18" stroke="#94a3b8" strokeWidth="1.2" opacity="0.5" />
        <line x1="36" y1="12" x2="36" y2="16" stroke="#94a3b8" strokeWidth="1.2" opacity="0.5" />
        {/* Red X */}
        <line x1="8" y1="0" x2="30" y2="24" stroke="#ff4466" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="30" y1="0" x2="8" y2="24" stroke="#ff4466" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Right key with X */}
      <g transform="translate(222, 55)">
        <circle cx="12" cy="12" r="7" fill="none" stroke="#94a3b8" strokeWidth="1.2" opacity="0.5" />
        <line x1="19" y1="12" x2="38" y2="12" stroke="#94a3b8" strokeWidth="1.2" opacity="0.5" />
        <line x1="30" y1="12" x2="30" y2="18" stroke="#94a3b8" strokeWidth="1.2" opacity="0.5" />
        <line x1="34" y1="12" x2="34" y2="16" stroke="#94a3b8" strokeWidth="1.2" opacity="0.5" />
        {/* Red X */}
        <line x1="8" y1="0" x2="30" y2="24" stroke="#ff4466" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="30" y1="0" x2="8" y2="24" stroke="#ff4466" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* IMMUTABLE label */}
      <rect x="130" y="132" width="60" height="16" rx="3" fill="#00f0ff" opacity="0.08" />
      <text x="160" y="143" fill="#00f0ff" fontSize="8" textAnchor="middle" fontFamily="monospace" opacity="0.6">IMMUTABLE</text>
    </svg>
  );
}

function GovernancePowerIllustration() {
  return (
    <svg viewBox="0 0 320 160" fill="none" className="w-full h-36 md:h-40">
      <defs>
        <linearGradient id="gv-bar1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="gv-bar2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="gv-bar3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>

      {/* Header label */}
      <rect x="105" y="8" width="110" height="18" rx="3" fill="#a855f7" opacity="0.1" />
      <text x="160" y="20" fill="#a855f7" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">ON-CHAIN VOTE</text>

      {/* Row 1: 60% */}
      <circle cx="65" cy="52" r="12" fill="#0a0a0f" stroke="#00f0ff" strokeWidth="1" opacity="0.5" />
      <text x="65" y="56" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="monospace">A1</text>
      <rect x="85" y="42" width="180" height="20" rx="4" fill="#ffffff" opacity="0.04" />
      <rect x="85" y="42" width="108" height="20" rx="4" fill="url(#gv-bar1)" opacity="0.6" />
      <text x="200" y="56" fill="#94a3b8" fontSize="9" textAnchor="start" fontFamily="monospace">60%</text>

      {/* Row 2: 80% — winner */}
      <circle cx="65" cy="88" r="12" fill="#0a0a0f" stroke="#00f0ff" strokeWidth="1" opacity="0.5" />
      <text x="65" y="92" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="monospace">A2</text>
      <rect x="85" y="78" width="180" height="20" rx="4" fill="#ffffff" opacity="0.04" />
      <rect x="85" y="78" width="144" height="20" rx="4" fill="url(#gv-bar2)" opacity="0.8" />
      <text x="236" y="92" fill="#94a3b8" fontSize="9" textAnchor="start" fontFamily="monospace">80%</text>
      {/* Green checkmark */}
      <circle cx="286" cy="88" r="9" fill="#00ff88" opacity="0.15" />
      <polyline points="280,88 284,92 292,84" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Row 3: 45% */}
      <circle cx="65" cy="124" r="12" fill="#0a0a0f" stroke="#00f0ff" strokeWidth="1" opacity="0.5" />
      <text x="65" y="128" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="monospace">A3</text>
      <rect x="85" y="114" width="180" height="20" rx="4" fill="#ffffff" opacity="0.04" />
      <rect x="85" y="114" width="81" height="20" rx="4" fill="url(#gv-bar3)" opacity="0.4" />
      <text x="173" y="128" fill="#94a3b8" fontSize="9" textAnchor="start" fontFamily="monospace">45%</text>
    </svg>
  );
}

/* ---------- Card Data ---------- */

const benefits = [
  {
    title: "Intrinsic Value",
    description:
      "Every token costs real assets to mint, creating a natural price floor. No free tokens, no dilution — only value-backed issuance.",
    illustration: <IntrinsicValueIllustration />,
    entrance: { x: -40, rotate: -5 },
  },
  {
    title: "Predictability",
    description:
      "Algorithmic supply curves and transparent mechanics. You can model, predict, and verify every aspect of the token economics before participating.",
    illustration: <PredictabilityIllustration />,
    entrance: { x: 40, rotate: 5 },
  },
  {
    title: "Safety First",
    description:
      "Immutable smart contracts, no admin keys, no upgrade proxies. The protocol cannot be altered, paused, or manipulated by anyone — including its creators.",
    illustration: <SafetyFirstIllustration />,
    entrance: { y: 40, scale: 0.8 },
  },
  {
    title: "Governance Power",
    description:
      "Token holders gain proportional governance rights. Shape the protocol's future through on-chain voting — true decentralized decision making.",
    illustration: <GovernancePowerIllustration />,
    entrance: { x: 40, y: 30, scale: 0.8 },
  },
];

/* ---------- Tilt Card ---------- */

function TiltCard({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTiltEffect(cardRef, 15);

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        x: benefit.entrance.x ?? 0,
        y: benefit.entrance.y ?? 0,
        scale: benefit.entrance.scale ?? 1,
        rotate: benefit.entrance.rotate ?? 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="p-6 md:p-8 glass-card-hover gradient-border-glow group cursor-default"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <motion.div style={{ translateZ: 20 }}>
        <div className="mb-5">{benefit.illustration}</div>
        <h3 className="text-xl font-heading font-semibold text-white mb-3">
          {benefit.title}
        </h3>
        <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
      </motion.div>
    </motion.div>
  );
}

export default function InvestmentValue() {
  return (
    <section className="section-padding relative">
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
            More Than{" "}
            <span className="text-gradient-cyan-purple">A Token</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            A protocol-backed digital asset with real utility, transparent mechanics,
            and community governance.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <TiltCard key={benefit.title} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
