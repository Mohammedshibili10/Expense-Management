'use client'
import React from 'react'

export default function GetstartBadgesection() {
  return (
    <div className='bg-[#F6F6F8] px-6 lg:px-0'>
        <div className='max-w-7xl mx-auto py-16 md:py-20'>
            <div className='flex flex-col items-center text-center w-full min-h-[400px] bg-[#275ABE] text-white rounded-2xl p-8 md:p-15 space-y-8 md:space-y-10'>
                <div className='space-y-4 md:space-y-5'>
                    <h1 className='text-3xl md:text-5xl font-bold leading-tight'>Ready to Take Control of Your Finances?</h1>
                    <p className='font-medium text-base md:text-lg text-blue-100 max-w-2xl mx-auto'>Join 50,000+ people who are managing their money better every day. Free for individuals, affordable for households and offices.</p>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
                    <button className="bg-white text-[#275ABE] px-8 md:px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                        Get Started Now
                    </button>
                    <button className="border border-blue-300 px-8 md:px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                        Contact Sales
                    </button>
                </div>
                <p className='text-xs md:text-sm text-blue-200'>No credit card required. 14-day premium trial included.</p>
            </div>
        </div>
    </div>
  )
}
