import React from "react";
import Link from "next/link";
import { FRAMEWORKS } from "@/lib/frameworks";
import { Compass, ArrowRight, ExternalLink, CheckCircle2, Sparkles } from "lucide-react";

export const HomeGuidesSection: React.FC = () => {
  // Pick first 4 frameworks as guide highlights
  const guideFrameworks = FRAMEWORKS.slice(0, 4);

  return (
    <section
      id="guides-preview"
      className="relative w-full bg-[#F9FAFB] dark:bg-[#070D19] px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-8 sm:pb-12 border-t border-slate-200 dark:border-navy-700/60 overflow-hidden"
    >
      {/* Subtle glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-[#2E936F]/08 dark:bg-[#2E936F]/10 blur-3xl"
      />

      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto space-y-5 sm:space-y-7">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F4EF] dark:bg-emerald-950/40 border border-[#2E936F]/30 text-[#2E936F] dark:text-[#36B386] text-xs font-mono font-extrabold uppercase tracking-wider">
              <Compass className="h-3.5 w-3.5 shrink-0" />
              <span>Framework Guides</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight">
              Canonical guides.{" "}
              <span className="text-[#2E936F] dark:text-[#36B386]">Zero fluff.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
              Operational framework taxonomies covering controls, applicability, and implementation paths — mapped directly to OMNiGRC workflows.
            </p>
          </div>

          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-xs text-[#2E936F] dark:text-[#36B386] bg-[#E6F4EF] dark:bg-emerald-950/50 border border-[#2E936F]/40 dark:border-emerald-700/50 hover:bg-[#2E936F] hover:text-white dark:hover:bg-[#2E936F] dark:hover:text-white transition-all shrink-0 self-end sm:self-auto"
          >
            <span>All Framework Guides</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Guides Cards Grid - compact horizontal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {guideFrameworks.map((fw) => (
            <Link
              key={fw.code}
              href={`/frameworks/${fw.slug}`}
              className="group flex flex-col justify-between p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-navy-700/60 bg-white dark:bg-navy-900/60 hover:border-[#2E936F]/50 dark:hover:border-[#2E936F]/50 hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-3">
                {/* Badge Row */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase border"
                    style={{
                      borderColor: `${fw.accentColor}60`,
                      color: fw.accentColor,
                      backgroundColor: `${fw.accentColor}15`,
                    }}
                  >
                    {fw.code}
                  </span>
                  <span className="text-[10px] font-mono text-[#2E936F] dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Guide Live
                  </span>
                </div>

                {/* Framework Name */}
                <h3 className="font-extrabold text-sm sm:text-base text-navy-900 dark:text-white group-hover:text-[#2E936F] dark:group-hover:text-[#36B386] transition-colors leading-snug">
                  {fw.name}
                </h3>

                {/* Short description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 font-medium">
                  {fw.oneLiner}
                </p>
              </div>

              {/* Footer CTA */}
              <div className="pt-3 mt-3 border-t border-slate-100 dark:border-navy-700/60 flex items-center justify-end">
                <span className="flex items-center gap-1 text-xs font-extrabold text-[#2E936F] dark:text-[#36B386] group-hover:gap-2 transition-all">
                  Read Guide
                  <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Highlighted CTA Banner: Explore All Our Resources */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl border border-[#2E936F]/30 dark:border-emerald-500/30 bg-gradient-to-r from-[#E6F4EF] via-white to-[#E6F4EF] dark:from-[#0B1A28] dark:via-[#0E2034] dark:to-[#0B1A28] shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-extrabold text-[#2E936F] dark:text-emerald-400 uppercase tracking-wider">
              <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
              <span>Full GRC Library &amp; Documentation</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-200 font-semibold">
              Looking for full frameworks, compliance mappings, architecture whitepapers, and editorial guides?
            </p>
          </div>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-[#2E936F] via-[#24795b] to-[#1c6048] hover:from-[#24795b] hover:to-[#174d39] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] shrink-0 border border-emerald-400/30 group"
          >
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span>Explore All Our Resources</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGuidesSection;
