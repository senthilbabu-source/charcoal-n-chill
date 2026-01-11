/* eslint-disable @typescript-eslint/no-explicit-any */
import Script from "next/script";

export function Analytics() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";
    const fbPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "XXXXXXXXXXXXXXX";

    return (
        <>
            {/* Google Analytics 4 */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
            </Script>

            {/* Facebook Pixel */}
            <Script id="facebook-pixel" strategy="afterInteractive">
                {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${fbPixelId}');
          fbq('track', 'PageView');
        `}
            </Script>
        </>
    );
}

// Helper to track custom events
// Helper to track custom events
export const trackEvent = (eventName: string, params?: Record<string, string | number | boolean>) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", eventName, params);
    }
    if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", eventName, params);
    }
};
