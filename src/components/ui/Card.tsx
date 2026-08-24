"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverable = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-800/90 bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 w-full max-w-full",
        hoverable && "hover:border-brand-orange/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-brand-orange/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
