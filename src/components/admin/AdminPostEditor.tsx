"use client";

import React, { useState, useRef, useEffect } from "react";
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
  Image as ImageIcon,
  Bold,
  Italic,
  Code,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Table as TableIcon,
  Minus,
  Link as LinkIcon,
  Shield,
  Layers,
  Plus,
  Trash2,
  ArrowUp,
  ArrowDown,
  Copy,
  FileText,
  Wand2,
  LayoutGrid
} from "lucide-react";

export interface VisualBlock {
  id: string;
  type: "heading" | "paragraph" | "callout" | "mapping-table" | "risk-matrix" | "list" | "code" | "image";
  level?: 2 | 3;
  title?: string;
  text?: string;
  calloutType?: "ai" | "warning" | "note";
  listType?: "bullet" | "number";
  items?: string[];
  code?: string;
  language?: string;
  imageUrl?: string;
  caption?: string;
}

interface AdminPostEditorProps {
  initialPost?: Partial<BlogPost>;
  isNew?: boolean;
}

// Convert markdown text string into structured visual form blocks
function parseMarkdownToBlocks(raw: string): VisualBlock[] {
  if (!raw || !raw.trim()) {
    return [
      {
        id: "b-init-1",
        type: "heading",
        level: 2,
        title: "1. Executive Overview"
      },
      {
        id: "b-init-2",
        type: "paragraph",
        text: "Write your article content here using visual form blocks or switch to markdown mode..."
      }
    ];
  }

  const blocks: VisualBlock[] = [];
  const lines = raw.split("\n");
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code Block
    if (line.trim().startsWith("```")) {
      const language = line.trim().slice(3).trim() || "typescript";
      let codeContent = "";
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeContent += lines[i] + "\n";
        i++;
      }
      i++;
      blocks.push({
        id: `b-${Math.random().toString(36).substring(2, 9)}`,
        type: "code",
        language,
        code: codeContent.trimEnd()
      });
      continue;
    }

    // Callout / Blockquote
    if (line.trim().startsWith("> ")) {
      let quoteLines: string[] = [line.trim().substring(2)];
      i++;
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        quoteLines.push(lines[i].trim().substring(2));
        i++;
      }
      const fullText = quoteLines.join("\n");
      const isAi = fullText.toLowerCase().includes("ai") || fullText.toLowerCase().includes("omnigrc");
      const isWarn = fullText.toLowerCase().includes("warning") || fullText.toLowerCase().includes("caution");

      blocks.push({
        id: `b-${Math.random().toString(36).substring(2, 9)}`,
        type: "callout",
        calloutType: isAi ? "ai" : isWarn ? "warning" : "note",
        title: quoteLines[0].replace(/\*\*/g, ""),
        text: quoteLines.slice(1).join("\n").replace(/\*/g, "")
      });
      continue;
    }

    // Image Block
    if (line.trim().startsWith("![") && line.includes("](")) {
      const imgMatch = line.trim().match(/!\[([^\]]*)\]\(([^)]+)\)/);
      if (imgMatch) {
        blocks.push({
          id: `b-${Math.random().toString(36).substring(2, 9)}`,
          type: "image",
          caption: imgMatch[1],
          imageUrl: imgMatch[2]
        });
        i++;
        continue;
      }
    }

    // Table Block
    if (line.includes("|") && line.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      if (tableLines.length >= 2) {
        const isRiskMatrix = tableLines[0].toLowerCase().includes("likelihood") || tableLines[0].toLowerCase().includes("impact");
        blocks.push({
          id: `b-${Math.random().toString(36).substring(2, 9)}`,
          type: isRiskMatrix ? "risk-matrix" : "mapping-table",
          title: isRiskMatrix ? "5x5 Asset Risk Matrix" : "Control Crosswalk Table"
        });
        continue;
      }
    }

    // Headings
    if (line.startsWith("### ")) {
      blocks.push({
        id: `b-${Math.random().toString(36).substring(2, 9)}`,
        type: "heading",
        level: 3,
        title: line.replace("### ", "").trim()
      });
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({
        id: `b-${Math.random().toString(36).substring(2, 9)}`,
        type: "heading",
        level: 2,
        title: line.replace("## ", "").trim()
      });
      i++;
      continue;
    }

    // Unordered List
    if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))) {
        items.push(lines[i].trim().substring(2));
        i++;
      }
      blocks.push({
        id: `b-${Math.random().toString(36).substring(2, 9)}`,
        type: "list",
        listType: "bullet",
        items
      });
      continue;
    }

    // Paragraph
    if (line.trim().length > 0) {
      blocks.push({
        id: `b-${Math.random().toString(36).substring(2, 9)}`,
        type: "paragraph",
        text: line.trim()
      });
    }

    i++;
  }

  return blocks.length > 0
    ? blocks
    : [
        {
          id: "b-fallback",
          type: "paragraph",
          text: raw
        }
      ];
}

