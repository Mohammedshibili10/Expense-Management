'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBudget, setLoading } from '../../../redux/budgetSlice'


export default function Addbudget({setClose}) {
    const {budget,loading}=useSelector(state=>state.budget)
    const dispatch=useDispatch()
    const router=useRouter()
     const [input,setinput] =useState({
        name:"",
        category:"",
        limit:"",
        currency:"USD",
        alerts:true
     })

     const eventhandlechange=(e)=>{
        setinput({...input,[e.target.name]:e.target.type === "checkbox" ? e.target.checked : e.target.value})
     }
     const handlesubmit= async (e)=>{
        e.preventDefault()
        try{
            dispatch(setLoading(true))
            const res= await axios.post("/api/home/budget", input)
            if(res.status===200){
                alert(res.data.message)
                dispatch(setBudget([...budget, res.data.data]))
                dispatch(setLoading(false))
                setClose(false)
                
                console.log(res.data)
            }

        } catch (error) {
                dispatch(setLoading(false))
            console.error("Error creating budget:", error)
        }
        finally{
            dispatch(setLoading(false))
        }
     }


   
    return (

        <div id="overlay" className="fixed inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center z-10 p-4">

            {/* <!-- Modal card --> */}
            <div className="bg-white rounded-2xl shadow-2xl w-full p-8 relative z-20" style={{ maxWidth: "460px" }}>

                {/* <!-- Close --> */}
                
                <button
                    onClick={() => setClose(false)}
                    className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors text-lg leading-none w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-100">
                    ✕
                </button>

                {/* <!-- Header --> */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-slate-800">Create New Budget</h2>
                    <p className="text-sm text-slate-400 mt-1">Set boundaries for your financial growth</p>
                </div>

                {/* <!-- Form --> */}
                <div className="flex flex-col gap-5">

                    {/* <!-- Budget Name --> */}
                    <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-1.5">Budget Name</label>
                        <input
                            id="budgetName"
                            type="text"
                            onChange={eventhandlechange}
                            value={input.name}
                            name='name'
                            placeholder="e.g. Summer Vacation, Groceries"
                            className="w-full h-10 px-3.5 rounded-lg border border-slate-200 text-sm text-slate-700 placeholder-slate-300 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition"
                        />
                        <p id="nameError" className="text-xs text-red-400 mt-1 hidden">Please enter a budget name.</p>
                    </div>

                    {/* <!-- Category --> */}
                    <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-1.5">Category</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">🔍</span>
                            <select onChange={eventhandlechange} value={input.category} name='category' className="w-full h-10 pl-8 pr-9 rounded-lg border border-slate-200 text-sm text-slate-400 bg-white outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition cursor-pointer">
                                <option value="">Search categories...</option>
                                <option className="text-slate-700">Food &amp; Dining</option>
                                <option className="text-slate-700">Travel</option>
                                <option className="text-slate-700">Entertainment</option>
                                <option className="text-slate-700">Health &amp; Fitness</option>
                                <option className="text-slate-700">Shopping</option>
                                <option className="text-slate-700">Utilities</option>
                                <option className="text-slate-700">Rent &amp; Housing</option>
                            </select>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">▾</span>
                        </div>
                    </div>

                    {/* <!-- Monthly Limit + Currency --> */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-1.5">Monthly Limit</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">$</span>
                                <input
                                    type="number"
                                    value={input.limit}
                                    onChange={eventhandlechange}
                                    name='limit'
                                   
                                    step="0.01"
                                    min="0"
                                    className="w-full h-10 pl-7 pr-3 rounded-lg border border-slate-200 text-sm text-slate-700 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-1.5">Currency</label>
                            <div className="relative">
                                <select onChange={eventhandlechange} value={input.currency} name='currency' className="w-full h-10 pl-3 pr-8 rounded-lg border border-slate-200 text-sm text-slate-700 bg-white outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition cursor-pointer">
                                    <option>USD ($)</option>
                                    <option>EUR (€)</option>
                                    <option>GBP (£)</option>
                                    <option>INR (₹)</option>
                                    <option>JPY (¥)</option>
                                    <option>AED (د.إ)</option>
                                </select>
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">▾</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Smart Alerts toggle --> */}
                    <div className="flex items-center justify-between bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-base shrink-0">🔔</div>
                            <div>
                                <p className="text-sm font-medium text-slate-700">Smart Alerts</p>
                                <p className="text-xs text-slate-400">Notify me at 80% of my limit</p>
                            </div>
                        </div>
                        {/* <!-- Toggle --> */}
                        <label className="relative inline-flex items-center cursor-pointer shrink-0">
                            <input onChange={eventhandlechange} checked={input.alerts} name='alerts' type="checkbox" id="alertToggle" className="sr-only peer"  />
                            <div className="w-11 h-6 bg-slate-200 peer-checked:bg-blue-600 rounded-full transition-colors duration-200"></div>
                            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 peer-checked:translate-x-5"></div>
                        </label>
                    </div>

                    {/* <!-- Actions --> */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                        <button
                            onClick={() => setClose(false)}
                            className="h-11 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 active:scale-95 transition-all">
                            Cancel
                        </button>
                        {loading ? <button disabled className="h-11 rounded-xl bg-blue-300 text-white text-sm font-semibold transition-all shadow-md shadow-blue-200">Loading...</button> : <button
                            id="createBtn"
                            onClick={handlesubmit}
                            className="h-11 rounded-xl bg-blue-600 hover:bg-brand-700 active:scale-95 text-white text-sm font-semibold transition-all shadow-md shadow-blue-200">
                            Create Budget
                        </button>}
                    </div>


                </div>
            </div>
        </div>
                )
}
