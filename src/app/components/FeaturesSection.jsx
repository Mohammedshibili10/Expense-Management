"use client"
import { Shield,Repeat,Bell,ChartNoAxesCombined, ArrowRight } from 'lucide-react'
import React from 'react'

export default function FeaturesSection() {
    const cards=[{
       id:1, icon:Shield,title:"Secure Encryption",desc:"Bank-grade 256-bit encryption for all your financial data and personal information."
    },{
         id:2, icon:Repeat,title:"Real-time Sync",desc:"Your data is synced instantly across all your devices and shared accounts."
    },{
         id:3, icon:Bell,title:"Smart Reminders",desc:"Predictive alerts for upcoming bills, low balances, and savings milestones."
    },{
         id:4, icon:ChartNoAxesCombined,title:" Advanced Analytics",desc:"Visualize your spending patterns with interactive charts and weekly insights."
    }]
  return (
    <div className='bg-[#F8FAFC] px-6 lg:px-0'>
        <div className='max-w-7xl mx-auto py-16 md:py-20'>
            <div className='space-y-4 md:space-y-5 mb-10'>
                <h1 className='text-2xl md:text-3xl font-bold' >Core Universal Features</h1>
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
                    <p className='max-w-2xl text-gray-700 text-sm md:text-base'>Regardless of the mode you choose, these core technologies power your financial journey with security and speed.</p>
                    <button className='font-semibold text-[#394BB8] flex gap-2 items-center hover:translate-x-1 transition-transform'>
                        Explore all features <ArrowRight className='w-4 h-4'/>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
            {cards.map((item,index)=>{
                const Icon= item.icon;
                return(
                    <div key={index} className='bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow'>
                        <div className='space-y-3'>
                            <div className='w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center'>
                                <Icon className='text-[#394BB8] w-5 h-5'/>
                            </div>
                            <h1 className='text-lg font-bold'>{item.title}</h1>
                            <p className='text-gray-600 text-sm leading-relaxed'>{item.desc}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}
