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

export default function AssetInventoryPage() {
  const [selectedNode, setSelectedNode] = useState<'db' | 'cloud' | 'saas' | 'controls'>('db');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const nodeData = {
    db: {
      tag: "s3://customer-vault-eu-west-1",
      badge: "PII / FINANCIAL (PI-04)",
      ownerInitials: "MK",
      ownerName: "Marcus Kane (Head of Platform Security)",
      verified: "Recently Verified",
      vulnCount: "0 Open Findings",
      vulnColor: "text-secondary",
      subprocessors: ["Amazon Web Services", "HashiCorp Vault", "Datadog APM"],
      evidence: "vault-policy-attestation-2026.pdf"
    },
    cloud: {
      tag: "eks://fintech-core-us-east-1",
      badge: "EKS CLUSTER (INF-02)",
      ownerInitials: "ER",
      ownerName: "Elena Rostova (Lead DevOps Eng)",
      verified: "Recently Verified",
      vulnCount: "1 Low Finding (Remediated)",
      vulnColor: "text-slate-900 dark:text-white",
      subprocessors: ["AWS EKS", "Kubernetes CNI", "Datadog Agent"],
      evidence: "eks-cluster-hardening-policy-2026.pdf"
    },
    saas: {
      tag: "saas://datadog-apm-telemetry",
      badge: "THIRD-PARTY SAAS (VEN-01)",
      ownerInitials: "SJ",
      ownerName: "Sarah Jenkins (SecOps Director)",
      verified: "Recently Verified",
      vulnCount: "0 Open Findings",
      vulnColor: "text-secondary",
      subprocessors: ["Datadog Inc.", "AWS US-East"],
      evidence: "datadog-dpa-telemetry-scrubber.pdf"
    },
    controls: {
      tag: "CTRL-014 / CTRL-022",
      badge: "ENFORCED SECURITY POLICY",
      ownerInitials: "AC",
      ownerName: "Automated Compliance Stream",
      verified: "Continuous Evaluation",
      vulnCount: "0 Policy Deviations",
      vulnColor: "text-secondary",
      subprocessors: ["AWS Config", "AWS CloudTrail"],
      evidence: "aws-config-compliance-export.json"
    }
  };

  const currentData = nodeData[selectedNode];

  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <div className="flex flex-col w-full pt-16">
        {/*  Interactive Toast / Alert Simulator  */}
        <div className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 pointer-events-none bg-inverse-surface text-inverse-on-surface px-space-md py-space-sm rounded-lg shadow-xl flex items-center gap-space-sm ${toastMessage ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} id="telemetry-toast">
          <Circle className="h-5 w-5 shrink-0 text-secondary" />
          <span className="font-code-sm text-code-sm" id="toast-message">{toastMessage || "Asset synced via Cloud Event Hook"}</span>
        </div>

        {/*  SECTION 1: HERO & CORE VALUE STATEMENTS  */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8 overflow-hidden bg-grid-mesh-adaptive">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/*  Left Column: Copy & Actions  */}
            <div className="lg:col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4 w-full">
              {/*  Eyebrow Badge  */}
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 dark:bg-navy-700 text-primary text-xs uppercase tracking-wider font-semibold mx-auto sm:mx-0 text-center">
                <Network className="h-4 w-4 shrink-0" />
                <span className="text-center">CORE WORKFLOW 02: CONNECTED ASSET &amp; DATA GOVERNANCE</span>
              </div>
              {/*  Main Headline  */}
              <h1 className="text-[20px] min-[360px]:text-[22px] min-[390px]:text-[24px] sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-tight text-center w-full">
                Every Asset Mapped to <span className="text-primary">Risks</span>, Controls &amp; Classifications
              </h1>
              {/*  Subtitle  */}
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed text-justify sm:text-left mx-auto sm:mx-0">
                Eliminate static CMDB blind spots. OMNiGRC links cloud infrastructure, microservices, databases, and third-party vendors directly into active compliance controls and risk quantification.
              </p>
              {/*  CTA Cluster  */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2.5 sm:gap-4 pt-1 sm:pt-2 w-full">
                <button onClick={() => triggerToast("Asset Topology Interactive Simulator Activated")} className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-lg bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-md transition-all text-center">
                  <Circle className="h-4 w-4 shrink-0" />
                  <span>Explore Asset Mapping Demo</span>
                </button>
                <a className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors shadow-sm text-center" href="/contact-us">
                  <Circle className="h-4 w-4 shrink-0" />
                  <span>Connect Cloud Sources</span>
                </a>
              </div>
              {/*  Telemetry Proof Badges  */}
              <div className="grid grid-cols-3 gap-2 sm:gap-space-sm pt-space-md w-full max-w-xl">
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-2 sm:p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] overflow-hidden">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-secondary">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0" />
                    <span className="text-[11px] sm:text-xs md:text-sm font-bold truncate">Comprehensive</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-medium mt-1 leading-snug text-center sm:text-left">Asset Lineage Tracking</span>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-2 sm:p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] overflow-hidden">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-primary">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0" />
                    <span className="text-[11px] sm:text-xs md:text-sm font-bold truncate">Continuous</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-medium mt-1 leading-snug text-center sm:text-left">Sensitive Data Tracing</span>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-2 sm:p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] overflow-hidden">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-secondary">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0" />
                    <span className="text-[11px] sm:text-xs md:text-sm font-bold truncate">Automated</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-medium mt-1 leading-snug text-center sm:text-left">Discovery Mapping</span>
                </div>
              </div>
            </div>
            {/*  Right Column: Visual Demonstration Card  */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full rounded-xl bg-white dark:bg-[#0A111F] p-space-card shadow-xl flex flex-col gap-space-md border border-slate-300 dark:border-navy-700">
                <div className="flex items-center justify-between pb-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
                    <span className="font-label-md text-label-md text-slate-900 dark:text-white font-bold">Demonstration Integration Stream</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-navy-700 font-code-sm text-code-sm text-slate-900 dark:text-white">SAMPLE-ORG-74291</span>
                </div>
                {/*  Mini demonstration audit feed  */}
                <div className="space-y-space-xs">
                  <div className="p-space-sm rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <Database className="h-4 w-4 shrink-0 text-slate-500" />
                      <span className="font-code-sm text-code-sm text-slate-900 dark:text-white">RDS:prod-aurora-postgres</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">ENCRYPTED</span>
                  </div>
                  <div className="p-space-sm rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <Cloud className="h-4 w-4 shrink-0 text-slate-500" />
                      <span className="font-code-sm text-code-sm text-slate-900 dark:text-white">S3:customer-vault-eu-west-1</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary font-semibold">POLICY ALIGNED</span>
                  </div>
                  <div className="p-space-sm rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <Server className="h-4 w-4 shrink-0 text-slate-500" />
                      <span className="font-code-sm text-code-sm text-slate-900 dark:text-white">EKS:fintech-ingestion-worker</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">TAGGED PI-04</span>
                  </div>
                </div>
                {/*  Metric representation  */}
                <div className="pt-space-xs flex items-center justify-between text-slate-600 dark:text-slate-300 font-code-sm text-code-sm">
                  <span>Sample Evaluation Feed</span>
                  <span className="text-secondary font-bold">Multi-Resource Node Mappings</span>
                </div>
                {/*  Micro SVG Graph Indicator  */}
                <div className="w-full h-12 flex items-end gap-1 px-1">
                  <div className="w-1/12 bg-secondary/30 rounded-t h-[40%]"></div>
                  <div className="w-1/12 bg-secondary/40 rounded-t h-[60%]"></div>
                  <div className="w-1/12 bg-secondary/50 rounded-t h-[80%]"></div>
                  <div className="w-1/12 bg-secondary rounded-t h-[95%]"></div>
                  <div className="w-1/12 bg-secondary/40 rounded-t h-[70%]"></div>
                  <div className="w-1/12 bg-secondary rounded-t h-[100%]"></div>
                  <div className="w-1/12 bg-secondary/50 rounded-t h-[85%]"></div>
                  <div className="w-1/12 bg-secondary rounded-t h-[90%]"></div>
                  <div className="w-1/12 bg-secondary/40 rounded-t h-[65%]"></div>
                  <div className="w-1/12 bg-secondary rounded-t h-[95%]"></div>
                  <div className="w-1/12 bg-secondary rounded-t h-[100%]"></div>
                  <div className="w-1/12 bg-primary rounded-t h-[100%]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 2: INTERACTIVE TOPOLOGY DIAGRAM & INSPECTION DRAWER  */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10" id="topology-diagram">
          <div className="flex flex-col gap-1.5 mb-4 sm:mb-6 text-left">
            <h2 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug text-left">
              Asset-to-Risk Lineage &amp; Inventory Mappings
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed text-justify sm:text-left">Explore sample asset inventory mappings, risk scoring contexts, and associated mitigating control linkages across infrastructure. Click nodes below to inspect sample profiles.</p>
          </div>
          {/*  Main Topology Interactive Canvas  */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 lg:gap-6 items-start">
            {/*  Interactive Flow Nodes (8 Cols)  */}
            <div className="xl:col-span-8 flex flex-col gap-2.5 sm:gap-3">
              {/*  Step 1: Production Asset Node  */}
              <div 
                onClick={() => setSelectedNode('db')}
                className={`cursor-pointer transition-all p-3.5 sm:p-5 rounded-xl bg-white dark:bg-[#0A111F] border relative flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 ${selectedNode === 'db' ? 'border-[#F15E1C] ring-2 ring-[#F15E1C]/20 shadow-lg' : 'border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md'}`} 
                id="node-asset"
              >
                <div className="flex items-start gap-3 w-full min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-orange-100 dark:bg-orange-950/40 flex items-center justify-center flex-shrink-0 text-[#F15E1C]">
                    <Database className="h-5 w-5 shrink-0" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 w-full">
                      <span className="font-mono text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">Cloud Object Asset</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-mono text-[9.5px] sm:text-[10px] font-bold whitespace-nowrap">ACTIVE</span>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white mt-1 break-all sm:break-normal">s3://customer-vault-eu-west-1</h3>
                    <p className="font-mono text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">ARN: arn:aws:s3:::customer-vault-eu-west-1 • Region: eu-west-1</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 font-mono text-xs text-slate-700 dark:text-slate-200 shrink-0 self-start md:self-center">
                  <span>Sample Evaluation</span>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                </div>
              </div>

              {/*  Connector Indicator  */}
              <div className="flex justify-center -my-1 relative z-10">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 font-mono text-[10px] sm:text-xs shadow-sm border border-slate-200 dark:border-navy-700 max-w-[95%]">
                  <ArrowDown className="h-3.5 w-3.5 shrink-0 text-[#F15E1C]" />
                  <span className="truncate">Data Classification &amp; Discovery Match</span>
                </div>
              </div>

              {/*  Step 2: Data Classification Node  */}
              <div 
                onClick={() => setSelectedNode('cloud')}
                className={`cursor-pointer transition-all p-3.5 sm:p-5 rounded-xl bg-white dark:bg-[#0A111F] border relative flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 ${selectedNode === 'cloud' ? 'border-[#F15E1C] ring-2 ring-[#F15E1C]/20 shadow-lg' : 'border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md'}`} 
                id="node-classification"
              >
                <div className="flex items-start gap-3 w-full min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-orange-100 dark:bg-orange-950/40 flex items-center justify-center flex-shrink-0 text-[#F15E1C]">
                    <Shield className="h-5 w-5 shrink-0" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 w-full">
                      <span className="font-mono text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">Data Classification</span>
                      <span className="px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-[#F15E1C] font-mono text-[9.5px] sm:text-[10px] font-bold whitespace-nowrap">CONFIDENTIAL SCOPE</span>
                    </div>
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white mt-1">Confidential / PII-Sensitive</h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">Subject to GDPR Art. 30, India DPDP Act §8, &amp; HIPAA ePHI Storage Guidelines</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 font-mono text-xs text-slate-700 dark:text-slate-200 shrink-0 self-start md:self-center">
                  <span>Classified Fields</span>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                </div>
              </div>

              {/*  Connector Indicator  */}
              <div className="flex justify-center -my-1 relative z-10">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 font-mono text-[10px] sm:text-xs shadow-sm border border-slate-200 dark:border-navy-700 max-w-[95%]">
                  <ArrowDown className="h-3.5 w-3.5 shrink-0 text-[#F15E1C]" />
                  <span className="truncate">Risk Matrix Linkage</span>
                </div>
              </div>

              {/*  Step 3: Linked Risk Register Node  */}
              <div 
                onClick={() => setSelectedNode('saas')}
                className={`cursor-pointer transition-all p-3.5 sm:p-5 rounded-xl bg-white dark:bg-[#0A111F] border relative flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 ${selectedNode === 'saas' ? 'border-[#F15E1C] ring-2 ring-[#F15E1C]/20 shadow-lg' : 'border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md'}`} 
                id="node-risk"
              >
                <div className="flex items-start gap-3 w-full min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-rose-100 dark:bg-rose-950/40 flex items-center justify-center flex-shrink-0 text-rose-600 dark:text-rose-400">
                    <AlertOctagon className="h-5 w-5 shrink-0" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 w-full">
                      <span className="font-mono text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">Quantified Risk</span>
                      <span className="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 font-mono text-[9.5px] sm:text-[10px] font-bold whitespace-nowrap">RSK-019 • ELEVATED</span>
                    </div>
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white mt-1">Unauthorized Object Exfiltration &amp; ACL Drift</h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">Annualized Loss Expectancy (ALE) estimated prior to mitigating controls.</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 font-mono text-xs text-slate-700 dark:text-slate-200 shrink-0 self-start md:self-center">
                  <span>Residual: Low</span>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                </div>
              </div>

              {/*  Connector Indicator  */}
              <div className="flex justify-center -my-1 relative z-10">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 font-mono text-[10px] sm:text-xs shadow-sm border border-slate-200 dark:border-navy-700 max-w-[95%]">
                  <ArrowDown className="h-3.5 w-3.5 shrink-0 text-[#F15E1C]" />
                  <span className="truncate">Enforcement Safeguards</span>
                </div>
              </div>

              {/*  Step 4: Mitigating Controls & Audit Verification  */}
              <div 
                onClick={() => setSelectedNode('controls')}
                className={`cursor-pointer transition-all p-3.5 sm:p-5 rounded-xl bg-white dark:bg-[#0A111F] border relative flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 ${selectedNode === 'controls' ? 'border-[#F15E1C] ring-2 ring-[#F15E1C]/20 shadow-lg' : 'border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md'}`} 
                id="node-controls"
              >
                <div className="flex items-start gap-3 w-full min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center flex-shrink-0 text-emerald-600 dark:text-emerald-400">
                    <UserCheck className="h-5 w-5 shrink-0" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 w-full">
                      <span className="font-mono text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">Linked Control Safeguards</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-mono text-[9.5px] sm:text-[10px] font-bold whitespace-nowrap">ASSOCIATED CONTROLS</span>
                    </div>
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white mt-1 leading-snug">CTRL-014 (SSE-KMS) • CTRL-022 (Public Access Block)</h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">Associated to ISO 27001:2022 A.8.24 &amp; SOC 2 Type II CC6.1 Trust Criteria.</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 font-mono text-xs text-slate-700 dark:text-slate-200 shrink-0 self-start md:self-center">
                  <span>Audited Reference</span>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                </div>
              </div>
            </div>

            {/*  Right Column: Interactive Inspectable Asset Drawer (4 Cols)  */}
            <div className="xl:col-span-4 sticky top-28 bg-white dark:bg-[#0A111F] p-4 sm:p-5 rounded-xl shadow-lg flex flex-col gap-3.5 sm:gap-4 border border-slate-200 dark:border-navy-700">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-navy-800 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Search className="h-4 w-4 text-[#F15E1C] shrink-0" />
                  <h3 className="font-mono text-xs sm:text-sm text-slate-900 dark:text-white font-bold uppercase tracking-wider truncate">Inspector Pane (Sample)</h3>
                </div>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 font-mono text-[10px] sm:text-xs font-semibold text-slate-900 dark:text-white shrink-0 truncate max-w-[130px] sm:max-w-[180px]" id="inspector-tag">{currentData.tag}</span>
              </div>
              <div className="flex flex-col gap-3" id="inspector-content">
                <div>
                  <span className="font-mono text-[10.5px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Designated Engineering Owner</span>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="w-6 h-6 rounded-full bg-[#F15E1C] text-white font-mono text-xs flex items-center justify-center font-bold shrink-0">{currentData.ownerInitials}</div>
                    <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-semibold truncate">{currentData.ownerName}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-100 dark:border-navy-800 flex flex-col">
                    <span className="font-mono text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Evaluation Status</span>
                    <span className="font-mono text-xs sm:text-sm text-slate-900 dark:text-white font-bold mt-0.5 truncate">{currentData.verified}</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-100 dark:border-navy-800 flex flex-col">
                    <span className="font-mono text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Finding Posture</span>
                    <span className={`font-mono text-xs sm:text-sm font-bold mt-0.5 truncate ${currentData.vulnColor}`}>{currentData.vulnCount}</span>
                  </div>
                </div>
                <div>
                  <span className="font-mono text-[10.5px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Subprocessor Dependencies</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {currentData.subprocessors.map((s, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-navy-800 border border-slate-200/80 dark:border-navy-700 text-slate-800 dark:text-slate-200 font-mono text-[10px] sm:text-xs">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-mono text-[10.5px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Evidence Records &amp; Reference Links</span>
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-navy-800 border border-slate-200/80 dark:border-navy-700 font-mono text-[10.5px] sm:text-xs break-all text-slate-700 dark:text-slate-300 mt-1">{currentData.evidence}</div>
                </div>
                <div className="pt-1">
                  <button 
                    onClick={() => triggerToast(`Status alignment recorded for ${currentData.tag}`)}
                    className="w-full py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-700 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white font-mono text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <CheckCircle className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>Verify Status Alignment</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 3: FOUR CORE ASSET DIMENSIONS  */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <div className="flex flex-col gap-1.5 mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <Layers className="h-5 w-5 shrink-0" />
              <span>Comprehensive Inventory Scope</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug">
              <span className="block">Four Dimensions of</span>
              <span className="block">GRC Asset Visibility</span>
            </h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-2xl text-justify sm:text-left">
              Compliance failures stem from unmapped shadow IT. OMNiGRC ingests physical, virtual, jurisdictional, and outsourced boundaries in a unified graph.
            </p>
          </div>
          {/*  4 Cards Grid  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 sm:p-5 lg:p-6 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-primary mb-2.5 sm:mb-3">
                  <Cloud className="h-5 w-5 shrink-0" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Cloud &amp; Infrastructure</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 sm:mt-1.5 leading-relaxed">Map supported AWS EC2, S3, RDS, Azure Subscriptions, and GCP Projects via read-only configuration hooks.</p>
              </div>
              <span className="font-mono text-[10px] sm:text-xs text-secondary font-bold mt-2.5 sm:mt-4">Configuration Hook Sync</span>
            </div>
            <div className="p-3.5 sm:p-5 lg:p-6 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-primary mb-2.5 sm:mb-3">
                  <Key className="h-5 w-5 shrink-0" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Identities &amp; Accounts</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 sm:mt-1.5 leading-relaxed">Map Okta, Google Workspace, and Azure AD accounts directly to administrative privilege roles and access reviews.</p>
              </div>
              <span className="font-mono text-[10px] sm:text-xs text-secondary font-bold mt-2.5 sm:mt-4">Identity Graph Bound</span>
            </div>
            <div className="p-3.5 sm:p-5 lg:p-6 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-primary mb-2.5 sm:mb-3">
                  <Building2 className="h-5 w-5 shrink-0" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">SaaS &amp; Subprocessors</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 sm:mt-1.5 leading-relaxed">Track vendor tools (Datadog, Twilio, Snowflake), executed DPAs, SOC 2 reports, and data residency boundaries.</p>
              </div>
              <span className="font-mono text-[10px] sm:text-xs text-secondary font-bold mt-2.5 sm:mt-4">DPA Alignment Verified</span>
            </div>
            <div className="p-3.5 sm:p-5 lg:p-6 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-primary mb-2.5 sm:mb-3">
                  <Cpu className="h-5 w-5 shrink-0" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Endpoints &amp; Hardware</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 sm:mt-1.5 leading-relaxed">Ingest MDM data (Jamf, Kandji, Intune) to verify disk encryption, OS updates, and screen lock policies across fleets.</p>
              </div>
              <span className="font-mono text-[10px] sm:text-xs text-secondary font-bold mt-2.5 sm:mt-4">MDM Fleet Monitored</span>
            </div>
          </div>
        </section>

        {/*  SECTION 4: DATA SENSITIVITY & LINEAGE MATRIX  */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F] py-6 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-1.5 mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                <Share2 className="h-5 w-5 shrink-0" />
                <span>Lineage &amp; Classification Matrix</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug">
                <span className="block">Data Sensitivity &amp;</span>
                <span className="block">Regulatory Mapping</span>
              </h2>
              <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-2xl text-justify sm:text-left">Every asset entry maintains a structured data classification tag that directly maps to legal obligations across major global frameworks.</p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-[#0A111F] shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-navy-800 font-label-sm text-label-sm text-slate-900 dark:text-white border-b border-slate-300 dark:border-navy-700">
                    <th className="p-space-sm">Asset Target</th>
                    <th className="p-space-sm">Resource Type</th>
                    <th className="p-space-sm">Data Sensitivity</th>
                    <th className="p-space-sm">Governing Framework Clause</th>
                    <th className="p-space-sm">Enforced Control</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-navy-800 font-body-sm text-body-sm text-slate-600 dark:text-slate-300">
                  <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/50">
                    <td className="p-space-sm font-code-sm text-slate-900 dark:text-white font-semibold">rds://prod-aurora-postgres</td>
                    <td className="p-space-sm font-body-sm">Managed Database</td>
                    <td className="p-space-sm"><span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-code-sm text-code-sm font-bold">ePHI / Financial PII</span></td>
                    <td className="p-space-sm font-body-sm">HIPAA 164.312(a)(2)(iv) • GDPR Art. 32</td>
                    <td className="p-space-sm text-secondary font-semibold">CTRL-014 (KMS Encryption at Rest)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/50">
                    <td className="p-space-sm font-code-sm text-slate-900 dark:text-white font-semibold">s3://customer-vault-eu-west-1</td>
                    <td className="p-space-sm font-body-sm">Cloud Storage Bucket</td>
                    <td className="p-space-sm"><span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-code-sm text-code-sm font-bold">Confidential PII</span></td>
                    <td className="p-space-sm font-body-sm">India DPDP Act §8(5) • SOC 2 CC6.1</td>
                    <td className="p-space-sm text-secondary font-semibold">CTRL-022 (Public Access Block)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/50">
                    <td className="p-space-sm font-code-sm text-slate-900 dark:text-white font-semibold">eks://fintech-ingestion-worker</td>
                    <td className="p-space-sm font-body-sm">K8s Compute Worker</td>
                    <td className="p-space-sm"><span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-code-sm text-code-sm font-medium">Internal Telemetry</span></td>
                    <td className="p-space-sm font-body-sm">ISO 27001:2022 A.8.28</td>
                    <td className="p-space-sm text-secondary font-semibold">CTRL-041 (Image Hash Scanning)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/50">
                    <td className="p-space-sm font-code-sm text-slate-900 dark:text-white font-semibold">saas://datadog-apm-telemetry</td>
                    <td className="p-space-sm font-body-sm">Vendor APM Service</td>
                    <td className="p-space-sm"><span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-code-sm text-code-sm font-bold">Restricted Logs</span></td>
                    <td className="p-space-sm font-body-sm">GDPR Article 28 (Processor DPA)</td>
                    <td className="p-space-sm text-secondary font-semibold">CTRL-089 (Telemetry PII Masking)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/*  SECTION 5: INTEGRATION ECOSYSTEM  */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <div className="flex flex-col items-center text-center gap-1.5 mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <Zap className="h-5 w-5 shrink-0" />
              <span>Supported Integrations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug">
              <span className="block">Supported External Systems &amp;</span>
              <span className="block">Cloud References</span>
            </h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-2xl text-justify sm:text-center">Ingest metadata from supported external cloud providers, identity platforms, and infrastructure sources.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4 text-center">
            <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm flex flex-col items-center justify-center gap-1.5 sm:gap-2">
              <Cloud className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-semibold">AWS CloudWatch</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm flex flex-col items-center justify-center gap-1.5 sm:gap-2">
              <Server className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-semibold">Google Cloud</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm flex flex-col items-center justify-center gap-1.5 sm:gap-2">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-semibold">Microsoft Azure</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm flex flex-col items-center justify-center gap-1.5 sm:gap-2">
              <Key className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-semibold">Okta Identity</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm flex flex-col items-center justify-center gap-1.5 sm:gap-2">
              <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-semibold">Kubernetes</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-300 dark:border-navy-700 shadow-sm flex flex-col items-center justify-center gap-1.5 sm:gap-2">
              <Database className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-semibold">Snowflake</span>
            </div>
          </div>
        </section>

        {/*  SECTION 6: BOTTOM CTA  */}
        <section className="w-full bg-slate-900 dark:bg-[#070D19] text-white py-6 sm:py-10 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left gap-3 sm:gap-4">
            <h2 className="text-[19px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug text-left">
              Tired of stale CMDB spreadsheets and audit scrambles?
            </h2>
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl leading-relaxed text-justify sm:text-left">Connect your AWS, Azure, GCP, and Kubernetes clusters in minutes. Experience automated cloud asset discovery mapped straight to active controls.</p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-2.5 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto">
              <a href="/demo" className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-lg bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-md transition-all text-center">
                Schedule Asset Mapping Demo
              </a>
              <a href="/contact-us" className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-lg bg-slate-800 text-white text-xs sm:text-sm font-semibold hover:bg-slate-700 transition-colors text-center">
                Speak with a Solutions Architect
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
