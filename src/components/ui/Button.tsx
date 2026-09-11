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
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-150 cubic-bezier(0.16, 1, 0.3, 1) focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A111F] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] micro-btn";

  const variants = {
    primary:
      "bg-teal text-white hover:bg-teal-600 hover:shadow-lg hover:shadow-teal/30 hover:-translate-y-0.5 focus:ring-teal",
    secondary:
      "bg-navy-900 border border-teal/40 text-teal-300 hover:bg-teal/10 hover:border-teal hover:-translate-y-0.5 focus:ring-teal",
    outline:
      "bg-navy-900/60 border border-navy-700 text-slate-200 hover:bg-navy-800 hover:border-teal/40 hover:text-white hover:-translate-y-0.5 focus:ring-teal",
    tertiary:
      "bg-transparent text-slate-300 hover:text-white hover:bg-navy-800/60 focus:ring-slate-600",
    destructive:
      "bg-rose text-white hover:bg-rose-600 hover:shadow-md hover:shadow-rose/20 hover:-translate-y-0.5 focus:ring-rose-500",
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
