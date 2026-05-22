import React from 'react'

export default function Watersection() {
  return (
    <div> 
         <div className="bg-white h-79 rounded-xl border border-gray-200 p-4 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-blue-400 text-base">💧</span>
                  <span className="text-sm font-semibold text-gray-800">Water</span>
                </div>
                <span className="text-xs font-semibold bg-green-100 text-green-600 px-2 py-0.5 rounded-full">PAID</span>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-0.5">$54.00</p>
              <p className="text-xs text-gray-400">Last paid: Oct 12, 2023</p>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Usage: 4,200 Gal</span>
                <span className="font-medium text-gray-700">84% of Limit</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-blue-500 rounded-full w-[84%]" />
              </div>
              <button className="w-full border border-gray-200 text-sm font-medium text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Report Leak
              </button>
            </div>
          </div>
        </div>
  )
}
