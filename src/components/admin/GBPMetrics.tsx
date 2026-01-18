
"use client"

import { useEffect, useState } from "react"

export const GBPMetrics = () => {
    // Placeholder until we confirm data shape or fix GBP invitation
    // But since we are doing OAuth, GBP should work!
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<unknown[] | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchGbp = async () => {
            try {
                const res = await fetch('/api/admin/gbp/insights')
                if (!res.ok) {
                    // If 404, it might mean no location found
                    if (res.status === 404) throw new Error("No GBP Location found.")
                    throw new Error("Failed to fetch GBP insights")
                }
                const json = await res.json()
                setData(json)
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message)
                } else {
                    setError("An unknown error occurred")
                }
            } finally {
                setLoading(false)
            }
        }
        fetchGbp()
    }, [])

    if (loading) return <div className="h-40 animate-pulse bg-zinc-900 rounded-lg" />
    if (error) return <div className="p-4 text-orange-400 bg-orange-900/10 rounded-lg">GBP Error: {error}</div>

    return (
        <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-2">Google Maps Performance</h3>
            <p className="text-gray-400 text-sm mb-4">Daily interactions from Business Profile.</p>

            {data && data.length > 0 ? (
                <div className="space-y-2">
                    {/* Add chart here later, for now just debugging connectivity */}
                    <p className="text-green-400">✅ Connectvity Established</p>
                    <p className="text-xs text-gray-500">Data points: {data.length}</p>
                    <pre className="text-xs text-gray-600 overflow-auto max-h-40 mt-2">
                        {JSON.stringify(data[0], null, 2)}
                    </pre>
                </div>
            ) : (
                <p className="text-gray-500">No recent data available.</p>
            )}
        </div>
    )
}
