"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OnChainSettlementDemoProps {
  isActive: boolean;
}

const blocks = [
  { hash: "0x3a7f...c2d1", type: "MINT", amount: "+100 MTR", color: "text-neon-cyan" },
  { hash: "0x8b2e...f4a9", type: "RESERVE", amount: "+0.10 ETH", color: "text-neon-green" },
  { hash: "0xd15c...7e38", type: "BURN", amount: "-5 MTR", color: "text-neon-red" },
  { hash: "0xf6a1...b5c4", type: "SETTLE", amount: "Confirmed", color: "text-neon-purple" },
];

type BlockStatus = "pending" | "confirming" | "confirmed";

export default function OnChainSettlementDemo({ isActive }: OnChainSettlementDemoProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [statuses, setStatuses] = useState<BlockStatus[]>(["pending", "pending", "pending", "pending"]);

  useEffect(() => {
    if (!isActive) {
      setVisibleCount(0);
      setStatuses(["pending", "pending", "pending", "pending"]);
      return;
    }

    const timers: NodeJS.Timeout[] = [];

    function runCycle() {
      setVisibleCount(0);
      setStatuses(["pending", "pending", "pending", "pending"]);

      // Show blocks one by one
      for (let i = 0; i < 4; i++) {
        timers.push(
          setTimeout(() => {
            setVisibleCount((prev) => prev + 1);
          }, i * 1500)
        );

        // Status transitions for each block
        timers.push(
          setTimeout(() => {
            setStatuses((prev) => {
              const next = [...prev];
              next[i] = "confirming";
              return next;
            });
          }, i * 1500 + 800)
        );

        timers.push(
          setTimeout(() => {
            setStatuses((prev) => {
              const next = [...prev];
              next[i] = "confirmed";
              return next;
            });
          }, i * 1500 + 1400)
        );
      }

      // Reset and loop
      timers.push(setTimeout(() => runCycle(), 8000));
    }

    runCycle();
    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  const statusColor = (s: BlockStatus) => {
    switch (s) {
      case "pending":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "confirming":
        return "text-neon-cyan bg-neon-cyan/10 border-neon-cyan/20 animate-pulse";
      case "confirmed":
        return "text-neon-green bg-neon-green/10 border-neon-green/20";
    }
  };

  return (
    <div className="w-full h-full flex flex-col p-4 md:p-6 bg-bg-primary overflow-hidden">
      {/* Header */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 bg-neon-green animate-pulse" />
          <span className="text-[10px] md:text-xs text-neon-green font-mono uppercase tracking-wider">
            Settlement Log
          </span>
        </div>
      </div>

      {/* Blocks */}
      <div className="flex-1 space-y-2 overflow-hidden">
        <AnimatePresence>
          {blocks.slice(0, visibleCount).map((block, i) => (
            <motion.div
              key={block.hash}
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-bg-surface border border-white/5 p-2.5 md:p-3"
            >
              {/* Shimmer overlay for non-confirmed */}
              {statuses[i] !== "confirmed" && (
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(0,240,255,0.03) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2s linear infinite",
                  }}
                />
              )}

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-[10px] font-mono text-slate-600 shrink-0">
                    #{i + 1}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 truncate">
                    {block.hash}
                  </span>
                </div>
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 border ${statusColor(statuses[i])}`}>
                  {statuses[i] === "pending" ? "PENDING" : statuses[i] === "confirming" ? "..." : "OK"}
                </span>
              </div>

              <div className="relative flex items-center justify-between mt-1.5">
                <span className={`text-xs font-mono font-semibold ${block.color}`}>
                  {block.type}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {block.amount}
                </span>
              </div>

              {/* Chain link connector */}
              {i < visibleCount - 1 && (
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-px h-2 bg-white/10"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
