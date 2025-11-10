import Spline from "@splinetool/react-spline";
import { ArrowUpRight, ArrowDownRight, Mic, Plus, Calendar as Cal, Search, BadgeDollarSign } from "lucide-react";

function Sparkline({ trend = "up" }) {
  const color = trend === "up" ? "stroke-emerald-500" : "stroke-rose-500";
  return (
    <svg viewBox="0 0 100 32" className={`w-24 h-8 ${color}`} fill="none">
      <path d="M1 24L20 18L36 22L54 10L70 12L88 6L99 8" strokeWidth="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MetricCard({ title, value, change = 0.0, trend = "up" }) {
  const positive = trend === "up";
  const Icon = positive ? ArrowUpRight : ArrowDownRight;
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
      <div>
        <div className="text-xs text-gray-500 mb-1">{title}</div>
        <div className="text-2xl font-semibold text-gray-900">{value}</div>
        <div className={`mt-1 inline-flex items-center gap-1 text-xs ${positive ? "text-emerald-600" : "text-rose-600"}`}>
          <Icon className="w-4 h-4" />
          <span>{positive ? "+" : "-"}{Math.abs(change)}% vs last week</span>
        </div>
      </div>
      <Sparkline trend={positive ? "up" : "down"} />
    </div>
  );
}

function VoiceAssistant() {
  return (
    <div className="relative bg-white rounded-xl p-4 shadow-sm border border-gray-100 overflow-hidden">
      <div className="absolute inset-0 opacity-70 pointer-events-none" style={{ background: "radial-gradient(120px 120px at 50% 50%, rgba(99,102,241,0.2), transparent)", }} />
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-medium text-gray-900">Voice Assistant</div>
          <div className="text-xs text-gray-500">"Summarize my day"</div>
        </div>
        <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm hover:opacity-95">
          <Mic className="w-4 h-4" /> Start
        </button>
      </div>
    </div>
  );
}

function LeadWidget() {
  const leads = [
    { name: "Sofia Ramirez", status: "Qualified", next: "Book call" },
    { name: "James Lee", status: "New", next: "Auto-qualify" },
    { name: "Priya Shah", status: "Hot", next: "Connect agent" },
  ];
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-sm font-medium text-gray-900">Lead Capture & Qualification</div>
          <div className="text-xs text-gray-500">Budget, property type, timeline, scoring, auto-booking</div>
        </div>
        <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-500">
          <Plus className="w-4 h-4" /> Add Lead
        </button>
      </div>
      <div className="space-y-2">
        {leads.map((l) => (
          <div key={l.name} className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-800">{l.name}</div>
            <div className="flex items-center gap-3 text-xs">
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">{l.status}</span>
              <span className="text-gray-500">Next: {l.next}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AppointmentWidget() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-medium text-gray-900">Appointment Calendar</div>
        <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm hover:opacity-95">
          <Cal className="w-4 h-4" /> Book
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-xs text-gray-600">
        {Array.from({ length: 35 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-md bg-gray-50 hover:bg-gray-100 grid place-items-center">{i + 1}</div>
        ))}
      </div>
      <div className="mt-3 text-xs text-gray-600">Today's appointments: 3 scheduled</div>
    </div>
  );
}

function PropertyManager() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-3">
        <div className="text-sm font-medium text-gray-900 flex-1">Property Listing Management</div>
        <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm hover:opacity-95">
          <Plus className="w-4 h-4" /> Add Property
        </button>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-2 flex-1 bg-gray-50 rounded-lg px-3 py-2">
          <Search className="w-4 h-4 text-gray-400" />
          <input className="bg-transparent outline-none w-full text-sm" placeholder="Search properties..." />
        </div>
        <button className="text-xs px-2.5 py-1 rounded-md bg-gray-100 text-gray-700">Filters</button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-lg border border-gray-100 overflow-hidden bg-white shadow-sm">
            <div className="h-24 bg-gradient-to-br from-gray-100 to-gray-50" />
            <div className="p-3">
              <div className="text-sm font-medium text-gray-900">Modern Loft #{i + 1}</div>
              <div className="text-xs text-gray-500">San Francisco • $1.2M</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ValuationWidget() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="text-sm font-medium text-gray-900 mb-3">AI Property Valuation</div>
      <div className="grid grid-cols-2 gap-2">
        <input className="px-3 py-2 rounded-lg bg-gray-50 text-sm outline-none" placeholder="Property Address" />
        <input className="px-3 py-2 rounded-lg bg-gray-50 text-sm outline-none" placeholder="Bedrooms" />
        <input className="px-3 py-2 rounded-lg bg-gray-50 text-sm outline-none" placeholder="Bathrooms" />
        <input className="px-3 py-2 rounded-lg bg-gray-50 text-sm outline-none" placeholder="Square Footage" />
        <input className="px-3 py-2 rounded-lg bg-gray-50 text-sm outline-none col-span-2" placeholder="Type" />
      </div>
      <button className="mt-3 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-500">
        <BadgeDollarSign className="w-4 h-4" /> Generate AI Valuation Report
      </button>
      <div className="mt-3 text-xs text-gray-600">Market Trends • Days on Market • Valuation Graph</div>
    </div>
  );
}

function ActivitiesFeed() {
  const items = [
    "AI Setter booked 3 appointments",
    "Lead Capture qualified 5 new leads",
    "Property Matcher sent 8 matches",
    "Ads Manager optimized budget by 12%",
  ];
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="text-sm font-medium text-gray-900 mb-3">AI Agent Activities</div>
      <ul className="space-y-2">
        {items.map((t, i) => (
          <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="relative h-48 rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="relative z-10 p-6 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600">Welcome back</div>
            <div className="text-2xl font-semibold text-gray-900">Your AI orchestrated workspace</div>
            <div className="text-sm text-gray-500">Use quick actions to get started</div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 rounded-lg bg-gray-900 text-white text-sm">Book appointment</button>
            <button className="px-3 py-2 rounded-lg bg-white text-gray-900 border border-gray-200 text-sm">Add property</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard title="Active Leads" value="128" change={12.5} trend="up" />
        <MetricCard title="Appointments Today" value="9" change={5.2} trend="up" />
        <MetricCard title="Properties Matched" value="42" change={3.1} trend="up" />
        <MetricCard title="Deals Closed" value="4" change={-2.3} trend="down" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <LeadWidget />
        <AppointmentWidget />
        <ActivitiesFeed />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <PropertyManager />
        <ValuationWidget />
        <VoiceAssistant />
      </div>
    </div>
  );
}
