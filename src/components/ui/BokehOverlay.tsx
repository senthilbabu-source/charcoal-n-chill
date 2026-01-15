"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface BokehParticle {
    id: number;
    size: number;
    left: number;
    top: number;
    animationDuration: number;
    delay: number;
    opacity: number;
}

export function BokehOverlay({ className, intensity = 12 }: { className?: string, intensity?: number }) {
    const [particles, setParticles] = useState<BokehParticle[]>([]);

    useEffect(() => {
        // Optimization: Don't generate particles on mobile
        if (typeof window !== 'undefined' && window.innerWidth < 768) return;

        // Generate static particles on client-side only
        const newParticles = Array.from({ length: intensity }).map((_, i) => ({
            id: i,
            size: Math.random() * 80 + 20, // 20px - 100px
            left: Math.random() * 100,
            top: Math.random() * 100,
            animationDuration: Math.random() * 15 + 10, // 10s - 25s
            delay: Math.random() * 10,
            opacity: Math.random() * 0.15 + 0.05, // 0.05 - 0.2
        }));

        setParticles(newParticles);
    }, [intensity]);

    if (particles.length === 0) return null;

    return (
        <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)} aria-hidden="true">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full bg-gold-primary mix-blend-screen blur-xl"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        opacity: p.opacity,
                        animation: `particle-float ${p.animationDuration}s infinite ease-in-out`,
                        animationDelay: `${p.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}
