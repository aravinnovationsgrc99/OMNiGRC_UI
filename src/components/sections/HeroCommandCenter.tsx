"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Database,
  Lock,
  RefreshCw,
  Cpu,
  GitBranch,
  Activity,
  Key,
  Layers,
  Terminal,
  ArrowRight,
  Sparkles,
  ShieldAlert,
  FileCheck2,
  SlidersHorizontal,
} from "lucide-react";

interface AssetNode {
  id: string;
  name: string;
  category: string;
  detail: string;
  icon: React.ElementType;
  status: "synced" | "active" | "checking";
  connectedControlId: string;
  connectedControlName: string;
  frameworks: string[];
  latency: string;
  evidenceHash: string;
}

const ASSET_NODES: AssetNode[] = [
  {
    id: "asset-aws",
    name: "AWS Prod Cluster",
    category: "Cloud Infra",
    detail: "us-east-1 • 142 EC2/ECS",
    icon: Server,
    status: "synced",
    connectedControlId: "CTRL-012",
    connectedControlName: "Automated Daily Snapshot & Restore",
    frameworks: ["ISO 27001", "SOC 2", "HIPAA"],
    latency: "3.8ms",
    evidenceHash: "sha256:8f9a2b...c4e1",
  },
  {
    id: "asset-okta",
    name: "Okta Identity Provider",
    category: "IAM & Access",
    detail: "Enforced Hardware MFA",
    icon: Key,
    status: "synced",
    connectedControlId: "CTRL-084",
    connectedControlName: "Mandatory Passkeys & WebAuthn MFA",
    frameworks: ["ISO 27001", "GDPR", "DPDP"],
    latency: "2.1ms",
    evidenceHash: "sha256:3d1e9f...a702",
  },
  {
    id: "asset-pg",
    name: "Database Prod Cluster",
    category: "Database",
    detail: "AES-256 Air-gapped Backup",
    icon: Database,
    status: "synced",
    connectedControlId: "CTRL-041",
    connectedControlName: "Zero-Trust Encryption at Rest",
    frameworks: ["SOC 2", "ISO 42001", "HIPAA"],
    latency: "4.2ms",
    evidenceHash: "sha256:e3b0c4...42fe",
  },
  {
    id: "asset-github",
    name: "GitHub Enterprise",
    category: "Code & CI/CD",
    detail: "Signed Commits & Scans",
    icon: GitBranch,
    status: "synced",
    connectedControlId: "CTRL-105",
    connectedControlName: "Immutable Audit Trail & Peer Signoff",
    frameworks: ["ISO 27001", "DPDP", "SOC 2"],
    latency: "1.9ms",
    evidenceHash: "sha256:7c4f1a...b890",
  },
];

