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
        <section className="relative w-full bg-[#faf8ff] dark:bg-[#0A111F] bg-grid-mesh-adaptive overflow-hidden">
          {/* Ambient glow accents */}
          <div aria-hidden="true" className="absolute -top-20 right-0 w-[480px] h-[480px] rounded-full bg-rose-500/4 dark:bg-rose-500/6 blur-3xl pointer-events-none" />
          <div aria-hidden="true" className="absolute bottom-0 left-16 w-64 h-64 rounded-full bg-[#F15E1C]/5 dark:bg-amber/5 blur-2xl pointer-events-none" />
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/*  Left Column: Copy & Actions  */}
            <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-slate-200 dark:bg-navy-700 text-primary font-label-sm text-label-sm uppercase tracking-wider">
                <Sliders className="h-5 w-5 shrink-0" />
                <span>CORE WORKFLOW 08: UNIFIED CORRECTIVE ACTION TRACKING (CAPA)</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-slate-900 dark:text-white font-bold tracking-tight">
                Turn GRC Findings into Defensible, <span className="text-primary">Closed-Loop Actions</span>
              </h1>
              <p className="font-body-lg text-body-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                Consolidate audit exceptions, risk mitigation plans, and ingested scanner findings into a single human-governed remediation register with clear owners, SLA clocks, and evidence verification.
              </p>
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-md transition-all" href="#remediation-register">
                  <Sliders className="h-5 w-5 shrink-0" />
                  <span>Explore Remediation Register Demo</span>
                </a>
                <a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-label-md text-label-md font-semibold hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors" href="/demo">
                  <FileText className="h-5 w-5 shrink-0" />
                  <span>View Remediation Specs</span>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-space-sm pt-space-md w-full max-w-xl">
                <div className="flex flex-col p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F]">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="font-code-md text-code-md font-bold">Unified</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-medium mt-1">CAPA Action Register</span>
                </div>
                <div className="flex flex-col p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F]">
                  <div className="flex items-center gap-1 text-primary">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="font-code-md text-code-md font-bold">Human-Governed</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-medium mt-1">Verification Sign-off</span>
                </div>
                <div className="flex flex-col p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F]">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="font-code-md text-code-md font-bold">Evidence</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-medium mt-1">Bound Patch Verification</span>
                </div>
              </div>
            </div>

            {/*  Right Column: Visual Remediation Card  */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full rounded-xl bg-white dark:bg-[#0A111F] p-space-md shadow-xl flex flex-col gap-space-md border border-slate-200 dark:border-navy-700">
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
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <History className="h-5 w-5 shrink-0" />
              <span>Corrective Action Flow</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">Defensible Remediation Lifecycle</h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-3xl">From problem identification (risk, vulnerability, audit finding) to human sign-off and closed-loop verification.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md">
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 01</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Finding Origin</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Ingest exception items from audit workpapers, risk registers, or external scanners.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 02</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Action &amp; SLA Assignment</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Assign corrective action to designated engineer with policy due date clock.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 03</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Patch / Fix Execution</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Engineer applies code fix, configuration update, or security policy modification.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 04</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Evidence Attachment</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Attach pull request diff, commit hash, or configuration output to evidence vault.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 05</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Human Verification Lock</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">CISO or Lead Auditor verifies evidence and signs off on closure record.</p>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 3: INTERACTIVE REMEDIATION REGISTER EXPLORER  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl" id="remediation-register">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md">
            <div>
              <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                <ListChecks className="h-5 w-5 shrink-0" />
                <span>Interactive Remediation Register</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">Unified Corrective Action Register</h2>
              <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-3xl">Filter remediation items by finding origin and select any action to inspect linked evidence records, assigned owners, and sign-off status.</p>
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
            <div className="xl:col-span-7 space-y-space-md">
              {/*  Card 1: ACT-104 (Audit)  */}
              {(selectedCategory === 'all' || selectedCategory === 'audit') && (
                <div 
                  onClick={() => setSelectedActionKey('act-104')}
                  className={`action-item-card cursor-pointer p-space-md rounded-xl bg-white dark:bg-[#0A111F] border transition-all ${selectedActionKey === 'act-104' ? 'border-primary ring-2 ring-primary/20 shadow-md border-l-4' : 'border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md'}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-code-sm text-code-sm text-primary font-bold">ACT-104</span>
                        <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-code-sm text-code-sm uppercase">Audit Exception</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Rotate Staging VPC Root Bastion Credentials</h3>
                      <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Origin: Q2 SOC 2 Internal Audit finding FND-2026-03</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-code-sm text-code-sm font-semibold shrink-0 ml-2">VERIFIED</span>
                  </div>
                  <div className="mt-space-sm pt-space-xs border-t border-slate-100 dark:border-navy-800 flex items-center justify-between font-code-sm text-code-sm text-slate-600 dark:text-slate-300">
                    <span>Owner: Alex C. (DevOps Lead)</span>
                    <span className="text-secondary font-semibold">Sign-off: Lead Auditor</span>
                  </div>
                </div>
              )}

              {/*  Card 2: ACT-098 (Risk)  */}
              {(selectedCategory === 'all' || selectedCategory === 'risk') && (
                <div 
                  onClick={() => setSelectedActionKey('act-098')}
                  className={`action-item-card cursor-pointer p-space-md rounded-xl bg-white dark:bg-[#0A111F] border transition-all ${selectedActionKey === 'act-098' ? 'border-primary ring-2 ring-primary/20 shadow-md border-l-4' : 'border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md'}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-code-sm text-code-sm text-primary font-bold">ACT-098</span>
                        <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-code-sm text-code-sm uppercase">Risk Treatment</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Deploy MFA Enforcement on Legacy Internal Wiki</h3>
                      <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Origin: Risk Register (RSK-042: Legacy Unauthenticated Portal)</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-code-sm text-code-sm font-semibold shrink-0 ml-2">TRIAGE PENDING</span>
                  </div>
                  <div className="mt-space-sm pt-space-xs border-t border-slate-100 dark:border-navy-800 flex items-center justify-between font-code-sm text-code-sm text-slate-600 dark:text-slate-300">
                    <span>Owner: Marcus K. (Infrastructure Admin)</span>
                    <span className="text-primary font-semibold">Sign-off: IT Security Director</span>
                  </div>
                </div>
              )}

              {/*  Card 3: ACT-112 (Vulnerability)  */}
              {(selectedCategory === 'all' || selectedCategory === 'vulnerability') && (
                <div 
                  onClick={() => setSelectedActionKey('act-112')}
                  className={`action-item-card cursor-pointer p-space-md rounded-xl bg-white dark:bg-[#0A111F] border transition-all ${selectedActionKey === 'act-112' ? 'border-primary ring-2 ring-primary/20 shadow-md border-l-4' : 'border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md'}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-code-sm text-code-sm text-primary font-bold">ACT-112</span>
                        <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-code-sm text-code-sm uppercase">Scanner CVE</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Patch Node.js Dependency in Auth Microservice</h3>
                      <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Origin: Ingested Scanner Finding (CVE-2025-XXXX prototype pollution)</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-code-sm text-code-sm font-semibold shrink-0 ml-2">OPEN REMEDIATION</span>
                  </div>
                  <div className="mt-space-sm pt-space-xs border-t border-slate-100 dark:border-navy-800 flex items-center justify-between font-code-sm text-code-sm text-slate-600 dark:text-slate-300">
                    <span>Owner: Elena R. (AppSec Engineer)</span>
                    <span className="text-slate-900 dark:text-white font-semibold">PR Open</span>
                  </div>
                </div>
              )}
            </div>

            {/*  Right Column: Action Detail Drawer (5 cols)  */}
            <div className="xl:col-span-5 bg-white dark:bg-[#0A111F] rounded-xl border border-slate-200 dark:border-navy-700 shadow-xl p-space-md flex flex-col gap-space-md">
              <div className="flex items-center justify-between pb-space-xs border-b border-slate-100 dark:border-navy-800">
                <span className="font-code-sm text-code-sm text-slate-600 dark:text-slate-300 font-bold" id="drawer-action-code">{currentAction.code}</span>
                <span className={`px-2 py-0.5 rounded font-code-sm text-code-sm font-semibold ${currentAction.badgeColor}`} id="drawer-verify-badge">
                  {currentAction.verifyBadge}
                </span>
              </div>

              <div>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold" id="drawer-title">{currentAction.title}</h4>
                <div className="mt-1 font-body-sm text-body-sm text-slate-600 dark:text-slate-300 flex items-center gap-1" id="drawer-origin">
                  <FileText className="h-4 w-4 text-primary shrink-0" />
                  <span>{currentAction.origin}</span>
                </div>
              </div>

              <div className="space-y-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300">Associated Safeguard Control</span>
                  <p className="font-code-sm text-code-sm text-secondary font-bold mt-0.5" id="drawer-safeguard">{currentAction.safeguard}</p>
                </div>

                <div>
                  <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300">Action Lead &amp; Approval Requirement</span>
                  <p className="font-body-sm text-body-sm text-slate-900 dark:text-white font-semibold mt-0.5" id="drawer-owner">{currentAction.owner}</p>
                </div>

                <div>
                  <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300">Evidence Record &amp; Commit Diff</span>
                  <p className="font-body-sm text-body-sm text-slate-900 dark:text-white mt-0.5" id="drawer-evidence-desc">{currentAction.evidenceDesc}</p>
                  <div className="p-space-xs rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-code-sm text-code-sm font-mono mt-1" id="drawer-evidence-code">
                    {currentAction.evidenceCode}
                  </div>
                </div>

                <div>
                  <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300">Closure Verification Status</span>
                  <div className="p-space-xs rounded bg-slate-50 dark:bg-[#16233F] border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white font-body-sm text-body-sm font-medium mt-1" id="drawer-verification-text">
                    {currentAction.verifyStatus}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 4: STRUCTURED GOVERNANCE, NOT GUESSWORK  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <CheckCircle className="h-5 w-5 shrink-0" />
              <span>Closed-Loop Traceability</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">Structured Governance, Not Spreadsheet Chaos</h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-2xl">Connect corrective action plans directly to regulatory framework obligations and evidence artifacts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mb-1">Unified Action Centralization</h3>
              <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Eliminate fragmented remediation tracking across Jira, spreadsheets, and Slack. Consolidate all CAPA tasks into one workspace.</p>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mb-1">Policy SLA Enforcement</h3>
              <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Set remediation countdown clocks tied directly to corporate governance policies and regulatory severity thresholds.</p>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mb-1">Auditor-Verifiable Closure</h3>
              <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Require mandatory evidence attachments and human sign-offs before closing audit exception items.</p>
            </div>
          </div>
        </section>

        {/*  SECTION 5: BOTTOM CTA  */}
        <section className="w-full bg-slate-900 dark:bg-[#070D19] text-white py-space-xl">
          <div className="max-w-7xl mx-auto px-gutter flex flex-col items-center text-center gap-space-md">
            <h2 className="font-headline-lg text-headline-lg font-bold">Close the Loop on Compliance Findings</h2>
            <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl">Transform audit findings, risk treatments, and vulnerability items into verified corrective action records in OMNiGRC.</p>
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
