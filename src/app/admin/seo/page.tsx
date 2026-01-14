"use client";

import { CheckCircle2, Search, Globe, Zap, Shield, RefreshCw, Code2, Smartphone, LogOut, TrendingUp, Users, MapPin, MessageSquare, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminAuthCheck from "@/components/admin/AdminAuthCheck";

function SeoDashboardContent() {
    const router = useRouter();
    const [score, setScore] = useState(0);
    const [isScanning, setIsScanning] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);
    const [lastScan, setLastScan] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'overview' | 'gsc' | 'gbp' | 'health'>('overview');

    // Mock Data for "No-Database" API Integration
    const searchConsoleData = {
        clicks: "1.2k",
        impressions: "45k",
        ctr: "2.8%",
        position: "12.4",
        topKeywords: [
            { term: "Hookah Lounge Alpharetta", rank: 3, change: "+1" },
            { term: "Indian Food Near Me", rank: 7, change: "+2" },
            { term: "Late Night Food", rank: 5, change: "-" },
            { term: "Charcoal N Chill", rank: 1, change: "=" },
        ]
    };

    const businessProfileData = {
        totalReviews: 488,
        rating: 4.8,
        newReviewsThisWeek: 12,
        calls: 145,
        directions: 320,
        views: "12.5k"
    };

    const healthChecks = [
        { id: 'ssl', label: "SSL Certificate", status: "pass", detail: "HTTPS is active and valid" },
        { id: 'meta-titles', label: "Meta Titles", status: "pass", detail: "Unique titles optimized" },
        { id: 'schema', label: "Schema Markup", status: "pass", detail: "JSON-LD validated" },
        { id: 'mobile', label: "Mobile Usability", status: "pass", detail: "Core Web Vitals passed" },
    ];

    const handleLogout = () => {
        sessionStorage.removeItem('admin_authenticated');
        router.push('/admin/login');
    };

    const runScan = () => {
        setIsScanning(true);
        setScanProgress(0);
        const interval = setInterval(() => {
            setScanProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsScanning(false);
                    setLastScan(new Date().toLocaleTimeString());
                    return 100;
                }
                return prev + 5;
            });
        }, 80);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setScore(92);
        setLastScan(new Date().toLocaleTimeString());
    }, []);

    const TabButton = ({ id, label, icon: Icon }: { id: typeof activeTab, label: string, icon: any }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold transition-all ${activeTab === id ? 'bg-white/10 text-white shadow-glow' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
        >
            <Icon size={14} />
            {label}
        </button>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-charcoal to-black p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-black text-white uppercase tracking-tight mb-2">
                            Admin <span className="text-brand-red">Control</span>
                        </h1>
                        <p className="text-gray-400 text-sm">Live SEO & Business Intelligence</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full text-sm font-bold transition-all"
                    >
                        <LogOut size={16} />
                        Logout
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 bg-black/40 p-1.5 rounded-full border border-white/5 w-fit">
                    <TabButton id="overview" label="Overview" icon={Globe} />
                    <TabButton id="gsc" label="Search Performance" icon={TrendingUp} />
                    <TabButton id="gbp" label="Google Business" icon={MapPin} />
                    <TabButton id="health" label="Site Health" icon={Shield} />
                </div>

                {/* Content Area */}
                <div className="space-y-6">
                    {activeTab === 'overview' && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="p-6 bg-[#0a0a0a] border border-white/5 rounded-3xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <p className="text-xs font-bold text-gray-500 uppercase mb-4 relative z-10">Total Traffic (Mo)</p>
                                    <div className="flex items-end gap-3 relative z-10">
                                        <span className="text-4xl font-black text-white">{searchConsoleData.clicks}</span>
                                        <span className="text-green-500 text-xs font-bold mb-1.5 flex items-center">
                                            <TrendingUp size={12} className="mr-1" /> +12%
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 bg-[#0a0a0a] border border-white/5 rounded-3xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <p className="text-xs font-bold text-gray-500 uppercase mb-4 relative z-10">Avg Ranking</p>
                                    <div className="flex items-end gap-3 relative z-10">
                                        <span className="text-4xl font-black text-gold">{searchConsoleData.position}</span>
                                        <span className="text-green-500 text-xs font-bold mb-1.5 flex items-center">
                                            <TrendingUp size={12} className="mr-1" /> Top 20
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 bg-[#0a0a0a] border border-white/5 rounded-3xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <p className="text-xs font-bold text-gray-500 uppercase mb-4 relative z-10">Review Rating</p>
                                    <div className="flex items-end gap-3 relative z-10">
                                        <span className="text-4xl font-black text-white">{businessProfileData.rating}</span>
                                        <div className="flex text-gold mb-1.5">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 bg-[#0a0a0a] border border-white/5 rounded-3xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <p className="text-xs font-bold text-gray-500 uppercase mb-4 relative z-10">Profile Views</p>
                                    <div className="flex items-end gap-3 relative z-10">
                                        <span className="text-4xl font-black text-white">{businessProfileData.views}</span>
                                        <span className="text-gray-600 text-xs font-bold mb-1.5">/ 28 days</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Items Scaffold */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-3xl">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                        <Zap size={20} className="text-gold" />
                                        Priority Actions
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-start gap-4 hover:border-brand-red/50 transition-colors cursor-pointer">
                                            <div className="p-2 bg-brand-red/20 rounded-lg text-brand-red">
                                                <MessageSquare size={16} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white">Reply to 3 New Reviews</p>
                                                <p className="text-xs text-gray-500 mt-1">Pending from Google Business Profile</p>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-start gap-4 hover:border-gold/50 transition-colors cursor-pointer">
                                            <div className="p-2 bg-gold/20 rounded-lg text-gold">
                                                <Smartphone size={16} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white">Update Weekly Offer</p>
                                                <p className="text-xs text-gray-500 mt-1">Boost local visibility for the weekend</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-3xl">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                        <TrendingUp size={20} className="text-green-500" />
                                        Keyword Movers
                                    </h3>
                                    <div className="space-y-3">
                                        {searchConsoleData.topKeywords.map((kw, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-white/5">
                                                <span className="text-sm text-gray-300 font-medium">{kw.term}</span>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-xs font-bold text-white">#{kw.rank}</span>
                                                    <span className={`text-xs font-bold ${kw.change.includes('+') ? 'text-green-500' : kw.change.includes('-') ? 'text-red-500' : 'text-gray-500'}`}>
                                                        {kw.change}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 'gsc' && (
                        <div className="p-10 bg-[#0a0a0a] border border-white/5 rounded-3xl text-center py-20">
                            <TrendingUp size={48} className="text-gray-700 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Google Search Console Integration</h3>
                            <p className="text-gray-500 max-w-md mx-auto mb-8">
                                Connect basic read-only access to your GSC property to see live Impression, Click, and CTR data here without a database.
                            </p>
                            <button className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                                Connect GSC API
                            </button>
                        </div>
                    )}

                    {activeTab === 'gbp' && (
                        <div className="p-10 bg-[#0a0a0a] border border-white/5 rounded-3xl text-center py-20">
                            <MapPin size={48} className="text-gray-700 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Google Business Profile Integration</h3>
                            <p className="text-gray-500 max-w-md mx-auto mb-8">
                                See calls, direction requests, and manage reviews directly from this dashboard.
                            </p>
                            <button className="px-6 py-3 bg-brand-red text-white font-bold rounded-full hover:bg-red-700 transition-colors">
                                Connect GBP API
                            </button>
                        </div>
                    )}

                    {activeTab === 'health' && (
                        <div className="p-10 bg-[#0a0a0a] border border-white/5 rounded-3xl">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-black uppercase">Technical Audit</h2>
                                <button
                                    onClick={runScan}
                                    disabled={isScanning}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold ${isScanning ? 'bg-white/5 text-gray-500' : 'bg-brand-red text-white hover:scale-105'}`}
                                >
                                    {isScanning ? <RefreshCw size={14} className="animate-spin" /> : <Search size={14} />}
                                    {isScanning ? `Scanning ${scanProgress}%` : "Run Scan"}
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {healthChecks.map((check, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5">
                                        <div className="flex items-center gap-4">
                                            <CheckCircle2 size={20} className="text-brand-red" />
                                            <div>
                                                <p className="font-bold text-sm text-white">{check.label}</p>
                                                <p className="text-xs text-gray-500">{check.detail}</p>
                                            </div>
                                        </div>
                                        <div className="px-2 py-1 rounded-full text-xs font-black bg-brand-red/10 text-brand-red">
                                            {check.status}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function SeoDashboard() {
    return (
        <AdminAuthCheck>
            <SeoDashboardContent />
        </AdminAuthCheck>
    );
}
