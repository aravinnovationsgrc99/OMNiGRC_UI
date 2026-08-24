"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, Search, ArrowRight, Sparkles, Calendar, User } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const blogPosts = [
  {
    id: 1,
    title: "Understanding SOC 2 Type II vs Type I: Key Differences & Audit Scope",
    category: "SOC 2 Guide",
    date: "Aug 22, 2026",
    author: "Arav'sGRC Research Team",
    snippet: "Discover how to choose between SOC 2 Type I and Type II, what auditors look for, and how to automate continuous control evidence.",
  },
  {
    id: 2,
    title: "Navigating ISO 42001 AI Governance: A Step-by-Step CISO Checklist",
    category: "AI Governance",
    date: "Aug 18, 2026",
    author: "Security & AI Team",
    snippet: "ISO 42001 is the global standard for AI management systems. Learn how to map your LLMs, data pipelines, and AI impact assessments.",
  },
  {
    id: 3,
    title: "How Autonomous TPRM Reduces Vendor Risk Review Times by 90%",
    category: "Vendor Risk",
    date: "Aug 14, 2026",
    author: "Vendor Risk Architects",
    snippet: "Static vendor questionnaires are broken. Learn how AI report parsing and live security scorecards eliminate procurement bottlenecks.",
  },
  {
    id: 4,
    title: "India DPDP Act 2023: What Global SaaS Companies Must Do Now",
    category: "Data Privacy",
    date: "Aug 10, 2026",
    author: "Global Compliance Team",
    snippet: "A practical guide for engineering & compliance leaders to comply with India's Digital Personal Data Protection Act requirements.",
  },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan mb-3 font-semibold inline-block">
              CTRL + GRC KNOWLEDGE HUB
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Insights on autonomous trust, GRC & AI governance.
            </h1>
            <p className="text-slate-300 text-lg mb-8">
              Deep dives, compliance guides, and security benchmarks written by GRC architects.
            </p>

            {/* Search Input */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search articles, frameworks, guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 pl-11 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:border-brand-cyan focus:outline-none"
              />
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredPosts.map((post) => (
              <TiltCard key={post.id} className="p-8 border-slate-800 bg-slate-900/70 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-brand-teal/20 text-brand-cyan font-semibold">
                      {post.category}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" /> {post.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 hover:text-brand-cyan transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">{post.snippet}</p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 text-xs">
                  <span className="text-slate-400 font-mono flex items-center gap-1">
                    <User className="h-3.5 w-3.5" /> {post.author}
                  </span>
                  <Link href="/trust-vault" className="text-brand-cyan font-semibold hover:underline flex items-center gap-1">
                    Read Article <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
