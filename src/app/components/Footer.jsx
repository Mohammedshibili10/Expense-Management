import { Earth, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white rounded-2xl p-10 shadow-md ">
      <div className="grid grid-cols-1 md:grid-cols-4 xl:gap-50 max-w-7xl mx-auto">
 
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="bg-blue-500 text-white px-2 py-1 rounded">F</span>
            FinFlow
          </h2>
          <p className="text-gray-500 mt-4 text-sm">
            The world's most versatile personal and business finance
            management tool for every life stage.
          </p>

          <div className="flex gap-3 mt-4">
            <button className="w-10 h-10 border rounded hover:bg-gray-100  flex items-center justify-center"><Share2 /></button>
            <button className="w-10 h-10 border rounded hover:bg-gray-100  flex items-center justify-center"><Earth /></button>
          </div>
        </div>

        {/* Platform */}
        <div>
          <h3 className="font-semibold mb-4">PLATFORM</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Home Mode</li>
            <li>Hostel Mode</li>
            <li>Office Mode</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Careers</li>
          </ul>
        </div>

   
        <div>
          <h3 className="font-semibold mb-4">SUPPORT</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Help Center</li>
            <li>API Docs</li>
            <li>Status</li>
            <li>Contact Support</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-gray-400 text-xs border-t pt-5">
        <p>© 2024 FinFlow Inc. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <span>Cookie Settings</span>
          <span>Accessibility</span>
        </div>
      </div>
    </footer>
  );
}