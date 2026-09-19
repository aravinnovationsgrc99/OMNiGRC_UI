import React from "react";
import { redirect, notFound } from "next/navigation";
import { isAuthenticatedAdmin } from "@/lib/admin-auth";
import { getPostById } from "@/lib/blog-storage";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminPostEditor } from "@/components/admin/AdminPostEditor";

interface EditPostPageProps {
  params: {
    id: string;
  };
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const isAdmin = await isAuthenticatedAdmin();

  if (!isAdmin) {
    redirect("/admin/login");
  }

  const post = await getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0A111F] text-slate-100 flex flex-col justify-between selection:bg-[#F15E1C]/30 antialiased">
      <div>
        <AdminHeader />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <AdminPostEditor initialPost={post} isNew={false} />
        </main>
      </div>
    </div>
  );
}
