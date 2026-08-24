"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ShieldAlert } from "lucide-react";
import { Button } from "./Button";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon = <ShieldAlert className="h-10 w-10 text-brand-orange" />,
  title,
  description,
  actionText,
  onAction,
  className,
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md", className)}>
      <div className="p-4 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto leading-relaxed mb-6">
        {description}
      </p>
      {actionText && (
        <Button variant="primary" size="sm" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
};
