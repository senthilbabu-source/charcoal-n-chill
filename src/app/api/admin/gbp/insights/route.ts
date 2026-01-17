
import { auth } from "@/lib/auth"
import { getBusinessInsights, getBusinessLocations, getBusinessAccounts } from "@/lib/google/gbp-client"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const session = await auth()

    if (!session?.accessToken) {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get("startDate") || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // 30 days ago
    const endDate = searchParams.get("endDate") || new Date().toISOString().split('T')[0]

    try {
        // 1. Get Account ID
        const accounts = await getBusinessAccounts(session.accessToken)
        if (!accounts.length || !accounts[0].name) {
            return NextResponse.json({ error: "No GBP accounts found" }, { status: 404 })
        }
        const accountId = accounts[0].name as string // e.g., accounts/12345

        // 2. Get Location ID
        const locations = await getBusinessLocations(session.accessToken, accountId)
        if (!locations.length || !locations[0].name) {
            return NextResponse.json({ error: "No GBP locations found" }, { status: 404 })
        }
        const locationId = locations[0].name as string // e.g., locations/67890

        // 3. Get Insights
        const data = await getBusinessInsights(session.accessToken, locationId, startDate, endDate)
        return NextResponse.json(data)
    } catch (error) {
        console.error("API Error:", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}
