import { BlogPost, PostFilterOptions, PostStatus } from "./blog-types";
import { getSupabasePublicClient } from "./supabase";
import seedPosts from "../data/posts.json";

/**
 * Calculates estimated reading time (200 wpm)
 */
export function calculateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

/**
 * Normalizes text into an SEO URL slug
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Converts Supabase snake_case DB row to TypeScript BlogPost camelCase interface
 */
export function mapDbRowToBlogPost(row: any): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt || "",
    content: row.content || "",
    coverImage: row.cover_image || "",
    coverImageAlt: row.cover_image_alt || row.title,
    author: typeof row.author === "string" ? JSON.parse(row.author) : row.author || { name: "OMNiGRC Editorial Team", role: "Compliance & Risk Operations" },
    category: row.category || "GRC Operations",
    tags: Array.isArray(row.tags) ? row.tags : [],
    readingTime: row.reading_time || calculateReadingTime(row.content || ""),
    status: row.status as PostStatus,
    publishedAt: row.published_at || "",
    updatedAt: row.updated_at || row.created_at || "",
    createdAt: row.created_at || "",
    seoTitle: row.seo_title || `${row.title} | OMNiGRC`,
    seoDescription: row.seo_description || row.excerpt || "",
    ogImage: row.og_image || row.cover_image || ""
  };
}

/**
 * Converts TypeScript BlogPost to Supabase snake_case DB object
 */
export function mapBlogPostToDbRow(post: Partial<BlogPost> & { title: string; content: string }) {
  const now = new Date().toISOString();
  return {
    ...(post.id ? { id: post.id } : {}),
    title: post.title.trim(),
    slug: post.slug ? generateSlug(post.slug) : generateSlug(post.title),
    excerpt: post.excerpt || "",
    content: post.content,
    cover_image: post.coverImage || "",
    cover_image_alt: post.coverImageAlt || post.title,
    author: post.author || { name: "OMNiGRC Editorial Team", role: "Compliance & Risk Operations" },
    category: post.category || "GRC Operations",
    tags: post.tags || [],
    reading_time: calculateReadingTime(post.content),
    status: post.status || "DRAFT",
    published_at: post.status === "PUBLISHED" ? (post.publishedAt || now) : null,
    updated_at: now,
    seo_title: post.seoTitle || `${post.title} | OMNiGRC`,
    seo_description: post.seoDescription || post.excerpt || "",
    og_image: post.ogImage || post.coverImage || ""
  };
}

/**
 * Retrieves all posts strictly from Supabase database
 */
export async function getAllPosts(includeUnpublished = false): Promise<BlogPost[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error("SUPABASE_CONFIG_ERROR: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables must be configured.");
  }

  const client = getSupabasePublicClient();
  let query = client.from("blog_posts").select("*");

  if (!includeUnpublished) {
    query = query.eq("status", "PUBLISHED").order("published_at", { ascending: false });
  } else {
    query = query.order("created_at", { ascending: false });
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`SUPABASE_QUERY_ERROR: Failed to retrieve blog posts from database — ${error.message}`);
  }

  return (data || []).map(mapDbRowToBlogPost);
}

/**
 * Returns explicit static seed dataset (used ONLY for database seeding/initialization)
 */
export function getSeedPosts(): BlogPost[] {
  return (seedPosts as any[]).map(mapDbRowToBlogPost);
}

/**
 * Filters posts based on category, tag, search, or status
 */
export async function getFilteredPosts(options: PostFilterOptions, includeUnpublished = false): Promise<BlogPost[]> {
  let posts = await getAllPosts(includeUnpublished);

  if (options.status && includeUnpublished) {
    posts = posts.filter((p) => p.status === options.status);
  }

  if (options.category && options.category !== "All") {
    posts = posts.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
  }

  if (options.tag) {
    posts = posts.filter((p) => p.tags.some((t) => t.toLowerCase() === options.tag?.toLowerCase()));
  }

  if (options.search) {
    const q = options.search.toLowerCase();
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  return posts;
}

/**
 * Retrieves single post by slug
 */
export async function getPostBySlug(slug: string, includeUnpublished = false): Promise<BlogPost | null> {
  const posts = await getAllPosts(includeUnpublished);
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;
  if (!includeUnpublished && post.status !== "PUBLISHED") return null;
  return post;
}

/**
 * Retrieves single post by ID
 */
export async function getPostById(id: string): Promise<BlogPost | null> {
  const posts = await getAllPosts(true);
  return posts.find((p) => p.id === id) || null;
}

/**
 * Saves post to Supabase database (Insert or Update)
 */
export async function savePost(postInput: Partial<BlogPost> & { title: string; content: string }): Promise<BlogPost> {
  const client = getSupabasePublicClient();
  const dbRow = mapBlogPostToDbRow(postInput);

  if (postInput.id) {
    // UPDATE
    const { data, error } = await client
      .from("blog_posts")
      .update(dbRow)
      .eq("id", postInput.id)
      .select()
      .single();

    if (error) {
      throw new Error(`SUPABASE_SAVE_ERROR: ${error.message}`);
    }
    return mapDbRowToBlogPost(data);
  } else {
    // INSERT
    const { data, error } = await client
      .from("blog_posts")
      .insert([dbRow])
      .select()
      .single();

    if (error) {
      throw new Error(`SUPABASE_SAVE_ERROR: ${error.message}`);
    }
    return mapDbRowToBlogPost(data);
  }
}

/**
 * Deletes post from Supabase database
 */
export async function deletePost(id: string): Promise<boolean> {
  const client = getSupabasePublicClient();
  const { error } = await client.from("blog_posts").delete().eq("id", id);
  if (error) {
    console.error("Supabase deletePost error:", error);
    return false;
  }
  return true;
}
