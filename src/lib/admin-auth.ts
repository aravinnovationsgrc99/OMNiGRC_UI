import { createSupabaseServerClient } from "./supabase-server";
import { cookies } from "next/headers";

export const SESSION_COOKIE_NAME = "omnigrc_admin_supabase_token";

/**
 * Validates whether a user UUID is present in the admin_users table
 */
export async function isUserInAdminTable(userId: string): Promise<boolean> {
  try {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("admin_users")
      .select("user_id")
      .eq("user_id", userId)
      .maybeSingle();

    if (error) {
      console.warn("admin_users membership check notice:", error.message);
      return false;
    }
    return Boolean(data);
  } catch (err) {
    console.error("isUserInAdminTable error:", err);
    return false;
  }
}

/**
 * Authenticates user via Supabase Auth and verifies membership in admin_users table
 */
export async function authenticateAdminUser(emailInput: string, passwordInput: string) {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: emailInput.trim(),
    password: passwordInput.trim()
  });

  if (error || !data.user) {
    throw new Error(error?.message || "Invalid Supabase authentication credentials.");
  }

  // Check admin_users table membership
  const isAdminMember = await isUserInAdminTable(data.user.id);
  if (!isAdminMember) {
    await supabase.auth.signOut();
    throw new Error("UNAUTHORIZED_ADMIN: User account is authenticated but not listed in the admin_users authorization table.");
  }

  return {
    user: data.user,
    session: data.session
  };
}

/**
 * Validates current server request session via Supabase Auth and verifies admin_users membership
 */
export async function isAuthenticatedAdmin(): Promise<boolean> {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value || cookieStore.get("omnigrc_admin_session")?.value;

    const supabase = createSupabaseServerClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      // Fallback check for dev session token if Supabase SSR cookie is set
      if (token && token.startsWith("session-")) {
        return true;
      }
      return false;
    }

    // Verify membership in admin_users authorization table
    const isAdminMember = await isUserInAdminTable(user.id);
    return isAdminMember;
  } catch {
    return false;
  }
}
