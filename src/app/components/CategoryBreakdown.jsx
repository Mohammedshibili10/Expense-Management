// components/CategoryBreakdown.jsx

const categories = [
  { label: "Groceries", amount: 11025, color: "green" },
  { label: "Dining Out",   amount: 8575,  color: "blue" },
  { label: "Utilities",   amount: 4900,  color: "red" },
];

const max = Math.max(...categories.map((c) => c.amount));

export default function CategoryBreakdown() {
  return (
    <div className="  mt-3">
      

      <div className="space-y-4">
        {categories.map(({ label, amount, color }) => {
          const percent = Math.round((amount / max) * 100);
          return (
            <div key={label}>
              {/* Label + Amount */}
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm  font-medium">{label}</span>
                <span className="text-sm font-medium">
                  ₹{amount.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${percent}%`, backgroundColor: color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}