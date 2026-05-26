import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, CalendarDays, Activity, CarFront, Users, FileText, Settings, LogOut, Menu, X, Bell } from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard overview', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'All Reservations', href: '/admin/reservations', icon: CalendarDays },
    { name: 'Live Operations', href: '#', icon: Activity, badge: 3 },
    { name: 'Fleet Management', href: '#', icon: CarFront },
    { name: 'Driver Roster', href: '#', icon: Users },
    { name: 'Reports', href: '#', icon: FileText },
    { name: 'Settings', href: '#', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/80 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out flex flex-col`}>
        <div className="h-16 flex items-center justify-between px-4 bg-black">
          <Link to="/admin/dashboard" className="text-xl font-black text-white uppercase tracking-widest flex items-center">
            XTASS <span className="text-brand-yellow ml-2 text-sm font-bold bg-white/10 px-2 py-0.5 rounded">Admin</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-2 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-3 py-3 text-sm font-bold uppercase tracking-wider rounded-md transition-colors ${
                    isActive ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <item.icon className={`mr-3 flex-shrink-0 h-5 w-5 ${isActive ? 'text-brand-yellow' : 'text-gray-500 group-hover:text-gray-300'}`} />
                  <span className="flex-1 truncate">{item.name}</span>
                  {item.badge && (
                    <span className="bg-red-500 text-white ml-2 py-0.5 px-2 text-[10px] font-black rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 bg-gray-800 border-t border-gray-700">
           <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-brand-maroon flex items-center justify-center text-white font-black text-xs">
                AD
              </div>
              <div className="ml-3">
                 <p className="text-sm font-bold text-white uppercase">System Admin</p>
                 <p className="text-xs text-gray-400">admin@xtass.com</p>
              </div>
           </div>
           <Link to="/admin/login" className="flex items-center text-gray-400 hover:text-white text-sm font-bold uppercase tracking-wider transition-colors">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
           </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:pl-64">
        {/* Top Header */}
        <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 z-10 shadow-sm sticky top-0">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-500 hover:text-gray-900 focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex-1 flex justify-end">
             <button className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none relative">
               <Bell className="w-6 h-6" />
               <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
             </button>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
