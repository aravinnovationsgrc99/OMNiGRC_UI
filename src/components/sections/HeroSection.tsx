"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { IsometricHeroVisual } from "@/components/3d/IsometricHeroVisual";
import { Button } from "@/components/ui/Button";

const documentedFrameworks = [
  { name: "ISO 27001:2022", badge: "ISMS Global" },
  { name: "SOC 2 Type II", badge: "Trust Services Criteria" },
  { name: "GDPR / UK GDPR", badge: "Privacy & Data Protection" },
  { name: "DPDP Act 2023", badge: "India Data Protection" },
  { name: "Essential 8", badge: "Cyber Mitigation" },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#0B0F17] pt-28 sm:pt-36 pb-12 sm:pb-16">
      {/* Background Animated Gradient Orbs using approved colors */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] sm:h-[600px] w-[90vw] max-w-[900px] rounded-full bg-gradient-to-br from-brand-orange/30 via-brand-gold/15 to-transparent blur-[100px] sm:blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.05, 0.95, 1.05],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -left-20 sm:-left-40 h-[300px] sm:h-[450px] w-[300px] sm:w-[450px] max-w-[80vw] rounded-full bg-brand-green/20 blur-[80px] sm:blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 self-center px-3.5 sm:px-4 py-1.5 rounded-full border border-brand-orange/40 bg-brand-orange/10 text-brand-yellow text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-6 sm:mb-8 shadow-inner max-w-[90vw]"
        >
          <Sparkles className="h-3.5 w-3.5 text-brand-gold shrink-0" />
          <span className="truncate font-semibold">THE CONNECTED GRC OPERATING LAYER</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-5 sm:mb-6 max-w-4xl 2xl:max-w-6xl mx-auto"
        >
          Unified risk, asset, and control management{" "}
          <span className="bg-gradient-to-r from-brand-orange via-brand-gold to-brand-yellow bg-clip-text text-transparent">
            for lean GRC teams.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal"
        >
          Connect risk registers, asset inventories, control mapping, and compliance testing in one operating workflow. Advisory AI suggests; human oversight approves.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 w-full max-w-md sm:max-w-none mx-auto"
        >
          <Link href="/get-a-demo" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto" rightIcon={<ArrowRight className="h-5 w-5" />}>
              Request a Demo
            </Button>
          </Link>
          <a href="#core-workflows" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Explore OMNiGRC
            </Button>
          </a>
        </motion.div>

        {/* 3D Isometric Hero Visual */}
        <IsometricHeroVisual />
      </div>

      {/* Documented Framework Coverage Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 w-full border-t border-slate-800/80 bg-slate-950/60 py-4 sm:py-5 backdrop-blur-md mt-6"
      >
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-brand-yellow font-mono font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
            <ShieldCheck className="h-4 w-4 text-brand-green shrink-0" />
            <span>Documented Framework Coverage:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {documentedFrameworks.map((fw, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/80 text-[11px] font-medium text-slate-300"
              >
                <CheckCircle2 className="h-3 w-3 text-brand-green" />
                <span className="font-semibold text-white">{fw.name}</span>
              </div>
            ))}
          </div>

          <Link href="/frameworks/soc-2" className="text-xs text-brand-orange hover:text-white underline font-mono transition-colors">
            View Mapping Workflow →
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
