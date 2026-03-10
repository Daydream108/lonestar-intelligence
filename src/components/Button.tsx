import React from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonAsButton = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  to?: undefined;
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

type ButtonAsLink = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  to: LinkProps['to'];
  href?: undefined;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'>;

type ButtonAsAnchor = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  href: string;
  to?: undefined;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'>;

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-gold text-white hover:brightness-110 shadow-md',
  secondary: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
  ghost: 'border border-white text-white hover:bg-white hover:text-navy',
};

export default function Button(props: ButtonProps) {
  const { children, className, variant = 'primary' } = props;
  const classes = clsx(
    'inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed',
    variantStyles[variant],
    className
  );

  if ('to' in props && props.to !== undefined) {
    const { to, variant: _v, className: _c, children: _ch, ...linkRest } = props as ButtonAsLink;
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href !== undefined) {
    const { href, variant: _v, className: _c, children: _ch, ...anchorRest } = props as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { variant: _v, className: _c, children: _ch, to: _t, href: _h, ...buttonRest } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
