
   import React from 'react'

export default function CategoryCard({ budget }) {

  const getMeta = (cat) => {
    const pct = (cat.spent / cat.limit) * 100

    let status = "HEALTHY"
    let statusClass = "text-green-600"
    let barClass = "bg-green-500"
    let iconBg = "bg-green-100"
    let borderTopColor = "#16a34a"
    let icon = "💰"

    // icon auto by category name
    if (cat.category === "food") icon = "🍴"
    if (cat.category === "rent") icon = "🏠"
    if (cat.category === "entertainment") icon = "🎬"
    if (cat.category === "travel") icon = "✈️"

    if (pct >= 90) {
      status = "WARNING"
      statusClass = "text-amber-600"
      barClass = "bg-amber-500"
      iconBg = "bg-amber-100"
      borderTopColor = "#d97706"
    }

    if (pct >= 100) {
      status = "OVER"
      statusClass = "text-red-600"
      barClass = "bg-red-500"
      iconBg = "bg-red-100"
      borderTopColor = "#dc2626"
    }

    return {
      pct,
      status,
      statusClass,
      barClass,
      iconBg,
      borderTopColor,
      icon
    }
  }

  return (
    <div className='py-7'>
      <div className="grid grid-cols-4 gap-3">

        {Array.isArray(budget) && budget?.slice(0, 4).map((cat) => {
          const meta = getMeta(cat)

          return (
            <div
              key={cat._id}
              className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-sm transition-shadow"
              style={{ borderTop: `2px solid ${meta.borderTopColor}` }}
            >
              <div className="flex justify-between items-center mb-3">

                <div className={`w-8 h-8 rounded-lg ${meta.iconBg} flex items-center justify-center text-sm`}>
                  {meta.icon}
                </div>

                <span className={`text-[10px] font-semibold tracking-widest uppercase ${meta.statusClass}`}>
                  {meta.status}
                </span>

              </div>

              <p className="text-sm font-medium text-gray-900 mb-1">
                {cat.name}
              </p>

              <p className="text-xs text-gray-400 mb-3">
                ₹{cat.spent} spent{" "}
                <span className="font-semibold text-gray-700">
                  ₹{cat.limit} limit
                </span>
              </p>

              <div className="bg-gray-100 rounded-full h-1.5 overflow-hidden">
                <div
                  className={`${meta.barClass} h-full rounded-full`}
                  style={{ width: `${meta.pct}%` }}
                />
              </div>

            </div>
          )
        })}

      </div>
    </div>
  )
}
