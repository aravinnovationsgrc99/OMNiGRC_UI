"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "destructive" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-150 cubic-bezier(0.16, 1, 0.3, 1) focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0F17] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] micro-btn";

  const variants = {
    primary:
      "bg-brand-orange text-white hover:bg-brand-orange/95 hover:shadow-lg hover:shadow-brand-orange/30 hover:-translate-y-0.5 focus:ring-brand-orange",
    secondary:
      "bg-slate-900 border border-brand-green/40 text-brand-green hover:bg-brand-green/10 hover:border-brand-green hover:-translate-y-0.5 focus:ring-brand-green",
    outline:
      "bg-slate-900/60 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-brand-orange/40 hover:text-white hover:-translate-y-0.5 focus:ring-brand-orange",
    tertiary:
      "bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/60 focus:ring-slate-600",
    destructive:
      "bg-red-600 text-white hover:bg-red-700 hover:shadow-md hover:shadow-red-600/20 hover:-translate-y-0.5 focus:ring-red-500",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-xs sm:text-sm px-4 py-2.5 gap-2",
    lg: "text-sm sm:text-base px-6 py-3.5 gap-2.5",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin shrink-0" />
      ) : (
        <>
          {leftIcon && <span className="shrink-0 transition-transform duration-150 group-hover:-translate-x-0.5">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0 transition-transform duration-150 group-hover:translate-x-0.5">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
