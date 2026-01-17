"use client";

import dynamic from "next/dynamic";

const CommentSection = dynamic(() => import("./CommentSection").then(mod => mod.CommentSection), {
    ssr: false,
    loading: () => <div className="h-64 bg-white/5 rounded-2xl animate-pulse mt-16" />
});

export function CommentWrapper({ id, title, slug }: { id: string; title: string, slug: string }) {
    return <CommentSection id={id} title={title} slug={slug} />;
}
