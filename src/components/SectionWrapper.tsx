import React from 'react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className, id }) => {
  const { ref, isVisible } = useScrollFadeIn<HTMLElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      id={id}
      ref={ref}
      className={`container mx-auto px-6 py-16 md:py-24 transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'} ${className || ''}`}
    >
      {children}
    </section>
  );
};
