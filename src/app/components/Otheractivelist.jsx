import React from 'react'

export default function Otheractivelist() {
  return (
    <div>
          <div className="bg-blue-700 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-sm" />
                </div>
                <p className="text-xs font-bold text-white tracking-wide">Other Active Lists</p>
              </div>
              <div className="space-y-2 mb-3">
                {[
                  { name: "Target Run", meta: "8 items • Tomorrow" },
                  { name: "Home Improvement", meta: "3 items • Saturday" },
                ].map((list) => (
                  <div key={list.name} className="flex items-center justify-between bg-blue-600 rounded-lg px-3 py-2.5">
                    <div>
                      <p className="text-xs font-semibold text-white">{list.name}</p>
                      <p className="text-xs text-blue-300">{list.meta}</p>
                    </div>
                    <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>
              <button className="w-full py-2 border border-blue-400 rounded-lg text-xs font-bold tracking-widest text-blue-200 uppercase">
                Create New List
              </button>
            </div>
 
          </div>
      
  
  )
}
