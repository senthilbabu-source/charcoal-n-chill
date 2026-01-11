"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminAuthCheck({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem("admin_authenticated");
        if (!isAuthenticated) {
            router.push("/admin/login");
        } else {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsReady(true);
        }
    }, [router]);

    // Render nothing until authentication is verified on the client
    if (!isReady) {
        return null;
    }

    return <>{children}</>;
};
