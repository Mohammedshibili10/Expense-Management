

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Dashnavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">

    
      <Sidebar />

     
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>

    </div>
  );
}