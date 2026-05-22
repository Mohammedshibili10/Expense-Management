'use client'
import Dashnavbar from '@/app/components/Dashnavbar'
import Sidebar from '@/app/components/Sidebar'
import { LayoutDashboard, ScrollText, UsersIcon, Wallet } from 'lucide-react'
import React from 'react'
import { BiCart } from 'react-icons/bi'

export default function layout({ children }) {
    const menus = [{name:"Dashboard", link:"/dashboard/home", icon:LayoutDashboard},{name:"Budget", link:"/dashboard/home/budget", icon:Wallet},{name:"Grocery List", link:"/dashboard/home/grocery-list", icon:BiCart},{name:"Utilities", link:"/dashboard/home/utilities", icon:ScrollText},{name:"Family Balance", link:"/dashboard/home/family-balances", icon:UsersIcon}]
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
    
          <Sidebar menus={menus} />
  
          <div className="flex flex-col flex-1 overflow-hidden">
        <Dashnavbar/>
            <main className="flex-1 overflow-y-auto p-6 bg-gray-100 w-full h-screen ">
              {children}
            </main>
          </div>
    
        </div>
  )
}
