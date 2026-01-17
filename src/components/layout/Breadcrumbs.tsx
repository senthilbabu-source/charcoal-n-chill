"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Script from "next/script";

type BreadcrumbItem = {
    label: string;
    href: string;
};

type BreadcrumbsProps = {
    className?: string;
    // Optional: Allow overriding auto-generated items for complex nested routes
    customItems?: BreadcrumbItem[];
};

export function Breadcrumbs({ className, customItems }: BreadcrumbsProps) {
    const pathname = usePathname();

    const generateBreadcrumbs = (): BreadcrumbItem[] => {
        if (customItems) {
            // Always ensure Home is first if not present
            if (customItems[0]?.label !== 'Home') {
                return [{ label: 'Home', href: '/' }, ...customItems];
            }
            return customItems;
        }

        const paths = pathname.split('/').filter(Boolean);
        const breadcrumbs: BreadcrumbItem[] = [
            { label: 'Home', href: '/' }
        ];

        let currentPath = '';
        paths.forEach((path) => {
            currentPath += `/${path}`;
            // prettify label: "private-events" -> "Private Events"
            const label = path
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            breadcrumbs.push({
                label: label,
                href: currentPath
            });
        });

        return breadcrumbs;
    };

    const items = generateBreadcrumbs();

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `https://charcoalnchill.com${item.href}`
        }))
    };

    // Don't render on homepage
    if (pathname === '/') return null;

    return (
        <>
            <Script
                id="breadcrumb-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <nav className={cn("breadcrumb mx-auto justify-center", className)} aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-sm">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                            {idx > 0 && <span className="mx-2 text-gray-500">/</span>}
                            {idx === items.length - 1 ? (
                                <span className="text-gold-primary font-medium" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <Link href={item.href} className="hover:text-gold-primary transition-colors text-gray-300">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
