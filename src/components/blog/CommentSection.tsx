"use client";

import { DiscussionEmbed } from "disqus-react";
import { usePathname } from "next/navigation";

interface CommentSectionProps {
    slug: string;
    title: string;
    id: string;
}

export function CommentSection({ slug, title, id }: CommentSectionProps) {
    const pathname = usePathname();
    // TODO: Replace with your actual Disqus shortname
    const disqusShortname = "charcoalnchill-atlanta";

    // Use the production URL as the canonical identifier for Disqus
    // This ensures comments sync between dev/prod and prevents splitting threads
    const url = `https://charcoalnchill.com/blog/${slug}`;

    const disqusConfig = {
        url: url,
        identifier: id, // unique identifier for the post
        title: title,
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
