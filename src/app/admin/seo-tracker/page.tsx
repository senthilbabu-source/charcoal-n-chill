import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import SEOTaskTracker from "@/components/admin/SEOTaskTracker";
import { ArrowLeft } from "lucide-react";

export default function SEOTaskTrackerPage() {
    return (
        <div className="min-h-screen bg-dark-primary text-white">
            <Header />
            <main className="pt-32 pb-24 container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <Link href="/admin" className="inline-flex items-center text-gray-400 hover:text-gold-primary transition-colors mb-8">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Dashboard
                    </Link>

                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gold-primary to-white mb-4">
                            SEO Task Tracker
                        </h1>
                        <p className="text-gray-400">Track and manage your local SEO optimization journey.</p>
                    </div>
                    <SEOTaskTracker />
                </div>
            </main>
            <Footer />
        </div>
    );
}
