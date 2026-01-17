
"use client"

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend
} from "recharts"

interface ChartProps {
    data: any[]
    type?: "line" | "bar"
    dataKey: string
    xAxisKey: string
    color?: string
    height?: number
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-black border border-gold/30 p-2 rounded shadow-xl">
                <p className="text-gold font-bold mb-1">{label}</p>
                <p className="text-white text-sm">
                    {payload[0].value}
                </p>
            </div>
        )
    }
    return null
}

export const PerformanceChart = ({
    data,
    type = "line",
    dataKey,
    xAxisKey,
    color = "#D4AF37", // Gold
    height = 300
}: ChartProps) => {
    if (!data?.length) {
        return (
            <div style={{ height }} className="flex items-center justify-center text-gray-500 border border-gray-800 rounded-lg">
                No Data Available
            </div>
        )
    }

    const ChartComponent = type === "bar" ? BarChart : LineChart

    return (
        <div style={{ height }} className="w-full">
            <ResponsiveContainer width="100%" height="100%">
                <ChartComponent data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <XAxis
                        dataKey={xAxisKey}
                        stroke="#666"
                        tick={{ fill: '#888' }}
                        tickLine={false}
                    />
                    <YAxis
                        stroke="#666"
                        tick={{ fill: '#888' }}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    {type === "bar" ? (
                        <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
                    ) : (
                        <Line
                            type="monotone"
                            dataKey={dataKey}
                            stroke={color}
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 4, strokeWidth: 0 }}
                        />
                    )}
                </ChartComponent>
            </ResponsiveContainer>
        </div>
    )
}
