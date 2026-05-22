import axios from "axios";
import { useState } from "react";

const icons = ["🍗", "☕", "🌿","🍪"];

const categories = [
  "Produce",
  "Dairy",
  "Meat & Seafood",
  "Snacks",
 
];

export default function CreateGroceryListModal({ setOnClose, }) {
const [input , setInput] = useState({
    name:"",
    price:"",
    category:categories[0],
    icon:0
})
const eventhandlechange=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
}
 
const handlehandlesubmit=async(e)=>{
    e.preventDefault();
try {
    const dataToSend = {
        ...input,
        icon: icons[input.icon] // Convert icon index to actual icon character
    }
    const res = await axios.post("/api/home/grocery-list", dataToSend)
    if(res.data.success || res.status === 201){
        setOnClose(false)
        setInput(res.data.data)
        console.log(res.data)
    }
} catch (error) {
    console.log(error)
}
}
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-800/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-[340px] p-8 animate-[popIn_0.22s_ease]">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-slate-800 tracking-tight">
            New Grocery List
          </h2>
          <button
            onClick={() => setOnClose(false)}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors text-base"
          >
            ✕
          </button>
        </div>

        {/* List Name */}
        <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">
          List Name
        </label>
        <input
          type="text"
          placeholder="Weekly Groceries"
          name="name"
          value={input.name}
          onChange={eventhandlechange}
          className="w-full px-4 py-3 bg-slate-50 border border-transparent rounded-xl text-sm text-slate-800 placeholder-slate-300 outline-none focus:border-blue-500 focus:bg-white transition-all mb-5"
        />

        {/* Price */}
        <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">
          Budget / Price
        </label>
        <div className="relative mb-5">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-semibold pointer-events-none">
            $
          </span>
          <input
            type="number"
            placeholder="0.00"
            name="price"
            value={input.price}
            onChange={eventhandlechange}
            className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-transparent rounded-xl text-sm text-slate-800 placeholder-slate-300 outline-none focus:border-blue-500 focus:bg-white transition-all"
          />
        </div>

        {/* Category */}
        <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">
          Category
        </label>
        <div className="relative mb-6">
          <select
            name="category"
            value={input.category}
            onChange={eventhandlechange}
            className="w-full px-4 py-3 bg-slate-50 border border-transparent rounded-xl text-sm text-slate-800 outline-none appearance-none cursor-pointer focus:border-blue-500 focus:bg-white transition-all"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">
            ▾
          </span>
        </div>

        {/* Icon Selection */}
        <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">
          Icon Selection
        </label>
        <div className="grid grid-cols-5 gap-2 mb-7">
          {icons.map((icon, i) => (
            <button
              key={i}
              name="icon"
              value={i}
              onClick={() => setInput({ ...input, icon: i })}
              className={`aspect-square flex items-center justify-center text-lg rounded-xl border-[1.5px] transition-all
                ${
                  input.icon === i
                    ? "bg-blue-50 border-blue-500 scale-105 shadow-sm"
                    : "bg-slate-50 border-transparent hover:bg-slate-100 hover:scale-105"
                }`}
            >
              {icon}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handlehandlesubmit}
            className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-semibold rounded-xl transition-all"
          >
            Create List
          </button>
          <button
            onClick={() => setOnClose(false)}
            className="flex-1 py-3 bg-white hover:bg-slate-50 text-slate-600 text-sm font-semibold rounded-xl border border-slate-200 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          from { transform: scale(0.92) translateY(12px); opacity: 0; }
          to   { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}