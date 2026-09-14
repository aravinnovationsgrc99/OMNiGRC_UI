"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "teal" | "amber" | "rose" | "success" | "warning" | "ai" | "peach" | "orange" | "neutral";
  size?: "sm" | "md";
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "teal",
  size = "sm",
  icon,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-1.5 font-mono font-semibold rounded-full border tracking-wide uppercase transition-all duration-150 hover:scale-105 cursor-default";

  const variants = {
    // Light: green fill/text. Dark: teal fill/text (unchanged)
    teal:
      "bg-[#2E936F]/15 text-[#2E936F] border-[#2E936F]/30 hover:border-[#2E936F]/60 " +
      "dark:bg-teal/15 dark:text-teal-300 dark:border-teal/30 dark:hover:border-teal/60",
    // Light: golden yellow fill, dark navy text (fill-only rule). Dark: amber (unchanged)
    amber:
      "bg-[#FAB60A]/20 text-navy-900 border-[#FAB60A]/40 hover:border-[#FAB60A]/70 " +
      "dark:bg-amber/15 dark:text-amber-300 dark:border-amber/30 dark:hover:border-amber/60",
    // success = green in light (same as teal remapped)
    success:
      "bg-[#2E936F]/15 text-[#2E936F] border-[#2E936F]/30 hover:border-[#2E936F]/60 " +
      "dark:bg-teal/15 dark:text-teal-300 dark:border-teal/30 dark:hover:border-teal/60",
    // warning = golden yellow fill in light, amber in dark (unchanged)
    warning:
      "bg-[#FAB60A]/20 text-navy-900 border-[#FAB60A]/40 hover:border-[#FAB60A]/70 " +
      "dark:bg-amber/15 dark:text-amber-300 dark:border-amber/30 dark:hover:border-amber/60",
    // ai = golden yellow fill in light
    ai:
      "bg-[#FAB60A]/20 text-navy-900 border-[#FAB60A]/40 hover:border-[#FAB60A]/70 " +
      "dark:bg-amber/15 dark:text-amber-300 dark:border-amber/30 dark:hover:border-amber/60",
    // peach = light yellow fill in light, amber in dark
    peach:
      "bg-[#FFEC69]/30 text-navy-900 border-[#FAB60A]/30 hover:border-[#FAB60A]/60 " +
      "dark:bg-amber/15 dark:text-amber-300 dark:border-amber/30 dark:hover:border-amber/60",
    // orange = orange tint badge in light, teal in dark
    orange:
      "bg-[#F15E1C]/12 text-[#D4521A] border-[#F15E1C]/25 hover:border-[#F15E1C]/50 " +
      "dark:bg-teal/15 dark:text-teal-300 dark:border-teal/30 dark:hover:border-teal/60",
    // rose: UNCHANGED in both modes
    rose:
      "bg-rose/15 text-rose-300 border-rose/30 hover:border-rose/60",
    // neutral: dark text on slate in light, slate in dark
    neutral:
      "bg-slate-100 text-navy-900 border-slate-200 hover:border-slate-300 " +
      "dark:bg-navy-800 dark:text-slate-300 dark:border-navy-700 dark:hover:border-navy-600",
  };

  const sizes = {
    sm: "text-[10px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
