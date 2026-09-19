"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BlogPost, PostStatus } from "@/lib/blog-types";
import { Search, PlusCircle, Filter, Edit, Trash2, Eye, ToggleLeft, ToggleRight, Sparkles, AlertCircle } from "lucide-react";

interface AdminPostsTableClientProps {
  initialPosts: BlogPost[];
}

export function AdminPostsTableClient({ initialPosts }: AdminPostsTableClientProps) {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesStatus = selectedStatus === "ALL" || post.status === selectedStatus;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q) ||
      post.slug.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  // Handle Toggle Publish / Draft
  const handleToggleStatus = async (post: BlogPost) => {
    const newStatus: PostStatus = post.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED";
    setActionLoading(post.id);
    setMessage(null);

    try {
      const res = await fetch(`/api/posts/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...post, status: newStatus })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to update status");
      }

      setPosts((prev) => prev.map((p) => (p.id === post.id ? data.post : p)));
      setMessage({ type: "success", text: `Article '${post.title}' status changed to ${newStatus}` });
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Failed to update article status" });
    } finally {
      setActionLoading(null);
    }
  };

  // Handle Delete Post
  const handleDeletePost = async (post: BlogPost) => {
    if (!confirm(`Are you sure you want to delete article '${post.title}'? This action cannot be undone.`)) {
      return;
    }

    setActionLoading(post.id);
    setMessage(null);

    try {
      const res = await fetch(`/api/posts/${post.id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to delete post");
      }

      setPosts((prev) => prev.filter((p) => p.id !== post.id));
      setMessage({ type: "success", text: `Article '${post.title}' deleted successfully.` });
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Failed to delete article" });
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-navy-900 border border-navy-800 shadow-xl">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Article Management</h1>
          <p className="text-xs text-slate-400 mt-1">
            Create, edit, publish, draft, or remove blog posts
          </p>
        </div>

        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#F15E1C] hover:bg-[#ce4700] transition-colors shadow-md shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>New Article</span>
        </Link>
      </div>

      {/* Message Feedback */}
      {message && (
        <div
          className={`p-4 rounded-xl text-xs font-semibold flex items-center justify-between border ${
            message.type === "success"
              ? "bg-emerald-950/80 border-emerald-800 text-emerald-300"
              : "bg-red-950/80 border-red-800 text-red-300"
          }`}
        >
          <span>{message.text}</span>
          <button onClick={() => setMessage(null)} className="text-slate-400 hover:text-white text-xs ml-4">
            Dismiss
          </button>
        </div>
      )}

      {/* Filter and Search controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-navy-900 border border-navy-800">
        {/* Status Pills */}
        <div className="flex items-center gap-2">
          {["ALL", "PUBLISHED", "DRAFT"].map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono transition-all ${
                selectedStatus === st
                  ? "bg-[#F15E1C] text-white shadow-sm"
                  : "bg-navy-950 text-slate-400 hover:text-white border border-navy-800"
              }`}
            >
              {st} ({st === "ALL" ? posts.length : posts.filter((p) => p.status === st).length})
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative min-w-[260px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search by title, category, or slug..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs font-medium rounded-xl bg-navy-950 border border-navy-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#F15E1C] transition-colors"
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-3xl bg-navy-900 border border-navy-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-navy-950 text-slate-400 uppercase font-mono tracking-wider border-b border-navy-800">
              <tr>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Title & Slug</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Reading Time</th>
                <th className="px-6 py-4">Published Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-800 text-slate-300">
              {filteredPosts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    No articles found matching &quot;{searchQuery || selectedStatus}&quot;.
                  </td>
                </tr>
              ) : (
                filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-navy-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleToggleStatus(post)}
                        disabled={actionLoading === post.id}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold font-mono uppercase tracking-wider flex items-center gap-1.5 border transition-all ${
                          post.status === "PUBLISHED"
                            ? "bg-emerald-950 text-emerald-400 border-emerald-800 hover:bg-emerald-900"
                            : "bg-amber-950 text-amber-400 border-amber-800 hover:bg-amber-900"
                        }`}
                        title="Click to toggle status"
                      >
                        {post.status === "PUBLISHED" ? (
                          <ToggleRight className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <ToggleLeft className="w-3.5 h-3.5 text-amber-400" />
                        )}
                        <span>{post.status}</span>
                      </button>
                    </td>

                    <td className="px-6 py-4 max-w-sm">
                      <p className="font-bold text-white text-sm line-clamp-1">{post.title}</p>
                      <p className="font-mono text-[10px] text-slate-500 truncate mt-0.5">/resources/blog/{post.slug}</p>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded bg-navy-950 text-slate-300 font-mono text-[10px] font-bold border border-navy-800">
                        {post.category}
                      </span>
                    </td>

                    <td className="px-6 py-4 font-mono text-[11px] text-slate-400 whitespace-nowrap">
                      {post.readingTime}
                    </td>

                    <td className="px-6 py-4 font-mono text-[11px] text-slate-400 whitespace-nowrap">
                      {post.publishedAt
                        ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                        : "Draft (Not Published)"}
                    </td>

                    <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                      {post.status === "PUBLISHED" && (
                        <Link
                          href={`/resources/blog/${post.slug}`}
                          target="_blank"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-navy-950 text-slate-300 hover:text-white border border-navy-800 hover:border-slate-600 transition-colors"
                        >
                          <Eye className="w-3 h-3" />
                          <span>View</span>
                        </Link>
                      )}
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#F15E1C]/20 text-[#F15E1C] hover:bg-[#F15E1C] hover:text-white transition-colors font-bold"
                      >
                        <Edit className="w-3 h-3" />
                        <span>Edit</span>
                      </Link>
                      <button
                        onClick={() => handleDeletePost(post)}
                        disabled={actionLoading === post.id}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-red-950/60 text-red-400 hover:bg-red-900 hover:text-white transition-colors border border-red-900/60"
                        title="Delete article"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
