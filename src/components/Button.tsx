import React from "react";
import { Link, type LinkProps } from "react-router-dom";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";
type BaseProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

// BUTTON — renders <button>
type AsButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined;
    href?: undefined;
  };

// ROUTER LINK — renders <Link> (anchor semantics, no href)
type AsRouterLinkProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    to: LinkProps["to"];
    href?: undefined;
  };

// PLAIN ANCHOR — renders <a>
type AsAnchorProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    to?: undefined;
  };

export type ButtonProps = AsButtonProps | AsRouterLinkProps | AsAnchorProps;

const baseClasses =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "bg-black text-white hover:opacity-90 focus-visible:ring-black",
  secondary:
    "bg-white text-black border border-neutral-200 hover:bg-neutral-50 focus-visible:ring-neutral-300",
  ghost: "bg-transparent hover:bg-neutral-100 text-black",
};

export default function Button(props: ButtonProps) {
  const { children, className, variant = "primary" } = props;
  const classes = clsx(baseClasses, variants[variant], className);

  if ("to" in props && props.to !== undefined) {
    const { to, ...linkRest } = props as AsRouterLinkProps;
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorRest } = props as AsAnchorProps;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = props as AsButtonProps;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
