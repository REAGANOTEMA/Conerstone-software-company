"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  BookOpen,
  Video,
  Bell,
  Filter,
  Search,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Plus,
  AlertCircle,
  CheckCircle,
  Play,
  MessageSquare,
  Download,
  Share,
  Star,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from '@/context/AuthContext';
import { showSuccess } from '@/utils/toast';

const ClassSchedule = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('week');
  const [selectedWeek, setSelectedWeek] = useState('current');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');

  // Sample data for demonstration
  const classSchedule = {
    current: {
      week: "March 25-31, 2024",
      days: [
        {
          day: "Monday",
          date: "March 25",
          classes: [
            {
              id: 1,
              time: "8:00 - 9:30",
              course: "CS301",
              title: "Advanced Algorithms",
              instructor: "Dr. Sarah Johnson",
              room: "Lab 101",
              type: "lecture",
              status: "upcoming",
              credits: 4,
              color: "bg-blue-100 text-blue-800"
            },
            {
              id: 2,
              time: "10:00 - 11:30",
              course: "CS303",
              title: "Web Development",
              instructor: "Dr. Reagan Otema",
              room: "Room 205",
              type: "lab",
              status: "upcoming",
              credits: 4,
              color: "bg-emerald-100 text-emerald-800"
            },
            {
              id: 3,
              time: "2:00 - 3:30",
              course: "CS302",
              title: "Database Systems",
              instructor: "Prof. Michael Chen",
              room: "Lab 102",
              type: "lecture",
              status: "upcoming",
              credits: 3,
              color: "bg-purple-100 text-purple-800"
            }
          ]
        },
        {
          day: "Tuesday",
          date: "March 26",
          classes: [
            {
              id: 4,
              time: "9:00 - 10:30",
              course: "CS304",
              title: "Cybersecurity Fundamentals",
              instructor: "Prof. Binsobedde Najiib",
              room: "Room 301",
              type: "lecture",
              status: "upcoming",
              credits: 3,
              color: "bg-red-100 text-red-800"
            },
            {
              id: 5,
              time: "11:00 - 12:30",
              course: "CS301",
              title: "Advanced Algorithms",
              instructor: "Dr. Sarah Johnson",
              room: "Lab 101",
              type: "lab",
              status: "upcoming",
              credits: 4,
              color: "bg-blue-100 text-blue-800"
            },
            {
              id: 6,
              time: "3:00 - 4:30",
              course: "CS303",
              title: "Web Development",
              instructor: "Dr. Reagan Otema",
              room: "Room 205",
              type: "workshop",
              status: "upcoming",
              credits: 4,
              color: "bg-emerald-100 text-emerald-800"
            }
          ]
        },
        {
          day: "Wednesday",
          date: "March 27",
          classes: [
            {
              id: 7,
              time: "10:00 - 11:30",
              course: "CS301",
              title: "Advanced Algorithms - LIVE LECTURE",
              instructor: "Dr. Sarah Johnson",
              room: "Virtual",
              type: "live-lecture",
              status: "live",
              credits: 4,
              color: "bg-red-100 text-red-800 border-2 border-red-500"
            },
            {
              id: 8,
              time: "2:00 - 3:30",
              course: "CS302",
              title: "Database Systems - LIVE LECTURE",
              instructor: "Prof. Michael Chen",
              room: "Virtual",
              type: "live-lecture",
              status: "live",
              credits: 3,
              color: "bg-red-100 text-red-800 border-2 border-red-500"
            }
          ]
        },
        {
          day: "Thursday",
          date: "March 28",
          classes: [
            {
              id: 9,
              time: "8:00 - 9:30",
              course: "CS303",
              title: "Web Development",
              instructor: "Dr. Reagan Otema",
              room: "Lab 102",
              type: "lab",
              status: "upcoming",
              credits: 4,
              color: "bg-emerald-100 text-emerald-800"
            },
            {
              id: 10,
              time: "11:00 - 12:30",
              course: "CS304",
              title: "Cybersecurity Fundamentals",
              instructor: "Prof. Binsobedde Najiib",
              room: "Room 301",
              type: "lecture",
              status: "upcoming",
              credits: 3,
              color: "bg-red-100 text-red-800"
            },
            {
              id: 11,
              time: "2:00 - 3:30",
              course: "CS302",
              title: "Database Systems",
              instructor: "Prof. Michael Chen",
              room: "Lab 101",
              type: "lab",
              status: "upcoming",
              credits: 3,
              color: "bg-purple-100 text-purple-800"
            }
          ]
        },
        {
          day: "Friday",
          date: "March 29",
          classes: [
            {
              id: 12,
              time: "9:00 - 10:30",
              course: "CS303",
              title: "Web Development - LIVE LECTURE",
              instructor: "Dr. Reagan Otema",
              room: "Virtual",
              type: "live-lecture",
              status: "live",
              credits: 4,
              color: "bg-red-100 text-red-800 border-2 border-red-500"
            },
            {
              id: 13,
              time: "1:00 - 2:30",
              course: "CS304",
              title: "Cybersecurity Fundamentals - LIVE LECTURE",
              instructor: "Prof. Binsobedde Najiib",
              room: "Virtual",
              type: "live-lecture",
              status: "live",
              credits: 3,
              color: "bg-red-100 text-red-800 border-2 border-red-500"
            },
            {
              id: 14,
              time: "3:00 - 4:30",
              course: "CS301",
              title: "Advanced Algorithms",
              instructor: "Dr. Sarah Johnson",
              room: "Room 205",
              type: "workshop",
              status: "upcoming",
              credits: 4,
              color: "bg-blue-100 text-blue-800"
            }
          ]
        }
      ]
    }
  };

  const getClassTypeIcon = (type: string) => {
    switch(type) {
      case 'lecture': return <BookOpen className="w-4 h-4" />;
      case 'lab': return <Target className="w-4 h-4" />;
      case 'workshop': return <Users className="w-4 h-4" />;
      case 'live-lecture': return <Video className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'live': return 'bg-red-100 text-red-800 border-2 border-red-500 animate-pulse';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const handleJoinClass = (classId: number) => {
    showSuccess('Successfully joined the class!');
  };

  const handleSetReminder = (classId: number) => {
    showSuccess('Reminder set for this class!');
  };

  const handleDownloadSchedule = () => {
    showSuccess('Schedule downloaded successfully!');
  };

  const filteredClasses = classSchedule.current.days.map(day => ({
    ...day,
    classes: day.classes.filter(cls => 
      selectedCourse === 'all' || cls.course === selectedCourse
    ).filter(cls => 
      searchTerm === '' || 
      cls.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.course.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Class Schedule</h1>
          <p className="text-slate-500">View your weekly timetable and join live classes</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            <ChevronLeft className="mr-2" size={18} />
            Previous Week
          </Button>
          <Button variant="outline" className="rounded-xl">
            <ChevronRight className="mr-2" size={18} />
            Next Week
          </Button>
          <Button onClick={handleDownloadSchedule} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            <Download className="mr-2" size={18} />
            Download Schedule
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input 
              placeholder="Search classes, instructors, or rooms..." 
              className="pl-10 rounded-xl" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={selectedCourse} onValueChange={setSelectedCourse}>
            <SelectTrigger className="w-48 rounded-xl">
              <SelectValue placeholder="Filter by Course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              <SelectItem value="CS301">CS301 - Advanced Algorithms</SelectItem>
              <SelectItem value="CS302">CS302 - Database Systems</SelectItem>
              <SelectItem value="CS303">CS303 - Web Development</SelectItem>
              <SelectItem value="CS304">CS304 - Cybersecurity</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="rounded-xl">
            <Filter size={18} />
          </Button>
        </div>
      </div>

      {/* Week Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{classSchedule.current.week}</h2>
            <p className="text-slate-600">Current Week Schedule</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">14</p>
              <p className="text-sm text-slate-600">Total Classes</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-emerald-600">4</p>
              <p className="text-sm text-slate-600">Live Sessions</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">17</p>
              <p className="text-sm text-slate-600">Credits</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        {filteredClasses.map((day, dayIndex) => (
          <Card key={dayIndex} className="border-none shadow-sm rounded-2xl">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{day.day}</CardTitle>
                <CardDescription className="text-sm">{day.date}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {day.classes.length === 0 ? (
                <div className="text-center py-8 text-slate-400">
                  <Calendar className="w-8 h-8 mx-auto mb-2" />
                  <p>No classes scheduled</p>
                </div>
              ) : (
                day.classes.map((classItem) => (
                  <div 
                    key={classItem.id} 
                    className={`p-3 rounded-xl border-2 transition-all hover:shadow-md cursor-pointer ${classItem.color}`}
                    onClick={() => classItem.type === 'live-lecture' ? handleJoinClass(classItem.id) : null}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {getClassTypeIcon(classItem.type)}
                          <span className="font-semibold text-sm">{classItem.course}</span>
                          <Badge className="text-xs bg-white/80 border-none">
                            {classItem.credits} credits
                          </Badge>
                        </div>
                        <p className="text-xs font-medium line-clamp-2">{classItem.title}</p>
                        <p className="text-xs text-slate-600">Prof. {classItem.instructor}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span className="text-xs">{classItem.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="w-3 h-3" />
                        <span>{classItem.room}</span>
                      </div>
                      <div className="flex gap-1">
                        {classItem.type === 'live-lecture' ? (
                          <Button 
                            size="sm" 
                            className="bg-red-600 hover:bg-red-700 text-white text-xs rounded-lg px-2 py-1"
                            onClick={() => handleJoinClass(classItem.id)}
                          >
                            <Play className="w-3 h-3 mr-1" />
                            Join Live
                          </Button>
                        ) : (
                          <>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-xs rounded-lg px-2 py-1"
                              onClick={() => handleSetReminder(classItem.id)}
                            >
                              <Bell className="w-3 h-3 mr-1" />
                              Remind
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-xs rounded-lg px-2 py-1"
                            >
                              <MessageSquare className="w-3 h-3 mr-1" />
                              Details
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        ))}
      </div>

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
              <Target className="w-6 h-6" />
              <span className="text-sm">Progress Audit</span>
            </Button>
            <Button 
              variant="outline" 
              className="rounded-xl h-20 flex-col gap-2"
              onClick={() => navigate('/school/go-to-class')}
            >
              <Video className="w-6 h-6" />
              <span className="text-sm">Live Lectures</span>
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

export default ClassSchedule;