// Convert visual form blocks back to clean markdown string
function serializeBlocksToMarkdown(blocks: VisualBlock[]): string {
  return blocks
    .map((b) => {
      switch (b.type) {
        case "heading":
          return b.level === 3 ? `### ${b.title || "Heading 3"}` : `## ${b.title || "Heading 2"}`;

        case "paragraph":
          return b.text || "";

        case "callout": {
          const t = b.title || "AI Assists, Humans Decide.";
          const msg = b.text || "OMNiGRC provides automated crosswalk recommendations with human sign-off.";
          return `> **${t}**\n> *${msg}*`;
        }

        case "mapping-table":
          return `### Unified Framework Control Crosswalk\n\n| Operational Control | SOC 2 Trust Criteria | ISO 27001:2022 | NIST CSF 2.0 |\n|---|---|---|---|\n| **MFA Enforced across IdP** | CC6.1 Logical Access | A.8.5 Identity Auth | PR.AA-03 Multi-Factor |\n| **Quarterly Access Review** | CC6.2 User Access | A.9.2 Access Review | PR.AA-05 Access Governance |\n| **Automated DB Backup Test** | CC9.1 Disaster Recovery | A.8.13 Data Backup | PR.IR-01 Incident Testing |`;

        case "risk-matrix":
          return `### 5x5 Likelihood x Impact Risk Matrix\n\n| Likelihood / Impact | 1 - Minimal | 2 - Minor | 3 - Moderate | 4 - Major | 5 - Critical |\n|---|---|---|---|---|---|\n| **5 - Almost Certain** | 5 (Low) | 10 (Med) | 15 (High) | 20 (Critical) | 25 (Critical) |\n| **4 - Likely** | 4 (Low) | 8 (Med) | 12 (High) | 16 (High) | 20 (Critical) |\n| **3 - Possible** | 3 (Low) | 6 (Med) | 9 (Med) | 12 (High) | 15 (High) |\n| **2 - Unlikely** | 2 (Low) | 4 (Low) | 6 (Med) | 8 (Med) | 10 (Med) |\n| **1 - Rare** | 1 (Low) | 2 (Low) | 3 (Low) | 4 (Low) | 5 (Low) |`;

        case "list":
          return (b.items || ["List item 1"])
            .map((item, idx) => (b.listType === "number" ? `${idx + 1}. ${item}` : `- ${item}`))
            .join("\n");

        case "code":
          return `\`\`\`${b.language || "typescript"}\n${b.code || "// Add your code snippet here"}\n\`\`\``;

        case "image":
          return `![${b.caption || "Image caption"}](${b.imageUrl || "https://images.unsplash.com/photo-1551288049-bebda4e38f71"})`;

        default:
          return "";
      }
    })
    .filter(Boolean)
    .join("\n\n");
}

