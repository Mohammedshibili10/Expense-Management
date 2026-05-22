"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  const menuItems = ["Modes", "Feature", "How it Works"];

  return (
    <div className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between p-4">
        
        <Link href="/">
            <h1 className="text-2xl font-black text-[#144BB8]">FinFlow</h1>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item, index) => (
            <p key={index} className="text-gray-600 font-medium cursor-pointer hover:text-[#144BB8] transition-colors">
              {item}
            </p>
          ))}
        </div>

        <div className="flex items-center gap-4">
            <Link href="/login" className="hidden sm:block">
                <button className="bg-[#144BB8] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-100">
                    Get Started
                </button>
            </Link>
            {/* Mobile Menu Toggle could be added here if needed */}
        </div>
      </nav>
    </div>
  );
}