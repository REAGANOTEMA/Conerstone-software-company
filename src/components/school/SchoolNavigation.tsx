"use client";

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  User, 
  Shield, 
  Mail, 
  DollarSign, 
  FileText, 
  Heart, 
  Users, 
  Headphones,
  ChevronDown,
  ChevronRight,
  Home,
  GraduationCap,
  MessageSquare,
  Globe,
  CreditCard,
  FileCheck,
  Laptop,
  Sparkles,
  HelpCircle,
  LayoutDashboard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';

interface SchoolNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
  children?: { label: string; path: string; icon?: React.ReactNode }[];
}

const SchoolNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [openMenus, setOpenMenus] = React.useState<string[]>(['academics']);

  const toggleMenu = (id: string) => {
    setOpenMenus(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const navItems: SchoolNavItem[] = [
    {
      id: 'academics',
      label: 'Academics',
      icon: <BookOpen className="w-4 h-4" />,
      children: [
        { label: 'My Program', path: '/school/academics/program' },
        { label: 'Degree Progress Audit', path: '/school/academics/audit' },
        { label: 'Class Schedule', path: '/school/academics/schedule' },
        { label: 'Gatherings', path: '/school/academics/gatherings' },
        { label: 'Go to Class', path: '/school/academics/class' },
        { label: 'Go to EnglishConnect', path: '/school/academics/english-connect' },
      ]
    },
    {
      id: 'profile',
      label: 'My Profile',
      icon: <User className="w-4 h-4" />,
      children: [
        { label: 'Message Center', path: '/school/profile/messages' },
        { label: 'My Information', path: '/school/profile/info' },
        { label: 'Privacy Settings', path: '/school/profile/privacy' },
        { label: 'Username & Emails', path: '/school/profile/account' },
      ]
    },
    {
      id: 'finances',
      label: 'Finances',
      icon: <DollarSign className="w-4 h-4" />,
      children: [
        { label: 'Account Information', path: '/school/finances/account' },
        { label: 'Tuition Discount', path: '/school/finances/discounts' },
        { label: 'Pay Tuition', path: '/school/finances/pay' },
      ]
    },
    {
      id: 'documents',
      label: 'Documents',
      icon: <FileText className="w-4 h-4" />,
      children: [
        { label: 'Document Center', path: '/school/documents/center' },
        { label: 'Ecclesiastical Endorsement', path: '/school/documents/endorsement' },
        { label: 'Transcripts', path: '/school/documents/transcripts' },
        { label: 'Credit Transfer', path: '/school/documents/transfer' },
        { label: 'Tax Information', path: '/school/documents/tax' },
        { label: 'English Assessment', path: '/school/documents/assessment' },
      ]
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: <Laptop className="w-4 h-4" />,
      children: [
        { label: 'Student Software', path: '/school/resources/software' },
        { label: 'Careers', path: '/school/resources/careers' },
        { label: 'Academic Tools', path: '/school/resources/tools' },
      ]
    },
    {
      id: 'community',
      label: 'Community',
      icon: <Users className="w-4 h-4" />,
      children: [
        { label: 'Student Wellness', path: '/school/community/wellness' },
        { label: 'Gatherings', path: '/school/academics/gatherings' },
      ]
    },
    {
      id: 'support',
      label: 'Support',
      icon: <Headphones className="w-4 h-4" />,
      children: [
        { label: 'My Success Team', path: '/school/support/team' },
        { label: 'Help Center', path: '/school/support/help' },
        { label: 'Companion', path: '/school/support/companion' },
      ]
    }
  ];

  return (
    <div className="w-72 bg-white border-r border-slate-200 h-screen sticky top-0 flex flex-col shadow-sm">
      {/* Logo */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 leading-none">NextERP</h2>
            <p className="text-[10px] text-slate-500 mt-1 font-bold uppercase tracking-wider">School Portal</p>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="p-4 mx-4 my-4 bg-slate-50 rounded-2xl border border-slate-100">
        <div className="flex items-center gap-3">
          <img 
            src={user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=student'} 
            alt="Profile" 
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
          />
          <div className="flex-1 min-w-0">
            <p className="font-bold text-slate-900 text-sm truncate">Hello, {user?.name?.split(' ')[0]}</p>
            <p className="text-[10px] text-slate-500 font-medium">ID: STU-2024-001</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 space-y-1 custom-scrollbar">
        <Button
          variant="ghost"
          onClick={() => navigate('/school/dashboard')}
          className={cn(
            "w-full justify-start rounded-xl mb-2 font-bold",
            location.pathname === '/school/dashboard' ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-slate-600 hover:bg-slate-100"
          )}
        >
          <LayoutDashboard className="w-4 h-4 mr-3" />
          <span className="font-medium">School Dashboard</span>
        </Button>

        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="w-full justify-start rounded-xl text-slate-600 hover:bg-slate-100 mb-2"
        >
          <Home className="w-4 h-4 mr-3" />
          <span className="font-medium">Main ERP</span>
        </Button>

        {navItems.map((item) => (
          <Collapsible
            key={item.id}
            open={openMenus.includes(item.id)}
            onOpenChange={() => toggleMenu(item.id)}
            className="space-y-1"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-between rounded-xl text-slate-700 hover:bg-slate-100 font-semibold",
                  openMenus.includes(item.id) && "bg-slate-50"
                )}
              >
                <div className="flex items-center">
                  <span className="mr-3 text-slate-400">{item.icon}</span>
                  {item.label}
                </div>
                <ChevronDown className={cn("w-3 h-3 transition-transform", openMenus.includes(item.id) ? "rotate-180" : "")} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 pl-9 pr-2">
              {item.children?.map((child) => (
                <button
                  key={child.path}
                  onClick={() => navigate(child.path)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors",
                    location.pathname === child.path 
                      ? "bg-blue-50 text-blue-600" 
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {child.label}
                </button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-100 bg-slate-50/50">
        <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase">
          <span>v26.0.1.10</span>
          <div className="flex gap-2">
            <button className="hover:text-blue-600">Privacy</button>
            <span>•</span>
            <button className="hover:text-blue-600">Help</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolNavigation;