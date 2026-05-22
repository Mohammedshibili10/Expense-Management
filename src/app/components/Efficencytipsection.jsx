import React from 'react'

export default function Efficencytipsection() {
  return (
    <div>
          <div className="bg-blue-700 h-50 rounded-xl p-4 relative overflow-hidden">
              <p className="text-xs font-bold text-white mb-1">Efficiency Tip</p>
              <p className="text-xs text-blue-200 leading-relaxed mb-3">
                Switching to LED bulbs in the kitchen could save you approx. $12.50/mo on your next bill.
              </p>
              <button className="text-xs font-bold bg-white text-blue-700 px-3 py-1.5 rounded-lg">
                LEARN MORE
              </button>
              {/* Decorative circle */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-full opacity-40" />
            </div>
    </div>
  )
}
