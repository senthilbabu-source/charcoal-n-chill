"use client";

import { DiscussionEmbed } from "disqus-react";
import { usePathname } from "next/navigation";

export interface CommentSectionProps {
    id: string;
    title: string;
    slug: string;
}

export function CommentSection({ id, title, slug }: CommentSectionProps) {
    const pathname = usePathname();
    // TODO: Replace with your actual Disqus shortname
    const disqusShortname = "charcoalnchill-atlanta";

    // Use strict production URL to ensure threads match across devices/browsers
    const url = `https://charcoalnchill.com/blog/${slug}`;

    const disqusConfig = {
        url: url,
        identifier: slug, // Using slug is often more robust than IDs for migration
        title: title,
        language: 'en_US'
    };

    return (
        <div className="mt-16 pt-16 border-t border-white/5">
            <h3 className="text-2xl font-bold text-white mb-8 font-heading">
                Join the <span className="text-gold-primary">Conversation</span>
            </h3>
            <div className="bg-dark-secondary p-8 rounded-2xl border border-white/5">
                <DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                />
            </div>
        </div>
    );
}
