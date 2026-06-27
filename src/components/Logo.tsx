import React from "react";

interface LogoProps {
  className?: string;
  glow?: boolean;
}

export default function Logo({ className = "w-16 h-16", glow = true }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer circular gold glowing aura */}
      {glow && (
        <div className="absolute inset-[5%] rounded-full bg-luxury-gold/20 blur-xl animate-pulse-slow" />
      )}
      
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]"
      >
        <defs>
          {/* Gold gradients */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F6E6B4" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#AA7C11" />
          </linearGradient>
          
          <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F6E6B4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
          </linearGradient>

          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Ring */}
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="url(#goldGrad)"
          strokeWidth="2"
          strokeDasharray="4 2"
          className="opacity-70 animate-[spin_120s_linear_infinite] origin-center"
          style={{ transformOrigin: "center" }}
        />
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="url(#goldGrad)"
          strokeWidth="1"
          className="opacity-40"
        />

        {/* Inner glow backdrop */}
        <circle
          cx="60"
          cy="60"
          r="46"
          fill="#121212"
          stroke="url(#goldGrad)"
          strokeWidth="1.5"
          className="shadow-inner"
        />

        {/* Elegant Backlit D&D cursive text paths */}
        <g filter="url(#neonGlow)">
          {/* First D */}
          <path
            d="M 32 38 C 32 30, 48 30, 48 45 C 48 60, 26 75, 52 82 C 55 83, 58 83, 61 80"
            stroke="url(#goldGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 34 38 C 34 32, 46 32, 46 45 C 46 56, 30 70, 48 78"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="opacity-90"
          />

          {/* Cursive Ampersand (&) */}
          <path
            d="M 58 56 C 54 52, 51 46, 55 42 C 58 39, 62 43, 59 48 C 55 54, 46 64, 52 70 C 55 73, 62 70, 65 64"
            stroke="url(#goldGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 57 55 C 55 52, 53 47, 55 44 C 57 41, 60 44, 58 48 C 55 53, 48 62, 52 68 C 54 70, 59 68, 62 64"
            stroke="#FFFFFF"
            strokeWidth="0.8"
            strokeLinecap="round"
            fill="none"
            className="opacity-80"
          />

          {/* Second D */}
          <path
            d="M 64 48 C 64 36, 82 34, 82 52 C 82 70, 58 78, 86 84 C 90 85, 93 84, 96 80"
            stroke="url(#goldGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 66 48 C 66 38, 80 36, 80 52 C 80 66, 62 74, 82 80"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="opacity-90"
          />
        </g>
      </svg>
    </div>
  );
}
