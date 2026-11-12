/**
 * OMNiGRC Google Ads & UTM Attribution Helper
 * Centralizes capture, cookie persistence, and extraction for paid search and marketing campaigns.
 */

export const ATTRIBUTION_COOKIE_NAME = "omnigrc_attribution";
export const ATTRIBUTION_COOKIE_MAX_AGE = 90 * 24 * 60 * 60; // 90 days in seconds (7,776,000s)

export interface CampaignAttributionData {
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
  gclid?: string | null;
  landing_page?: string | null;
  captured_at?: string | null;
}

export interface CampaignAttributionCookie extends CampaignAttributionData {
  first_touch?: CampaignAttributionData | null;
}

export const CAMPAIGN_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
] as const;

export type CampaignParamKey = (typeof CAMPAIGN_PARAM_KEYS)[number];

/**
 * Sanitizes and truncates a parameter string to prevent header/cookie bloat or injection.
 */
export function sanitizeParam(value?: string | null, maxLength = 255): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, maxLength);
}

/**
 * Extracts and sanitizes campaign parameters from a URLSearchParams object.
 */
export function extractCampaignParams(
  params: URLSearchParams | { get: (name: string) => string | null }
): CampaignAttributionData {
  const extracted: CampaignAttributionData = {};

  for (const key of CAMPAIGN_PARAM_KEYS) {
    const rawVal = params.get(key);
    const sanitized = sanitizeParam(rawVal);
    if (sanitized) {
      extracted[key] = sanitized;
    }
  }

  return extracted;
}

/**
 * Returns true if at least one valid campaign parameter is present.
 */
export function hasCampaignParams(data: CampaignAttributionData): boolean {
  return CAMPAIGN_PARAM_KEYS.some((key) => Boolean(data[key]));
}

/**
 * Safely parses the JSON cookie string. Handles malformed, single-encoded, or double-encoded cookie values gracefully.
 */
export function parseAttributionCookie(rawCookie?: string | null): CampaignAttributionCookie | null {
  if (!rawCookie || typeof rawCookie !== "string") return null;

  try {
    let decoded = rawCookie.trim();
    // Safely unwrap multiple URL encodings if present
    for (let i = 0; i < 2; i++) {
      if (decoded.includes("%")) {
        try {
          decoded = decodeURIComponent(decoded);
        } catch {
          break;
        }
      }
    }

    const parsed = JSON.parse(decoded);
    if (typeof parsed !== "object" || parsed === null) return null;

    // Sanitize parsed keys
    const sanitized: CampaignAttributionCookie = {};
    for (const key of CAMPAIGN_PARAM_KEYS) {
      sanitized[key] = sanitizeParam(parsed[key]);
    }
    sanitized.landing_page = sanitizeParam(parsed.landing_page, 500);
    sanitized.captured_at = sanitizeParam(parsed.captured_at, 50);

    if (parsed.first_touch && typeof parsed.first_touch === "object") {
      const ft: CampaignAttributionData = {};
      for (const key of CAMPAIGN_PARAM_KEYS) {
        ft[key] = sanitizeParam(parsed.first_touch[key]);
      }
      ft.landing_page = sanitizeParam(parsed.first_touch.landing_page, 500);
      ft.captured_at = sanitizeParam(parsed.first_touch.captured_at, 50);
      sanitized.first_touch = ft;
    }

    return sanitized;
  } catch {
    return null;
  }
}

/**
 * Serializes the attribution object into a JSON string for cookie storage.
 * Next.js cookies API will handle HTTP transport encoding automatically.
 */
export function serializeAttributionCookie(data: CampaignAttributionCookie): string {
  return JSON.stringify(data);
}

/**
 * Merges newly captured parameters with existing cookie data.
 * Adheres to:
 * 1. Latest-paid-click policy: Top-level fields are updated with current/latest click.
 * 2. First-touch preservation: Preserves original first-touch attribution unchanged.
 */
export function mergeAttribution(
  existing: CampaignAttributionCookie | null,
  incoming: CampaignAttributionData,
  landingPage?: string
): CampaignAttributionCookie {
  const timestamp = new Date().toISOString();
  const page = sanitizeParam(landingPage, 500) || "/";

  // Build current latest touch payload
  const currentTouch: CampaignAttributionData = {
    utm_source: incoming.utm_source || existing?.utm_source || null,
    utm_medium: incoming.utm_medium || existing?.utm_medium || null,
    utm_campaign: incoming.utm_campaign || existing?.utm_campaign || null,
    utm_term: incoming.utm_term || existing?.utm_term || null,
    utm_content: incoming.utm_content || existing?.utm_content || null,
    gclid: incoming.gclid || existing?.gclid || null,
    landing_page: page,
    captured_at: timestamp,
  };

  // Determine first touch
  let firstTouch: CampaignAttributionData;
  if (existing?.first_touch && hasCampaignParams(existing.first_touch)) {
    // Preserve existing first touch
    firstTouch = existing.first_touch;
  } else if (existing && hasCampaignParams(existing)) {
    // Migrate legacy cookie format to first_touch
    firstTouch = {
      utm_source: existing.utm_source,
      utm_medium: existing.utm_medium,
      utm_campaign: existing.utm_campaign,
      utm_term: existing.utm_term,
      utm_content: existing.utm_content,
      gclid: existing.gclid,
      landing_page: existing.landing_page || page,
      captured_at: existing.captured_at || timestamp,
    };
  } else {
    // Incoming is the very first touch
    firstTouch = { ...currentTouch };
  }

  return {
    ...currentTouch,
    first_touch: firstTouch,
  };
}

/**
 * Client-side helper to read attribution from document.cookie.
 */
export function getStoredAttributionClient(): CampaignAttributionCookie | null {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie ? document.cookie.split("; ") : [];
  for (const cookie of cookies) {
    const [name, ...rest] = cookie.split("=");
    if (name === ATTRIBUTION_COOKIE_NAME) {
      return parseAttributionCookie(rest.join("="));
    }
  }

  return null;
}

/**
 * Standard cookie options for setting the attribution cookie.
 */
export function getAttributionCookieOptions() {
  return {
    name: ATTRIBUTION_COOKIE_NAME,
    maxAge: ATTRIBUTION_COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    httpOnly: false, // Must be readable by client-side JS on /demo
  };
}

