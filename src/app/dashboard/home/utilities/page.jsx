import Efficencytipsection from '@/app/components/Efficencytipsection'
import Electricitygraph from '@/app/components/Electricitygraph'
import FamilyShareing from '@/app/components/FamilyShareing'
import InternetGassection from '@/app/components/InternetGassection'
import RecentBillHistory from '@/app/components/RecentBillHistory'
import Watersection from '@/app/components/Watersection'
import React from 'react'

export default function page() {
  return (
    <div className="space-y-6 p-6">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-0.5">
            Resource Consumption
          </p>
          <h1 className="text-2xl font-bold text-gray-900">
            Utilities & Services
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-center">
            <p className="text-xs text-gray-400 mb-0.5">Monthly Est.</p>
            <p className="text-lg font-bold text-gray-900">$428.50</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-2.5 text-center">
            <p className="text-xs text-gray-400 mb-0.5">Efficiency</p>
            <p className="text-lg font-bold text-green-600">+12.4%</p>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex gap-4">

        {/* Left Section (Graph takes remaining space) */}
        <div className="flex-1 rounded-xl ">
          <Electricitygraph />
        </div>

        {/* Right Section (Fixed width) */}
        <div className="w-132 rounded-xl shrink-0">
          <Watersection />
        </div>

      </div>
      <div>
        <InternetGassection />
      </div>
      <div className="flex gap-4">
        <div className="flex-1 gap-4 items-start">
          <RecentBillHistory />
        </div>
        <div className='w-130 shrink-0 space-y-3'>
          <Efficencytipsection />
          <FamilyShareing />
        </div>
      </div>
    </div>
  )
}
