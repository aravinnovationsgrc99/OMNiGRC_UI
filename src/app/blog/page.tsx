"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { GenericHeroMotif } from "@/components/ui/HeroVisualMotifs";
import { Search, ArrowRight, Calendar, User, BookOpen } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const blogPosts = [
  {
    id: 1,
    title: "How to Map a Single Control Across ISO 27001, SOC 2, and DPDP",
    category: "Control Mapping",
    date: "Sep 2026",
    author: "OMNiGRC Architecture Team",
    snippet: "Learn how lean security teams avoid duplicate policy authoring by designing common internal controls and using advisory AI for clause correlation.",
  },
  {
    id: 2,
    title: "Designing a Practical 5x5 Risk Heatmap Connected to Asset Inventory",
    category: "Risk Management",
    date: "Sep 2026",
    author: "OMNiGRC Security Team",
    snippet: "Why standalone risk spreadsheets drift from reality, and how linking risks directly to database assets and protective safeguards keeps your posture defensible.",
  },
  {
    id: 3,
    title: "Data Minimization in Compliance AI: What Should Never Be Sent to LLMs",
    category: "AI & Privacy",
    date: "Aug 2026",
    author: "Privacy Engineering",
    snippet: "An architectural deep-dive into payload sanitization, tenant isolation, and why human-in-the-loop oversight is mandatory for compliant AI assistance.",
  },
  {
    id: 4,
    title: "Establishing a Rolling 30/60/90-Day Compliance Testing Cadence",
    category: "Audit Readiness",
    date: "Aug 2026",
    author: "GRC Operations",
    snippet: "Moving away from annual pre-audit fire drills by distributing recurring evidence checks among team owners on a structured Kanban testing board.",
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
    <div className="min-h-screen bg-canvas dark:bg-[#0A111F] text-navy-900 dark:text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="PRACTICAL GRC INSIGHTS"
          title="Articles, guides, and engineering notes."
          subtitle="Explore practical guides on multi-framework control mapping, asset inventory risk scoring, and zero-retention AI architecture."
          visual={<GenericHeroMotif type="blog" />}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="relative max-w-md mx-auto mb-16">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles, frameworks, guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 pl-11 pr-4 py-3 text-xs text-navy-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-teal focus:outline-none"
            />
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredPosts.map((post) => (
              <TiltCard key={post.id} className="p-8 border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/70 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-[#2E936F]/15 dark:bg-teal/15 text-[#2E936F] dark:text-teal font-semibold">
                      {post.category}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-[#D4521A] dark:text-amber" /> {post.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 hover:text-teal transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{post.snippet}</p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800/80 pt-4 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                    <User className="h-3.5 w-3.5 text-teal" /> {post.author}
                  </span>
                  <Link href="/trust-vault" className="text-teal font-semibold hover:underline flex items-center gap-1">
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
