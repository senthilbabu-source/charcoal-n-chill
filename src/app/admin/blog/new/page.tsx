import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogForm } from "@/components/admin/BlogForm";

export default function NewBlogPage() {
    return (
        <div className="min-h-screen bg-dark-primary text-white">
            <Header />
            <main className="pt-32 pb-24 container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gold-primary to-white mb-4">
                        Admin Dashboard
                    </h1>
                    <p className="text-gray-400">Post new content to the Charcoal N Chill blog.</p>
                </div>

                <BlogForm />
            </main>
            <Footer />
        </div>
    );
}
