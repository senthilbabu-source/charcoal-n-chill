"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Reward } from "@/data/rewards";

interface LuxuryWheelProps {
    rewards: Reward[];
    onSpinComplete: (reward: Reward) => void;
    spinning: boolean;
    winner: Reward | null;
}

export function LuxuryWheel({ rewards, onSpinComplete, spinning, winner }: LuxuryWheelProps) {
    const controls = useAnimation();

    const segmentAngle = 360 / rewards.length;

    useEffect(() => {
        if (spinning && winner) {
            // Calculate target rotation to land on the winner
            const winnerIndex = rewards.findIndex(r => r.id === winner.id);

            // We want the winner to be at the top (270 degrees or -90 degrees in standard circle math, 
            // but let's assume pointer is at top center).
            // If pointer is at top, and we rotate clockwise, the segment at index i is at (i * segmentAngle).
            // To bring it to top, we need to rotate:
            // Full spins + (360 - (winnerIndex * segmentAngle)) - (segmentAngle / 2)

            // Add slight randomness within the segment for realism
            const randomOffset = (Math.random() * segmentAngle * 0.8) - (segmentAngle * 0.4);

            // Minimum 5 full spins
            const spins = 360 * 8;
            // Subtract segmentAngle/2 to align the CENTER of the segment with the pointer (0 degrees)
            // The segment starts at i*angle. Center is i*angle + angle/2.
            // To bring center to 0: rotate (360 - (center)).
            const targetRotation = spins + (360 - ((winnerIndex * segmentAngle) + (segmentAngle / 2))) + randomOffset;

            controls.start({
                rotate: targetRotation,
                transition: {
                    duration: 6,
                    ease: [0.15, 0.45, 0, 1], // Custom bezier for realistic deceleration
                }
            }).then(() => {
                onSpinComplete(winner);
            });
        }
    }, [spinning, winner, rewards, controls, onSpinComplete, segmentAngle]);

    return (
        <div className="relative w-full aspect-square max-w-[400px] mx-auto">
            {/* Pointer / Marker */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-20 w-8 h-10">
                <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[30px] border-t-gold drop-shadow-lg" />
            </div>

            {/* Wheel Container with Border */}
            <div className="w-full h-full rounded-full border-4 border-gold/30 p-1 shadow-[0_0_50px_rgba(212,175,55,0.2)] bg-black">
                <motion.div
                    className="w-full h-full rounded-full overflow-hidden relative"
                    animate={controls}
                    initial={{ rotate: 0 }}
                    style={{ originX: 0.5, originY: 0.5 }}
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                        {rewards.map((reward, i) => {
                            // Calculate SVG path for each segment
                            // A simple pie slice path generator
                            const startAngle = (i * segmentAngle);
                            const endAngle = ((i + 1) * segmentAngle);

                            // Convert polar to cartesian
                            const x1 = 50 + 50 * Math.cos(Math.PI * startAngle / 180);
                            const y1 = 50 + 50 * Math.sin(Math.PI * startAngle / 180);
                            const x2 = 50 + 50 * Math.cos(Math.PI * endAngle / 180);
                            const y2 = 50 + 50 * Math.sin(Math.PI * endAngle / 180);

                            const largeArcFlag = segmentAngle > 180 ? 1 : 0;

                            const pathData = `M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

                            return (
                                <g key={reward.id}>
                                    <path
                                        d={pathData}
                                        fill={reward.color}
                                        stroke="#000"
                                        strokeWidth="0.5"
                                    />
                                    {/* Text Label */}
                                    <g transform={`rotate(${startAngle + segmentAngle / 2} 50 50)`}>
                                        <text
                                            x="75"
                                            y="51.5"
                                            fontSize="3.5"
                                            fontWeight="bold"
                                            textAnchor="middle"
                                            fill={reward.textColor}
                                            className="uppercase tracking-wider font-heading"
                                            style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.3)" }}
                                        >
                                            {reward.label}
                                        </text>
                                    </g>
                                </g>
                            );
                        })}
                    </svg>

                    {/* Center Cap */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black rounded-full shadow-xl border-2 border-gold z-10 flex items-center justify-center overflow-hidden">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/logo.png"
                                alt="CNC"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Reflection Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />
        </div>
    );
}
