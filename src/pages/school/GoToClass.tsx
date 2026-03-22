"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Video, 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  Play, 
  Bell,
  MessageSquare,
  ThumbsUp,
  Share,
  Plus,
  Search,
  Filter,
  CheckCircle,
  AlertCircle,
  Mic,
  MicOff,
  Settings,
  Download,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from '@/context/AuthContext';
import { showSuccess } from '@/utils/toast';

const GoToClass = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('live');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Live lectures data (Wednesday & Friday)
  const liveLectures = [
    {
      id: 1,
      title: "Advanced Algorithms - Week 8",
      course: "CS301",
      instructor: "Dr. Sarah Johnson",
      date: "Wednesday, March 26, 2024",
      time: "10:00 AM - 11:30 AM",
      duration: "1h 30min",
      status: "upcoming",
      type: "live",
      description: "Dynamic Programming and Greedy Algorithms",
      participants: 45,
      maxParticipants: 100
    },
    {
      id: 2,
      title: "Database Systems - Chapter 5",
      course: "CS302",
      instructor: "Prof. Michael Chen",
      date: "Wednesday, March 26, 2024",
      time: "2:00 PM - 3:30 PM",
      duration: "1h 30min",
      status: "upcoming",
      type: "live",
      description: "Database Design and SQL Optimization",
      participants: 38,
      maxParticipants: 100
    },
    {
      id: 3,
      title: "Web Development - React Hooks",
      course: "CS303",
      instructor: "Dr. Reagan Otema",
      date: "Friday, March 28, 2024",
      time: "9:00 AM - 10:30 AM",
      duration: "1h 30min",
      status: "upcoming",
      type: "live",
      description: "Advanced React Patterns and State Management",
      participants: 52,
      maxParticipants: 100
    },
    {
      id: 4,
      title: "Cybersecurity - Network Security",
      course: "CS304",
      instructor: "Prof. Binsobedde Najiib",
      date: "Friday, March 28, 2024",
      time: "1:00 PM - 2:30 PM",
      duration: "1h 30min",
      status: "upcoming",
      type: "live",
      description: "Network Protocols and Security Best Practices",
      participants: 41,
      maxParticipants: 100
    }
  ];

  // Upcoming gatherings
  const upcomingGatherings = [
    {
      id: 1,
      title: "Study Group - Advanced Algorithms",
      type: "study-group",
      date: "March 27, 2024",
      time: "6:00 PM - 7:30 PM",
      location: "Library Room 201",
      participants: 12,
      host: "Student Council",
      description: "Collaborative problem-solving session"
    },
    {
      id: 2,
      title: "Guest Lecture: AI in Software Development",
      type: "guest-lecture",
      date: "March 29, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Main Auditorium",
      participants: 150,
      host: "Computer Science Department",
      description: "Industry expert shares insights on AI trends"
    },
    {
      id: 3,
      title: "Career Fair - Tech Companies",
      type: "career-fair",
      date: "April 2, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Sports Complex",
      participants: 300,
      host: "Career Services",
      description: "Connect with top tech employers"
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'live': return 'bg-red-100 text-red-800';
      case 'upcoming': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleJoinLecture = (lectureId: number) => {
    showSuccess('Successfully joined the live lecture!');
  };

  const handleRSVP = (eventId: number) => {
    showSuccess('Successfully registered for the event!');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Go to Class</h1>
          <p className="text-slate-500">Join live lectures and academic gatherings</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input 
              placeholder="Search classes or events..." 
              className="pl-10 rounded-xl w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="rounded-xl">
            <Filter size={18} />
          </Button>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="live" className="flex items-center gap-2">
            <Video className="w-4 h-4" />
            Live Lectures
          </TabsTrigger>
          <TabsTrigger value="gatherings" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Gatherings
          </TabsTrigger>
        </TabsList>

        {/* Live Lectures Tab */}
        <TabsContent value="live" className="space-y-6">
          <div className="mb-6">
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
              <Video className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Live Lecture Schedule</h3>
                <p className="text-sm text-blue-700">Every Wednesday & Friday</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {liveLectures.map((lecture) => (
              <Card key={lecture.id} className="border-none shadow-sm rounded-2xl hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900">{lecture.title}</h4>
                      <p className="text-sm text-slate-600">{lecture.course} • Prof. {lecture.instructor}</p>
                      <p className="text-sm text-slate-500 mb-2">{lecture.description}</p>
                    </div>
                    <Badge className={`${getStatusColor(lecture.status)} border-none text-xs`}>
                      {lecture.status === 'live' ? 'LIVE NOW' : lecture.status.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {lecture.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {lecture.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {lecture.participants}/{lecture.maxParticipants}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="rounded-xl"
                    >
                      <Bell className="w-4 h-4 mr-1" />
                      Remind Me
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-red-600 hover:bg-red-700 rounded-xl"
                      onClick={() => handleJoinLecture(lecture.id)}
                    >
                      <Play className="w-4 h-4 mr-1" />
                      {lecture.status === 'live' ? 'Join Now' : 'Join Class'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Gatherings Tab */}
        <TabsContent value="gatherings" className="space-y-6">
          <div className="mb-6">
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
              <Users className="w-8 h-8 text-purple-600" />
              <div>
                <h3 className="text-lg font-semibold text-purple-900">Upcoming Gatherings</h3>
                <p className="text-sm text-purple-700">Study groups, events, and workshops</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingGatherings.map((gathering) => (
              <Card key={gathering.id} className="border-none shadow-sm rounded-2xl hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900">{gathering.title}</h4>
                      <p className="text-sm text-slate-600">Hosted by {gathering.host}</p>
                      <p className="text-sm text-slate-500 mb-2">{gathering.description}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {gathering.participants} attending
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {gathering.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {gathering.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {gathering.location}
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full rounded-xl"
                    onClick={() => handleRSVP(gathering.id)}
                  >
                    RSVP to Attend
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card className="border-none shadow-sm rounded-2xl">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="rounded-xl h-20 flex-col gap-2"
              onClick={() => navigate('/school/my-program')}
            >
              <BookOpen className="w-6 h-6" />
              <span className="text-sm">My Program</span>
            </Button>
            <Button 
              variant="outline" 
              className="rounded-xl h-20 flex-col gap-2"
              onClick={() => navigate('/school/degree-progress')}
            >
              <Calendar className="w-6 h-6" />
              <span className="text-sm">Progress Audit</span>
            </Button>
            <Button 
              variant="outline" 
              className="rounded-xl h-20 flex-col gap-2"
              onClick={() => navigate('/school/class-schedule')}
            >
              <Clock className="w-6 h-6" />
              <span className="text-sm">Class Schedule</span>
            </Button>
            <Button 
              variant="outline" 
              className="rounded-xl h-20 flex-col gap-2"
              onClick={() => navigate('/school/transcripts')}
            >
              <Download className="w-6 h-6" />
              <span className="text-sm">Transcripts</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoToClass;
