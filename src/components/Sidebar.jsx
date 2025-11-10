import { LayoutDashboard, Users, Home, Calendar, Megaphone, BarChart3, Settings, CheckCircle2 } from "lucide-react";

const nav = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Leads", icon: Users },
  { label: "Properties", icon: Home },
  { label: "Appointments", icon: Calendar },
  { label: "Ad Campaigns", icon: Megaphone },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

const agents = [
  { name: "Lead Capture", status: "green" },
  { name: "Appointment Setter", status: "green" },
  { name: "Ads Manager", status: "yellow" },
  { name: "Property Matcher", status: "green" },
  { name: "Follow-up", status: "yellow" },
  { name: "Valuation", status: "green" },
  { name: "Analytics", status: "red" },
];

function StatusDot({ status }) {
  const map = {
    green: "bg-emerald-500",
    yellow: "bg-amber-500",
    red: "bg-rose-500",
  };
  return <span className={`w-2.5 h-2.5 rounded-full ${map[status]} ring-2 ring-white shadow`} />;
}

export default function Sidebar({ current = "Dashboard", onNavigate = () => {} }) {
  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-white border-r border-gray-100 flex flex-col">
      <div className="px-6 py-4">
        <div className="text-xs font-medium text-gray-500 mb-2">Navigation</div>
        <nav className="space-y-1">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = current === item.label;
            return (
              <button
                key={item.label}
                onClick={() => onNavigate(item.label)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  active ? "bg-gray-900 text-white" : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="mt-2 px-6">
        <div className="text-xs font-medium text-gray-500 mb-2">AI Agent Status</div>
        <div className="space-y-1.5">
          {agents.map((a) => (
            <div key={a.name} className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-gray-400" />
                <span>{a.name}</span>
              </div>
              <StatusDot status={a.status} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto p-6 text-xs text-gray-400">
        © {new Date().getFullYear()} RE AI Suite
      </div>
    </aside>
  );
}
