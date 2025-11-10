import { TrendingUp, Gauge, Activity, MapPin } from "lucide-react";

export default function Analytics() {
  const kpis = [
    { label: "Total Revenue", value: "$2.4M", change: "+8.2%" },
    { label: "Conversion Rate", value: "4.8%", change: "+0.6%" },
    { label: "Avg CPL", value: "$36", change: "-4.1%" },
    { label: "Show Rate", value: "72%", change: "+3.4%" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-xs text-gray-500">{k.label}</div>
            <div className="text-2xl font-semibold text-gray-900">{k.value}</div>
            <div className={`text-xs mt-1 ${k.change.startsWith("-") ? "text-rose-600" : "text-emerald-600"}`}>{k.change} vs last month</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-sm font-medium text-gray-900 mb-2">Lead Conversion Funnel</div>
          <div className="space-y-2 text-sm">
            {[
              ["Website Visitors", 100],
              ["Leads Captured", 60],
              ["Qualified Leads", 35],
              ["Appointments", 20],
              ["Deals Closed", 6],
            ].map(([stage, pct]) => (
              <div key={stage}>
                <div className="flex items-center justify-between text-gray-600">
                  <span>{stage}</span>
                  <span>{pct}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded">
                  <div className="h-full rounded bg-gradient-to-r from-indigo-500 to-fuchsia-500" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-sm font-medium text-gray-900 mb-2">AI Agent Performance</div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            {["Lead Capture", "Setter", "Matcher", "Ads", "Valuation", "Analytics"].map((a) => (
              <div key={a} className="p-3 rounded-lg bg-gray-50">
                <div className="text-gray-700">{a}</div>
                <div className="text-xs text-gray-500">Uptime 99.2%</div>
                <div className="mt-1 h-1.5 bg-gray-200 rounded">
                  <div className="h-full bg-emerald-500 rounded" style={{ width: `92%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-sm font-medium text-gray-900 mb-2">Hot Neighborhoods</div>
          <ul className="space-y-2 text-sm">
            {["Downtown", "Riverside", "Hillcrest", "Lakeside"].map((n) => (
              <li key={n} className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700"><MapPin className="w-4 h-4 text-gray-400" /> {n}</div>
                <div className="text-xs text-gray-500">Avg $1.1M • 320 leads</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-sm font-medium text-gray-900 mb-2">AI Price Predictions</div>
          <div className="text-sm text-gray-600">Next 3 months forecast • Inventory • Top type</div>
          <div className="mt-3 h-32 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 grid place-items-center text-gray-400">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-sm font-medium text-gray-900 mb-2">Ad Campaign Performance</div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            {["Facebook", "Google", "Instagram"].map((p) => (
              <div key={p} className="p-3 rounded-lg bg-gray-50">
                <div className="text-gray-700">{p}</div>
                <div className="text-xs text-gray-500">Leads 120 • CPL $32 • ROAS 2.8x</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-sm font-medium text-gray-900 mb-2">AI Narrative Summary</div>
          <div className="text-sm text-gray-600">Here’s what changed this month: stronger luxury demand, rising inventory in suburbs, and improved appointment show rate.</div>
        </div>
      </div>
    </div>
  );
}
