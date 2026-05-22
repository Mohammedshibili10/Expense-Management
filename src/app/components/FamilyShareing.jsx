import React from 'react'

export default function FamilyShareing() {
  return (
    <div>
          <div className="bg-white h-50 rounded-xl border border-gray-200 p-4">
              <p className="text-sm font-semibold text-gray-900 mb-3">Family Sharing</p>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-pink-400 flex items-center justify-center text-xs font-bold text-white">D</div>
                    <p className="text-xs font-medium text-gray-800">David (You)</p>
                  </div>
                  <span className="text-xs text-gray-400">Owner</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-orange-300 flex items-center justify-center text-xs font-bold text-white">S</div>
                    <p className="text-xs font-medium text-gray-800">Sarah</p>
                  </div>
                  <span className="text-xs font-semibold text-green-600">Contributor</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <button className="w-full text-xs font-semibold text-gray-500 flex items-center justify-center gap-1 hover:text-gray-700 transition-colors">
                  <span className="text-base leading-none">+</span> Invite Member
                </button>
              </div>
            </div>
    </div>
  )
}
