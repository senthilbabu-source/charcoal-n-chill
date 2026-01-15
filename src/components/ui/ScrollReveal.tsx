"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType =
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "zoom-in"
    | "zoom-out";

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    className?: string;
    threshold?: number;
}

export default function ScrollReveal({
    children,
    animation = "fade-up",
    delay = 0,
    duration = 0.8,
    className = "",
    threshold = 0.1
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const isMobile = typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: isMobile ? 0.05 : threshold, // Lower threshold for mobile
                rootMargin: isMobile ? "0px 0px -20px 0px" : "0px 0px -50px 0px"
            }
        );

        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    // Construct class names
    const revealClasses = `reveal-base ${isVisible ? "reveal-visible" : `reveal-hidden ${animation}`}`;

    return (
        <div
            ref={ref}
            className={`${revealClasses} ${className}`}
            style={{
                transitionDuration: `${duration}s`,
                transitionDelay: `${delay}s`,
            }}
        >
            {children}
        </div>
    );
}
