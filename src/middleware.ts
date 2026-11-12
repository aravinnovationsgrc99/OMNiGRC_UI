import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  ATTRIBUTION_COOKIE_NAME,
  extractCampaignParams,
  hasCampaignParams,
  parseAttributionCookie,
  mergeAttribution,
  serializeAttributionCookie,
  getAttributionCookieOptions
} from "@/lib/attribution";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // Detect admin domain via environment variable or hostname pattern
  const isAdminDomain =
    process.env.NEXT_PUBLIC_SITE_MODE === "admin" ||
    host.startsWith("admin.") ||
    host.includes("admin.omnigrc.co");

  // =========================================================================
  // 1. DEDICATED ADMIN SUBDOMAIN (admin.omnigrc.co)
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

  // =========================================================================
  // 2. PUBLIC MARKETING DOMAIN (omnigrc.co)
  // =========================================================================
  // Hide /admin routes from public marketing site
  if (pathname.startsWith("/admin")) {
    const adminTarget = process.env.NEXT_PUBLIC_ADMIN_URL || "https://admin.omnigrc.co";
    return NextResponse.redirect(`${adminTarget}/admin/login`, 307);
  }

  // Bypass attribution redirect logic for internal assets, APIs, and static resources
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico" ||
    pathname === "/icon.svg"
  ) {
    return NextResponse.next();
  }

  // Check for campaign parameters (utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid)
  const incomingParams = extractCampaignParams(request.nextUrl.searchParams);
  const isCampaignVisit = hasCampaignParams(incomingParams);

  if (isCampaignVisit) {
    const rawCookie = request.cookies.get(ATTRIBUTION_COOKIE_NAME)?.value;
    const existingAttribution = parseAttributionCookie(rawCookie);
    const updatedAttribution = mergeAttribution(existingAttribution, incomingParams, pathname);
    const serializedCookie = serializeAttributionCookie(updatedAttribution);
    const cookieOpts = getAttributionCookieOptions();

    // Prevent redirect loops:
    // If the visitor is already on /demo, DO NOT redirect.
    // Simply attach the updated attribution cookie to the response and proceed.
    if (pathname === "/demo") {
      const response = NextResponse.next();
      response.cookies.set({
        name: cookieOpts.name,
        value: serializedCookie,
        maxAge: cookieOpts.maxAge,
        path: cookieOpts.path,
        sameSite: cookieOpts.sameSite,
        secure: cookieOpts.secure,
        httpOnly: cookieOpts.httpOnly
      });
      return response;
    }

    // When arriving at any non-/demo page with campaign parameters:
    // Capture attribution in cookie and redirect to /demo
    const redirectUrl = new URL("/demo", request.url);
    redirectUrl.search = request.nextUrl.search; // Preserve query parameters for client tag visibility

    const response = NextResponse.redirect(redirectUrl, 307);
    response.cookies.set({
      name: cookieOpts.name,
      value: serializedCookie,
      maxAge: cookieOpts.maxAge,
      path: cookieOpts.path,
      sameSite: cookieOpts.sameSite,
      secure: cookieOpts.secure,
      httpOnly: cookieOpts.httpOnly
    });
    return response;
  }

  // Visitors without campaign parameters browse normally without redirect or cookie changes
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"
  ]
};
