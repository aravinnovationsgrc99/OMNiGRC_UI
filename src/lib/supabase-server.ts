import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { createClient as createStandardClient } from "@supabase/supabase-js";

export function createSupabaseServerClient() {
  const cookieStore = cookies();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    // If environment variables are omitted during local static build steps, return placeholder client
    return createStandardClient(
      "https://omnigrc-blog-placeholder.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2MDAwMDAwMDAsImV4cCI6MjAwMDAwMDAwMH0.placeholder"
    );
  }

  return createServerClient(url, anonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch {
          // Cookie set called from Server Component (ignored safely)
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value: "", ...options });
        } catch {
          // Cookie remove called from Server Component (ignored safely)
        }
      }
    }
  });
}

/**
 * DOCUMENTED SERVICE ROLE CLIENT:
 * Strictly used in explicit admin seeding or administrative CLI commands where elevated access is required.
 * NEVER IMPORTED INTO CLIENT COMPONENTS OR BUNDLES.
 */
export function getSupabaseServiceRoleClient() {
  if (typeof window !== "undefined") {
    throw new Error("SECURITY_VIOLATION: SUPABASE_SERVICE_ROLE_KEY cannot be invoked in browser environments.");
  }
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error("MISSING_SUPABASE_SERVICE_KEY: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set.");
  }

  return createStandardClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false }
  });
}
