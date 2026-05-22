'use client'
import { Calculator, CreditCard,  LayoutDashboard, LogOut, ScrollText, Users, Wallet } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, setUser } from '../../../redux/authSlice';
import { store } from '../../../redux/store';
import axios from 'axios';

export default function Sidebar({ menus }) {
    const menuItems = Array.isArray(menus) ? menus : [];
    const {user}=useSelector(store=>store.auth)
    const pathname= usePathname();
    const router = useRouter();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        router.push('/login');

    }
  useEffect(()=>{
    const fetchuser=async()=>{
        try {
            const res =await axios.get("/api/user",{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            })
            const data = res.data
          
            if(data.user){
                dispatch(setUser(data.user))
            }
        } catch (error) {
            console.log(error)
            
        }

    }
  fetchuser()
    
  },[])
   
    return (
        <div className='w-64 h-screen bg-white shadow-md p-5 flex flex-col justify-between'>
                <div className='flex flex-col '>
                    <div className='flex gap-2 items-center '>
                        <div className='w-12 h-12 bg-[#144BB8] rounded-full flex items-center justify-center'><Wallet className="w-6 h-6 text-white" /></div>
                        <div className=''>
                            <h1 className='font-semibold text-lg '>Finance Manager</h1>
                            <p className='text-sm font-medium text-gray-400'>All-in-one tracking</p>
                        </div>
                    </div>
                    <div  className='  space-y-5 mt-10 '>
                        {menuItems.map((item, index) => {

                            const Icon = item.icon;
                            const isActive = pathname === item.link ? 'bg-[#cbdaf5] text-blue-500' : 'text-gray-500 hover:bg-[#cbdaf5] hover:text-blue-500';
                            return (
                            <div onClick={()=>router.push(item.link)} key={index} className={`flex items-center gap-3 px-4 py-2 rounded-lg ${isActive} transition-all duration-200`} >
            <Icon className="w-6 h-6" />
            <p className="font-medium">{item.name}</p>
          </div>
                        )})}
                    </div>
                </div>
                <div>
                     <hr className='w-full border-gray-400 py-2' />
                <div className='flex items-center gap-2 '>
                   
                    <div className='w-12 h-12 bg-blue-500 rounded-full'></div>
                    <div className=''>
                        <h1 className='font-medium text-lg'>{ user?.name }</h1>
                        <p className='text-sm text-gray-400'>{user?.accountType}</p>
                    </div>
                    <LogOut onClick={handleLogout} className='ml-3 cursor-pointer'/>
                </div>
                </div>
            </div>
    )
}
