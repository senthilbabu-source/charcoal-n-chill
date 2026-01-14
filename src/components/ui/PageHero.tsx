
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PageHeroProps {
    title: ReactNode;
    subtitle?: string;
    description?: string;
    className?: string;
}

export function PageHero({ title, description, className }: PageHeroProps) {
    return (
        <section className={cn("bg-[#031322] py-24 md:py-32 border-b border-white/5 relative overflow-hidden", className)}>
            {/* Ambient Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 to-transparent opacity-50 select-none pointer-events-none" />

            <div className="container px-4 md:px-6 text-center relative z-10 space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-4">
                    {title}
                </h1>

                {description && (
                    <p className="max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed font-medium">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}
