import React from 'react';

interface MinacLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const MinacLogo: React.FC<MinacLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick,
}) => {
  // Brand colors from official logo
  const orange = '#FF4D00'; // Vibrant MINAC Orange
  const green = '#1F6836';  // MINAC Forest Green for letter 'N'
  const textWhite = '#F3F4F6';

  // Responsive viewBox and scaling
  const dimensions = {
    sm: { width: 175, height: showSubtitle ? 52 : 32 },
    md: { width: 235, height: showSubtitle ? 68 : 42 },
    lg: { width: 320, height: showSubtitle ? 92 : 56 },
    xl: { width: 440, height: showSubtitle ? 128 : 78 },
  }[size];

  const strokeWidth = 11;

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center select-none ${onClick ? 'cursor-pointer' : ''} transition-transform duration-200 hover:scale-[1.01] ${className}`}
      title="MINAC Equipamentos - Assistência Técnica Pilates e Fitness"
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={showSubtitle ? '0 0 610 178' : '0 0 610 102'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full max-w-full"
      >
        {/* ========================================================
            LETTER M (Orange)
            Left vertical bar + Right vertical bar + Drooping curve
           ======================================================== */}
        <g id="letter-M">
          {/* Left vertical pole */}
          <line
            x1="5.5"
            y1="5.5"
            x2="5.5"
            y2="94.5"
            stroke={orange}
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
          />
          {/* Right vertical pole */}
          <line
            x1="94.5"
            y1="5.5"
            x2="94.5"
            y2="94.5"
            stroke={orange}
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
          />
          {/* Drooping parabolic curve */}
          <path
            d="M 5.5 5.5 C 5.5 54, 28 70, 50 70 C 72 70, 94.5 54, 94.5 5.5"
            stroke={orange}
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
            fill="none"
          />
        </g>

        {/* ========================================================
            LETTER I (Orange)
            Solid vertical bar
           ======================================================== */}
        <g id="letter-I">
          <line
            x1="156"
            y1="5.5"
            x2="156"
            y2="94.5"
            stroke={orange}
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
          />
        </g>

        {/* ========================================================
            LETTER N (Forest Green)
            Rounded archway with two vertical legs
           ======================================================== */}
        <g id="letter-N">
          <path
            d="M 216 94.5 L 216 46 A 41 41 0 0 1 298 46 L 298 94.5"
            stroke={green}
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
            fill="none"
          />
        </g>

        {/* ========================================================
            LETTER A (Orange)
            Inverted chevron / V with rounded apex and no crossbar
           ======================================================== */}
        <g id="letter-A">
          <path
            d="M 358 94.5 L 401 12 Q 405.5 3 410 12 L 453 94.5"
            stroke={orange}
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* ========================================================
            LETTER C (Orange)
            Semicircle open to the right with horizontal arms
           ======================================================== */}
        <g id="letter-C">
          <path
            d="M 598 5.5 L 553.5 5.5 A 44.5 44.5 0 0 0 553.5 94.5 L 598 94.5"
            stroke={orange}
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
            fill="none"
          />
        </g>

        {/* ========================================================
            SUBTITLE TEXT (White / Off-white)
            ASSISTÊNCIA TÉCNICA
            PILATES E FITNESS
           ======================================================== */}
        {showSubtitle && (
          <g id="subtitle-group">
            {/* Line 1: ASSISTÊNCIA TÉCNICA */}
            <text
              x="598"
              y="136"
              textAnchor="end"
              fontFamily="Montserrat, 'Plus Jakarta Sans', system-ui, sans-serif"
              fontSize="23"
              fontWeight="600"
              letterSpacing="0.26em"
              fill={textWhite}
              opacity="0.95"
            >
              ASSISTÊNCIA TÉCNICA
            </text>

            {/* Line 2: PILATES E FITNESS */}
            <text
              x="598"
              y="168"
              textAnchor="end"
              fontFamily="Montserrat, 'Plus Jakarta Sans', system-ui, sans-serif"
              fontSize="23"
              fontWeight="600"
              letterSpacing="0.30em"
              fill={textWhite}
              opacity="0.95"
            >
              PILATES E FITNESS
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
