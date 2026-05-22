'use client'
import React from 'react'
   import { LayoutDashboard, Receipt, Landmark, Wallet, Users, ReceiptIcon, Badge } from 'lucide-react'
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
    name: "Invoices",
    icon: ReceiptIcon,
    link: "/shared-expenses"
  },
  {
    name: "Tax & GST",
    icon: Landmark,
    link: "/settlements"
  },
  {
    name: "Vendors & Payroll",
    icon: Users,
    link: "/group-bills"
  },
  {
    name: "Employee Claims",
    icon: Badge,
    link: "/employee-claims"
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
