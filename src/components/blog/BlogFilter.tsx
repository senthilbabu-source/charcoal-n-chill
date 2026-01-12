"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

interface BlogFilterProps {
    categories: string[];
    activeCategory: string;
}

export function BlogFilter({ categories, activeCategory }: BlogFilterProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    );

    const handleCategoryClick = (category: string) => {
        if (category === "All") {
            router.push(pathname);
        } else {
            router.push(pathname + "?" + createQueryString("category", category));
        }
    };

    return (
        <div className="mb-12 overflow-x-auto pb-4 -mx-4 px-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 min-w-max md:min-w-0">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border whitespace-nowrap ${activeCategory === category
                            ? "bg-gold text-charcoal border-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                            : "bg-white/5 text-gray-400 border-white/10 hover:border-gold/50 hover:text-white"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}
