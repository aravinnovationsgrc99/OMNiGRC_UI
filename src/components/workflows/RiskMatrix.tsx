"use client";
import React, { useState } from "react";
import { ShieldAlert, Activity, CheckCircle, Target, ArrowRight, RefreshCw, CheckCircle2 } from "lucide-react";

export function RiskMatrix() {
  const [selectedRisk, setSelectedRisk] = useState("RSK-042");
  const [isRecalibrating, setIsRecalibrating] = useState(false);
  const [recalibratedAt, setRecalibratedAt] = useState<string | null>(null);

  const handleRecalibrate = () => {
    setIsRecalibrating(true);
    setTimeout(() => {
      setIsRecalibrating(false);
      setRecalibratedAt(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
  };

  const risks = [
    { id: "RSK-088", l: 5, i: 1, title: "Third-party API rate throttle cascade", asset: "AST-112", owner: "M. Vance", ctrl: "CTRL-098", strategy: "MITIGATE", evidence: "ev-api-resilience-032.json" },
    { id: "RSK-071", l: 5, i: 2, title: "Staging Environment Data Masking Void", asset: "AST-204", owner: "D. Chen", ctrl: "CTRL-034", strategy: "MITIGATE", evidence: "ev-masking.json" },
    { id: "RSK-033", l: 5, i: 3, title: "Kubernetes Ingress Controller Exploit", asset: "AST-008", owner: "K. Thorne", ctrl: "CTRL-077", strategy: "MITIGATE", evidence: "ev-k8s-pen.json" },
    { id: "RSK-009", l: 5, i: 4, title: "Ransomware Lateral Spread", asset: "AST-001", owner: "A. Sharma", ctrl: "CTRL-002", strategy: "MITIGATE", evidence: "ev-zt-drill.json" },
    { id: "RSK-001", l: 5, i: 5, title: "Cloud Root Credential Compromise", asset: "AST-000", owner: "A. Sharma", ctrl: "CTRL-001", strategy: "MITIGATE", evidence: "ev-fido2.json" },
    
    { id: "RSK-055", l: 4, i: 1, title: "Office Wi-Fi Guest Portal Deauth", asset: "AST-909", owner: "L. Gomez", ctrl: "CTRL-089", strategy: "ACCEPT", evidence: "ev-wifi-audit.json" },
    { id: "RSK-060", l: 4, i: 2, title: "Unmonitored Dev Sandbox Egress", asset: "AST-084", owner: "J. Smith", ctrl: "CTRL-041", strategy: "MITIGATE", evidence: "ev-egress.json" },
    { id: "RSK-029", l: 4, i: 3, title: "Public S3 Bucket Policy Misconfig", asset: "AST-041", owner: "D. Chen", ctrl: "CTRL-015", strategy: "MITIGATE", evidence: "ev-s3-drift.json" },
    { id: "RSK-042", l: 4, i: 4, title: "Database Backup Restoration Failure", asset: "AST-059", owner: "P. Dev", ctrl: "CTRL-012", strategy: "MITIGATE", evidence: "ev-drill-2026.json" },
    { id: "RSK-014", l: 4, i: 5, title: "Critical Zero-Day in Reverse Proxy", asset: "AST-004", owner: "K. Thorne", ctrl: "CTRL-009", strategy: "TRANSFER", evidence: "ev-waf-cve.json" },
    
    { id: "RSK-102", l: 3, i: 1, title: "Expired Internal TLS Certificate", asset: "AST-311", owner: "L. Gomez", ctrl: "CTRL-022", strategy: "MITIGATE", evidence: "ev-tls-telemetry.json" },
    { id: "RSK-078", l: 3, i: 2, title: "Stale Account Offboarding Delay", asset: "AST-901", owner: "P. Dev", ctrl: "CTRL-052", strategy: "MITIGATE", evidence: "ev-scim-sync.json" },
    { id: "RSK-049", l: 3, i: 3, title: "Third-Party SaaS Outage Impairing Auth", asset: "AST-104", owner: "P. Dev", ctrl: "CTRL-063", strategy: "TRANSFER", evidence: "ev-sla-idp.json" },
    { id: "RSK-031", l: 3, i: 4, title: "Insider Exfiltration via Removable Media", asset: "AST-550", owner: "A. Sharma", ctrl: "CTRL-019", strategy: "MITIGATE", evidence: "ev-dlp-agent.json" },
    { id: "RSK-018", l: 3, i: 5, title: "Supply Chain Tampering in Open-Source", asset: "AST-015", owner: "K. Thorne", ctrl: "CTRL-082", strategy: "MITIGATE", evidence: "ev-sbom.json" },
    
    { id: "RSK-120", l: 2, i: 1, title: "Physical Data Center Visitor Escort Lapse", asset: "AST-800", owner: "L. Gomez", ctrl: "CTRL-104", strategy: "ACCEPT", evidence: "ev-badge-access.json" },
    { id: "RSK-111", l: 2, i: 2, title: "Printer Spooler Network Vulnerability", asset: "AST-840", owner: "L. Gomez", ctrl: "CTRL-110", strategy: "AVOID", evidence: "ev-printer.json" },
    { id: "RSK-084", l: 2, i: 3, title: "DNS Zone Poisoning or Hijacking", asset: "AST-003", owner: "K. Thorne", ctrl: "CTRL-031", strategy: "MITIGATE", evidence: "ev-dnssec.json" },
    { id: "RSK-067", l: 2, i: 4, title: "BGP Routing Route Leak", asset: "AST-002", owner: "K. Thorne", ctrl: "CTRL-048", strategy: "TRANSFER", evidence: "ev-rpki.json" },
    { id: "RSK-025", l: 2, i: 5, title: "Multi-Region Cloud Provider Total Outage", asset: "AST-000", owner: "A. Sharma", ctrl: "CTRL-005", strategy: "AVOID", evidence: "ev-warm-failover.json" },
    
    { id: "RSK-140", l: 1, i: 1, title: "Dev Laptop Screen Shoulder Surfing", asset: "AST-702", owner: "L. Gomez", ctrl: "CTRL-120", strategy: "ACCEPT", evidence: "ev-laptop-policy.json" },
    { id: "RSK-131", l: 1, i: 2, title: "Unencrypted Conference Room Cast", asset: "AST-850", owner: "L. Gomez", ctrl: "CTRL-118", strategy: "ACCEPT", evidence: "ev-conf-av.json" },
    { id: "RSK-125", l: 1, i: 3, title: "Internal Wiki XSS Vulnerability", asset: "AST-405", owner: "D. Chen", ctrl: "CTRL-090", strategy: "MITIGATE", evidence: "ev-sast-wiki.json" },
    { id: "RSK-108", l: 1, i: 4, title: "Secondary Failover Database Latency", asset: "AST-060", owner: "P. Dev", ctrl: "CTRL-014", strategy: "MITIGATE", evidence: "ev-replica-sla.json" },
    { id: "RSK-095", l: 1, i: 5, title: "Catastrophic Fiber Cut at Co-Location", asset: "AST-005", owner: "K. Thorne", ctrl: "CTRL-008", strategy: "TRANSFER", evidence: "ev-carrier-bgp.json" },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 16) return "bg-rose-100 text-rose-950 dark:bg-rose-950/90 dark:text-rose-200 border-rose-300 dark:border-rose-700/80 font-bold";
    if (score >= 10) return "bg-orange-100 text-orange-950 dark:bg-orange-950/90 dark:text-orange-200 border-orange-300 dark:border-orange-700/80 font-bold";
    if (score >= 5) return "bg-amber-100 text-amber-950 dark:bg-amber-950/90 dark:text-amber-200 border-amber-300 dark:border-amber-700/80 font-bold";
    return "bg-emerald-100 text-emerald-950 dark:bg-emerald-950/90 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700/80 font-bold";
  };

  const getScoreBgClass = (score: number) => {
    if (score >= 16) return "bg-red-500 dark:bg-red-500";
    if (score >= 10) return "bg-orange-500 dark:bg-orange-500";
    if (score >= 5) return "bg-yellow-500 dark:bg-yellow-500";
    return "bg-green-500 dark:bg-green-500";
  };

  const activeRisk = risks.find(r => r.id === selectedRisk) || risks[0];
  const activeScore = activeRisk.l * activeRisk.i;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* 5x5 Grid Card */}
      <div className="lg:col-span-7 bg-white dark:bg-navy-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-navy-700/60 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-[#0d1b36] dark:text-white">Likelihood vs. Impact</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">(1 = Minor, 5 = Catastrophic)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 dark:text-slate-300">
              <span className="w-2.5 h-2.5 rounded bg-green-500"></span> Low
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 dark:text-slate-300">
              <span className="w-2.5 h-2.5 rounded bg-yellow-500"></span> Med
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 dark:text-slate-300">
              <span className="w-2.5 h-2.5 rounded bg-orange-500"></span> High
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 dark:text-slate-300">
              <span className="w-2.5 h-2.5 rounded bg-red-500"></span> Crit
            </span>
          </div>
        </div>

        <div className="relative pt-4 pl-8 pb-4">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] uppercase tracking-widest text-slate-400 font-bold w-32 text-center -ml-12">
            Likelihood
          </div>
          
          <div className="grid grid-rows-5 gap-2 select-none">
            {[5, 4, 3, 2, 1].map((l) => (
              <div key={`row-${l}`} className="grid grid-cols-5 gap-2 h-14 sm:h-16">
                {[1, 2, 3, 4, 5].map((i) => {
                  const r = risks.find(risk => risk.l === l && risk.i === i);
                  if (!r) return <div key={`empty-${l}-${i}`} className="bg-slate-50 rounded-lg"></div>;
                  const score = l * i;
                  const isSelected = selectedRisk === r.id;
                  
                  return (
                    <button
                      key={r.id}
                      onClick={() => setSelectedRisk(r.id)}
                      className={`p-1.5 sm:p-2 rounded-lg flex flex-col justify-between hover:scale-[1.02] transition-transform text-left border ${getScoreColor(score)} ${isSelected ? 'ring-2 ring-offset-2 ring-offset-white dark:ring-offset-navy-900 ring-teal-500 dark:ring-teal-400' : ''}`}
                    >
                      <div className="flex justify-between items-start w-full">
                        <span className="text-xs font-bold font-mono">{score}</span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>}
                      </div>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="mt-4 text-center text-[10px] uppercase tracking-widest text-slate-400 font-bold">
            Impact <span className="font-normal">(1 = Minor • 5 = Catastrophic)</span>
          </div>
        </div>
      </div>

      {/* Selected Risk Detail Drawer Card */}
      <div className="lg:col-span-5 bg-white dark:bg-navy-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-navy-700/60 space-y-6">
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 dark:border-navy-800 gap-3">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#F15E1C]/10 dark:bg-orange-500/20 text-[#F15E1C] dark:text-orange-400">
              {activeRisk.id}
            </span>
            <span className="text-xs uppercase text-slate-500 font-semibold tracking-wider">Detail Drawer</span>
          </div>
          <span className="px-2 py-1 rounded text-[10px] font-bold bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-800">
            {activeRisk.strategy}
          </span>
        </div>
        
        <div>
          <h3 className="text-lg text-[#0d1b36] dark:text-white font-bold leading-snug">
            {activeRisk.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Dynamic risk scenario calibrated via real-time telemetry from associated assets.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#f8f9fc] dark:bg-navy-950/50 space-y-3">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Calibrated Risk Score</span>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-[#0d1b36] dark:text-white">{activeScore}</span>
            <span className="text-sm text-slate-500">[{activeRisk.l} Likelihood × {activeRisk.i} Impact]</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-navy-800 rounded-full h-1.5 overflow-hidden">
            <div className={`h-full ${getScoreBgClass(activeScore)}`} style={{ width: `${(activeScore / 25) * 100}%` }}></div>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-slate-50 dark:bg-navy-800/50">
            <span className="text-slate-500 font-medium">Linked Asset</span>
            <span className="font-mono text-xs text-[#0d1b36] dark:text-white font-semibold">{activeRisk.asset}</span>
          </div>
          <div className="flex items-center justify-between py-2.5 px-3 rounded-lg">
            <span className="text-slate-500 font-medium">Risk Owner</span>
            <span className="text-[#0d1b36] dark:text-white font-semibold">{activeRisk.owner}</span>
          </div>
          <div className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-slate-50 dark:bg-navy-800/50">
            <span className="text-slate-500 font-medium">Audit Evidence Record</span>
            <span className="font-mono text-[11px] text-[#2E936F] font-semibold">{activeRisk.evidence}</span>
          </div>
        </div>

        <div className="pt-2 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="font-medium">Workflow Automation:</span>
            <span className="font-mono text-[10px] text-teal-600 dark:text-teal-400">Simulates telemetry recalculation</span>
          </div>
          <button
            onClick={handleRecalibrate}
            disabled={isRecalibrating}
            className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 text-white text-sm font-semibold transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
          >
            {isRecalibrating ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                <span>Recalibrating Risk Score...</span>
              </>
            ) : (
              <>
                <RefreshCw className="h-4 w-4" />
                <span>Trigger Automated Recalibration</span>
              </>
            )}
          </button>
          {recalibratedAt && (
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs text-center flex items-center justify-center gap-1.5 font-medium animate-fadeIn">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
              <span>Demo Mode: Recalibration simulated against telemetry stream ({recalibratedAt})</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
