"use client";

import { useMemo } from "react";

const HEX_CHARS = "0123456789ABCDEF";

interface Column {
  id: number;
  chars: string;
  x: number;
  duration: number;
  delay: number;
  fontSize: number;
}

export default function MatrixRain({ columns = 35 }: { columns?: number }) {
  const cols = useMemo<Column[]>(() => {
    // Seeded pseudo-random for SSR consistency
    let seed = 123;
    function rand() {
      seed = (seed * 16807 + 0) % 2147483647;
      return (seed - 1) / 2147483646;
    }

    return Array.from({ length: columns }, (_, i) => {
      const charCount = 15 + Math.floor(rand() * 15);
      let chars = "";
      for (let j = 0; j < charCount; j++) {
        chars += HEX_CHARS[Math.floor(rand() * 16)];
        if (j < charCount - 1) chars += "\n";
      }
      return {
        id: i,
        chars,
        x: (i / columns) * 100 + rand() * (100 / columns),
        duration: 8 + rand() * 6,
        delay: rand() * 8,
        fontSize: 10 + rand() * 4,
      };
    });
  }, [columns]);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {cols.map((col) => (
        <div
          key={col.id}
          className="absolute top-0 will-change-transform"
          style={{
            left: `${col.x}%`,
            animation: `matrix-fall ${col.duration}s linear ${col.delay}s infinite`,
            opacity: 0.05,
          }}
        >
          <pre
            className="text-neon-cyan font-mono leading-tight"
            style={{ fontSize: col.fontSize }}
          >
            {col.chars}
          </pre>
        </div>
      ))}
    </div>
  );
}
