import { NextResponse } from "next/server";
import { google } from "googleapis";

// Prevent this route from being cached statically
export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        // 1. Check Credentials
        const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'); // Handle newline escape sequences



        if (!clientEmail || !privateKey) {
            return NextResponse.json({
                error: "Credentials missing. Please check .env.local",
                data: null
            }, { status: 500 });
        }

        // 2. Authenticate with Google
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
            },
            scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
        });

        const searchConsole = google.searchconsole({ version: 'v1', auth });

        // 3. List Sites to find the property (optional, or hardcode)
        // For efficiency, we assume the one with highest permission or just first one
        const sites = await searchConsole.sites.list();
        const siteUrl = sites.data.siteEntry?.[0]?.siteUrl;

        if (!siteUrl) {
            return NextResponse.json({
                error: "No properties found in GSC. Ensure you added the service account email as a User.",
                data: null
            }, { status: 404 });
        }

        // 4. Fetch Search Analytics (Last 30 Days)
        const endDate = new Date().toISOString().split('T')[0];
        const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

        const response = await searchConsole.searchanalytics.query({
            siteUrl,
            requestBody: {
                startDate,
                endDate,
                dimensions: ['query'],
                rowLimit: 10,  // Top 10 keywords
            },
        });

        // 4b. Fetch Totals (Clicks, Impressions)
        // To get totals, we run a query without 'query' dimension or aggregate
        const totalResponse = await searchConsole.searchanalytics.query({
            siteUrl,
            requestBody: {
                startDate,
                endDate,
                dimensions: ['date'], // Group by date to get daily trend if needed, or just aggregate
            },
        });

        // Calculate Totals
        const totalClicks = totalResponse.data.rows?.reduce((acc, row) => acc + (row.clicks || 0), 0) || 0;
        const totalImpressions = totalResponse.data.rows?.reduce((acc, row) => acc + (row.impressions || 0), 0) || 0;
        // Weighted average position
        const totalPosition = totalResponse.data.rows?.length
            ? (totalResponse.data.rows.reduce((acc, row) => acc + (row.position || 0), 0) / totalResponse.data.rows.length).toFixed(1)
            : "N/A";

        return NextResponse.json({
            siteUrl,
            metrics: {
                clicks: totalClicks,
                impressions: totalImpressions,
                ctr: ((totalClicks / totalImpressions) * 100).toFixed(1) + "%",
                position: totalPosition
            },
            topKeywords: response.data.rows?.map(row => ({
                term: row.keys?.[0] || "Unknown",
                clicks: row.clicks,
                position: row.position ? row.position.toFixed(1) : "-",
                change: "-" // Historical comparison would require a second query, simplified for now
            })) || []
        });

    } catch (error: unknown) {
        console.error("GSC API Error:", error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : "Failed to fetch GSC data",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            details: (error as any).response?.data
        }, { status: 500 });
    }
}
