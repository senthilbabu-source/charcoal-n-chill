import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, LayoutDashboard, BarChart, ShieldCheck } from "lucide-react";



export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans">
            <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#0a0a0a] border-r border-white/5 p-6 space-y-10 z-50 hidden lg:block">
                <Link href="/" className="flex items-center gap-3">


                    {/* Logo */}
                    <div className="relative h-10 w-32 flex-shrink-0">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                            sizes="128px"
                        />
                    </div>
                    <span className="font-heading font-bold uppercase tracking-widest text-xs hidden xl:block">Admin Panel</span>
                </Link>

                <nav className="space-y-2">
                    <Link href="/admin/seo" className="flex items-center gap-3 px-4 py-3 bg-gold/10 text-gold rounded-xl border border-gold/20">
                        <LayoutDashboard size={20} />
                        <span className="font-bold text-sm">SEO Dashboard</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-white transition-colors">
                        <BarChart size={20} />
                        <span className="font-bold text-sm">Analytics</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-white transition-colors">
                        <ShieldCheck size={20} />
                        <span className="font-bold text-sm">Security</span>
                    </Link>
                </nav>

                <div className="absolute bottom-10 left-6 right-6 p-6 bg-gold rounded-3xl text-black">
                    <h4 className="font-black uppercase text-xs mb-2">Ready to Go?</h4>
                    <p className="text-[10px] font-bold opacity-70 mb-4 tracking-tight">Your SEO score is currently being calculated.</p>
                    <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase">
                        <ChevronLeft size={14} /> Back to Site
                    </Link>
                </div>
            </aside>

            <main className="lg:pl-64 min-h-screen">
                <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-black/50 backdrop-blur-md sticky top-0 z-40">
                    <h1 className="font-heading font-black uppercase tracking-widest text-sm">SEO Performance Audit</h1>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold font-black">AD</div>
                    </div>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
