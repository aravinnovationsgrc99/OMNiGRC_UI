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

export const IsometricHeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8 sm:my-12 perspective-1000 px-2 sm:px-4">
      {/* Background Glow using approved palette */}
      <div className="pointer-events-none absolute -inset-6 bg-gradient-to-r from-teal/20 via-amber/15 to-teal/20 blur-3xl opacity-70 rounded-3xl" />

      {/* Main Isometric 3D Board Surface */}
      <motion.div
        initial={{ opacity: 0, rotateX: 10, rotateY: -4, y: 30 }}
        animate={{ opacity: 1, rotateX: 6, rotateY: -3, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative rounded-3xl border border-teal/30 bg-navy/95 p-4 sm:p-7 shadow-2xl backdrop-blur-2xl transform-gpu"
        style={{
          transformStyle: "preserve-3d",
          boxShadow:
            "0 25px 50px -12px rgba(15, 110, 106, 0.2), 0 0 40px rgba(22, 35, 63, 0.95)",
        }}
      >
        {/* Top Operational Status Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3.5 mb-5 gap-3">
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
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-teal text-white shadow-md shadow-teal/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
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
              <div className="md:col-span-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber font-bold flex items-center gap-1">
                      <AlertTriangle className="h-3 w-3 text-amber" /> Risk & Asset Layer
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Live Posture</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Connected Asset Inventory</h4>
                  <div className="space-y-2 text-xs">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Server className="h-3.5 w-3.5 text-teal shrink-0" />
                        <span className="text-slate-200 truncate">Production Cloud DB</span>
                      </div>
                      <span className="text-[10px] font-mono text-slateSoft">Asset #41</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="h-3.5 w-3.5 text-amber shrink-0" />
                        <span className="text-slate-200 truncate">Customer PII Store</span>
                      </div>
                      <span className="text-[10px] font-mono text-amber">High Impact</span>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-teal/10 border border-teal/20 text-[11px] text-slate-300">
                  <p className="font-semibold text-amber">Risk Linkage:</p>
                  <p className="text-[10px] text-slate-400">Linked to 4 controls & 2 active treatment plans</p>
                </div>
              </div>

              {/* Node 2: Advisory AI Mapping Engine */}
              <div className="md:col-span-5 rounded-2xl border border-teal/40 bg-slate-950/90 p-4 space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-bold flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-amber" /> Advisory AI Control Matcher
                  </span>
                  <Badge variant="ai" size="sm">
                    Advisory Only
                  </Badge>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-teal/30">
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-bold text-white">CTRL-084: Mandatory MFA & Passkeys</span>
                    <span className="font-mono text-teal text-[10px]">94% Match</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mb-2">
                    Internal control mapped once. AI suggests matching clauses:
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 text-[10px] font-mono">
                    <span className="p-1 rounded bg-slate-950 text-slate-300 border border-slate-800">
                      ISO 27001: A.9.4.2
                    </span>
                    <span className="p-1 rounded bg-slate-950 text-slate-300 border border-slate-800">
                      SOC 2: CC6.1
                    </span>
                    <span className="p-1 rounded bg-slate-950 text-slate-300 border border-slate-800">
                      DPDP: Sec 8(5)
                    </span>
                    <span className="p-1 rounded bg-slate-950 text-slate-300 border border-slate-800">
                      Essential 8: MFA-L2
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px]">
                  <span className="text-slate-400">Analyst Review:</span>
                  <span className="text-teal font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Approved by GRC Lead
                  </span>
                </div>
              </div>

              {/* Node 3: Compliance & Testing Cadence */}
              <div className="md:col-span-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-bold flex items-center gap-1">
                      <FileCheck className="h-3 w-3" /> Testing Board
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Rolling 30d</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Evidence Cadence</h4>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <p className="font-semibold text-slate-200">Access Review</p>
                      <p className="text-[10px] text-teal">Passed • Verified 2d ago</p>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <p className="font-semibold text-slate-200">Encryption Audit</p>
                      <p className="text-[10px] text-amber">Due in 14 days</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>5 Frameworks</span>
                  <span className="text-amber">100% Auditable</span>
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
              <div className="md:col-span-7 rounded-2xl border border-slate-800 bg-slate-950/90 p-4">
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-rose" /> 5x5 Risk Heatmap & Register
                </h4>
                <p className="text-xs text-slate-400 mb-4">
                  Log, score (Likelihood × Impact), and evaluate residual risk after applying security controls.
                </p>
                <div className="grid grid-cols-5 gap-1.5 text-center text-[10px] font-mono">
                  {["Low", "Low", "Med", "High", "Critical", "Low", "Low", "Med", "Med", "High", "Low", "Low", "Med", "Med", "High", "Low", "Low", "Low", "Med", "Med", "Low", "Low", "Low", "Low", "Med"].map((lvl, idx) => (
                    <div
                      key={idx}
                      className={`p-2 rounded font-bold transition-all ${
                        lvl === "Critical"
                          ? "bg-rose text-white border border-rose/80 shadow-md shadow-rose/40"
                          : lvl === "High"
                          ? "bg-amber/20 text-amber border border-amber/40"
                          : lvl === "Med"
                          ? "bg-amber/15 text-amber border border-amber/30"
                          : "bg-teal/10 text-teal border border-teal/20"
                      }`}
                    >
                      {lvl[0]}
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber uppercase font-semibold">Active Risk Items</span>
                  <div className="space-y-2 mt-2 text-xs">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <p className="font-bold text-white">RSK-102: Vendor API Downtime</p>
                      <p className="text-[10px] text-slate-400">Score: 16 (High) → Residual: 6 (Low)</p>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <p className="font-bold text-white">RSK-088: Cloud Access Drift</p>
                      <p className="text-[10px] text-slate-400">Score: 20 (Critical) → Mitigated</p>
                    </div>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-teal/15 border border-teal/30 text-[11px] text-teal font-mono">
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
              <div className="md:col-span-6 rounded-2xl border border-teal/40 bg-slate-950/90 p-4">
                <span className="text-[10px] font-mono uppercase text-amber font-bold">1. Control Definition</span>
                <div className="mt-2 p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <p className="text-xs font-bold text-white">CTRL-019: Automated Patch Management</p>
                  <p className="text-[11px] text-slate-300">
                    &quot;Critical vulnerabilities must be patched within 14 days of public disclosure with rollback tests.&quot;
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-slateSoft">
                    <Lock className="h-3 w-3" /> Redacted payload sent to LLM router
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 rounded-2xl border border-slate-800 bg-slate-950/90 p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-teal font-bold">2. AI Suggestion + Human Review</span>
                  <div className="mt-2 space-y-2 text-xs">
                    <div className="p-2 rounded-lg bg-slate-900 border border-teal/30 flex items-center justify-between">
                      <span className="text-slate-200">ISO 27001:2022 A.8.8 Management of Tech Vulns</span>
                      <span className="text-teal font-mono text-[10px]">96% Conf</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-teal/30 flex items-center justify-between">
                      <span className="text-slate-200">SOC 2 CC7.1 Vulnerability Scans</span>
                      <span className="text-teal font-mono text-[10px]">92% Conf</span>
                    </div>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-teal/15 border border-teal/30 text-[11px] text-amber font-mono text-center">
                  Human analyst approval required before committing to Postgres
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "framework" && (
            <motion.div
              key="framework"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-5 gap-3"
            >
              {[
                { name: "ISO 27001:2022", badge: "ISMS Global", count: "93 Controls" },
                { name: "SOC 2 Type II", badge: "Trust Services", count: "Common Criteria" },
                { name: "GDPR / UK GDPR", badge: "EU & UK Privacy", count: "Data Protection" },
                { name: "DPDP Act 2023", badge: "India Privacy", count: "Fiduciary Rules" },
                { name: "Essential 8", badge: "Australian Cyber", count: "Mitigation Strat" },
              ].map((fw, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/80 text-center hover:border-teal/50 transition-all"
                >
                  <Shield className="h-5 w-5 text-teal mx-auto mb-2" />
                  <p className="font-bold text-xs text-white">{fw.name}</p>
                  <p className="text-[10px] text-amber font-mono mt-1">{fw.badge}</p>
                  <p className="text-[9px] text-slate-400 font-mono mt-0.5">{fw.count}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Operational Badge Overlay */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:flex absolute -bottom-5 -right-5 rounded-2xl border border-teal/40 bg-slate-900/95 p-3.5 shadow-2xl backdrop-blur-xl items-center gap-3"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="p-2 rounded-xl bg-teal/20 text-teal">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">One Connected Workflow</p>
            <p className="text-[10px] text-slateSoft font-mono">Risk ↔ Asset ↔ Control ↔ Framework</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
