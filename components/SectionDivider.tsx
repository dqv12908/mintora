"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "gradient-line" | "geometric";
}

export default function SectionDivider({ variant = "gradient-line" }: SectionDividerProps) {
  if (variant === "geometric") {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <motion.div
          className="mx-4 w-3 h-3 border border-neon-cyan/30 rotate-45"
          animate={{ rotate: [45, 225] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    );
  }

  // gradient-line variant
  return (
    <div className="flex justify-center py-4">
      <div className="relative w-px h-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/30 to-transparent" />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neon-cyan"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
