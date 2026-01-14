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
                <div style={{ transform: "translateZ(0)" }}> {/* Correction: translateZ(0) to serve as base */}
                    {children}
                </div>
            </motion.div>
        </TiltContext.Provider>
    );
}

export function TiltParallax({ children, className, offset = 20 }: { children: React.ReactNode; className?: string; offset?: number }) {
    const context = useContext(TiltContext);
    if (!context) return <>{children}</>;

    const { mouseX, mouseY } = context;
    // Reverse movement for parallax depth effect (objects further away move less or opposite?)
    // Actually, for "pop out" (closer to user), they should move *more* in the direction of the camera relative to base.
    // Logic: moving mouse right (positive xPct) rotates card right (positive rotateY).
    // To make an element appearing "floating above", it should translate in the opposite direction of the rotation?
    // Let's stick to simple translation based on mouse position.

    // transform mouse range [-0.5, 0.5] to [-offset, offset]
    const x = useTransform(mouseX, [-0.5, 0.5], [-offset, offset]);
    const y = useTransform(mouseY, [-0.5, 0.5], [-offset, offset]);

    return (
        <motion.div style={{ x, y, z: offset }} className={className}>
            {children}
        </motion.div>
    );
}
