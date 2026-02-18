"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import IPadFrame from "./mechanism/IPadFrame";
import MintEngineDemo from "./mechanism/MintEngineDemo";
import EconomicControlDemo from "./mechanism/EconomicControlDemo";
import OnChainSettlementDemo from "./mechanism/OnChainSettlementDemo";

const layers = [
  {
    num: "01",
    title: "Mint Engine",
    subtitle: "Core Issuance Layer",
    description:
      "Users interact directly with the smart contract to mint tokens at a dynamically calculated cost. Every mint event is atomic, permissionless, and irreversible.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Economic Control",
    subtitle: "Self-Regulating Feedback",
    description:
      "Mint cost increases with demand, creating natural price discovery. Supply adjusts algorithmically — no governance votes, no manual intervention.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "On-Chain Settlement",
    subtitle: "Immutable Record",
    description:
      "Every transaction — mint, burn, and reserve allocation — is settled immutably on-chain. Full auditability, zero off-chain dependencies.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
];

export default function Mechanism() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Track active demo index
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.33) setActiveIndex(0);
    else if (v < 0.63) setActiveIndex(1);
    else setActiveIndex(2);
  });

  // Layer text transforms: opacity and y for each layer
  const layer0Opacity = useTransform(scrollYProgress, [0.03, 0.1, 0.25, 0.3], [0, 1, 1, 0]);
  const layer0Y = useTransform(scrollYProgress, [0.03, 0.1, 0.25, 0.3], [30, 0, 0, -30]);

  const layer1Opacity = useTransform(scrollYProgress, [0.33, 0.38, 0.55, 0.6], [0, 1, 1, 0]);
  const layer1Y = useTransform(scrollYProgress, [0.33, 0.38, 0.55, 0.6], [30, 0, 0, -30]);

  const layer2Opacity = useTransform(scrollYProgress, [0.63, 0.68, 0.85, 0.92], [0, 1, 1, 0]);
  const layer2Y = useTransform(scrollYProgress, [0.63, 0.68, 0.85, 0.92], [30, 0, 0, -30]);

  const layerTransforms = [
    { opacity: layer0Opacity, y: layer0Y },
    { opacity: layer1Opacity, y: layer1Y },
    { opacity: layer2Opacity, y: layer2Y },
  ];

  // iPad demo cross-fade opacities
  const demo0Opacity = useTransform(scrollYProgress, [0.0, 0.05, 0.28, 0.33], [0, 1, 1, 0]);
  const demo1Opacity = useTransform(scrollYProgress, [0.30, 0.35, 0.58, 0.63], [0, 1, 1, 0]);
  const demo2Opacity = useTransform(scrollYProgress, [0.60, 0.65, 0.88, 0.95], [0, 1, 1, 0]);

  const demoOpacities = [demo0Opacity, demo1Opacity, demo2Opacity];

  return (
    <section id="mechanisms" ref={sectionRef} className="relative" style={{ height: "400vh" }}>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-12">
            {/* Left column (text) - 45% */}
            <div className="w-full lg:w-[45%] relative">
              {/* Section heading - always visible */}
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-2 sm:mb-3">
                  Architecture of{" "}
                  <span className="text-gradient-cyan-purple">Trust</span>
                </h2>
                <p className="text-slate-400 text-sm sm:text-base md:text-lg">
                  Three layers working in harmony to create a self-sustaining,
                  trustless minting protocol.
                </p>
              </div>

              {/* Layer texts - cross-fade */}
              <div className="relative min-h-[140px] sm:min-h-[180px]">
                {layers.map((layer, i) => (
                  <motion.div
                    key={layer.num}
                    className="absolute top-0 left-0 right-0"
                    style={{
                      opacity: layerTransforms[i].opacity,
                      y: layerTransforms[i].y,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan">
                        {layer.icon}
                      </div>
                      <div>
                        <span className="text-xs text-neon-cyan font-mono uppercase tracking-wider">
                          Layer {layer.num}
                        </span>
                        <h3 className="text-xl font-heading font-semibold text-white">
                          {layer.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                      {layer.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Progress dots */}
              <div className="flex gap-3 mt-4 sm:mt-8">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 transition-all duration-300 ${
                      activeIndex === i
                        ? "bg-neon-cyan w-6"
                        : "bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right column (iPad) - 55% */}
            <div className="w-full lg:w-[55%] flex justify-center">
              <IPadFrame>
                <div className="relative w-full h-full">
                  {/* Stacked demos */}
                  {[MintEngineDemo, EconomicControlDemo, OnChainSettlementDemo].map(
                    (Demo, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0"
                        style={{ opacity: demoOpacities[i] }}
                      >
                        <Demo isActive={activeIndex === i} />
                      </motion.div>
                    )
                  )}
                </div>
              </IPadFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
