"use client";

import { useActionState, useState } from "react";
import { createBlogPost } from "@/app/actions/blog";
import { Button } from "@/components/ui/Button";
import { Loader2 } from "lucide-react";
import { categories } from "@/data/blog";

const initialState = {
    success: false,
    message: ""
};

export function BlogForm() {
    // Correct usage of useActionState for Next.js 15+ / React 19
    const [state, formAction, isPending] = useActionState(createBlogPost, initialState);
    const [preview, setPreview] = useState<string | null>(null);

    return (
        <form action={formAction} className="bg-dark-secondary border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-gold-primary mb-6 border-b border-white/5 pb-4">
                Create New Blog Post
            </h2>

            {/* Status Message */}
            {state?.message && (
                <div className={`p-4 rounded-lg text-sm font-medium ${state.success ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
                    {state.message}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/50 transition-all placeholder:text-gray-600"
                        placeholder="Enter catchy title..."
                    />
                </div>

                {/* Author */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Author</label>
                    <input
                        type="text"
                        name="author"
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-primary/50 transition-all"
                        placeholder="e.g. Hookah Master"
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Date</label>
                    <input
                        type="text"
                        name="date"
                        required
                        defaultValue={new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-primary/50 transition-all"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                    <select
                        name="category"
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-primary/50 transition-all appearance-none cursor-pointer"
                    >
                        {categories.filter(c => c !== "All").map(c => (
                            <option key={c} value={c} className="bg-dark-secondary">{c}</option>
                        ))}
                    </select>
                </div>

                {/* Read Time */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Min Read</label>
                    <input
                        type="text"
                        name="readTime"
                        required
                        defaultValue="5 min read"
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-primary/50 transition-all"
                    />
                </div>

                {/* Image Upload */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Cover Image</label>
                    <div className="border border-dashed border-white/20 rounded-lg p-8 text-center hover:border-gold-primary/50 transition-colors bg-black/40">
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            id="image-upload"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    setPreview(URL.createObjectURL(file));
                                }
                            }}
                        />
                        <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center justify-center gap-2">
                            {preview ? (
                                <div className="relative w-full max-w-md h-48 rounded-lg overflow-hidden border border-white/10">
                                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                        <span className="text-white bg-black/50 px-3 py-1 rounded-full text-sm">Change Image</span>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                                    </div>
                                    <span className="text-gold-primary font-bold">Click to Upload</span>
                                    <span className="text-gray-500 text-sm">SVG, PNG, JPG or GIF (Max 800x400px recommended)</span>
                                </>
                            )}
                        </label>
                    </div>
                </div>

                {/* Excerpt */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Excerpt (Short Summary)</label>
                    <textarea
                        name="excerpt"
                        required
                        rows={2}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-primary/50 transition-all resize-none"
                        placeholder="Brief summary for the card..."
                    />
                </div>

                {/* Content (HTML) - Simple Textarea for now */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                        Content (HTML Supported)
                        <span className="ml-2 text-xs text-gray-500 font-normal">Use &lt;p&gt;, &lt;h3&gt;, &lt;ul&gt; tags</span>
                    </label>
                    <textarea
                        name="content"
                        required
                        rows={12}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-gold-primary/50 transition-all"
                        placeholder="<p>Write your blog content here...</p>"
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/5 flex gap-4 justify-end">
                <Button type="button" variant="outline" className="opacity-70 hover:opacity-100">
                    Cancel
                </Button>
                <Button
                    type="submit"
                    disabled={isPending}
                    className="bg-gold-primary text-black font-bold hover:bg-gold-light min-w-[150px]"
                >
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Publishing...
                        </>
                    ) : (
                        "Publish Post"
                    )}
                </Button>
            </div>
        </form>
    );
}
