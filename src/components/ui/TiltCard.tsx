"use client";

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { createContext, useContext, useRef } from "react";
import { cn } from "@/lib/utils";

const TiltContext = createContext<{ mouseX: MotionValue<number>; mouseY: MotionValue<number> } | null>(null);

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    rotationFactor?: number;
}

export function TiltCard({ children, className, rotationFactor = 12 }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (!ref.current) return;

        const { left, top, width, height } = ref.current.getBoundingClientRect();

        const xPct = (e.clientX - left) / width - 0.5;
        const yPct = (e.clientY - top) / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [rotationFactor, -rotationFactor]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-rotationFactor, rotationFactor]);
    const brightness = useTransform(mouseY, [-0.5, 0.5], [1.1, 0.9]);

    return (
        <TiltContext.Provider value={{ mouseX, mouseY }}>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    filter: `brightness(${brightness})`,
                }}
                className={cn("relative transition-all duration-200 ease-out", className)}
            >
                <div style={{ transform: "translateZ(0)" }}>
                    {children}
                </div>
            </motion.div>
        </TiltContext.Provider>
    );
}

export function TiltParallax({ children, className, offset = 20 }: { children: React.ReactNode; className?: string; offset?: number }) {
    const context = useContext(TiltContext);

    // Hooks cannot be conditional. We must call useTransform regardless of context.
    // However, context might be null if used outside provider.
    // Strategy: Provide a fallback motion value if context is null, but since we can't create hooks conditionally...
    // The previous error was: "React Hook "useTransform" is called conditionally."
    // This happened because of: if (!context) return <>{children}</>;

    // Correct approach using a fallback hook call:
    const fallbackX = useMotionValue(0);
    const fallbackY = useMotionValue(0);

    const mouseX = context?.mouseX || fallbackX;
    const mouseY = context?.mouseY || fallbackY;

    const x = useTransform(mouseX, [-0.5, 0.5], [-offset, offset]);
    const y = useTransform(mouseY, [-0.5, 0.5], [-offset, offset]);

    if (!context) {
        // Even if not in context, we render usage of x/y which are based on fallback 0
        // Or just return simple children to avoid unnecessary wrappers, but checking hooks order is paramount.
        // If we return early here, we skip the `motion.div` render but the hooks ran. That's fine.
        // Wait, if we return early, we must have run all hooks.
        return <>{children}</>;
    }

    return (
        <motion.div style={{ x, y, z: offset }} className={className}>
            {children}
        </motion.div>
    );
}
