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

export default function RemediationPage() {
  const [selectedActionKey, setSelectedActionKey] = useState<'act-104' | 'act-098' | 'act-112'>('act-104');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'audit' | 'risk' | 'vulnerability'>('all');

  const actionDatabase = {
    'act-104': {
      code: 'ACT-104',
      type: 'audit',
      title: 'Rotate Staging VPC Root Bastion Credentials',
      origin: 'Q2 SOC 2 Internal Audit finding FND-2026-03',
      safeguard: 'CTRL-IAM-09 (MFA & Privileged Access Control)',
      owner: 'Alex C. (DevOps Lead) • Verification required by Lead Auditor',
      evidenceDesc: 'PR #412 git commit diff + CLI configuration verification output attached to Evidence Vault.',
      evidenceCode: 'git: commit 8f9b2d1c (vpc-bastion-keygen.sh applied)',
      verifyStatus: 'Awaiting review by CISO / Lead Internal Auditor',
      verifyBadge: 'Pending Verification',
      badgeColor: 'bg-secondary-container text-on-secondary-container'
    },
    'act-098': {
      code: 'ACT-098',
      type: 'risk',
      title: 'Deploy MFA Enforcement on Legacy Internal Wiki',
      origin: 'Risk Treatment Register (RSK-042: Legacy Unauthenticated Portal)',
      safeguard: 'CTRL-AUTH-03 (Multi-Factor Mandatory Perimeter)',
      owner: 'Marcus K. (IT Infrastructure Admin)',
      evidenceDesc: 'SAML Identity Provider configuration audit log + 2FA enforced screenshot session.',
      evidenceCode: 'sso: provider_policy: mfa_required=true (revision #48)',
      verifyStatus: 'Remediation underway; requires validation from IT Security Director',
      verifyBadge: 'Triage Pending',
      badgeColor: 'bg-error-container text-on-error-container'
    },
    'act-112': {
      code: 'ACT-112',
      type: 'vulnerability',
      title: 'Patch Node.js Dependency in Auth Microservice',
      origin: 'Ingested Scanner Finding (CVE-2025-XXXX prototype pollution)',
      safeguard: 'CTRL-SEC-12 (Software Supply Chain Security)',
      owner: 'Elena R. (AppSec Engineer)',
      evidenceDesc: 'Software Composition Analysis report artifact verifying patch v4.18.2 upgrade.',
      evidenceCode: 'npm audit --json (0 high/critical vulnerabilities identified)',
      verifyStatus: 'Awaiting engineer PR submission and peer code verification',
      verifyBadge: 'Open Remediation',
      badgeColor: 'bg-tertiary-fixed text-on-tertiary-fixed'
    }
  };

  const currentAction = actionDatabase[selectedActionKey];

  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <main className="flex-1 w-full pt-16">
      <div className="flex flex-col w-full">
        {/*  SECTION 1: HERO & REMEDIATION OVERVIEW  */}
        <section className="relative w-full bg-transparent bg-grid-mesh-adaptive overflow-hidden">
          {/* Ambient glowing motion orbs matching other pages */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffdbcf]/30 dark:bg-teal/10 rounded-full blur-3xl pointer-events-none -z-10 ambient-motion-1" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#2E936F]/10 dark:bg-teal/5 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/*  Left Column: Copy & Actions  */}
            <div className="lg:col-span-7 flex flex-col items-start gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-200 dark:bg-navy-700 text-primary font-mono text-[10px] sm:text-xs uppercase tracking-wider">
                <Sliders className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span>CORE WORKFLOW 08: UNIFIED CORRECTIVE ACTION TRACKING (CAPA)</span>
              </div>
              <h1 className="text-[19px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-tight text-center w-full">
                Turn GRC Findings into Defensible, <span className="text-primary">Closed-Loop Actions</span>
              </h1>
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed text-left">
                Consolidate audit exceptions, risk mitigation plans, and ingested scanner findings into a single human-governed remediation register with clear owners, SLA clocks, and evidence verification.
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2.5 sm:gap-4 pt-1 w-full">
                <a className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-md transition-all text-center" href="#remediation-register">
                  <Sliders className="h-4 w-4 shrink-0" />
                  <span>Explore Remediation Register Demo</span>
                </a>
                <a className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/80 dark:bg-navy-800 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors shadow-sm text-center border border-slate-200 dark:border-navy-700" href="/demo">
                  <FileText className="h-4 w-4 shrink-0" />
                  <span>View Remediation Specs</span>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-space-sm pt-space-md w-full max-w-xl">
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-2 sm:p-space-sm rounded-lg bg-white/85 dark:bg-[#16233F]/90 backdrop-blur-sm border border-slate-200 dark:border-navy-700 shadow-sm justify-between min-w-0">
                  <div className="flex flex-col min-[380px]:flex-row items-center sm:items-center justify-center sm:justify-start gap-0.5 min-[380px]:gap-1 text-secondary min-w-0">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                    <span className="text-[11px] sm:text-code-md font-bold tracking-tight">Unified</span>
                  </div>
                  <span className="text-[9.5px] min-[360px]:text-[10px] sm:text-label-sm text-slate-900 dark:text-white font-medium mt-1 leading-tight text-center sm:text-left">CAPA Action Register</span>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-2 sm:p-space-sm rounded-lg bg-white/85 dark:bg-[#16233F]/90 backdrop-blur-sm border border-slate-200 dark:border-navy-700 shadow-sm justify-between min-w-0">
                  <div className="flex flex-col min-[380px]:flex-row items-center sm:items-center justify-center sm:justify-start gap-0.5 min-[380px]:gap-1 text-primary min-w-0">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                    <span className="text-[10px] min-[350px]:text-[10.5px] min-[400px]:text-xs sm:text-code-md font-bold tracking-tight whitespace-normal text-center sm:text-left">Human-Governed</span>
                  </div>
                  <span className="text-[9.5px] min-[360px]:text-[10px] sm:text-label-sm text-slate-900 dark:text-white font-medium mt-1 leading-tight text-center sm:text-left">Verification Sign-off</span>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-2 sm:p-space-sm rounded-lg bg-white/85 dark:bg-[#16233F]/90 backdrop-blur-sm border border-slate-200 dark:border-navy-700 shadow-sm justify-between min-w-0">
                  <div className="flex flex-col min-[380px]:flex-row items-center sm:items-center justify-center sm:justify-start gap-0.5 min-[380px]:gap-1 text-secondary min-w-0">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                    <span className="text-[11px] sm:text-code-md font-bold tracking-tight">Evidence</span>
                  </div>
                  <span className="text-[9.5px] min-[360px]:text-[10px] sm:text-label-sm text-slate-900 dark:text-white font-medium mt-1 leading-tight text-center sm:text-left">Bound Patch Verification</span>
                </div>
              </div>
            </div>

            {/*  Right Column: Visual Remediation Card  */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full rounded-xl bg-white/90 dark:bg-[#0A111F]/95 backdrop-blur-sm p-space-card shadow-xl flex flex-col gap-space-md border border-slate-300 dark:border-navy-700">
                <div className="flex items-center justify-between pb-space-xs border-b border-slate-100 dark:border-navy-800">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
                    <span className="font-label-md text-label-md text-slate-900 dark:text-white font-bold">Remediation Action Engine</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-navy-700 font-code-sm text-code-sm text-slate-900 dark:text-white">CAPA-REGISTER</span>
                </div>
                <div className="space-y-space-xs">
                  <div className="p-space-sm rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckSquare className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-code-sm text-code-sm text-slate-900 dark:text-white">ACT-104: Bastion Credential Rotation</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">VERIFIED</span>
                  </div>
                  <div className="p-space-sm rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-code-sm text-code-sm text-slate-900 dark:text-white">ACT-098: Wiki MFA Enforcement</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary font-semibold">IN PROGRESS</span>
                  </div>
                  <div className="p-space-sm rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bug className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-code-sm text-code-sm text-slate-900 dark:text-white">ACT-112: Auth Microservice Patch</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">PR OPEN</span>
                  </div>
                </div>
                <div className="pt-space-xs flex items-center justify-between text-slate-600 dark:text-slate-300 font-code-sm text-code-sm border-t border-slate-100 dark:border-navy-800">
                  <span>Traceability Protocol</span>
                  <span className="text-secondary font-bold">Evidence Record Bound</span>
                </div>
              </div>
            </div>
          </div>
          </div>{/* closes max-w-7xl */}
        </section>

        {/*  SECTION 2: DEFENSIBLE REMEDIATION LIFECYCLE  */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8">
            <h2 className="text-xl min-[360px]:text-2xl sm:text-3xl text-slate-900 dark:text-white font-bold tracking-tight leading-tight text-left">
              Defensible Remediation Lifecycle
            </h2>
            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed text-left">From problem identification (risk, vulnerability, audit finding) to human sign-off and closed-loop verification.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md">
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-primary font-bold text-left block">STAGE 01</span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 text-left">Finding Origin</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left">Ingest exception items from audit workpapers, risk registers, or external scanners.</p>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-primary font-bold text-left block">STAGE 02</span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 text-left">Action &amp; SLA Assignment</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left">Assign corrective action to designated engineer with policy due date clock.</p>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-primary font-bold text-left block">STAGE 03</span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 text-left">Patch / Fix Execution</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left">Engineer applies code fix, configuration update, or security policy modification.</p>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-primary font-bold text-left block">STAGE 04</span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 text-left">Evidence Attachment</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left">Attach pull request diff, commit hash, or configuration output to evidence vault.</p>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-primary font-bold text-left block">STAGE 05</span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 text-left">Human Verification Lock</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left">CISO or Lead Auditor verifies evidence and signs off on closure record.</p>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 3: INTERACTIVE REMEDIATION REGISTER EXPLORER  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-section" id="remediation-register">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md">
            <div>
              <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                <ListChecks className="h-5 w-5 shrink-0" />
                <span>Interactive Remediation Register</span>
              </div>
              <h2 className="text-xl min-[360px]:text-2xl sm:text-3xl text-slate-900 dark:text-white font-bold tracking-tight leading-tight text-left">
                Unified Corrective Action Register
              </h2>
              <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-3xl text-left">Filter remediation items by finding origin and select any action to inspect linked evidence records, assigned owners, and sign-off status.</p>
            </div>

            {/*  Category Filter Tabs  */}
            <div className="flex flex-wrap bg-slate-100 dark:bg-navy-800 p-1 rounded-lg border border-slate-200 dark:border-navy-700 shrink-0">
              <button 
                onClick={() => setSelectedCategory('all')}
                className={`px-space-sm py-1 text-label-sm font-label-sm rounded transition-all ${selectedCategory === 'all' ? 'bg-primary text-on-primary font-semibold shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
              >
                All Actions
              </button>
              <button 
                onClick={() => setSelectedCategory('audit')}
                className={`px-space-sm py-1 text-label-sm font-label-sm rounded transition-all ${selectedCategory === 'audit' ? 'bg-primary text-on-primary font-semibold shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Audit Exceptions
              </button>
              <button 
                onClick={() => setSelectedCategory('risk')}
                className={`px-space-sm py-1 text-label-sm font-label-sm rounded transition-all ${selectedCategory === 'risk' ? 'bg-primary text-on-primary font-semibold shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Risk Treatment
              </button>
              <button 
                onClick={() => setSelectedCategory('vulnerability')}
                className={`px-space-sm py-1 text-label-sm font-label-sm rounded transition-all ${selectedCategory === 'vulnerability' ? 'bg-primary text-on-primary font-semibold shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Vulnerability CVEs
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
            {/*  Left Column: Action Item Cards (7 cols)  */}
            <div className="xl:col-span-7 space-y-3.5 sm:space-y-4">
              {/*  Card 1: ACT-104 (Audit)  */}
              {(selectedCategory === 'all' || selectedCategory === 'audit') && (
                <div 
                  onClick={() => setSelectedActionKey('act-104')}
                  className={`action-item-card cursor-pointer p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A111F] border transition-all text-left shadow-sm hover:shadow-md ${selectedActionKey === 'act-104' ? 'border-primary ring-2 ring-primary/20 shadow-md' : 'border-slate-200 dark:border-navy-700'}`}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-sm sm:text-base font-bold text-amber-600 dark:text-amber-500">
                        ACT-104
                      </span>
                      <span className="px-3 py-1 rounded-md bg-[#eef2f6] dark:bg-navy-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[10px] sm:text-xs tracking-wider">
                        AUDIT EXCEPTION
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-md bg-[#d1fae5] dark:bg-emerald-950/60 text-[#047857] dark:text-emerald-400 font-bold uppercase text-[10px] sm:text-xs tracking-wider">
                      VERIFIED
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug mt-3 sm:mt-4 text-left">
                    Rotate Staging VPC Root Bastion Credentials
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed text-left">
                    Origin: Q2 SOC 2 Internal Audit finding FND-2026-03
                  </p>

                  <div className="border-t border-slate-100 dark:border-navy-800/80 my-3.5 sm:my-4"></div>

                  <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <span className="text-slate-600 dark:text-slate-300 font-medium leading-snug">
                      Owner: Alex C. (DevOps Lead)
                    </span>
                    <div className="text-right shrink-0">
                      <span className="block text-[#047857] dark:text-emerald-400 font-bold leading-tight">Sign-off:</span>
                      <span className="block text-[#047857] dark:text-emerald-400 font-bold leading-tight">Lead Auditor</span>
                    </div>
                  </div>
                </div>
              )}

              {/*  Card 2: ACT-098 (Risk)  */}
              {(selectedCategory === 'all' || selectedCategory === 'risk') && (
                <div 
                  onClick={() => setSelectedActionKey('act-098')}
                  className={`action-item-card cursor-pointer p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A111F] border transition-all text-left shadow-sm hover:shadow-md ${selectedActionKey === 'act-098' ? 'border-primary ring-2 ring-primary/20 shadow-md' : 'border-slate-200 dark:border-navy-700'}`}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-sm sm:text-base font-bold text-amber-600 dark:text-amber-500">
                        ACT-098
                      </span>
                      <span className="px-3 py-1 rounded-md bg-[#eef2f6] dark:bg-navy-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[10px] sm:text-xs tracking-wider">
                        RISK TREATMENT
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-md bg-[#ffe4e6] dark:bg-rose-950/60 text-[#be123c] dark:text-rose-400 font-bold uppercase text-[10px] sm:text-xs tracking-wider">
                      TRIAGE PENDING
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug mt-3 sm:mt-4 text-left">
                    Deploy MFA Enforcement on Legacy Internal Wiki
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed text-left">
                    Origin: Risk Register (RSK-042: Legacy Unauthenticated Portal)
                  </p>

                  <div className="border-t border-slate-100 dark:border-navy-800/80 my-3.5 sm:my-4"></div>

                  <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <span className="text-slate-600 dark:text-slate-300 font-medium leading-snug">
                      Owner: Marcus K. (Infrastructure Admin)
                    </span>
                    <div className="text-right shrink-0">
                      <span className="block text-amber-600 dark:text-amber-500 font-bold leading-tight">Sign-off:</span>
                      <span className="block text-amber-600 dark:text-amber-500 font-bold leading-tight">IT Security Director</span>
                    </div>
                  </div>
                </div>
              )}

              {/*  Card 3: ACT-112 (Vulnerability)  */}
              {(selectedCategory === 'all' || selectedCategory === 'vulnerability') && (
                <div 
                  onClick={() => setSelectedActionKey('act-112')}
                  className={`action-item-card cursor-pointer p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A111F] border transition-all text-left shadow-sm hover:shadow-md ${selectedActionKey === 'act-112' ? 'border-primary ring-2 ring-primary/20 shadow-md' : 'border-slate-200 dark:border-navy-700'}`}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-sm sm:text-base font-bold text-amber-600 dark:text-amber-500">
                        ACT-112
                      </span>
                      <span className="px-3 py-1 rounded-md bg-[#eef2f6] dark:bg-navy-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[10px] sm:text-xs tracking-wider">
                        SCANNER CVE
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-md bg-[#fef3c7] dark:bg-amber-950/60 text-[#b45309] dark:text-amber-400 font-bold uppercase text-[10px] sm:text-xs tracking-wider">
                      OPEN REMEDIATION
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug mt-3 sm:mt-4 text-left">
                    Patch Node.js Dependency in Auth Microservice
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed text-left">
                    Origin: Ingested Scanner Finding (CVE-2025-XXXX prototype pollution)
                  </p>

                  <div className="border-t border-slate-100 dark:border-navy-800/80 my-3.5 sm:my-4"></div>

                  <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <span className="text-slate-600 dark:text-slate-300 font-medium leading-snug">
                      Owner: Elena R. (AppSec Engineer)
                    </span>
                    <div className="text-right shrink-0">
                      <span className="block text-slate-900 dark:text-white font-bold leading-tight">PR Open</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/*  Right Column: Action Detail Drawer (5 cols)  */}
            <div className="xl:col-span-5 bg-white dark:bg-[#0A111F] rounded-2xl border border-slate-200 dark:border-navy-700 shadow-xl p-5 sm:p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800">
                <span className="font-mono text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-500" id="drawer-action-code">{currentAction.code}</span>
                <span className={`px-2.5 py-1 rounded-md font-bold uppercase text-[10px] sm:text-xs tracking-wider ${currentAction.badgeColor}`} id="drawer-verify-badge">
                  {currentAction.verifyBadge}
                </span>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white tracking-tight text-left" id="drawer-title">{currentAction.title}</h4>
                <div className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5" id="drawer-origin">
                  <FileText className="h-4 w-4 text-primary shrink-0" />
                  <span>{currentAction.origin}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Associated Safeguard Control</span>
                  <p className="font-mono text-xs sm:text-sm text-secondary font-bold mt-0.5" id="drawer-safeguard">{currentAction.safeguard}</p>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Action Lead &amp; Approval Requirement</span>
                  <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-semibold mt-0.5" id="drawer-owner">{currentAction.owner}</p>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Evidence Record &amp; Commit Diff</span>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5" id="drawer-evidence-desc">{currentAction.evidenceDesc}</p>
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white text-xs font-mono mt-1 overflow-x-auto" id="drawer-evidence-code">
                    {currentAction.evidenceCode}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Closure Verification Status</span>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white text-xs sm:text-sm font-medium mt-1" id="drawer-verification-text">
                    {currentAction.verifyStatus}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 4: STRUCTURED GOVERNANCE, NOT GUESSWORK  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-section">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <CheckCircle className="h-5 w-5 shrink-0" />
              <span>Closed-Loop Traceability</span>
            </div>
            <h2 className="text-xl min-[360px]:text-2xl sm:text-3xl text-slate-900 dark:text-white font-bold tracking-tight leading-tight text-left">
              Structured Governance, Not Spreadsheet Chaos
            </h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-2xl text-left">Connect corrective action plans directly to regulatory framework obligations and evidence artifacts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1 text-left">Unified Action Centralization</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-left">Eliminate fragmented remediation tracking across Jira, spreadsheets, and Slack. Consolidate all CAPA tasks into one workspace.</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1 text-left">Policy SLA Enforcement</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-left">Set remediation countdown clocks tied directly to corporate governance policies and regulatory severity thresholds.</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1 text-left">Auditor-Verifiable Closure</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-left">Require mandatory evidence attachments and human sign-offs before closing audit exception items.</p>
            </div>
          </div>
        </section>

        {/*  SECTION 5: BOTTOM CTA  */}
        <section className="w-full bg-slate-900 dark:bg-[#070D19] text-white py-space-section">
          <div className="max-w-7xl mx-auto px-gutter flex flex-col items-center text-center gap-space-md">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-center">
              Close the Loop on Compliance Findings
            </h2>
            <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl text-center">Transform audit findings, risk treatments, and vulnerability items into verified corrective action records in OMNiGRC.</p>
            <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
              <a href="/demo" className="px-space-md py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-md transition-all">
                Schedule Remediation Register Demo
              </a>
              <a href="/contact-us" className="px-space-md py-3 rounded-lg bg-slate-800 text-white font-label-md text-label-md font-semibold hover:bg-slate-700 transition-colors">
                Speak with a Remediation Specialist
              </a>
            </div>
          </div>
        </section>
      </div>
      </main>
      <Footer />
    </div>
  );
}
