'use client'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function SpendtrendTable() {
    const spendingData = [
  { week: "W1", current: 210, forecast: null },
  { week: "W2", current: 185, forecast: null },
  { week: "W3", current: 310, forecast: null },
  { week: "W4", current: 290, forecast: null },
  { week: "W5", current: 340, forecast: null },
  { week: "W6", current: 260, forecast: null },
  { week: "W7", current: 290, forecast: null },
  { week: "W8", current: null, forecast: 310 },
  { week: "W9", current: null, forecast: 280 },
];
    const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;
  if (!height || height <= 0) return null;
  const r = 4;
  return (
    <path
      d={`M${x + r},${y} h${width - 2 * r} a${r},${r} 0 0 1 ${r},${r} v${height - r} h${-width} v${-(height - r)} a${r},${r} 0 0 1 ${r},${-r}z`}
      fill={fill}
    />
  );
};
  return (
    <div className='py-3'>
       <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-gray-900">Spending Trend</p>
                <p className="text-xs text-gray-400 mt-0.5">Daily velocity vs. target</p>
              </div>
              <div className="flex gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-700 inline-block" />
                  Current
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-200 inline-block" />
                  Forecast
                </span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={spendingData} barGap={2} barCategoryGap="20%">
                <XAxis
                  dataKey="week"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9ca3af", fontSize: 11 }}
                />
                <YAxis hide />
                <Tooltip
                  cursor={false}
                  contentStyle={{
                    background: "#1e293b",
                    border: "none",
                    borderRadius: 8,
                    fontSize: 12,
                    color: "#fff",
                  }}
                  labelStyle={{ color: "#94a3b8" }}
                />
                <Bar dataKey="current" name="Current" fill="#1d4ed8" shape={<CustomBar />} />
                <Bar dataKey="forecast" name="Forecast" fill="#bfdbfe" shape={<CustomBar />} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-blue-700 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <p className="text-xs tracking-widest uppercase text-blue-200 mb-1">
                Total Remaining
              </p>
              <p className="text-3xl font-bold text-white mb-4">$1,420.50</p>
            </div>
            <div>
              <div className="flex justify-between text-xs text-blue-200 mb-1.5">
                <span>Monthly Goal</span>
                <span>$5,000.00</span>
              </div>
              <div className="bg-blue-500 rounded-full h-1 mb-3 overflow-hidden">
                <div className="bg-white h-full rounded-full w-[72%]" />
              </div>
              <p className="text-xs text-blue-200 leading-relaxed">
                You've spent 72% of your monthly budget.
                You're on track to save $350 this month.
              </p>
            </div>
          </div>
        </div>
        </div>
  )
}
