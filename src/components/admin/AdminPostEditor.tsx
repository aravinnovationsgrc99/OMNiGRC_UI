"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BlogPost, PostStatus } from "@/lib/blog-types";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import {
  Save,
  CheckCircle2,
  ArrowLeft,
  Upload,
  Eye,
  Edit3,
  Sparkles,
  AlertCircle,
  Clock,
  Tag,
  Globe,
  Image as ImageIcon
} from "lucide-react";

interface AdminPostEditorProps {
  initialPost?: Partial<BlogPost>;
  isNew?: boolean;
}

export function AdminPostEditor({ initialPost, isNew = false }: AdminPostEditorProps) {
  const router = useRouter();

  const [id] = useState<string | undefined>(initialPost?.id);
  const [title, setTitle] = useState<string>(initialPost?.title || "");
  const [slug, setSlug] = useState<string>(initialPost?.slug || "");
  const [excerpt, setExcerpt] = useState<string>(initialPost?.excerpt || "");
  const [category, setCategory] = useState<string>(initialPost?.category || "GRC Operations");
  const [tagsInput, setTagsInput] = useState<string>(initialPost?.tags ? initialPost.tags.join(", ") : "SOC 2, Compliance");
  const [authorName, setAuthorName] = useState<string>(initialPost?.author?.name || "OMNiGRC Editorial Team");
  const [authorRole, setAuthorRole] = useState<string>(initialPost?.author?.role || "Compliance & Risk Operations");
  const [coverImage, setCoverImage] = useState<string>(
    initialPost?.coverImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  );
  const [coverImageAlt, setCoverImageAlt] = useState<string>(initialPost?.coverImageAlt || "");
  const [content, setContent] = useState<string>(initialPost?.content || "## Article Heading\n\nWrite your markdown content here...");
  const [seoTitle, setSeoTitle] = useState<string>(initialPost?.seoTitle || "");
  const [seoDescription, setSeoDescription] = useState<string>(initialPost?.seoDescription || "");
  const [status, setStatus] = useState<PostStatus>(initialPost?.status || "DRAFT");

  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Auto-generate slug if not manually edited
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (isNew || !slug) {
      const generated = val
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-");
      setSlug(generated);
    }
  };

  // Image File Upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    setFeedback(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Image upload failed");
      }

      setCoverImage(data.url);
      setFeedback({ type: "success", message: "Cover image uploaded successfully!" });
    } catch (err: any) {
      setFeedback({ type: "error", message: err.message || "Failed to upload cover image" });
    } finally {
      setUploadingImage(false);
    }
  };

  // Form Submit Handler
  const handleSubmit = async (e: React.FormEvent, targetStatus?: PostStatus) => {
    e.preventDefault();
    if (!title.trim()) {
      setFeedback({ type: "error", message: "Article title is required." });
      return;
    }
    if (!content.trim()) {
      setFeedback({ type: "error", message: "Article body content is required." });
      return;
    }

    const finalStatus = targetStatus || status;
    setLoading(true);
    setFeedback(null);

    const parsedTags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const payload = {
      id,
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim(),
      category: category.trim(),
      tags: parsedTags,
      author: {
        name: authorName.trim(),
        role: authorRole.trim()
      },
      coverImage,
      coverImageAlt: coverImageAlt || title.trim(),
      content,
      seoTitle: seoTitle.trim() || `${title.trim()} | OMNiGRC`,
      seoDescription: seoDescription.trim() || excerpt.trim(),
      status: finalStatus
    };

    try {
      const endpoint = isNew ? "/api/posts" : `/api/posts/${id}`;
      const method = isNew ? "POST" : "PUT";

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to save article");
      }

      setFeedback({
        type: "success",
        message: `Article ${finalStatus === "PUBLISHED" ? "published" : "saved as draft"} successfully!`
      });

      setTimeout(() => {
        router.push("/admin/posts");
        router.refresh();
      }, 1000);
    } catch (err: any) {
      setFeedback({ type: "error", message: err.message || "Failed to save article." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-navy-900 border border-navy-800 shadow-xl">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/admin/posts")}
            className="p-2 rounded-xl bg-navy-950 text-slate-400 hover:text-white border border-navy-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              {isNew ? "Create New Blog Article" : `Edit Article: ${title || "Untitled"}`}
            </h1>
            <p className="text-xs text-slate-400">Lightweight markdown editor with live preview</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(e) => handleSubmit(e, "DRAFT")}
            disabled={loading}
            className="px-4 py-2.5 rounded-xl font-bold text-xs text-amber-300 bg-amber-950/60 border border-amber-800 hover:bg-amber-900/60 transition-colors flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Draft</span>
          </button>

          <button
            type="button"
            onClick={(e) => handleSubmit(e, "PUBLISHED")}
            disabled={loading}
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#F15E1C] hover:bg-[#ce4700] transition-colors shadow-md flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{loading ? "Saving..." : "Publish Article"}</span>
          </button>
        </div>
      </div>

      {/* Feedback Alert */}
      {feedback && (
        <div
          className={`p-4 rounded-xl text-xs font-semibold flex items-center justify-between border ${
            feedback.type === "success"
              ? "bg-emerald-950/80 border-emerald-800 text-emerald-300"
              : "bg-red-950/80 border-red-800 text-red-300"
          }`}
        >
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{feedback.message}</span>
          </div>
          <button onClick={() => setFeedback(null)} className="text-slate-400 hover:text-white text-xs">
            Dismiss
          </button>
        </div>
      )}

      {/* Main Form Grid */}
      <form onSubmit={(e) => handleSubmit(e)} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Metadata & Details (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Article Basic Metadata Card */}
          <div className="p-6 rounded-3xl bg-navy-900 border border-navy-800 space-y-4">
            <h3 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#F15E1C]" />
              <span>Publication Settings</span>
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as PostStatus)}
                className="w-full px-3 py-2 text-xs font-bold font-mono rounded-xl bg-navy-950 border border-navy-800 text-white focus:outline-none focus:border-[#F15E1C]"
              >
                <option value="DRAFT">DRAFT (Hidden from Public)</option>
                <option value="PUBLISHED">PUBLISHED (Visible to Public)</option>
                <option value="ARCHIVED">ARCHIVED</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 text-xs font-medium rounded-xl bg-navy-950 border border-navy-800 text-white focus:outline-none focus:border-[#F15E1C]"
              >
                <option value="GRC Operations">GRC Operations</option>
                <option value="Framework Governance">Framework Governance</option>
                <option value="Risk Management">Risk Management</option>
                <option value="AI Governance">AI Governance</option>
                <option value="Evidence Management">Evidence Management</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Tags (comma separated)</label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="SOC 2, ISO 27001, Risk Matrix"
                className="w-full px-3 py-2 text-xs font-medium rounded-xl bg-navy-950 border border-navy-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#F15E1C]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">URL Slug</label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="article-url-slug"
                className="w-full px-3 py-2 text-xs font-mono rounded-xl bg-navy-950 border border-navy-800 text-slate-300 focus:outline-none focus:border-[#F15E1C]"
              />
            </div>
          </div>

          {/* Author Details Card */}
          <div className="p-6 rounded-3xl bg-navy-900 border border-navy-800 space-y-4">
            <h3 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">Author Details</h3>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Author Name</label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-3 py-2 text-xs font-medium rounded-xl bg-navy-950 border border-navy-800 text-white focus:outline-none focus:border-[#F15E1C]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Author Role</label>
              <input
                type="text"
                value={authorRole}
                onChange={(e) => setAuthorRole(e.target.value)}
                className="w-full px-3 py-2 text-xs font-medium rounded-xl bg-navy-950 border border-navy-800 text-white focus:outline-none focus:border-[#F15E1C]"
              />
            </div>
          </div>

          {/* Cover Image Upload & URL */}
          <div className="p-6 rounded-3xl bg-navy-900 border border-navy-800 space-y-4">
            <h3 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-[#F15E1C]" />
              <span>Cover Image</span>
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Image URL</label>
              <input
                type="text"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-3 py-2 text-xs font-mono rounded-xl bg-navy-950 border border-navy-800 text-slate-300 focus:outline-none focus:border-[#F15E1C]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Or Upload Image File</label>
              <label className="flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-navy-700 bg-navy-950 hover:border-[#F15E1C] cursor-pointer transition-colors text-xs font-semibold text-slate-300">
                <Upload className="w-4 h-4 text-[#F15E1C]" />
                <span>{uploadingImage ? "Uploading..." : "Choose Image File (JPG/PNG/WEBP)"}</span>
                <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
              </label>
            </div>

            {coverImage && (
              <div className="relative h-28 w-full rounded-xl overflow-hidden border border-navy-800 bg-navy-950 mt-2">
                <img src={coverImage} alt="Cover Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          {/* SEO Metadata */}
          <div className="p-6 rounded-3xl bg-navy-900 border border-navy-800 space-y-4">
            <h3 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">SEO Metadata</h3>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">SEO Title</label>
              <input
                type="text"
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                placeholder="Custom title tag"
                className="w-full px-3 py-2 text-xs font-medium rounded-xl bg-navy-950 border border-navy-800 text-white focus:outline-none focus:border-[#F15E1C]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">SEO Meta Description</label>
              <textarea
                rows={3}
                value={seoDescription}
                onChange={(e) => setSeoDescription(e.target.value)}
                placeholder="Compelling meta description for search results..."
                className="w-full px-3 py-2 text-xs font-medium rounded-xl bg-navy-950 border border-navy-800 text-white focus:outline-none focus:border-[#F15E1C]"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Title, Excerpt & Markdown Content Body (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Main Title & Excerpt Input */}
          <div className="p-6 rounded-3xl bg-navy-900 border border-navy-800 space-y-4">
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                Article Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Enter compelling article title..."
                className="w-full px-4 py-3 text-base sm:text-lg font-bold rounded-xl bg-navy-950 border border-navy-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#F15E1C] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                Article Excerpt / Summary
              </label>
              <textarea
                rows={3}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief summary displayed on blog listing cards and social previews..."
                className="w-full px-4 py-2.5 text-xs font-medium rounded-xl bg-navy-950 border border-navy-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#F15E1C] transition-colors"
              />
            </div>
          </div>

          {/* Markdown Content Editor with Live Preview Tab */}
          <div className="rounded-3xl bg-navy-900 border border-navy-800 overflow-hidden shadow-xl">
            {/* Tab Bar */}
            <div className="px-6 py-3 bg-navy-950 border-b border-navy-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("edit")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "edit"
                      ? "bg-[#F15E1C] text-white"
                      : "text-slate-400 hover:text-white hover:bg-navy-900"
                  }`}
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Markdown Editor</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("preview")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "preview"
                      ? "bg-[#F15E1C] text-white"
                      : "text-slate-400 hover:text-white hover:bg-navy-900"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Live Render Preview</span>
                </button>
              </div>

              <span className="font-mono text-[10px] text-slate-500">Supports markdown headings, code blocks, lists & tables</span>
            </div>

            {/* Tab Body */}
            {activeTab === "edit" ? (
              <div className="p-6">
                <textarea
                  rows={20}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="## Write your article content in markdown format..."
                  className="w-full p-4 font-mono text-xs leading-relaxed rounded-xl bg-navy-950 border border-navy-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#F15E1C] transition-colors"
                />
              </div>
            ) : (
              <div className="p-8 bg-white dark:bg-[#0A111F] text-slate-900 dark:text-slate-100 min-h-[400px]">
                <MarkdownRenderer content={content} />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
