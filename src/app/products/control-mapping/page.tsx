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

export default function ControlMappingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRatified, setIsRatified] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf8ff] dark:bg-[#0A111F] text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
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
        <section className="relative w-full max-w-7xl mx-auto px-gutter py-space-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/*  Left Column: Headline & Action Buttons  */}
            <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
              {/*  Category Eyebrow  */}
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-slate-200 dark:bg-navy-700 text-primary font-label-sm text-label-sm uppercase tracking-wider">
                <ArrowRightLeft className="h-5 w-5 shrink-0" />
                <span>CORE WORKFLOW 03: ADVISORY AI CONTROL CROSSWALKS</span>
              </div>
              {/*  Main Headline  */}
              <h1 className="font-headline-xl text-headline-xl text-slate-900 dark:text-white font-bold tracking-tight">
                Map Once, Satisfy Seven Frameworks with <span className="text-primary">Advisory AI</span>
              </h1>
              {/*  Sub-headline  */}
              <p className="font-body-lg text-body-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                Eliminate duplicate control testing. OMNiGRC ingests regulatory frameworks—ISO 27001, SOC 2, HIPAA, DPDP Act 2023, GDPR, and ISO 42001—to recommend unified control crosswalks with mandatory human-in-the-loop ratification.
              </p>
              {/*  CTA Button Row  */}
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-md transition-all"
                >
                  <Bot className="h-5 w-5 shrink-0" />
                  <span>Try Interactive Crosswalk Demo</span>
                </button>
                <a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-label-md text-label-md font-semibold hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors" href="/demo">
                  <FileText className="h-5 w-5 shrink-0" />
                  <span>View Framework Library</span>
                </a>
              </div>
              {/*  Key Metric Badges  */}
              <div className="grid grid-cols-3 gap-space-sm pt-space-md w-full max-w-xl">
                <div className="flex flex-col p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F]">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="font-code-md text-code-md font-bold">Reduced</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-medium mt-1">Audit Overhead Burden</span>
                </div>
                <div className="flex flex-col p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F]">
                  <div className="flex items-center gap-1 text-primary">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="font-code-md text-code-md font-bold">Human-Ratified</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-medium mt-1">Control Mappings</span>
                </div>
                <div className="flex flex-col p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F]">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="font-code-md text-code-md font-bold">Multi-Framework</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-medium mt-1">Cross-Mapped Scope</span>
                </div>
              </div>
            </div>
            {/*  Right Column: Visual Crosswalk Interactive Card  */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full rounded-xl bg-white dark:bg-[#0A111F] p-space-md shadow-xl flex flex-col gap-space-md border border-slate-200 dark:border-navy-700">
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
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <Layers className="h-5 w-5 shrink-0" />
              <span>Crosswalk Intelligence</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">
              Map Once. Satisfy Seven Frameworks with Advisory AI.
            </h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-3xl">
              Traditional GRC forces organizations to test the same security control five separate times for five separate auditors. OMNiGRC unifies framework requirements into a single canonical control hierarchy.
            </p>
          </div>
          {/*  3 Pillar Cards Grid  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-primary mb-space-sm">
                  <Bot className="h-5 w-5 shrink-0" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold">Semantic Embedding Alignment</h3>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-space-xs">Advisory AI parses framework regulatory intent using specialized legal LLM embeddings to propose high-confidence control overlaps.</p>
              </div>
              <span className="font-code-sm text-code-sm text-secondary font-bold mt-space-md">Advisory Precision Alignment</span>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-primary mb-space-sm">
                  <UserCheck className="h-5 w-5 shrink-0" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold">Mandatory Human Ratification</h3>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-space-xs">No autonomous AI decisions. Compliance leads must explicitly ratify every proposed crosswalk before auditor workpapers generate.</p>
              </div>
              <span className="font-code-sm text-code-sm text-secondary font-bold mt-space-md">Auditor-Defensible Record</span>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-primary mb-space-sm">
                  <Scale className="h-5 w-5 shrink-0" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold">Canonical Evidence Propagation</h3>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-space-xs">Upload evidence once to CTRL-SEC-04 and automatically satisfy evidence requests across ISO, SOC 2, HIPAA, and DPDP audits.</p>
              </div>
              <span className="font-code-sm text-code-sm text-secondary font-bold mt-space-md">Zero Duplicate Collection</span>
            </div>
          </div>
        </section>

        {/*  SECTION 3: INTERACTIVE CLAUSE CORRELATION EXPLORER  */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F] py-space-xl" id="clause-correlation">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="flex flex-col gap-space-xs mb-space-lg">
              <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                <Target className="h-5 w-5 shrink-0" />
                <span>Interactive Clause Correlation</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">Canonical Control Mapping Grid</h2>
              <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-3xl">Explore how a single technical safeguard satisfies multiple regulatory frameworks simultaneously. Click "Ratify Now" to test the human governance flow.</p>
            </div>
            {/*  Grid of Mapped Framework Cards  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
              {/*  1. ISO 27001  */}
              <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-label-sm text-label-sm font-bold text-slate-900 dark:text-white bg-slate-200 dark:bg-navy-700 px-space-xs py-0.5 rounded">ISO 27001:2022</span>
                    <span className="inline-flex items-center gap-1 font-code-sm text-code-sm text-secondary font-bold">
                      <CheckCircle className="h-4 w-4" /> VERIFIED MATCH
                    </span>
                  </div>
                  <p className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold mt-2">Clause A.9.4.2</p>
                  <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Secure Log-on Procedures: Phishing-resistant FIDO2 hardware tokens mandatory across all management interfaces.</p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-slate-600 dark:text-slate-300 font-code-sm text-code-sm">
                  <span>Auditor Sign-off: S. Patel, ISO Auditor</span>
                  <CheckCircle className="h-4 w-4 text-secondary" />
                </div>
              </div>
              {/*  2. SOC 2 Type II  */}
              <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-label-sm text-label-sm font-bold text-slate-900 dark:text-white bg-slate-200 dark:bg-navy-700 px-space-xs py-0.5 rounded">SOC 2 TYPE II</span>
                    <span className="inline-flex items-center gap-1 font-code-sm text-code-sm text-secondary font-bold">
                      <CheckCircle className="h-4 w-4" /> VERIFIED MATCH
                    </span>
                  </div>
                  <p className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold mt-2">CC6.1 &amp; CC6.6</p>
                  <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Logical Access &amp; Boundary Protection: Multi-factor validation required prior to routing into production subnets.</p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-slate-600 dark:text-slate-300 font-code-sm text-code-sm">
                  <span>Auditor Sign-off: Grant &amp; Co.</span>
                  <CheckCircle className="h-4 w-4 text-secondary" />
                </div>
              </div>
              {/*  3. HIPAA Security Rule  */}
              <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-label-sm text-label-sm font-bold text-slate-900 dark:text-white bg-slate-200 dark:bg-navy-700 px-space-xs py-0.5 rounded">HIPAA SECURITY</span>
                    <span className="inline-flex items-center gap-1 font-code-sm text-code-sm text-secondary font-bold">
                      <CheckCircle className="h-4 w-4" /> VERIFIED MATCH
                    </span>
                  </div>
                  <p className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold mt-2">45 CFR § 164.312(a)(2)(iv)</p>
                  <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Access Control &amp; Authentication: Verify person or entity seeking access to ePHI before session enablement.</p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-slate-600 dark:text-slate-300 font-code-sm text-code-sm">
                  <span>Auditor Sign-off: Internal Review</span>
                  <CheckCircle className="h-4 w-4 text-secondary" />
                </div>
              </div>
              {/*  4. DPDP Act 2023  */}
              <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-label-sm text-label-sm font-bold text-slate-900 dark:text-white bg-slate-200 dark:bg-navy-700 px-space-xs py-0.5 rounded">DPDP ACT 2023</span>
                    <span className="inline-flex items-center gap-1 font-code-sm text-code-sm text-secondary font-bold">
                      <CheckCircle className="h-4 w-4" /> VERIFIED MATCH
                    </span>
                  </div>
                  <p className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold mt-2">Section 8(5)</p>
                  <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Reasonable Security Safeguards: Prevention of personal data breach through role-gated step-up challenges.</p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-slate-600 dark:text-slate-300 font-code-sm text-code-sm">
                  <span>Auditor Sign-off: DPO Office</span>
                  <CheckCircle className="h-4 w-4 text-secondary" />
                </div>
              </div>

              {/*  5. ISO 42001 (ADVISORY SUGGESTION - ACTIONABLE)  */}
              {!isRatified ? (
                <div className="p-space-md rounded-xl bg-primary-fixed/20 border border-primary/30 flex flex-col justify-between shadow-sm relative overflow-hidden" id="ai-pending-card">
                  <div>
                    <div className="flex items-center justify-between mb-space-xs">
                      <span className="font-label-sm text-label-sm font-bold text-on-primary-fixed bg-primary-fixed px-space-xs py-0.5 rounded">ISO/IEC 42001 (AI)</span>
                      <span className="inline-flex items-center gap-1 font-code-sm text-code-sm text-primary font-bold">
                        <Clock className="h-4 w-4" /> PENDING REVIEW
                      </span>
                    </div>
                    <p className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold mt-2">Clause B.6.2.3</p>
                    <p className="font-body-sm text-body-sm text-slate-700 dark:text-slate-200 mt-1">
                      AI Model Access Safeguards: Restricting API access and tuning environments through secure hardware credentials.
                    </p>
                    <div className="mt-2 flex items-center gap-1 font-code-sm text-code-sm text-primary font-bold">
                      <Zap className="h-4 w-4" />
                      <span>Semantic Match Alignment: Recommended</span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-primary-fixed/40 flex items-center justify-between">
                    <span className="font-code-sm text-code-sm text-slate-600 dark:text-slate-300">Action: Human Ratification</span>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="px-space-sm py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary-container transition-colors shadow-sm" 
                      id="ratify-trigger-btn"
                    >
                      Ratify Now
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-secondary/40 flex flex-col justify-between shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-space-xs">
                      <span className="font-label-sm text-label-sm font-bold text-slate-900 dark:text-white bg-slate-200 dark:bg-navy-700 px-space-xs py-0.5 rounded">ISO/IEC 42001 (AI)</span>
                      <span className="inline-flex items-center gap-1 font-code-sm text-code-sm text-secondary font-bold">
                        <CheckCircle className="h-4 w-4" /> RATIFIED
                      </span>
                    </div>
                    <p className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold mt-2">Clause B.6.2.3</p>
                    <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">
                      AI Model Access Safeguards: Restricting API access and tuning environments through secure hardware credentials.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-slate-600 dark:text-slate-300 font-code-sm text-code-sm">
                    <span className="text-secondary font-bold">Ratified: Event Log Reference #94812</span>
                    <CheckCircle className="h-4 w-4 text-secondary" />
                  </div>
                </div>
              )}

              {/*  6. EU GDPR  */}
              <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-label-sm text-label-sm font-bold text-slate-900 dark:text-white bg-slate-200 dark:bg-navy-700 px-space-xs py-0.5 rounded">EU GDPR</span>
                    <span className="inline-flex items-center gap-1 font-code-sm text-code-sm text-secondary font-bold">
                      <CheckCircle className="h-4 w-4" /> VERIFIED MATCH
                    </span>
                  </div>
                  <p className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold mt-2">Article 32(1)(b)</p>
                  <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Security of Processing: Ability to ensure ongoing confidentiality and integrity of processing systems.</p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-slate-600 dark:text-slate-300 font-code-sm text-code-sm">
                  <span>Auditor Sign-off: DPO Office</span>
                  <CheckCircle className="h-4 w-4 text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 4: DATA PAYLOAD MINIMIZATION PIPELINE  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <Lock className="h-5 w-5 shrink-0" />
              <span>Privacy by Design Architecture</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">
              The 8-Stage Data Payload Minimization Pipeline
            </h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-3xl">
              Why compliance teams trust OMNiGRC Advisory AI: structured event logging, sensitive-data payload minimization, and strict human review boundaries.
            </p>
          </div>
          {/*  8-Stage Pipeline Grid  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 01</span>
                <h4 className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold mt-1">Payload Minimization</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Advisory payloads are minimized and sanitized before being sent to external AI providers.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 02</span>
                <h4 className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold mt-1">API Key Authorization Check</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Validates tenant authorization parameters before sending anonymized metadata into the Advisory AI engine.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 03</span>
                <h4 className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold mt-1">Semantic Embedding Match</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Calculates similarity scores against pre-indexed regulatory framework definitions.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 04</span>
                <h4 className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold mt-1">Candidate Recommendation</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Generates candidate crosswalk mappings for compliance review.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 05</span>
                <h4 className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold mt-1">Human Governance Queue</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Routes crosswalk recommendations to designated GRC leads for evaluation.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 06</span>
                <h4 className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold mt-1">Human Ratification Lock</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">User explicitly verifies and approves the crosswalk mapping.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 07</span>
                <h4 className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold mt-1">Canonical Evidence Binding</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Binds evidence artifact to ratified framework clause references.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 08</span>
                <h4 className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold mt-1">Structured Evidence Verification</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Records verified audit assertion into GRC workpaper vault.</p>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 5: ADVISORY AI PRINCIPLES & GOVERNANCE  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="p-space-xl rounded-2xl bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-space-lg shadow-xl">
            <div className="flex flex-col items-start gap-space-md max-w-2xl">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-slate-800 text-primary font-label-sm text-label-sm uppercase tracking-wider">
                <ShieldCheck className="h-5 w-5 shrink-0" />
                <span>Compliance Principle</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold">
                Why OMNiGRC Rejects Unsupervised Autonomous Agents
              </h2>
              <p className="font-body-lg text-body-lg text-slate-300">
                In compliance, hallucinations create audit risks. Autonomous agents that silently rewrite controls introduce unquantifiable regulatory liability. OMNiGRC position: AI is advisory; human compliance officers govern all decisions.
              </p>
              <div className="p-space-md rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 font-body-sm text-body-sm">
                <span className="font-semibold text-white">Compliance Protocol:</span> OMNiGRC never automatically merges AI recommendations into active audit workpapers without explicit human sign-off recorded in defensible audit trails.
              </div>
            </div>
            <div className="w-full lg:w-96 p-space-md rounded-xl bg-slate-800 border border-slate-700 flex flex-col gap-space-sm shrink-0">
              <span className="font-label-md text-label-md text-white font-bold">Human Governance Checklist</span>
              <div className="space-y-2 font-code-sm text-code-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                  <span>Semantic confidence evaluation threshold</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                  <span>Mandatory CISO / DPO sign-off gate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                  <span>Full revision history of control edits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                  <span>Exportable audit trail record per framework</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 6: FRAMEWORK CROSSWALK MATRIX TABLE  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <Scale className="h-5 w-5 shrink-0" />
              <span>Multi-Framework Crosswalk Matrix</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">Cross-Framework Regulatory Correlation</h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-2xl">Standardize controls across technical domains to reduce duplicate testing and lower audit review overhead.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-[#0A111F] shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-navy-800 font-label-sm text-label-sm text-slate-900 dark:text-white border-b border-slate-200 dark:border-navy-700">
                  <th className="p-space-sm">Canonical Safeguard ID</th>
                  <th className="p-space-sm">ISO 27001:2022</th>
                  <th className="p-space-sm">SOC 2 Type II</th>
                  <th className="p-space-sm">HIPAA Security</th>
                  <th className="p-space-sm">India DPDP Act 2023</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-navy-800 font-body-sm text-body-sm text-slate-600 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/50">
                  <td className="p-space-sm font-code-sm text-slate-900 dark:text-white font-semibold">CTRL-SEC-04 (MFA / FIDO2)</td>
                  <td className="p-space-sm">Clause A.9.4.2</td>
                  <td className="p-space-sm">CC6.1 &amp; CC6.6</td>
                  <td className="p-space-sm">45 CFR §164.312(a)</td>
                  <td className="p-space-sm">Section 8(5) Safeguards</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/50">
                  <td className="p-space-sm font-code-sm text-slate-900 dark:text-white font-semibold">CTRL-NET-02 (Cloud Firewall)</td>
                  <td className="p-space-sm">Clause A.8.20</td>
                  <td className="p-space-sm">CC6.6 &amp; CC6.7</td>
                  <td className="p-space-sm">45 CFR §164.312(e)</td>
                  <td className="p-space-sm">Section 8(5) Network Tier</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/50">
                  <td className="p-space-sm font-code-sm text-slate-900 dark:text-white font-semibold">CTRL-DAT-01 (KMS Encryption)</td>
                  <td className="p-space-sm">Clause A.8.24</td>
                  <td className="p-space-sm">CC6.1 &amp; CC6.3</td>
                  <td className="p-space-sm">45 CFR §164.312(a)(2)(iv)</td>
                  <td className="p-space-sm">Section 8(5) Data Safeguards</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/50">
                  <td className="p-space-sm font-code-sm text-slate-900 dark:text-white font-semibold">CTRL-AUD-05 (Structured Logging)</td>
                  <td className="p-space-sm">Clause A.8.15</td>
                  <td className="p-space-sm">CC7.2 &amp; CC7.3</td>
                  <td className="p-space-sm">45 CFR §164.312(b)</td>
                  <td className="p-space-sm">Section 8(6) Breach Audit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/*  SECTION 7: BOTTOM CTA  */}
        <section className="w-full bg-slate-900 dark:bg-[#070D19] text-white py-space-xl">
          <div className="max-w-7xl mx-auto px-gutter flex flex-col items-center text-center gap-space-md">
            <h2 className="font-headline-lg text-headline-lg font-bold">Ready to eliminate duplicate compliance controls?</h2>
            <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl">Upload your current framework policies into OMNiGRC and experience human-governed advisory AI control mapping in real time.</p>
            <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
              <a href="/demo" className="px-space-md py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-md transition-all">
                Schedule Advisory AI Crosswalk Demo
              </a>
              <a href="/contact-us" className="px-space-md py-3 rounded-lg bg-slate-800 text-white font-label-md text-label-md font-semibold hover:bg-slate-700 transition-colors">
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
