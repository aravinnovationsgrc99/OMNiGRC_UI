import { createSupabaseServerClient, getSupabaseServiceRoleClient } from "./supabase-server";
import { createSupabaseBrowserClient } from "./supabase-client";

export function getSupabasePublicClient() {
  if (typeof window !== "undefined") {
    return createSupabaseBrowserClient();
  }
  return createSupabaseServerClient();
}

export { createSupabaseServerClient, createSupabaseBrowserClient, getSupabaseServiceRoleClient };
