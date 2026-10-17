import React from 'react';

interface BackgroundArcsProps {
  variant?: 'hero' | 'footer';
  className?: string;
}

export const BackgroundArcs: React.FC<BackgroundArcsProps> = ({
  variant = 'hero',
  className = '',
}) => {
  // Brand colors from official MINAC logo
  const orange = '#FF4D00';
  const green = '#1F6836';

  if (variant === 'footer') {
    return (
      <div
        className={`pointer-events-none select-none overflow-hidden ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 260 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-90"
        >
          {/* Inner green arc matching 'N' in logo */}
          <circle
            cx="260"
            cy="260"
            r="160"
            stroke={green}
            strokeWidth="15"
            strokeOpacity="0.85"
          />
          {/* Outer orange arc matching 'M I A C' in logo */}
          <circle
            cx="260"
            cy="260"
            r="205"
            stroke={orange}
            strokeWidth="16"
            strokeOpacity="0.95"
          />
          {/* Subtle outer glow arc */}
          <circle
            cx="260"
            cy="260"
            r="240"
            stroke={orange}
            strokeWidth="3"
            strokeOpacity="0.3"
          />
        </svg>
      </div>
    );
  }

  // Hero variant: twin swooping concentric arcs in brand orange and green
  return (
    <div
      className={`pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="heroOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4D00" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#EA580C" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#C2410C" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="heroGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#258244" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#1F6836" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#144624" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Outer Orange Curve */}
        <path
          d="M 120 -50 C 340 -30 520 120 540 380"
          stroke="url(#heroOrangeGrad)"
          strokeWidth="16"
          strokeLinecap="round"
        />

        {/* Inner Green Curve (matching letter N in logo) */}
        <path
          d="M 170 -10 C 340 30 460 160 480 390"
          stroke="url(#heroGreenGrad)"
          strokeWidth="14"
          strokeLinecap="round"
        />

        {/* Ambient warm radial glow in the center */}
        <circle cx="340" cy="180" r="160" fill="#FF4D00" opacity="0.04" filter="blur(60px)" />
      </svg>
    </div>
  );
};
