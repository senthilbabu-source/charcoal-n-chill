"use client";

import { useEffect, useState } from "react";

export function GrainOverlay() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.03] mix-blend-overlay backface-hidden transform-gpu translate-z-0 hidden md:block" style={{ pointerEvents: 'none' }} aria-hidden="true">
            <div className="absolute inset-0 bg-repeat w-full h-full animate-grain bg-[url('/noise.svg')]"></div>
        </div>
    );
}
