-- =========================================================================
-- OMNIGRC BLOG SYSTEM — SUPABASE DEDICATED DATABASE MIGRATION SCRIPT
-- Project: Dedicated Blog Supabase Project
-- =========================================================================

-- 1. Create Blog Posts Table
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL DEFAULT '',
  cover_image TEXT NOT NULL DEFAULT '',
  cover_image_alt TEXT DEFAULT '',
  author JSONB NOT NULL DEFAULT '{"name": "OMNiGRC Editorial Team", "role": "Compliance & Risk Operations"}'::jsonb,
  category TEXT NOT NULL DEFAULT 'GRC Operations',
  tags TEXT[] NOT NULL DEFAULT '{}',
  reading_time TEXT NOT NULL DEFAULT '5 min read',
  status TEXT NOT NULL DEFAULT 'DRAFT' CHECK (status IN ('DRAFT', 'PUBLISHED', 'ARCHIVED')),
  published_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ DEFAULT now(),
  seo_title TEXT DEFAULT '',
  seo_description TEXT DEFAULT '',
  og_image TEXT DEFAULT ''
);

-- 2. Create Admin Users Authorization Table
-- Only user_id UUIDs listed in this table are granted Admin management rights
CREATE TABLE IF NOT EXISTS public.admin_users (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Performance Indexes
CREATE INDEX IF NOT EXISTS idx_blog_posts_status_published ON public.blog_posts(status, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);

-- 3. Row Level Security (RLS) Setup for Database
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- NON-RECURSIVE RLS Policy for admin_users:
-- Authenticated users can determine their own membership without recursion
CREATE POLICY "Users can read own admin membership" ON public.admin_users
  FOR SELECT USING (auth.uid() = user_id);

-- Public READ Policy: Anonymous & public visitors can ONLY view published posts
CREATE POLICY "Public users can view published posts" ON public.blog_posts
  FOR SELECT USING (status = 'PUBLISHED');

-- Admin RLS Policies for blog_posts:
-- Only authenticated users present in admin_users table can SELECT, INSERT, UPDATE, or DELETE posts
CREATE POLICY "Admin users can select all posts" ON public.blog_posts
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
  );

CREATE POLICY "Admin users can insert posts" ON public.blog_posts
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
  );

CREATE POLICY "Admin users can update posts" ON public.blog_posts
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
  ) WITH CHECK (
    EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
  );

CREATE POLICY "Admin users can delete posts" ON public.blog_posts
  FOR DELETE USING (
    EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
  );

-- 4. Supabase Storage Setup (blog-images bucket)
INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS Policies:
-- Public can view images
CREATE POLICY "Public read blog images" ON storage.objects
  FOR SELECT USING (bucket_id = 'blog-images');

-- Only users listed in admin_users can upload, update, or delete images
CREATE POLICY "Admin users insert blog images" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'blog-images' AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
  );

CREATE POLICY "Admin users update blog images" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'blog-images' AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
  ) WITH CHECK (
    bucket_id = 'blog-images' AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
  );

CREATE POLICY "Admin users delete blog images" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'blog-images' AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
  );
