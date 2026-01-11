'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminAuthCheck({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem('admin_authenticated');

        if (!isAuthenticated) {
            router.push('/admin/login');
        }
    }, [router]);

    // Check authentication on client side
    if (typeof window !== 'undefined') {
        const isAuthenticated = sessionStorage.getItem('admin_authenticated');

        if (!isAuthenticated) {
            return null; // Will redirect
        }
    }

    return <>{children}</>;
}
