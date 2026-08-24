"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "success" | "warning" | "ai" | "peach" | "orange" | "neutral";
  size?: "sm" | "md";
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "success",
  size = "sm",
  icon,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-1.5 font-mono font-semibold rounded-full border tracking-wide uppercase";

  const variants = {
    success:
      "bg-brand-green/15 text-brand-green border-brand-green/30",
    warning:
      "bg-brand-gold/15 text-brand-gold border-brand-gold/30",
    ai:
      "bg-brand-yellow/15 text-brand-yellow border-brand-yellow/30",
    peach:
      "bg-brand-peach/15 text-brand-peach border-brand-peach/30",
    orange:
      "bg-brand-orange/15 text-brand-orange border-brand-orange/30",
    neutral:
      "bg-slate-800 text-slate-300 border-slate-700",
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
