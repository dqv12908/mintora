"use client";

import { motion } from "framer-motion";

interface IPadFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function IPadFrame({ children, className = "" }: IPadFrameProps) {
  return (
    <div className={`perspective-container ${className}`}>
      <motion.div
        className="ipad-3d-tilt will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Device body */}
        <div className="relative ipad-frame bg-slate-900 w-[280px] h-[380px] sm:w-[340px] sm:h-[460px] md:w-[440px] md:h-[600px]">
          {/* Camera notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-700 border border-slate-600 z-10" />

          {/* Screen area */}
          <div className="ipad-screen absolute inset-2 bg-bg-primary">
            {children}
          </div>

          {/* Glass reflection overlay */}
          <div
            className="absolute inset-2 pointer-events-none z-20"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.03) 100%)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
