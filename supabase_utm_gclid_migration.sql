-- =========================================================================
-- OMNiGRC GOOGLE ADS UTM & GCLID ATTRIBUTION SCHEMA MIGRATION
-- Adds 6 nullable attribution columns and performance indexes to demo_requests
-- Fully idempotent and non-destructive
-- =========================================================================

-- 1. Add Attribution Columns to public.demo_requests
ALTER TABLE public.demo_requests
    ADD COLUMN IF NOT EXISTS utm_source TEXT NULL,
    ADD COLUMN IF NOT EXISTS utm_medium TEXT NULL,
    ADD COLUMN IF NOT EXISTS utm_campaign TEXT NULL,
    ADD COLUMN IF NOT EXISTS utm_term TEXT NULL,
    ADD COLUMN IF NOT EXISTS utm_content TEXT NULL,
    ADD COLUMN IF NOT EXISTS gclid TEXT NULL;

-- 2. Create Performance & Analytics Indexes
CREATE INDEX IF NOT EXISTS idx_demo_requests_utm_source ON public.demo_requests (utm_source) WHERE utm_source IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_demo_requests_utm_campaign ON public.demo_requests (utm_campaign) WHERE utm_campaign IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_demo_requests_gclid ON public.demo_requests (gclid) WHERE gclid IS NOT NULL;

-- 3. Document Column Purposes
COMMENT ON COLUMN public.demo_requests.utm_source IS 'Identifies advertiser, site, or publication (e.g. google, linkedin)';
COMMENT ON COLUMN public.demo_requests.utm_medium IS 'Advertising or marketing medium (e.g. cpc, banner, email)';
COMMENT ON COLUMN public.demo_requests.utm_campaign IS 'Individual campaign name, promo code, or slogan (e.g. soc2_search)';
COMMENT ON COLUMN public.demo_requests.utm_term IS 'Search keyword or targeting term';
COMMENT ON COLUMN public.demo_requests.utm_content IS 'Differentiates ads or links pointing to the same URL (e.g. ad1, hero_cta)';
COMMENT ON COLUMN public.demo_requests.gclid IS 'Google Click Identifier for offline conversion tracking and attribution';
