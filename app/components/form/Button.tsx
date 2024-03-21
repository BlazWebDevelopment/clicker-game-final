import { Link } from "@remix-run/react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import React from "react";
// components
import LoadingSpinner from "./LoadingSpinner";

import { cn } from "~/utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "contained" | "outlined" | "text" | "soft";
  size?: "xSmall" | "small" | "medium" | "large";
  color?: keyof typeof variantStyles.contained;
  type?: "submit" | "reset" | "button";
  loading?: boolean;
  to?: string;
  target?: string;
  disabled?: boolean;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  onClick?: VoidFunction;
  children?: ReactNode;
}

const baseStyles = {
  contained:
    "group inline-flex items-center justify-center rounded-lg py-2 px-4 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  outlined:
    "group inline-flex ring-1 items-center justify-center rounded-lg py-2 px-4 text-sm focus:outline-none",
  text: "group inline-flex items-center justify-center rounded-lg py-2 px-4 text-sm focus:outline-none",
  soft: "group inline-flex items-center justify-center rounded-lg py-2 px-4 text-sm focus:outline-none",
};

export const variantStyles = {
  contained: {
    primary:
      "bg-primary-100 text-mystic-10 hover:bg-primary-90 hover:text-mystic-10 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
    secondary:
      "bg-secondary-100 text-mystic-10 hover:bg-secondary-90 hover:text-mystic-10 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
    tertiary:
      "bg-skyblue-100 text-mystic-10 hover:bg-skyblue-90 hover:text-mystic-10 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
  },
  outlined: {
    primary:
      "ring-primary-100 text-primary-100 hover:ring-primary-90 hover:bg-primary-10 dark:hover:bg-primary-100/5 active:ring-primary-100 active:text-primary-100 focus-visible:outline-white",
    secondary:
      "ring-secondary-100 text-secondary-100 hover:ring-secondary-90 hover:bg-secondary-10 dark:hover:bg-secondary-100/5 active:ring-secondary-100 active:text-secondary-100 focus-visible:outline-white",
    tertiary:
      "ring-skyblue-100 text-skyblue-100 hover:ring-skyblue-90 hover:bg-skyblue-10 dark:hover:bg-skyblue-100/5 active:ring-skyblue-100 active:text-skyblue-100 focus-visible:outline-white",
  },
  text: {
    primary:
      "bg-white dark:bg-transparent dark:hover:bg-primary-100/5 text-primary-100 hover:bg-primary-10 active:bg-primary-200 active:text-primary-900 focus-visible:outline-white",
    secondary:
      "bg-white dark:bg-transparent dark:hover:bg-secondary-100/5 text-secondary-100 hover:bg-secondary-10 active:bg-secondary-200 active:text-secondary-900 focus-visible:outline-white",
    tertiary:
      "bg-white dark:bg-transparent dark:text-skyblue-10 dark:hover:bg-skyblue-100/10 text-skyblue-100 hover:bg-skyblue-10 active:bg-skyblue-200 active:text-skyblue-900 focus-visible:outline-white",
  },
  soft: {
    primary:
      "bg-primary-10 dark:bg-primary-100/5 dark:hover:bg-primary-100/10 text-primary-100 hover:bg-primary-20 active:bg-primary-200 active:text-primary-900 focus-visible:outline-white",
    secondary:
      "bg-secondary-10 dark:bg-secondary-100/5 dark:hover:bg-secondary-100/10 text-secondary-100 hover:bg-secondary-20 active:bg-secondary-200 active:text-secondary-900 focus-visible:outline-white",
    tertiary:
      "bg-skyblue-10 dark:bg-skyblue-100/5 dark:hover:bg-skyblue-100/10 text-skyblue-100 hover:bg-skyblue-20 active:bg-skyblue-200 active:text-skyblue-900 focus-visible:outline-white",
  },
};

const sizeStyles = {
  xSmall: "h-6 py-1 px-2",
  small: "h-8 py-2 px-3",
  medium: "h-9 py-2 px-4",
  large: "h-11 py-2 px-6",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "contained",
    color = "primary",
    size = "medium",
    children,
    className,
    endIcon,
    startIcon,
    loading = false,
    disabled = false,
    type,
    target,
    to,
    onClick,
    ...rest
  },
  ref
) {
  return (
    <>
      {to ? (
        <Link
          to={to}
          className={cn(
            sizeStyles[size],
            baseStyles[variant],
            variantStyles?.[variant]?.[color],
            className
          )}
          target={target}
        >
          {startIcon && <span className="mr-1">{startIcon}</span>}
          {children}
          {endIcon && <span className="ml-1">{endIcon}</span>}
        </Link>
      ) : (
        <button
          ref={ref}
          disabled={disabled}
          onClick={onClick}
          className={cn(
            sizeStyles[size],
            baseStyles[variant],
            variantStyles?.[variant]?.[color],
            disabled &&
              "bg-skyblue-10 hover:bg-skyblue-10 dark:bg-skyblue-60 dark:hover:bg-skyblue-60",
            loading &&
              "bg-skyblue-10 hover:bg-skyblue-10 dark:bg-skyblue-60 dark:hover:bg-skyblue-60",
            className
          )}
          {...rest}
        >
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              {startIcon && <span className="mr-1">{startIcon}</span>}
              {children}
              {endIcon && <span className="ml-1">{endIcon}</span>}{" "}
            </>
          )}
        </button>
      )}
    </>
  );
});

export default Button;
