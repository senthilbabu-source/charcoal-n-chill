"use client";

import { useReportWebVitals } from "next/web-vitals";

declare global {
    interface Window {
        gtag?: (
            command: string,
            targetId: string,
            config?: Record<string, string | number | boolean>
        ) => void;
    }
}

export function WebVitals() {
    useReportWebVitals((metric) => {
        // 1. Log to console in development for debugging
        if (process.env.NODE_ENV === "development") {
            console.log("[Web Vitals]", metric);
        }

        // 2. Send to Google Analytics if available
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
            window.gtag("event", metric.name, {
                value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value), // Google Analytics requires integers for value
                event_label: metric.id, // Unique ID for this metric instance
                non_interaction: true,
                // Custom dimensions for specific metric values
                metric_value: metric.value,
                metric_delta: metric.delta,
            });
        }
    });

    return null;
}
