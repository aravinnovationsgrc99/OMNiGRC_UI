import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServiceRoleClient, createSupabaseServerClient } from "@/lib/supabase-server";
import { isAuthenticatedAdmin } from "@/lib/admin-auth";
import { RequestStatus } from "@/lib/demo-requests";

const VALID_STATUSES: RequestStatus[] = ["NEW", "CONTACTED", "CLOSED"];

function getDbClient() {
  if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      return getSupabaseServiceRoleClient();
    } catch {
      return createSupabaseServerClient();
    }
  }
  return createSupabaseServerClient();
}

// Protected PATCH endpoint: Update status of a request (Admin authentication required)
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const isAdmin = await isAuthenticatedAdmin();
    if (!isAdmin) {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 401 });
    }

    const { id } = params;
    if (!id) {
      return NextResponse.json({ success: false, error: "Request ID is required" }, { status: 400 });
    }

    const body = await request.json();
    const statusInput = typeof body.status === "string" ? body.status.toUpperCase() : "";

    if (!VALID_STATUSES.includes(statusInput as RequestStatus)) {
      return NextResponse.json(
        { success: false, error: "Invalid status. Must be NEW, CONTACTED, or CLOSED" },
        { status: 400 }
      );
    }

    const supabase = getDbClient();
    const { data, error } = await supabase
      .from("demo_requests")
      .update({
        status: statusInput,
        updated_at: new Date().toISOString()
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Supabase update demo_requests error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to update status: " + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Request status updated",
      request: data
    });
  } catch (err: any) {
    console.error("API PATCH /api/demo-requests/[id] error:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
