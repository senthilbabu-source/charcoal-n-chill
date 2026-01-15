"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    strength?: number; // How strong the magnetic pull is (default: 0.5)
    glow?: boolean; // Enable glow effect
    as?: "button" | "div";
    type?: "button" | "submit" | "reset";
}

export function MagneticButton({
    children,
    className,
    strength = 0.5,
    glow = false,
    as = "button",
    "aria-label": ariaLabel,
    ...props
}: MagneticButtonProps) {
    const ref = useRef<HTMLElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    function handleMouseMove(e: React.MouseEvent<HTMLElement, MouseEvent>) {
        // Disable on mobile/tablet
        if (typeof window !== 'undefined' && window.innerWidth < 1024) return;

        const { clientX, clientY } = e;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;

        const { height, width, left, top } = rect;

        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        x.set(middleX * strength);
        y.set(middleY * strength);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const Component = motion[as];

    return (
        <Component
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className={cn(
                "relative rounded-full font-bold uppercase tracking-widest transition-all group overflow-hidden cursor-pointer",
                as === "button" ? "appearance-none border-none outline-none" : "",
                className
            )}
            aria-label={ariaLabel}
            {...props as any}
        >
            <span className="relative z-10">{children}</span>
            {glow && (
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            )}
        </Component>
    );
}
