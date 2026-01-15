"use client";

import dynamic from "next/dynamic";

const AgeVerificationModal = dynamic(
    () => import("@/components/ui/AgeVerificationModal").then((mod) => mod.AgeVerificationModal),
    { ssr: false }
);

export function AgeVerificationWrapper() {
    return <AgeVerificationModal />;
}
