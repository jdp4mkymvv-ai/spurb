const data = [
  { month: "Jan", amount: 120 },
  { month: "Feb", amount: 180 },
  { month: "Mar", amount: 215 },
  { month: "Apr", amount: 290 },
  { month: "May", amount: 425 }
];

export function RevenueChart() {
  const maxValue = Math.max(...data.map((item) => item.amount));

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
      <div className="mb-6">
        <div className="section-kicker">Revenue trend</div>
        <h2 className="font-display text-3xl text-white">
          Monthly owner payout projection
        </h2>
        <p className="mt-2 text-sm text-white/62">
          Placeholder operational view until live payment data is connected.
        </p>
      </div>
      <div className="flex min-h-[260px] items-end gap-4">
        {data.map((item) => (
          <div key={item.month} className="flex flex-1 flex-col items-center gap-3">
            <div className="text-sm text-white/55">${item.amount}</div>
            <div className="flex h-52 w-full items-end rounded-[1.5rem] bg-black/20 p-2">
              <div
                className="w-full rounded-[1rem] bg-gradient-to-t from-[#f26f25] via-[#f9c94b] to-[#50ae5c]"
                style={{
                  height: `${(item.amount / maxValue) * 100}%`
                }}
              />
            </div>
            <div className="text-sm text-white/72">{item.month}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