export function AdminPostEditor({ initialPost, isNew = false }: AdminPostEditorProps) {
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
  const [content, setContent] = useState<string>(
    initialPost?.content || "## 1. Executive Overview\n\nWrite your rich article content here using visual form blocks or markdown..."
  );
  const [seoTitle, setSeoTitle] = useState<string>(initialPost?.seoTitle || "");
  const [seoDescription, setSeoDescription] = useState<string>(initialPost?.seoDescription || "");
  const [status, setStatus] = useState<PostStatus>(initialPost?.status || "DRAFT");

  // Visual Form Blocks State
  const [blocks, setBlocks] = useState<VisualBlock[]>(() =>
    parseMarkdownToBlocks(
      initialPost?.content || "## 1. Executive Overview\n\nWrite your rich article content here using visual form blocks or markdown..."
    )
  );

  // Active Editor Mode: "visual" (Form Block Builder) | "markdown" (Raw Text Editor) | "split" | "preview"
  const [editorMode, setEditorMode] = useState<"visual" | "markdown" | "split" | "preview">("visual");
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Auto-generate slug if title changes
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

  // Keep markdown content in sync when visual blocks change
  const updateBlocks = (newBlocks: VisualBlock[]) => {
    setBlocks(newBlocks);
    const compiledMarkdown = serializeBlocksToMarkdown(newBlocks);
    setContent(compiledMarkdown);
  };

  // Sync when switching from raw markdown mode back to visual mode
  const handleModeSwitch = (newMode: "visual" | "markdown" | "split" | "preview") => {
    if (newMode === "visual" && editorMode === "markdown") {
      const reParsed = parseMarkdownToBlocks(content);
      setBlocks(reParsed);
    } else if (newMode === "markdown" && editorMode === "visual") {
      const compiled = serializeBlocksToMarkdown(blocks);
      setContent(compiled);
    }
    setEditorMode(newMode);
  };

  // Add new Visual Form Block
  const addBlock = (type: VisualBlock["type"]) => {
    const newId = `b-${Math.random().toString(36).substring(2, 9)}`;
    let newBlock: VisualBlock;

    switch (type) {
      case "heading":
        newBlock = { id: newId, type: "heading", level: 2, title: "New Section Title" };
        break;
      case "paragraph":
        newBlock = { id: newId, type: "paragraph", text: "Add your detailed paragraph text here..." };
        break;
      case "callout":
        newBlock = {
          id: newId,
          type: "callout",
          calloutType: "ai",
          title: "AI Assists, Humans Decide.",
          text: "OMNiGRC provides automated crosswalk recommendations, but all final control approvals require explicit human sign-off."
        };
        break;
      case "mapping-table":
        newBlock = { id: newId, type: "mapping-table", title: "Control Crosswalk Table" };
        break;
      case "risk-matrix":
        newBlock = { id: newId, type: "risk-matrix", title: "5x5 Asset Risk Matrix" };
        break;
      case "list":
        newBlock = {
          id: newId,
          type: "list",
          listType: "bullet",
          items: ["Key operational takeaway step 1", "Key operational takeaway step 2", "Key operational takeaway step 3"]
        };
        break;
      case "code":
        newBlock = { id: newId, type: "code", language: "typescript", code: "const control = { name: 'MFA', status: 'ACTIVE' };" };
        break;
      case "image":
        newBlock = {
          id: newId,
          type: "image",
          imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
          caption: "System architectural control crosswalk diagram"
        };
        break;
      default:
        newBlock = { id: newId, type: "paragraph", text: "" };
    }

    const updated = [...blocks, newBlock];
    updateBlocks(updated);
  };

  // Modify specific visual block item
  const updateBlockField = (index: number, field: keyof VisualBlock, val: any) => {
    const updated = [...blocks];
    updated[index] = { ...updated[index], [field]: val };
    updateBlocks(updated);
  };

  // Move block position up or down
  const moveBlock = (index: number, direction: "up" | "down") => {
    if ((direction === "up" && index === 0) || (direction === "down" && index === blocks.length - 1)) return;
    const targetIdx = direction === "up" ? index - 1 : index + 1;
    const updated = [...blocks];
    const [moved] = updated.splice(index, 1);
    updated.splice(targetIdx, 0, moved);
    updateBlocks(updated);
  };

  // Remove block
  const deleteBlock = (index: number) => {
    const updated = blocks.filter((_, i) => i !== index);
    updateBlocks(updated);
  };

  // Helper to insert markdown syntax in Raw Editor mode
  const insertFormatting = (prefix: string, suffix: string = "", defaultText: string = "Text") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end) || defaultText;
    const replacement = `${prefix}${selectedText}${suffix}`;

    const newContent = content.substring(0, start) + replacement + content.substring(end);
    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length + selectedText.length);
    }, 50);
  };

  // Image Upload Handler
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

    const finalContent = editorMode === "visual" ? serializeBlocksToMarkdown(blocks) : content;
    if (!finalContent.trim()) {
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
      content: finalContent,
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
      {/* Top Action Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-navy-900 border border-navy-800 shadow-xl">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/admin/posts")}
            className="p-2.5 rounded-xl bg-navy-950 text-slate-400 hover:text-white border border-navy-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              {isNew ? "Create New Blog Article" : `Edit Article: ${title || "Untitled"}`}
            </h1>
            <p className="text-xs text-slate-400">
              Visual Form Block Builder & Markdown Editor with Live Preview
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(e) => handleSubmit(e, "DRAFT")}
            disabled={loading}
            className="px-4 py-2.5 rounded-xl font-bold text-xs text-amber-300 bg-amber-950/60 border border-amber-800/80 hover:bg-amber-900/60 transition-colors flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Draft</span>
          </button>

          <button
            type="button"
            onClick={(e) => handleSubmit(e, "PUBLISHED")}
            disabled={loading}
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#F15E1C] hover:bg-[#ce4700] transition-colors shadow-lg flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{loading ? "Saving..." : "Publish Article"}</span>
          </button>
        </div>
      </div>

      {/* Feedback Alert Toast */}
      {feedback && (
        <div
          className={`p-4 rounded-xl text-xs font-semibold flex items-center justify-between border ${
            feedback.type === "success"
              ? "bg-emerald-950/90 border-emerald-800 text-emerald-300"
              : "bg-red-950/90 border-red-800 text-red-300"
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

      {/* Main Form Layout */}
      <form onSubmit={(e) => handleSubmit(e)} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar: Metadata, Author & Cover Image (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Publication Settings */}
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
              <label className="block text-xs font-semibold text-slate-400 mb-1">Upload Local Image File</label>
              <label className="flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-navy-700 bg-navy-950 hover:border-[#F15E1C] cursor-pointer transition-colors text-xs font-semibold text-slate-300">
                <Upload className="w-4 h-4 text-[#F15E1C]" />
                <span>{uploadingImage ? "Uploading..." : "Choose Image (JPG/PNG/WEBP)"}</span>
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

        {/* Right Main Column: Title, Excerpt & Editor Modes (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Article Title & Excerpt */}
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

          {/* Multi-Mode Editor Container */}
          <div className="rounded-3xl bg-navy-900 border border-navy-800 overflow-hidden shadow-xl">
            {/* Mode Switcher Navigation Header */}
            <div className="px-6 py-3 bg-navy-950 border-b border-navy-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleModeSwitch("visual")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    editorMode === "visual"
                      ? "bg-[#F15E1C] text-white shadow-md"
                      : "text-slate-400 hover:text-white hover:bg-navy-900"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Visual Form Builder</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleModeSwitch("markdown")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    editorMode === "markdown"
                      ? "bg-[#F15E1C] text-white shadow-md"
                      : "text-slate-400 hover:text-white hover:bg-navy-900"
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>Raw Markdown</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleModeSwitch("split")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    editorMode === "split"
                      ? "bg-[#F15E1C] text-white shadow-md"
                      : "text-slate-400 hover:text-white hover:bg-navy-900"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Split View</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleModeSwitch("preview")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    editorMode === "preview"
                      ? "bg-[#F15E1C] text-white shadow-md"
                      : "text-slate-400 hover:text-white hover:bg-navy-900"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Full Live Preview</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-[#F15E1C]" />
                <span>Editing Mode: {editorMode.toUpperCase()}</span>
              </div>
            </div>

            {/* 1. VISUAL FORM BLOCK BUILDER MODE */}
            {editorMode === "visual" && (
              <div className="p-6 space-y-6">
                {/* Block Add Palette Buttons */}
                <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800 space-y-2">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    + Add New Article Block Form:
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => addBlock("heading")}
                      className="px-3 py-1.5 rounded-xl bg-navy-900 hover:bg-[#F15E1C] hover:text-white text-slate-200 border border-navy-700 font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <Heading2 className="w-3.5 h-3.5 text-[#F15E1C]" />
                      <span>Heading</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => addBlock("paragraph")}
                      className="px-3 py-1.5 rounded-xl bg-navy-900 hover:bg-[#F15E1C] hover:text-white text-slate-200 border border-navy-700 font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5 text-blue-400" />
                      <span>Paragraph Text</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => addBlock("callout")}
                      className="px-3 py-1.5 rounded-xl bg-navy-900 hover:bg-[#F15E1C] hover:text-white text-slate-200 border border-navy-700 font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>AI Rule Callout</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => addBlock("mapping-table")}
                      className="px-3 py-1.5 rounded-xl bg-navy-900 hover:bg-[#F15E1C] hover:text-white text-slate-200 border border-navy-700 font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <TableIcon className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Control Table</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => addBlock("risk-matrix")}
                      className="px-3 py-1.5 rounded-xl bg-navy-900 hover:bg-[#F15E1C] hover:text-white text-slate-200 border border-navy-700 font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <Shield className="w-3.5 h-3.5 text-red-400" />
                      <span>5x5 Risk Matrix</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => addBlock("list")}
                      className="px-3 py-1.5 rounded-xl bg-navy-900 hover:bg-[#F15E1C] hover:text-white text-slate-200 border border-navy-700 font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <List className="w-3.5 h-3.5 text-purple-400" />
                      <span>List</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => addBlock("code")}
                      className="px-3 py-1.5 rounded-xl bg-navy-900 hover:bg-[#F15E1C] hover:text-white text-slate-200 border border-navy-700 font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <Code className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Code Block</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => addBlock("image")}
                      className="px-3 py-1.5 rounded-xl bg-navy-900 hover:bg-[#F15E1C] hover:text-white text-slate-200 border border-navy-700 font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-pink-400" />
                      <span>Inline Image</span>
                    </button>
                  </div>
                </div>

                {/* List of Form Blocks */}
                <div className="space-y-4">
                  {blocks.map((block, idx) => (
                    <div
                      key={block.id}
                      className="p-5 rounded-2xl bg-navy-950 border border-navy-800 hover:border-navy-700 transition-colors space-y-3 relative group"
                    >
                      {/* Block Controls Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-navy-800/80">
                        <span className="font-mono text-[11px] font-bold text-[#F15E1C] uppercase tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#F15E1C]" />
                          <span>
                            Block {idx + 1}: {block.type.toUpperCase()}
                          </span>
                        </span>

                        <div className="flex items-center gap-1.5 text-slate-400">
                          <button
                            type="button"
                            onClick={() => moveBlock(idx, "up")}
                            disabled={idx === 0}
                            title="Move Block Up"
                            className="p-1.5 rounded-lg hover:bg-navy-900 text-slate-400 hover:text-white disabled:opacity-30"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => moveBlock(idx, "down")}
                            disabled={idx === blocks.length - 1}
                            title="Move Block Down"
                            className="p-1.5 rounded-lg hover:bg-navy-900 text-slate-400 hover:text-white disabled:opacity-30"
                          >
                            <ArrowDown className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteBlock(idx)}
                            title="Delete Block"
                            className="p-1.5 rounded-lg hover:bg-red-950/80 text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Heading Form Input */}
                      {block.type === "heading" && (
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                          <div>
                            <label className="block text-[10px] font-semibold text-slate-400 mb-1">Level</label>
                            <select
                              value={block.level || 2}
                              onChange={(e) => updateBlockField(idx, "level", parseInt(e.target.value))}
                              className="w-full px-3 py-2 text-xs font-bold rounded-xl bg-navy-900 border border-navy-800 text-white"
                            >
                              <option value={2}>Heading 2 (Section)</option>
                              <option value={3}>Heading 3 (Sub-section)</option>
                            </select>
                          </div>
                          <div className="sm:col-span-3">
                            <label className="block text-[10px] font-semibold text-slate-400 mb-1">Heading Title</label>
                            <input
                              type="text"
                              value={block.title || ""}
                              onChange={(e) => updateBlockField(idx, "title", e.target.value)}
                              placeholder="Enter section title..."
                              className="w-full px-3 py-2 text-xs font-bold rounded-xl bg-navy-900 border border-navy-800 text-white focus:border-[#F15E1C]"
                            />
                          </div>
                        </div>
                      )}

                      {/* Paragraph Form Input */}
                      {block.type === "paragraph" && (
                        <div>
                          <label className="block text-[10px] font-semibold text-slate-400 mb-1">Paragraph Text</label>
                          <textarea
                            rows={4}
                            value={block.text || ""}
                            onChange={(e) => updateBlockField(idx, "text", e.target.value)}
                            placeholder="Write your article paragraph here..."
                            className="w-full p-3 text-xs leading-relaxed rounded-xl bg-navy-900 border border-navy-800 text-slate-100 focus:border-[#F15E1C]"
                          />
                        </div>
                      )}

                      {/* AI Callout Form Input */}
                      {block.type === "callout" && (
                        <div className="space-y-3">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div>
                              <label className="block text-[10px] font-semibold text-slate-400 mb-1">Callout Style</label>
                              <select
                                value={block.calloutType || "ai"}
                                onChange={(e) => updateBlockField(idx, "calloutType", e.target.value)}
                                className="w-full px-3 py-2 text-xs font-semibold rounded-xl bg-navy-900 border border-navy-800 text-white"
                              >
                                <option value="ai">✨ AI / Product Recommendation</option>
                                <option value="warning">⚠️ Security Warning</option>
                                <option value="note">📌 General Note</option>
                              </select>
                            </div>
                            <div className="sm:col-span-2">
                              <label className="block text-[10px] font-semibold text-slate-400 mb-1">Callout Headline</label>
                              <input
                                type="text"
                                value={block.title || ""}
                                onChange={(e) => updateBlockField(idx, "title", e.target.value)}
                                placeholder="AI Assists, Humans Decide."
                                className="w-full px-3 py-2 text-xs font-bold rounded-xl bg-navy-900 border border-navy-800 text-white"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-[10px] font-semibold text-slate-400 mb-1">Callout Body Message</label>
                            <textarea
                              rows={2}
                              value={block.text || ""}
                              onChange={(e) => updateBlockField(idx, "text", e.target.value)}
                              placeholder="Explanation message..."
                              className="w-full p-3 text-xs leading-relaxed rounded-xl bg-navy-900 border border-navy-800 text-slate-200"
                            />
                          </div>
                        </div>
                      )}

                      {/* Control Mapping Table Form Preview */}
                      {block.type === "mapping-table" && (
                        <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 text-xs space-y-2">
                          <div className="flex items-center justify-between text-slate-300 font-semibold">
                            <span>Unified Control Crosswalk Table Template</span>
                            <span className="text-[10px] text-emerald-400 font-mono">SOC 2 / ISO 27001 / NIST</span>
                          </div>
                          <p className="text-[11px] text-slate-400">
                            Renders a responsive control crosswalk matrix connecting Operational Controls with SOC 2, ISO 27001:2022, and NIST CSF 2.0 clauses.
                          </p>
                        </div>
                      )}

                      {/* Risk Matrix Table Form Preview */}
                      {block.type === "risk-matrix" && (
                        <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 text-xs space-y-2">
                          <div className="flex items-center justify-between text-slate-300 font-semibold">
                            <span>5x5 Likelihood x Impact Risk Matrix</span>
                            <span className="text-[10px] text-amber-400 font-mono">Auto Risk Badges</span>
                          </div>
                          <p className="text-[11px] text-slate-400">
                            Renders a color-coded 5x5 Likelihood vs Impact risk evaluation table with Low (Emerald), Medium (Amber), High (Orange), and Critical (Red) badges.
                          </p>
                        </div>
                      )}

                      {/* List Form Input */}
                      {block.type === "list" && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <label className="text-[10px] font-semibold text-slate-400">List Style:</label>
                              <select
                                value={block.listType || "bullet"}
                                onChange={(e) => updateBlockField(idx, "listType", e.target.value)}
                                className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-navy-900 border border-navy-800 text-white"
                              >
                                <option value="bullet">Bullet List (-)</option>
                                <option value="number">Numbered List (1, 2, 3)</option>
                              </select>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                const currentItems = block.items || [];
                                updateBlockField(idx, "items", [...currentItems, "New list item"]);
                              }}
                              className="px-2.5 py-1 rounded-lg bg-navy-900 text-slate-300 hover:text-white border border-navy-700 text-xs font-bold"
                            >
                              + Add Item
                            </button>
                          </div>

                          <div className="space-y-2">
                            {(block.items || ["List item 1"]).map((item, itemIdx) => (
                              <div key={itemIdx} className="flex items-center gap-2">
                                <span className="text-xs font-mono text-slate-500 w-5">{itemIdx + 1}.</span>
                                <input
                                  type="text"
                                  value={item}
                                  onChange={(e) => {
                                    const newItems = [...(block.items || [])];
                                    newItems[itemIdx] = e.target.value;
                                    updateBlockField(idx, "items", newItems);
                                  }}
                                  className="w-full px-3 py-1.5 text-xs rounded-xl bg-navy-900 border border-navy-800 text-slate-200"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    const newItems = (block.items || []).filter((_, i) => i !== itemIdx);
                                    updateBlockField(idx, "items", newItems);
                                  }}
                                  className="p-1 text-slate-500 hover:text-red-400"
                                >
                                  &times;
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Code Snippet Form Input */}
                      {block.type === "code" && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <label className="text-[10px] font-semibold text-slate-400">Language:</label>
                            <select
                              value={block.language || "typescript"}
                              onChange={(e) => updateBlockField(idx, "language", e.target.value)}
                              className="px-3 py-1.5 text-xs font-mono rounded-xl bg-navy-900 border border-navy-800 text-white"
                            >
                              <option value="typescript">TypeScript</option>
                              <option value="javascript">JavaScript</option>
                              <option value="json">JSON</option>
                              <option value="sql">SQL</option>
                              <option value="python">Python</option>
                              <option value="bash">Bash / Shell</option>
                            </select>
                          </div>
                          <textarea
                            rows={5}
                            value={block.code || ""}
                            onChange={(e) => updateBlockField(idx, "code", e.target.value)}
                            placeholder="// Enter syntax code snippet..."
                            className="w-full p-3 font-mono text-xs rounded-xl bg-navy-900 border border-navy-800 text-slate-100"
                          />
                        </div>
                      )}

                      {/* Image Block Form Input */}
                      {block.type === "image" && (
                        <div className="space-y-3">
                          <div>
                            <label className="block text-[10px] font-semibold text-slate-400 mb-1">Image URL</label>
                            <input
                              type="text"
                              value={block.imageUrl || ""}
                              onChange={(e) => updateBlockField(idx, "imageUrl", e.target.value)}
                              placeholder="https://images.unsplash.com/..."
                              className="w-full px-3 py-2 text-xs font-mono rounded-xl bg-navy-900 border border-navy-800 text-slate-200"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-semibold text-slate-400 mb-1">Caption / Alt Text</label>
                            <input
                              type="text"
                              value={block.caption || ""}
                              onChange={(e) => updateBlockField(idx, "caption", e.target.value)}
                              placeholder="Architecture diagram explanation"
                              className="w-full px-3 py-2 text-xs rounded-xl bg-navy-900 border border-navy-800 text-slate-200"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. RAW MARKDOWN MODE */}
            {editorMode === "markdown" && (
              <div className="space-y-0">
                {/* Visual Formatting Toolbar Bar */}
                <div className="p-3 bg-navy-900 border-b border-navy-800 flex flex-wrap items-center gap-1.5 text-xs text-slate-300">
                  <button
                    type="button"
                    onClick={() => insertFormatting("## ", "\n", "Heading 2")}
                    title="Section Heading (H2)"
                    className="p-1.5 rounded-md hover:bg-navy-950 text-slate-300 hover:text-white border border-transparent hover:border-navy-700 flex items-center gap-1"
                  >
                    <Heading2 className="w-4 h-4 text-[#F15E1C]" />
                    <span className="text-[11px] font-bold">H2</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => insertFormatting("### ", "\n", "Heading 3")}
                    title="Sub-heading (H3)"
                    className="p-1.5 rounded-md hover:bg-navy-950 text-slate-300 hover:text-white border border-transparent hover:border-navy-700 flex items-center gap-1"
                  >
                    <Heading3 className="w-4 h-4 text-[#F15E1C]" />
                    <span className="text-[11px] font-bold">H3</span>
                  </button>

                  <div className="h-4 w-[1px] bg-navy-800 mx-1" />

                  <button
                    type="button"
                    onClick={() => insertFormatting("**", "**", "bold text")}
                    title="Bold Text"
                    className="p-1.5 rounded-md hover:bg-navy-950 text-slate-300 hover:text-white border border-transparent hover:border-navy-700"
                  >
                    <Bold className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => insertFormatting("*", "*", "italic text")}
                    title="Italic Text"
                    className="p-1.5 rounded-md hover:bg-navy-950 text-slate-300 hover:text-white border border-transparent hover:border-navy-700"
                  >
                    <Italic className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => insertFormatting("`", "`", "code")}
                    title="Inline Code"
                    className="p-1.5 rounded-md hover:bg-navy-950 text-slate-300 hover:text-white border border-transparent hover:border-navy-700"
                  >
                    <Code className="w-4 h-4 text-[#F15E1C]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => insertFormatting("> ", "\n", "Quote text")}
                    title="Blockquote"
                    className="p-1.5 rounded-md hover:bg-navy-950 text-slate-300 hover:text-white border border-transparent hover:border-navy-700"
                  >
                    <Quote className="w-4 h-4 text-[#F15E1C]" />
                  </button>

                  <div className="h-4 w-[1px] bg-navy-800 mx-1" />

                  <button
                    type="button"
                    onClick={() => insertFormatting("- ", "\n", "List item")}
                    title="Bullet List"
                    className="p-1.5 rounded-md hover:bg-navy-950 text-slate-300 hover:text-white border border-transparent hover:border-navy-700"
                  >
                    <List className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => insertFormatting("1. ", "\n", "Ordered list item")}
                    title="Numbered List"
                    className="p-1.5 rounded-md hover:bg-navy-950 text-slate-300 hover:text-white border border-transparent hover:border-navy-700"
                  >
                    <ListOrdered className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => insertFormatting("[", "](https://omnigrc.co)", "Link text")}
                    title="Insert Link"
                    className="p-1.5 rounded-md hover:bg-navy-950 text-slate-300 hover:text-white border border-transparent hover:border-navy-700"
                  >
                    <LinkIcon className="w-4 h-4 text-[#F15E1C]" />
                  </button>
                </div>

                <div className="p-6">
                  <textarea
                    ref={textareaRef}
                    rows={22}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write article content using markdown..."
                    className="w-full p-4 font-mono text-xs sm:text-sm leading-relaxed rounded-xl bg-navy-950 border border-navy-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#F15E1C] transition-colors"
                  />
                </div>
              </div>
            )}

            {/* 3. SPLIT VIEW MODE */}
            {editorMode === "split" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-navy-800">
                <div className="p-4">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block mb-2">Editor Source</span>
                  <textarea
                    ref={textareaRef}
                    rows={18}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-3 font-mono text-xs leading-relaxed rounded-xl bg-navy-950 border border-navy-800 text-slate-100 focus:outline-none focus:border-[#F15E1C]"
                  />
                </div>
                <div className="p-6 bg-white dark:bg-[#0A111F] text-slate-900 dark:text-slate-100 max-h-[520px] overflow-y-auto">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-2">Live Render</span>
                  <MarkdownRenderer content={content} />
                </div>
              </div>
            )}

            {/* 4. FULL LIVE PREVIEW MODE */}
            {editorMode === "preview" && (
              <div className="p-8 bg-white dark:bg-[#0A111F] text-slate-900 dark:text-slate-100 min-h-[450px]">
                <MarkdownRenderer content={content} />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
