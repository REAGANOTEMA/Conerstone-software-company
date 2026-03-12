"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  GraduationCap, 
  CircleDollarSign, 
  UserSquare2, 
  Package, 
  ShieldCheck, 
  Settings,
  LogOut,
  Megaphone,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', roles: ['admin', 'director', 'staff'] },
    { icon: Briefcase, label: 'Projects', path: '/projects', roles: ['admin', 'director', 'staff', 'client'] },
    { icon: MessageSquare, label: 'Messages', path: '/messages', roles: ['admin', 'director', 'staff', 'client'] },
    { icon: Calendar, label: 'Calendar', path: '/calendar', roles: ['admin', 'director', 'staff'] },
    { icon: Users, label: 'Clients', path: '/clients', roles: ['admin', 'director', 'staff'] },
    { icon: GraduationCap, label: 'Training', path: '/training', roles: ['admin', 'director', 'staff', 'student'] },
    { icon: CircleDollarSign, label: 'Finance', path: '/finance', roles: ['admin', 'director'] },
    { icon: UserSquare2, label: 'HR', path: '/hr', roles: ['admin', 'director'] },
    { icon: Megaphone, label: 'Marketing', path: '/marketing', roles: ['admin', 'director', 'staff'] },
    { icon: Package, label: 'Assets', path: '/assets', roles: ['admin', 'director', 'staff'] },
    { icon: ShieldCheck, label: 'Compliance', path: '/compliance', roles: ['admin', 'director'] },
  ];

  const filteredItems = menuItems.filter(item => item.roles.includes(user?.role || ''));

  return (
    <div className="w-64 bg-slate-900 text-white h-screen flex flex-col fixed left-0 top-0 z-50">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <div className="bg-white p-1 rounded-lg overflow-hidden w-10 h-10 flex items-center justify-center">
          <img src="/src/assets/logo.jpg" alt="NextERP Logo" className="w-full h-full object-contain" />
        </div>
        <span className="font-bold text-xl tracking-tight">NextERP</span>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {filteredItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
              location.pathname === item.path 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            )}
          >
            <item.icon size={20} className={cn(
              "transition-colors",
              location.pathname === item.path ? "text-white" : "group-hover:text-white"
            )} />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 space-y-2">
        <Link
          to="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
        >
          <Settings size={20} />
          <span className="font-medium">Settings</span>
        </Link>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-all"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;