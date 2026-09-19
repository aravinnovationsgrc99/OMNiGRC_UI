export type PostStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  coverImageAlt?: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  readingTime: string;
  status: PostStatus;
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
}

export interface PostFilterOptions {
  category?: string;
  tag?: string;
  search?: string;
  status?: PostStatus;
  limit?: number;
  offset?: number;
}

export interface AdminUser {
  id: string;
  username: string;
  role: "admin";
}

export interface AuthSession {
  user: AdminUser;
  expiresAt: string;
}
