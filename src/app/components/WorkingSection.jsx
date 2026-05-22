"use client";
import React from 'react'

export default function WorkingSection() {
  const steps = [
    {
      id: 1,
      title: "Create Your Account",
      desc: "Sign up with your email or social accounts. We prioritize privacy, and your data stays yours.",
    },
    {
      id: 2,
      title: "Choose Your Mode",
      desc: "Select Home, Hostel, or Office mode. You can easily switch between modes or use them simultaneously.",
    },
    {
      id: 3,
      title: "Connect & Track",
      desc: "Invite members to your shared wallets, link your bank accounts for auto-sync, or start logging expenses manually.",
    },
    {
      id: 4,
      title: "Gain Insights",
      desc: "Review your automated weekly reports and discover ways to optimize your spending and reach goals faster.",
    },
  ];
  return (
    <div className='bg-[#F6F6F8] px-6 lg:px-0'>
      <div className='max-w-7xl mx-auto py-16 md:pt-15'>
        <div className='flex flex-col justify-center items-center space-y-3 '>
          <h1 className='text-3xl md:text-4xl font-bold text-center'>How it Works</h1>
          <p className='text-gray-500 max-w-2xl text-center text-sm md:text-base'>Get up and running in less than two minutes with our simple onboarding process.</p>
        </div>
        <div className="max-w-3xl mx-auto py-12 md:py-16">
          {steps.map((step, index) => (
            <div key={step.id} className="flex gap-4 md:gap-8 relative pb-10 md:pb-12">
              <div className="flex flex-col items-center relative">
                <div className="w-10 h-10 md:w-13 md:h-13 flex text-lg md:text-2xl items-center justify-center rounded-full bg-[#394BB8] text-white font-bold z-10 shrink-0">
                  {step.id}
                </div>
                {index !== steps.length - 1 && (
                  <div className="absolute top-10 md:top-12 w-0.5 h-full bg-gray-300"></div>
                )}
              </div>

              <div className="pt-1">
                <h2 className="text-lg md:text-xl font-bold">{step.title}</h2>
                <p className="text-gray-500 text-xs md:text-sm mt-1 leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
