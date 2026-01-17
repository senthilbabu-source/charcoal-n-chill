"use server";

import fs from "fs/promises";
import path from "path";
import { BlogPost } from "@/data/blog";
import { revalidatePath } from "next/cache";

const POSTS_FILE = path.join(process.cwd(), "src/data/posts.json");

export async function createBlogPost(prevState: any, formData: FormData) {
    try {
        const title = formData.get("title") as string;
        const excerpt = formData.get("excerpt") as string;
        const content = formData.get("content") as string;
        const category = formData.get("category") as string;
        const author = formData.get("author") as string;
        const date = formData.get("date") as string;
        const imageFile = formData.get("image") as File;
        const readTime = formData.get("readTime") as string;

        if (!title || !content || !author) {
            return { success: false, message: "Missing required fields" };
        }

        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");

        let imagePath = "/images/placeholder-blog.jpg";

        if (imageFile && imageFile.size > 0) {
            try {
                const buffer = Buffer.from(await imageFile.arrayBuffer());
                // Create unique filename
                const filename = `${Date.now()}-${imageFile.name.replace(/[^a-zA-Z0-9.]/g, "-")}`;
                const uploadDir = path.join(process.cwd(), "public/images/blog");

                // Ensure directory exists
                await fs.mkdir(uploadDir, { recursive: true });

                // Write file
                await fs.writeFile(path.join(uploadDir, filename), buffer);
                imagePath = `/images/blog/${filename}`;
            } catch (error) {
                console.error("Image upload failed:", error);
                // Fallback to placeholder or handle error
            }
        }

        const newPost: BlogPost = {
            id: Date.now().toString(),
            title,
            excerpt,
            content,
            category: category as any, // Type assertion for simplicity
            date,
            readTime,
            author,
            image: imagePath,
            slug
        };

        // Read existing posts
        let posts: BlogPost[] = [];
        try {
            const data = await fs.readFile(POSTS_FILE, "utf-8");
            posts = JSON.parse(data);
        } catch (error) {
            // File might not exist yet, which is fine
        }

        // Prepend new post
        posts.unshift(newPost);

        // Save back to file
        await fs.writeFile(POSTS_FILE, JSON.stringify(posts, null, 4));

        revalidatePath("/blog");
        return { success: true, message: "Blog post created successfully!" };
    } catch (error) {
        console.error("Failed to create blog post:", error);
        return { success: false, message: "Failed to save blog post." };
    }
}
