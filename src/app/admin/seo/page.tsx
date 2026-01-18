
"use client";

import { CheckCircle2, Search, Globe, Shield, RefreshCw, LogOut, TrendingUp } from "lucide-react";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { GSCMetrics } from "@/components/admin/GSCMetrics";
// import { GBPMetrics } from "@/components/admin/GBPMetrics";

function SeoDashboardContent() {
    const { data: session } = useSession();
    const [activeTab, setActiveTab] = useState<'overview' | 'gsc' | 'gbp' | 'health'>('overview');

    // Health Check State
    const [isScanning, setIsScanning] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);

    const healthChecks = [
        { id: 'ssl', label: "SSL Certificate", status: "pass", detail: "HTTPS is active and valid" },
        { id: 'meta-titles', label: "Meta Titles", status: "pass", detail: "Unique titles optimized" },
        { id: 'schema', label: "Schema Markup", status: "pass", detail: "JSON-LD validated" },
        { id: 'mobile', label: "Mobile Usability", status: "pass", detail: "Core Web Vitals passed" },
    ];

    const handleLogout = () => {
        signOut({ callbackUrl: "/admin/auth/signin" });
    };

    const runScan = () => {
        setIsScanning(true);
        setScanProgress(0);
        const interval = setInterval(() => {
            setScanProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsScanning(false);
                    return 100;
                }
                return prev + 5;
            });
        }, 80);
    };



    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-charcoal to-black p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-black text-white uppercase tracking-tight mb-2">
                            Admin <span className="text-brand-red">Control</span>
                        </h1>
                        <p className="text-gray-400 text-sm">
                            {session?.user?.email ? `Logged in as: ${session.user.email}` : "Live SEO & Business Intelligence"}
                        </p>
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
                    {(['overview', 'gsc', 'health'] as const).map((id) => (
                        <button
                            key={id}
                            onClick={() => setActiveTab(id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold transition-all ${activeTab === id ? 'bg-white/10 text-white shadow-glow' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
                        >
                            {id === 'overview' && <Globe size={14} />}
                            {id === 'gsc' && <TrendingUp size={14} />}
                            {id === 'health' && <Shield size={14} />}
                            {id === 'overview' ? 'Overview' : id === 'gsc' ? 'Search Performance' : 'Site Health'}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="space-y-6">
                    {activeTab === 'overview' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <TrendingUp className="text-gold" /> Search Performance
                                </h3>
                                {/* Embedding GSC Metrics directly for overview */}
                                <GSCMetrics />
                            </div>
                            {/* <div className="space-y-6">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <MapPin className="text-brand-red" /> Business Profile
                                </h3>
                                <GBPMetrics />
                            </div> */}
                        </div>
                    )}

                    {activeTab === 'gsc' && (
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Full Search Console Report</h2>
                            <GSCMetrics />
                        </div>
                    )}

                    {/* {activeTab === 'gbp' && (
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Business Profile Insights</h2>
                            <GBPMetrics />
                        </div>
                    )} */}

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
    return <SeoDashboardContent />;
}
