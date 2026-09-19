"use client";
import React, { useState } from "react";
import { Search, Filter, Link as LinkIcon, History, Cloud, UserCheck, Code, CheckCircle, Clock } from "lucide-react";

export function EvidenceTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Evidence");

  const filters = [
    { name: "All Evidence", count: 142 },
    { name: "Cloud Infrastructure", count: 48 },
    { name: "Identity & Access", count: 34 },
    { name: "Security Policies", count: 22 },
    { name: "Vendor DPAs", count: 19 },
    { name: "HR & Training", count: 19 },
  ];

  const evidenceData = [
    {
      id: "EVD-108", title: "AWS KMS Automatic Key Rotation Policy",
      hash: "sha256:4a8f9c1b...d902", hashColor: "text-teal-500",
      targetIcon: <Cloud className="h-4 w-4 text-teal-500" />, targetUri: "arn:aws:kms:us-east-1:482...", targetType: "AWS KMS Console • Read-Only External",
      controls: ["SOC2 CC6.1", "ISO A.8.24", "HIPAA §164.312(a)"],
      cadence: "Annual Review", dueText: "Due in 34 days", dueColor: "text-teal-500",
      owner: "E. Vance", role: "Principal SecOps",
      state: "Verified Valid", stateIcon: <CheckCircle className="h-4 w-4" />, stateColor: "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400", stateSub: "Signed 2026-03-12"
    },
    {
      id: "EVD-109", title: "Okta Global MFA Policy Enforcement Log Export",
      hash: "sha256:7b21e8d4...330a", hashColor: "text-orange-500",
      targetIcon: <UserCheck className="h-4 w-4 text-orange-500" />, targetUri: "s3://customer-sec-audit-bucket/okta/...", targetType: "Customer S3 Bucket • Immutable URI",
      controls: ["SOC2 CC6.2", "ISO A.5.15", "DPDP Sec. 8"],
      cadence: "Quarterly (90d)", dueText: "Due in 18 days", dueColor: "text-orange-500",
      owner: "R. Chen", role: "Identity Lead",
      state: "Verified Valid", stateIcon: <CheckCircle className="h-4 w-4" />, stateColor: "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400", stateSub: "Signed 2026-03-01"
    },
    {
      id: "EVD-110", title: "GitHub Enterprise Main Branch Signed Commit Enforcement",
      hash: "sha256:c029df44...bb71", hashColor: "text-slate-500",
      targetIcon: <Code className="h-4 w-4 text-slate-500" />, targetUri: "api.github.com/repos/org/core/...", targetType: "Git Rule Pointer • Commit Hash Linked",
      controls: ["SOC2 CC8.1", "ISO A.8.32"],
      cadence: "Monthly (30d)", dueText: "Due in 2 days", dueColor: "text-red-500",
      owner: "M. Kowalski", role: "DevOps Staff Eng",
      state: "Re-attestation Pending", stateIcon: <Clock className="h-4 w-4" />, stateColor: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-400", stateSub: "Assigned to M. Kowalski"
    },
    {
      id: "EVD-111", title: "AWS CloudTrail Multi-Region S3 365-Day Lifecycle Rule",
      hash: "sha256:e149ca99...11c0", hashColor: "text-teal-500",
      targetIcon: <Cloud className="h-4 w-4 text-teal-500" />, targetUri: "s3://cloudtrail-org-audit-vault-01/...", targetType: "S3 Bucket Lifecycle Config URI",
      controls: ["SOC2 CC7.2", "ISO A.8.15", "HIPAA §164.312(b)"],
      cadence: "Quarterly (90d)", dueText: "Due in 58 days", dueColor: "text-orange-500",
      owner: "S. Al-Mansoor", role: "Cloud Architect",
      state: "Verified Valid", stateIcon: <CheckCircle className="h-4 w-4" />, stateColor: "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400", stateSub: "Signed 2026-02-28"
    }
  ];

  return (
    <div className="bg-white dark:bg-navy-900 rounded-2xl shadow-sm border border-slate-200 dark:border-navy-700/60 p-6 md:p-8">
      {/* Table Header & Action Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 border-b border-slate-100 dark:border-navy-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl text-[#0d1b36] dark:text-white font-bold">Live Evidence Index</h3>
            <span className="px-2.5 py-1 rounded bg-[#0d1b36] dark:bg-teal-900/40 text-white dark:text-teal-400 font-mono text-[10px] font-bold">142 RECORDS</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Deterministic PostgreSQL catalog of external pointers, signed attestations, and cross-framework control links.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-400 h-4 w-4" />
            <input 
              className="bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 rounded-lg pl-9 pr-4 py-2 text-sm text-[#0d1b36] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 w-full md:w-64 transition-all" 
              placeholder="Filter by ID, URI, or Control..." 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-[#0d1b36] dark:text-white text-sm font-semibold transition-colors border border-slate-200 dark:border-navy-700" type="button">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0d1b36] dark:bg-teal-600 hover:bg-slate-800 dark:hover:bg-teal-500 text-white text-sm font-semibold transition-colors shadow-sm" type="button">
            <LinkIcon className="h-4 w-4" />
            <span>Index New Reference</span>
          </button>
        </div>
      </div>

      {/* Filter Chips Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-2 no-scrollbar">
        {filters.map((f, i) => (
          <button 
            key={i}
            onClick={() => setActiveFilter(f.name)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors border ${
              activeFilter === f.name 
                ? 'bg-[#0d1b36] dark:bg-teal-600 text-white border-transparent' 
                : 'bg-white dark:bg-navy-950 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-navy-700 hover:bg-slate-50 dark:hover:bg-navy-800'
            }`}
          >
            {f.name} ({f.count})
          </button>
        ))}
      </div>

      {/* High-Density Responsive Table View */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-navy-700/60 bg-white dark:bg-navy-950">
        <table className="w-full text-left text-sm text-[#0d1b36] dark:text-slate-200 border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-navy-900 border-b border-slate-200 dark:border-navy-700 font-mono text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">
              <th className="p-4 w-1/4">Evidence ID & Artifact Name</th>
              <th className="p-4 w-1/4">Target Source & Pointer URI</th>
              <th className="p-4">Mapped Controls</th>
              <th className="p-4">Review Cadence</th>
              <th className="p-4">Custodian</th>
              <th className="p-4">Verification State</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-navy-800">
            {evidenceData.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-navy-900/50 transition-colors">
                <td className="p-4 align-top">
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 font-bold shrink-0 mt-0.5">{row.id}</span>
                    <span className="font-bold text-sm leading-tight">{row.title}</span>
                  </div>
                  <div className="font-mono text-[10px] font-medium text-slate-500 mt-2 ml-10">
                    Hash: <span className={`${row.hashColor} font-bold`}>{row.hash}</span>
                  </div>
                </td>
                <td className="p-4 align-top">
                  <div className="flex items-center gap-2 font-mono text-[10px] font-bold mb-1">
                    {row.targetIcon}
                    <span className="truncate max-w-[180px]">{row.targetUri}</span>
                  </div>
                  <span className="text-xs text-slate-500">{row.targetType}</span>
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-1.5">
                    {row.controls.map((c, j) => (
                      <span key={j} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 font-mono text-[9px] font-bold text-slate-600 dark:text-slate-300">
                        {c}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4 align-top">
                  <span className="font-bold text-xs">{row.cadence}</span>
                  <div className={`font-mono text-[10px] font-bold mt-1 ${row.dueColor}`}>{row.dueText}</div>
                </td>
                <td className="p-4 align-top">
                  <div className="font-bold text-xs">{row.owner}</div>
                  <div className="text-xs text-slate-500 mt-1">{row.role}</div>
                </td>
                <td className="p-4 align-top">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${row.stateColor}`}>
                    {row.stateIcon} {row.state}
                  </span>
                  <div className="font-mono text-[10px] font-semibold text-slate-500 mt-2 ml-1">
                    {row.stateSub}
                  </div>
                </td>
                <td className="p-4 align-top text-right">
                  <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-navy-700" title="Inspect Chain of Custody">
                    <History className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer Pagination and Timestamp Attestation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 border-t border-slate-100 dark:border-navy-800 pt-6">
        <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
          <span>Index synchronized with Postgres WAL stream: 2026-03-12T19:42:08Z (UTC)</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
          <span>Showing 1-4 of 142 items</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-navy-700 hover:bg-slate-50 dark:hover:bg-navy-800 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1.5 rounded-lg border border-[#0d1b36] dark:border-teal-600 bg-[#0d1b36] dark:bg-teal-600 text-white font-bold">1</button>
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-navy-700 hover:bg-slate-50 dark:hover:bg-navy-800">2</button>
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-navy-700 hover:bg-slate-50 dark:hover:bg-navy-800">3</button>
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-navy-700 hover:bg-slate-50 dark:hover:bg-navy-800">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
