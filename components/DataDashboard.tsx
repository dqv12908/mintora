"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import MatrixRain from "./effects/MatrixRain";

const stats = [
  { label: "Current Mint Cost", value: 0, sub: "Awaiting Genesis", decimals: 0, displayOverride: "---" },
  { label: "Total Supply", value: 0, sub: "MTR", decimals: 2 },
  { label: "Total Burned", value: 0, sub: "MTR", decimals: 2 },
  { label: "Reserve Pool", value: 0, sub: "ETH", decimals: 2 },
];

function TypewriterText({ text, delay = 0, speed = 80 }: { text: string; delay?: number; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, text, delay, speed]);

  return (
    <span ref={ref}>
      {displayed}
      <span className="terminal-cursor" />
    </span>
  );
}

function StatCard({
  stat,
  index,
  trigger,
}: {
  stat: (typeof stats)[number];
  index: number;
  trigger: boolean;
}) {
  const display = useCountUp(stat.value, 2000, stat.decimals, trigger);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-5 bg-bg-surface border border-white/5 relative overflow-hidden group hover:border-neon-cyan/20 transition-all duration-300"
    >
      {/* Scan line on hover */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div
          className="absolute left-0 right-0 h-px bg-neon-cyan/30"
          style={{ animation: "scan-line 3s linear infinite" }}
        />
      </div>

      {/* Scanline effect bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative">
        <p className="text-xs text-slate-500 uppercase tracking-wider font-mono mb-3">
          {stat.label}
        </p>
        <p className="text-2xl md:text-3xl font-heading font-bold text-neon-cyan font-mono">
          {stat.displayOverride || display}
        </p>
        <p className="text-xs text-slate-500 mt-1 font-mono">{stat.sub}</p>
      </div>
    </motion.div>
  );
}

export default function DataDashboard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="dashboard" className="section-padding relative overflow-hidden">
      {/* Matrix rain background */}
      <MatrixRain columns={35} />

      {/* Terminal-like background pattern */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div ref={sectionRef} className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Protocol{" "}
            <span className="text-gradient-cyan-purple">Statistics</span>
          </h2>

          {/* Status badge with typewriter */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-yellow-500/20 bg-yellow-500/5 text-yellow-400 text-sm mt-4 font-mono">
            <span className="w-2 h-2 bg-yellow-400 animate-pulse" />
            <TypewriterText text="System Initializing..." delay={500} speed={80} />
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} trigger={isInView} />
          ))}
        </div>

        {/* Bottom message — typewriter */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-slate-500 italic mt-8 font-mono"
        >
          <TypewriterText
            text="Data streams will be activated upon Mainnet Launch..."
            delay={2000}
            speed={40}
          />
        </motion.p>
      </div>
    </section>
  );
}
