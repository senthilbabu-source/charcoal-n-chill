"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-dark-primary flex flex-col items-center justify-center relative overflow-hidden">
            <GrainOverlay />

            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-primary/5 rounded-full blur-[120px] animate-pulse" />

            <div className="relative z-10 text-center space-y-8 px-4">
                <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none">
                    404
                </h1>

                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        <span className="block text-gold-primary text-xl uppercase tracking-widest mb-2 font-medium">
                            Page Not Found
                        </span>
                        <TextReveal text="Lost in the Smoke?" delay={0.2} />
                    </h2>

                    <p className="text-gray-400 max-w-md mx-auto text-lg">
                        The page you're looking for seems to have drifted away. Let's get you back to the vibe.
                    </p>
                </div>

                <div className="pt-8">
                    <Link href="/">
                        <MagneticButton className="mx-auto px-8 py-4 bg-gradient-to-r from-gold-dark to-gold-light text-dark-primary rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-shadow">
                            <ArrowLeft size={20} />
                            <span>Back to Homepage</span>
                        </MagneticButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}
