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
          <div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 pt-4 sm:pt-6 lg:pt-6 xl:pt-8 pb-3 sm:pb-6 lg:pb-6 xl:pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
              {/*  Left Column: Copy & Actions  */}
              <div className="lg:col-span-7 flex flex-col justify-between items-start gap-3 sm:gap-4 w-full">
                <div className="flex flex-col gap-2.5 sm:gap-3.5 w-full">
                  <h1 className="text-[19px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-[38px] xl:text-[44px] 2xl:text-[48px] text-slate-900 dark:text-white font-bold tracking-tight leading-tight text-left w-full">
                    Turn GRC Findings into Defensible, <span className="text-primary">Closed-Loop Actions</span>
                  </h1>
                  <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed text-left">
                    Consolidate audit exceptions, risk mitigation plans, and ingested scanner findings into a single human-governed remediation register with clear owners, SLA clocks, and evidence verification.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2.5 sm:gap-4 pt-1 w-full">
                    <a className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-lg bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-md transition-all text-center" href="#remediation-register">
                      <Sliders className="h-4 w-4 shrink-0" />
                      <span>Explore Remediation Register</span>
                    </a>
                    <a className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-lg bg-white/80 dark:bg-navy-800 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors shadow-sm text-center border border-slate-200 dark:border-navy-700" href="/demo">
                      <FileText className="h-4 w-4 shrink-0" />
                      <span>View Remediation Specs</span>
                    </a>
                  </div>
                </div>

                {/* Key Metric Badges */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 pt-2 w-full max-w-xl">
                  <div className="flex flex-col p-2.5 sm:p-3 rounded-xl bg-white/85 dark:bg-[#16233F]/90 backdrop-blur-sm border border-slate-200 dark:border-navy-700 shadow-sm text-center items-center overflow-hidden">
                    <div className="flex items-center gap-1 text-secondary">
                      <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                      <span className="text-[11px] sm:text-xs font-bold truncate">Unified</span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-medium mt-0.5 leading-snug text-center">CAPA Register</span>
                  </div>
                  <div className="flex flex-col p-2.5 sm:p-3 rounded-xl bg-white/85 dark:bg-[#16233F]/90 backdrop-blur-sm border border-slate-200 dark:border-navy-700 shadow-sm text-center items-center overflow-hidden">
                    <div className="flex items-center gap-1 text-primary">
                      <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                      <span className="text-[11px] sm:text-xs font-bold truncate">Human-Governed</span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-medium mt-0.5 leading-snug text-center">Verification Sign-off</span>
                  </div>
                  <div className="flex flex-col p-2.5 sm:p-3 rounded-xl bg-white/85 dark:bg-[#16233F]/90 backdrop-blur-sm border border-slate-200 dark:border-navy-700 shadow-sm text-center items-center overflow-hidden">
                    <div className="flex items-center gap-1 text-secondary">
                      <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                      <span className="text-[11px] sm:text-xs font-bold truncate">Evidence</span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-medium mt-0.5 leading-snug text-center">Patch Verification</span>
                  </div>
                </div>
              </div>

              {/*  Right Column: Visual Remediation Card  */}
              <div className="lg:col-span-5 relative flex flex-col justify-center">
                <div className="relative w-full rounded-xl lg:rounded-2xl bg-white/90 dark:bg-[#0A111F]/95 backdrop-blur-sm p-4 sm:p-5 lg:p-6 shadow-xl flex flex-col justify-between gap-3 sm:gap-4 border border-slate-300 dark:border-navy-700 h-full">
                  <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-slate-100 dark:border-navy-800">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary animate-pulse"></div>
                      <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-bold">Remediation Action Engine</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-navy-700 font-mono text-[10px] sm:text-xs text-slate-900 dark:text-white font-semibold">CAPA-REGISTER</span>
                  </div>
                  <div className="space-y-2 sm:space-y-2.5">
                    <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 dark:bg-[#16233F] flex items-center justify-between border border-slate-100 dark:border-navy-800">
                      <div className="flex items-center gap-2">
                        <CheckSquare className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-mono text-xs text-slate-900 dark:text-white font-semibold">ACT-104: Bastion Credential Rotation</span>
                      </div>
                      <span className="font-mono text-[10px] sm:text-xs text-secondary font-bold">VERIFIED</span>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 dark:bg-[#16233F] flex items-center justify-between border border-slate-100 dark:border-navy-800">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-mono text-xs text-slate-900 dark:text-white font-semibold">ACT-098: Wiki MFA Enforcement</span>
                      </div>
                      <span className="font-mono text-[10px] sm:text-xs text-primary font-bold">IN PROGRESS</span>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 dark:bg-[#16233F] flex items-center justify-between border border-slate-100 dark:border-navy-800">
                      <div className="flex items-center gap-2">
                        <Bug className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-mono text-xs text-slate-900 dark:text-white font-semibold">ACT-112: Auth Microservice Patch</span>
                      </div>
                      <span className="font-mono text-[10px] sm:text-xs text-secondary font-bold">PR OPEN</span>
                    </div>
                  </div>
                  <div className="pt-2 sm:pt-2.5 flex items-center justify-between text-slate-600 dark:text-slate-300 font-mono text-[10px] sm:text-xs border-t border-slate-100 dark:border-navy-800">
                    <span>Traceability Protocol</span>
                    <span className="text-secondary font-bold flex items-center gap-1">
                      <CheckCircle className="h-3.5 w-3.5" /> Evidence Record Bound
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* closes inner container */}
        </section>

        {/*  SECTION 2: DEFENSIBLE REMEDIATION LIFECYCLE  */}
        <section className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 py-3.5 sm:py-6 lg:py-6 xl:py-7">
          <div className="flex flex-col gap-1.5 mb-3 sm:mb-5">
            <h2 className="text-xl min-[360px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug text-left lg:whitespace-nowrap">
              Defensible Remediation Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed text-left">From problem identification (risk, vulnerability, audit finding) to human sign-off and closed-loop verification.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-stretch">
            <div className="p-4 sm:p-5 rounded-xl lg:rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between h-full hover:border-slate-300 dark:hover:border-navy-600 transition-all">
              <div>
                <span className="font-mono text-xs text-primary font-bold text-left block">STAGE 01</span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 text-left">Finding Origin</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left">Ingest exception items from audit workpapers, risk registers, or external scanners.</p>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-xl lg:rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between h-full hover:border-slate-300 dark:hover:border-navy-600 transition-all">
              <div>
                <span className="font-mono text-xs text-primary font-bold text-left block">STAGE 02</span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 text-left">Action &amp; SLA Assignment</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left">Assign corrective action to designated engineer with policy due date clock.</p>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-xl lg:rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between h-full hover:border-slate-300 dark:hover:border-navy-600 transition-all">
              <div>
                <span className="font-mono text-xs text-primary font-bold text-left block">STAGE 03</span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 text-left">Patch / Fix Execution</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left">Engineer applies code fix, configuration update, or security policy modification.</p>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-xl lg:rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between h-full hover:border-slate-300 dark:hover:border-navy-600 transition-all">
              <div>
                <span className="font-mono text-xs text-primary font-bold text-left block">STAGE 04</span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 text-left">Evidence Attachment</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left">Attach pull request diff, commit hash, or configuration output to evidence vault.</p>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-xl lg:rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between h-full hover:border-slate-300 dark:hover:border-navy-600 transition-all">
              <div>
                <span className="font-mono text-xs text-primary font-bold text-left block">STAGE 05</span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 text-left">Human Verification Lock</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left">CISO or Lead Auditor verifies evidence and signs off on closure record.</p>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 3: INTERACTIVE REMEDIATION REGISTER EXPLORER  */}
        <section className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 py-3.5 sm:py-6 lg:py-6 xl:py-7" id="remediation-register">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 sm:mb-5 gap-3 sm:gap-4">
            <div>
              <h2 className="text-xl min-[360px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug text-left lg:whitespace-nowrap">
                Unified Corrective Action Register
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl text-left mt-1">Filter remediation items by finding origin and select any action to inspect linked evidence records, assigned owners, and sign-off status.</p>
            </div>

            {/*  Category Filter Tabs  */}
            <div className="flex flex-wrap bg-slate-100 dark:bg-navy-800 p-1 rounded-lg border border-slate-200 dark:border-navy-700 shrink-0">
              <button 
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1 text-xs rounded font-semibold transition-all ${selectedCategory === 'all' ? 'bg-primary text-on-primary shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
              >
                All Actions
              </button>
              <button 
                onClick={() => setSelectedCategory('audit')}
                className={`px-3 py-1 text-xs rounded font-semibold transition-all ${selectedCategory === 'audit' ? 'bg-primary text-on-primary shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Audit Exceptions
              </button>
              <button 
                onClick={() => setSelectedCategory('risk')}
                className={`px-3 py-1 text-xs rounded font-semibold transition-all ${selectedCategory === 'risk' ? 'bg-primary text-on-primary shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Risk Treatment
              </button>
              <button 
                onClick={() => setSelectedCategory('vulnerability')}
                className={`px-3 py-1 text-xs rounded font-semibold transition-all ${selectedCategory === 'vulnerability' ? 'bg-primary text-on-primary shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Vulnerability CVEs
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            {/*  Left Column: Action Item Cards (7 cols)  */}
            <div className="xl:col-span-7 space-y-3 sm:space-y-3.5 flex flex-col justify-between">
              {/*  Card 1: ACT-104 (Audit)  */}
              {(selectedCategory === 'all' || selectedCategory === 'audit') && (
                <div 
                  onClick={() => setSelectedActionKey('act-104')}
                  className={`action-item-card cursor-pointer p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl bg-white dark:bg-[#0A111F] border transition-all text-left shadow-sm hover:shadow-md ${selectedActionKey === 'act-104' ? 'border-primary ring-2 ring-primary/20 shadow-md' : 'border-slate-200 dark:border-navy-700'}`}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-500">
                        ACT-104
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-[#eef2f6] dark:bg-navy-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[10px] sm:text-xs tracking-wider">
                        AUDIT EXCEPTION
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#d1fae5] dark:bg-emerald-950/60 text-[#047857] dark:text-emerald-400 font-bold uppercase text-[10px] sm:text-xs tracking-wider">
                      VERIFIED
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug mt-2 sm:mt-3 text-left">
                    Rotate Staging VPC Root Bastion Credentials
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed text-left">
                    Origin: Q2 SOC 2 Internal Audit finding FND-2026-03
                  </p>

                  <div className="border-t border-slate-100 dark:border-navy-800/80 my-2.5 sm:my-3"></div>

                  <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <span className="text-slate-600 dark:text-slate-300 font-medium leading-snug">
                      Owner: Alex C. (DevOps Lead)
                    </span>
                    <div className="text-right shrink-0">
                      <span className="text-[#047857] dark:text-emerald-400 font-bold leading-tight">Sign-off: Lead Auditor</span>
                    </div>
                  </div>
                </div>
              )}

              {/*  Card 2: ACT-098 (Risk)  */}
              {(selectedCategory === 'all' || selectedCategory === 'risk') && (
                <div 
                  onClick={() => setSelectedActionKey('act-098')}
                  className={`action-item-card cursor-pointer p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl bg-white dark:bg-[#0A111F] border transition-all text-left shadow-sm hover:shadow-md ${selectedActionKey === 'act-098' ? 'border-primary ring-2 ring-primary/20 shadow-md' : 'border-slate-200 dark:border-navy-700'}`}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-500">
                        ACT-098
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-[#eef2f6] dark:bg-navy-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[10px] sm:text-xs tracking-wider">
                        RISK TREATMENT
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#ffe4e6] dark:bg-rose-950/60 text-[#be123c] dark:text-rose-400 font-bold uppercase text-[10px] sm:text-xs tracking-wider">
                      TRIAGE PENDING
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug mt-2 sm:mt-3 text-left">
                    Deploy MFA Enforcement on Legacy Internal Wiki
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed text-left">
                    Origin: Risk Register (RSK-042: Legacy Unauthenticated Portal)
                  </p>

                  <div className="border-t border-slate-100 dark:border-navy-800/80 my-2.5 sm:my-3"></div>

                  <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <span className="text-slate-600 dark:text-slate-300 font-medium leading-snug">
                      Owner: Marcus K. (Infrastructure Admin)
                    </span>
                    <div className="text-right shrink-0">
                      <span className="text-amber-600 dark:text-amber-500 font-bold leading-tight">Sign-off: IT Security Director</span>
                    </div>
                  </div>
                </div>
              )}

              {/*  Card 3: ACT-112 (Vulnerability)  */}
              {(selectedCategory === 'all' || selectedCategory === 'vulnerability') && (
                <div 
                  onClick={() => setSelectedActionKey('act-112')}
                  className={`action-item-card cursor-pointer p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl bg-white dark:bg-[#0A111F] border transition-all text-left shadow-sm hover:shadow-md ${selectedActionKey === 'act-112' ? 'border-primary ring-2 ring-primary/20 shadow-md' : 'border-slate-200 dark:border-navy-700'}`}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-500">
                        ACT-112
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-[#eef2f6] dark:bg-navy-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[10px] sm:text-xs tracking-wider">
                        SCANNER CVE
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#fef3c7] dark:bg-amber-950/60 text-[#b45309] dark:text-amber-400 font-bold uppercase text-[10px] sm:text-xs tracking-wider">
                      OPEN REMEDIATION
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug mt-2 sm:mt-3 text-left">
                    Patch Node.js Dependency in Auth Microservice
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed text-left">
                    Origin: Ingested Scanner Finding (CVE-2025-XXXX prototype pollution)
                  </p>

                  <div className="border-t border-slate-100 dark:border-navy-800/80 my-2.5 sm:my-3"></div>

                  <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <span className="text-slate-600 dark:text-slate-300 font-medium leading-snug">
                      Owner: Elena R. (AppSec Engineer)
                    </span>
                    <div className="text-right shrink-0">
                      <span className="text-slate-900 dark:text-white font-bold leading-tight">PR Open</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/*  Right Column: Action Detail Drawer (5 cols)  */}
            <div className="xl:col-span-5 bg-white dark:bg-[#0A111F] rounded-xl lg:rounded-2xl border border-slate-200 dark:border-navy-700 shadow-xl p-4 sm:p-6 lg:p-7 flex flex-col justify-between h-full">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-slate-100 dark:border-navy-800">
                  <span className="font-mono text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-500" id="drawer-action-code">{currentAction.code}</span>
                  <span className={`px-2.5 py-0.5 rounded-md font-bold uppercase text-[10px] sm:text-xs tracking-wider ${currentAction.badgeColor}`} id="drawer-verify-badge">
                    {currentAction.verifyBadge}
                  </span>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white tracking-tight text-left" id="drawer-title">{currentAction.title}</h4>
                  <div className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5" id="drawer-origin">
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
                    <div className="p-2 sm:p-2.5 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white text-xs font-mono mt-1 overflow-x-auto" id="drawer-evidence-code">
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

              <div className="pt-3 border-t border-slate-100 dark:border-navy-800 mt-4">
                <span className="font-mono text-[11px] sm:text-xs text-secondary font-bold flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4" /> Ready for Audit Vault Compilation
                </span>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 4: STRUCTURED GOVERNANCE, NOT GUESSWORK  */}
        <section className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 py-3.5 sm:py-6 lg:py-6 xl:py-7">
          <div className="flex flex-col gap-1.5 mb-3 sm:mb-5">
            <h2 className="text-xl min-[360px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug text-left lg:whitespace-nowrap">
              Structured Governance, Not Spreadsheet Chaos
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl text-left mt-1">Connect corrective action plans directly to regulatory framework obligations and evidence artifacts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
            <div className="p-5 sm:p-6 rounded-xl lg:rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between h-full hover:shadow-md hover:border-slate-300 dark:hover:border-navy-600 transition-all">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Unified Action Centralization</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-left leading-relaxed">Eliminate fragmented remediation tracking across Jira, spreadsheets, and Slack. Consolidate all CAPA tasks into one workspace.</p>
              </div>
            </div>
            <div className="p-5 sm:p-6 rounded-xl lg:rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between h-full hover:shadow-md hover:border-slate-300 dark:hover:border-navy-600 transition-all">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Policy SLA Enforcement</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-left leading-relaxed">Set remediation countdown clocks tied directly to corporate governance policies and regulatory severity thresholds.</p>
              </div>
            </div>
            <div className="p-5 sm:p-6 rounded-xl lg:rounded-2xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between h-full hover:shadow-md hover:border-slate-300 dark:hover:border-navy-600 transition-all">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Auditor-Verifiable Closure</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-left leading-relaxed">Require mandatory evidence attachments and human sign-offs before closing audit exception items.</p>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 5: BOTTOM CTA  */}
        <section className="w-full bg-slate-900 dark:bg-[#070D19] text-white py-4 sm:py-8 lg:py-8 xl:py-9">
          <div className="max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 flex flex-col items-start text-left gap-3 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug text-left lg:whitespace-nowrap">
              Close the Loop on Compliance Findings
            </h2>
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl text-left leading-relaxed">Transform audit findings, risk treatments, and vulnerability items into verified corrective action records in OMNiGRC.</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-2.5 sm:gap-4 pt-1 w-full sm:w-auto">
              <a href="/demo" className="px-5 py-2.5 sm:py-3 rounded-lg bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-md transition-all text-center">
                Schedule Remediation Register Demo
              </a>
              <a href="/contact-us" className="px-5 py-2.5 sm:py-3 rounded-lg bg-slate-800 text-white text-xs sm:text-sm font-semibold hover:bg-slate-700 transition-colors text-center">
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
