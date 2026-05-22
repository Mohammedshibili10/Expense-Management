'use client';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { Eye, EyeClosed, LockKeyhole, Mail, Phone, UserRound } from 'lucide-react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setUser } from '../../../../redux/authSlice';
import { setLoading } from '../../../../redux/authSlice';
import { useRouter } from 'next/navigation';
export default function page() {
    const modes = ['Home', 'Office', 'Hostel']
    const [input, setInput] = useState({
        name: "",
        email: "",
        phoneNumber: '',
        password: "",
        accountType: ""
    })
 const router=useRouter()
    const {loading,user}=useSelector(state=>state.auth)
    const dispatch=useDispatch()
    const [activeMode, setActiveMode] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const togglepassword = () => {
        setShowPassword(!showPassword)
    }

    const handleEventChange=(e)=>{
        setInput({...input,[e.target.name] : e.target.value})
    }
    const handleSubmit= async(e)=>{
        e.preventDefault()
        try {
              dispatch(setLoading(true))
            const res=await axios.post("/api/auth/signup",input)
           if (res.status === 200) {
            alert(res.data.message)
            dispatch(setUser(res.data.user))
            router.push('/login')
            console.log(res.data)
           }
        }
        catch(error) {
                dispatch(setLoading(false))
            console.log(error?.response?.data?.message || error.message)
        }

        finally{
            dispatch(setLoading(false))
        }
       
    
    }
     useEffect(()=>{
            if(user){
            router.push('/login')
            }
        },[])

    return (
        <div className='bg-[#F6F6F8] w-full h-screen flex items-center justify-center'>
            <div className='w-130 h-180 bg-white rounded-2xl shadow-lg p-10  space-y-3'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>Welcome Back</h1>
                    <p className='text-gray-600'>Log in to manage your finances across all accounts</p>
                </div>
                <div className=''>
                    <h1 className=' font-medium'>Select Account Type</h1>

                    <div className='bg-[#F1F5F9] h-13 p-2 flex gap-2 justify-around items-center mt-2  rounded-lg'>
                        {modes.map((item, index) => (
                            <div  key={index}  name='accountType' onClick={() => {  setActiveMode(item);  setInput({ ...input, accountType: item });}} className={`text-sm text-[#144BB8] font-semibold w-full h-10 rounded-md transition-all duration-300 ease-in-out cursor-pointer text-center pt-2.5 ${activeMode === item ? 'bg-white ' : ""}`}>{item}</div>
                        ))}
                    </div>

                </div>
                <div className=' space-y-2 relative '>
                    <div className='relative flex flex-col'>
                        <label className='font-medium text-gray-400'>Name </label>
                        <UserRound className='absolute top-6 left-1.5 w-5 h-5 text-gray-400 mt-3 ml-2' />
                        <input  className='border border-gray-300 rounded-md w-full h-10 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10' type="text" name='name' value={input.name} onChange={handleEventChange}  placeholder='John Doe' />
                    </div>
                    <div className='relative flex flex-col'>
                        <label className='font-medium text-gray-400'>Email Address</label>
                        <Mail className='absolute top-6 left-1.5 w-5 h-5 text-gray-400 mt-3 ml-2' />
                        <input className='border border-gray-300 rounded-md w-full h-10 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10' type="email" name='email' value={input.email} onChange={handleEventChange} placeholder='name@gmail.com' />
                    </div>
                    <div className='relative flex flex-col' >

                        <label className='font-medium text-gray-400'>Phone Number</label>
                        <Phone className='absolute top-6 left-1.5 w-5 h-5 text-gray-400 mt-3 ml-2' />
                        <input className='border border-gray-300 rounded-md w-full h-10 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10' type="tel" name='phoneNumber' value={input.phoneNumber} onChange={handleEventChange} placeholder='123-456-7890' />
                    </div>
                    <div className='flex justify-between  relative'>
                        <LockKeyhole className='absolute top-7 left-2  w-5 h-5 text-gray-400 mt-3 ml-2' />
                        <label className='font-medium text-gray-400'>Password</label><p className='text-sm text-blue-500'>Forgot password?</p>
                        {showPassword ? <EyeClosed onClick={togglepassword} className='absolute top-7 right-2 w-5 h-5 text-gray-400 mt-3 mr-2 cursor-pointer' /> : <Eye onClick={togglepassword} className='absolute top-7 right-2 w-5 h-5 text-gray-400 mt-3 mr-2 cursor-pointer' />}
                    </div>
                    <input className='border border-gray-300 rounded-md w-full h-10 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12' type={showPassword ? "text" : "password"} name='password' value={input.password} onChange={handleEventChange} placeholder='• • • • • • • •' />
                </div>{loading ? <button disabled className='bg-blue-300 w-full h-12 text-white text-xl  rounded-md  font-bold '>Loading...</button> : <button onClick={handleSubmit} className='bg-blue-500 w-full h-12 text-white text-xl  rounded-md hover:bg-blue-600 transition-colors duration-300 font-bold '>Sign In</button>}
                <div className='flex items-center gap-3 mt-2 text-gray-500'>
                    <hr className='w-full' />
                    <p className='text-xs w-80 text-center uppercase'>Or continue with</p>
                    <hr className='w-full' />
                </div>
                <div className='flex gap-5 py-1'>
                    <button className='w-full font-medium  bg-white border border-gray-300 text-gray-700 py-2  rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2'><FcGoogle className='w-7 h-7' />Google</button>
                    <button className='w-full font-medium bg-white border border-gray-300 text-gray-700 py-2  rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2'><BiLogoFacebookCircle className='w-7 h-7' />Facebook</button>
                </div>

                <h1 className='text-center text-sm'>Already you have an account ?< Link href="/login"><span className='text-blue-500 hover:underline'> Sign in</span></Link></h1>


            </div>
        </div>
    )
}
