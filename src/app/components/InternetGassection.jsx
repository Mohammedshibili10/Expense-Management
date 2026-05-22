import React from 'react'

export default function InternetGassection() {
  return (
    <div>
         <div className="grid grid-cols-3 gap-4">
 
          {/* Internet */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-1.5">
                <span className="text-gray-500 text-base">📶</span>
                <span className="text-sm font-semibold text-gray-800">Internet</span>
              </div>
              <span className="text-xs font-semibold bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">AUTO-PAY</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-0.5">$89.99</p>
            <p className="text-xs text-gray-400 mb-3">Fiber 100ps Plan</p>
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">🌐</div>
              <div>
                <p className="text-xs font-medium text-gray-700 leading-tight">Network Status</p>
                <p className="text-xs text-green-500 font-semibold leading-tight">Excellent · 980 Mbps</p>
              </div>
            </div>
          </div>
 
          {/* Natural Gas */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-orange-400 text-base">✦</span>
              <span className="text-sm font-semibold text-gray-800">Natural Gas</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-0.5">$45.20</p>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">Heating Season Started</p>
            {/* Toggle placeholder */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-5 bg-gray-200 rounded-full relative">
                <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm" />
              </div>
              <span className="text-xs text-gray-400">Auto-adjust</span>
            </div>
          </div>

           <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-orange-400 text-base">✦</span>
              <span className="text-sm font-semibold text-gray-800">Natural Gas</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-0.5">$45.20</p>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">Heating Season Started</p>
            {/* Toggle placeholder */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-5 bg-gray-200 rounded-full relative">
                <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm" />
              </div>
              <span className="text-xs text-gray-400">Auto-adjust</span>
            </div>
          </div>
        </div>
    </div>
  )
}
