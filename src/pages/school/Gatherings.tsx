"use client";

import React from 'react';
import { 
  Users, 
  Calendar, 
  MapPin, 
  Clock, 
  Plus, 
  Search, 
  Filter,
  MessageSquare,
  Share2,
  CheckCircle2,
  Video,
  Coffee,
  Laptop,
  BookOpen
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { showSuccess } from '@/utils/toast';

const Gatherings = () => {
  const events = [
    {
      id: 1,
      title: "Algorithms Study Group",
      type: "Study Group",
      date: "Oct 5, 2024",
      time: "04:00 PM",
      location: "Main Library, Room 3",
      attendees: 12,
      maxAttendees: 20,
      organizer: "Alice Kyomugisha",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400",
      icon: <BookOpen size={20} />
    },
    {
      id: 2,
      title: "Tech Career Workshop",
      type: "Workshop",
      date: "Oct 8, 2024",
      time: "10:00 AM",
      location: "Virtual (Zoom)",
      attendees: 45,
      maxAttendees: 100,
      organizer: "NextERP Careers",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400",
      icon: <Laptop size={20} />
    },
    {
      id: 3,
      title: "Student Coffee Mixer",
      type: "Social",
      date: "Oct 12, 2024",
      time: "02:00 PM",
      location: "Campus Cafe",
      attendees: 28,
      maxAttendees: 50,
      organizer: "Student Council",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400",
      icon: <Coffee size={20} />
    }
  ];

  const handleJoin = (title: string) => {
    showSuccess(`You've successfully joined the ${title}!`);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Gatherings & Events</h1>
          <p className="text-slate-500">Connect with fellow students through study groups and social events.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl h-12 px-6 font-bold">
          <Plus className="mr-2" size={18} /> Create Gathering
        </Button>
      </div>

      {/* Search & Filter */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <Input placeholder="Search events, topics, or organizers..." className="pl-10 rounded-xl border-slate-200" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl"><Filter className="mr-2" size={16} /> Filter</Button>
          <Button variant="outline" className="rounded-xl">My Events</Button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <Card key={event.id} className="border-none shadow-sm hover:shadow-xl transition-all group rounded-3xl overflow-hidden flex flex-col">
            <div className="h-48 relative overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm border-none px-3 py-1">
                  {event.type}
                </Badge>
              </div>
            </div>
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{event.title}</CardTitle>
              <CardDescription className="flex items-center gap-1 mt-1">
                Organized by <span className="font-bold text-slate-700">{event.organizer}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-2 flex-1 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar size={16} className="text-blue-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock size={16} className="text-blue-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin size={16} className="text-blue-500" />
                  <span className="truncate">{event.location}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Attendees</span>
                  <span className="text-xs font-bold text-slate-900">{event.attendees}/{event.maxAttendees}</span>
                </div>
                <div className="flex -space-x-2 overflow-hidden">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Avatar key={i} className="h-8 w-8 border-2 border-white">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${event.id + i}`} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  ))}
                  <div className="h-8 w-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">
                    +{event.attendees - 5}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 mt-auto">
              <Button onClick={() => handleJoin(event.title)} className="w-full bg-slate-900 hover:bg-blue-600 text-white rounded-xl h-12 font-bold transition-colors">
                Join Gathering
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Community CTA */}
      <Card className="border-none shadow-sm rounded-3xl bg-blue-600 text-white overflow-hidden">
        <CardContent className="p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <h2 className="text-3xl font-bold">Can't find what you're looking for?</h2>
              <p className="text-blue-100 leading-relaxed">
                Start your own study group or social gathering! It's a great way to build your network and help others succeed.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl px-8 h-12 font-bold">
                Create New Event
              </Button>
            </div>
            <div className="shrink-0">
              <div className="w-40 h-40 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <Users size={64} className="text-white opacity-50" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Gatherings;