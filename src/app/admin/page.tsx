import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LineChart, PenTool, LayoutDashboard } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-dark-primary text-white">
            <Header />
            <main className="pt-32 pb-24 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-gold-primary/10 border border-gold-primary/20 mb-6">
                            <LayoutDashboard className="w-8 h-8 text-gold-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gold-primary to-white mb-4">
                            Admin Dashboard
                        </h1>
                        <p className="text-gray-400">Manage your website content and analytics.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* SEO Analytics Card */}
                        <Link href="/admin/seo" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-dark-secondary p-8 hover:border-gold-primary/50 transition-all duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <LineChart size={100} />
                            </div>
                            <div className="relative z-10 font-bold">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <LineChart className="text-blue-400" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">SEO & Analytics</h3>
                                <p className="text-gray-400 text-sm mb-6">
                                    View Google Search Console performance, keywords, and traffic stats.
                                </p>
                                <span className="inline-flex items-center text-sm font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
                                    View Analytics →
                                </span>
                            </div>
                        </Link>

                        {/* Blog Management Card */}
                        <Link href="/admin/blog/new" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-dark-secondary p-8 hover:border-gold-primary/50 transition-all duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <PenTool size={100} className="text-brand-red" />
                            </div>
                            <div className="relative z-10 font-bold">
                                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <PenTool className="text-brand-red" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Blog Management</h3>
                                <p className="text-gray-400 text-sm mb-6">
                                    Write and publish new articles, updates, and news for your customers.
                                </p>
                                <span className="inline-flex items-center text-sm font-bold text-brand-red group-hover:translate-x-1 transition-transform">
                                    Write New Post →
                                </span>
                            </div>
                        </Link>

                        {/* SEO Task Tracker Card */}
                        <Link href="/admin/seo-tracker" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-dark-secondary p-8 hover:border-gold-primary/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <PenTool size={100} className="text-green-500" />
                            </div>
                            <div className="relative z-10 font-bold">
                                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <PenTool className="text-green-500" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">SEO Task Tracker</h3>
                                <p className="text-gray-400 text-sm mb-6">
                                    Manage your 100+ point SEO checklist, track progress, and organize local citations.
                                </p>
                                <span className="inline-flex items-center text-sm font-bold text-green-500 group-hover:translate-x-1 transition-transform">
                                    Track Progress →
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
