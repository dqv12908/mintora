"use client";

import { useEffect, useState } from "react";

const HEX_CHARS = "0123456789ABCDEF";

export function useCountUp(
  target: number,
  duration = 2000,
  decimals = 2,
  trigger = true
) {
  const [display, setDisplay] = useState("0".padStart(decimals + 2, "0"));

  useEffect(() => {
    if (!trigger) return;

    const targetStr = target.toFixed(decimals);
    const scramblePhase = duration * 0.7;
    const settlePhase = duration * 0.3;
    const startTime = performance.now();
    let rafId: number;

    function animate(now: number) {
      const elapsed = now - startTime;

      if (elapsed < scramblePhase) {
        // Scramble phase: show random hex digits
        const len = targetStr.replace(".", "").length;
        let result = "";
        for (let i = 0; i < len; i++) {
          result += HEX_CHARS[Math.floor(Math.random() * 16)];
        }
        // Insert decimal point at the right place
        const dotIndex = targetStr.indexOf(".");
        if (dotIndex >= 0) {
          result = result.slice(0, dotIndex) + "." + result.slice(dotIndex);
        }
        setDisplay(result);
      } else if (elapsed < duration) {
        // Settle phase: interpolate to final value
        const settleProgress = (elapsed - scramblePhase) / settlePhase;
        const eased = 1 - Math.pow(1 - settleProgress, 3);
        const current = target * eased;
        setDisplay(current.toFixed(decimals));
      } else {
        setDisplay(targetStr);
        return;
      }

      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, decimals, trigger]);

  return display;
}
