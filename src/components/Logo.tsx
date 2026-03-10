import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="LoneStar Intelligence Logo">
      <svg viewBox="0 0 60 60" className="h-8 w-8 text-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30,2.5 L38.5,19.5 L57.5,22 L43,35 L46.5,53.5 L30,44 L13.5,53.5 L17,35 L2.5,22 L21.5,19.5 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="miter"
        />
      </svg>
      <div className="text-left leading-none">
        <p className="text-lg font-bold tracking-[.02em] uppercase">LONESTAR</p>
        <p className="text-[11px] font-semibold tracking-[.08em] uppercase">INTELLIGENCE</p>
      </div>
    </div>
  );
};
