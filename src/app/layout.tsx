import type { Metadata, Viewport } from "next";
import Head from "next/head";
import { Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { JsonLd, organizationSchema, restaurantSchema } from "@/components/layout/JsonLd";
import { Analytics } from "@/components/layout/Analytics";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { AgeVerificationModal } from "@/components/ui/AgeVerificationModal";
import { ToastProvider } from "@/components/ui/Toast";
import { ScavengerHuntProvider } from "@/context/ScavengerHuntContext";

import { ScavengerHuntTracker } from "@/components/gamification/ScavengerHuntTracker";


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://charcoalnchill.com"),
  title: "Charcoal N Chill | Premium Hookah & Indo-American Fusion Grill in Alpharetta",
  description: "Alpharetta's #1 destination for premium hookah, Indo-American Eats, and American classics like wings & burgers. Live entertainment, VIP lounge, and late-night fusion dining.",
  openGraph: {
    title: "Charcoal N Chill | Premium Hookah & Indo-American Fusion Grill",
    description: "Alpharetta's #1 destination for premium hookah, Indo-American Eats, and American classics like wings & burgers. Live entertainment, VIP lounge, and late-night fusion dining.",
    url: "https://charcoalnchill.com",
    siteName: "Charcoal N Chill",
    images: [{ url: "https://charcoalnchill.com/images/final-cnc-hero.jpg", width: 1200, height: 630, alt: "Charcoal N Chill Lounge Interior" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charcoal N Chill | Premium Hookah & Indo-American Fusion Grill",
    description: "Alpharetta's #1 destination for premium hookah, Indo-American Eats, and American classics like wings & burgers. Live entertainment, VIP lounge, and late-night fusion dining.",
    images: ["https://charcoalnchill.com/images/final-cnc-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={cn(
          raleway.variable,
          "antialiased bg-background text-foreground font-sans min-h-screen"
        )}
        suppressHydrationWarning
      >
        <ToastProvider>
          <ScavengerHuntProvider>
            <div id="scroll-sentinel" className="absolute top-0 h-px w-full pointer-events-none" />
            <AgeVerificationModal />
            <GrainOverlay />
            <SmoothScroll />

            <ScavengerHuntTracker />
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only fixed top-4 left-4 z-[100] bg-gold text-black px-6 py-3 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl transition-all outline-none focus:ring-2 focus:ring-brand-red"
            >
              Skip to Content
            </a>
            {/* Organization schema */}
            <JsonLd data={organizationSchema} id="org-schema" />
            {/* Restaurant schema */}
            <JsonLd data={restaurantSchema} id="restaurant-schema" />
            <Analytics />

            <div id="main-content" tabIndex={-1} className="outline-none">
              {children}
            </div>
          </ScavengerHuntProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
