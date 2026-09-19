import { NextRequest, NextResponse } from "next/server";
import { getPostById, savePost, deletePost } from "@/lib/blog-storage";
import { isAuthenticatedAdmin } from "@/lib/admin-auth";

// Protected GET endpoint for single post by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const isAdmin = await isAuthenticatedAdmin();
    const post = await getPostById(params.id);

    if (!post) {
      return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 });
    }

    if (post.status !== "PUBLISHED" && !isAdmin) {
      return NextResponse.json({ success: false, error: "Unauthorized access to draft post" }, { status: 403 });
    }

    return NextResponse.json({ success: true, post });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: "Failed to retrieve post" }, { status: 500 });
  }
}

// Protected PUT endpoint for editing post
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const isAdmin = await isAuthenticatedAdmin();
    if (!isAdmin) {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 401 });
    }

    const body = await request.json();
    const existing = await getPostById(params.id);

    if (!existing) {
      return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 });
    }

    const updated = await savePost({
      ...body,
      id: params.id
    });

    return NextResponse.json({ success: true, message: "Post updated successfully", post: updated });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message || "Failed to update post" }, { status: 400 });
  }
}

// Protected DELETE endpoint for removing post
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const isAdmin = isAuthenticatedAdmin();
    if (!isAdmin) {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 401 });
    }

    const success = await deletePost(params.id);
    if (!success) {
      return NextResponse.json({ success: false, error: "Post not found or already deleted" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Post deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: "Failed to delete post" }, { status: 500 });
  }
}
