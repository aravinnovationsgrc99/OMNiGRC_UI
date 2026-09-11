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
    teal:
      "bg-teal/15 text-teal-300 border-teal/30 hover:border-teal/60",
    amber:
      "bg-amber/15 text-amber-300 border-amber/30 hover:border-amber/60",
    success:
      "bg-teal/15 text-teal-300 border-teal/30 hover:border-teal/60",
    warning:
      "bg-amber/15 text-amber-300 border-amber/30 hover:border-amber/60",
    ai:
      "bg-amber/15 text-amber-300 border-amber/30 hover:border-amber/60",
    peach:
      "bg-amber/15 text-amber-300 border-amber/30 hover:border-amber/60",
    orange:
      "bg-teal/15 text-teal-300 border-teal/30 hover:border-teal/60",
    rose:
      "bg-rose/15 text-rose-300 border-rose/30 hover:border-rose/60",
    neutral:
      "bg-navy-800 text-slate-300 border-navy-700 hover:border-navy-600",
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
