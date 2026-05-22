"use client"
import Addbudget from '@/app/components/Addbudget'
import CategoryCard from '@/app/components/CategoryCard'
import RecentBudgettable from '@/app/components/RecentBudgettable'
import SpendtrendTable from '@/app/components/SpendtrendTable'
import axios from 'axios'
import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBudget} from '../../../../../redux/budgetSlice'

export default function page() {
  const {budget}=useSelector(state=>state.budget)
  const dispatch=useDispatch()
   useEffect(()=>{
    dispatch(fetchBudget())
   },[dispatch])
  const [showAddBudget, setShowAddBudget] = React.useState(false)
  return (
     <div className='p-6'>
         <div className="flex items-start justify-between py-5">
          <div>
            <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-1">
              Monthly Allocation
            </p>
            <h1 className="text-3xl font-semibold text-gray-900">October Budgets</h1>
          </div>
          <button onClick={()=>setShowAddBudget(true)} className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            + Create New Budget
          </button>
       </div>
        <SpendtrendTable/>
    <CategoryCard budget={budget}/>
    <RecentBudgettable/>
    {showAddBudget && <Addbudget setClose={setShowAddBudget} />}


    
        </div>
  )
}
