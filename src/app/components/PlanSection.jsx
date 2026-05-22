"use client"
import { Check } from 'lucide-react';
import React from 'react'

export default function PlanSection() {
    const plans = [
        {
            name: "Personal",
            price: "Free",
            desc: "For individual or home use.",
            features: [
                "Basic expense tracking",
                "1 mode (Home)",
                "Monthly reports",
                "Email Support"
            ],
            button: "Get Started",
            highlight: false,
        },
        {
            name: "Pro",
            price: "$9/mo",
            desc: "Best for roommates and teams.",
            features: [
                "All 3 modes (Home, Hostel, Office)",
                "Smart bill splitting",
                "Receipt scanning (OCR)",
                "Priority support",
            ],
            button: "Start Free Trial",
            highlight: true,
        },
        {
            name: "Enterprise",
            price: "Contact Us",
            desc: "For larger businesses.",
            features: [
                "Custom tax modules",
                "Multi-user roles",
                "API access",
                "Dedicated account manager",
            ],
            button: "Talk to Sales",
            highlight: false,
        },
    ];
    return (
        <div className='px-6 lg:px-0 bg-white'>
            <div className='max-w-7xl mx-auto py-16 md:py-22'>
                <div className='flex flex-col justify-center items-center space-y-3 '>
                    <h1 className='text-3xl md:text-4xl font-bold text-center'>Simple, Transparent Pricing</h1>
                    <p className='text-gray-500 max-w-2xl text-center text-sm md:text-base'>Choose the plan that fits your needs. No hidden fees, cancel anytime.</p>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 lg:gap-10 py-12 md:py-16'>
                    {plans.map((item, index) => (
                        <div key={index} className={`relative rounded-2xl bg-white shadow-lg border w-full max-w-sm lg:w-full min-h-[500px] flex flex-col justify-between p-8 md:p-10 transition-all duration-300 ${item.highlight ? "border-blue-500 lg:scale-105 z-10 shadow-blue-100" : "border-gray-200 hover:border-gray-300" }`}>
                                    {item.highlight && (
                                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">MOST POPULAR</div>
                                    )}
                                
                             <div className='space-y-6'>
                                <div className='space-y-2'>
                                    <h1 className='text-xl md:text-2xl font-bold'> {item.name}</h1>
                                    <p className='text-gray-500 text-sm' >{item.desc}</p>
                                </div>
                                <div>
                                    <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900'>{item.price}</h1>
                                </div>

                                <ul className="space-y-4">
                                    {item.features.map((feature, index) => (
                                        
                                        <li key={index} className={`flex items-center gap-3 text-sm md:text-base ${item.highlight ? "font-medium text-gray-800" : "text-gray-600"}`}>
                                            <div className='w-5 h-5 border-2 rounded-full flex items-center justify-center border-blue-600 shrink-0'  >
                                                <Check className="w-3.5 h-3.5 text-blue-600 stroke-[3]"
                                                />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                             </div>

                            <div className='pt-8'>
                                 <button
                                    className={`w-full py-4 rounded-xl font-bold text-sm md:text-base transition-all ${
                                        item.highlight
                                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200"
                                        : "border-2 border-gray-200 text-gray-700 hover:bg-gray-50"
                                    }`}
                                    >
                                    {item.button}
                                </button>
                            </div>
                        </div>
                     ))}
                </div>
               
            </div>

        </div>
    )
}
