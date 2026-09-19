import React from "react";
import { redirect } from "next/navigation";
import { isAuthenticatedAdmin } from "@/lib/admin-auth";
import { getAllPosts } from "@/lib/blog-storage";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminPostsTableClient } from "@/components/admin/AdminPostsTableClient";

export default async function AdminPostsPage() {
  const isAdmin = await isAuthenticatedAdmin();

  if (!isAdmin) {
    redirect("/admin/login");
  }

  const posts = await getAllPosts(true);

  return (
    <div className="min-h-screen bg-[#0A111F] text-slate-100 flex flex-col justify-between selection:bg-[#F15E1C]/30 antialiased">
      <div>
        <AdminHeader />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <AdminPostsTableClient initialPosts={posts} />
        </main>
      </div>
    </div>
  );
}
