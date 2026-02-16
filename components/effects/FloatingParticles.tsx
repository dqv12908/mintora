"use client";

import { useMemo } from "react";

const SHAPES = ["hexagon", "triangle", "circle", "diamond"] as const;
const COLORS = ["#00f0ff", "#a855f7"];

interface Particle {
  id: number;
  shape: (typeof SHAPES)[number];
  size: number;
  x: number;
  y: number;
  opacity: number;
  color: string;
  duration: number;
  delay: number;
}

function ShapeSVG({ shape, size, color }: { shape: string; size: number; color: string }) {
  const s = size;
  switch (shape) {
    case "hexagon":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"
            stroke={color}
            strokeWidth="1"
            opacity="0.6"
          />
        </svg>
      );
    case "triangle":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <path d="M12 3l10 18H2L12 3z" stroke={color} strokeWidth="1" opacity="0.6" />
        </svg>
      );
    case "diamond":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <path d="M12 2l10 10-10 10L2 12 12 2z" stroke={color} strokeWidth="1" opacity="0.6" />
        </svg>
      );
    default:
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1" opacity="0.6" />
        </svg>
      );
  }
}

export default function FloatingParticles({ count = 18 }: { count?: number }) {
  const particles = useMemo<Particle[]>(() => {
    // Seeded pseudo-random for SSR consistency
    let seed = 42;
    function rand() {
      seed = (seed * 16807 + 0) % 2147483647;
      return (seed - 1) / 2147483646;
    }

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      shape: SHAPES[Math.floor(rand() * SHAPES.length)],
      size: 6 + rand() * 14,
      x: rand() * 100,
      y: rand() * 100,
      opacity: 0.05 + rand() * 0.1,
      color: COLORS[Math.floor(rand() * COLORS.length)],
      duration: 4 + rand() * 6,
      delay: rand() * 5,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute will-change-transform"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        >
          <ShapeSVG shape={p.shape} size={p.size} color={p.color} />
        </div>
      ))}
    </div>
  );
}
