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
        "rounded-2xl border border-navy-700/60 bg-navy-900/80 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 w-full max-w-full",
        hoverable && "hover:border-teal/40 hover:bg-navy-900 hover:shadow-xl hover:shadow-teal/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
