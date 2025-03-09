"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 1000 },
  { name: "Feb", value: 1200 },
  { name: "Mar", value: 1800 },
  { name: "Apr", value: 2400 },
  { name: "May", value: 2000 },
  { name: "Jun", value: 3000 },
  { name: "Jul", value: 2800 },
  { name: "Aug", value: 3600 },
  { name: "Sep", value: 3200 },
  { name: "Oct", value: 4000 },
  { name: "Nov", value: 4400 },
  { name: "Dec", value: 5000 },
];

// Generate more detailed data points for a smoother curve
const detailedData = [];
for (let i = 0; i < data.length - 1; i++) {
  const current = data[i];
  const next = data[i + 1];
  detailedData.push(current);

  // Add 3 points between each month
  for (let j = 1; j <= 3; j++) {
    const ratio = j / 4;
    const interpolatedValue =
      current.value + (next.value - current.value) * ratio;
    // Add some randomness for a more natural curve
    const randomFactor = Math.random() * 0.1 + 0.95;
    detailedData.push({
      name: `${current.name}-${j}`,
      value: interpolatedValue * randomFactor,
    });
  }
}
detailedData.push(data[data.length - 1]);

export default function RevenueChart() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={detailedData}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => (value.includes("-") ? "" : value)}
            axisLine={{ stroke: "#374151" }}
            tickLine={{ stroke: "#374151" }}
          />
          <YAxis hide={true} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "none",
              borderRadius: "4px",
              color: "white",
            }}
            formatter={(value) => [`$${value}`, "Revenue"]}
            labelFormatter={(label) => (label.includes("-") ? "" : label)}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#10b981"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 6,
              fill: "#10b981",
              stroke: "#0d9488",
              strokeWidth: 2,
            }}
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
