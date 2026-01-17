
"use client"

import { useEffect, useState } from "react"
import { PerformanceChart } from "./PerformanceChart"

type GSCData = {
    keys: string[]
    clicks: number
    impressions: number
    ctr: number
    position: number
}

export const GSCMetrics = () => {
    const [data, setData] = useState<GSCData[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const endDate = new Date().toISOString().split('T')[0]
                const startDate = new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

                const res = await fetch(`/api/admin/gsc/analytics?startDate=${startDate}&endDate=${endDate}`)
                if (!res.ok) throw new Error("Failed to fetch GSC data")

                const json = await res.json()

                // Transform API response (searchanalytics.query response) for chart
                // Response rows: { keys: [date], clicks, impressions, ctr, position }
                if (json.rows) {
                    // If we grouped by query, we might need to adjust. 
                    // Wait, analytics route grouped by "query". 
                    // For a chart over time, we need to group by "date".
                    // Let's rely on what the route returns.
                    // Actually, the route I wrote hardcoded `dimensions: ["query"]`.
                    // This is bad for a chart. I should update the route or use this for a "Top Queries" table.
                    // For a chart, we want `dimensions: ["date"]`.
                    // Let's treat this list as "Top Keywords" for now and I'll fetch chart data separately later or adjust logic.
                    setData(json.rows)
                }
                setLoading(false)
            } catch (err) {
                console.error(err)
                setError("Could not load Search Console data.")
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) return <div className="h-40 animate-pulse bg-zinc-900 rounded-lg"></div>
    if (error) return <div className="p-4 text-red-400 bg-red-900/10 rounded-lg">{error}</div>

    // Sort by clicks
    const topQueries = [...data].sort((a, b) => b.clicks - a.clicks).slice(0, 10)

    return (
        <div className="space-y-6">
            <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 mx-auto">
                <h3 className="text-xl font-bold text-white mb-4">Top Search Queries (Last 28 Days)</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="text-xs uppercase text-gray-500 border-b border-gray-800">
                            <tr>
                                <th className="pb-3 pl-2">Query</th>
                                <th className="pb-3">Clicks</th>
                                <th className="pb-3">Impressions</th>
                                <th className="pb-3 text-right">CTR</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {topQueries.map((row, i) => (
                                <tr key={i} className="border-b border-gray-800/50 hover:bg-white/5">
                                    <td className="py-3 pl-2 font-medium text-gold">{row.keys[0]}</td>
                                    <td className="py-3 text-white">{row.clicks}</td>
                                    <td className="py-3 text-gray-400">{row.impressions}</td>
                                    <td className="py-3 text-right text-green-400">{(row.ctr * 100).toFixed(1)}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
