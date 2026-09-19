import React from "react";
import { redirect } from "next/navigation";
import { isAuthenticatedAdmin } from "@/lib/admin-auth";
import { getSupabaseServiceRoleClient, createSupabaseServerClient } from "@/lib/supabase-server";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminRequestsTableClient } from "@/components/admin/AdminRequestsTableClient";
import { DemoRequest } from "@/lib/demo-requests";

export default async function AdminRequestsPage() {
  const isAdmin = await isAuthenticatedAdmin();

  if (!isAdmin) {
    redirect("/admin/login");
  }

  let requests: DemoRequest[] = [];

  try {
    const supabase = process.env.SUPABASE_SERVICE_ROLE_KEY
      ? getSupabaseServiceRoleClient()
      : createSupabaseServerClient();

    const { data, error } = await supabase
      .from("demo_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.warn("Notice querying demo_requests:", error.message);
    } else if (data) {
      requests = data as DemoRequest[];
    }
  } catch (err) {
    console.error("AdminRequestsPage error loading requests:", err);
  }

  return (
    <div className="min-h-screen bg-[#0A111F] text-slate-100 flex flex-col justify-between selection:bg-[#F15E1C]/30 antialiased">
      <div>
        <AdminHeader />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <AdminRequestsTableClient initialRequests={requests} />
        </main>
      </div>
    </div>
  );
}
