"use client";
import React, { useState } from "react";
import { AlertTriangle, Calendar, CalendarDays, Verified, CheckSquare, Lock, Download, Info } from "lucide-react";

export function ComplianceBoardInteractive() {
  const [selectedCard, setSelectedCard] = useState("card-postgres");

  const cardsData: Record<string, any> = {
    "card-postgres": {
      code: "CTRL-012",
      title: "PostgreSQL Database Snapshot Recovery Drill",
      owner: "Platform Eng Lead",
      group: "Database Reliability Engineering",
      cadence: "Bi-Monthly Cadence",
      statusText: "Action Needed (Due in 4 Days)",
      statusClass: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800",
      frameworks: [
        "SOC 2 Type II: CC7.3 (Disaster Recovery Testing)",
        "ISO/IEC 27001:2022 - A.8.14 (Redundancy & Backup)"
      ],
      checklist: [
        "Spin up isolated test RDS instance from cold S3 WAL backup.",
        "Execute data consistency checksums on test tables.",
        "Record total recovery elapsed time (RTO < 45 minutes)."
      ],
      evidenceId: "ev-dr-postgres-wal-test.log (a62bf3489e...1188c)"
    },
    "card-okta": {
      code: "CTRL-048",
      title: "Quarterly User Access Review (IdP / Okta)",
      owner: "IT Security Director",
      group: "Identity & Access Management",
      cadence: "Monthly Review (30 Days)",
      statusText: "Pending Sign-off (In 14 Days)",
      statusClass: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800",
      frameworks: [
        "SOC 2 Type II: CC6.2 (User Registration/Deregistration)",
        "ISO/IEC 27001:2022 - A.9.2 (Access Provisioning)"
      ],
      checklist: [
        "Export active privileged user lists from Okta and AWS IAM.",
        "Cross-reference manager retention approvals for terminated employees.",
        "Revoke unauthenticated session tokens exceeding 30-day threshold."
      ],
      evidenceId: "ev-okta-uar-may2025.csv (f14a0918c5e009...831ef)"
    },
    "card-dpdp": {
      code: "CTRL-089",
      title: "DPDP Data Fiduciary Consent Log Audit",
      owner: "Data Protection Officer (DPO)",
      group: "Privacy & Legal Compliance",
      cadence: "Scheduled (Next 60 Days)",
      statusText: "In Pipeline",
      statusClass: "bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-700",
      frameworks: [
        "India DPDP Act 2023 - Sec 8",
        "EU GDPR - Art 7"
      ],
      checklist: [
        "Verify user notice delivery logs across multi-lingual user portals.",
        "Audit cryptographic consent receipt database retention times.",
        "Test automated Right to Erasure cascade job in staging queues."
      ],
      evidenceId: "ev-dpdp-consent-sampling-q3.json (e8871ab9...021ac)"
    },
    "card-pentest": {
      code: "CTRL-105",
      title: "Annual External Network Penetration Test",
      owner: "AppSec Lead",
      group: "Offensive Security & Red Team",
      cadence: "Annual (Next 90 Days)",
      statusText: "Vendor Scoping Stage",
      statusClass: "bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-700",
      frameworks: [
        "SOC 2 Type II: CC4.1 (Vulnerability Assessments)",
        "PCI-DSS v4.0 - Requirement 11.3 (Penetration Testing)"
      ],
      checklist: [
        "Finalize vendor scope statement for external AWS CIDR blocks.",
        "Issue non-disclosure covenants and safe-harbor authorisations.",
        "Coordinate IP whitelisting with cloud perimeter WAF team."
      ],
      evidenceId: "ev-pentest-sow-draft.pdf (c5123fa...98b01)"
    },
    "card-kms": {
      code: "CTRL-004",
      title: "Q2 Production AWS KMS Rotation Verification",
      owner: "DevSecOps Lead",
      group: "Infrastructure & Cryptography",
      cadence: "Quarterly (90 Days)",
      statusText: "Audit Verified & Signed",
      statusClass: "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-800",
      frameworks: [
        "SOC 2 Type II: CC6.1 (Logical Access)",
        "ISO/IEC 27001:2022 - A.8.24 (Cryptography)"
      ],
      checklist: [
        "Confirm KMS Key Rotation enabled via AWS CLI script.",
        "Extract CloudTrail event log of automated primary key generation.",
        "Verify customer data encrypt/decrypt sanity checks in staging."
      ],
      evidenceId: "ev-kms-2026-q2.json (b489ca729d71e11...902bf)"
    }
  };

  const activeData = cardsData[selectedCard];

  return (
    <div className="w-full">
      {/* Board Layout Grid: 5 Column View on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-10 items-start">
        
        {/* Column 1: Action Needed */}
        <div className="flex flex-col gap-3 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 rounded-xl p-3 shadow-sm">
          <div className="flex items-center justify-between px-1 py-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <h3 className="text-xs text-[#0d1b36] dark:text-white font-bold uppercase tracking-wide">Action Needed</h3>
            </div>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400">1 Alert</span>
          </div>
          <div 
            className={`cursor-pointer bg-slate-50 dark:bg-navy-950 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-2 group border ${selectedCard === 'card-postgres' ? 'border-teal-500 ring-1 ring-teal-500' : 'border-slate-200 dark:border-navy-800'}`}
            onClick={() => setSelectedCard('card-postgres')}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-teal-600 dark:text-teal-400 font-bold tracking-wide">CTRL-012</span>
              <span className="font-mono text-[10px] text-red-600 dark:text-red-400 font-bold flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" /> 4 Days
              </span>
            </div>
            <h4 className="text-sm text-[#0d1b36] dark:text-white font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">PostgreSQL Snapshot Drill</h4>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="font-mono text-[9px] px-1.5 py-0.5 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded text-slate-600 dark:text-slate-300 font-semibold">SOC 2 CC7.3</span>
              <span className="font-mono text-[9px] px-1.5 py-0.5 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded text-slate-600 dark:text-slate-300 font-semibold">ISO A.8.14</span>
            </div>
          </div>
        </div>

        {/* Column 2: Current 30 Days */}
        <div className="flex flex-col gap-3 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 rounded-xl p-3 shadow-sm">
          <div className="flex items-center justify-between px-1 py-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <h3 className="text-xs text-[#0d1b36] dark:text-white font-bold uppercase tracking-wide">Current 30 Days</h3>
            </div>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-500">1 Active</span>
          </div>
          <div 
            className={`cursor-pointer bg-slate-50 dark:bg-navy-950 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-2 group border ${selectedCard === 'card-okta' ? 'border-teal-500 ring-1 ring-teal-500' : 'border-slate-200 dark:border-navy-800'}`}
            onClick={() => setSelectedCard('card-okta')}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-yellow-600 dark:text-yellow-500 font-bold tracking-wide">CTRL-048</span>
              <span className="font-mono text-[10px] text-yellow-600 dark:text-yellow-500 font-bold flex items-center gap-1">
                <Calendar className="h-3 w-3" /> 14 Days
              </span>
            </div>
            <h4 className="text-sm text-[#0d1b36] dark:text-white font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Quarterly User Access Review</h4>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="font-mono text-[9px] px-1.5 py-0.5 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded text-slate-600 dark:text-slate-300 font-semibold">SOC 2 CC6.2</span>
              <span className="font-mono text-[9px] px-1.5 py-0.5 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded text-slate-600 dark:text-slate-300 font-semibold">ISO A.9.2</span>
            </div>
          </div>
        </div>

        {/* Column 3: Next 60 Days */}
        <div className="flex flex-col gap-3 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 rounded-xl p-3 shadow-sm">
          <div className="flex items-center justify-between px-1 py-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border-2 border-slate-400"></span>
              <h3 className="text-xs text-[#0d1b36] dark:text-white font-bold uppercase tracking-wide">Next 60 Days</h3>
            </div>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300">1 Scheduled</span>
          </div>
          <div 
            className={`cursor-pointer bg-slate-50 dark:bg-navy-950 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-2 group border ${selectedCard === 'card-dpdp' ? 'border-teal-500 ring-1 ring-teal-500' : 'border-slate-200 dark:border-navy-800'}`}
            onClick={() => setSelectedCard('card-dpdp')}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-slate-600 dark:text-slate-400 font-bold tracking-wide">CTRL-089</span>
              <span className="font-mono text-[10px] text-slate-600 dark:text-slate-400 font-bold flex items-center gap-1">
                <CalendarDays className="h-3 w-3" /> 45 Days
              </span>
            </div>
            <h4 className="text-sm text-[#0d1b36] dark:text-white font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">DPDP Consent Log Verification</h4>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="font-mono text-[9px] px-1.5 py-0.5 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded text-slate-600 dark:text-slate-300 font-semibold">DPDP Sec 8</span>
              <span className="font-mono text-[9px] px-1.5 py-0.5 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded text-slate-600 dark:text-slate-300 font-semibold">GDPR Art 7</span>
            </div>
          </div>
        </div>

        {/* Column 4: Next 90 Days */}
        <div className="flex flex-col gap-3 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 rounded-xl p-3 shadow-sm">
          <div className="flex items-center justify-between px-1 py-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border-2 border-slate-400"></span>
              <h3 className="text-xs text-[#0d1b36] dark:text-white font-bold uppercase tracking-wide">Next 90 Days</h3>
            </div>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300">1 Pipeline</span>
          </div>
          <div 
            className={`cursor-pointer bg-slate-50 dark:bg-navy-950 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-2 group border ${selectedCard === 'card-pentest' ? 'border-teal-500 ring-1 ring-teal-500' : 'border-slate-200 dark:border-navy-800'}`}
            onClick={() => setSelectedCard('card-pentest')}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-slate-600 dark:text-slate-400 font-bold tracking-wide">CTRL-105</span>
              <span className="font-mono text-[10px] text-slate-600 dark:text-slate-400 font-bold flex items-center gap-1">
                <CalendarDays className="h-3 w-3" /> 82 Days
              </span>
            </div>
            <h4 className="text-sm text-[#0d1b36] dark:text-white font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Annual External Pen Test</h4>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="font-mono text-[9px] px-1.5 py-0.5 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded text-slate-600 dark:text-slate-300 font-semibold">SOC 2 CC4.1</span>
              <span className="font-mono text-[9px] px-1.5 py-0.5 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded text-slate-600 dark:text-slate-300 font-semibold">PCI 11.3</span>
            </div>
          </div>
        </div>

        {/* Column 5: Audit Ready */}
        <div className="flex flex-col gap-3 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 rounded-xl p-3 shadow-sm">
          <div className="flex items-center justify-between px-1 py-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
              <h3 className="text-xs text-[#0d1b36] dark:text-white font-bold uppercase tracking-wide">Audit Ready</h3>
            </div>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400">1 Verified</span>
          </div>
          <div 
            className={`cursor-pointer bg-slate-50 dark:bg-navy-950 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-2 group border ${selectedCard === 'card-kms' ? 'border-teal-500 ring-1 ring-teal-500' : 'border-slate-200 dark:border-navy-800'}`}
            onClick={() => setSelectedCard('card-kms')}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-teal-600 dark:text-teal-400 font-bold tracking-wide">CTRL-004</span>
              <span className="font-mono text-[10px] text-teal-600 dark:text-teal-400 font-bold flex items-center gap-1">
                <Verified className="h-3 w-3" /> Verified
              </span>
            </div>
            <h4 className="text-sm text-[#0d1b36] dark:text-white font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">AWS KMS Key Rotation</h4>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="font-mono text-[9px] px-1.5 py-0.5 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded text-slate-600 dark:text-slate-300 font-semibold">SOC 2 CC6.1</span>
              <span className="font-mono text-[9px] px-1.5 py-0.5 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded text-slate-600 dark:text-slate-300 font-semibold">ISO A.8.24</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Inspection Drawer / Selected Context Panel */}
      <div className="w-full bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 rounded-2xl p-6 shadow-md transition-all">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-100 dark:border-navy-800 mb-6 gap-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-navy-700">
              {activeData.code}
            </span>
            <h3 className="text-xl text-[#0d1b36] dark:text-white font-bold">{activeData.title}</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${activeData.statusClass}`}>
              <Info className="h-4 w-4" /> {activeData.statusText}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Ownership & Governance Specs */}
          <div className="flex flex-col gap-4">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono">Accountability & Scope</div>
            <div className="bg-slate-50 dark:bg-navy-950/50 p-4 rounded-xl flex flex-col gap-3 border border-slate-100 dark:border-navy-800">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Designated Owner</span>
                <span className="text-sm text-[#0d1b36] dark:text-white font-semibold">{activeData.owner}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Assigned Group</span>
                <span className="text-sm text-[#0d1b36] dark:text-white">{activeData.group}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Cadence Frequency</span>
                <span className="font-mono text-xs text-[#0d1b36] dark:text-white font-bold">{activeData.cadence}</span>
              </div>
            </div>
            
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono mt-2">Mapped Framework Standards</div>
            <div className="flex flex-wrap gap-2">
              {activeData.frameworks.map((fw: string, i: number) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 font-mono text-[10px] text-slate-600 dark:text-slate-300 shadow-sm">
                  {fw}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Verification Checklist */}
          <div className="flex flex-col gap-4">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono">Operational Verification Checklist</div>
            <div className="bg-slate-50 dark:bg-navy-950/50 p-4 rounded-xl flex flex-col gap-4 border border-slate-100 dark:border-navy-800">
              {activeData.checklist.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckSquare className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Evidence Hash & Posture Telemetry Inset */}
          <div className="flex flex-col gap-4">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono">Immutable Evidence Vault Record</div>
            <div className="bg-slate-900 p-4 rounded-xl font-mono text-xs flex flex-col gap-3 shadow-inner border border-slate-800">
              <div className="flex items-center justify-between text-teal-400 font-bold">
                <span className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" /> EVIDENCE REFERENCED</span>
                <span>SHA-256</span>
              </div>
              <div className="text-slate-200 break-all font-mono text-[11px] font-semibold tracking-wide border-b border-slate-700/50 pb-3">
                {activeData.evidenceId}
              </div>
              <div className="text-[10px] flex flex-col gap-1.5 text-slate-400 pt-1">
                <span className="flex justify-between">Ingested: <strong className="text-white">2025-05-12T14:32:01Z</strong></span>
                <span className="flex justify-between">Source: <strong className="text-white">CloudWatch /omni/kms</strong></span>
                <span className="flex justify-between">Partition: <strong className="text-white">US-EAST-VAULT-04</strong></span>
              </div>
              <button className="mt-2 w-full py-2 bg-slate-800 hover:bg-slate-700 text-white rounded text-[11px] font-bold transition-colors flex items-center justify-center gap-1.5 border border-slate-700">
                <Download className="h-3.5 w-3.5" /> Download Signed Manifest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
