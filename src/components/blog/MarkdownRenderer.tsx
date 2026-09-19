"use client";

import React from "react";
import Link from "next/link";
import {
  Check,
  Copy,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Info,
  ExternalLink,
  Table as TableIcon,
  Quote as QuoteIcon
} from "lucide-react";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Helper to render risk level badges in tables automatically
  const renderTableCell = (text: string) => {
    const trimmed = text.trim();

    // Check for Risk Scores like "25 (Critical)", "15 (High)", "9 (Med)", "4 (Low)"
    if (/\b(Critical|25|20)\b/i.test(trimmed) && trimmed.toLowerCase().includes("critical")) {
      return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30 shadow-sm">
          {trimmed}
        </span>
      );
    }
    if (/\b(High|16|15|12)\b/i.test(trimmed) && trimmed.toLowerCase().includes("high")) {
      return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30 shadow-sm">
          {trimmed}
        </span>
      );
    }
    if (/\b(Med|Medium|10|9|8|6)\b/i.test(trimmed) && (trimmed.toLowerCase().includes("med") || trimmed.toLowerCase().includes("medium"))) {
      return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 shadow-sm">
          {trimmed}
        </span>
      );
    }
    if (/\b(Low|5|4|3|2|1)\b/i.test(trimmed) && trimmed.toLowerCase().includes("low")) {
      return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-sm">
          {trimmed}
        </span>
      );
    }

    return renderFormattedInline(text);
  };

  // Main markdown parser
  const parseMarkdown = (raw: string) => {
    if (!raw) return null;
    const blocks: React.ReactNode[] = [];
    const lines = raw.split("\n");
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // 1. Code Block Parsing
      if (line.trim().startsWith("```")) {
        const language = line.trim().slice(3).trim();
        let codeContent = "";
        i++;
        while (i < lines.length && !lines[i].trim().startsWith("```")) {
          codeContent += lines[i] + "\n";
          i++;
        }
        i++; // skip closing ```
        const trimmedCode = codeContent.trimEnd();
        blocks.push(
          <div
            key={`code-${i}`}
            className="my-8 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl text-slate-100 font-mono text-xs sm:text-sm"
          >
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800/80 text-xs text-slate-400">
              <span className="font-bold uppercase tracking-wider text-[11px] text-[#F15E1C]">
                {language || "code"}
              </span>
              <button
                onClick={() => handleCopyCode(trimmedCode)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
                title="Copy code"
              >
                {copiedCode === trimmedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm leading-relaxed text-slate-200">
              <code>{trimmedCode}</code>
            </pre>
          </div>
        );
        continue;
      }

      // 2. Blockquote / Rich Callout Box Parsing
      if (line.trim().startsWith("> ")) {
        let quoteLines: string[] = [line.trim().substring(2)];
        i++;
        while (i < lines.length && lines[i].trim().startsWith("> ")) {
          quoteLines.push(lines[i].trim().substring(2));
          i++;
        }

        const fullQuoteText = quoteLines.join("\n");
        const isAiCallout = fullQuoteText.toLowerCase().includes("ai") || fullQuoteText.toLowerCase().includes("omnigrc");
        const isWarning = fullQuoteText.toLowerCase().includes("warning") || fullQuoteText.toLowerCase().includes("caution");

        blocks.push(
          <div
            key={`quote-${i}`}
            className={`my-8 p-6 rounded-2xl border shadow-md relative overflow-hidden transition-all ${
              isAiCallout
                ? "bg-gradient-to-br from-[#F15E1C]/10 via-[#F15E1C]/5 to-transparent border-[#F15E1C]/40 text-slate-900 dark:text-slate-100"
                : isWarning
                ? "bg-amber-500/10 border-amber-500/40 text-slate-900 dark:text-slate-100"
                : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-2.5 rounded-xl shrink-0 ${
                  isAiCallout
                    ? "bg-[#F15E1C] text-white"
                    : isWarning
                    ? "bg-amber-500 text-white"
                    : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                }`}
              >
                {isAiCallout ? (
                  <Sparkles className="w-5 h-5" />
                ) : isWarning ? (
                  <AlertTriangle className="w-5 h-5" />
                ) : (
                  <QuoteIcon className="w-5 h-5" />
                )}
              </div>
              <div className="space-y-1 text-sm sm:text-base leading-relaxed italic font-medium">
                {quoteLines.map((ql, qIdx) => (
                  <p key={qIdx}>{renderFormattedInline(ql)}</p>
                ))}
              </div>
            </div>
          </div>
        );
        continue;
      }

      // 3. Image with Caption Parsing: ![alt](url)
      if (line.trim().startsWith("![") && line.includes("](")) {
        const imgMatch = line.trim().match(/!\[([^\]]*)\]\(([^)]+)\)/);
        if (imgMatch) {
          const altText = imgMatch[1];
          const imgUrl = imgMatch[2];
          blocks.push(
            <figure key={`img-${i}`} className="my-8 space-y-2">
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900">
                <img src={imgUrl} alt={altText || "Article illustration"} className="w-full max-h-[480px] object-cover" />
              </div>
              {altText && (
                <figcaption className="text-center text-xs text-slate-500 dark:text-slate-400 italic">
                  {altText}
                </figcaption>
              )}
            </figure>
          );
          i++;
          continue;
        }
      }

      // 4. GRC Table Parsing (including Risk Matrices & Control Tables)
      if (line.includes("|") && line.trim().startsWith("|")) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].includes("|") && lines[i].trim().startsWith("|")) {
          tableLines.push(lines[i]);
          i++;
        }
        if (tableLines.length >= 2) {
          const headers = tableLines[0]
            .split("|")
            .filter((_, index, arr) => index > 0 && index < arr.length - 1)
            .map((s) => s.trim());
          const rows = tableLines
            .slice(2)
            .map((r) =>
              r
                .split("|")
                .filter((_, index, arr) => index > 0 && index < arr.length - 1)
                .map((s) => s.trim())
            );

          blocks.push(
            <div
              key={`table-${i}`}
              className="my-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg bg-white dark:bg-slate-900/60"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead className="bg-slate-100 dark:bg-slate-800/90 text-slate-900 dark:text-white font-bold uppercase tracking-wider text-[11px] border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      {headers.map((h, hIdx) => (
                        <th key={hIdx} className="px-4 py-3.5 border-r last:border-r-0 border-slate-200 dark:border-slate-800">
                          {renderFormattedInline(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                      >
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className="px-4 py-3 text-slate-700 dark:text-slate-300 border-r last:border-r-0 border-slate-200 dark:border-slate-800/60"
                          >
                            {renderTableCell(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
          continue;
        }
      }

      // 5. Headings Parsing
      if (line.startsWith("### ")) {
        blocks.push(
          <h3
            key={`h3-${i}`}
            className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 tracking-tight flex items-center gap-2"
          >
            <span className="w-1.5 h-5 rounded-full bg-[#F15E1C]" />
            <span>{renderFormattedInline(line.replace("### ", ""))}</span>
          </h3>
        );
        i++;
        continue;
      }

      if (line.startsWith("## ")) {
        blocks.push(
          <h2
            key={`h2-${i}`}
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-12 mb-6 tracking-tight border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center gap-2.5"
          >
            <span className="w-2 h-7 rounded-full bg-[#F15E1C]" />
            <span>{renderFormattedInline(line.replace("## ", ""))}</span>
          </h2>
        );
        i++;
        continue;
      }

      if (line.startsWith("# ")) {
        blocks.push(
          <h1
            key={`h1-${i}`}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-12 mb-6 tracking-tight"
          >
            {renderFormattedInline(line.replace("# ", ""))}
          </h1>
        );
        i++;
        continue;
      }

      // 6. Horizontal Divider
      if (line.trim() === "---" || line.trim() === "***") {
        blocks.push(
          <hr
            key={`hr-${i}`}
            className="my-10 border-t-2 border-dashed border-slate-200 dark:border-slate-800"
          />
        );
        i++;
        continue;
      }

      // 7. Unordered Lists
      if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
        const listItems: string[] = [];
        while (i < lines.length && (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))) {
          listItems.push(lines[i].trim().substring(2));
          i++;
        }
        blocks.push(
          <ul key={`ul-${i}`} className="my-6 space-y-2.5 text-slate-700 dark:text-slate-300">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-[#F15E1C] shrink-0 mt-2" />
                <div>{renderFormattedInline(item)}</div>
              </li>
            ))}
          </ul>
        );
        continue;
      }

      // 8. Ordered Lists
      if (/^\d+\.\s/.test(line.trim())) {
        const listItems: string[] = [];
        while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
          listItems.push(lines[i].trim().replace(/^\d+\.\s/, ""));
          i++;
        }
        blocks.push(
          <ol key={`ol-${i}`} className="my-6 space-y-3 text-slate-700 dark:text-slate-300">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-[#F15E1C]/15 text-[#F15E1C] dark:text-orange-400 font-bold font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 border border-[#F15E1C]/30">
                  {idx + 1}
                </span>
                <div className="pt-0.5">{renderFormattedInline(item)}</div>
              </li>
            ))}
          </ol>
        );
        continue;
      }

      // 8.5 Markdown Image Parsing
      const imgMatch = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (imgMatch) {
        const altText = imgMatch[1];
        const imgSrc = imgMatch[2];
        blocks.push(
          <figure key={`img-${i}`} className="my-8 space-y-2">
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-navy-700/60 shadow-md bg-slate-100 dark:bg-navy-950">
              <img
                src={imgSrc}
                alt={altText || "Blog article visual illustration"}
                loading="lazy"
                className="w-full h-auto max-h-[480px] object-contain mx-auto"
              />
            </div>
            {altText && (
              <figcaption className="text-center font-mono text-xs text-slate-500 dark:text-slate-400">
                {altText}
              </figcaption>
            )}
          </figure>
        );
        i++;
        continue;
      }

      // 9. Paragraph
      if (line.trim().length > 0) {
        blocks.push(
          <p key={`p-${i}`} className="my-5 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {renderFormattedInline(line)}
          </p>
        );
      }

      i++;
    }

    return blocks;
  };

  // Inline formatting parser (bold, italic, code, links)
  const renderFormattedInline = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    let keyCounter = 0;

    const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      const token = match[0];
      if (token.startsWith("**") && token.endsWith("**")) {
        parts.push(
          <strong key={keyCounter++} className="font-bold text-slate-900 dark:text-white">
            {token.slice(2, -2)}
          </strong>
        );
      } else if (token.startsWith("*") && token.endsWith("*")) {
        parts.push(
          <em key={keyCounter++} className="italic text-slate-800 dark:text-slate-200">
            {token.slice(1, -1)}
          </em>
        );
      } else if (token.startsWith("`") && token.endsWith("`")) {
        parts.push(
          <code
            key={keyCounter++}
            className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/90 text-[#F15E1C] dark:text-[#ff7d45] font-mono text-xs sm:text-sm border border-slate-200 dark:border-slate-700/80 shadow-sm"
          >
            {token.slice(1, -1)}
          </code>
        );
      } else if (token.startsWith("[") && token.includes("](")) {
        const linkMatch = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (linkMatch) {
          const label = linkMatch[1];
          const href = linkMatch[2];
          const isExternal = href.startsWith("http");
          parts.push(
            isExternal ? (
              <a
                key={keyCounter++}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#F15E1C] dark:text-orange-400 hover:underline font-semibold"
              >
                <span>{label}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <Link
                key={keyCounter++}
                href={href}
                className="text-[#F15E1C] dark:text-orange-400 hover:underline font-semibold"
              >
                {label}
              </Link>
            )
          );
        } else {
          parts.push(token);
        }
      } else {
        parts.push(token);
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return <div className="markdown-content">{parseMarkdown(content)}</div>;
}

