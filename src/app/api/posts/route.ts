import { NextRequest, NextResponse } from "next/server";
import { getAllPosts, getFilteredPosts, savePost } from "@/lib/blog-storage";
import { isAuthenticatedAdmin } from "@/lib/admin-auth";

// Public GET endpoint for blog posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category") || undefined;
    const tag = searchParams.get("tag") || undefined;
    const search = searchParams.get("search") || undefined;
    const status = searchParams.get("status") as any || undefined;
    const adminRequested = searchParams.get("includeUnpublished") === "true";

    const isAdmin = await isAuthenticatedAdmin();
    const includeUnpublished = adminRequested && isAdmin;

    const posts = await getFilteredPosts({ category, tag, search, status }, includeUnpublished);

    return NextResponse.json({
      success: true,
      count: posts.length,
      posts
    });
  } catch (error: any) {
    console.error("API GET /api/posts Error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch blog posts" }, { status: 500 });
  }
}

// Protected POST endpoint for creating a blog post
export async function POST(request: NextRequest) {
  try {
    const isAdmin = await isAuthenticatedAdmin();
    if (!isAdmin) {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 401 });
    }

    const body = await request.json();
    if (!body.title || !body.title.trim()) {
      return NextResponse.json({ success: false, error: "Title is required" }, { status: 400 });
    }
    if (!body.content || !body.content.trim()) {
      return NextResponse.json({ success: false, error: "Content is required" }, { status: 400 });
    }

    const savedPost = await savePost(body);

    return NextResponse.json({
      success: true,
      message: "Blog post saved successfully",
      post: savedPost
    }, { status: 201 });
  } catch (error: any) {
    console.error("API POST /api/posts Error:", error);
    return NextResponse.json({ success: false, error: error.message || "Failed to save blog post" }, { status: 400 });
  }
}
