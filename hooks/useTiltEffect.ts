"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useCallback, type RefObject } from "react";

export function useTiltEffect(ref: RefObject<HTMLElement | null>, maxTilt = 15) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      rotateX.set(-y * maxTilt);
      rotateY.set(x * maxTilt);
    },
    [ref, maxTilt, rotateX, rotateY]
  );

  const onMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return { rotateX: springX, rotateY: springY, onMouseMove, onMouseLeave };
}
