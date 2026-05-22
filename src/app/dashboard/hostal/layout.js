'use client'
import React from 'react'
   import { LayoutDashboard, Receipt, Landmark, Wallet, Users } from 'lucide-react'
import Sidebar from '@/app/components/Sidebar'
import Dashnavbar from '@/app/components/Dashnavbar'
export default function layout({ children }) {


const hostalmenus = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    link: "/dashboard"
  },
  {
    name: "Shared Expenses",
    icon: Receipt,
    link: "/shared-expenses"
  },
  {
    name: "Settlements",
    icon: Landmark,
    link: "/settlements"
  },
  {
    name: "Group Bills",
    icon: Wallet,
    link: "/group-bills"
  },
  {
    name: "Roommates",
    icon: Users,
    link: "/roommates"
  }
]
  return (
   <div className="flex h-screen overflow-hidden bg-gray-50">
       
             <Sidebar menus={hostalmenus} />
     
             <div className="flex flex-col flex-1 overflow-hidden">
           <Dashnavbar/>
               <main className="flex-1 overflow-y-auto p-6">
                 {children}
               </main>
             </div>
       
           </div>
  )
}
