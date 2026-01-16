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
        <nav className={cn("breadcrumb mx-auto justify-center", className)} aria-label="Breadcrumb">
            <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center gap-2">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
                    <Link href="/" itemProp="item" className="hover:text-gold-primary transition-colors">
                        <span itemProp="name">Home</span>
                    </Link>
                    <meta itemProp="position" content="1" />
                </li>
                {items.map((item, idx) => (
                    <li key={idx} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
                        <span className="mx-2 text-gray-500">/</span>
                        {item.href ? (
                            <Link href={item.href} itemProp="item" className="hover:text-gold-primary transition-colors">
                                <span itemProp="name">{item.label}</span>
                            </Link>
                        ) : (
                            <span itemProp="name" className="text-gold-primary font-medium">{item.label}</span>
                        )}
                        <meta itemProp="position" content={(idx + 2).toString()} />
                    </li>
                ))}
            </ol>
        </nav>
    );
}
