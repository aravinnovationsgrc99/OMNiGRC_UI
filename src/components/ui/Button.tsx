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
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] micro-btn";

  const variants = {
    // Light: Orange primary (#D4521A at md/sm for WCAG AA, #F15E1C for lg bold)
    // Dark: Teal (unchanged)
    primary:
      "bg-[#D4521A] text-white hover:bg-[#B8451A] hover:shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5 focus:ring-orange focus:ring-offset-white " +
      "dark:bg-teal dark:hover:bg-teal-600 dark:hover:shadow-teal/30 dark:focus:ring-teal dark:focus:ring-offset-[#0A111F]",
    // Light: Green secondary / ghost
    // Dark: Navy + teal border (unchanged)
    secondary:
      "border border-[#2E936F] text-[#2E936F] bg-white hover:bg-[#2E936F]/10 hover:border-[#25785A] hover:-translate-y-0.5 focus:ring-green focus:ring-offset-white " +
      "dark:bg-navy-900 dark:border-teal/40 dark:text-teal-300 dark:hover:bg-teal/10 dark:hover:border-teal dark:focus:ring-teal dark:focus:ring-offset-[#0A111F]",
    // Light: Slate outline with green accent on hover
    // Dark: Navy + slate (unchanged)
    outline:
      "border border-slate-300 text-navy-900 bg-white/80 hover:border-[#2E936F] hover:text-[#2E936F] hover:-translate-y-0.5 focus:ring-green focus:ring-offset-white " +
      "dark:bg-navy-900/60 dark:border-navy-700 dark:text-slate-200 dark:hover:bg-navy-800 dark:hover:border-teal/40 dark:hover:text-white dark:focus:ring-teal dark:focus:ring-offset-[#0A111F]",
    // No light-mode change: stays transparent text
    tertiary:
      "bg-transparent text-navy-700 hover:text-navy-900 hover:bg-slate-100 focus:ring-slate-300 focus:ring-offset-white " +
      "dark:text-slate-300 dark:hover:text-white dark:hover:bg-navy-800/60 dark:focus:ring-slate-600 dark:focus:ring-offset-[#0A111F]",
    // Destructive: rose unchanged in both modes
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
