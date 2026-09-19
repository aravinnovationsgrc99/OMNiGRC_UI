import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getPostBySlug, getAllPosts } from "@/lib/blog-storage";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import { Clock, Calendar, ArrowLeft, ArrowRight, User, Tag, Share2, Sparkles, BookOpen } from "lucide-react";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug, false);

  if (!post) {
    return {
      title: "Article Not Found — OMNiGRC Blog",
      description: "The requested blog post could not be found."
    };
  }

  return {
    title: post.seoTitle || `${post.title} | OMNiGRC Blog`,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://omnigrc.com/resources/blog/${post.slug}`,
      siteName: "OMNiGRC",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author?.name || "OMNiGRC Editorial Team"],
      images: post.coverImage ? [{ url: post.coverImage, alt: post.coverImageAlt || post.title }] : []
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : []
    }
  };
}

export default async function BlogArticlePage({ params }: ArticlePageProps) {
  const post = await getPostBySlug(params.slug, false);

  if (!post) {
    notFound();
  }

  // Get related articles (same category or recent, excluding current)
  const allPosts = await getAllPosts(false);
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#faf8ff] dark:bg-[#0A111F] text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />

      <main className="flex-1 w-full pt-16">
        {/* ARTICLE HEADER / HERO WITH MESH GRID */}
        <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-8 pb-12 overflow-hidden border-b border-slate-200 dark:border-navy-700/60 bg-grid-mesh-adaptive">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <Link
                href="/resources/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F15E1C] dark:text-orange-400 hover:text-[#ce4700] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>

              <span className="px-3 py-1 rounded-full bg-[#ffdbcf] dark:bg-orange-950/40 text-[#F15E1C] dark:text-orange-400 font-mono text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d1b36] dark:text-white tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-base sm:text-xl text-[#5a4138] dark:text-slate-300 font-medium leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200/80 dark:border-navy-700/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ffdbcf] dark:bg-orange-950/60 text-[#F15E1C] flex items-center justify-center font-bold text-sm shadow-sm">
                  {post.author?.name?.[0] || "O"}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0d1b36] dark:text-white leading-none">
                    {post.author?.name || "OMNiGRC Editorial Team"}
                  </p>
                  <p className="text-xs text-[#5a4138] dark:text-slate-400 mt-1">
                    {post.author?.role || "Compliance & Risk Operations"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#5a4138] dark:text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#F15E1C]" />
                  <span>
                    {new Date(post.publishedAt || post.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#F15E1C]" />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COVER IMAGE & ARTICLE BODY */}
        <section className="w-full bg-white dark:bg-[#0A111F] px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Cover Image */}
            {post.coverImage && (
              <div className="relative w-full h-[280px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl mb-12 border border-slate-200 dark:border-navy-700">
                <img
                  src={post.coverImage}
                  alt={post.coverImageAlt || post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Markdown Body */}
            <article className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
              <MarkdownRenderer content={post.content} />
            </article>

            {/* Tags section */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-slate-200 dark:border-navy-700 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1 mr-2">
                  <Tag className="w-3.5 h-3.5 text-[#F15E1C]" /> Tagged:
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-[#faf8ff] dark:bg-navy-950 text-[#0d1b36] dark:text-slate-300 border border-slate-200 dark:border-navy-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Product Narrative Callout */}
            <div className="my-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#ffdbcf]/40 to-[#f1f3ff] dark:from-navy-900 dark:to-navy-950 border border-[#F15E1C]/30 dark:border-orange-500/30 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#F15E1C] text-white shrink-0 hidden sm:block">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-[#F15E1C] uppercase tracking-wider block mb-1">
                    APPLY THIS IN OMNIGRC
                  </span>
                  <h3 className="text-xl font-bold text-[#0d1b36] dark:text-white mb-2">
                    Automate control crosswalks and continuous evidence collection.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-300 mb-6 leading-relaxed">
                    OMNiGRC provides dedicated application tenant isolation, structured evidence indexing, and AI-assisted crosswalks with mandatory human approval.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/demo"
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#F15E1C] hover:bg-[#ce4700] transition-colors shadow-sm"
                    >
                      Request Interactive Demo
                    </Link>
                    <Link
                      href="/products/control-mapping"
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#0d1b36] dark:text-white bg-white dark:bg-navy-800 border border-slate-300 dark:border-navy-700 hover:border-[#F15E1C] transition-colors"
                    >
                      Explore Control Mapping Module
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-16 pt-10 border-t border-slate-200 dark:border-navy-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-[#0d1b36] dark:text-white">Related Articles</h3>
                  <Link
                    href="/resources/blog"
                    className="text-xs font-bold text-[#F15E1C] hover:underline flex items-center gap-1"
                  >
                    <span>View all articles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((rel) => (
                    <div
                      key={rel.id}
                      className="p-5 rounded-2xl bg-[#faf8ff] dark:bg-navy-950/60 border border-slate-200 dark:border-navy-700/60 hover:border-[#F15E1C]/40 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="px-2.5 py-0.5 rounded bg-white dark:bg-navy-900 text-[#0d1b36] dark:text-slate-300 font-mono text-[10px] font-bold uppercase border border-slate-200 dark:border-navy-700 inline-block mb-3">
                          {rel.category}
                        </span>
                        <h4 className="text-base font-bold text-[#0d1b36] dark:text-white hover:text-[#F15E1C] transition-colors mb-2">
                          <Link href={`/resources/blog/${rel.slug}`}>{rel.title}</Link>
                        </h4>
                        <p className="text-xs text-[#5a4138] dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
                          {rel.excerpt}
                        </p>
                      </div>

                      <Link
                        href={`/resources/blog/${rel.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#F15E1C] hover:translate-x-1 transition-transform"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
