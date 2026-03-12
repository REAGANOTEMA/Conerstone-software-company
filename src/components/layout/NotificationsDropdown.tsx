"use client";

import React from 'react';
import { Bell, Check, Info, AlertTriangle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from '@/lib/utils';

const notifications = [
  {
    id: 1,
    title: "New Project Assigned",
    description: "You've been added to the 'Fleet Tracking App' project.",
    time: "2 mins ago",
    type: "info",
    unread: true
  },
  {
    id: 2,
    title: "Payment Received",
    description: "Iganga High School paid $2,500 for Invoice #INV-001.",
    time: "1 hour ago",
    type: "success",
    unread: true
  },
  {
    id: 3,
    title: "Compliance Alert",
    description: "Municipal Permit is expiring in 12 days.",
    time: "5 hours ago",
    type: "warning",
    unread: false
  },
  {
    id: 4,
    title: "New Student Enrolled",
    description: "Sarah J. joined the AI Fundamentals course.",
    time: "1 day ago",
    type: "info",
    unread: false
  }
];

const NotificationsDropdown = () => {
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative text-slate-600">
          <Bell size={20} />
          {unreadCount > 0 && (
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0">
        <DropdownMenuLabel className="p-4 flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full">
              {unreadCount} New
            </span>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="m-0" />
        <ScrollArea className="h-[350px]">
          <div className="flex flex-col">
            {notifications.map((n) => (
              <DropdownMenuItem key={n.id} className="p-4 focus:bg-slate-50 cursor-pointer border-b border-slate-50 last:border-0">
                <div className="flex gap-3">
                  <div className={cn(
                    "mt-1 p-2 rounded-lg h-fit",
                    n.type === 'success' ? "bg-emerald-50 text-emerald-600" :
                    n.type === 'warning' ? "bg-orange-50 text-orange-600" :
                    "bg-blue-50 text-blue-600"
                  )}>
                    {n.type === 'success' ? <Check size={16} /> :
                     n.type === 'warning' ? <AlertTriangle size={16} /> :
                     <Info size={16} />}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className={cn("text-sm font-bold", n.unread ? "text-slate-900" : "text-slate-600")}>
                        {n.title}
                      </p>
                      <span className="text-[10px] text-slate-400">{n.time}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {n.description}
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
        </ScrollArea>
        <DropdownMenuSeparator className="m-0" />
        <div className="p-2">
          <Button variant="ghost" className="w-full text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50">
            View All Notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationsDropdown;