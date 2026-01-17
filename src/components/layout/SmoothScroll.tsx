"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Disable explicit smooth scroll on mobile for native feel and performance
        if (typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    // Reset scroll on route change
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        } else {
            // Fallback for native scroll (e.g., mobile)
            try {
                window.scrollTo({ top: 0, behavior: "instant" });
            } catch {
                window.scrollTo(0, 0);
            }
        }
    }, [pathname, searchParams]);

    return null;
}
