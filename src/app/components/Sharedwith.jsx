import React from 'react'

export default function Sharedwith() {
  return (
    <div> 
        <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-semibold text-gray-900">Shared with</p>
                <span className="text-xs font-bold text-blue-600 tracking-wider">MANAGE</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center text-xs font-bold text-white shrink-0">SJ</div>
                    <div>
                      <p className="text-xs font-medium text-gray-800 leading-tight">Sarah Jenkins</p>
                      <p className="text-xs text-gray-400 leading-tight">Owner • Active 5m ago</p>
                    </div>
                  </div>
                  <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l6.586-6.586a2 2 0 112.828 2.828L11.828 13.828A2 2 0 0111 14.414V17h2.586a2 2 0 001.414-.586l4-4" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-500 flex items-center justify-center text-xs font-bold text-white shrink-0">JJ</div>
                    <div>
                      <p className="text-xs font-medium text-gray-800 leading-tight">James Jenkins</p>
                      <p className="text-xs text-gray-400 leading-tight">Can Edit</p>
                    </div>
                  </div>
                  <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l6.586-6.586a2 2 0 112.828 2.828L11.828 13.828A2 2 0 0111 14.414V17h2.586a2 2 0 001.414-.586l4-4" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-800 leading-tight">Pending Invite</p>
                      <p className="text-xs text-gray-400 leading-tight">emma.j@mail.com</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-red-500">Revoke</span>
                </div>
              </div>
            </div>
            </div>
  )
}
