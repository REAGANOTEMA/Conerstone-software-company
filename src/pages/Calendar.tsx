"use client";

import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';

const events = [
  { id: 1, title: "Project Deadline: SMS", date: 24, month: "Oct", type: "deadline", color: "bg-red-500" },
  { id: 2, title: "Client Meeting: Main Street", date: 12, month: "Oct", type: "meeting", color: "bg-blue-500" },
  { id: 3, title: "Team Sync", date: 15, month: "Oct", type: "internal", color: "bg-purple-500" },
  { id: 4, title: "Training Session: AI", date: 18, month: "Oct", type: "training", color: "bg-emerald-500" },
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const daysInMonth = 31;
  const startDay = 2; // Tuesday
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: startDay }, (_, i) => i);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Calendar</h1>
          <p className="text-slate-500">Track project deadlines, client meetings, and company events.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2" size={18} />
          Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <Card className="border-none shadow-sm overflow-hidden">
            <CardHeader className="bg-white border-b border-slate-100 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-slate-900">October 2024</h2>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronLeft size={18} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronRight size={18} />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
                  <Button variant="ghost" size="sm" className="bg-white shadow-sm">Month</Button>
                  <Button variant="ghost" size="sm">Week</Button>
                  <Button variant="ghost" size="sm">Day</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-7 bg-slate-50 border-b border-slate-100">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7">
                {blanks.map((i) => (
                  <div key={`blank-${i}`} className="h-32 border-r border-b border-slate-100 bg-slate-50/30"></div>
                ))}
                {days.map((day) => {
                  const dayEvents = events.filter(e => e.date === day);
                  return (
                    <div key={day} className="h-32 border-r border-b border-slate-100 p-2 hover:bg-slate-50 transition-colors group relative">
                      <span className={cn(
                        "text-sm font-semibold",
                        day === 15 ? "bg-blue-600 text-white w-7 h-7 flex items-center justify-center rounded-full" : "text-slate-600"
                      )}>
                        {day}
                      </span>
                      <div className="mt-2 space-y-1">
                        {dayEvents.map((event) => (
                          <div 
                            key={event.id} 
                            className={cn(
                              "text-[10px] px-1.5 py-0.5 rounded text-white font-medium truncate cursor-pointer",
                              event.color
                            )}
                          >
                            {event.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {events.map((event) => (
                <div key={event.id} className="flex gap-4 group cursor-pointer">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0 text-white",
                    event.color
                  )}>
                    <span className="text-xs font-bold uppercase">{event.month}</span>
                    <span className="text-lg font-bold leading-none">{event.date}</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{event.title}</h4>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500">
                      <Clock size={12} />
                      <span>10:00 AM - 11:30 AM</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500">
                      <MapPin size={12} />
                      <span>Main Office / Zoom</span>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">View All Events</Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-slate-900 text-white">
            <CardHeader>
              <CardTitle className="text-white">Event Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Deadlines</span>
                </div>
                <Badge variant="outline" className="text-white border-slate-700">12</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Meetings</span>
                </div>
                <Badge variant="outline" className="text-white border-slate-700">8</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Internal</span>
                </div>
                <Badge variant="outline" className="text-white border-slate-700">5</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm">Training</span>
                </div>
                <Badge variant="outline" className="text-white border-slate-700">3</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calendar;