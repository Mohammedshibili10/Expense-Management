import { UsersRound } from 'lucide-react'
import React from 'react'

export default function MemberBalance() {
    const members = [
  {
    id: 1,
    name: "Rohit Sharma",
    avatar: "https://i.pravatar.cc/40?img=12",
    status: "owes_you",
    amount: 500,
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    avatar: "https://i.pravatar.cc/40?img=9",
    status: "you_owe",
    amount: 220,
  },
  {
    id: 3,
    name: "Kunal Verma",
    avatar: "https://i.pravatar.cc/40?img=3",
    status: "settled",
    amount: 0,
  },
];
  return (
    <div className='mt-5'>
        <div >
            <div className='flex items-center gap-2'>
                <UsersRound size={28} className='text-blue-500' />
                <h2 className='font-medium text-2xl'>Member Balance</h2>
            </div>
            <div className='mt-4 space-y-4 bg-white rounded-lg p-6 shadow-sm border border-gray-100'>
                    {members.map((member,index) => (
                <div key={index} className='flex justify-between items-center'>
                    <div className='flex gap-5 '>
                    <img className='rounded-full w-12 h-12' src={member.avatar} alt={member.name} />
                    <div>
                        <h1 className='text-xl font-medium text-gray-900'>{member.name}</h1>
                        <p className={ `text-sm ${member.status === "owes_you" ? "text-green-500" : member.status === "you_owe" ? "text-red-500" : "text-gray-500"}` }>₹{member.amount.toLocaleString()} {member.status === "owes_you" ? "owed ": member.status === "you_owe" ? "you owe" : "settled"}</p>
                        </div>
                    </div>
                    <button className='bg-blue-500 text-white w-20 h-9 rounded-lg hover:bg-blue-600'>{member.status === "owes_you" ? "Get Paid" : member.status === "you_owe" ? "Pay Now" : "Settle Up"}</button>
                </div>
            ))}
            </div>
        </div>

    </div>
  )
}
