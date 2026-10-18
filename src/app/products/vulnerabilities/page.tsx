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
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-16 overflow-hidden bg-grid-mesh-adaptive">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/*  Left Column: Copy & CTAs  */}
            <div className="lg:col-span-7 flex flex-col items-start gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-200 dark:bg-navy-700 text-primary font-mono text-[10px] sm:text-xs uppercase tracking-wider">
                <Bug className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span>CORE WORKFLOW 05: VULNERABILITY INGESTION &amp; SLA GOVERNANCE</span>
              </div>
              <h1 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-tight text-center sm:text-left">
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
                  className="w-full sm:w-auto max-w-md inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-md transition-all text-center"
                >
                  <Activity className="h-4 w-4 shrink-0" />
                  <span>Toggle Sample Scenario ({scenarioId === 1 ? "Switch to RDS Ingress" : "Switch to RCE CVE"})</span>
                </button>
                <a 
                  className="w-full sm:w-auto max-w-md inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors shadow-sm text-center" 
                  href="/demo"
                >
                  <FileText className="h-4 w-4 shrink-0" />
                  <span>View Scanner Integration Specs</span>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-space-sm pt-space-md w-full max-w-xl">
                <div className="flex flex-col p-2 sm:p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] overflow-hidden">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0" />
                    <span className="text-[11px] sm:text-xs md:text-sm font-bold truncate">Extensive</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-medium mt-1 leading-snug">Scanner Ingestion</span>
                </div>
                <div className="flex flex-col p-2 sm:p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] overflow-hidden">
                  <div className="flex items-center gap-1 text-primary">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0" />
                    <span className="text-[11px] sm:text-xs md:text-sm font-bold truncate">Actionable</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-medium mt-1 leading-snug">Policy Countdown Clocks</span>
                </div>
                <div className="flex flex-col p-2 sm:p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] overflow-hidden">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0" />
                    <span className="text-[11px] sm:text-xs md:text-sm font-bold truncate">Auditor Proof</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-medium mt-1 leading-snug">Defensible Patch Evidence</span>
                </div>
              </div>
            </div>
            {/*  Right Column: Ingestion Pipeline Visual Card  */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full rounded-xl bg-white dark:bg-[#0A111F] p-space-card shadow-xl flex flex-col gap-space-md border border-slate-300 dark:border-navy-700">
                <div className="flex items-center justify-between pb-space-xs border-b border-slate-100 dark:border-navy-800">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
                    <span className="font-label-md text-label-md text-slate-900 dark:text-white font-bold">External Scanner Ingestion Stream</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-navy-700 font-code-sm text-code-sm text-slate-900 dark:text-white">INGESTION HOOK</span>
                </div>
                <div className="space-y-space-xs">
                  <div className="p-space-sm rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-code-sm text-code-sm text-slate-900 dark:text-white">Qualys VMDR Hook</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">Findings Normalized</span>
                  </div>
                  <div className="p-space-sm rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bug className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-code-sm text-code-sm text-slate-900 dark:text-white">Snyk Container Scan</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">Findings Matched</span>
                  </div>
                  <div className="p-space-sm rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-code-sm text-code-sm text-slate-900 dark:text-white">AWS GuardDuty Findings</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold font-code-sm">SLA Aligned</span>
                  </div>
                </div>
                <div className="pt-space-xs flex items-center justify-between text-slate-600 dark:text-slate-300 font-code-sm text-code-sm border-t border-slate-100 dark:border-navy-800">
                  <span>Architecture Note: Ingestion Only</span>
                  <span className="text-secondary font-bold">External Scanner Ingestion</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 2: INTERACTIVE TOPOLOGY & SCENARIO EXPLORER  */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-16" id="vulnerability-topology">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
            <div>
              <h2 className="text-[19px] min-[360px]:text-[21px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-tight sm:leading-snug text-left">
                Interactive Vulnerability-to-Asset Topology
              </h2>
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mt-2 text-left leading-relaxed">
                Experience how ingested CVEs transform into context-aware risk items, complete with assigned engineers, framework clauses, and SLA clocks.
              </p>
            </div>
            <div className="flex items-center gap-space-sm">
              <span className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Select scenario to inspect:</span>
              <div className="inline-flex rounded-lg bg-white dark:bg-[#0A111F] p-1 shadow-sm border border-slate-300 dark:border-navy-700">
                <button 
                  onClick={() => {
                    setScenarioId(1);
                    setIsVerified(false);
                  }}
                  className={`px-space-sm py-1 rounded font-label-sm text-label-sm transition-all ${scenarioId === 1 ? 'bg-primary text-on-primary font-bold shadow-sm' : 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-navy-800'}`} 
                  id="btn-vuln1"
                >
                  CVE-2025-XXXX (High)
                </button>
                <button 
                  onClick={() => {
                    setScenarioId(2);
                    setIsVerified(false);
                  }}
                  className={`px-space-sm py-1 rounded font-label-sm text-label-sm transition-all ${scenarioId === 2 ? 'bg-primary text-on-primary font-bold shadow-sm' : 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-navy-800'}`} 
                  id="btn-vuln2"
                >
                  RDS Public Ingress (Medium)
                </button>
              </div>
            </div>
          </div>

          {/*  Topological Visual Flow Banner  */}
          <div className="hidden lg:grid grid-cols-5 gap-space-sm mb-space-lg text-center">
            <div className="p-space-sm rounded-lg bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm flex flex-col items-center">
              <Bug className="h-5 w-5 shrink-0 text-primary mb-1" />
              <span className="font-code-sm text-code-sm font-semibold text-slate-900 dark:text-white uppercase">01. Scanner Ingestion</span>
              <span className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Normalized Finding Payload</span>
            </div>
            <div className="p-space-sm rounded-lg bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm flex flex-col items-center">
              <Database className="h-5 w-5 shrink-0 text-primary mb-1" />
              <span className="font-code-sm text-code-sm font-semibold text-slate-900 dark:text-white uppercase">02. Asset Registry</span>
              <span className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Business Scope &amp; Exposure Tier</span>
            </div>
            <div className="p-space-sm rounded-lg bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm flex flex-col items-center">
              <AlertOctagon className="h-5 w-5 shrink-0 text-error mb-1" />
              <span className="font-code-sm text-code-sm font-semibold text-slate-900 dark:text-white uppercase">03. Calibrated Risk</span>
              <span className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Inherent Risk Scoring Model</span>
            </div>
            <div className="p-space-sm rounded-lg bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm flex flex-col items-center">
              <CalendarClock className="h-5 w-5 shrink-0 text-primary mb-1" />
              <span className="font-code-sm text-code-sm font-semibold text-slate-900 dark:text-white uppercase">04. Remediation SLA</span>
              <span className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Enforced Governance Clock</span>
            </div>
            <div className="p-space-sm rounded-lg bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm flex flex-col items-center">
              <ListChecks className="h-5 w-5 shrink-0 text-secondary mb-1" />
              <span className="font-code-sm text-code-sm font-semibold text-slate-900 dark:text-white uppercase">05. Audit Vault</span>
              <span className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Structured Audit Verification</span>
            </div>
          </div>

          {/*  Main Topology Explorer Card  */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            {/*  Interactive Findings Table & Detail Matrix (Col 8)  */}
            <div className="lg:col-span-8 bg-white dark:bg-[#0A111F] rounded-xl border border-slate-300 dark:border-navy-700 shadow-md p-4 sm:p-6 lg:p-8">
              <div className="pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-slate-100 dark:border-navy-800">
                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-mono text-[10px] sm:text-xs font-semibold ${current.tagStyle}`} id="scenario-tag">
                  {current.tag}
                </span>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-900 dark:text-white font-bold mt-1.5 tracking-tight leading-snug" id="scenario-title">
                  {current.title}
                </h3>
              </div>
              {/*  Structured Traceability Grid  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-lg">
                <div className="p-space-md rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-300 dark:border-navy-700">
                  <div className="font-label-sm text-label-sm text-slate-900 dark:text-white font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Server className="h-4 w-4 text-primary shrink-0" /> Affected Asset Target
                  </div>
                  <div className="font-code-md text-code-md text-slate-900 dark:text-white font-bold tracking-tight" id="scenario-asset">{current.asset}</div>
                  <div className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 font-medium mt-1">Tier-1 Critical: PCI-DSS &amp; Data Scope</div>
                </div>
                <div className="p-space-md rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-300 dark:border-navy-700">
                  <div className="font-label-sm text-label-sm text-slate-900 dark:text-white font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                    <LineChart className="h-4 w-4 text-primary shrink-0" /> Linked Risk Item
                  </div>
                  <div className="font-code-md text-code-md text-primary font-bold tracking-tight" id="scenario-risk">{current.risk}</div>
                  <div className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 font-medium mt-1">Exposure: Critical • Breach Impact: High</div>
                </div>
                <div className="p-space-md rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-300 dark:border-navy-700">
                  <div className="font-label-sm text-label-sm text-slate-900 dark:text-white font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                    <UserCircle className="h-4 w-4 text-primary shrink-0" /> Assigned Remediation Lead
                  </div>
                  <div className="font-body-md text-body-md text-slate-900 dark:text-white font-bold flex items-center gap-2 mt-0.5" id="scenario-owner">
                    <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-code-sm text-code-sm flex items-center justify-center font-bold">{current.ownerInitials}</span>
                    {current.ownerName}
                  </div>
                  <div className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 font-medium mt-1">Escalation: VP Eng &amp; CISO Office</div>
                </div>
                <div className="p-space-md rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-300 dark:border-navy-700">
                  <div className="font-label-sm text-label-sm text-slate-900 dark:text-white font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Shield className="h-4 w-4 text-primary shrink-0" /> Mapped Safeguard Control
                  </div>
                  <div className="font-code-md text-code-md text-secondary font-bold tracking-tight" id="scenario-control">{current.control}</div>
                  <div className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 font-medium mt-1">Mapped to ISO 27001 (A.8.8) &amp; SOC 2 (CC7.1)</div>
                </div>
              </div>
              {/*  Remediation SLA Visual Progress Tracker  */}
              <div className="p-space-md rounded-lg bg-[#FFF5EB] dark:bg-navy-900 border border-primary/20 mb-space-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Timer className="h-5 w-5 shrink-0 text-primary" />
                    <span className="font-label-md text-label-md text-slate-900 dark:text-white font-bold">Remediation SLA Clock</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-primary font-bold px-2 py-0.5 rounded bg-white dark:bg-[#0A111F] shadow-sm" id="scenario-sla-text">{current.slaText}</span>
                </div>
                <div className="w-full bg-white dark:bg-[#0A111F] h-3 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-navy-700">
                  <div className={`${current.slaColor} h-full rounded-full transition-all duration-500`} id="scenario-sla-bar" style={{ width: current.slaWidth }}></div>
                </div>
                <div className="flex justify-between text-2xs text-slate-600 dark:text-slate-300 font-semibold mt-1.5 font-code-sm">
                  <span>Injected Finding</span>
                  <span>Active Remediation Status</span>
                  <span>Policy Cutoff</span>
                </div>
              </div>
              {/*  Structured Audit Log Snippet  */}
              <div className="bg-[#0F172A] rounded-lg p-space-md text-white border border-slate-700">
                <div className="flex items-center justify-between font-code-sm text-code-sm pb-2 border-b border-[#1E293B] mb-2 text-[#94A3B8]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span>Audit Workpaper Trail • Evidence Digest</span>
                  </div>
                  <span className="text-[#E2E8F0] font-mono">OMNiGRC EVIDENCE VAULT</span>
                </div>
                <div className="font-code-sm text-code-sm space-y-1" id="scenario-log">
                  {current.logs.map((log, idx) => (
                    <div key={idx} className={idx === current.logs.length - 1 ? "text-[#95f6cb] font-bold" : "text-slate-300"}>
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/*  Slide-Over Drawer Simulation (Col 4)  */}
            <div className="lg:col-span-4 bg-white dark:bg-[#0A111F] rounded-xl border border-slate-300 dark:border-navy-700 shadow-lg p-space-card flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-space-sm mb-space-md border-b border-slate-100 dark:border-navy-800">
                  <span className="font-label-md text-label-md text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5 font-bold">
                    <UserCheck className="h-4 w-4 text-primary shrink-0" /> Compliance Evidence Drawer
                  </span>
                  <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-semibold">Active Drawer</span>
                </div>
                <div className="space-y-space-md">
                  <div>
                    <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-bold uppercase tracking-wider">Governing Frameworks</span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      <span className="px-2.5 py-1 rounded bg-[#FFF5EB] dark:bg-navy-800 text-primary font-code-sm text-code-sm font-bold">ISO 27001:2022 A.8.8</span>
                      <span className="px-2.5 py-1 rounded bg-[#FFF5EB] dark:bg-navy-800 text-primary font-code-sm text-code-sm font-bold">SOC 2 CC7.1</span>
                      <span className="px-2.5 py-1 rounded bg-[#FFF5EB] dark:bg-navy-800 text-primary font-code-sm text-code-sm font-bold">NIST CSF ID.RA-1</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-bold uppercase tracking-wider">Remediation Policy Cadence</span>
                    <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 font-medium mt-1">High-severity PCI systems must be mitigated per policy. Status: <span className="text-secondary font-bold">On Track</span>.</p>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-bold uppercase tracking-wider">Auditor Verification Status</span>
                    <div className="p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-300 dark:border-navy-700 mt-1 text-slate-900 dark:text-white font-body-sm text-body-sm flex items-start gap-2 font-medium" id="drawer-audit-status">
                      <Clock className="h-5 w-5 shrink-0 text-secondary" />
                      <span>{isVerified ? "Audit verification recorded and logged into the GRC workpaper vault." : current.drawerAudit}</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-bold uppercase tracking-wider">Evidence Verification Reference</span>
                    <div className="p-space-xs rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-code-sm text-code-sm font-bold font-mono break-all mt-1 tracking-wider" id="drawer-hash">{current.hash}</div>
                  </div>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md border-t border-slate-100 dark:border-navy-800">
                <button 
                  onClick={handleVerifyAction}
                  disabled={isVerifying || isVerified}
                  className={`w-full flex items-center justify-center gap-2 py-space-sm px-space-md rounded-lg font-label-md text-label-md transition-colors shadow-sm ${isVerified ? 'bg-secondary text-on-secondary cursor-default' : 'bg-primary text-on-primary hover:bg-primary-container'}`}
                >
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <span id="drawer-action-btn">
                    {isVerifying ? "Recording Verification..." : isVerified ? "Remediation Verification Recorded" : "Verify Remediation Status"}
                  </span>
                </button>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 text-center mt-2">
                  Binds structured evidence directly into audit workpaper package.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 3: THREE FUNCTIONAL PILLARS SECTION  */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-16">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <h2 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-tight sm:leading-snug text-center">
              Purpose-Built for GRC Defensibility, Not Log Flooding
            </h2>
            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 mt-2 sm:mt-3 text-center leading-relaxed">
              Scanners detect bugs. OMNiGRC transforms those findings into contextual corporate risk models, automated team escalations, and certified auditor workpapers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex flex-col p-4 sm:p-6 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#FFF5EB] dark:bg-navy-800 text-primary flex items-center justify-center mb-3 sm:mb-4">
                <Network className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 text-center sm:text-left">Asset-Centric Prioritization</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 flex-1 leading-relaxed text-left">Triage vulnerabilities by business criticality, data classifications, and regulatory scope, not theoretical CVSS scores alone.</p>
              <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 dark:bg-[#16233F] flex items-center justify-between text-xs">
                <span className="text-slate-900 dark:text-white font-semibold">Scope Context</span>
                <span className="text-secondary font-bold">Configurable Scope Tiers</span>
              </div>
            </div>
            <div className="flex flex-col p-4 sm:p-6 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#FFF5EB] dark:bg-navy-800 text-primary flex items-center justify-center mb-3 sm:mb-4">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 text-center sm:text-left">Actionable Remediation SLAs</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 flex-1 leading-relaxed text-left">Automate remediation countdowns aligned to policy. Trigger team notifications and CISO approvals before breach limits hit.</p>
              <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 dark:bg-[#16233F] flex items-center justify-between text-xs">
                <span className="text-slate-900 dark:text-white font-semibold">Enforcement Policy</span>
                <span className="text-primary font-bold">Policy Escalations</span>
              </div>
            </div>
            <div className="flex flex-col p-4 sm:p-6 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#FFF5EB] dark:bg-navy-800 text-primary flex items-center justify-center mb-3 sm:mb-4">
                <Lock className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 text-center sm:text-left">Defensible Audit Closure</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 flex-1 leading-relaxed text-left">Store patch proof, diffs, and verified commit hashes directly in GRC audit logs for auditor review.</p>
              <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 dark:bg-[#16233F] flex items-center justify-between text-xs">
                <span className="text-slate-900 dark:text-white font-semibold">Audit Proof</span>
                <span className="text-secondary font-bold">Verified Evidence</span>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 4: COMPARISON SECTION  */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F] py-6 sm:py-10 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
              <h2 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-tight sm:leading-snug text-center">
                Raw Scanner Noise vs. Connected GRC Prioritization
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm">
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center justify-center sm:justify-start gap-2">
                  <XCircle className="h-5 w-5 text-error shrink-0" /> Uncontextualized Scanner Approach
                </div>
                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-error shrink-0 mt-0.5" />
                    <span>Flood engineering teams with raw uncontextualized scanner logs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-error shrink-0 mt-0.5" />
                    <span>No visibility into whether affected host carries sensitive data scope.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-error shrink-0 mt-0.5" />
                    <span>Manual spreadsheet tracking for audit evidence during SOC 2 reviews.</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-[#0A111F] border border-secondary/40 shadow-md">
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center justify-center sm:justify-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0" /> Connected OMNiGRC Workflow
                </div>
                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                    <span>Ingest scanner data and automatically elevate findings affecting critical assets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                    <span>Enforce automated SLA countdown clocks tied directly to corporate governance policy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                    <span>Store verified patch evidence and audit logs directly in the GRC workpaper vault.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 5: BOTTOM CTA  */}
        <section className="w-full bg-slate-900 dark:bg-[#070D19] text-white py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-4 sm:gap-6">
            <h2 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight sm:leading-snug text-center">
              Connect technical findings to compliance truth.
            </h2>
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl leading-relaxed">Integrate third-party scanners into OMNiGRC in minutes. Experience asset-contextualized vulnerability remediation.</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 pt-1 w-full sm:w-auto">
              <a href="/demo" className="px-5 py-3 rounded-lg bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-md transition-all text-center">
                Schedule Vulnerability Governance Demo
              </a>
              <a href="/contact-us" className="px-5 py-3 rounded-lg bg-slate-800 text-white text-xs sm:text-sm font-semibold hover:bg-slate-700 transition-colors text-center">
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
