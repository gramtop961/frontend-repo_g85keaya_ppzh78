import { Bell, User, ChevronDown } from "lucide-react";

export default function Topbar({ user = { name: "Alex Morgan", role: "Admin" } }) {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400" />
          <div>
            <div className="text-sm font-semibold text-gray-900 leading-none">RE AI Suite</div>
            <div className="text-xs text-gray-500">Real Estate AI Orchestrator</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button aria-label="Notifications" className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white" />
          </button>

          <div className="h-6 w-px bg-gray-200" />

          <button className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 grid place-items-center text-white">
              <User className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-gray-900 leading-none">{user.name}</div>
              <div className="text-xs text-gray-500">{user.role}</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
}
