"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Layers,
  Database,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Server,
  FileCheck,
  AlertTriangle,
  Lock,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

type ActiveTab = "overview" | "risk" | "control" | "framework";

import { FRAMEWORKS } from "@/lib/frameworks";

export const IsometricHeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");

  return (
    <div className="relative w-full max-w-5xl mx-auto my-6 sm:my-12 px-1 sm:px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -inset-6 bg-gradient-to-r from-teal/20 via-amber/15 to-teal/20 blur-3xl opacity-70 rounded-3xl" />

      {/* Main Dashboard Card — no 3D rotateX/Y to prevent subpixel blur during scroll */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative rounded-2xl sm:rounded-3xl border border-teal/30 bg-navy-900/95 dark:bg-navy/95 p-3.5 sm:p-7 shadow-2xl backdrop-blur-2xl w-full max-w-full overflow-hidden"
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          boxShadow:
            "0 25px 50px -12px rgba(15, 110, 106, 0.2), 0 0 40px rgba(22, 35, 63, 0.95)",
        }}
      >
        {/* Top Operational Status Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-700 dark:border-slate-800 pb-3.5 mb-5 gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-teal" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber" />
              <div className="h-2.5 w-2.5 rounded-full bg-teal" />
            </div>
            <span className="text-xs font-mono text-slate-300 font-semibold pl-1">
              OMNiGRC Connected Operating System
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal/15 border border-teal/30 text-[11px] font-mono text-teal font-medium">
              <Eye className="h-3 w-3" /> Human-in-the-Loop Active
            </span>
            <Badge variant="teal" size="sm">
              Tenant Isolated
            </Badge>
          </div>
        </div>

        {/* Tab Switcher for Operational Perspective */}
        <div className="flex items-center gap-2 mb-5 overflow-x-auto no-scrollbar pb-1">
          {[
            { id: "overview", label: "Connected GRC Flow" },
            { id: "risk", label: "Risk Register & Heatmap" },
            { id: "control", label: "Control Mapping & AI Suggest" },
            { id: "framework", label: "5 Supported Frameworks" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ActiveTab)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-[#2E936F] dark:bg-teal text-white shadow-lg shadow-[#2E936F]/30 ring-1 ring-white/20"
                  : "bg-[#1A2333] text-slate-200 hover:text-white hover:bg-slate-800 border border-slate-700/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content based on Active Tab */}
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4"
            >
              {/* Node 1: Risk & Asset Layer */}
              <div className="md:col-span-4 rounded-2xl border border-slate-700/60 bg-[#1A2333] p-4 space-y-3 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FAB60A] font-bold flex items-center gap-1">
                      <AlertTriangle className="h-3.5 w-3.5 text-[#FAB60A]" /> Risk & Asset Layer
                    </span>
                    <span className="text-[10px] font-mono text-slate-300 font-medium">Live Posture</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 tracking-tight">Connected Asset Inventory</h4>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-[#0F172A] border border-slate-700/60 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Server className="h-3.5 w-3.5 text-[#2E936F] shrink-0" />
                        <span className="text-slate-100 font-semibold truncate">Production Cloud DB</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-300">Asset #41</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#0F172A] border border-slate-700/60 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="h-3.5 w-3.5 text-[#FAB60A] shrink-0" />
                        <span className="text-slate-100 font-semibold truncate">Customer PII Store</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#FAB60A] font-bold">High Impact</span>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#2E936F]/15 border border-[#2E936F]/40 text-[11px]">
                  <p className="font-bold text-[#FAB60A]">Risk Linkage:</p>
                  <p className="text-[10px] text-slate-300 font-medium">Linked to 4 controls & 2 active treatment plans</p>
                </div>
              </div>

              {/* Node 2: Advisory AI Mapping Engine */}
              <div className="md:col-span-5 rounded-2xl border border-[#2E936F]/50 bg-[#1A2333] p-4 space-y-3 relative overflow-hidden shadow-lg">
                <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2E936F] dark:text-teal font-bold flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#FAB60A]" /> Advisory AI Control Matcher
                  </span>
                  <Badge variant="ai" size="sm">
                    Advisory Only
                  </Badge>
                </div>

                <div className="p-3 rounded-xl bg-[#0F172A] border border-teal/40">
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-bold text-white">CTRL-084: Mandatory MFA & Passkeys</span>
                    <span className="font-mono text-[#2E936F] dark:text-teal text-[10px] font-bold">94% Match</span>
                  </div>
                  <p className="text-[10px] text-slate-300 mb-2">
                    Internal control mapped once. AI suggests matching clauses:
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 text-[10px] font-mono">
                    <span className="p-1.5 rounded-lg bg-[#1E293B] text-slate-200 font-semibold border border-slate-700/60">
                      ISO 27001: A.9.4.2
                    </span>
                    <span className="p-1.5 rounded-lg bg-[#1E293B] text-slate-200 font-semibold border border-slate-700/60">
                      SOC 2: CC6.1
                    </span>
                    <span className="p-1.5 rounded-lg bg-[#1E293B] text-slate-200 font-semibold border border-slate-700/60">
                      DPDP: Sec 8(5)
                    </span>
                    <span className="p-1.5 rounded-lg bg-[#1E293B] text-slate-200 font-semibold border border-slate-700/60">
                      ISO 42001: A.7.3
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0F172A] border border-slate-700/60 text-[11px]">
                  <span className="text-slate-300 font-medium">Analyst Review:</span>
                  <span className="text-[#2E936F] dark:text-teal font-bold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Approved by GRC Lead
                  </span>
                </div>
              </div>

              {/* Node 3: Compliance & Testing Cadence */}
              <div className="md:col-span-3 rounded-2xl border border-slate-700/60 bg-[#1A2333] p-4 flex flex-col justify-between space-y-3 shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2E936F] dark:text-teal font-bold flex items-center gap-1">
                      <FileCheck className="h-3.5 w-3.5" /> Testing Board
                    </span>
                    <span className="text-[10px] font-mono text-slate-300 font-medium">Rolling 30d</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 tracking-tight">Evidence Cadence</h4>
                  <div className="space-y-2 text-[11px]">
                    <div className="p-2.5 rounded-xl bg-[#0F172A] border border-slate-700/60">
                      <p className="font-bold text-slate-100">Access Review</p>
                      <p className="text-[10px] text-[#2E936F] dark:text-teal font-semibold">Passed • Verified 2d ago</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#0F172A] border border-slate-700/60">
                      <p className="font-bold text-slate-100">Encryption Audit</p>
                      <p className="text-[10px] text-[#FAB60A] font-semibold">Due in 14 days</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-[10px] font-mono text-slate-300">
                  <span className="font-medium">5 Frameworks</span>
                  <span className="text-[#FAB60A] font-bold">100% Auditable</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "risk" && (
            <motion.div
              key="risk"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4"
            >
              <div className="md:col-span-7 rounded-2xl border border-slate-700/60 bg-[#1A2333] p-4 shadow-lg">
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-rose" /> 5x5 Risk Heatmap & Register
                </h4>
                <p className="text-xs text-slate-300 mb-4 font-medium">
                  Log, score (Likelihood × Impact), and evaluate residual risk after applying security controls.
                </p>
                <div className="grid grid-cols-5 gap-1 sm:gap-2 text-center text-xs font-mono">
                  {[
                    { lvl: "Critical", score: 25 }, { lvl: "Critical", score: 20 }, { lvl: "High", score: 15 }, { lvl: "High", score: 12 }, { lvl: "Med", score: 10 },
                    { lvl: "Critical", score: 20 }, { lvl: "High", score: 16 }, { lvl: "High", score: 12 }, { lvl: "Med", score: 8 }, { lvl: "Med", score: 6 },
                    { lvl: "High", score: 15 }, { lvl: "High", score: 12 }, { lvl: "Med", score: 9 }, { lvl: "Med", score: 6 }, { lvl: "Low", score: 4 },
                    { lvl: "Med", score: 10 }, { lvl: "Med", score: 8 }, { lvl: "Med", score: 6 }, { lvl: "Low", score: 4 }, { lvl: "Low", score: 2 },
                    { lvl: "Low", score: 5 }, { lvl: "Low", score: 4 }, { lvl: "Low", score: 3 }, { lvl: "Low", score: 2 }, { lvl: "Low", score: 1 }
                  ].map((cell, idx) => (
                    <div
                      key={idx}
                      className={`py-2 sm:py-3.5 px-0.5 sm:px-1 rounded-lg font-bold transition-all flex flex-col items-center justify-center ${
                        cell.lvl === "Critical"
                          ? "bg-rose/80 text-white border border-rose shadow-md shadow-rose/40"
                          : cell.lvl === "High"
                          ? "bg-amber/25 text-[#FAB60A] border border-amber/50"
                          : cell.lvl === "Med"
                          ? "bg-amber/15 text-[#FAB60A] border border-amber/30"
                          : "bg-teal/15 text-[#2E936F] dark:text-teal-300 border border-teal/30"
                      }`}
                    >
                      <span className="text-[10px] sm:text-[11px] leading-none">{cell.score}</span>
                      <span className="text-[8px] sm:text-[9px] opacity-90 font-sans mt-0.5">{cell.lvl[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5 rounded-2xl border border-slate-700/60 bg-[#1A2333] p-4 flex flex-col justify-between shadow-lg">
                <div>
                  <span className="text-[10px] font-mono text-[#FAB60A] uppercase font-bold">Active Risk Items</span>
                  <div className="space-y-2 mt-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-[#0F172A] border border-slate-700/60">
                      <p className="font-bold text-white">RSK-102: Vendor API Downtime</p>
                      <p className="text-[10px] text-slate-300 font-medium">Score: 16 (High) → Residual: 6 (Low)</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#0F172A] border border-slate-700/60">
                      <p className="font-bold text-white">RSK-088: Cloud Access Drift</p>
                      <p className="text-[10px] text-slate-300 font-medium">Score: 20 (Critical) → Mitigated</p>
                    </div>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#2E936F]/15 border border-[#2E936F]/30 text-[11px] text-[#2E936F] dark:text-teal-300 font-mono font-bold">
                  All risks map directly to controls & assets
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "control" && (
            <motion.div
              key="control"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4"
            >
              <div className="md:col-span-6 rounded-2xl border border-[#2E936F]/40 bg-[#1A2333] p-4 shadow-lg">
                <span className="text-[10px] font-mono uppercase text-[#FAB60A] font-bold">1. Control Definition</span>
                <div className="mt-2 p-3 rounded-xl bg-[#0F172A] border border-slate-700/60 space-y-2">
                  <p className="text-xs font-bold text-white">CTRL-019: Automated Patch Management</p>
                  <p className="text-[11px] text-slate-200 font-medium">
                    &quot;Critical vulnerabilities must be patched within 14 days of public disclosure with rollback tests.&quot;
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-slate-300">
                    <Lock className="h-3 w-3 text-[#2E936F]" /> Redacted payload sent to LLM router
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 rounded-2xl border border-slate-700/60 bg-[#1A2333] p-4 flex flex-col justify-between shadow-lg">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#2E936F] dark:text-teal font-bold">2. AI Suggestion + Human Review</span>
                  <div className="mt-2 space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-[#0F172A] border border-[#2E936F]/40 flex items-center justify-between">
                      <span className="text-slate-100 font-semibold">ISO 27001:2022 A.8.8 Management of Tech Vulns</span>
                      <span className="text-[#2E936F] dark:text-teal font-mono text-[10px] font-bold">96% Conf</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#0F172A] border border-[#2E936F]/40 flex items-center justify-between">
                      <span className="text-slate-100 font-semibold">SOC 2 CC7.1 Vulnerability Scans</span>
                      <span className="text-[#2E936F] dark:text-teal font-mono text-[10px] font-bold">92% Conf</span>
                    </div>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAB60A]/15 border border-[#FAB60A]/30 text-[11px] text-[#FAB60A] font-mono font-bold text-center">
                  Human analyst approval required before committing to Postgres
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "framework" && (
            <motion.div
              key="framework"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3"
            >
              {FRAMEWORKS.map((fw) => (
                <div
                  key={fw.code}
                  className="p-4 rounded-2xl border border-slate-700/70 bg-[#1A2333] text-center hover:border-[#2E936F] dark:hover:border-teal/60 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-2 rounded-xl bg-[#2E936F]/15 dark:bg-teal/20 w-fit mx-auto mb-2.5 group-hover:scale-110 transition-transform">
                    <Shield className="h-6 w-6 text-[#2E936F] dark:text-teal-300" />
                  </div>
                  <p className="font-extrabold text-xs text-white tracking-tight">{fw.name}</p>
                  <p className="text-[11px] text-[#34D399] dark:text-teal-300 font-mono font-bold mt-1.5">{fw.badge}</p>
                  <p className="text-[10px] text-slate-300 font-medium mt-1 leading-snug">{fw.region}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Status Row */}
        <div className="mt-5 pt-3.5 border-t border-slate-700/60 flex items-center justify-between gap-3 text-[11px] font-mono">
          <div className="flex items-center gap-2 text-[#2E936F] dark:text-teal">
            <Layers className="h-4 w-4 shrink-0" />
            <span className="font-bold text-white">One Connected Workflow</span>
            <span className="text-slate-300 hidden sm:inline font-medium">Risk ↔ Asset ↔ Control ↔ Framework</span>
          </div>
          <span className="text-slate-300 font-medium hidden sm:inline">All changes saved to PostgreSQL</span>
        </div>
      </motion.div>
    </div>
  );
};
