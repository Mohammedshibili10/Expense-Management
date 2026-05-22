import React from 'react'

export default function RecentBillHistory() {
    const billingHistory = [
  {
    icon: "⚡",
    iconBg: "bg-yellow-100",
    service: "Electricity",
    date: "Oct 24, 2023",
    amount: "$142.12",
    status: "Unpaid",
    statusClass: "bg-red-100 text-red-600",
    action: "Pay Now",
    actionClass: "text-blue-600 font-semibold",
  },
  {
    icon: "📶",
    iconBg: "bg-blue-100",
    service: "Internet",
    date: "Oct 20, 2023",
    amount: "$89.99",
    status: "Success",
    statusClass: "bg-green-100 text-green-600",
    action: "View PDF",
    actionClass: "text-gray-500",
  },
  {
    icon: "💧",
    iconBg: "bg-teal-100",
    service: "Water & Sewage",
    date: "Oct 12, 2023",
    amount: "$54.00",
    status: "Success",
    statusClass: "bg-green-100 text-green-600",
    action: "View PDF",
    actionClass: "text-gray-500",
  },
];
  return (
    <div>
          
 
          {/* Billing History */}
          <div className="flex-1 bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm font-semibold text-gray-900">Recent Billing History</p>
              <div className="flex gap-2">
                <button className="w-7 h-7 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-50">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 8h10M10 12h4" />
                  </svg>
                </button>
                <button className="w-7 h-7 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-50">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            </div>
 
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  {["Service", "Bill Date", "Amount", "Status", "Action"].map((h) => (
                    <th key={h} className="text-left text-xs font-semibold uppercase tracking-wider text-gray-400 pb-2 px-2 first:pl-0">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((row, i) => (
                  <tr key={i} className={i < billingHistory.length - 1 ? "border-b border-gray-100" : ""}>
                    <td className="py-3 pl-0 px-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full ${row.iconBg} flex items-center justify-center text-xs`}>
                          {row.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-800">{row.service}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-xs text-gray-400">{row.date}</td>
                    <td className="py-3 px-2 text-sm font-semibold text-gray-800">{row.amount}</td>
                    <td className="py-3 px-2">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${row.statusClass}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className={`py-3 px-2 text-xs ${row.actionClass}`}>{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

    </div>
  )
}
