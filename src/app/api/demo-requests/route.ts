import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient, getSupabaseServiceRoleClient } from "@/lib/supabase-server";
import { isAuthenticatedAdmin } from "@/lib/admin-auth";
import { RequestType } from "@/lib/demo-requests";

const VALID_REQUEST_TYPES: RequestType[] = ["DEMO", "WALKTHROUGH", "CONTACT", "NEWSLETTER"];

function getAdminDbClient() {
  if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      return getSupabaseServiceRoleClient();
    } catch {
      return createSupabaseServerClient();
    }
  }
  return createSupabaseServerClient();
}

// Public POST endpoint: Submit a new demo, walkthrough, or contact request
// Uses public Supabase client with anon key (NEXT_PUBLIC_SUPABASE_ANON_KEY)
// Does NOT call .select() so public visitors can INSERT without requiring SELECT RLS policy
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Basic anti-spam honeypot check
    if (body.website || body.hp_field) {
      return NextResponse.json({ success: true, message: "Submission received" }, { status: 200 });
    }

    // 2. Input validation & sanitization
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "N/A";
    const phone = typeof body.phone === "string" && body.phone.trim() ? body.phone.trim() : null;
    const message = typeof body.message === "string" && body.message.trim() ? body.message.trim() : null;
    const source_page = typeof body.source_page === "string" && body.source_page.trim() ? body.source_page.trim() : "/";

    let request_type: RequestType = "DEMO";
    if (body.request_type && VALID_REQUEST_TYPES.includes(body.request_type.toUpperCase() as RequestType)) {
      request_type = body.request_type.toUpperCase() as RequestType;
    }

    if (!name || name.length < 2) {
      return NextResponse.json({ success: false, error: "Full name is required (min 2 characters)" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Valid email address is required" }, { status: 400 });
    }

    if (name.length > 200 || email.length > 200 || company.length > 200) {
      return NextResponse.json({ success: false, error: "Input text exceeds maximum allowed length" }, { status: 400 });
    }

    if (message && message.length > 5000) {
      return NextResponse.json({ success: false, error: "Message exceeds maximum length of 5000 characters" }, { status: 400 });
    }

    // 3. Save to Supabase using public server client (uses NEXT_PUBLIC_SUPABASE_ANON_KEY)
    const supabase = createSupabaseServerClient();
    const { error } = await supabase
      .from("demo_requests")
      .insert([
        {
          name,
          email,
          company: company || "N/A",
          phone,
          message,
          request_type,
          source_page,
          status: "NEW"
        }
      ]);

    if (error) {
      console.error("Supabase insert demo_requests error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to persist request to database: " + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Request submitted successfully"
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("API POST /api/demo-requests error:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}

// Protected GET endpoint: List all demo requests (Admin authentication required)
export async function GET(request: NextRequest) {
  try {
    const isAdmin = await isAuthenticatedAdmin();
    if (!isAdmin) {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const statusFilter = searchParams.get("status");
    const typeFilter = searchParams.get("type");

    const supabase = getAdminDbClient();
    let query = supabase.from("demo_requests").select("*").order("created_at", { ascending: false });

    if (statusFilter && statusFilter !== "ALL") {
      query = query.eq("status", statusFilter.toUpperCase());
    }

    if (typeFilter && typeFilter !== "ALL") {
      query = query.eq("request_type", typeFilter.toUpperCase());
    }

    const { data, error } = await query;

    if (error) {
      console.error("Supabase select demo_requests error:", error);
      return NextResponse.json(
        { success: false, error: "Database query failed: " + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      count: data?.length || 0,
      requests: data || []
    });
  } catch (err: any) {
    console.error("API GET /api/demo-requests error:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
