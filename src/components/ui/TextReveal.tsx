"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";


interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    mode?: "char" | "word";
}

export function TextReveal({ text, className, delay = 0, mode = "word" }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    // CSS-only fallback for mobile to prevent JS thread blocking
    // We use a simple data attribute to style it if needed, but avoid Framer Motion
    const isMobile = typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        return <span className={className}>{text}</span>;
    }

    const items = mode === "word" ? text.split(" ") : text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <span className={className}>
            <span className="sr-only">{text}</span>
            <motion.span
                ref={ref}
                style={{ display: "inline-block" }}
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="whitespace-pre-wrap"
                aria-hidden="true"
            >
                {items.map((item, index) => (
                    <motion.span
                        variants={child}
                        style={{ display: "inline-block", marginRight: mode === "word" ? "0.25em" : "0" }}
                        key={index}
                    >
                        {item}
                    </motion.span>
                ))}
            </motion.span>
        </span>
    );
}
