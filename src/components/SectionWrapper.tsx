import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
  as?: 'section' | 'aside' | 'article' | 'div';
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  id,
  ariaLabel,
  as: Tag = 'section',
}) => {
  return (
    <Tag id={id} aria-label={ariaLabel} className={clsx('py-16 md:py-24', className)}>
      <motion.div
        className="section-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </Tag>
  );
};
