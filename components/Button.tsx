import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  href?: string;
  to?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', href, to, className, ...props }) => {
  const baseClasses = 'inline-block px-8 py-3 text-sm font-bold rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-[#0B1C2E] text-white border-2 border-transparent hover:bg-white hover:text-[#0B1C2E] hover:border-[#0B1C2E] focus:ring-[#0B1C2E]',
    secondary: 'bg-transparent text-[#0B1C2E] border-2 border-[#C0C7CF] hover:bg-gray-100 focus:ring-[#0B1C2E]',
    accent: 'bg-[#0B1C2E] text-white border-2 border-transparent hover:bg-white hover:text-[#0B1C2E] hover:border-[#0B1C2E] focus:ring-[#0B1C2E]'
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className || ''}`;

  if (to) {
    return (
      <Link to={to} className={finalClasses}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={finalClasses} target={props.target} rel={props.rel}>
        {children}
      </a>
    );
  }

  return (
    <button className={finalClasses} {...props}>
      {children}
    </button>
  );
};