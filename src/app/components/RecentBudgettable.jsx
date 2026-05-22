import React from 'react'

export default function RecentBudgettable() {
    const transactions = [
  {
    category: "Food",
    action: "Added $100 for groceries",
    amount: "-$82.14",
    date: "Oct 14, 2023",
    status: "Confirmed",
    statusClass: "bg-green-100 text-green-700",
    amountClass: "text-red-500",
  },
  {
    category: "Entertainment",
    action: "Streaming subscriptions",
    amount: "-$14.99",
    date: "Oct 12, 2023",
    status: "Pending",
    statusClass: "bg-yellow-100 text-yellow-700",
    amountClass: "text-red-500",
  },
  {
    category: "Savings",
    action: "Auto-transfer to fund",
    amount: "+$200.00",
    date: "Oct 10, 2023",
    status: "Completed",
    statusClass: "bg-blue-100 text-blue-700",
    amountClass: "text-green-600",
  },
];
  return (
  <div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 relative">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-medium text-gray-900">Recent Budget Adjustments</p>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
              View History
            </button>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                {["Category", "Action", "Amount", "Date", "Status"].map((h) => (
                  <th
                    key={h}
                    className="text-left text-xs font-semibold uppercase tracking-wider text-gray-400 pb-2 px-2 first:pl-0 last:pr-0"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr
                  key={i}
                  className={`hover:bg-gray-50 transition-colors ${
                    i < transactions.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <td className="py-3 px-2 pl-0 font-medium text-gray-800">{tx.category}</td>
                  <td className="py-3 px-2 text-gray-400 italic">{tx.action}</td>
                  <td className={`py-3 px-2 font-semibold ${tx.amountClass}`}>{tx.amount}</td>
                  <td className="py-3 px-2 text-gray-400 text-xs">{tx.date}</td>
                  <td className="py-3 px-2 pr-0">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tx.statusClass}`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
    </div>
  )
}
