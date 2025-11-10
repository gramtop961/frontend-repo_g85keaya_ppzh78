import { ToggleLeft, ToggleRight, Clock, Hash, Save, KeyRound, Webhook, Bell, Users } from "lucide-react";

export default function Settings() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-sm font-medium text-gray-900 mb-2">AI Agents</div>
          <div className="space-y-3 text-sm">
            {["Lead Capture","Appointment Setter","Ads Manager","Property Matcher","Follow-up","Valuation","Analytics"].map((a) => (
              <div key={a} className="flex items-center justify-between">
                <span className="text-gray-700">{a}</span>
                <button className="px-2 py-1 rounded-md bg-gray-900 text-white text-xs">Enabled</button>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2"><Clock className="w-4 h-4 text-gray-400" /><input className="bg-transparent outline-none text-sm w-full" placeholder="Working Hours 09:00-18:00" /></div>
              <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2"><Hash className="w-4 h-4 text-gray-400" /><input className="bg-transparent outline-none text-sm w-full" placeholder="Max Daily Leads 50" /></div>
            </div>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-500"><Save className="w-4 h-4" /> Save Agent Configuration</button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-sm font-medium text-gray-900 mb-2">Integrations</div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between"><span className="flex items-center gap-2 text-gray-700"><KeyRound className="w-4 h-4 text-gray-400" /> API Keys</span><button className="px-2 py-1 rounded-md bg-gray-900 text-white text-xs">Manage</button></div>
            <div className="flex items-center justify-between"><span className="flex items-center gap-2 text-gray-700"><Webhook className="w-4 h-4 text-gray-400" /> Webhooks</span><button className="px-2 py-1 rounded-md bg-gray-900 text-white text-xs">Setup</button></div>
            <div className="flex items-center justify-between"><span className="flex items-center gap-2 text-gray-700"><Users className="w-4 h-4 text-gray-400" /> Roles & Permissions</span><button className="px-2 py-1 rounded-md bg-gray-900 text-white text-xs">Configure</button></div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 col-span-2">
          <div className="text-sm font-medium text-gray-900 mb-2">Notifications</div>
          <div className="flex items-center gap-2 text-sm">
            <Bell className="w-4 h-4 text-gray-400" />
            <span className="text-gray-700">Email, SMS, In-app</span>
            <div className="ml-auto flex items-center gap-2">
              <button className="px-2 py-1 rounded-md bg-gray-900 text-white text-xs">Email</button>
              <button className="px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-xs">SMS</button>
              <button className="px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-xs">In-app</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
