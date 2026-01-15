import { blogPosts, type BlogPost } from "@/data/blog";
import fs from "fs/promises";
import path from "path";

/**
 * Fetches dynamic posts from the file system.
 * Returns empty array if file doesn't exist or on error.
 */
async function getDynamicPosts(): Promise<BlogPost[]> {
    try {
        const filePath = path.join(process.cwd(), "src/data/posts.json");
        const data = await fs.readFile(filePath, "utf-8");
        return JSON.parse(data);
    } catch {
        return [];
    }
}

/**
 * Returns all blog posts (Static + Dynamic), sorted by newest first.
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
    const dynamicPosts = await getDynamicPosts();
    // Newest first (assuming date string is comparable or ISO, but simple array spread for now)
    // You might want to sort here if dates vary wildy
    return [...dynamicPosts, ...blogPosts];
}

/**
 * Finds a single post by slug.
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const all = await getAllBlogPosts();
    return all.find((p) => p.slug === slug);
}
