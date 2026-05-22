import React from 'react'

export default function RecentActivitytable() {
    const categoryStyles = {
  Personal: "bg-blue-50 text-blue-500",
  Office:   "bg-purple-50 text-purple-400",
  Hostel:   "bg-red-50 text-red-400",
  Food:     "bg-green-50 text-green-500",  // പുതിയത്
};

     const activities = [{
    id: 1,
    date: "Oct 24, 2023",
    description: "Spencers Grocery",
    category: "Personal",
    amount: 1240,
    member: "You",
    avatar: "https://i.pravatar.cc/32?img=5",
  },
  {
    id: 2,
    date: "Oct 23, 2023",
    description: "Broadband Monthly",
    category: "Office",
    amount: 899,
    member: "Rohit",
    avatar: "https://i.pravatar.cc/32?img=12",
  },
  {
    id: 3,
    date: "Oct 22, 2023",
    description: "Coffee & Snacks",
    category: "Personal",
    amount: 450,
    member: "Sneha",
    avatar: "https://i.pravatar.cc/32?img=9",
  },
  {
    id: 4,
    date: "Oct 21, 2023",
    description: "Laundry Service",
    category: "Hostel",
    amount: 220,
    member: "You",
    avatar: "https://i.pravatar.cc/32?img=5",
  },
];
  return (
    <div className='w-full'>
        <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>Recent Activity </h1>
        <button className='text-blue-500 font-semibold py-2 px-4 rounded-lg hover:bg-blue-600'>View All</button>
        </div>
        <div className='border border-gray-200 rounded-lg overflow-hidden mt-6'>
        <table className="min-w-full bg-white  ">
          <thead className=''>
            <tr className='font-semibold bg-[#edf1f5] text-gray-500'>
              <th className="py-2 px-4 border-b  border-gray-200">Date</th>
              <th className="py-2 px-4 border-b  border-gray-200">Description</th>
              <th className="py-2 px-4 border-b  border-gray-200">Category</th>
                <th className="py-2 px-4 border-b  border-gray-200">Amount</th>
                <th className="py-2 px-4 border-b  border-gray-200">Member</th>

            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr className='text-center' key={activity.id}>
                <td className="py-4 px-4 border-b  border-gray-200">{activity.date}</td>
                <td className="py-4 px-4 border-b  border-gray-200 font-medium">{activity.description}</td>
                <td className="py-4 px-4 border-b  border-gray-200"><span className={` w-full py-1 px-2 rounded-full text-sm ${categoryStyles[activity.category] ?? "bg-gray-100 text-gray-500"}  `}>{activity.category}</span></td>
                <td className="py-4 px-4 border-b  border-gray-200 font-medium">${activity.amount.toFixed(2)}</td>
                <td className="py-4 px-4 border-b  border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    <img src={activity.avatar} alt={activity.member} className="w-8 h-8 rounded-full" />
                    <span>{activity.member}</span>
                  </div>
                </td>
              </tr>
            ))}
            
           
          </tbody>
        </table>
        </div>
      </div>
    )
  }
