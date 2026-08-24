"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, Cpu, CheckCircle2, Zap, Server, Lock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const IsometricHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 sm:my-12 perspective-1000 px-2 sm:px-4">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute -inset-4 bg-gradient-to-r from-brand-orange/20 via-brand-gold/15 to-brand-green/20 blur-3xl opacity-60 rounded-full" />

      {/* Main Isometric 3D Board Surface */}
      <motion.div
        initial={{ opacity: 0, rotateX: 12, rotateY: -10, y: 30 }}
        animate={{ opacity: 1, rotateX: 8, rotateY: -6, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative rounded-3xl border border-brand-orange/30 bg-[#0F172A]/90 p-5 sm:p-8 shadow-2xl backdrop-blur-xl transform-gpu"
        style={{
          transformStyle: "preserve-3d",
          boxShadow: "0 25px 50px -12px rgba(241, 94, 28, 0.15), 0 0 30px rgba(15, 23, 42, 0.9)",
        }}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs font-mono text-slate-300 font-semibold pl-2">
              OMNiGRC Autonomous Posture Engine v4.2
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="success" icon={<Activity className="h-3 w-3 animate-pulse" />}>
              24/7 Telemetry Active
            </Badge>
          </div>
        </div>

        {/* Inner Grid Dashboard Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Posture Score Ring Card */}
          <div className="md:col-span-5 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                Global Trust Score
              </span>
              <Badge variant="orange">SOC 2 + ISO</Badge>
            </div>

            <div className="flex items-center justify-center my-4 relative">
              {/* Circular Gauge */}
              <div className="h-32 w-32 rounded-full border-4 border-brand-green/30 border-t-brand-green flex flex-col items-center justify-center relative shadow-lg shadow-brand-green/10">
                <span className="text-3xl font-extrabold text-white">99.4%</span>
                <span className="text-[9px] font-mono text-brand-green uppercase font-bold">Defensible</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <p className="text-[10px] text-slate-400">Controls Met</p>
                <p className="font-bold text-white">412 / 412</p>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <p className="text-[10px] text-slate-400">Vendor Risk</p>
                <p className="font-bold text-brand-green">0 Unmitigated</p>
              </div>
            </div>
          </div>

          {/* Real-time Telemetry Stream */}
          <div className="md:col-span-7 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <span className="text-[10px] font-mono text-brand-yellow uppercase tracking-wider font-bold flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-brand-orange" /> Real-time Evidence Sync
              </span>
              <span className="text-[10px] font-mono text-slate-400">Last check: 2s ago</span>
            </div>

            {[
              { node: "AWS Production Cloud", status: "MFA & Encryption Verified", icon: Server },
              { node: "Okta Identity Provider", status: "Deprovisioning Policy Enforced", icon: Lock },
              { node: "GitHub Code Repositories", status: "Secret Scanning Clean", icon: Cpu },
              { node: "ISO 42001 AI Model Registry", status: "LLM Privacy Guardrail Active", icon: ShieldCheck },
            ].map((stream, sIdx) => {
              const Icon = stream.icon;
              return (
                <div
                  key={sIdx}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon className="h-4 w-4 text-brand-orange shrink-0" />
                    <span className="font-medium text-slate-200 truncate">{stream.node}</span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-green flex items-center gap-1 shrink-0 ml-2">
                    <CheckCircle2 className="h-3 w-3 text-brand-green" /> {stream.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating 3D Depth Card Overlay (Desktop) */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:flex absolute -bottom-6 -right-6 rounded-2xl border border-brand-orange/40 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl items-center gap-3"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="p-2.5 rounded-xl bg-brand-orange/20 text-brand-orange">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">Autonomous TPRM Engine</p>
            <p className="text-[10px] text-brand-peach font-mono">100% Vendor SOC Reports Parsed</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
