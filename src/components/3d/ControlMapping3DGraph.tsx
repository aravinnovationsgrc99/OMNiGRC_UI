"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Zap, CheckCircle2, Cpu, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const graphNodes = [
  {
    id: "framework",
    title: "Obligation Layer",
    badge: "SOC 2 + ISO 27001",
    color: "brand-orange",
    desc: "200+ Global Standards & Customer Addendums",
  },
  {
    id: "controls",
    title: "Unified Controls",
    badge: "412 Auto-Mapped",
    color: "brand-gold",
    desc: "Single control satisfies multiple frameworks",
  },
  {
    id: "telemetry",
    title: "Autonomous Telemetry",
    badge: "300+ Native Integrations",
    color: "brand-green",
    desc: "24/7 API evidence collection & gap detection",
  },
  {
    id: "posture",
    title: "Trust Posture",
    badge: "Auditor Ready",
    color: "brand-yellow",
    desc: "Zero audit surprises & instant customer proof",
  },
];

export const ControlMapping3DGraph: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>("telemetry");

  return (
    <div className="relative w-full rounded-3xl border border-brand-orange/30 bg-slate-950/90 p-6 sm:p-10 shadow-2xl overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <Badge variant="ai" icon={<Zap className="h-3 w-3" />} className="mb-2">
          AUTONOMOUS GRAPH ENGINE
        </Badge>
        <h3 className="text-xl sm:text-3xl font-extrabold text-white">
          Real-time AI Control Mapping & Evidence Flow
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2">
          Click any node below to inspect live assurance dependencies.
        </p>
      </div>

      {/* Interactive Node Flow */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
        {graphNodes.map((node, idx) => {
          const isActive = activeNode === node.id;
          return (
            <React.Fragment key={node.id}>
              <motion.div
                whileHover={{ scale: 1.04, y: -4 }}
                onClick={() => setActiveNode(node.id)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-brand-orange bg-slate-900 shadow-xl shadow-brand-orange/15"
                    : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-brand-orange/10 text-brand-orange">
                    {idx === 0 && <Shield className="h-5 w-5" />}
                    {idx === 1 && <Cpu className="h-5 w-5" />}
                    {idx === 2 && <Zap className="h-5 w-5" />}
                    {idx === 3 && <CheckCircle2 className="h-5 w-5 text-brand-green" />}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-peach">NODE 0{idx + 1}</span>
                </div>

                <h4 className="font-bold text-sm text-white mb-1">{node.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-3">{node.desc}</p>

                <Badge variant="orange" size="sm">
                  {node.badge}
                </Badge>
              </motion.div>

              {idx < graphNodes.length - 1 && (
                <div className="hidden md:flex items-center justify-center -mx-2">
                  <ArrowRight className="h-4 w-4 text-brand-orange animate-pulse" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
