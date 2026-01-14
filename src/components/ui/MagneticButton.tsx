"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    strength?: number; // How strong the magnetic pull is (default: 0.5)
    glow?: boolean; // Enable glow effect
}

export function MagneticButton({
    children,
    className,
    strength = 0.5,
    glow = false,
    "aria-label": ariaLabel,
    ...props
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    function handleMouseMove(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();

        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        x.set(middleX * strength);
        y.set(middleY * strength);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className={cn(
                "relative rounded-full font-bold uppercase tracking-widest transition-all group overflow-hidden", // Added overflow-hidden and group
                className
            )}
            aria-label={ariaLabel}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...(props as any)}
        >
            <span className="relative z-10">{children}</span>
            {glow && (
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            )}
        </motion.button>
    );
}
