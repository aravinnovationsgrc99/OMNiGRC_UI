-- =========================================================================
-- OMNiGRC DEMO & WALKTHROUGH REQUEST MANAGEMENT MIGRATION
-- Target Database: Dedicated Blog / Admin Supabase Project
-- Instructions: Copy and paste this single SQL script into the Supabase SQL Editor
-- =========================================================================

-- 1. Create demo_requests Table
CREATE TABLE IF NOT EXISTS public.demo_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT NOT NULL DEFAULT 'N/A',
    phone TEXT NULL,
    message TEXT NULL,
    request_type TEXT NOT NULL CHECK (request_type IN ('DEMO', 'WALKTHROUGH', 'CONTACT', 'NEWSLETTER')),
    source_page TEXT NOT NULL DEFAULT '/',
    status TEXT NOT NULL DEFAULT 'NEW' CHECK (status IN ('NEW', 'CONTACTED', 'CLOSED')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Performance Indexes
CREATE INDEX IF NOT EXISTS idx_demo_requests_created_at ON public.demo_requests (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_demo_requests_status ON public.demo_requests (status);
CREATE INDEX IF NOT EXISTS idx_demo_requests_request_type ON public.demo_requests (request_type);
CREATE INDEX IF NOT EXISTS idx_demo_requests_email ON public.demo_requests (email);

-- 3. Automatic updated_at Timestamp Trigger
CREATE OR REPLACE FUNCTION public.handle_demo_requests_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_demo_requests_updated_at ON public.demo_requests;
CREATE TRIGGER trg_demo_requests_updated_at
    BEFORE UPDATE ON public.demo_requests
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_demo_requests_updated_at();

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if re-running migration
DROP POLICY IF EXISTS "Public visitors insert demo requests" ON public.demo_requests;
DROP POLICY IF EXISTS "Admin users select demo requests" ON public.demo_requests;
DROP POLICY IF EXISTS "Admin users update demo requests" ON public.demo_requests;

-- 4a. PUBLIC INSERT POLICY:
-- Public visitors (anon & authenticated) can INSERT demo requests.
-- Public visitors are NOT permitted to SELECT, UPDATE, or DELETE requests.
CREATE POLICY "Public visitors insert demo requests"
    ON public.demo_requests
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- 4b. ADMIN SELECT POLICY:
-- Read access is strictly granted to authenticated users present in admin_users authorization table.
CREATE POLICY "Admin users select demo requests"
    ON public.demo_requests
    FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.admin_users
            WHERE public.admin_users.user_id = auth.uid()
        )
    );

-- 4c. ADMIN UPDATE POLICY:
-- Status update access is strictly granted to authenticated users present in admin_users authorization table.
CREATE POLICY "Admin users update demo requests"
    ON public.demo_requests
    FOR UPDATE
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.admin_users
            WHERE public.admin_users.user_id = auth.uid()
        )
    )
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.admin_users
            WHERE public.admin_users.user_id = auth.uid()
        )
    );
