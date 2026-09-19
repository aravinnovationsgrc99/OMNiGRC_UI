import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isAuthenticatedAdmin } from "@/lib/admin-auth";
import { getAllPosts } from "@/lib/blog-storage";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { FileText, CheckCircle2, Clock, PlusCircle, ArrowRight, Edit, Sparkles, Eye } from "lucide-react";

export default async function AdminDashboardPage() {
  const isAdmin = await isAuthenticatedAdmin();

  if (!isAdmin) {
    redirect("/admin/login");
  }

  const posts = await getAllPosts(true);

  const totalPosts = posts.length;
  const publishedPosts = posts.filter((p) => p.status === "PUBLISHED").length;
  const draftPosts = posts.filter((p) => p.status === "DRAFT").length;
  const recentPosts = posts.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#0A111F] text-slate-100 flex flex-col justify-between selection:bg-[#F15E1C]/30 antialiased">
      <div>
        <AdminHeader />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Welcome Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 p-6 rounded-3xl bg-navy-900 border border-navy-800 shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F15E1C]/20 text-[#F15E1C] font-mono text-xs font-bold uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" /> EDITORIAL OVERVIEW
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Blog Management Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Manage OMNiGRC public resource articles, draft new compliance guides, and control publication status.
              </p>
            </div>

            <Link
              href="/admin/posts/new"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-white bg-[#F15E1C] hover:bg-[#ce4700] transition-colors shadow-md shrink-0"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Create New Article</span>
            </Link>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 shadow-md flex items-center justify-between">
              <div>
                <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">Total Posts</p>
                <h3 className="text-3xl font-extrabold text-white">{totalPosts}</h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-blue-950/60 border border-blue-800/60 text-blue-400 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 shadow-md flex items-center justify-between">
              <div>
                <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">Published</p>
                <h3 className="text-3xl font-extrabold text-emerald-400">{publishedPosts}</h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 shadow-md flex items-center justify-between">
              <div>
                <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">Drafts</p>
                <h3 className="text-3xl font-extrabold text-amber-400">{draftPosts}</h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-amber-950/60 border border-amber-800/60 text-amber-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Recent Articles Table */}
          <div className="rounded-3xl bg-navy-900 border border-navy-800 overflow-hidden shadow-xl">
            <div className="p-6 border-b border-navy-800 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Recently Modified Articles</h2>
                <p className="text-xs text-slate-400">Overview of recent editorial activity</p>
              </div>

              <Link
                href="/admin/posts"
                className="text-xs font-bold text-[#F15E1C] hover:underline flex items-center gap-1"
              >
                <span>View All Posts ({totalPosts})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-navy-950 text-slate-400 uppercase font-mono tracking-wider border-b border-navy-800">
                  <tr>
                    <th className="px-6 py-3.5">Status</th>
                    <th className="px-6 py-3.5">Title</th>
                    <th className="px-6 py-3.5">Category</th>
                    <th className="px-6 py-3.5">Author</th>
                    <th className="px-6 py-3.5">Last Updated</th>
                    <th className="px-6 py-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-800 text-slate-300">
                  {recentPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-navy-800/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold font-mono uppercase tracking-wider ${
                            post.status === "PUBLISHED"
                              ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                              : "bg-amber-950 text-amber-400 border border-amber-800"
                          }`}
                        >
                          {post.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 font-bold text-white max-w-xs truncate">
                        {post.title}
                      </td>

                      <td className="px-6 py-4">
                        <span className="px-2 py-0.5 rounded bg-navy-950 text-slate-300 font-mono text-[10px] font-bold border border-navy-800">
                          {post.category}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-slate-300 font-medium">
                        {post.author?.name || "Editorial Team"}
                      </td>

                      <td className="px-6 py-4 text-slate-400 font-mono text-[11px]">
                        {new Date(post.updatedAt || post.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </td>

                      <td className="px-6 py-4 text-right space-x-2">
                        {post.status === "PUBLISHED" && (
                          <Link
                            href={`/resources/blog/${post.slug}`}
                            target="_blank"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-navy-950 text-slate-300 hover:text-white border border-navy-800 hover:border-slate-600 transition-colors"
                          >
                            <Eye className="w-3 h-3" />
                            <span>Preview</span>
                          </Link>
                        )}
                        <Link
                          href={`/admin/posts/${post.id}/edit`}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#F15E1C]/20 text-[#F15E1C] hover:bg-[#F15E1C] hover:text-white transition-colors font-bold"
                        >
                          <Edit className="w-3 h-3" />
                          <span>Edit</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
