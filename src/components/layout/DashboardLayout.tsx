"use client";

import React from 'react';
import Sidebar from './Sidebar';
import { useAuth } from '@/context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GlobalSearch from './GlobalSearch';
import NotificationsDropdown from './NotificationsDropdown';
import ThemeToggle from './ThemeToggle';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Sidebar />
      <div className="pl-64">
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4 w-96">
            <GlobalSearch />
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <NotificationsDropdown />
            
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2"></div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 px-2 hover:bg-slate-50 dark:hover:bg-slate-800">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white leading-none">{user?.name}</p>
                    <p className="text-xs text-slate-500 mt-1 capitalize">{user?.role}</p>
                  </div>
                  <Avatar className="h-9 w-9 border-2 border-white dark:border-slate-800 shadow-sm">
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  Super Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/settings')}>
                  Organization
                </DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-red-600">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;