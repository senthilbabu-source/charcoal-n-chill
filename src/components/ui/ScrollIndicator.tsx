"use client";

import { ArrowDown } from "lucide-react";

interface ScrollIndicatorProps {
    targetId?: string; // ID to scroll to. Defaults to scrolling 1 viewport height if not provided.
    label?: string;
    className?: string; // Allow overriding positioning
}

export function ScrollIndicator({ targetId, label = "Scroll Down", className = "bottom-8" }: ScrollIndicatorProps) {
    const handleScroll = () => {
        if (targetId) {
            const element = document.getElementById(targetId);
            element?.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });
        }
    };

    return (
        <button
            onClick={handleScroll}
            className={`absolute ${className} left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 animate-bounce opacity-80 md:opacity-100 hover:opacity-100 transition-opacity cursor-pointer text-gold-primary hover:text-white bg-transparent border-none group`}
            aria-label={label}
        >
            <div className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg group-hover:border-gold-primary/50 transition-colors">
                <ArrowDown size={24} />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/70 group-hover:text-gold-primary transition-colors">
                {label}
            </span>
        </button>
    );
}
