"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FRAMEWORKS } from "@/lib/frameworks";

const AuroraBackground = dynamic(
  () => import("@/components/3d/AuroraBackground"),
  { ssr: false }
);

const HeroWorkflowVisual = dynamic(
  () => import("@/components/sections/HeroWorkflowVisual").then((m) => m.HeroWorkflowVisual),
  { ssr: false }
);

// Staggered motion variants for smooth, rapid entrance animation sequence (600-900ms total)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.03,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();

  // Scroll transitions for cinematic restrained feel during scroll
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0.88]);
  const heroY = useTransform(scrollY, [0, 450], [0, -18]);

  return (
    <section className="relative w-full overflow-hidden bg-transparent pt-16 sm:pt-28 md:pt-36 pb-6 sm:pb-12 transition-colors duration-300">
      {/* Aurora Ambient Background — tuned opacity for clean mobile readability */}
      <AuroraBackground className="opacity-25 sm:opacity-75 dark:opacity-40 pointer-events-none" />

      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-[#2E936F]/10 dark:bg-teal-400/10 rounded-full blur-3xl pointer-events-none -z-10 opacity-40 sm:opacity-100" />
      <div className="absolute top-1/3 left-4 w-40 sm:w-80 h-40 sm:h-80 bg-[#F15E1C]/10 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10 opacity-40 sm:opacity-100" />

      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 w-full max-w-5xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center"
      >
        {/* 1. Small positioning label / Eyebrow badge */}
        <motion.div variants={itemVariants} className="mb-3 sm:mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#2E936F]/40 bg-[#2E936F]/10 text-[#F15E1C] dark:border-teal/40 dark:bg-teal/10 dark:text-amber text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-widest uppercase shadow-sm max-w-[92vw]">
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#F15E1C] dark:text-amber shrink-0" />
            <span className="truncate font-semibold text-2xs sm:text-xs">THE CONNECTED GRC OPERATING LAYER</span>
          </div>
        </motion.div>

        {/* 2. Main Controlled Responsive Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-[clamp(2.35rem,8.2vw,3.25rem)] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-navy-900 dark:text-white leading-[1.12] sm:leading-[1.10] mb-4 sm:mb-6 max-w-[340px] xs:max-w-md sm:max-w-4xl 2xl:max-w-5xl mx-auto text-center"
        >
          <span className="block xs:inline">Unified risk,</span>{" "}
          <span className="block xs:inline">asset, and control</span>{" "}
          <span className="block xs:inline">management for</span>{" "}
          <span className="inline-block relative text-[#F15E1C] dark:text-teal-400 mt-0.5 xs:mt-0">
            lean GRC teams.
            <svg
              className="absolute bottom-[-3px] sm:bottom-[-6px] left-0 w-full h-[4px] sm:h-[6px] overflow-visible pointer-events-none opacity-85"
              viewBox="0 0 100 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M1 5.5C25 2 75 7.5 99 2.5"
                stroke="#2E936F"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        {/* 3. Supporting Copy */}
        <motion.div
          variants={itemVariants}
          className="mb-6 sm:mb-10 max-w-xl sm:max-w-2xl 2xl:max-w-3xl mx-auto px-2 space-y-2 sm:space-y-3"
        >
          {/* Sentence 1: Strong Supporting Statement */}
          <p className="text-base sm:text-xl md:text-2xl font-bold text-navy-900 dark:text-white tracking-tight leading-snug">
            AI does the heavy lifting.{" "}
            <span className="block xs:inline text-[#F15E1C] dark:text-teal-400 font-extrabold mt-0.5 xs:mt-0">
              You keep the final say.
            </span>
          </p>

          {/* Sentence 2: Calmer Description */}
          <p className="text-xs sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-lg sm:max-w-none mx-auto">
            Unified risk, asset, and control management — where Advisory AI drafts and recommends, and your team approves every action.
          </p>
        </motion.div>

        {/* 4. Hero CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 w-full max-w-[340px] sm:max-w-none mx-auto"
        >
          <Link href="/get-a-demo" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[280px] sm:min-w-0 h-[52px] sm:h-14 px-7 text-sm sm:text-base font-bold shadow-lg shadow-[#F15E1C]/20 hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
              rightIcon={<CalendarCheck className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />}
            >
              Request a Walkthrough
            </Button>
          </Link>

          <a href="#workflows-preview" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[280px] sm:min-w-0 h-[52px] sm:h-14 px-6 text-sm sm:text-base font-semibold border-slate-300 dark:border-navy-700/80 bg-white/80 dark:bg-navy-900/80 hover:bg-slate-100 dark:hover:bg-navy-800 hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
              rightIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />}
            >
              Explore Live Workflows
            </Button>
          </a>
        </motion.div>

        {/* 5. 3D Isometric Hero Visual */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-full overflow-hidden"
        >
          <HeroWorkflowVisual />
        </motion.div>
      </motion.div>

      {/* 6. Documented Framework Coverage Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="relative z-10 w-full border-t border-[#E8C090]/80 dark:border-navy-700/60 bg-[#F7D7B0]/50 dark:bg-[#0A111F]/80 py-3 sm:py-4 backdrop-blur-md mt-4 sm:mt-6"
      >
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-[#F15E1C] dark:text-amber font-mono font-semibold uppercase tracking-wider text-[10px] sm:text-xs">
            <ShieldCheck className="h-4 w-4 text-[#2E936F] dark:text-teal shrink-0" />
            <span>Documented Framework Coverage:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
            {FRAMEWORKS.map((fw) => (
              <div
                key={fw.code}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#E8C090] dark:border-navy-700/60 bg-white/90 dark:bg-navy-900/90 text-[10px] sm:text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="h-3 w-3 text-[#2E936F] dark:text-teal shrink-0" />
                <span className="font-semibold text-navy-900 dark:text-white">{fw.name}</span>
              </div>
            ))}
          </div>

          <Link
            href="/frameworks/soc-2"
            className="text-[11px] sm:text-xs text-[#2E936F] dark:text-teal hover:text-navy-900 dark:hover:text-white underline font-mono transition-colors font-semibold"
          >
            View Mapping Workflow →
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

