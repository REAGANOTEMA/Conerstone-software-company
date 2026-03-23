"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Trophy, 
  Target, 
  Zap, 
  MessageSquare, 
  ArrowRight,
  Star,
  CheckCircle2,
  Brain,
  Flame
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const upcomingClasses = [
    { id: 1, title: "Advanced Algorithms", time: "10:00 AM", room: "Lab 101", instructor: "Dr. Sarah Johnson" },
    { id: 2, title: "Database Systems", time: "02:00 PM", room: "Virtual", instructor: "Prof. Michael Chen" }
  ];

  const deadlines = [
    { id: 1, title: "Problem Set 5", course: "CS301", due: "Tomorrow", priority: "High" },
    { id: 2, title: "ER Diagram", course: "CS302", due: "In 3 days", priority: "Medium" }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-6">
          <div className="relative">
            <Avatar className="h-20 w-20 border-4 border-blue-50 shadow-lg">
              <AvatarImage src={user?.avatar} />
              <AvatarFallback className="text-2xl">{user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1.5 rounded-full border-4 border-white">
              <CheckCircle2 size={14} />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome back, {user?.name?.split(' ')[0]}!</h1>
            <p className="text-slate-500 mt-1">You have <span className="font-bold text-blue-600">2 classes</span> today and <span className="font-bold text-orange-600">3 pending</span> assignments.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => navigate('/school/academics/class')} className="bg-blue-600 hover:bg-blue-700 rounded-xl h-12 px-6 font-bold">
            <Zap className="mr-2" size={18} /> Go to Class
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Star size={24} /></div>
              <Badge className="bg-blue-50 text-blue-600 border-none">GPA</Badge>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">3.85</h3>
            <p className="text-xs text-slate-500 mt-1">Top 5% of your class</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl"><Trophy size={24} /></div>
              <Badge className="bg-emerald-50 text-emerald-600 border-none">Credits</Badge>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">72 / 144</h3>
            <Progress value={50} className="h-1.5 mt-3" />
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-orange-50 text-orange-600 rounded-xl"><Flame size={24} /></div>
              <Badge className="bg-orange-50 text-orange-600 border-none">Streak</Badge>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">12 Days</h3>
            <p className="text-xs text-slate-500 mt-1">Keep it up!</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-xl"><Target size={24} /></div>
              <Badge className="bg-purple-50 text-purple-600 border-none">Rank</Badge>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">#15</h3>
            <p className="text-xs text-slate-500 mt-1">Out of 156 students</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Schedule & Deadlines */}
        <div className="lg:col-span-2 space-y-8">
          {/* Today's Schedule */}
          <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>Your classes for October 3, 2024</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-600 font-bold" onClick={() => navigate('/school/academics/schedule')}>
                View Full Timetable
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingClasses.map((cls) => (
                <div key={cls.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex flex-col items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Clock size={18} />
                      <span className="text-[10px] font-bold mt-0.5">{cls.time.split(' ')[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{cls.title}</h4>
                      <p className="text-xs text-slate-500">{cls.instructor} • {cls.room}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-xl group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200">
                    Details
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Study Recommendation */}
          <Card className="border-none shadow-sm rounded-3xl bg-slate-900 text-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="p-4 bg-blue-600/20 rounded-2xl shrink-0 border border-blue-500/30">
                  <Brain size={40} className="text-blue-400" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-600 text-white border-none">AI Insight</Badge>
                    <span className="text-xs text-slate-400">Based on your recent quiz scores</span>
                  </div>
                  <h3 className="text-xl font-bold">Master Graph Theory</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    "You've excelled in Sorting Algorithms, but your performance in Graph Traversal could be improved. I've prepared a 15-minute interactive challenge for you."
                  </p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 h-12 font-bold shrink-0">
                  Start Challenge
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Deadlines & Community */}
        <div className="space-y-8">
          {/* Upcoming Deadlines */}
          <Card className="border-none shadow-sm rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {deadlines.map((dl) => (
                <div key={dl.id} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{dl.title}</h4>
                      <p className="text-xs text-slate-500">{dl.course}</p>
                    </div>
                    <Badge className={cn(
                      "border-none text-[10px]",
                      dl.priority === 'High' ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'
                    )}>
                      {dl.due}
                    </Badge>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={cn(
                      "h-full rounded-full",
                      dl.priority === 'High' ? 'bg-red-500' : 'bg-orange-500'
                    )} style={{ width: dl.priority === 'High' ? '85%' : '40%' }}></div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-2 rounded-xl">View All Assignments</Button>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="border-none shadow-sm rounded-3xl bg-blue-50">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">Quick Resources</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              <Button variant="ghost" className="h-20 flex flex-col gap-2 bg-white rounded-2xl hover:bg-blue-100 transition-all border border-blue-100">
                <BookOpen size={20} className="text-blue-600" />
                <span className="text-[10px] font-bold text-blue-900">Library</span>
              </Button>
              <Button variant="ghost" className="h-20 flex flex-col gap-2 bg-white rounded-2xl hover:bg-blue-100 transition-all border border-blue-100">
                <MessageSquare size={20} className="text-blue-600" />
                <span className="text-[10px] font-bold text-blue-900">Support</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;