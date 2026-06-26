"use client";

interface LogoMarkProps {
  size?: number;
  className?: string;
}

export const LogoMark = ({ size = 40, className = "" }: LogoMarkProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Hassan Javed"
  >
    <defs>
      <linearGradient id="hj-bg" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
      <linearGradient id="hj-shine" x1="0" y1="0" x2="0" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="white" stopOpacity="0.18" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Background */}
    <rect width="44" height="44" rx="11" fill="url(#hj-bg)" />

    {/* Glass sheen */}
    <rect x="2" y="2" width="40" height="19" rx="9.5" fill="url(#hj-shine)" />

    {/* Monogram "HJ" */}
    <text
      x="22"
      y="29"
      textAnchor="middle"
      fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      fontWeight="800"
      fontSize="19"
      letterSpacing="-0.5"
    >
      <tspan fill="white">H</tspan>
      <tspan fill="#a5f3fc">J</tspan>
    </text>

    {/* Three dots — code ellipsis accent */}
    <circle cx="16" cy="37.5" r="1.6" fill="white" fillOpacity="0.35" />
    <circle cx="22" cy="37.5" r="1.6" fill="white" fillOpacity="0.35" />
    <circle cx="28" cy="37.5" r="1.6" fill="white" fillOpacity="0.35" />
  </svg>
);

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

const Logo = ({ size = 40, showWordmark = true, className = "" }: LogoProps) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <LogoMark size={size} />
    {showWordmark && (
      <span className="text-xl font-bold gradient-text">Hassan.</span>
    )}
  </div>
);

export default Logo;
