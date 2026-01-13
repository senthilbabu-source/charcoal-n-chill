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
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold,
                rootMargin: "0px 0px -50px 0px"
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

    const getInitialStyle = () => {
        if (isVisible) return { opacity: 1, transform: "translate(0, 0) scale(1)" };

        switch (animation) {
            case "fade-up":
                return { opacity: 0, transform: "translateY(50px)" };
            case "fade-down":
                return { opacity: 0, transform: "translateY(-50px)" };
            case "fade-left":
                return { opacity: 0, transform: "translateX(50px)" };
            case "fade-right":
                return { opacity: 0, transform: "translateX(-50px)" };
            case "zoom-in":
                return { opacity: 0, transform: "scale(0.8)" };
            case "zoom-out":
                return { opacity: 0, transform: "scale(1.2)" };
            default:
                return { opacity: 0, transform: "translateY(50px)" };
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`,
                transitionDelay: `${delay}s`,
                ...getInitialStyle()
            }}
        >
            {children}
        </div>
    );
}
