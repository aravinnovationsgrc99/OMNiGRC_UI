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
    <div className="min-h-screen bg-[#faf8ff] dark:bg-[#0A111F] text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <div className="flex flex-col w-full pt-16">
        {/*  Interactive Toast / Alert Simulator  */}
        <div className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 pointer-events-none bg-inverse-surface text-inverse-on-surface px-space-md py-space-sm rounded-lg shadow-xl flex items-center gap-space-sm ${toastMessage ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} id="telemetry-toast">
          <Circle className="h-5 w-5 shrink-0 text-secondary" />
          <span className="font-code-sm text-code-sm" id="toast-message">{toastMessage || "Asset synced via Cloud Event Hook"}</span>
        </div>

        {/*  SECTION 1: HERO & CORE VALUE STATEMENTS  */}
        <section className="relative w-full max-w-7xl mx-auto px-gutter py-space-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/*  Left Column: Copy & Actions  */}
            <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
              {/*  Eyebrow Badge  */}
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-slate-200 dark:bg-navy-700 text-primary font-label-sm text-label-sm uppercase tracking-wider">
                <Network className="h-5 w-5 shrink-0" />
                <span>CORE WORKFLOW 02: CONNECTED ASSET &amp; DATA GOVERNANCE</span>
              </div>
              {/*  Main Headline  */}
              <h1 className="font-headline-xl text-headline-xl text-slate-900 dark:text-white font-bold tracking-tight">
                Every Asset Mapped to <span className="text-primary">Risks</span>, Controls &amp; Classifications
              </h1>
              {/*  Subtitle  */}
              <p className="font-body-lg text-body-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                Eliminate static CMDB blind spots. OMNiGRC links cloud infrastructure, microservices, databases, and third-party vendors directly into active compliance controls and risk quantification.
              </p>
              {/*  CTA Cluster  */}
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <button onClick={() => triggerToast("Asset Topology Interactive Simulator Activated")} className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-md transition-all">
                  <Circle className="h-5 w-5 shrink-0" />
                  <span>Explore Asset Mapping Demo</span>
                </button>
                <a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-label-md text-label-md font-semibold hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors" href="/contact-us">
                  <Circle className="h-5 w-5 shrink-0" />
                  <span>Connect Cloud Sources</span>
                </a>
              </div>
              {/*  Telemetry Proof Badges  */}
              <div className="grid grid-cols-3 gap-space-sm pt-space-md w-full max-w-xl">
                <div className="flex flex-col p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F]">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="font-code-md text-code-md font-bold">Comprehensive</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-medium mt-1">Asset Lineage Tracking</span>
                </div>
                <div className="flex flex-col p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F]">
                  <div className="flex items-center gap-1 text-primary">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="font-code-md text-code-md font-bold">Continuous</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-medium mt-1">Sensitive Data Tracing</span>
                </div>
                <div className="flex flex-col p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F]">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="font-code-md text-code-md font-bold">Automated</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-medium mt-1">Discovery Mapping</span>
                </div>
              </div>
            </div>
            {/*  Right Column: Visual Demonstration Card  */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full rounded-xl bg-white dark:bg-[#0A111F] p-space-md shadow-xl flex flex-col gap-space-md border border-slate-200 dark:border-navy-700">
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
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl" id="topology-diagram">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <Circle className="h-5 w-5 shrink-0" />
              <span>Structured Governance Lineage</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">Asset-to-Risk Lineage &amp; Inventory Mappings</h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-3xl">Explore sample asset inventory mappings, risk scoring contexts, and associated mitigating control linkages across infrastructure. Click nodes below to inspect sample profiles.</p>
          </div>
          {/*  Main Topology Interactive Canvas  */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-md items-start">
            {/*  Interactive Flow Nodes (8 Cols)  */}
            <div className="xl:col-span-8 flex flex-col gap-space-md">
              {/*  Step 1: Production Asset Node  */}
              <div 
                onClick={() => setSelectedNode('db')}
                className={`cursor-pointer transition-all p-space-md rounded-xl bg-white dark:bg-[#0A111F] border relative flex flex-col md:flex-row md:items-center justify-between gap-space-md ${selectedNode === 'db' ? 'border-primary ring-2 ring-primary/20 shadow-lg' : 'border-slate-200 dark:border-navy-700 shadow-md hover:shadow-lg'}`} 
                id="node-asset"
              >
                <div className="flex items-start gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-navy-700 flex items-center justify-center flex-shrink-0 text-primary">
                    <Database className="h-5 w-5 shrink-0" />
                  </div>
                  <div>
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300 uppercase">Cloud Object Asset</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-code-sm text-code-sm font-semibold">ACTIVE</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-0.5">s3://customer-vault-eu-west-1</h3>
                    <p className="font-code-sm text-code-sm text-slate-600 dark:text-slate-300">ARN: arn:aws:s3:::customer-vault-eu-west-1 • Region: eu-west-1</p>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="px-space-xs py-1 rounded bg-slate-100 dark:bg-navy-800 font-code-sm text-code-sm text-slate-900 dark:text-white">Sample Evaluation</span>
                  <ChevronRight className="h-5 w-5 shrink-0 text-slate-400" />
                </div>
              </div>

              {/*  Connector Indicator  */}
              <div className="flex justify-center -my-2 relative z-10">
                <div className="flex items-center gap-2 px-space-sm py-1 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 font-code-sm text-code-sm shadow-sm border border-slate-200 dark:border-navy-700">
                  <ArrowDown className="h-4 w-4 shrink-0 text-primary" />
                  <span>Data Classification &amp; Discovery Match</span>
                </div>
              </div>

              {/*  Step 2: Data Classification Node  */}
              <div 
                onClick={() => setSelectedNode('cloud')}
                className={`cursor-pointer transition-all p-space-md rounded-xl bg-white dark:bg-[#0A111F] border relative flex flex-col md:flex-row md:items-center justify-between gap-space-md ${selectedNode === 'cloud' ? 'border-primary ring-2 ring-primary/20 shadow-lg' : 'border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-lg'}`} 
                id="node-classification"
              >
                <div className="flex items-start gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-navy-700 flex items-center justify-center flex-shrink-0 text-primary">
                    <Shield className="h-5 w-5 shrink-0" />
                  </div>
                  <div>
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300 uppercase">Data Classification</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-code-sm text-code-sm font-bold">CONFIDENTIAL SCOPE</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-0.5">Confidential / PII-Sensitive</h4>
                    <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Subject to GDPR Art. 30, India DPDP Act §8, &amp; HIPAA ePHI Storage Guidelines</p>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="px-space-xs py-1 rounded bg-slate-200 dark:bg-navy-700 font-label-sm text-label-sm text-slate-900 dark:text-white">Classified Fields</span>
                  <ChevronRight className="h-5 w-5 shrink-0 text-slate-400" />
                </div>
              </div>

              {/*  Connector Indicator  */}
              <div className="flex justify-center -my-2 relative z-10">
                <div className="flex items-center gap-2 px-space-sm py-1 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 font-code-sm text-code-sm shadow-sm border border-slate-200 dark:border-navy-700">
                  <ArrowDown className="h-4 w-4 shrink-0 text-primary" />
                  <span>Risk Matrix Linkage</span>
                </div>
              </div>

              {/*  Step 3: Linked Risk Register Node  */}
              <div 
                onClick={() => setSelectedNode('saas')}
                className={`cursor-pointer transition-all p-space-md rounded-xl bg-white dark:bg-[#0A111F] border relative flex flex-col md:flex-row md:items-center justify-between gap-space-md ${selectedNode === 'saas' ? 'border-primary ring-2 ring-primary/20 shadow-lg' : 'border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-lg'}`} 
                id="node-risk"
              >
                <div className="flex items-start gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-error-container flex items-center justify-center flex-shrink-0 text-error">
                    <AlertOctagon className="h-5 w-5 shrink-0" />
                  </div>
                  <div>
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300 uppercase">Quantified Risk</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container font-code-sm text-code-sm font-bold">RSK-019 • ELEVATED</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-0.5">Unauthorized Object Exfiltration &amp; ACL Drift</h4>
                    <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Annualized Loss Expectancy (ALE) estimated prior to mitigating controls.</p>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="px-space-xs py-1 rounded bg-slate-200 dark:bg-navy-700 font-label-sm text-label-sm text-slate-900 dark:text-white">Residual: Low</span>
                  <ChevronRight className="h-5 w-5 shrink-0 text-slate-400" />
                </div>
              </div>

              {/*  Connector Indicator  */}
              <div className="flex justify-center -my-2 relative z-10">
                <div className="flex items-center gap-2 px-space-sm py-1 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 font-code-sm text-code-sm shadow-sm border border-slate-200 dark:border-navy-700">
                  <ArrowDown className="h-4 w-4 shrink-0 text-primary" />
                  <span>Enforcement Safeguards</span>
                </div>
              </div>

              {/*  Step 4: Mitigating Controls & Audit Verification  */}
              <div 
                onClick={() => setSelectedNode('controls')}
                className={`cursor-pointer transition-all p-space-md rounded-xl bg-white dark:bg-[#0A111F] border relative flex flex-col md:flex-row md:items-center justify-between gap-space-md ${selectedNode === 'controls' ? 'border-primary ring-2 ring-primary/20 shadow-lg' : 'border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-lg'}`} 
                id="node-controls"
              >
                <div className="flex items-start gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center flex-shrink-0 text-on-secondary-container">
                    <UserCheck className="h-5 w-5 shrink-0" />
                  </div>
                  <div>
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300 uppercase">Linked Control Safeguards</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-code-sm text-code-sm font-bold">ASSOCIATED CONTROLS</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-0.5">CTRL-014 (SSE-KMS) • CTRL-022 (Public Access Block)</h4>
                    <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Associated to ISO 27001:2022 A.8.24 &amp; SOC 2 Type II CC6.1 Trust Criteria.</p>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="px-space-xs py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Audited Reference</span>
                  <ChevronRight className="h-5 w-5 shrink-0 text-slate-400" />
                </div>
              </div>
            </div>

            {/*  Right Column: Interactive Inspectable Asset Drawer (4 Cols)  */}
            <div className="xl:col-span-4 sticky top-28 bg-white dark:bg-[#0A111F] p-space-md rounded-xl shadow-xl flex flex-col gap-space-md border border-slate-200 dark:border-navy-700">
              <div className="flex items-center justify-between pb-space-xs border-b border-slate-100 dark:border-navy-800">
                <div className="flex items-center gap-space-xs">
                  <Search className="h-4 w-4 text-primary shrink-0" />
                  <h3 className="font-label-md text-label-md text-slate-900 dark:text-white font-bold uppercase tracking-wide">Inspector Pane (Sample)</h3>
                </div>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 font-code-sm text-code-sm font-semibold text-slate-900 dark:text-white" id="inspector-tag">{currentData.tag}</span>
              </div>
              <div className="flex flex-col gap-space-sm" id="inspector-content">
                <div>
                  <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300">Designated Engineering Owner</span>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary text-on-primary font-code-sm text-code-sm flex items-center justify-center font-bold">{currentData.ownerInitials}</div>
                    <span className="font-body-sm text-body-sm text-slate-900 dark:text-white font-semibold">{currentData.ownerName}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                  <div className="p-space-xs rounded bg-slate-50 dark:bg-[#16233F] flex flex-col">
                    <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300">Evaluation Status</span>
                    <span className="font-code-sm text-code-sm text-slate-900 dark:text-white font-bold mt-0.5">{currentData.verified}</span>
                  </div>
                  <div className="p-space-xs rounded bg-slate-50 dark:bg-[#16233F] flex flex-col">
                    <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300">Finding Posture</span>
                    <span className={`font-code-sm text-code-sm font-bold mt-0.5 ${currentData.vulnColor}`}>{currentData.vulnCount}</span>
                  </div>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300">Subprocessor Dependencies</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {currentData.subprocessors.map((s, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-code-sm text-code-sm">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300">Evidence Records &amp; Reference Links</span>
                  <div className="p-space-xs rounded bg-slate-100 dark:bg-navy-800 font-code-sm text-code-sm break-all text-slate-600 dark:text-slate-300 mt-1">{currentData.evidence}</div>
                </div>
                <div className="pt-space-xs">
                  <button 
                    onClick={() => triggerToast(`Status alignment recorded for ${currentData.tag}`)}
                    className="w-full py-2 px-space-sm rounded-lg bg-slate-200 dark:bg-navy-700 hover:bg-slate-300 dark:hover:bg-navy-600 text-slate-900 dark:text-white font-label-md text-label-md font-semibold flex items-center justify-center gap-space-xs transition-colors"
                  >
                    <CheckCircle className="h-4 w-4 shrink-0 text-secondary" />
                    <span>Verify Status Alignment</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 3: FOUR CORE ASSET DIMENSIONS  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <Layers className="h-5 w-5 shrink-0" />
              <span>Comprehensive Inventory Scope</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">
              Four Dimensions of GRC Asset Visibility
            </h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-2xl">
              Compliance failures stem from unmapped shadow IT. OMNiGRC ingests physical, virtual, jurisdictional, and outsourced boundaries in a unified graph.
            </p>
          </div>
          {/*  4 Cards Grid  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-primary mb-space-sm">
                  <Cloud className="h-5 w-5 shrink-0" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold">Cloud &amp; Infrastructure</h3>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-space-xs">Map supported AWS EC2, S3, RDS, Azure Subscriptions, and GCP Projects via read-only configuration hooks.</p>
              </div>
              <span className="font-code-sm text-code-sm text-secondary font-bold mt-space-md">Configuration Hook Sync</span>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-primary mb-space-sm">
                  <Key className="h-5 w-5 shrink-0" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold">Identities &amp; Accounts</h3>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-space-xs">Map Okta, Google Workspace, and Azure AD accounts directly to administrative privilege roles and access reviews.</p>
              </div>
              <span className="font-code-sm text-code-sm text-secondary font-bold mt-space-md">Identity Graph Bound</span>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-primary mb-space-sm">
                  <Building2 className="h-5 w-5 shrink-0" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold">SaaS &amp; Subprocessors</h3>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-space-xs">Track vendor tools (Datadog, Twilio, Snowflake), executed DPAs, SOC 2 reports, and data residency boundaries.</p>
              </div>
              <span className="font-code-sm text-code-sm text-secondary font-bold mt-space-md">DPA Alignment Verified</span>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-primary mb-space-sm">
                  <Cpu className="h-5 w-5 shrink-0" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold">Endpoints &amp; Hardware</h3>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-space-xs">Ingest MDM data (Jamf, Kandji, Intune) to verify disk encryption, OS updates, and screen lock policies across fleets.</p>
              </div>
              <span className="font-code-sm text-code-sm text-secondary font-bold mt-space-md">MDM Fleet Monitored</span>
            </div>
          </div>
        </section>

        {/*  SECTION 4: DATA SENSITIVITY & LINEAGE MATRIX  */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F] py-space-xl">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="flex flex-col gap-space-xs mb-space-lg">
              <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                <Share2 className="h-5 w-5 shrink-0" />
                <span>Lineage &amp; Classification Matrix</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">Data Sensitivity &amp; Regulatory Mapping</h2>
              <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-2xl">Every asset entry maintains a structured data classification tag that directly maps to legal obligations across major global frameworks.</p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-[#0A111F] shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-navy-800 font-label-sm text-label-sm text-slate-900 dark:text-white border-b border-slate-200 dark:border-navy-700">
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
                    <td className="p-space-sm">Managed Database</td>
                    <td className="p-space-sm"><span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-code-sm text-code-sm font-bold">ePHI / Financial PII</span></td>
                    <td className="p-space-sm">HIPAA 164.312(a)(2)(iv) • GDPR Art. 32</td>
                    <td className="p-space-sm text-secondary font-semibold">CTRL-014 (KMS Encryption at Rest)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/50">
                    <td className="p-space-sm font-code-sm text-slate-900 dark:text-white font-semibold">s3://customer-vault-eu-west-1</td>
                    <td className="p-space-sm">Cloud Storage Bucket</td>
                    <td className="p-space-sm"><span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-code-sm text-code-sm font-bold">Confidential PII</span></td>
                    <td className="p-space-sm">India DPDP Act §8(5) • SOC 2 CC6.1</td>
                    <td className="p-space-sm text-secondary font-semibold">CTRL-022 (Public Access Block)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/50">
                    <td className="p-space-sm font-code-sm text-slate-900 dark:text-white font-semibold">eks://fintech-ingestion-worker</td>
                    <td className="p-space-sm">K8s Compute Worker</td>
                    <td className="p-space-sm"><span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-code-sm text-code-sm font-medium">Internal Telemetry</span></td>
                    <td className="p-space-sm">ISO 27001:2022 A.8.28</td>
                    <td className="p-space-sm text-secondary font-semibold">CTRL-041 (Image Hash Scanning)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/50">
                    <td className="p-space-sm font-code-sm text-slate-900 dark:text-white font-semibold">saas://datadog-apm-telemetry</td>
                    <td className="p-space-sm">Vendor APM Service</td>
                    <td className="p-space-sm"><span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-code-sm text-code-sm font-bold">Restricted Logs</span></td>
                    <td className="p-space-sm">GDPR Article 28 (Processor DPA)</td>
                    <td className="p-space-sm text-secondary font-semibold">CTRL-089 (Telemetry PII Masking)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/*  SECTION 5: INTEGRATION ECOSYSTEM  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="flex flex-col items-center text-center gap-space-xs mb-space-lg">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <Zap className="h-5 w-5 shrink-0" />
              <span>Supported Integrations</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">Supported External System &amp; Cloud References</h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-2xl">Ingest metadata from supported external cloud providers, identity platforms, and infrastructure sources.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-md text-center">
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col items-center justify-center gap-2">
              <Cloud className="h-8 w-8 text-primary" />
              <span className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold">AWS CloudWatch</span>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col items-center justify-center gap-2">
              <Server className="h-8 w-8 text-primary" />
              <span className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold">Google Cloud</span>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col items-center justify-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold">Microsoft Azure</span>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col items-center justify-center gap-2">
              <Key className="h-8 w-8 text-primary" />
              <span className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold">Okta Identity</span>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col items-center justify-center gap-2">
              <Cpu className="h-8 w-8 text-primary" />
              <span className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold">Kubernetes</span>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col items-center justify-center gap-2">
              <Database className="h-8 w-8 text-primary" />
              <span className="font-label-md text-label-md text-slate-900 dark:text-white font-semibold">Snowflake</span>
            </div>
          </div>
        </section>

        {/*  SECTION 6: BOTTOM CTA  */}
        <section className="w-full bg-slate-900 dark:bg-[#070D19] text-white py-space-xl">
          <div className="max-w-7xl mx-auto px-gutter flex flex-col items-center text-center gap-space-md">
            <h2 className="font-headline-lg text-headline-lg font-bold">Tired of stale CMDB spreadsheets and audit scrambles?</h2>
            <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl">Connect your AWS, Azure, GCP, and Kubernetes clusters in minutes. Experience automated cloud asset discovery mapped straight to active controls.</p>
            <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
              <a href="/demo" className="px-space-md py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-md transition-all">
                Schedule Asset Mapping Demo
              </a>
              <a href="/contact-us" className="px-space-md py-3 rounded-lg bg-slate-800 text-white font-label-md text-label-md font-semibold hover:bg-slate-700 transition-colors">
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
