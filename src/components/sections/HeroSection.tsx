"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { IsometricHeroVisual } from "@/components/3d/IsometricHeroVisual";
import { Button } from "@/components/ui/Button";

const frameworks = [
  { name: "SOC 2 Type II", badge: "SOC 2" },
  { name: "ISO 27001:2022", badge: "ISO 27001" },
  { name: "HIPAA Privacy", badge: "HIPAA" },
  { name: "GDPR Compliance", badge: "GDPR" },
  { name: "PCI DSS v4.0", badge: "PCI DSS" },
  { name: "DPDP Act 2023", badge: "DPDP" },
  { name: "NIST CSF 2.0", badge: "NIST" },
  { name: "CSA STAR Level 2", badge: "CSA STAR" },
  { name: "HITRUST CSF", badge: "HITRUST" },
  { name: "CCPA / CPRA", badge: "CCPA" },
  { name: "ISO 42001 AI", badge: "ISO 42001" },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#0B0F17] pt-28 sm:pt-36 pb-12 sm:pb-16">
      {/* Background Animated Gradient Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] sm:h-[600px] w-[90vw] max-w-[900px] rounded-full bg-gradient-to-br from-brand-orange/30 via-brand-gold/20 to-transparent blur-[100px] sm:blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.15, 0.3, 0.15],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
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
          <Sparkles className="h-3.5 w-3.5 text-brand-yellow animate-pulse shrink-0" />
          <span className="truncate font-semibold">AUTONOMOUS TRUST PLATFORM</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold tracking-tight text-white leading-[1.1] mb-5 sm:mb-6 max-w-4xl 2xl:max-w-6xl mx-auto"
        >
          Trust doesn&apos;t wait for your next audit.{" "}
          <span className="bg-gradient-to-r from-brand-orange via-brand-gold to-brand-yellow bg-clip-text text-transparent">
            Neither does OMNiGRC.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-slate-300 max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal"
        >
          The world&apos;s first Autonomous Trust Platform. OMNiGRC detects change across your posture, determines what&apos;s at risk, and acts — across compliance, vendor risk, AI governance, and more — so your organization stays trustworthy without operational chaos.
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
              Book a demo
            </Button>
          </Link>
          <Link href="/products/audit-management" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Platform Features
            </Button>
          </Link>
        </motion.div>

        {/* 3D Isometric Hero Visual */}
        <IsometricHeroVisual />
      </div>

      {/* Framework Badges Marquee Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 w-full border-t border-slate-800/80 bg-slate-950/60 py-4 sm:py-6 backdrop-blur-md mt-8"
      >
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 mb-2.5 sm:mb-3 flex items-center justify-between text-[11px] sm:text-xs text-slate-400 font-mono">
          <span className="tracking-widest uppercase text-brand-yellow font-semibold flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-green" /> 200+ FRAMEWORKS & CUSTOM CONTROLS
          </span>
          <Link href="/frameworks/soc-2" className="hover:text-brand-orange underline transition-colors">
            View All Frameworks →
          </Link>
        </div>

        {/* Continuous Marquee Wrapper */}
        <div className="relative flex overflow-x-hidden no-scrollbar py-1.5">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-[#0B0F17] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-[#0B0F17] to-transparent" />

          <div className="flex animate-marquee space-x-3 sm:space-x-4 shrink-0">
            {frameworks.concat(frameworks).map((fw, idx) => (
              <Link
                key={idx}
                href="/frameworks/soc-2"
                className="group flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold text-slate-300 shadow-sm transition-all duration-300 hover:border-brand-orange hover:bg-brand-orange/10 hover:text-white hover:scale-105 shrink-0"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-brand-green group-hover:animate-ping" />
                <span className="whitespace-nowrap">{fw.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
