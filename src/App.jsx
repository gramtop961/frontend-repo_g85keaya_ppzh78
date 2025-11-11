import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";

function Placeholder({ title }) {
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm text-center">
        <div className="text-2xl font-semibold text-gray-900 mb-2">{title}</div>
        <div className="text-gray-600">This section is part of the RE AI Suite. Explore the Dashboard and Analytics for a rich overview.</div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("Dashboard");

  const render = () => {
    switch (page) {
      case "Dashboard":
        return <Dashboard onNavigate={setPage} />;
      case "Analytics":
        return <Analytics />;
      case "Settings":
        return <Settings />;
      case "Leads":
        return <Placeholder title="Leads Management" />;
      case "Properties":
        return <Placeholder title="Property Management" />;
      case "Appointments":
        return <Placeholder title="Appointment Management" />;
      case "Ad Campaigns":
        return <Placeholder title="Ad Campaigns" />;
      default:
        return <Dashboard onNavigate={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Sidebar current={page} onNavigate={setPage} />
      <div className="pl-72">
        <Topbar />
        {render()}
      </div>
    </div>
  );
}
