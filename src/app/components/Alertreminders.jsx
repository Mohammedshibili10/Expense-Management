import { BellRing, Wifi, Zap } from 'lucide-react'
import React from 'react'

export default function Alertreminders() {
    const data=[{title: "Electricity Bill", description: "3 days left to pay", amount: "₹2,450",icon:Zap,color:"#FFFBEB",iconColor:"#F59E0B"},
    {title: "Internet Bill", description: "5 days left to pay", amount: "₹450",icon:Wifi,color:"#EEF2FF",iconColor:"#3B82F6"},
    ]
  return (
    <div className=' space-y-5 w-full '>
        <div className='flex items-center  gap-4'>
            <BellRing className='text-[#F59E0B]' size={30}/>
            <h1 className='font-medium  text-2xl'>Alerts & Reminders</h1>
        </div>
        <div className='flex flex-col gap-4 mt-5'>
                {data.map((item,index)=>{
                    const Icon=item.icon;
                    return (
                        <div style={{borderLeftColor:item.iconColor}} key={index} className='flex items-center  justify-between bg-white rounded-lg p-6 shadow-sm border-l-4 border-gray-100'>
                            <div className='flex gap-5'>
                            <div style={{backgroundColor:item.color}} className='bg-yellow-200 flex items-center px-3 py-2 rounded-lg'>
                                <Icon style={{color:item.iconColor}}/>
                            </div>
                            <div>
                                <h1 className='text-lg font-medium'>{item.title}</h1>
                                <p className='text-sm'>{item.description}</p>
                            </div>
                            </div>
                            <h1 className='text-lg font-bold'>{item.amount}</h1>
                        </div>
                    )
                })}
        </div>
    </div>
  )
}
