"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ControlMapping3DGraph } from "@/components/3d/ControlMapping3DGraph";
import {
  FolderLock, Database, Verified, Calendar, BookOpen, Lock, Info,
  AlertOctagon, CheckCircle, Link as LinkIcon, Bot, CalendarDays, Badge,
  CheckSquare, Eye, HelpCircle, ShieldCheck, History, Circle, CheckCircle2,
  XCircle, Cloud, Shield, ArrowRight, Network, ArrowUpRight, Search, Server,
  Cpu, Key, FileText, Layers, Share2, Filter, Download, Plus, MapPin, 
  Settings, Check, X, Bell, LayoutDashboard, Target, Zap, ChevronRight, UserCheck, Terminal, Building2, Scale, Gavel, AlertTriangle, PenTool, ArrowRightLeft, Hourglass, Activity, Clock, MailCheck, ClipboardCheck, LogIn, Sliders, ListChecks, ClipboardX, Repeat, Bug, CalendarClock, LineChart, UserCircle, Timer, FolderKanban, ArrowDown
} from "lucide-react";

export default function ControlMappingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRatified, setIsRatified] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <div className="flex flex-col w-full pt-16">
        {/*  Interactive Human Ratification Modal  */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-gutter bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 rounded-xl shadow-2xl max-w-xl w-full p-space-lg flex flex-col gap-space-md relative animate-in fade-in zoom-in duration-200">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase font-bold tracking-wider">
                <ShieldCheck className="h-5 w-5" />
                <span>Human Governance Ratification Protocol</span>
              </div>

              <div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold">Ratify AI Clause Crosswalk Mapping</h3>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">
                  OMNiGRC Advisory AI suggested linking <span className="font-semibold text-slate-900 dark:text-white">ISO 27001 A.9.4.2</span> to <span className="font-semibold text-slate-900 dark:text-white">ISO/IEC 42001 Clause B.6.2.3</span> with high semantic confidence.
                </p>
              </div>

              <div className="p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-200 dark:border-navy-700 space-y-2">
                <div className="flex items-center justify-between font-code-sm text-code-sm">
                  <span className="text-slate-600 dark:text-slate-300">Target Framework:</span>
                  <span className="font-bold text-slate-900 dark:text-white">ISO/IEC 42001:2023 (AI Governance)</span>
                </div>
                <div className="flex items-center justify-between font-code-sm text-code-sm">
                  <span className="text-slate-600 dark:text-slate-300">Suggested Control:</span>
                  <span className="font-bold text-primary">CTRL-SEC-04 (Multi-Factor &amp; FIDO2 Access)</span>
                </div>
                <div className="flex items-center justify-between font-code-sm text-code-sm">
                  <span className="text-slate-600 dark:text-slate-300">Auditor Sign-off Requirement:</span>
                  <span className="font-bold text-secondary">Manual Human Ratification Required</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-space-sm pt-space-xs">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-space-md py-2 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 font-label-md text-label-md font-semibold hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    setIsRatified(true);
                    setIsModalOpen(false);
                  }}
                  className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-md transition-all flex items-center gap-1.5"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>Confirm Human Ratification</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/*  SECTION 1: HERO & MAP-ONCE VALUE PROPOSITION  */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8 overflow-hidden bg-grid-mesh-adaptive">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
            {/*  Left Column: Headline & Action Buttons  */}
            <div className="lg:col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4 w-full">
              {/*  Category Eyebrow  */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 dark:bg-navy-700 text-primary text-xs uppercase tracking-wider font-semibold mx-auto sm:mx-0 text-center">
                <ArrowRightLeft className="h-4 w-4 shrink-0" />
                <span className="text-center">CORE WORKFLOW 03: ADVISORY AI CONTROL CROSSWALKS</span>
              </div>
              {/*  Main Headline  */}
              <h1 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-tight text-center w-full">
                Map Once, Satisfy Seven Frameworks with <span className="text-primary">Advisory AI</span>
              </h1>
              {/*  Sub-headline  */}
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed text-center sm:text-left mx-auto sm:mx-0">
                Eliminate duplicate control testing. OMNiGRC ingests regulatory frameworks (ISO 27001, SOC 2, HIPAA, DPDP Act 2023, GDPR, and ISO 42001) to recommend unified control crosswalks with mandatory human-in-the-loop ratification.
              </p>
              {/*  CTA Button Row  */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2.5 sm:gap-4 pt-1 sm:pt-2 w-full">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-lg bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-md transition-all text-center"
                >
                  <Bot className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  <span>Try Interactive Crosswalk Demo</span>
                </button>
                <a 
                  className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors shadow-sm text-center" 
                  href="/demo"
                >
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  <span>View Framework Library</span>
                </a>
              </div>
              {/*  Key Metric Badges  */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2 sm:pt-3 w-full max-w-xl mx-auto sm:mx-0">
                <div className="flex flex-col p-2 sm:p-2.5 rounded-lg bg-slate-50 dark:bg-[#16233F] overflow-hidden text-center items-center">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-bold truncate">Reduced</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-medium mt-0.5 leading-snug text-center">Audit Burden</span>
                </div>
                <div className="flex flex-col p-2 sm:p-2.5 rounded-lg bg-slate-50 dark:bg-[#16233F] overflow-hidden text-center items-center">
                  <div className="flex items-center gap-1 text-primary">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-bold truncate">Human-Ratified</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-medium mt-0.5 leading-snug text-center">Control Mappings</span>
                </div>
                <div className="flex flex-col p-2 sm:p-2.5 rounded-lg bg-slate-50 dark:bg-[#16233F] overflow-hidden text-center items-center">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-bold truncate">Multi-Framework</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-medium mt-0.5 leading-snug text-center">Cross-Mapped</span>
                </div>
              </div>
            </div>
            {/*  Right Column: Visual Crosswalk Interactive Card  */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full rounded-xl bg-white dark:bg-[#0A111F] p-3.5 sm:p-5 lg:p-6 shadow-xl flex flex-col gap-3 sm:gap-4 border border-slate-300 dark:border-navy-700">
                <div className="flex items-center justify-between pb-space-xs border-b border-slate-100 dark:border-navy-800">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
                    <span className="font-label-md text-label-md text-slate-900 dark:text-white font-bold">Advisory AI Crosswalk Engine</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-navy-700 font-code-sm text-code-sm text-slate-900 dark:text-white">SAMPLE CROSSWALK</span>
                </div>
                {/*  Control Entry Header  */}
                <div className="p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-200 dark:border-navy-700">
                  <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300 uppercase">Primary Implemented Control</span>
                  <div className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-0.5">CTRL-SEC-04: Multi-Factor &amp; FIDO2 Access</div>
                  <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Enforces hardware token authentication across production bastions and identity providers.</p>
                </div>
                {/*  Mapped Clauses Fan-Out  */}
                <div className="space-y-space-xs">
                  <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300 uppercase">Satisfied Framework Clauses (1:N Expansion)</span>
                  <div className="p-space-xs rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <span className="font-code-sm text-code-sm font-semibold text-slate-900 dark:text-white">ISO 27001:2022 • Clause A.9.4.2</span>
                    <span className="font-label-sm text-label-sm text-secondary font-bold">MAPPED MATCH</span>
                  </div>
                  <div className="p-space-xs rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <span className="font-code-sm text-code-sm font-semibold text-slate-900 dark:text-white">SOC 2 Type II • CC6.1 &amp; CC6.6</span>
                    <span className="font-label-sm text-label-sm text-secondary font-bold">MAPPED MATCH</span>
                  </div>
                  <div className="p-space-xs rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <span className="font-code-sm text-code-sm font-semibold text-slate-900 dark:text-white">HIPAA Security • 45 CFR §164.312(a)</span>
                    <span className="font-label-sm text-label-sm text-secondary font-bold">MAPPED MATCH</span>
                  </div>
                  <div className="p-space-xs rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <span className="font-code-sm text-code-sm font-semibold text-slate-900 dark:text-white">India DPDP Act 2023 • Section 8(5)</span>
                    <span className="font-label-sm text-label-sm text-secondary font-bold">MAPPED MATCH</span>
                  </div>
                </div>
                {/*  Human Ratification Status  */}
                <div className="pt-space-xs border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-slate-600 dark:text-slate-300 font-code-sm text-code-sm">
                  <span>Governance Status: Human Approved</span>
                  <span className="text-secondary font-bold flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" /> Sign-off Recorded
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 2: MAP-ONCE CAPABILITY OVERVIEW  */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <div className="flex flex-col gap-1.5 mb-3 sm:mb-5 text-left">
            <h2 className="text-[19px] min-[360px]:text-[21px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug text-left">
              Map Once. Satisfy Seven Frameworks with Advisory AI.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed text-left mt-0.5">
              Traditional GRC forces organizations to test the same security control five separate times for five separate auditors. OMNiGRC unifies framework requirements into a single canonical control hierarchy.
            </p>
          </div>
          {/*  3 Pillar Cards Grid  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 text-left">
            <div className="p-3.5 sm:p-5 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between text-left">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-primary mb-2.5 sm:mb-3">
                  <Bot className="h-5 w-5 shrink-0" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white text-left">Semantic Embedding Alignment</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 sm:mt-1.5 leading-relaxed text-left">Advisory AI parses framework regulatory intent using specialized legal LLM embeddings to propose high-confidence control overlaps.</p>
              </div>
              <span className="font-mono text-[10px] sm:text-xs text-secondary font-bold mt-2.5 sm:mt-4 text-left">Advisory Precision Alignment</span>
            </div>
            <div className="p-3.5 sm:p-5 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between text-left">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-primary mb-2.5 sm:mb-3">
                  <UserCheck className="h-5 w-5 shrink-0" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white text-left">Mandatory Human Ratification</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 sm:mt-1.5 leading-relaxed text-left">No autonomous AI decisions. Compliance leads must explicitly ratify every proposed crosswalk before auditor workpapers generate.</p>
              </div>
              <span className="font-mono text-[10px] sm:text-xs text-secondary font-bold mt-2.5 sm:mt-4 text-left">Auditor-Defensible Record</span>
            </div>
            <div className="p-3.5 sm:p-5 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between text-left">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-primary mb-2.5 sm:mb-3">
                  <Scale className="h-5 w-5 shrink-0" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white text-left">Canonical Evidence Propagation</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 sm:mt-1.5 leading-relaxed text-left">Upload evidence once to CTRL-SEC-04 and automatically satisfy evidence requests across ISO, SOC 2, HIPAA, and DPDP audits.</p>
              </div>
              <span className="font-mono text-[10px] sm:text-xs text-secondary font-bold mt-2.5 sm:mt-4 text-left">Zero Duplicate Collection</span>
            </div>
          </div>
        </section>

        {/*  SECTION 3: INTERACTIVE CLAUSE CORRELATION EXPLORER  */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F] py-6 sm:py-10 text-left" id="clause-correlation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="flex flex-col gap-1.5 mb-3 sm:mb-5 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs text-primary uppercase font-bold tracking-wider text-left">
                <Target className="h-4 w-4 shrink-0" />
                <span>Interactive Clause Correlation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug text-left">
                <span className="block">Canonical Control</span>
                <span className="block">Mapping Grid</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed text-left">Explore how a single technical safeguard satisfies multiple regulatory frameworks simultaneously. Click "Ratify Now" to test the human governance flow.</p>
            </div>
            {/*  Grid of Mapped Framework Cards  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-left">
              {/*  1. ISO 27001  */}
              <div className="p-3.5 sm:p-5 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white bg-slate-200 dark:bg-navy-700 px-2 py-0.5 rounded">ISO 27001:2022</span>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] sm:text-xs text-secondary font-bold">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0" /> VERIFIED MATCH
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-900 dark:text-white font-semibold mt-1.5 text-left">Clause A.9.4.2</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left">Secure Log-on Procedures: Phishing-resistant FIDO2 hardware tokens mandatory across all management interfaces.</p>
                </div>
                <div className="mt-3 sm:mt-4 pt-2 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-slate-600 dark:text-slate-300 font-mono text-[10px] sm:text-xs">
                  <span>Auditor Sign-off: S. Patel, ISO Auditor</span>
                  <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                </div>
              </div>
              {/*  2. SOC 2 Type II  */}
              <div className="p-3.5 sm:p-5 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white bg-slate-200 dark:bg-navy-700 px-2 py-0.5 rounded">SOC 2 TYPE II</span>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] sm:text-xs text-secondary font-bold">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0" /> VERIFIED MATCH
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-900 dark:text-white font-semibold mt-1.5 text-left">CC6.1 &amp; CC6.6</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left">Logical Access &amp; Boundary Protection: Multi-factor validation required prior to routing into production subnets.</p>
                </div>
                <div className="mt-3 sm:mt-4 pt-2 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-slate-600 dark:text-slate-300 font-mono text-[10px] sm:text-xs">
                  <span>Auditor Sign-off: Grant &amp; Co.</span>
                  <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                </div>
              </div>
              {/*  3. HIPAA Security Rule  */}
              <div className="p-3.5 sm:p-5 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white bg-slate-200 dark:bg-navy-700 px-2 py-0.5 rounded">HIPAA SECURITY</span>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] sm:text-xs text-secondary font-bold">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0" /> VERIFIED MATCH
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-900 dark:text-white font-semibold mt-1.5 text-left">45 CFR § 164.312(a)(2)(iv)</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left">Access Control &amp; Authentication: Verify person or entity seeking access to ePHI before session enablement.</p>
                </div>
                <div className="mt-3 sm:mt-4 pt-2 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-slate-600 dark:text-slate-300 font-mono text-[10px] sm:text-xs">
                  <span>Auditor Sign-off: Internal Review</span>
                  <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                </div>
              </div>
              {/*  4. DPDP Act 2023  */}
              <div className="p-3.5 sm:p-5 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white bg-slate-200 dark:bg-navy-700 px-2 py-0.5 rounded">DPDP ACT 2023</span>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] sm:text-xs text-secondary font-bold">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0" /> VERIFIED MATCH
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-900 dark:text-white font-semibold mt-1.5 text-left">Section 8(5)</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left">Reasonable Security Safeguards: Prevention of personal data breach through role-gated step-up challenges.</p>
                </div>
                <div className="mt-3 sm:mt-4 pt-2 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-slate-600 dark:text-slate-300 font-mono text-[10px] sm:text-xs">
                  <span>Auditor Sign-off: DPO Office</span>
                  <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                </div>
              </div>

              {/*  5. ISO 42001 (ADVISORY SUGGESTION - ACTIONABLE)  */}
              {!isRatified ? (
                <div className="p-3.5 sm:p-5 rounded-xl bg-primary-fixed/20 border border-primary/30 flex flex-col justify-between shadow-sm relative overflow-hidden text-left" id="ai-pending-card">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] sm:text-xs font-bold text-on-primary-fixed bg-primary-fixed px-2 py-0.5 rounded">ISO/IEC 42001 (AI)</span>
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] sm:text-xs text-primary font-bold">
                        <Clock className="h-3.5 w-3.5 shrink-0" /> PENDING REVIEW
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-900 dark:text-white font-semibold mt-1.5 text-left">Clause B.6.2.3</p>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-1 leading-relaxed text-left">
                      AI Model Access Safeguards: Restricting API access and tuning environments through secure hardware credentials.
                    </p>
                    <div className="mt-2 flex items-center gap-1 font-mono text-[10px] sm:text-xs text-primary font-bold">
                      <Zap className="h-3.5 w-3.5 shrink-0" />
                      <span>Semantic Match Alignment: Recommended</span>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 pt-2 border-t border-primary-fixed/40 flex items-center justify-between">
                    <span className="font-mono text-[10px] sm:text-xs text-slate-600 dark:text-slate-300">Action: Human Ratification</span>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="px-2.5 py-1 rounded bg-primary text-on-primary text-xs font-semibold hover:bg-primary-container transition-colors shadow-sm" 
                      id="ratify-trigger-btn"
                    >
                      Ratify Now
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-3.5 sm:p-5 rounded-xl bg-white dark:bg-[#0A111F] border border-secondary/40 flex flex-col justify-between shadow-md transition-shadow text-left">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white bg-slate-200 dark:bg-navy-700 px-2 py-0.5 rounded">ISO/IEC 42001 (AI)</span>
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] sm:text-xs text-secondary font-bold">
                        <CheckCircle className="h-3.5 w-3.5 shrink-0" /> RATIFIED
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-900 dark:text-white font-semibold mt-1.5 text-left">Clause B.6.2.3</p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left">
                      AI Model Access Safeguards: Restricting API access and tuning environments through secure hardware credentials.
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-4 pt-2 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-slate-600 dark:text-slate-300 font-mono text-[10px] sm:text-xs">
                    <span className="text-secondary font-bold">Ratified: Event Log Reference #94812</span>
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                  </div>
                </div>
              )}

              {/*  6. EU GDPR  */}
              <div className="p-3.5 sm:p-5 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white bg-slate-200 dark:bg-navy-700 px-2 py-0.5 rounded">EU GDPR</span>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] sm:text-xs text-secondary font-bold">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0" /> VERIFIED MATCH
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-900 dark:text-white font-semibold mt-1.5 text-left">Article 32(1)(b)</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left">Security of Processing: Ability to ensure ongoing confidentiality and integrity of processing systems.</p>
                </div>
                <div className="mt-3 sm:mt-4 pt-2 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-slate-600 dark:text-slate-300 font-mono text-[10px] sm:text-xs">
                  <span>Auditor Sign-off: DPO Office</span>
                  <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 4: DATA PAYLOAD MINIMIZATION PIPELINE  */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10" id="pipeline-architecture">
          <ControlMapping3DGraph />
        </section>

        {/*  SECTION 5: ADVISORY AI PRINCIPLES & GOVERNANCE  */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 text-left">
          <div className="p-4 sm:p-8 lg:p-10 rounded-2xl bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 shadow-xl text-left">
            <div className="flex flex-col items-start gap-3 sm:gap-4 max-w-2xl text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-primary text-xs uppercase tracking-wider font-semibold text-left">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <span>Compliance Principle</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug text-left">
                <span className="block">Why OMNiGRC</span>
                <span className="block whitespace-nowrap sm:whitespace-normal">Rejects Unsupervised</span>
                <span className="block">Autonomous Agents</span>
              </h2>
              <p className="text-xs sm:text-base text-slate-300 text-left leading-relaxed">
                In compliance, hallucinations create audit risks. Autonomous agents that silently rewrite controls introduce unquantifiable regulatory liability. OMNiGRC position: AI is advisory; human compliance officers govern all decisions.
              </p>
              <div className="p-3 sm:p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 text-xs sm:text-sm text-left leading-relaxed">
                <span className="font-semibold text-white">Compliance Protocol:</span> OMNiGRC never automatically merges AI recommendations into active audit workpapers without explicit human sign-off recorded in defensible audit trails.
              </div>
            </div>
            <div className="w-full lg:w-96 p-3.5 sm:p-5 rounded-xl bg-slate-800 border border-slate-700 flex flex-col gap-2.5 sm:gap-3 shrink-0 text-left">
              <span className="text-xs sm:text-sm text-white font-bold text-left">Human Governance Checklist</span>
              <div className="space-y-2 font-mono text-[10px] sm:text-xs text-slate-300 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-secondary shrink-0" />
                  <span>Semantic confidence evaluation threshold</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-secondary shrink-0" />
                  <span>Mandatory CISO / DPO sign-off gate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-secondary shrink-0" />
                  <span>Full revision history of control edits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-secondary shrink-0" />
                  <span>Exportable audit trail record per framework</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 6: FRAMEWORK CROSSWALK MATRIX TABLE  */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 text-left">
          <div className="flex flex-col gap-1.5 mb-3 sm:mb-5 text-left">
            <div className="inline-flex items-center gap-1.5 text-xs text-primary uppercase font-bold tracking-wider text-left">
              <Scale className="h-4 w-4 shrink-0" />
              <span>Multi-Framework Crosswalk Matrix</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug text-left">
              <span className="block">Cross-Framework</span>
              <span className="block">Regulatory Correlation</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl text-left leading-relaxed">Standardize controls across technical domains to reduce duplicate testing and lower audit review overhead.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-[#0A111F] shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-navy-800 text-xs font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-navy-700">
                  <th className="p-2.5 sm:p-3">Canonical Safeguard ID</th>
                  <th className="p-2.5 sm:p-3">ISO 27001:2022</th>
                  <th className="p-2.5 sm:p-3">SOC 2 Type II</th>
                  <th className="p-2.5 sm:p-3">HIPAA Security</th>
                  <th className="p-2.5 sm:p-3">India DPDP Act 2023</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-navy-800 text-xs text-slate-600 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/50">
                  <td className="p-2.5 sm:p-3 font-mono text-slate-900 dark:text-white font-semibold">CTRL-SEC-04 (MFA / FIDO2)</td>
                  <td className="p-2.5 sm:p-3">Clause A.9.4.2</td>
                  <td className="p-2.5 sm:p-3">CC6.1 &amp; CC6.6</td>
                  <td className="p-2.5 sm:p-3">45 CFR §164.312(a)</td>
                  <td className="p-2.5 sm:p-3">Section 8(5) Safeguards</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/50">
                  <td className="p-2.5 sm:p-3 font-mono text-slate-900 dark:text-white font-semibold">CTRL-NET-02 (Cloud Firewall)</td>
                  <td className="p-2.5 sm:p-3">Clause A.8.20</td>
                  <td className="p-2.5 sm:p-3">CC6.6 &amp; CC6.7</td>
                  <td className="p-2.5 sm:p-3">45 CFR §164.312(e)</td>
                  <td className="p-2.5 sm:p-3">Section 8(5) Network Tier</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/50">
                  <td className="p-2.5 sm:p-3 font-mono text-slate-900 dark:text-white font-semibold">CTRL-DAT-01 (KMS Encryption)</td>
                  <td className="p-2.5 sm:p-3">Clause A.8.24</td>
                  <td className="p-2.5 sm:p-3">CC6.1 &amp; CC6.3</td>
                  <td className="p-2.5 sm:p-3">45 CFR §164.312(a)(2)(iv)</td>
                  <td className="p-2.5 sm:p-3">Section 8(5) Data Safeguards</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/50">
                  <td className="p-2.5 sm:p-3 font-mono text-slate-900 dark:text-white font-semibold">CTRL-AUD-05 (Structured Logging)</td>
                  <td className="p-2.5 sm:p-3">Clause A.8.15</td>
                  <td className="p-2.5 sm:p-3">CC7.2 &amp; CC7.3</td>
                  <td className="p-2.5 sm:p-3">45 CFR §164.312(b)</td>
                  <td className="p-2.5 sm:p-3">Section 8(6) Breach Audit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/*  SECTION 7: BOTTOM CTA  */}
        <section className="w-full bg-slate-900 dark:bg-[#070D19] text-white py-6 sm:py-10 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-3 sm:gap-4">
            <h2 className="text-[19px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug text-left w-full">
              Ready to eliminate duplicate compliance controls?
            </h2>
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl leading-relaxed">Upload your current framework policies into OMNiGRC and experience human-governed advisory AI control mapping in real time.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto">
              <a href="/demo" className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-lg bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-md transition-all text-center">
                Schedule Advisory AI Crosswalk Demo
              </a>
              <a href="/contact-us" className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-lg bg-slate-800 text-white text-xs sm:text-sm font-semibold hover:bg-slate-700 transition-colors text-center">
                Speak with a Compliance Specialist
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
