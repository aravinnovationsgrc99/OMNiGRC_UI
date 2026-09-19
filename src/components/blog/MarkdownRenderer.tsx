"use client";

import React from "react";
import Link from "next/link";
import { Check, Copy } from "lucide-react";

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

  // Parse lines cleanly
  const parseMarkdown = (raw: string) => {
    const blocks: React.ReactNode[] = [];
    const lines = raw.split("\n");
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Code block start
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
          <div key={`code-${i}`} className="my-6 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-lg text-slate-100 font-mono text-sm">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-950 border-b border-slate-800 text-xs text-slate-400">
              <span>{language || "code"}</span>
              <button
                onClick={() => handleCopyCode(trimmedCode)}
                className="flex items-center gap-1 hover:text-white transition-colors"
                title="Copy code"
              >
                {copiedCode === trimmedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 overflow-x-auto text-xs sm:text-sm leading-relaxed text-slate-200">
              <code>{trimmedCode}</code>
            </pre>
          </div>
        );
        continue;
      }

      // Blockquote start
      if (line.trim().startsWith("> ")) {
        let quoteText = line.trim().substring(2);
        i++;
        while (i < lines.length && lines[i].trim().startsWith("> ")) {
          quoteText += "\n" + lines[i].trim().substring(2);
          i++;
        }
        blocks.push(
          <blockquote
            key={`quote-${i}`}
            className="my-6 pl-4 py-3 border-l-4 border-[#F15E1C] bg-[#F15E1C]/5 dark:bg-[#F15E1C]/10 text-slate-800 dark:text-slate-200 italic font-medium rounded-r-lg"
          >
            {renderFormattedInline(quoteText)}
          </blockquote>
        );
        continue;
      }

      // Table start
      if (line.includes("|") && line.trim().startsWith("|")) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].includes("|") && lines[i].trim().startsWith("|")) {
          tableLines.push(lines[i]);
          i++;
        }
        if (tableLines.length >= 2) {
          const headers = tableLines[0].split("|").filter((_, index, arr) => index > 0 && index < arr.length - 1).map((s) => s.trim());
          const rows = tableLines.slice(2).map((r) => r.split("|").filter((_, index, arr) => index > 0 && index < arr.length - 1).map((s) => s.trim()));
          blocks.push(
            <div key={`table-${i}`} className="my-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 font-semibold">
                  <tr>
                    {headers.map((h, hIdx) => (
                      <th key={hIdx} className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                        {renderFormattedInline(h)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-3 text-slate-700 dark:text-slate-300">
                          {renderFormattedInline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
          continue;
        }
      }

      // Headers
      if (line.startsWith("### ")) {
        blocks.push(
          <h3 key={`h3-${i}`} className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 tracking-tight">
            {renderFormattedInline(line.replace("### ", ""))}
          </h3>
        );
        i++;
        continue;
      }

      if (line.startsWith("## ")) {
        blocks.push(
          <h2 key={`h2-${i}`} className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4 tracking-tight border-b border-slate-200 dark:border-slate-800 pb-2">
            {renderFormattedInline(line.replace("## ", ""))}
          </h2>
        );
        i++;
        continue;
      }

      if (line.startsWith("# ")) {
        blocks.push(
          <h1 key={`h1-${i}`} className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-10 mb-6 tracking-tight">
            {renderFormattedInline(line.replace("# ", ""))}
          </h1>
        );
        i++;
        continue;
      }

      // Horizontal Rule
      if (line.trim() === "---" || line.trim() === "***") {
        blocks.push(<hr key={`hr-${i}`} className="my-8 border-t border-slate-200 dark:border-slate-800" />);
        i++;
        continue;
      }

      // Unordered list item
      if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
        const listItems: string[] = [];
        while (i < lines.length && (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))) {
          listItems.push(lines[i].trim().substring(2));
          i++;
        }
        blocks.push(
          <ul key={`ul-${i}`} className="my-4 space-y-2 list-disc list-inside text-slate-700 dark:text-slate-300">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {renderFormattedInline(item)}
              </li>
            ))}
          </ul>
        );
        continue;
      }

      // Ordered list item
      if (/^\d+\.\s/.test(line.trim())) {
        const listItems: string[] = [];
        while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
          listItems.push(lines[i].trim().replace(/^\d+\.\s/, ""));
          i++;
        }
        blocks.push(
          <ol key={`ol-${i}`} className="my-4 space-y-2 list-decimal list-inside text-slate-700 dark:text-slate-300">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {renderFormattedInline(item)}
              </li>
            ))}
          </ol>
        );
        continue;
      }

      // Paragraph
      if (line.trim().length > 0) {
        blocks.push(
          <p key={`p-${i}`} className="my-4 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
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
    // Break by inline elements safely without innerHTML
    const parts: React.ReactNode[] = [];
    let current = text;
    let keyCounter = 0;

    // Regex match for bold **text**, italic *text*, code `text`, link [text](url)
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
          <strong key={keyCounter++} className="font-semibold text-slate-900 dark:text-white">
            {token.slice(2, -2)}
          </strong>
        );
      } else if (token.startsWith("*") && token.endsWith("*")) {
        parts.push(
          <em key={keyCounter++} className="italic">
            {token.slice(1, -1)}
          </em>
        );
      } else if (token.startsWith("`") && token.endsWith("`")) {
        parts.push(
          <code
            key={keyCounter++}
            className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[#F15E1C] dark:text-[#ff7d45] font-mono text-xs sm:text-sm border border-slate-200 dark:border-slate-700"
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
                className="text-[#F15E1C] hover:underline font-medium"
              >
                {label}
              </a>
            ) : (
              <Link key={keyCounter++} href={href} className="text-[#F15E1C] hover:underline font-medium">
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
