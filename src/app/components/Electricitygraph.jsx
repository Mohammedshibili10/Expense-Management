import React from 'react'
 
export default function Electricitygraph() {
  const barData = [40, 55, 45, 100, 60, 50, 65];
  const barHighlight = 3;
  const maxHeight = 200; // px — fixed pixel height for the chart container
 
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex justify-between items-start mb-1">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-yellow-400 text-base">⚡</span>
            <span className="text-sm font-semibold text-gray-800">Electricity</span>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">Grid provider: MetroPower Solutions</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold text-red-500">DUE IN 4 DAYS</p>
          <p className="text-2xl font-bold text-gray-900">$142.12</p>
        </div>
      </div>
 
      {/* Bar Chart — use px height on parent so % children work */}
      <div className="flex items-end gap-10   mt-3 mb-2" style={{ height: `${maxHeight}px` }}>
        {barData.map((h, i) => (
          <div key={i} className="flex-1 flex items-end h-full">
            <div
              className={`w-full rounded-t-md transition-all ${
                i === barHighlight ? "bg-blue-600" : "bg-gray-200"
              }`}
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>
 
      <div className="flex items-center justify-between text-xs mt-1">
        <span className="text-gray-400">
          Avg: 124 kWh &nbsp;
          <span className="text-blue-500 font-medium">Peak: Weekends</span>
        </span>
        <span className="text-blue-600 font-medium cursor-pointer">View Breakdown</span>
      </div>
    </div>
  )
}