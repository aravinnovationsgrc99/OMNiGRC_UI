"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Moon, Sun, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export const DpdpLandingHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleScrollToForm = () => {
    const formElement = document.getElementById("lead-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstInput = document.getElementById("dpdp-full-name") as HTMLInputElement | null;
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 300);
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#0A111F]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-navy-700/80 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="OMNiGRC Home">
          <Image
            src="/omnigrc-logo.png"
            alt="OMNiGRC - Connected GRC Platform"
            width={180}
            height={56}
            className="h-9 sm:h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Right Action & Conversion CTA */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 text-[#2E936F] dark:text-teal-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DPDP Act 2023 Ready</span>
          </div>

          {/* Primary Quick CTA Button */}
          <button
            type="button"
            onClick={handleScrollToForm}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-[#F15E1C] hover:bg-[#D4521A] text-white font-bold text-xs shadow-sm hover:shadow transition-all group"
            aria-label="Scroll to demo booking form"
          >
            <span>Book a Free Demo</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Theme Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4 text-amber" /> : <Moon className="h-4 w-4 text-slate-700" />}
          </button>
        </div>
      </div>
    </header>
  );
};
