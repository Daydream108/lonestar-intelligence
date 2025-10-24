import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className, id }) => {
  return (
    <section 
      id={id}
      className={`container mx-auto px-6 py-16 md:py-24 ${className || ''}`}
    >
      {children}
    </section>
  );
};