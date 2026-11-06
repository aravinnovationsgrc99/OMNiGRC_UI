import React from "react";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroWorkflowVisual } from "@/components/sections/HeroWorkflowVisual";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-transparent pt-6 sm:pt-10 md:pt-14 pb-3 sm:pb-4 transition-colors duration-300">
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-[#2E936F]/10 dark:bg-[#2E936F]/15 rounded-full blur-3xl pointer-events-none -z-10 opacity-40 sm:opacity-100" />
      <div className="absolute top-1/3 left-4 w-40 sm:w-80 h-40 sm:h-80 bg-[#F15E1C]/10 dark:bg-[#F15E1C]/15 rounded-full blur-3xl pointer-events-none -z-10 opacity-40 sm:opacity-100" />

      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Balanced Two-Column Composition on Desktop (lg:) / Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6 lg:gap-12 items-center">
          
          {/* LEFT CONTENT: Heading, Supporting Copy, CTAs */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            {/* 1. Main Heading */}
            <h1 className="text-[1.65rem] min-[360px]:text-[1.82rem] min-[385px]:text-[2rem] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-navy-900 dark:text-white leading-[1.14] text-center lg:text-left w-full">
              <span className="block whitespace-nowrap">Unified Risk, Asset</span>
              <span className="block whitespace-nowrap">And Control Management</span>
              <span className="block whitespace-nowrap">
                <span className="inline-block relative pb-1 sm:pb-1.5">
                  <span>for </span>
                  <span className="text-[#F15E1C] dark:text-[#F15E1C]">Lean GRC Teams.</span>
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] sm:h-[3px] bg-[#2E936F] rounded-full" />
                </span>
              </span>
            </h1>

            {/* 2. Supporting Copy */}
            <div className="space-y-2.5 sm:space-y-3 w-full text-center lg:text-left">
              <p className="text-base sm:text-xl md:text-2xl font-bold text-navy-900 dark:text-white tracking-tight leading-snug text-center lg:text-left">
                AI does the heavy lifting.{" "}
                <span className="text-[#F15E1C] font-extrabold">
                  You keep the final say.
                </span>
              </p>

              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200 font-medium leading-relaxed max-w-md sm:max-w-lg lg:max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                Unified risk, asset, and control management, where Advisory AI drafts and recommends, and your team approves every action.
              </p>
            </div>

            {/* 3. Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-start gap-3 sm:gap-3.5 pt-2 sm:pt-3 w-full">
              <Link href="/get-a-demo" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto h-[52px] sm:h-13 px-6 sm:px-7 text-sm sm:text-base font-bold rounded-2xl shadow-lg shadow-[#F15E1C]/20 hover:-translate-y-0.5 transition-all duration-200 text-center justify-center"
                  rightIcon={<CalendarCheck className="h-5 w-5 shrink-0 ml-1" />}
                >
                  Request A Walkthrough
                </Button>
              </Link>

              <a href="#how-it-works" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-[52px] sm:h-13 px-5 sm:px-6 text-sm sm:text-base font-bold rounded-2xl border-slate-300/80 dark:border-navy-700/80 bg-[#F5ECE5]/90 dark:bg-navy-900/80 hover:bg-[#EFE3D9] dark:hover:bg-navy-800 hover:-translate-y-0.5 transition-all duration-200 text-center justify-center text-navy-900 dark:text-slate-100"
                  rightIcon={<ArrowRight className="h-5 w-5 shrink-0 ml-1" />}
                >
                  See How It Works
                </Button>
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL: Compliance Pipeline Product Visual */}
          <div className="lg:col-span-6 w-full overflow-visible flex items-center justify-center pt-0 min-h-[460px] sm:min-h-[500px]">
            <HeroWorkflowVisual />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
