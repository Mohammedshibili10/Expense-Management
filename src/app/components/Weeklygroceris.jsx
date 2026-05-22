"use client";
import React from 'react'
import { useState } from "react";
import CreateGroceryListModal from './CreateGrocerylist';
import axios from 'axios';

export default function Weeklygroceris({ grocerylist, loading }) {

  const [showaddgrocerylist, setShowaddgrocerylist] = useState(false);
 const [checkedItems, setCheckedItems] = useState({});
  const groupeditems = (grocerylist || []).reduce((acc, item) => {
    const category = item.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {})

  if (loading) {
    return <div className="text-center py-20 text-gray-500 font-medium">Loading grocery list...</div>;
  }

  const checkeditem = async (id,checked)=>{
    try {
      setCheckedItems((prev) => ({ ...prev, [id]: checked }));
      const res= await axios.put(`/api/home/grocery-list/${id}`,{checked})

      console.log(checked,"checked")
      return res.data

    } catch (error) {
      return {message:error.message || "Server error", success:false}
    }
  }


  return (
    <div>
      <div className="flex gap-4 items-start">

        {/* Left Column */}
        <div className="flex-1 space-y-4">

          {/* Quick Add Bar */}
          <div className="bg-white rounded-xl border-l-4 border-blue-500 border border-gray-200 px-4 py-3 flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3" />
            </svg>
            <span className="flex-1 text-sm text-gray-400">Quick add item (e.g. 2L Milk)...</span>
            <span onClick={() => setShowaddgrocerylist(true)} className="text-sm font-semibold text-blue-600 cursor-pointer">Add</span>
            {showaddgrocerylist && <CreateGroceryListModal setOnClose={setShowaddgrocerylist} />}
          </div>

          {/* Sections — map */}
          {Object.entries(groupeditems).map(([category, items]) => {
            const displayIcon = items[0]?.icon || "📦";
            return (
              <div key={category} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">

                {/* Section Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-lg shadow-sm">
                      {displayIcon}
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-600">
                      {category}
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600">
                    {items.length} {items.length === 1 ? 'Item' : 'Items'}
                  </span>
                </div>

                {/* Items — map */}
                {items.map((item, idx) => (
                  <div
                    key={item._id || idx}
                    className={`flex items-center justify-between px-4 py-3 ${idx < items.length - 1 ? "border-b border-gray-100" : ""
                      } ${checkedItems[item._id] || item.checked ? "bg-gray-50/50" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                     
                          <input 
                            type="checkbox"
                            checked={checkedItems[item._id] || item.checked || false}
                            onChange={(e)=>{
                            checkeditem(item._id,e.target.checked)
                          }} />
                      <span className={`text-sm ${checkedItems[item._id] || item.checked ? "line-through text-gray-400" : "text-gray-800"}`}>
                        {item.name}
                      </span>
                    </div>
                    <span className={`text-sm font-medium ${checkedItems[item._id] || item.checked ? "text-gray-400" : "text-gray-700"}`}>
                      $ {item.price}
                    </span>
                  </div>
                ))}

              </div>
            )
          })}

        </div>

      </div>
    </div>
  )
}
