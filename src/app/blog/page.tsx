import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { getAllPosts } from "@/lib/blog-storage";
import { BlogListingClient } from "@/components/blog/BlogListingClient";

export const metadata: Metadata = {
  title: "OMNiGRC Blog — Governance, Risk & Compliance Insights",
  description: "Substantive articles, operational crosswalk methodologies, and risk governance strategies for modern security & compliance leaders.",
};

export default async function BlogPage() {
  const posts = await getAllPosts(false);

  return (
    <div className="min-h-screen bg-transparent text-navy-900 dark:text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="PRACTICAL GRC INSIGHTS"
          title="Articles, guides, and engineering notes."
          subtitle="Explore practical guides on multi-framework control mapping, asset inventory risk scoring, and zero-retention AI architecture."
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <BlogListingClient initialPosts={posts} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
