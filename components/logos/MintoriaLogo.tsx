/**
 * Mintoria Logo System
 *
 * Abstract geometric prism mark — three facets creating an isometric
 * crystal illusion. Suggests value crystallisation and protocol structure
 * without any literal letters, coins or currency symbols.
 *
 * Colors: cyan #00f0ff, purple #a855f7, dark #0a0a0f, white #ffffff
 */

/* ------------------------------------------------------------------ */
/*  LOGOMARK — abstract prism                                          */
/* ------------------------------------------------------------------ */

export function Logomark({
  size = 64,
  variant = "gradient",
}: {
  size?: number;
  variant?: "gradient" | "cyan" | "white" | "dark";
}) {
  const id = `lm-${variant}-${size}`;

  // Isometric prism vertices (viewBox 0 0 100 100, centred at 50,50)
  // Top vertex
  const T = "50,6";
  // Bottom vertex
  const B = "50,94";
  // Left vertex
  const L = "6,50";
  // Right vertex
  const R = "94,50";
  // Centre
  const C = "50,50";

  if (variant === "gradient") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <defs>
          <linearGradient id={`${id}-f1`} x1="6" y1="50" x2="50" y2="6" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00f0ff" />
            <stop offset="1" stopColor="#00f0ff" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id={`${id}-f2`} x1="94" y1="50" x2="50" y2="6" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a855f7" />
            <stop offset="1" stopColor="#a855f7" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id={`${id}-f3`} x1="50" y1="94" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00f0ff" stopOpacity="0.15" />
            <stop offset="1" stopColor="#a855f7" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id={`${id}-edge`} x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00f0ff" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        {/* Three facets */}
        <polygon points={`${L} ${T} ${C}`} fill={`url(#${id}-f1)`} />
        <polygon points={`${T} ${R} ${C}`} fill={`url(#${id}-f2)`} />
        <polygon points={`${L} ${B} ${C}`} fill={`url(#${id}-f3)`} />
        <polygon points={`${R} ${B} ${C}`} fill={`url(#${id}-f3)`} opacity="0.6" />

        {/* Edges */}
        <polygon
          points={`${T} ${R} ${B} ${L}`}
          stroke={`url(#${id}-edge)`}
          strokeWidth="1.8"
          strokeLinejoin="miter"
          fill="none"
        />
        {/* Internal edges from centre */}
        <line x1="50" y1="50" x2="50" y2="6" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
        <line x1="50" y1="50" x2="94" y2="50" stroke="#ffffff" strokeWidth="0.7" opacity="0.25" />
        <line x1="50" y1="50" x2="6" y2="50" stroke="#ffffff" strokeWidth="0.7" opacity="0.3" />
        <line x1="50" y1="50" x2="50" y2="94" stroke="#ffffff" strokeWidth="0.7" opacity="0.15" />
      </svg>
    );
  }

  // Mono variants: cyan / white / dark
  const color =
    variant === "white" ? "#ffffff" : variant === "dark" ? "#0a0a0f" : "#00f0ff";

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Facets at different opacities for depth */}
      <polygon points={`${L} ${T} ${C}`} fill={color} opacity="0.25" />
      <polygon points={`${T} ${R} ${C}`} fill={color} opacity="0.15" />
      <polygon points={`${L} ${B} ${C}`} fill={color} opacity="0.08" />
      <polygon points={`${R} ${B} ${C}`} fill={color} opacity="0.05" />

      {/* Outer diamond */}
      <polygon
        points={`${T} ${R} ${B} ${L}`}
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* Internal edges */}
      <line x1="50" y1="50" x2="50" y2="6" stroke={color} strokeWidth="1" opacity="0.6" />
      <line x1="50" y1="50" x2="94" y2="50" stroke={color} strokeWidth="0.7" opacity="0.35" />
      <line x1="50" y1="50" x2="6" y2="50" stroke={color} strokeWidth="0.7" opacity="0.4" />
      <line x1="50" y1="50" x2="50" y2="94" stroke={color} strokeWidth="0.7" opacity="0.2" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  WORDMARK — "MINTORIA" text                                        */
/* ------------------------------------------------------------------ */

export function Wordmark({
  height = 32,
  variant = "white",
}: {
  height?: number;
  variant?: "white" | "cyan" | "dark" | "gradient";
}) {
  const id = `wm-${variant}-${height}`;
  const width = Math.round(height * 4.8);

  const fillColor =
    variant === "dark"
      ? "#0a0a0f"
      : variant === "cyan"
        ? "#00f0ff"
        : variant === "gradient"
          ? `url(#${id}-g)`
          : "#ffffff";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 384 80"
      fill="none"
    >
      {variant === "gradient" && (
        <defs>
          <linearGradient id={`${id}-g`} x1="0" y1="40" x2="384" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00f0ff" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      )}
      <text
        x="192"
        y="58"
        textAnchor="middle"
        fill={fillColor}
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontWeight="700"
        fontSize="56"
        letterSpacing="6"
      >
        MINTORIA
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  HORIZONTAL LOCKUP — logomark + wordmark side by side              */
/* ------------------------------------------------------------------ */

export function LogoHorizontal({
  height = 48,
  variant = "gradient",
}: {
  height?: number;
  variant?: "gradient" | "cyan" | "white" | "dark";
}) {
  const markSize = height;
  const wordHeight = height * 0.6;
  const gap = height * 0.3;

  const wordVariant = variant === "gradient" ? "white" : variant;

  return (
    <div className="inline-flex items-center" style={{ gap }}>
      <Logomark size={markSize} variant={variant} />
      <Wordmark height={wordHeight} variant={wordVariant} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  STACKED LOCKUP — logomark above wordmark, centred                 */
/* ------------------------------------------------------------------ */

export function LogoStacked({
  markSize = 80,
  variant = "gradient",
}: {
  markSize?: number;
  variant?: "gradient" | "cyan" | "white" | "dark";
}) {
  const wordHeight = markSize * 0.4;
  const gap = markSize * 0.15;

  const wordVariant = variant === "gradient" ? "white" : variant;

  return (
    <div className="inline-flex flex-col items-center" style={{ gap }}>
      <Logomark size={markSize} variant={variant} />
      <Wordmark height={wordHeight} variant={wordVariant} />
    </div>
  );
}
