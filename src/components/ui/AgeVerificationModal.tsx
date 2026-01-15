"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Ban } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function AgeVerificationModal() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage on mount
        const verified = localStorage.getItem("cnc-age-verified");
        if (!verified) {
            // Defer modal to prioritize LCP (Hero Image) paint
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleVerify = () => {
        localStorage.setItem("cnc-age-verified", "true");
        setIsVisible(false);
    };

    const handleReject = () => {
        window.location.href = "https://www.google.com";
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative z-10 w-full max-w-md p-px rounded-3xl bg-white/10"
                    >
                        <div className="bg-black rounded-[23px] p-8 md:p-10 text-center border border-white/10 relative overflow-hidden shadow-2xl">

                            <div className="relative z-10">
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    <ShieldCheck className="text-white w-8 h-8" />
                                </div>

                                <h2 className="text-3xl font-bold text-white mb-2 uppercase tracking-tight">
                                    Age Verification
                                </h2>
                                <p className="text-gray-300 font-bold tracking-widest text-xs uppercase mb-8">
                                    Strictly 21+ Establishment
                                </p>

                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    You must be of legal smoking age (21+) to enter this website.
                                </p>

                                <div className="space-y-4">
                                    <MagneticButton
                                        onClick={handleVerify}
                                        className="w-full py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl hover:bg-gray-200 transition-colors"
                                    >
                                        I am 21 or older
                                    </MagneticButton>

                                    <button
                                        onClick={handleReject}
                                        className="w-full py-4 text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center justify-center gap-2 group"
                                    >
                                        <Ban size={16} className="group-hover:text-red-500 transition-colors" />
                                        <span>Exit Site</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
