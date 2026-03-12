"use client";

import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  GraduationCap, 
  ArrowUpRight, 
  CheckCircle2,
  Clock,
  MessageSquare,
  FileText,
  DollarSign,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MapIntegration from '@/components/dashboard/MapIntegration';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';

const data = [
  { name: 'Jan', revenue: 4000, projects: 24 },
  { name: 'Feb', revenue: 3000, projects: 18 },
  { name: 'Mar', revenue: 5000, projects: 29 },
  { name: 'Apr', revenue: 4500, projects: 25 },
  { name: 'May', revenue: 6000, projects: 32 },
  { name: 'Jun', revenue: 5500, projects: 30 },
];

const activities = [
  {
    id: 1,
    user: "Alice Kyomugisha",
    action: "updated the status of",
    target: "School Management System",
    time: "12 mins ago",
    icon: CheckCircle2,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    id: 2,
    user: "Reagan Otema",
    action: "approved a new expense for",
    target: "Cloud Infrastructure",
    time: "45 mins ago",
    icon: DollarSign,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    id: 3,
    user: "Binsobedde Najiib",
    action: "added a new module to",
    target: "Hospital ERP v2.0",
    time: "2 hours ago",
    icon: FileText,
    color: "text-purple-500",
    bg: "bg-purple-50"
  }
];

const Dashboard = () => {
  const { user } = useAuth();
  const isReagan = user?.email === 'reagan@nexterp.com';
  const isNajiib = user?.email === 'najiib@nexterp.com';

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900">
            {isReagan ? "Executive Dashboard" : isNajiib ? "Technical Dashboard" : "Dashboard"}
          </h1>
          <p className="text-slate-500">Welcome back, <span className="font-bold text-blue-600">{user?.name}</span>. Here's your overview.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            <FileText className="mr-2" size={18} />
            Reports
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            <Zap className="mr-2" size={18} />
            Quick Action
          </Button>
        </div>
      </div>

      {/* Personalized Focus Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {isReagan && (
          <Card className="border-none shadow-sm bg-blue-600 text-white rounded-3xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <DollarSign size={24} />
                </div>
                <Badge className="bg-white/20 text-white border-none">Finance Focus</Badge>
              </div>
              <p className="text-blue-100 text-sm font-medium">Pending Approvals</p>
              <h3 className="text-3xl font-bold mt-1">$12,450.00</h3>
              <Button variant="ghost" className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white border-none">Review Now</Button>
            </CardContent>
          </Card>
        )}

        {isNajiib && (
          <Card className="border-none shadow-sm bg-purple-600 text-white rounded-3xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Zap size={24} />
                </div>
                <Badge className="bg-white/20 text-white border-none">System Health</Badge>
              </div>
              <p className="text-purple-100 text-sm font-medium">Active Deployments</p>
              <h3 className="text-3xl font-bold mt-1">99.9% Uptime</h3>
              <Button variant="ghost" className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white border-none">View Logs</Button>
            </CardContent>
          </Card>
        )}

        <Card className="border-none shadow-sm bg-white rounded-3xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <Users size={24} />
              </div>
              <Badge className="bg-emerald-50 text-emerald-600 border-none">+4 New</Badge>
            </div>
            <p className="text-slate-500 text-sm font-medium">Active Clients</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">42</h3>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-white rounded-3xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                <Briefcase size={24} />
              </div>
              <Badge className="bg-orange-50 text-orange-600 border-none">8 Active</Badge>
            </div>
            <p className="text-slate-500 text-sm font-medium">Total Projects</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">15</h3>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm rounded-3xl overflow-hidden">
          <CardHeader>
            <CardTitle>Revenue Growth</CardTitle>
            <CardDescription>Monthly performance across all SaaS products</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-3xl">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {activities.map((activity) => (
                <div key={activity.id} className="flex gap-4">
                  <div className={cn("mt-1 p-2 rounded-lg h-fit", activity.bg, activity.color)}>
                    <activity.icon size={16} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm text-slate-600 leading-tight">
                      <span className="font-bold text-slate-900">{activity.user}</span> {activity.action} <span className="font-bold text-slate-900">{activity.target}</span>
                    </p>
                    <p className="text-xs text-slate-400">{activity.time}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4 rounded-xl">View All Activity</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MapIntegration />
        </div>

        <Card className="border-none shadow-sm rounded-3xl">
          <CardHeader>
            <CardTitle>Project Milestones</CardTitle>
            <CardDescription>Real-time progress of top projects</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-700">School Management System</span>
                <span className="text-slate-500">85%</span>
              </div>
              <Progress value={85} className="h-2 bg-slate-100" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-700">Hospital ERP v2.0</span>
                <span className="text-slate-500">42%</span>
              </div>
              <Progress value={42} className="h-2 bg-slate-100" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-700">NGO Charity Portal</span>
                <span className="text-slate-500">68%</span>
              </div>
              <Progress value={68} className="h-2 bg-slate-100" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;