"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface EconomicControlDemoProps {
  isActive: boolean;
}

export default function EconomicControlDemo({ isActive }: EconomicControlDemoProps) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef(0);
  const DURATION = 6000;

  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    startTimeRef.current = performance.now();

    function animate(now: number) {
      const elapsed = now - startTimeRef.current;
      const p = (elapsed % DURATION) / DURATION;
      setProgress(p);
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isActive]);

  // Bonding curve: y = x^1.8 mapped to SVG coordinates
  const chartW = 280;
  const chartH = 200;
  const padding = 30;
  const w = chartW - padding * 2;
  const h = chartH - padding * 2;

  // Generate curve path
  const points: string[] = [];
  const NUM_POINTS = 60;
  for (let i = 0; i <= NUM_POINTS; i++) {
    const t = i / NUM_POINTS;
    const x = padding + t * w;
    const y = padding + h - Math.pow(t, 1.8) * h;
    points.push(`${x},${y}`);
  }
  const curvePath = `M ${points.join(" L ")}`;

  // Fill path (close to bottom)
  const fillPath = `${curvePath} L ${padding + w},${padding + h} L ${padding},${padding + h} Z`;

  // Current dot position
  const dotT = progress;
  const dotX = padding + dotT * w;
  const dotY = padding + h - Math.pow(dotT, 1.8) * h;

  // Current cost calculation
  const mintCost = (Math.pow(dotT, 1.8) * 0.5).toFixed(3);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-6 bg-bg-primary">
      {/* Header */}
      <div className="w-full mb-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 bg-neon-purple animate-pulse" />
          <span className="text-[10px] md:text-xs text-neon-purple font-mono uppercase tracking-wider">
            Bonding Curve
          </span>
        </div>
      </div>

      {/* SVG Chart */}
      <div className="w-full bg-bg-surface border border-white/10 p-3 md:p-4">
        <svg viewBox={`0 0 ${chartW} ${chartH}`} className="w-full">
          {/* Grid lines */}
          {[0.25, 0.5, 0.75].map((t) => (
            <g key={t}>
              <line
                x1={padding}
                y1={padding + h * (1 - t)}
                x2={padding + w}
                y2={padding + h * (1 - t)}
                stroke="rgba(255,255,255,0.05)"
                strokeDasharray="4 4"
              />
              <line
                x1={padding + w * t}
                y1={padding}
                x2={padding + w * t}
                y2={padding + h}
                stroke="rgba(255,255,255,0.05)"
                strokeDasharray="4 4"
              />
            </g>
          ))}

          {/* Axes */}
          <line x1={padding} y1={padding} x2={padding} y2={padding + h} stroke="rgba(255,255,255,0.1)" />
          <line x1={padding} y1={padding + h} x2={padding + w} y2={padding + h} stroke="rgba(255,255,255,0.1)" />

          {/* Gradient fill under curve */}
          <defs>
            <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d={fillPath}
            fill="url(#curveGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Bonding curve line */}
          <motion.path
            d={curvePath}
            fill="none"
            stroke="#00f0ff"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Dashed vertical line from dot to X axis */}
          <line
            x1={dotX}
            y1={dotY}
            x2={dotX}
            y2={padding + h}
            stroke="#00f0ff"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.4"
          />

          {/* Moving dot */}
          <circle cx={dotX} cy={dotY} r="5" fill="#00f0ff" />
          {/* Pulse ring */}
          <motion.circle
            cx={dotX}
            cy={dotY}
            r="5"
            fill="none"
            stroke="#00f0ff"
            strokeWidth="1"
            animate={{ r: [5, 15], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          {/* Axis labels */}
          <text x={padding + w / 2} y={chartH - 5} textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">
            SUPPLY →
          </text>
          <text x={8} y={padding + h / 2} textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace" transform={`rotate(-90, 8, ${padding + h / 2})`}>
            COST →
          </text>
        </svg>

        {/* Cost display */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
            Mint Cost
          </span>
          <span className="text-sm md:text-base font-heading font-bold text-neon-cyan font-mono">
            {mintCost} ETH
          </span>
        </div>
      </div>
    </div>
  );
}
