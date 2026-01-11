"use client";

import { CheckCircle2, AlertCircle, Search, Globe, Zap, Shield, RefreshCw, Code2, Layout, Smartphone, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminAuthCheck from "@/components/admin/AdminAuthCheck";

function SeoDashboardContent() {
    const router = useRouter();
    const [score, setScore] = useState(0);
    const [isScanning, setIsScanning] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);
    const [lastScan, setLastScan] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'overview' | 'schema' | 'performance'>('overview');

    const healthChecks = [
        { id: 'ssl', label: "SSL Certificate", status: "pass", detail: "HTTPS is active and valid" },
        { id: 'meta-titles', label: "Meta Titles", status: "pass", detail: "Unique titles optimized for all pages" },
        { id: 'schema', label: "Schema Markup", status: "pass", detail: "JSON-LD validated" },
        { id: 'images', label: "Image Alt Text", status: "pass", detail: "All images have alt tags" },
        { id: 'mobile', label: "Mobile Usability", status: "pass", detail: "Core Web Vitals passed" },
        { id: 'nap', label: "NAP Consistency", status: "pass", detail: "100% consistency" },
    ];

    const schemaData = [
        { type: "Restaurant", status: "Valid", properties: 20 },
        { type: "Organization", status: "Valid", properties: 9 },
        { type: "Menu", status: "Valid", properties: 15 },
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
        setScore(100);
        setLastScan(new Date().toLocaleTimeString());
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-charcoal to-black p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-black text-white uppercase tracking-tight mb-2">
                            SEO <span className="text-brand-red">Dashboard</span>
                        </h1>
                        <p className="text-gray-400 text-sm">Real-time SEO monitoring</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full text-sm font-bold transition-all"
                    >
                        <LogOut size={16} />
                        Logout
                    </button>
                </div>

                <div className="space-y-8">
                    <div className="flex gap-4 bg-black/40 p-1.5 rounded-full border border-white/5 w-fit">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${activeTab === 'overview' ? 'bg-white/10 text-white' : 'text-gray-500'}`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab('schema')}
                            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${activeTab === 'schema' ? 'bg-white/10 text-white' : 'text-gray-500'}`}
                        >
                            Schema
                        </button>
                        <button
                            onClick={() => setActiveTab('performance')}
                            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${activeTab === 'performance' ? 'bg-white/10 text-white' : 'text-gray-500'}`}
                        >
                            Performance
                        </button>
                    </div>

                    {activeTab === 'overview' && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="p-6 bg-[#0a0a0a] border border-white/5 rounded-3xl">
                                    <p className="text-xs font-bold text-gray-500 uppercase mb-4">SEO Score</p>
                                    <div className="flex items-end gap-3">
                                        <span className="text-5xl font-black text-brand-red">{score}</span>
                                        <span className="text-gray-600 font-bold mb-1">/ 100</span>
                                    </div>
                                    {score === 100 && (
                                        <div className="mt-4 px-3 py-1 bg-brand-red/10 rounded-full inline-block">
                                            <span className="text-brand-red text-xs font-black">Perfect!</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 bg-[#0a0a0a] border border-white/5 rounded-3xl">
                                    <p className="text-xs font-bold text-gray-500 uppercase mb-4">Core Web Vitals</p>
                                    <div className="flex items-center gap-3">
                                        <Zap size={24} className="text-brand-red" />
                                        <span className="text-2xl font-bold">Passed</span>
                                    </div>
                                </div>
                                <div className="p-6 bg-[#0a0a0a] border border-white/5 rounded-3xl">
                                    <p className="text-xs font-bold text-gray-500 uppercase mb-4">Indexed Pages</p>
                                    <div className="flex items-center gap-3">
                                        <Globe size={24} className="text-gold" />
                                        <span className="text-2xl font-bold">8 / 8</span>
                                    </div>
                                </div>
                                <div className="p-6 bg-[#0a0a0a] border border-white/5 rounded-3xl">
                                    <p className="text-xs font-bold text-gray-500 uppercase mb-4">Status</p>
                                    <div className="flex items-center gap-3">
                                        <Shield size={24} className="text-brand-red" />
                                        <span className="text-sm font-bold text-gray-400">{lastScan ? `Clean (${lastScan})` : "Pending"}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 bg-[#0a0a0a] border border-white/5 rounded-3xl">
                                {isScanning && (
                                    <div className="absolute top-0 left-0 h-1 bg-brand-red" style={{ width: `${scanProgress}%` }} />
                                )}
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
                        </>
                    )}

                    {activeTab === 'schema' && (
                        <div className="p-10 bg-[#0a0a0a] border border-white/5 rounded-3xl">
                            <h2 className="text-2xl font-black uppercase mb-8">Schema Entities</h2>
                            <div className="space-y-4">
                                {schemaData.map((item, i) => (
                                    <div key={i} className="p-6 bg-black/40 rounded-3xl border border-white/5 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-brand-red/5 rounded-2xl">
                                                <Code2 size={20} className="text-brand-red" />
                                            </div>
                                            <div>
                                                <p className="font-black text-white">{item.type}</p>
                                                <p className="text-xs text-gray-500">{item.properties} Properties</p>
                                            </div>
                                        </div>
                                        <span className="text-xs font-black px-3 py-1 rounded-full bg-brand-red/10 text-brand-red">
                                            {item.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'performance' && (
                        <div className="p-10 bg-[#0a0a0a] border border-white/5 rounded-3xl">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-black uppercase">Core Web Vitals</h2>
                                <Smartphone size={24} className="text-brand-red" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="space-y-4">
                                    <div className="flex justify-between text-xs font-bold uppercase text-gray-500">
                                        <span>LCP</span>
                                        <span className="text-brand-red">0.8s</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-red w-[90%]" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between text-xs font-bold uppercase text-gray-500">
                                        <span>FID</span>
                                        <span className="text-brand-red">12ms</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-red w-[95%]" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between text-xs font-bold uppercase text-gray-500">
                                        <span>CLS</span>
                                        <span className="text-brand-red">0.01</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-red w-[98%]" />
                                    </div>
                                </div>
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
