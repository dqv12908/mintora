"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MintEngineDemoProps {
  isActive: boolean;
}

type Phase = "idle" | "minting" | "success" | "receipt";

export default function MintEngineDemo({ isActive }: MintEngineDemoProps) {
  const [phase, setPhase] = useState<Phase>("idle");

  const resetCycle = useCallback(() => {
    setPhase("idle");
  }, []);

  useEffect(() => {
    if (!isActive) {
      setPhase("idle");
      return;
    }

    const timers: NodeJS.Timeout[] = [];

    function runCycle() {
      setPhase("idle");
      timers.push(setTimeout(() => setPhase("minting"), 1500));
      timers.push(setTimeout(() => setPhase("success"), 3500));
      timers.push(setTimeout(() => setPhase("receipt"), 5500));
      timers.push(setTimeout(() => runCycle(), 8000));
    }

    runCycle();

    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-6 bg-bg-primary">
      {/* Header */}
      <div className="w-full mb-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 bg-neon-cyan animate-pulse" />
          <span className="text-[10px] md:text-xs text-neon-cyan font-mono uppercase tracking-wider">
            Mint Engine v1.0
          </span>
        </div>
      </div>

      {/* Main card */}
      <div className="w-full bg-bg-surface border border-white/10 p-4 md:p-5">
        <h3 className="text-sm md:text-base font-heading font-semibold text-white mb-4">
          Mint MTR Tokens
        </h3>

        {/* Amount input */}
        <div className="bg-bg-primary border border-white/5 p-3 mb-4">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">
            Amount
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-xl md:text-2xl font-heading font-bold text-white">
              100
            </span>
            <span className="text-sm text-slate-500">MTR</span>
          </div>
        </div>

        {/* Mint button */}
        <motion.button
          className={`w-full py-2.5 md:py-3 font-medium text-sm transition-colors ${
            phase === "idle"
              ? "bg-neon-cyan text-bg-primary"
              : phase === "minting"
              ? "bg-neon-cyan/70 text-bg-primary"
              : "bg-neon-green text-bg-primary"
          }`}
          animate={{
            scale: phase === "minting" ? [0.95, 1] : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {phase === "idle" && "Mint Now"}
          {phase === "minting" && (
            <span className="flex items-center justify-center gap-2">
              <motion.span
                className="w-4 h-4 border-2 border-bg-primary/30 border-t-bg-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Minting...
            </span>
          )}
          {(phase === "success" || phase === "receipt") && "Minted!"}
        </motion.button>

        {/* Floating coins on success */}
        <AnimatePresence>
          {phase === "success" && (
            <div className="relative h-16 mt-2 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-0 text-lg"
                  style={{ left: `${15 + i * 15}%` }}
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: -60, opacity: 0 }}
                  transition={{ duration: 1.5, delay: i * 0.15, ease: "easeOut" }}
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-neon-cyan/20 border border-neon-cyan/40 flex items-center justify-center">
                    <span className="text-[8px] md:text-[10px] text-neon-cyan font-bold">M</span>
                  </div>
                </motion.div>
              ))}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <svg className="w-8 h-8 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Receipt */}
        <AnimatePresence>
          {phase === "receipt" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-3 bg-bg-primary border border-white/5 p-3 space-y-2"
            >
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">
                Transaction Receipt
              </div>
              {[
                { label: "Cost", value: "0.15 ETH", color: "text-white" },
                { label: "Tokens", value: "100 MTR", color: "text-neon-cyan" },
                { label: "Reserve", value: "+0.10 ETH", color: "text-neon-green" },
                { label: "Burned", value: "5 MTR", color: "text-neon-red" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between text-xs">
                  <span className="text-slate-500">{item.label}</span>
                  <span className={`font-mono ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
