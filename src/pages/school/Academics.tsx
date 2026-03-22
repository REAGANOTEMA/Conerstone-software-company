"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  TrendingUp, 
  Calendar, 
  Users, 
  Play, 
  Clock, 
  Award,
  Target,
  BarChart3,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Video,
  MessageSquare,
  Download,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/context/AuthContext';

const Academics = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('program');

  // Sample data for demonstration
  const myProgram = {
    name: "Bachelor of Science in Computer Science",
    degree: "B.Sc. Computer Science",
    duration: "4 Years",
    startYear: "2023",
    expectedGraduation: "2027",
    credits: {
      completed: 72,
      total: 144,
      inProgress: 18
    },
    specialization: "Software Engineering",
    gpa: 3.8,
    academicStanding: "Excellent"
  };

  const degreeProgress = {
    overall: 50,
    firstYear: 100,
    secondYear: 85,
    thirdYear: 30,
    fourthYear: 0
  };

  const currentSemester = {
    name: "Fall 2024",
    courses: [
      {
        code: "CS301",
        name: "Advanced Algorithms",
        credits: 4,
        grade: "A-",
        instructor: "Dr. Sarah Johnson",
        progress: 85,
        attendance: 92
      },
      {
        code: "CS302", 
        name: "Database Systems",
        credits: 3,
        grade: "B+",
        instructor: "Prof. Michael Chen",
        progress: 78,
        attendance: 88
      },
      {
        code: "CS303",
        name: "Web Development",
        credits: 4,
        grade: "A",
        instructor: "Dr. Reagan Otema",
        progress: 95,
        attendance: 96
      },
      {
        code: "CS304",
        name: "Cybersecurity Fundamentals",
        credits: 3,
        grade: "B",
        instructor: "Prof. Binsobedde Najiib",
        progress: 72,
        attendance: 85
      }
    ]
  };

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
      type: "live"
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
      type: "live"
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
      type: "live"
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
      type: "live"
    }
  ];

  const classSchedule = [
    {
      day: "Monday",
      classes: [
        { time: "8:00 - 9:30", course: "CS301", room: "Lab 101", type: "lecture" },
        { time: "10:00 - 11:30", course: "CS303", room: "Room 205", type: "lab" },
        { time: "2:00 - 3:30", course: "CS302", room: "Lab 102", type: "lecture" }
      ]
    },
    {
      day: "Tuesday",
      classes: [
        { time: "9:00 - 10:30", course: "CS304", room: "Room 301", type: "lecture" },
        { time: "11:00 - 12:30", course: "CS301", room: "Lab 101", type: "lab" },
        { time: "3:00 - 4:30", course: "CS303", room: "Room 205", type: "workshop" }
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { time: "10:00 - 11:30", course: "CS301", room: "Virtual", type: "live-lecture" },
        { time: "2:00 - 3:30", course: "CS302", room: "Virtual", type: "live-lecture" }
      ]
    },
    {
      day: "Thursday",
      classes: [
        { time: "8:00 - 9:30", course: "CS303", room: "Lab 102", type: "lab" },
        { time: "11:00 - 12:30", course: "CS304", room: "Room 301", type: "lecture" },
        { time: "2:00 - 3:30", course: "CS302", room: "Lab 101", type: "lab" }
      ]
    },
    {
      day: "Friday",
      classes: [
        { time: "9:00 - 10:30", course: "CS303", room: "Virtual", type: "live-lecture" },
        { time: "1:00 - 2:30", course: "CS304", room: "Virtual", type: "live-lecture" },
        { time: "3:00 - 4:30", course: "CS301", room: "Room 205", type: "workshop" }
      ]
    }
  ];

  const upcomingGatherings = [
    {
      id: 1,
      title: "Study Group - Advanced Algorithms",
      type: "study-group",
      date: "March 27, 2024",
      time: "6:00 PM - 7:30 PM",
      location: "Library Room 201",
      participants: 12,
      host: "Student Council"
    },
    {
      id: 2,
      title: "Guest Lecture: AI in Software Development",
      type: "guest-lecture",
      date: "March 29, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Main Auditorium",
      participants: 150,
      host: "Computer Science Department"
    },
    {
      id: 3,
      title: "Career Fair - Tech Companies",
      type: "career-fair",
      date: "April 2, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Sports Complex",
      participants: 300,
      host: "Career Services"
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-yellow-100 text-yellow-800';
      case 'live': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Academics</h1>
          <p className="text-slate-500">Manage your academic journey and stay on track</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            <Download className="mr-2" size={18} />
            Download Transcript
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            <BookOpen className="mr-2" size={18} />
            Course Catalog
          </Button>
        </div>
      </div>

      {/* Academic Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Current GPA</p>
              <h3 className="text-2xl font-bold text-slate-900">{myProgram.gpa}</h3>
              <p className="text-xs text-emerald-600">{myProgram.academicStanding}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Credits</p>
              <h3 className="text-2xl font-bold text-slate-900">{myProgram.credits.completed}/{myProgram.credits.total}</h3>
              <p className="text-xs text-slate-500">{myProgram.credits.inProgress} in progress</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Progress</p>
              <h3 className="text-2xl font-bold text-slate-900">{degreeProgress.overall}%</h3>
              <p className="text-xs text-slate-500">Year {Math.floor(degreeProgress.overall / 25) + 1}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Current Courses</p>
              <h3 className="text-2xl font-bold text-slate-900">{currentSemester.courses.length}</h3>
              <p className="text-xs text-slate-500">This semester</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="program" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            My Program
          </TabsTrigger>
          <TabsTrigger value="progress" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Degree Progress
          </TabsTrigger>
          <TabsTrigger value="class" className="flex items-center gap-2">
            <Play className="w-4 h-4" />
            Go to Class
          </TabsTrigger>
          <TabsTrigger value="schedule" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Class Schedule
          </TabsTrigger>
        </TabsList>

        {/* My Program Tab */}
        <TabsContent value="program" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Program Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-500">Degree</p>
                    <p className="font-semibold">{myProgram.degree}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Duration</p>
                    <p className="font-semibold">{myProgram.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Start Year</p>
                    <p className="font-semibold">{myProgram.startYear}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Expected Graduation</p>
                    <p className="font-semibold">{myProgram.expectedGraduation}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Specialization</p>
                  <p className="font-semibold">{myProgram.specialization}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Academic Standing</p>
                  <Badge className={`${getStatusColor(myProgram.academicStanding === 'Excellent' ? 'completed' : 'in-progress')} border-none`}>
                    {myProgram.academicStanding}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  Current Semester Courses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentSemester.courses.map((course, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{course.code}</span>
                        <Badge variant="outline" className="text-xs">{course.credits} credits</Badge>
                      </div>
                      <p className="text-sm text-slate-600">{course.name}</p>
                      <p className="text-xs text-slate-500">Prof. {course.instructor}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="font-semibold">{course.grade}</span>
                      </div>
                      <div className="text-xs text-slate-500">{course.progress}% complete</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Degree Progress Tab */}
        <TabsContent value="progress" className="space-y-6">
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-600" />
                Degree Progress Overview
              </CardTitle>
              <CardDescription>
                Track your progress through each year of your program
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Overall Progress</span>
                    <span className="text-sm text-slate-500">{degreeProgress.overall}% Complete</span>
                  </div>
                  <Progress value={degreeProgress.overall} className="h-3" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { year: "First Year", progress: degreeProgress.firstYear },
                    { year: "Second Year", progress: degreeProgress.secondYear },
                    { year: "Third Year", progress: degreeProgress.thirdYear },
                    { year: "Fourth Year", progress: degreeProgress.fourthYear }
                  ].map((year, index) => (
                    <div key={index} className="p-4 border border-slate-200 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{year.year}</span>
                        <span className="text-sm text-slate-500">{year.progress}%</span>
                      </div>
                      <Progress value={year.progress} className="h-2" />
                      {year.progress === 100 && (
                        <div className="flex items-center gap-1 mt-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm text-emerald-600">Completed</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-xl">
                <h4 className="font-semibold mb-2">Credit Requirements</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{myProgram.credits.completed}</p>
                    <p className="text-sm text-slate-600">Completed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-600">{myProgram.credits.inProgress}</p>
                    <p className="text-sm text-slate-600">In Progress</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-600">{myProgram.credits.total - myProgram.credits.completed - myProgram.credits.inProgress}</p>
                    <p className="text-sm text-slate-600">Remaining</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Go to Class Tab */}
        <TabsContent value="class" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-red-600" />
                  Live Lectures
                </CardTitle>
                <CardDescription>
                  Join live sessions every Wednesday and Friday
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {liveLectures.map((lecture) => (
                  <div key={lecture.id} className="border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-slate-900">{lecture.title}</h4>
                        <p className="text-sm text-slate-600">{lecture.course} • Prof. {lecture.instructor}</p>
                      </div>
                      <Badge className={`${getStatusColor(lecture.status)} border-none`}>
                        {lecture.status === 'upcoming' ? 'Upcoming' : 'Live'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {lecture.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {lecture.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Play className="w-4 h-4" />
                        {lecture.duration}
                      </div>
                    </div>
                    <Button className="w-full mt-3 bg-red-600 hover:bg-red-700 rounded-xl">
                      {lecture.status === 'live' ? 'Join Now' : 'Set Reminder'}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Upcoming Gatherings
                </CardTitle>
                <CardDescription>
                  Academic events and study sessions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingGatherings.map((gathering) => (
                  <div key={gathering.id} className="border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-slate-900">{gathering.title}</h4>
                        <p className="text-sm text-slate-600">Hosted by {gathering.host}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {gathering.participants} participants
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
                    <Button variant="outline" className="w-full rounded-xl">
                      RSVP
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Class Schedule Tab */}
        <TabsContent value="schedule" className="space-y-6">
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-orange-600" />
                Weekly Class Schedule
              </CardTitle>
              <CardDescription>
                Your complete weekly timetable with live lectures on Wednesdays and Fridays
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classSchedule.map((day, index) => (
                  <div key={index} className="border-b border-slate-200 pb-4 last:border-0">
                    <h4 className="font-semibold text-slate-900 mb-3">{day.day}</h4>
                    <div className="space-y-2">
                      {day.classes.map((classItem, classIndex) => (
                        <div key={classIndex} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                          <div className="flex items-center gap-2 text-sm font-medium text-slate-600 w-32">
                            {getClassTypeIcon(classItem.type)}
                            {classItem.time}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">{classItem.course}</span>
                              {classItem.type === 'live-lecture' && (
                                <Badge className="bg-red-100 text-red-800 border-none text-xs">
                                  <Video className="w-3 h-3 mr-1" />
                                  Live
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-slate-500">{classItem.room}</p>
                          </div>
                          <Button variant="outline" size="sm" className="rounded-xl">
                            {classItem.type === 'live-lecture' ? 'Join' : 'View Details'}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Academics;
