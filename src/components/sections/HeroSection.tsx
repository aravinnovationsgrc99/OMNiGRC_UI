"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/motion";
import { FRAMEWORKS } from "@/lib/frameworks";

const AuroraBackground = dynamic(
  () => import("@/components/3d/AuroraBackground"),
  { ssr: false }
);

const IsometricHeroVisual = dynamic(
  () => import("@/components/3d/IsometricHeroVisual").then((m) => m.IsometricHeroVisual),
  { ssr: false }
);

export const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  // Gentle parallax — only Y axis, no scale, to avoid GPU subpixel blur during scroll
  const parallaxY = useTransform(scrollY, [0, 600], [0, -20]);
  return (
    <section className="relative min-h-[80svh] sm:min-h-[90svh] flex flex-col justify-between overflow-hidden bg-transparent pt-20 sm:pt-36 pb-8 sm:pb-16 transition-colors duration-300">
      {/* Global SVG Aurora Background handles full-bleed atmosphere */}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 w-full max-w-5xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center overflow-hidden"
      >
        {/* Eyebrow badge */}
        <motion.div
          variants={fadeIn}
          className="inline-flex items-center gap-1.5 self-center px-3 py-1 rounded-full border border-[#2E936F]/50 bg-[#2E936F]/15 text-[#D4521A] dark:border-teal/40 dark:bg-teal/10 dark:text-amber text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-widest uppercase mb-4 sm:mb-8 shadow-inner max-w-[92vw]"
        >
          <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#D4521A] dark:text-amber shrink-0" />
          <span className="truncate font-semibold text-[10px] sm:text-xs">THE CONNECTED GRC OPERATING LAYER</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={fadeIn}
          className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-navy-900 dark:text-white leading-[1.18] mb-4 sm:mb-6 max-w-4xl 2xl:max-w-6xl mx-auto break-words"
        >
          Unified risk, asset, and control management{" "}
          <span className="relative inline-block text-orange-600 dark:text-teal-400">
            for lean GRC teams.
            <svg
              className="absolute bottom-[-6px] left-0 w-full h-[4px] overflow-visible pointer-events-none"
              viewBox="0 0 100 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M1 5.5C25 2 75 7.5 99 2.5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeIn}
          className="text-xs sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-10 font-normal px-1 break-words"
        >
          Connect risk registers, asset inventories, control mapping, and compliance testing in one operating workflow. Advisory AI suggests; human oversight approves.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-12 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <Link href="/get-a-demo" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto min-h-[44px]" rightIcon={<ArrowRight className="h-5 w-5" />}>
              Request a Demo
            </Button>
          </Link>
          <a href="#core-workflows" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto min-h-[44px]">
              Explore OMNiGRC
            </Button>
          </a>
        </motion.div>

        {/* 3D Isometric Hero Visual with gentle parallax — translateZ(0) forces GPU layer to prevent subpixel blur */}
        <motion.div
          style={{ y: parallaxY, willChange: "transform" }}
          className="w-full max-w-full overflow-hidden"
          // Force GPU compositing layer to prevent subpixel drift that causes blur
        >
          <IsometricHeroVisual />
        </motion.div>
      </motion.div>

      {/* Documented Framework Coverage Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-full border-t border-[#E8C090] dark:border-navy-700/60 bg-[#F7D7B0]/60 dark:bg-[#0A111F]/80 py-4 sm:py-5 backdrop-blur-md mt-6"
      >
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#D4521A] dark:text-amber font-mono font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
            <ShieldCheck className="h-4 w-4 text-[#2E936F] dark:text-teal shrink-0" />
            <span>Documented Framework Coverage:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {FRAMEWORKS.map((fw) => (
              <div
                key={fw.code}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E8C090] dark:border-navy-700/60 bg-white/80 dark:bg-navy-900/80 text-[11px] font-medium text-slate-600 dark:text-slate-300"
              >
                <CheckCircle2 className="h-3 w-3 text-[#2E936F] dark:text-teal" />
                <span className="font-semibold text-navy-900 dark:text-white">{fw.name}</span>
              </div>
            ))}
          </div>

          <Link href="/frameworks/soc-2" className="text-xs text-[#2E936F] dark:text-teal hover:text-navy-900 dark:hover:text-white underline font-mono transition-colors">
            View Mapping Workflow →
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
