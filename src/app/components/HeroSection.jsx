'use client';
import { TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
    return (
        <div className='bg-[#FBFDFF] px-6 lg:px-0'>
            <div className='max-w-7xl mx-auto py-16 md:py-40 flex flex-col lg:flex-row items-center gap-10 lg:gap-15'>
                <div className='w-full lg:max-w-175 space-y-5 text-center lg:text-left'>
                    <div className='bg-[#E5ECF8] w-45 mx-auto lg:mx-0 text-center rounded-full'>
                        <h1 className='text-[#144BB8] font-semibold py-1'>Finance Reimagined</h1>
                    </div>
                    <h1 className='text-4xl md:text-5xl lg:text-7xl font-black leading-tight'>Master Your Money, <span className='text-[#144BB8]'>Anywhere</span> You Are</h1>
                    <p className='text-base md:text-lg max-w-115 mx-auto lg:mx-0'>The all-in-one finance manager tailored for your home, hostel, and office. Simplify budgeting, splitting, and taxes in one secure platform.</p>
                    <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-5'>
                       <Link href="/login"> <button className="w-full sm:w-auto bg-[#144BB8] text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                            Get Started Free
                        </button></Link>
                        <button className="w-full sm:w-auto border-2 border-[#EBF0F5] px-6 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                            Watch Demo
                        </button>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start pt-5 gap-3'>
                        <div className='flex '>
                            <div className='w-10 h-10 bg-[#E2E8F0] rounded-full border-2 border-white '></div>
                            <div className='w-10 h-10 bg-[#CBD5E1] rounded-full border-2 border-white -translate-x-2.5 '></div>
                            <div className='w-10 h-10 bg-[#94A3B8] rounded-full border-2 border-white -translate-x-5'></div>
                        </div>
                        <p className='text-gray-500 text-sm md:text-base'>Trusted by 50,000+ users worldwide</p>
                    </div>
                </div>
                <div className='mt-5 w-full lg:w-auto relative'>
                    <Image className='rounded-lg w-full h-auto lg:h-110 object-cover' src="/images/heroimg.svg" alt="hero" width={500} height={500} priority />
                    <div className='flex gap-3 items-center p-3 shadow-xl rounded-lg border-2 border-gray-100 text-center w-48 md:w-50 h-22 bg-white absolute -bottom-6 -left-4 md:-left-12'>
                        <div className='flex justify-center items-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#DCFCE7] '>
                            <TrendingUp className='text-[#16A34A] w-5 h-5 md:w-6 md:h-6' />
                        </div>
                        <div className='text-left'>
                            <p className='text-xs md:text-sm text-gray-500'>Savings Growth</p>
                            <p className='text-base md:text-lg font-bold'>+24.5%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
