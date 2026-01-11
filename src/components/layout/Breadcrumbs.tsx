"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
    label: string;
    href?: string;
};

type BreadcrumbsProps = {
    items: BreadcrumbItem[];
    className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    return (
        <nav className={cn("breadcrumb mx-auto justify-center", className)} aria-label="breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            {items.map((item, idx) => (
                <span key={idx} className="flex items-center">
                    <span className="sep">/</span>
                    {item.href ? (
                        <Link href={item.href} className="hover:text-white">{item.label}</Link>
                    ) : (
                        <span className="text-white">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
}
