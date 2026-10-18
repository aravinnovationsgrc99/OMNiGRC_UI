"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  FolderLock, Database, Verified, Calendar, BookOpen, Lock, Info,
  AlertOctagon, CheckCircle, Link as LinkIcon, Bot, CalendarDays, Badge,
  CheckSquare, Eye, HelpCircle, ShieldCheck, History, Circle, CheckCircle2,
  XCircle, Cloud, Shield, ArrowRight, Network, ArrowUpRight, Search, Server,
  Cpu, Key, FileText, Layers, Share2, Filter, Download, Plus, MapPin, 
  Settings, Check, X, Bell, LayoutDashboard, Target, Zap, ChevronRight, UserCheck, Terminal, Building2, Scale, Gavel, AlertTriangle, PenTool, ArrowRightLeft, Hourglass, Activity, Clock, MailCheck, ClipboardCheck, LogIn, Sliders, ListChecks, ClipboardX, Repeat, Bug, CalendarClock, LineChart, UserCircle, Timer, FolderKanban, ArrowDown
} from "lucide-react";

export default function VulnerabilitiesPage() {
  const [scenarioId, setScenarioId] = useState<1 | 2>(1);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleVerifyAction = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 750);
  };

  const scenarios = {
    1: {
      tag: "P1 CRITICAL FINDING INGESTED",
      tagStyle: "bg-error-container text-on-error-container",
      title: "CVE-2025-XXXX: Remote Code Execution in API Gateway Node Dependency",
      badge: "CVSS 8.4 High",
      asset: "k8s://prod-cluster/ingress-gateway",
      risk: "RSK-089: Production Ingress Compromise",
      ownerInitials: "AC",
      ownerName: "Alex Chen (AppSec Lead)",
      control: "CTRL-SEC-04: Vulnerability Patching",
      slaText: "Active SLA Countdown",
      slaWidth: "53%",
      slaColor: "bg-primary",
      drawerAudit: "Awaiting PR merge & staging verification.",
      hash: "0x8f2d6c9b4e11a374b5c772e01df39aa827b508f7ce19",
      logs: [
        "[2025-05-12T08:31:02Z] INGEST: Ingested finding payload from Snyk scanner & mapped CVSS 8.4.",
        "[2025-05-12T08:31:04Z] AUTO-ENRICH: Matched k8s://prod-cluster. Updated risk RSK-089.",
        "[2025-05-13T14:10:20Z] STAGING: Patch v4.18.2 verified in staging sandbox.",
        "[STATUS] Ready for AppSec signoff & audit vault closure."
      ]
    },
    2: {
      tag: "AUDITED & VERIFIED COMPLIANT",
      tagStyle: "bg-secondary-container text-on-secondary-container",
      title: "Unrestricted Public Ingress on Staging PostgreSQL RDS",
      badge: "Medium Severity",
      asset: "rds://staging-analytics-db",
      risk: "RSK-042: Non-Production Exposure & Pivot",
      ownerInitials: "OT",
      ownerName: "Ojas Thakre (SecOps Eng)",
      control: "CTRL-NET-02: Boundary Firewall Rules",
      slaText: "Closed (SLA Met)",
      slaWidth: "100%",
      slaColor: "bg-secondary",
      drawerAudit: "Verified and locked. Terraform security group revoking 0.0.0.0/0 ingress confirmed in CloudTrail audit snapshot.",
      hash: "0x4a9e33bf7710c92da51bc60029efb7104b2a8d33",
      logs: [
        "[2025-05-08T11:04:12Z] INGEST: AWS GuardDuty scanner identified exposed port 5432 on rds://staging-analytics-db.",
        "[2025-05-08T11:05:00Z] SLA-TRIGGER: SLA activated for Medium severity finding.",
        "[2025-05-09T09:12:44Z] REMEDIATED: Terraform PR #341 applied. Ingress restricted to VPC CIDR.",
        "[STATUS] Verified by Lead Auditor. Hash stored in Audit Vault."
      ]
    }
  };

  const current = scenarios[scenarioId];

  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <div className="flex flex-col w-full pt-16">
        {/*  SECTION 1: HERO & EXTERNALLY SOURCED INGESTION HEADER  */}
        <section className="relative w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 pt-4 sm:pt-6 lg:pt-6 xl:pt-8 pb-3 sm:pb-6 lg:pb-6 xl:pb-8 overflow-hidden bg-grid-mesh-adaptive">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
            {/*  Left Column: Copy & CTAs  */}
            <div className="lg:col-span-7 flex flex-col justify-between items-start gap-3 sm:gap-4 w-full">
              <div className="flex flex-col gap-2.5 sm:gap-3.5 w-full">
                <h1 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-[38px] xl:text-[44px] 2xl:text-[48px] text-slate-900 dark:text-white font-bold tracking-tight leading-tight text-left w-full">
                  Connect External Scanner Findings to <span className="text-primary">Quantified Risk Registers</span>
                </h1>
                <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed text-left">
                  OMNiGRC ingests findings from external security scanners (Qualys, Snyk, AWS GuardDuty, CrowdStrike, and Datadog) to automatically prioritize CVEs against business asset criticalities and enforce policy SLA clocks.
                </p>
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2.5 sm:gap-4 pt-1 w-full">
                  <button 
                    onClick={() => {
                      setScenarioId(scenarioId === 1 ? 2 : 1);
                      setIsVerified(false);
                    }}
                    className="w-full sm:w-auto max-w-md inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-lg bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-md transition-all text-center"
                  >
                    <Activity className="h-4 w-4 shrink-0" />
                    <span>Toggle Scenario ({scenarioId === 1 ? "Switch to RDS Ingress" : "Switch to RCE CVE"})</span>
                  </button>
                  <a 
                    className="w-full sm:w-auto max-w-md inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors shadow-sm text-center" 
                    href="/demo"
                  >
                    <FileText className="h-4 w-4 shrink-0" />
                    <span>View Scanner Integration Specs</span>
                  </a>
                </div>
              </div>

              {/*  Key Metric Badges  */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 pt-2 w-full max-w-xl">
                <div className="flex flex-col p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-[#16233F] overflow-hidden text-center items-center border border-slate-100 dark:border-navy-700/60 shadow-sm">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-bold truncate">Extensive</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-medium mt-0.5 leading-snug text-center">Scanner Ingestion</span>
                </div>
                <div className="flex flex-col p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-[#16233F] overflow-hidden text-center items-center border border-slate-100 dark:border-navy-700/60 shadow-sm">
                  <div className="flex items-center gap-1 text-primary">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-bold truncate">Actionable</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-medium mt-0.5 leading-snug text-center">Policy Clocks</span>
                </div>
                <div className="flex flex-col p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-[#16233F] overflow-hidden text-center items-center border border-slate-100 dark:border-navy-700/60 shadow-sm">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-bold truncate">Auditor Proof</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-medium mt-0.5 leading-snug text-center">Patch Evidence</span>
                </div>
              </div>
            </div>

            {/*  Right Column: Ingestion Pipeline Visual Card  */}
            <div className="lg:col-span-5 relative flex flex-col justify-center">
              <div className="relative w-full rounded-xl lg:rounded-2xl bg-white dark:bg-[#0A111F] p-4 sm:p-5 lg:p-6 shadow-xl flex flex-col justify-between gap-3 sm:gap-4 border border-slate-300 dark:border-navy-700 h-full">
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-slate-100 dark:border-navy-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary animate-pulse"></div>
                    <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-bold">External Scanner Ingestion Stream</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-navy-700 font-mono text-[10px] sm:text-xs text-slate-900 dark:text-white font-semibold">INGESTION HOOK</span>
                </div>
                <div className="space-y-2 sm:space-y-2.5">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 dark:bg-[#16233F] flex items-center justify-between border border-slate-100 dark:border-navy-800">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-mono text-xs text-slate-900 dark:text-white font-semibold">Qualys VMDR Hook</span>
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs text-secondary font-bold">Findings Normalized</span>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 dark:bg-[#16233F] flex items-center justify-between border border-slate-100 dark:border-navy-800">
                    <div className="flex items-center gap-2">
                      <Bug className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-mono text-xs text-slate-900 dark:text-white font-semibold">Snyk Container Scan</span>
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs text-secondary font-bold">Findings Matched</span>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 dark:bg-[#16233F] flex items-center justify-between border border-slate-100 dark:border-navy-800">
                    <div className="flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-mono text-xs text-slate-900 dark:text-white font-semibold">AWS GuardDuty Findings</span>
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs text-secondary font-bold">SLA Aligned</span>
                  </div>
                </div>
                <div className="pt-2 sm:pt-2.5 flex items-center justify-between text-slate-600 dark:text-slate-300 font-mono text-[10px] sm:text-xs border-t border-slate-100 dark:border-navy-800">
                  <span>Architecture: Ingestion Only</span>
                  <span className="text-secondary font-bold flex items-center gap-1">
                    <CheckCircle className="h-3.5 w-3.5" /> External Scanner Ingestion
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 2: INTERACTIVE TOPOLOGY & SCENARIO EXPLORER  */}
        <section className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 py-3.5 sm:py-6 lg:py-6 xl:py-7" id="vulnerability-topology">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 sm:mb-5 gap-3 sm:gap-4">
            <div>
              <h2 className="text-[19px] min-[360px]:text-[21px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug text-left lg:whitespace-nowrap">
                Interactive Vulnerability-to-Asset Topology
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mt-1 text-left leading-relaxed">
                Experience how ingested CVEs transform into context-aware risk items, complete with assigned engineers, framework clauses, and SLA clocks.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-600 dark:text-slate-300 hidden sm:inline">Scenario:</span>
              <div className="inline-flex rounded-lg bg-white dark:bg-[#0A111F] p-1 shadow-sm border border-slate-300 dark:border-navy-700">
                <button 
                  onClick={() => {
                    setScenarioId(1);
                    setIsVerified(false);
                  }}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-all ${scenarioId === 1 ? 'bg-primary text-on-primary font-bold shadow-sm' : 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-navy-800'}`} 
                  id="btn-vuln1"
                >
                  CVE-2025-XXXX (High)
                </button>
                <button 
                  onClick={() => {
                    setScenarioId(2);
                    setIsVerified(false);
                  }}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-all ${scenarioId === 2 ? 'bg-primary text-on-primary font-bold shadow-sm' : 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-navy-800'}`} 
                  id="btn-vuln2"
                >
                  RDS Public Ingress (Medium)
                </button>
              </div>
            </div>
          </div>

          {/*  Topological Visual Flow Banner  */}
          <div className="hidden lg:grid grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-5 text-center items-stretch">
            <div className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col items-center justify-between text-center h-full hover:border-slate-300 dark:hover:border-navy-600 transition-all">
              <Bug className="h-5 w-5 shrink-0 text-primary mb-1" />
              <span className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase">01. Scanner Ingestion</span>
              <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">Normalized Finding Payload</span>
            </div>
            <div className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col items-center justify-between text-center h-full hover:border-slate-300 dark:hover:border-navy-600 transition-all">
              <Database className="h-5 w-5 shrink-0 text-primary mb-1" />
              <span className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase">02. Asset Registry</span>
              <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">Business Scope &amp; Exposure Tier</span>
            </div>
            <div className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col items-center justify-between text-center h-full hover:border-slate-300 dark:hover:border-navy-600 transition-all">
              <AlertOctagon className="h-5 w-5 shrink-0 text-error mb-1" />
              <span className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase">03. Calibrated Risk</span>
              <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">Inherent Risk Scoring Model</span>
            </div>
            <div className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col items-center justify-between text-center h-full hover:border-slate-300 dark:hover:border-navy-600 transition-all">
              <CalendarClock className="h-5 w-5 shrink-0 text-primary mb-1" />
              <span className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase">04. Remediation SLA</span>
              <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">Enforced Governance Clock</span>
            </div>
            <div className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col items-center justify-between text-center h-full hover:border-slate-300 dark:hover:border-navy-600 transition-all">
              <ListChecks className="h-5 w-5 shrink-0 text-secondary mb-1" />
              <span className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase">05. Audit Vault</span>
              <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">Structured Audit Verification</span>
            </div>
          </div>

          {/*  Main Topology Explorer Card  */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            {/*  Interactive Findings Table & Detail Matrix (Col 8)  */}
            <div className="lg:col-span-8 bg-white dark:bg-[#0A111F] rounded-xl lg:rounded-2xl border border-slate-300 dark:border-navy-700 shadow-md p-4 sm:p-6 lg:p-7 flex flex-col justify-between h-full">
              <div>
                <div className="pb-3 border-b border-slate-100 dark:border-navy-800 mb-3 sm:mb-4">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-mono text-[10px] sm:text-xs font-semibold ${current.tagStyle}`} id="scenario-tag">
                    {current.tag}
                  </span>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-900 dark:text-white font-bold mt-1.5 tracking-tight leading-snug" id="scenario-title">
                    {current.title}
                  </h3>
                </div>
                {/*  Structured Traceability Grid  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 sm:mb-4">
                  <div className="p-3 sm:p-3.5 rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-200 dark:border-navy-700">
                    <div className="text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Server className="h-4 w-4 text-primary shrink-0" /> Affected Asset Target
                    </div>
                    <div className="font-mono text-xs sm:text-sm text-slate-900 dark:text-white font-bold tracking-tight" id="scenario-asset">{current.asset}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5">Tier-1 Critical: PCI-DSS &amp; Data Scope</div>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-200 dark:border-navy-700">
                    <div className="text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <LineChart className="h-4 w-4 text-primary shrink-0" /> Linked Risk Item
                    </div>
                    <div className="font-mono text-xs sm:text-sm text-primary font-bold tracking-tight" id="scenario-risk">{current.risk}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5">Exposure: Critical • Breach Impact: High</div>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-200 dark:border-navy-700">
                    <div className="text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <UserCircle className="h-4 w-4 text-primary shrink-0" /> Assigned Remediation Lead
                    </div>
                    <div className="text-xs sm:text-sm text-slate-900 dark:text-white font-bold flex items-center gap-2 mt-0.5" id="scenario-owner">
                      <span className="w-5 h-5 rounded-full bg-primary text-on-primary font-mono text-[10px] flex items-center justify-center font-bold">{current.ownerInitials}</span>
                      {current.ownerName}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5">Escalation: VP Eng &amp; CISO Office</div>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-200 dark:border-navy-700">
                    <div className="text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Shield className="h-4 w-4 text-primary shrink-0" /> Mapped Safeguard Control
                    </div>
                    <div className="font-mono text-xs sm:text-sm text-secondary font-bold tracking-tight" id="scenario-control">{current.control}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5">Mapped to ISO 27001 (A.8.8) &amp; SOC 2 (CC7.1)</div>
                  </div>
                </div>
                {/*  Remediation SLA Visual Progress Tracker  */}
                <div className="p-3 sm:p-3.5 rounded-lg bg-[#FFF5EB] dark:bg-navy-900 border border-primary/20 mb-3 sm:mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Timer className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-primary" />
                      <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-bold">Remediation SLA Clock</span>
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs text-primary font-bold px-2 py-0.5 rounded bg-white dark:bg-[#0A111F] shadow-sm" id="scenario-sla-text">{current.slaText}</span>
                  </div>
                  <div className="w-full bg-white dark:bg-[#0A111F] h-2.5 sm:h-3 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-navy-700">
                    <div className={`${current.slaColor} h-full rounded-full transition-all duration-500`} id="scenario-sla-bar" style={{ width: current.slaWidth }}></div>
                  </div>
                  <div className="flex justify-between text-[10px] sm:text-xs text-slate-600 dark:text-slate-300 font-semibold mt-1 font-mono">
                    <span>Injected Finding</span>
                    <span>Active Remediation</span>
                    <span>Policy Cutoff</span>
                  </div>
                </div>
              </div>
              {/*  Structured Audit Log Snippet  */}
              <div className="bg-[#0F172A] rounded-lg p-3 sm:p-3.5 text-white border border-slate-700 mt-2">
                <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs pb-1.5 border-b border-[#1E293B] mb-2 text-[#94A3B8]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span>Audit Workpaper Trail • Evidence Digest</span>
                  </div>
                  <span className="text-[#E2E8F0] font-mono">OMNiGRC EVIDENCE VAULT</span>
                </div>
                <div className="font-mono text-[11px] sm:text-xs space-y-1" id="scenario-log">
                  {current.logs.map((log, idx) => (
                    <div key={idx} className={idx === current.logs.length - 1 ? "text-[#95f6cb] font-bold" : "text-slate-300"}>
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/*  Slide-Over Drawer Simulation (Col 4)  */}
            <div className="lg:col-span-4 bg-white dark:bg-[#0A111F] rounded-xl lg:rounded-2xl border border-slate-300 dark:border-navy-700 shadow-lg p-4 sm:p-6 lg:p-7 flex flex-col justify-between h-full">
              <div className="flex flex-col gap-3 sm:gap-3.5">
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-slate-100 dark:border-navy-800">
                  <span className="text-xs sm:text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5 font-bold">
                    <UserCheck className="h-4 w-4 text-primary shrink-0" /> Compliance Evidence Drawer
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-semibold">Active Drawer</span>
                </div>
                <div className="space-y-3 sm:space-y-3.5">
                  <div>
                    <span className="text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider">Governing Frameworks</span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      <span className="px-2.5 py-1 rounded bg-[#FFF5EB] dark:bg-navy-800 text-primary font-mono text-[11px] sm:text-xs font-bold">ISO 27001:2022 A.8.8</span>
                      <span className="px-2.5 py-1 rounded bg-[#FFF5EB] dark:bg-navy-800 text-primary font-mono text-[11px] sm:text-xs font-bold">SOC 2 CC7.1</span>
                      <span className="px-2.5 py-1 rounded bg-[#FFF5EB] dark:bg-navy-800 text-primary font-mono text-[11px] sm:text-xs font-bold">NIST CSF ID.RA-1</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider">Remediation Policy Cadence</span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1">High-severity PCI systems must be mitigated per policy. Status: <span className="text-secondary font-bold">On Track</span>.</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider">Auditor Verification Status</span>
                    <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-300 dark:border-navy-700 mt-1 text-slate-900 dark:text-white text-xs sm:text-sm flex items-start gap-2 font-medium" id="drawer-audit-status">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-secondary mt-0.5" />
                      <span>{isVerified ? "Audit verification recorded and logged into the GRC workpaper vault." : current.drawerAudit}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider">Evidence Verification Reference</span>
                    <div className="p-2 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-mono text-[10px] sm:text-xs font-bold break-all mt-1 tracking-wider" id="drawer-hash">{current.hash}</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-navy-800">
                <button 
                  onClick={handleVerifyAction}
                  disabled={isVerifying || isVerified}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-sm ${isVerified ? 'bg-secondary text-on-secondary cursor-default' : 'bg-primary text-on-primary hover:bg-primary-container'}`}
                >
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  <span id="drawer-action-btn">
                    {isVerifying ? "Recording Verification..." : isVerified ? "Remediation Verification Recorded" : "Verify Remediation Status"}
                  </span>
                </button>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 text-center mt-1.5">
                  Binds structured evidence directly into audit workpaper package.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 3: THREE FUNCTIONAL PILLARS SECTION  */}
        <section className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 py-3.5 sm:py-6 lg:py-6 xl:py-7">
          <div className="text-left max-w-3xl mb-3 sm:mb-5">
            <h2 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug text-left lg:whitespace-nowrap">
              Purpose-Built for GRC Defensibility, Not Log Flooding
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 text-left leading-relaxed">
              Scanners detect bugs. OMNiGRC transforms those findings into contextual corporate risk models, automated team escalations, and certified auditor workpapers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
            {/* Card 1: Asset-Centric Prioritization */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200/90 dark:border-navy-700/70 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group hover:-translate-y-0.5 text-left">
              <div>
                <div className="flex items-center gap-3.5 sm:gap-4 text-left">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FFF5EB] dark:bg-navy-800 text-primary flex items-center justify-center shrink-0">
                    <Network className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug text-left">
                    Asset-Centric Prioritization
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 sm:mt-4 leading-relaxed text-left">
                  Triage vulnerabilities by business criticality, data classifications, and regulatory scope, not theoretical CVSS scores alone.
                </p>
              </div>
              <div className="mt-4 sm:mt-5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-[#16233F] border border-slate-100 dark:border-navy-700/50 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-900 dark:text-white font-bold">Scope Context</span>
                <div className="h-4 w-px bg-slate-200 dark:bg-navy-700 mx-2 sm:mx-3"></div>
                <span className="text-secondary font-bold inline-flex items-center gap-1.5 ml-auto">
                  Configurable Scope Tiers
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                </span>
              </div>
            </div>

            {/* Card 2: Actionable Remediation SLAs */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200/90 dark:border-navy-700/70 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group hover:-translate-y-0.5 text-left">
              <div>
                <div className="flex items-center gap-3.5 sm:gap-4 text-left">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FFF5EB] dark:bg-navy-800 text-primary flex items-center justify-center shrink-0">
                    <Zap className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug text-left">
                    Actionable Remediation SLAs
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 sm:mt-4 leading-relaxed text-left">
                  Automate remediation countdowns aligned to policy. Trigger team notifications and CISO approvals before breach limits hit.
                </p>
              </div>
              <div className="mt-4 sm:mt-5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-[#16233F] border border-slate-100 dark:border-navy-700/50 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-900 dark:text-white font-bold">Enforcement Policy</span>
                <div className="h-4 w-px bg-slate-200 dark:bg-navy-700 mx-2 sm:mx-3"></div>
                <span className="text-primary font-bold inline-flex items-center gap-1.5 ml-auto">
                  Policy Escalations
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                </span>
              </div>
            </div>

            {/* Card 3: Defensible Audit Closure */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200/90 dark:border-navy-700/70 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group hover:-translate-y-0.5 text-left">
              <div>
                <div className="flex items-center gap-3.5 sm:gap-4 text-left">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FFF5EB] dark:bg-navy-800 text-primary flex items-center justify-center shrink-0">
                    <Lock className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug text-left">
                    Defensible Audit Closure
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 sm:mt-4 leading-relaxed text-left">
                  Store patch proof, diffs, and verified commit hashes directly in GRC audit logs for auditor review.
                </p>
              </div>
              <div className="mt-4 sm:mt-5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-[#16233F] border border-slate-100 dark:border-navy-700/50 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-900 dark:text-white font-bold">Audit Proof</span>
                <div className="h-4 w-px bg-slate-200 dark:bg-navy-700 mx-2 sm:mx-3"></div>
                <span className="text-secondary font-bold inline-flex items-center gap-1.5 ml-auto">
                  Verified Evidence
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 4: COMPARISON SECTION  */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F] py-3.5 sm:py-6 lg:py-6 xl:py-7">
          <div className="max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
            <div className="text-left max-w-3xl mb-3 sm:mb-5">
              <h2 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug text-left lg:whitespace-nowrap">
                Raw Scanner Noise vs. Connected GRC Prioritization
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
              <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center justify-start gap-2 text-left">
                    <XCircle className="h-5 w-5 text-error shrink-0" /> Uncontextualized Scanner Approach
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-error shrink-0 mt-0.5" />
                      <span className="text-left">Flood engineering teams with raw uncontextualized scanner logs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-error shrink-0 mt-0.5" />
                      <span className="text-left">No visibility into whether affected host carries sensitive data scope.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-error shrink-0 mt-0.5" />
                      <span className="text-left">Manual spreadsheet tracking for audit evidence during SOC 2 reviews.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-[#0A111F] border border-secondary/40 shadow-md flex flex-col justify-between h-full">
                <div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center justify-start gap-2 text-left">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" /> Connected OMNiGRC Workflow
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                      <span className="text-left">Ingest scanner data and automatically elevate findings affecting critical assets.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                      <span className="text-left">Enforce automated SLA countdown clocks tied directly to corporate governance policy.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                      <span className="text-left">Store verified patch evidence and audit logs directly in the GRC workpaper vault.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 5: BOTTOM CTA  */}
        <section className="w-full bg-slate-900 dark:bg-[#070D19] text-white py-4 sm:py-8 lg:py-8 xl:py-9">
          <div className="max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 flex flex-col items-start text-left gap-3 sm:gap-4">
            <h2 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug text-left lg:whitespace-nowrap">
              Connect technical findings to compliance truth.
            </h2>
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl leading-relaxed text-left">Integrate third-party scanners into OMNiGRC in minutes. Experience asset-contextualized vulnerability remediation.</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-2.5 sm:gap-4 pt-1 w-full sm:w-auto">
              <a href="/demo" className="px-5 py-2.5 sm:py-3 rounded-lg bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-md transition-all text-center">
                Schedule Vulnerability Governance Demo
              </a>
              <a href="/contact-us" className="px-5 py-2.5 sm:py-3 rounded-lg bg-slate-800 text-white text-xs sm:text-sm font-semibold hover:bg-slate-700 transition-colors text-center">
                Speak with an AppSec Specialist
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
