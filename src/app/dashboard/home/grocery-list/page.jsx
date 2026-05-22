"use client"
import Estimatedtotal from '@/app/components/Estimatedtotal'
import Otheractivelist from '@/app/components/Otheractivelist'
import Sharedwith from '@/app/components/Sharedwith'
import Weeklygroceris from '@/app/components/Weeklygroceris'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGrocerylist } from '../../../../../redux/grocerylistSlice'


export default function page() {
  const { grocerylist, loading } = useSelector(state => state.grocerylist)
  const {budget}=useSelector(state=>state.budget) 
   const dispatch = useDispatch()
  useEffect(() => { 
    dispatch(fetchGrocerylist())
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="">

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Weekly Groceries</h1>
            <p className="text-sm text-gray-400 mt-0.5">Last updated 2 hours ago • Updated by Sarah</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-pink-400 border-2 border-white flex items-center justify-center text-xs font-bold text-white">SJ</div>
              <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-white flex items-center justify-center text-xs font-bold text-white">JJ</div>
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-semibold text-gray-600">+2</div>
            </div>
            <button className="flex items-center gap-1.5 border border-gray-300 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-5-5H7a4 4 0 00-5 5v2h5" />
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth={2} fill="none" />
              </svg>
              Share
            </button>
            <button className="flex items-center gap-1.5 bg-blue-600 text-white text-sm font-medium px-3 py-1.5 rounded-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export
            </button>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex gap-4 items-start">
          {/* Left — grocery list takes remaining space */}
          <div className="flex-1 min-w-0">
            <Weeklygroceris grocerylist={grocerylist} loading={loading} />
          </div>

          {/* Right — fixed width sidebar */}
          <div className="w-130 shrink-0 space-y-3">
            <Estimatedtotal grocerylist={grocerylist} budget={budget} />
            <Sharedwith />
            <Otheractivelist />
          </div>
        </div>

      </div>
    </div>
  )
}