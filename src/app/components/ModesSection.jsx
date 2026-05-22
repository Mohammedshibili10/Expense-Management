"use client";
import { Home, UsersRound, Building2, Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
export default function ModesSection() {
    const modes = [
        {
            id: 1,
            title: "Home: Family First",
            description:
                "Keep your family's finances on track with shared goals and transparent household spending analysis.",
            features: [
                "Shared Expense Tracking",
                "Education Savings Goals",
                "Grocery Budgeting",
            ],
            icon: Home,
            image: "/images/home.jpg",
            iconcolor: "#2563EB",
            iconbg: "#D9E8FC"
        },
        {
            id: 2,
            title: "Hostel: Stress-Free",
            description:
                "No more awkward conversations. Split rent, utilities, and groceries instantly with your roommates.",
            features: [
                "Instant Bill Splitting",
                "IOU & Debt Tracking",
                "Shared Subscription Management",
            ],
            icon: UsersRound,
            image: "/images/hostal.jpg",
            iconcolor: "#EA580C",
            iconbg: "#FFEDD5"
        },
        {
            id: 3,
            title: "Office: Tax Ready",
            description:
                "Streamline business expenses and tax preparation with powerful automation and GST calculation.",
            features: [
                "GST & Tax Calculators",
                "Receipt Scanning (OCR)",
                "Exportable Audit Reports",
            ],
            icon: Building2,
            image: "/images/office.jpg",
            iconcolor: "#4F46E5",
            iconbg: "#E0E7FF"
        },
    ];
    return (
        <div className='bg-[#F6F6F8] px-6 lg:px-0'>
            <div className='max-w-7xl mx-auto py-16 md:py-25 '>
                <div className='flex flex-col justify-center items-center space-y-3 '>
                    <h1 className='text-3xl md:text-4xl font-bold text-center'>Tailored Modes for Every Lifestyle</h1>
                    <p className='text-gray-500 max-w-2xl text-center'>Switch between specialized modes designed to handle the unique financial challenges of your day-to-day life.</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-8 lg:gap-10 py-10 '>
                    {modes.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className='bg-white w-full min-h-[500px] lg:h-155 p-6 md:p-8 lg:pl-10 rounded-xl space-y-4 shadow-sm hover:shadow-md transition-shadow'>
                                <div style={{ backgroundColor: item.iconbg }} className='w-12 h-12 flex justify-center items-center rounded-lg'>
                                    <Icon style={{ color: item.iconcolor }} className={`w-6 h-6 `} />
                                </div>
                                <div className='space-y-4 md:space-y-5'>
                                    <h1 className='text-xl md:text-2xl font-semibold'>{item.title}</h1>
                                    <p className='text-gray-600 text-sm md:text-base'>{item.description}</p>
                                    <ul className="space-y-2 md:space-y-3">
                                        {item.features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-2 text-sm md:text-base">

                                                <div
                                                    style={{ borderColor: item.iconcolor }}
                                                    className="w-3 h-3 border rounded-full flex items-center justify-center" >
                                                    <Check
                                                        style={{ color: item.iconcolor }}       
                                                        className="w-3 h-3"
                                                    />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='pt-2'>
                                        <Image className='w-full rounded-lg object-cover' src={item.image} alt={item.title} width={500} height={300} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
