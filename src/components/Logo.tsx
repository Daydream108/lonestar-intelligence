
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 380 60" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="LoneStar Intelligence Logo"
    >
      <path 
        d="M60 3 L67.06 21.54 L87.06 24.46 L73.53 38.45 L76.18 58.28 L60 48 L43.82 58.28 L46.47 38.45 L33 24.46 L52.94 21.54 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="miter"
      />
      <text 
        x="110" 
        y="25" 
        fontFamily="Inter, sans-serif" 
        fontSize="26" 
        fontWeight="bold" 
        fill="currentColor" 
        letterSpacing="3"
      >
        LONESTAR
      </text>
      <text 
        x="110" 
        y="55" 
        fontFamily="Inter, sans-serif" 
        fontSize="26" 
        fontWeight="bold" 
        fill="currentColor" 
        letterSpacing="3"
      >
        INTELLIGENCE
      </text>
    </svg>
  );
};