export const HeroCommandCenter: React.FC = () => {
  const [selectedAssetId, setSelectedAssetId] = useState<string>("asset-aws");
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [auditScanCount, setAuditScanCount] = useState<number>(1420);
  const [activeTabFilter, setActiveTabFilter] = useState<"all" | "critical">("all");

  // Auto scan trigger simulation
  const handleRunAuditScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setAuditScanCount((prev) => prev + 4);
    }, 1400);
  };

  const selectedAsset =
    ASSET_NODES.find((node) => node.id === selectedAssetId) || ASSET_NODES[0];

  return (
    <div className="relative w-full max-w-5xl 2xl:max-w-6xl mx-auto my-3 sm:my-6 px-2 sm:px-4">
      {/* Subtle Backing Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 bg-gradient-to-r from-[#2E936F]/20 via-[#FAB60A]/15 to-[#F15E1C]/20 blur-3xl opacity-50 rounded-3xl"
      />

      {/* MAIN INTERACTIVE COMMAND CONSOLE CONTAINER */}
      <div className="relative z-10 rounded-3xl border border-slate-300/90 dark:border-navy-700/80 bg-[#0a1322] text-white shadow-2xl overflow-hidden p-4 sm:p-6 lg:p-7 space-y-4">
        {/* TOP CONSOLE HEADER & CONTROLS */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d2b4] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00d2b4]" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                  LIVE COMPLIANCE TELEMETRY RADAR
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-[#2E936F]/20 border border-[#2E936F]/40 text-[#00d2b4] font-mono text-[10px] font-bold">
                  24/7 ACTIVE
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Click any infrastructure node to inspect live control verification
              </p>
            </div>
          </div>

          {/* Quick Action & Stats Pill */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-navy-950 border border-slate-800 text-xs font-mono text-slate-300">
              <Activity className="h-3.5 w-3.5 text-[#00d2b4] animate-pulse" />
              <span>
                Total Verifications:{" "}
                <strong className="text-white font-bold">{auditScanCount.toLocaleString()}</strong>
              </span>
            </div>

            <button
              onClick={handleRunAuditScan}
              disabled={isScanning}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-extrabold shadow-md transition-all duration-200 ${
                isScanning
                  ? "bg-[#2E936F]/50 text-white cursor-wait"
                  : "bg-[#2E936F] hover:bg-[#25795b] text-white hover:scale-[1.02] active:scale-[0.98]"
              }`}
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isScanning ? "animate-spin" : ""}`} />
              <span>{isScanning ? "Scanning Infrastructure..." : "⚡ Run Drift Scan"}</span>
            </button>
          </div>
        </div>

        {/* SCANNING OVERLAY BEAM EFFECT */}
        <AnimatePresence>
          {isScanning && (
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: [0, 0.8, 0], x: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-r from-transparent via-[#00d2b4]/20 to-transparent w-full h-full"
            />
          )}
        </AnimatePresence>

        {/* INTERACTIVE TOPOLOGY GRID (LEFT: ASSETS -> CENTER: CONDUIT -> RIGHT: CONTROLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch min-w-0">
          {/* LEFT COLUMN: TECH ASSET NODES (5 COLS) */}
          <div className="lg:col-span-5 space-y-2.5 min-w-0">
            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-widest text-slate-400">
                TECHNICAL ASSETS (INPUT)
              </span>
              <span className="text-[10px] font-mono text-[#00d2b4]">4 Active Nodes</span>
            </div>

            <div className="space-y-2">
              {ASSET_NODES.map((node) => {
                const isSelected = selectedAssetId === node.id;
                const IconComponent = node.icon;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedAssetId(node.id)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 group min-w-0 ${
                      isSelected
                        ? "border-[#00d2b4] bg-[#0d2136] shadow-lg ring-1 ring-[#00d2b4]/60 scale-[1.01]"
                        : "border-slate-800/90 bg-[#060c18] hover:border-slate-700 hover:bg-[#091426]"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? "bg-[#00d2b4]/20 border-[#00d2b4] text-[#00d2b4]"
                            : "bg-slate-900 border-slate-700 text-slate-400 group-hover:text-white"
                        }`}
                      >
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-extrabold text-white truncate min-w-0">
                            {node.name}
                          </h4>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 shrink-0">
                            {node.category}
                          </span>
                        </div>
                        <p className="text-[10px] font-mono text-slate-400 truncate min-w-0">
                          {node.detail}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#2E936F] animate-pulse" />
                      <span className="text-[10px] font-mono text-slate-400">{node.latency}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CENTER COLUMN: LIVE CONDUIT & AI VERIFIER NODE (2 COLS) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center p-2 relative my-2 lg:my-0">
            {/* Animated SVG Stream Lines */}
            <div className="w-full flex lg:flex-col items-center justify-center gap-2">
              <div className="flex-1 h-0.5 lg:h-12 w-12 lg:w-0.5 bg-gradient-to-r lg:bg-gradient-to-b from-[#00d2b4] via-[#FAB60A] to-[#2E936F] relative overflow-hidden">
                <motion.div
                  animate={{ y: [0, 48], x: [0, 48] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="w-full h-full bg-white opacity-80"
                />
              </div>

              {/* Central Core Verifier Badge */}
              <div className="p-2.5 rounded-2xl border border-[#00d2b4]/60 bg-[#071322] shadow-xl text-center space-y-1 shrink-0 z-10">
                <Cpu className="h-5 w-5 text-[#00d2b4] mx-auto animate-pulse" />
                <span className="text-[9px] font-mono font-extrabold text-white block uppercase tracking-tighter">
                  DETERMINISTIC ENGINE
                </span>
                <span className="text-[8px] font-mono text-[#2E936F] block font-bold">
                  VERIFIED
                </span>
              </div>

              <div className="flex-1 h-0.5 lg:h-12 w-12 lg:w-0.5 bg-gradient-to-r lg:bg-gradient-to-b from-[#2E936F] via-[#00d2b4] to-[#FAB60A] relative overflow-hidden">
                <motion.div
                  animate={{ y: [0, 48], x: [0, 48] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="w-full h-full bg-white opacity-80"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ACTIVE CONTROL SAFEGUARD & INSPECTOR (5 COLS) */}
          <div className="lg:col-span-5 space-y-2.5 min-w-0">
            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-widest text-slate-400">
                MAPPED SAFEGUARD & PROOF (OUTPUT)
              </span>
              <span className="text-[10px] font-mono text-[#2E936F]">Mapped & Mapped-Once</span>
            </div>

            {/* INSPECTOR PANEL FOR SELECTED ASSET */}
            <div className="p-3.5 sm:p-4 rounded-2xl border border-[#2E936F]/50 bg-[#06101f] shadow-inner space-y-3 min-w-0">
              <div className="flex items-start justify-between gap-2 border-b border-slate-800 pb-2.5">
                <div className="min-w-0">
                  <span className="text-[10px] font-mono font-extrabold text-[#FAB60A] uppercase tracking-wider block">
                    ACTIVE MAPPED CONTROL
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-white truncate min-w-0">
                    {selectedAsset.connectedControlId}: {selectedAsset.connectedControlName}
                  </h4>
                </div>
                <span className="px-2 py-1 rounded bg-[#2E936F]/20 text-[#2E936F] border border-[#2E936F]/40 font-mono text-[10px] font-bold shrink-0">
                  100% COMPLIANT
                </span>
              </div>

              {/* Framework Coverage Badges */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-slate-400 block">
                  Simultaneous Framework Verification:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedAsset.frameworks.map((fw, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-[10px] font-mono font-bold"
                    >
                      <CheckCircle2 className="h-2.5 w-2.5 text-[#2E936F]" />
                      {fw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Evidence Cryptographic Hash Proof */}
              <div className="p-2.5 rounded-xl bg-[#03070f] border border-slate-800/80 font-mono text-[10px] space-y-1">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Cryptographic Audit Proof:</span>
                  <span className="text-[#00d2b4]">SHA-256</span>
                </div>
                <div className="text-slate-200 font-bold truncate">
                  {selectedAsset.evidenceHash}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM TELEMETRY SUMMARY STREAM BAR */}
        <div className="p-3 sm:p-3.5 rounded-2xl bg-[#040810] border border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#FAB60A] text-navy-950 font-black text-[10px] uppercase tracking-wider">
              TELEMETRY LOG
            </span>
            <p className="text-slate-300 font-medium text-[11px]">
              Inspecting: <strong className="text-white">{selectedAsset.name}</strong> →{" "}
              <span className="text-[#00d2b4] font-bold">{selectedAsset.connectedControlId}</span>{" "}
              → Status: <span className="text-[#2E936F] font-bold">Zero Drift Detected</span>
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-slate-400 text-[11px]">
            <span>Latency: <strong className="text-slate-200">{selectedAsset.latency}</strong></span>
            <span className="text-slate-600">|</span>
            <span>Sync: <strong className="text-[#2E936F]">Continuous</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCommandCenter;
