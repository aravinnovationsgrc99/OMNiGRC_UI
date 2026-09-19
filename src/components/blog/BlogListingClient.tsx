"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-types";
import { Search, Clock, Calendar, ArrowRight, User, Sparkles, Filter } from "lucide-react";

interface BlogListingClientProps {
  initialPosts: BlogPost[];
}

export function BlogListingClient({ initialPosts }: BlogListingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    initialPosts.forEach((p) => {
      if (p.category) cats.add(p.category);
    });
    return ["All", ...Array.from(cats)];
  }, [initialPosts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCat = selectedCategory === "All" || post.category.toLowerCase() === selectedCategory.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  // Separate featured post if available
  const featuredPost = useMemo(() => {
    if (filteredPosts.length === 0) return null;
    return filteredPosts[0];
  }, [filteredPosts]);

  const regularPosts = useMemo(() => {
    if (filteredPosts.length <= 1) return filteredPosts.slice(1);
    return filteredPosts.slice(1);
  }, [filteredPosts]);

  return (
    <div className="space-y-10">
      {/* FILTER AND SEARCH BAR */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#faf8ff] dark:bg-navy-950/60 border border-slate-200 dark:border-navy-700/60 shadow-sm">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <Filter className="w-4 h-4 text-[#F15E1C] shrink-0 ml-1 hidden sm:block" />
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-[#F15E1C] text-white shadow-sm"
                    : "bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:border-[#F15E1C]/40 border border-slate-200 dark:border-navy-700"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles, SOC 2, NIST..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs font-medium rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#F15E1C] transition-colors"
          />
        </div>
      </div>

      {/* ZERO POSTS / EMPTY STATE */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16 px-4 rounded-3xl bg-[#faf8ff] dark:bg-navy-950/40 border border-dashed border-slate-300 dark:border-navy-700">
          <div className="w-12 h-12 rounded-2xl bg-[#ffdbcf] dark:bg-orange-950/50 text-[#F15E1C] flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No Articles Found</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
            No published articles match your current search filter &quot;{searchQuery || selectedCategory}&quot;.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#F15E1C] hover:bg-[#ce4700] transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* FEATURED ARTICLE SPOTLIGHT */}
      {featuredPost && (
        <div className="group relative rounded-3xl overflow-hidden bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 shadow-lg hover:border-[#F15E1C]/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 relative min-h-[280px] lg:min-h-[380px]">
            {featuredPost.coverImage ? (
              <img
                src={featuredPost.coverImage}
                alt={featuredPost.coverImageAlt || featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-slate-900 flex items-center justify-center text-slate-700">
                No Image
              </div>
            )}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-[#F15E1C] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                FEATURED ARTICLE
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-[#ffdbcf] dark:bg-orange-950/40 text-[#F15E1C] dark:text-orange-400 font-mono text-[11px] font-bold">
                  {featuredPost.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {featuredPost.readingTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#F15E1C] dark:group-hover:text-orange-400 transition-colors mb-3 leading-snug">
                <Link href={`/resources/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 line-clamp-3">
                {featuredPost.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {featuredPost.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-navy-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-navy-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#ffdbcf] dark:bg-orange-950/60 text-[#F15E1C] flex items-center justify-center font-bold text-xs">
                  {featuredPost.author?.name?.[0] || "O"}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-none">
                    {featuredPost.author?.name || "OMNiGRC Team"}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    {new Date(featuredPost.publishedAt || featuredPost.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </p>
                </div>
              </div>

              <Link
                href={`/resources/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F15E1C] dark:text-orange-400 group-hover:translate-x-1 transition-transform"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ARTICLE GRID */}
      {regularPosts.length > 0 && (
        <div className="space-y-6">
          <h3 className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            All Articles ({filteredPosts.length})
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 overflow-hidden shadow-sm hover:shadow-md hover:border-[#F15E1C]/40 transition-all duration-300"
              >
                <div>
                  {/* Cover thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-navy-950">
                    {post.coverImage ? (
                      <img
                        src={post.coverImage}
                        alt={post.coverImageAlt || post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                        No Cover Image
                      </div>
                    )}
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 dark:bg-navy-950/90 backdrop-blur text-slate-900 dark:text-white font-mono text-[10px] font-bold border border-slate-200 dark:border-navy-700 shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium mb-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>
                        {new Date(post.publishedAt || post.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </span>
                      <span>•</span>
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.readingTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#F15E1C] dark:group-hover:text-orange-400 transition-colors mb-2 leading-snug line-clamp-2">
                      <Link href={`/resources/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-5 pb-5 pt-3 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400 font-medium flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#F15E1C]" />
                    {post.author?.name || "OMNiGRC Team"}
                  </span>
                  <Link
                    href={`/resources/blog/${post.slug}`}
                    className="font-bold text-[#F15E1C] dark:text-orange-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
