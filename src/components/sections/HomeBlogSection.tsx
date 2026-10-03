import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog-storage";
import { BlogPost } from "@/lib/blog-types";
import { BookOpen, ArrowRight, Clock, Calendar } from "lucide-react";

export const HomeBlogSection: React.FC = async () => {
  const allPosts = await getAllPosts(false);
  // Take first 3 published posts
  const posts: BlogPost[] = allPosts.slice(0, 3);

  if (posts.length === 0) return null;

  // Category color palette (cycles through if more than defined)
  const categoryColors: Record<string, { bg: string; text: string }> = {
    "Framework Governance": { bg: "bg-teal-100 dark:bg-teal-950/40", text: "text-teal-800 dark:text-teal-300" },
    "Risk Management": { bg: "bg-amber-100 dark:bg-amber-950/40", text: "text-amber-800 dark:text-amber-300" },
    "GRC Operations": { bg: "bg-orange-100 dark:bg-orange-950/40", text: "text-orange-800 dark:text-orange-300" },
    Compliance: { bg: "bg-emerald-100 dark:bg-emerald-950/40", text: "text-emerald-800 dark:text-emerald-300" },
    Governance: { bg: "bg-purple-100 dark:bg-purple-950/40", text: "text-purple-800 dark:text-purple-300" },
  };

  const getCategoryStyle = (category: string) =>
    categoryColors[category] ?? { bg: "bg-slate-100 dark:bg-slate-800/50", text: "text-slate-700 dark:text-slate-300" };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "";
    }
  };

  return (
    <section
      id="blog-preview"
      className="relative w-full bg-white dark:bg-[#0A111F] px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6 sm:pb-10 border-t border-slate-200 dark:border-navy-700/60 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#F15E1C]/08 dark:bg-[#F15E1C]/10 blur-3xl"
      />

      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFEFE7] dark:bg-orange-950/40 border border-[#F15E1C]/30 text-[#F15E1C] text-xs font-mono font-extrabold uppercase tracking-wider">
              <BookOpen className="h-3.5 w-3.5 shrink-0" />
              <span>Editorial &amp; Insights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight">
              From the GRC{" "}
              <span className="text-[#F15E1C]">operations desk.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
              Practical insights on risk management, compliance frameworks, and governance strategy from our editorial team.
            </p>
          </div>

          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-xs text-white bg-[#F15E1C] hover:bg-[#ce4700] transition-colors shadow-md shrink-0 self-start sm:self-auto"
          >
            <span>Read All Blogs</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {posts.map((post, idx) => {
            const catStyle = getCategoryStyle(post.category);
            const isFirst = idx === 0;
            return (
              <Link
                key={post.id}
                href={`/resources/blog/${post.slug}`}
                className={`group flex flex-col justify-between rounded-2xl border transition-all duration-200 overflow-hidden hover:shadow-lg ${
                  isFirst
                    ? "border-[#F15E1C]/40 dark:border-[#F15E1C]/30 bg-gradient-to-br from-[#FFF4EE] to-white dark:from-[#1A1007]/60 dark:to-[#0A111F] hover:border-[#F15E1C]/70 shadow-md"
                    : "border-slate-200 dark:border-navy-700/70 bg-white dark:bg-navy-900/60 hover:border-[#F15E1C]/40 dark:hover:border-[#F15E1C]/30"
                }`}
              >
                {/* Cover Image */}
                {post.coverImage && (
                  <div className="relative w-full overflow-hidden" style={{ height: "180px" }}>
                    <img
                      src={post.coverImage}
                      alt={post.coverImageAlt || post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {isFirst && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-[#F15E1C] text-white text-[10px] font-mono font-black uppercase tracking-wider shadow-sm">
                          Latest
                        </span>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-col justify-between flex-1 p-5">
                  <div className="space-y-3">
                    {/* Category & Reading Time */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${catStyle.bg} ${catStyle.text}`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] font-mono text-slate-500 dark:text-slate-400 font-medium">
                        <Clock className="h-3 w-3" />
                        {post.readingTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-extrabold text-base sm:text-lg text-navy-900 dark:text-white leading-snug group-hover:text-[#F15E1C] dark:group-hover:text-orange-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 font-medium">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer: Author + Date + CTA */}
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-navy-700/60 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-7 h-7 rounded-full bg-[#2E936F]/20 dark:bg-emerald-900/40 flex items-center justify-center shrink-0 text-[#2E936F] font-extrabold text-xs">
                        {post.author?.name?.[0] ?? "O"}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-navy-900 dark:text-white truncate">{post.author?.name}</p>
                        {post.publishedAt && (
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <Calendar className="h-2.5 w-2.5" />
                            {formatDate(post.publishedAt)}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-extrabold text-[#F15E1C] shrink-0 group-hover:gap-2 transition-all">
                      Read
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
