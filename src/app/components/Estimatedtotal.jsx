"use client"
import React from 'react'

export default function Estimatedtotal({ grocerylist = [], budget }) {
  const totals = {
    Produce: 0,
    Dairy: 0,
    'Meat & Seafood': 0,
    Snacks: 0,
  }

  grocerylist.forEach((item) => {
    const category = item.category || 'Produce'
    const price = Number(item.price) || 0
    totals[category] = (totals[category] || 0) + price
  })

  const grandTotal =
    totals.Produce +
    totals.Dairy +
    totals['Meat & Seafood'] +
    totals.Snacks

  const budgetItem = Array.isArray(budget) ? budget[0] : budget
  const limitValue = Number(budgetItem?.limit) || 0

  const getPercent = (value) => {
    if (!grandTotal || grandTotal <= 0) return 0
    return Math.round((value / grandTotal) * 100)
  }

  return (
    <div>
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">
          Estimated Total
        </p>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-gray-900">${grandTotal.toFixed(2)}</span>
          <span className="text-md font-semibold text-gray-500 italic">
            ${limitValue} Limit
          </span>
        </div>
        <div className="space-y-3">
          <ProgressRow label="Produce" value={totals.Produce} percent={getPercent(totals.Produce)} color="bg-green-500" />
          <ProgressRow label="Dairy" value={totals.Dairy} percent={getPercent(totals.Dairy)} color="bg-blue-500" />
          <ProgressRow
            label="Meat & Seafood"
            value={totals['Meat & Seafood']}
            percent={getPercent(totals['Meat & Seafood'])}
            color="bg-red-500"
          />
          <ProgressRow label="Snacks" value={totals.Snacks} percent={getPercent(totals.Snacks)} color="bg-yellow-500" />
        </div>
      </div>
    </div>
  )
}

function ProgressRow({ label, value, percent, color }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex-1">
        <p className="text-xs text-gray-500 mb-1">{label}</p>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className={`${color} h-full rounded-full`} style={{ width: `${percent}%` }} />
        </div>
      </div>
      <span className="text-sm font-semibold text-gray-800">${value.toFixed(2)}</span>
    </div>
  )
}
