
import { auth } from "@/lib/auth"
import { getSearchAnalytics } from "@/lib/google/gsc-client"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const session = await auth()

    if (!session?.accessToken) {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get("startDate") || "2024-01-01" // Default fallback, likely overridden by frontend
    const endDate = searchParams.get("endDate") || new Date().toISOString().split('T')[0]

    // Hardcoded site URL for now, or fetch from query param / config
    const siteUrl = "https://charcoalnchill.com"

    try {
        const data = await getSearchAnalytics(session.accessToken, siteUrl, {
            startDate,
            endDate,
            dimensions: ["query"]
        })
        return NextResponse.json(data)
    } catch (error) {
        console.error("API Error:", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}
