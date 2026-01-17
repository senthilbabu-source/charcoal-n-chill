
import { google } from "googleapis"

const getGbpClient = (accessToken: string) => {
    const auth = new google.auth.OAuth2()
    auth.setCredentials({ access_token: accessToken })
    return {
        performance: google.businessprofileperformance({ version: "v1", auth }),
        account: google.mybusinessaccountmanagement({ version: "v1", auth }),
        info: google.mybusinessbusinessinformation({ version: "v1", auth })
    }
}

export const getBusinessAccounts = async (accessToken: string) => {
    const client = getGbpClient(accessToken)
    // Ensure the account management API is accessible
    try {
        const res = await client.account.accounts.list()
        return res.data.accounts || []
    } catch (error) {
        console.error("Error fetching GBP accounts:", error)
        throw error
    }
}

export const getBusinessLocations = async (accessToken: string, accountId: string) => {
    const client = getGbpClient(accessToken)
    try {
        // accounts.locations is under 'businessinformation' (client.info)
        const res = await client.info.accounts.locations.list({
            parent: accountId,
            readMask: "name,title,storeCode,latlng,phoneNumbers,categories,state,metadata"
        })
        return res.data.locations || [];
    } catch (error) {
        console.error("Error fetching GBP locations:", error);
        throw error;
    }
}


export const getBusinessInsights = async (
    accessToken: string,
    locationId: string,
    startDate: string, // YYYY-MM-DD
    endDate: string   // YYYY-MM-DD
) => {
    const client = getGbpClient(accessToken)

    try {
        const startParts = startDate.split('-').map(Number);
        const endParts = endDate.split('-').map(Number);

        const res = await client.performance.locations.fetchMultiDailyMetricsTimeSeries({
            location: locationId,
            dailyMetrics: [
                "BUSINESS_IMPRESSIONS_DESKTOP_MAPS",
                "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH",
                "BUSINESS_IMPRESSIONS_MOBILE_MAPS",
                "BUSINESS_IMPRESSIONS_MOBILE_SEARCH",
                "CALL_CLICKS",
                "WEBSITE_CLICKS",
                "BUSINESS_DIRECTION_REQUESTS"
            ],
            "dailyRange.startDate.year": startParts[0],
            "dailyRange.startDate.month": startParts[1],
            "dailyRange.startDate.day": startParts[2],
            "dailyRange.endDate.year": endParts[0],
            "dailyRange.endDate.month": endParts[1],
            "dailyRange.endDate.day": endParts[2],
        })
        return res.data.multiDailyMetricTimeSeries || []
    } catch (error) {
        console.error("Error fetching GBP insights:", error)
        throw error
    }
}
