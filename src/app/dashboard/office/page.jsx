
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import CategoryBreakdown from '@/app/components/CategoryBreakdown'
import { TrendingUp } from 'lucide-react'
import RecentActivitytable from '@/app/components/RecentActivitytable'
import Alertreminders from '@/app/components/Alertreminders'
import MemberBalance from '@/app/components/MemberBalance'
export default function page() {
  return (
    
      <div className='bg-gray-50 w-full h-screen overflow-hidden'>
        <div className='flex justify-between px-10 py-5 gap-10'>
          <div className='w-full bg-white rounded-xl border shadow-lg border-gray-100 p-10'>
            <h1 className='font-medium text-gray-500'>Total Monthly Expense</h1>
            <h1 className='text-4xl font-bold' >$2,500.00</h1>
            <p className='text-sm text-green-500 mt-18 font-medium flex items-center gap-2'><TrendingUp />12% increase from last month</p>
          </div>
          <div className='w-full bg-white rounded-xl border shadow-lg border-gray-100 p-10'>
            <h1 className='font-medium text-gray-500'>Category Breakdown</h1>
            <CategoryBreakdown />

          </div>
          <div className='w-full bg-white rounded-xl border shadow-lg border-gray-100 p-10 space-y-2'>
            <h1 className='font-medium text-gray-500'>Upcoming Dues</h1>
            <div className='flex items-center gap-3 '>
              <h1 className='text-4xl font-bold'>3 Alerts</h1>
              <div className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-yellow-500"></span>
              </div>
            </div>
            <p className='text-sm text-gray-500'>Next due : internet (Tomorrow)</p>
          </div>

        </div>
        <div className='flex w-full h-screen overflow-hidden px-10'>
          <div className='w-full p-4'>
            <RecentActivitytable />
          </div>
          <div className='w-full max-w-lg p-4 overflow-hidden'>
            <Alertreminders />
            <MemberBalance/>
          </div>
        </div>
      </div>
   

  )
}
