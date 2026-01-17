
import { google } from "googleapis"

// Helper to get authenticated client
const getGscClient = (accessToken: string) => {
    const auth = new google.auth.OAuth2()
    auth.setCredentials({ access_token: accessToken })
    return google.searchconsole({ version: "v1", auth })
}

export interface SearchAnalyticsParams {
    startDate: string
    endDate: string
    dimensions: string[]
}

export const getSearchAnalytics = async (
    accessToken: string,
    siteUrl: string,
    params: SearchAnalyticsParams
) => {
    const client = getGscClient(accessToken)

    try {
        const res = await client.searchanalytics.query({
            siteUrl,
            requestBody: {
                startDate: params.startDate,
                endDate: params.endDate,
                dimensions: params.dimensions,
                rowLimit: 20
            },
        })
        return res.data
    } catch (error) {
        console.error("Error fetching GSC analytics:", error)
        throw error
    }
}

export const getSites = async (accessToken: string) => {
    const client = getGscClient(accessToken)
    try {
        const res = await client.sites.list()
        return res.data.siteEntry || []
    } catch (error) {
        console.error("Error fetching GSC sites:", error)
        throw error
    }
}
