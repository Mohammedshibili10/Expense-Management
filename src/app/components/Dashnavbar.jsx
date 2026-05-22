"use client";
import { BellIcon, Search, Plus } from "lucide-react";

export default function Dashnavbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex items-center justify-between h-16">
 
      <div className="w-1/2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

     
      <div className="flex items-center space-x-4">
        {/* Add Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add</span>
        </button>


        <button className="relative p-2 text-gray-600 hover:text-gray-900">
          <BellIcon className="h-5 w-5" />
         
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-sm font-medium text-gray-700">U</span>
        </div>
      </div>
    </nav>
  );
}