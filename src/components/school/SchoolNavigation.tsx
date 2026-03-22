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
  GraduationCap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
} from "@/components/ui/dropdown-menu";
import { useAuth } from '@/context/AuthContext';

interface SchoolNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
  badge?: string;
  children?: SchoolNavItem[];
}

const SchoolNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const schoolNavItems: SchoolNavItem[] = [
    {
      id: 'academics',
      label: 'Academics',
      icon: <BookOpen className="w-4 h-4" />,
      path: '/school/academics',
      children: [
        {
          id: 'program',
          label: 'My Program',
          icon: <GraduationCap className="w-4 h-4" />,
          path: '/school/academics?tab=program'
        },
        {
          id: 'progress',
          label: 'Degree Progress Audit',
          icon: <GraduationCap className="w-4 h-4" />,
          path: '/school/academics?tab=progress'
        },
        {
          id: 'class',
          label: 'Go to Class',
          icon: <BookOpen className="w-4 h-4" />,
          path: '/school/academics?tab=class'
        },
        {
          id: 'schedule',
          label: 'Class Schedule',
          icon: <BookOpen className="w-4 h-4" />,
          path: '/school/academics?tab=schedule'
        }
      ]
    },
    {
      id: 'profile',
      label: 'My Profile',
      icon: <User className="w-4 h-4" />,
      path: '/school/profile',
      children: [
        {
          id: 'information',
          label: 'My Information',
          icon: <User className="w-4 h-4" />,
          path: '/school/profile?tab=information'
        },
        {
          id: 'privacy',
          label: 'Privacy Settings',
          icon: <Shield className="w-4 h-4" />,
          path: '/school/profile?tab=privacy'
        },
        {
          id: 'username',
          label: 'Username & Email',
          icon: <Mail className="w-4 h-4" />,
          path: '/school/profile?tab=username'
        },
        {
          id: 'finances',
          label: 'Finances',
          icon: <DollarSign className="w-4 h-4" />,
          path: '/school/profile?tab=finances'
        },
        {
          id: 'documents',
          label: 'Documents',
          icon: <FileText className="w-4 h-4" />,
          path: '/school/profile?tab=documents'
        }
      ]
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: <FileText className="w-4 h-4" />,
      path: '/school/profile?tab=resources',
      badge: 'New',
      children: [
        {
          id: 'software',
          label: 'Student Software',
          icon: <FileText className="w-4 h-4" />,
          path: '/school/profile?tab=resources&section=software'
        },
        {
          id: 'careers',
          label: 'Careers',
          icon: <FileText className="w-4 h-4" />,
          path: '/school/profile?tab=resources&section=careers'
        },
        {
          id: 'academic',
          label: 'Academic Tools',
          icon: <FileText className="w-4 h-4" />,
          path: '/school/profile?tab=resources&section=academic'
        }
      ]
    },
    {
      id: 'community',
      label: 'Community',
      icon: <Users className="w-4 h-4" />,
      path: '/school/community',
      children: [
        {
          id: 'wellness',
          label: 'Student Wellness',
          icon: <Heart className="w-4 h-4" />,
          path: '/school/community?tab=wellness'
        },
        {
          id: 'resources',
          label: 'Resources',
          icon: <FileText className="w-4 h-4" />,
          path: '/school/community?tab=resources'
        },
        {
          id: 'engagement',
          label: 'Engagement',
          icon: <Users className="w-4 h-4" />,
          path: '/school/community?tab=engagement'
        }
      ]
    },
    {
      id: 'support',
      label: 'Support',
      icon: <Headphones className="w-4 h-4" />,
      path: '/school/support',
      children: [
        {
          id: 'team',
          label: 'My Success Team',
          icon: <Users className="w-4 h-4" />,
          path: '/school/support?tab=team'
        },
        {
          id: 'help',
          label: 'Help Center',
          icon: <Headphones className="w-4 h-4" />,
          path: '/school/support?tab=help'
        },
        {
          id: 'companion',
          label: 'Companion',
          icon: <Headphones className="w-4 h-4" />,
          path: '/school/support?tab=companion'
        }
      ]
    }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path.replace('?tab=', '/'));
  };

  const handleNavigation = (item: SchoolNavItem) => {
    if (item.children) {
      navigate(item.path);
    } else {
      navigate(item.path);
    }
  };

  const renderNavItem = (item: SchoolNavItem, level: number = 0) => {
    const isActive = isActivePath(item.path);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id}>
        {hasChildren ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start rounded-xl ${level > 0 ? 'pl-8' : 'pl-4'} ${isActive ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
                {item.badge && (
                  <Badge className="ml-2 bg-red-500 text-white border-none text-xs">
                    {item.badge}
                  </Badge>
                )}
                <ChevronDown className="ml-auto w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-xl">
              {item.children?.map((child) => (
                <DropdownMenuItem
                  key={child.id}
                  onClick={() => navigate(child.path)}
                  className="rounded-xl pl-8"
                >
                  {child.icon}
                  <span className="ml-2">{child.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            variant={isActive ? "default" : "ghost"}
            onClick={() => handleNavigation(item)}
            className={`w-full justify-start rounded-xl ${level > 0 ? 'pl-8' : 'pl-4'} ${isActive ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            {item.icon}
            <span className="ml-2">{item.label}</span>
            {item.badge && (
              <Badge className="ml-2 bg-red-500 text-white border-none text-xs">
                {item.badge}
              </Badge>
            )}
          </Button>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-white border-r border-slate-200 h-screen sticky top-0 overflow-y-auto">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900">NextERP</h2>
            <p className="text-xs text-slate-500">School Portal</p>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <img 
            src={user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=student'} 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="font-semibold text-slate-900 text-sm">{user?.name}</p>
            <p className="text-xs text-slate-500">{user?.role}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard')}
            className="w-full justify-start rounded-xl text-slate-600 hover:bg-slate-100"
          >
            <Home className="w-4 h-4" />
            <span className="ml-2">Dashboard</span>
            <ChevronRight className="ml-auto w-4 h-4" />
          </Button>
        </div>

        {schoolNavItems.map((item) => renderNavItem(item))}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200">
        <div className="text-center">
          <p className="text-xs text-slate-500 mb-2">NextERP Systems</p>
          <p className="text-xs text-slate-400">© 2024 All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default SchoolNavigation;
