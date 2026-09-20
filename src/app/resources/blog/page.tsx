import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getAllPosts } from "@/lib/blog-storage";
import { BlogListingClient } from "@/components/blog/BlogListingClient";
import { Sparkles, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "OMNiGRC Blog — Governance, Risk & Compliance Insights",
  description: "Substantive articles, operational crosswalk methodologies, and risk governance strategies for modern security & compliance leaders.",
  openGraph: {
    title: "OMNiGRC Blog — GRC Operations & Governance Insights",
    description: "In-depth technical guides on SOC 2, ISO 27001, risk matrix scoring, and human-governed AI workflows.",
    url: "https://omnigrc.co/resources/blog",
    siteName: "OMNiGRC",
    type: "website",
  },
};

export default async function BlogListingPage() {
  const posts = await getAllPosts(false);

  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />

      <main className="flex-1 w-full pt-16">
        {/* HERO SECTION WITH ADAPTIVE STITCH MESH */}
        <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-10 pb-14 overflow-hidden border-b border-slate-200 dark:border-navy-700/60 bg-grid-mesh-adaptive">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs font-medium text-[#5a4138] dark:text-slate-400 mb-6">
              <Link href="/" className="hover:text-[#F15E1C] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/resources" className="hover:text-[#F15E1C] transition-colors">Resources</Link>
              <span>/</span>
              <span className="text-[#0d1b36] dark:text-white font-bold">Blog</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdbcf] dark:bg-orange-950/40 text-[#380d00] dark:text-orange-400 mb-4 shadow-sm">
                  <BookOpen className="h-4 w-4 text-[#F15E1C]" />
                  <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                    OMNIGRC EDITORIAL & INSIGHTS
                  </span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-[52px] lg:leading-[60px] text-[#0d1b36] dark:text-white font-extrabold tracking-tight">
                  GRC Operations & Governance Journal
                </h1>
                <p className="mt-4 text-base sm:text-lg text-[#5a4138] dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
                  Substantive articles, operational crosswalk methodologies, and practical risk governance strategies. Human-approved compliance operations.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-white bg-[#F15E1C] hover:bg-[#ce4700] transition-colors shadow-md"
                >
                  <span>Request Product Demo</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT INTERACTIVE LISTING (FILTER, SEARCH, FEATURED POST, GRID) */}
        <section className="w-full bg-white dark:bg-[#0A111F] px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <BlogListingClient initialPosts={posts} />
          </div>
        </section>

        {/* CONNECTED PRODUCT NARRATIVE CTA */}
        <section className="w-full bg-[#f1f3ff] dark:bg-navy-950/40 px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200 dark:border-navy-700/60 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="font-mono text-xs font-bold text-[#F15E1C] dark:text-orange-400 uppercase tracking-widest block mb-2">
              CONNECTED GOVERNANCE INTELLIGENCE
            </span>
            <h2 className="text-2xl sm:text-4xl text-[#0d1b36] dark:text-white font-extrabold tracking-tight mb-4">
              Turn blog methodology into continuous compliance operations.
            </h2>
            <p className="text-sm sm:text-base text-[#5a4138] dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect your risk register, asset inventory, policies, controls, and evidence into one unified, human-governed system.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-[#F15E1C] hover:bg-[#ce4700] transition-all shadow-md"
              >
                Schedule Demo Walkthrough
              </Link>
              <Link
                href="/how-it-works"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-[#0d1b36] dark:text-white bg-white dark:bg-navy-900 border border-slate-300 dark:border-navy-700 hover:border-[#F15E1C] transition-all"
              >
                See How OMNiGRC Works
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
