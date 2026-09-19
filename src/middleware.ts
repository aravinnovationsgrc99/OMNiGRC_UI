import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // Detect admin domain via environment variable or hostname pattern
  const isAdminDomain =
    process.env.NEXT_PUBLIC_SITE_MODE === "admin" ||
    host.startsWith("admin.") ||
    host.includes("admin.omnigrc.co") ||
    host.includes("admin.omnigrc.com");

  // =========================================================================
  // 1. PUBLIC MARKETING DOMAIN (omnigrc.co)
  // =========================================================================
  if (!isAdminDomain) {
    // Hide /admin routes from public marketing site
    if (pathname.startsWith("/admin")) {
      const adminTarget = process.env.NEXT_PUBLIC_ADMIN_URL || "https://admin.omnigrc.co";
      return NextResponse.redirect(`${adminTarget}/admin/login`, 307);
    }
    return NextResponse.next();
  }

  // =========================================================================
  // 2. DEDICATED ADMIN SUBDOMAIN (admin.omnigrc.co)
  // =========================================================================
  if (isAdminDomain) {
    // Allow static assets, Next internal files, icons, and API routes
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname.includes(".") ||
      pathname === "/icon.svg" ||
      pathname === "/favicon.ico"
    ) {
      return NextResponse.next();
    }

    // Root of admin domain redirects to /admin/login
    if (pathname === "/") {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // Isolate admin surface: restrict non-admin paths on admin.omnigrc.co
    if (!pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"
  ]
};
