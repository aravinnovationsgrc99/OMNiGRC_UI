"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, FileText, PlusCircle, ExternalLink, LogOut, Shield } from "lucide-react";

export function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      router.push("/admin/login");
      router.refresh();
    } catch {
      router.push("/admin/login");
    }
  };

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Posts", href: "/admin/posts", icon: FileText },
    { label: "New Post", href: "/admin/posts/new", icon: PlusCircle },
  ];

  return (
    <header className="w-full bg-navy-950 border-b border-navy-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand & Badge */}
        <div className="flex items-center gap-4">
          <Link href="/admin" className="flex items-center gap-2">
            <Image
              src="/omnigrc-logo.png"
              alt="OMNiGRC Admin"
              width={140}
              height={36}
              className="h-7 w-auto object-contain"
            />
            <span className="px-2 py-0.5 rounded bg-[#F15E1C]/20 text-[#F15E1C] font-mono text-[10px] font-bold uppercase tracking-wider border border-[#F15E1C]/30">
              BLOG ADMIN
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? "bg-[#F15E1C] text-white"
                    : "text-slate-300 hover:text-white hover:bg-navy-900"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/resources/blog"
            target="_blank"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-navy-900 border border-navy-700 hover:text-white hover:border-[#F15E1C] transition-colors"
          >
            <span>View Live Blog</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-red-400 bg-red-950/40 border border-red-900/60 hover:bg-red-900/40 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
