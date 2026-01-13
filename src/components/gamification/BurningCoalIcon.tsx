"use client";

import { motion } from "framer-motion";

export function BurningCoalIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <radialGradient id="coalGlow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#FB923C" /> {/* orange-400 */}
                    <stop offset="40%" stopColor="#EF4444" /> {/* red-500 */}
                    <stop offset="80%" stopColor="#1E293B" /> {/* slate-800 */}
                    <stop offset="100%" stopColor="#0F172A" /> {/* slate-900 */}
                </radialGradient>
                <filter id="heatDistortion">
                    <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                </filter>
            </defs>

            {/* Core shape with rough edges */}
            <motion.path
                d="M50 15 C 65 15, 85 25, 85 50 C 85 75, 65 90, 50 90 C 35 90, 15 75, 15 50 C 15 25, 35 15, 50 15 Z"
                fill="url(#coalGlow)"
                stroke="#0F172A"
                strokeWidth="2"
                style={{ filter: "url(#heatDistortion)" }}
                animate={{
                    d: [
                        "M50 15 C 65 15, 85 25, 85 50 C 85 75, 65 90, 50 90 C 35 90, 15 75, 15 50 C 15 25, 35 15, 50 15 Z",
                        "M50 12 C 68 18, 88 28, 85 50 C 82 72, 62 92, 50 90 C 32 88, 12 72, 15 50 C 18 28, 32 12, 50 12 Z", // Slightly shifted shape
                        "M50 15 C 65 15, 85 25, 85 50 C 85 75, 65 90, 50 90 C 35 90, 15 75, 15 50 C 15 25, 35 15, 50 15 Z"
                    ]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />

            {/* Cracks / Fissures showing pure heat */}
            <motion.path
                d="M35 40 L 50 55 L 65 40 M 50 55 L 50 75 M 35 60 L 50 55 L 65 60"
                stroke="#FCD34D" /* amber-300 */
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                animate={{ strokeOpacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
        </svg>
    );
}
