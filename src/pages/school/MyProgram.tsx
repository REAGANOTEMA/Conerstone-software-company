"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  TrendingUp, 
  Calendar, 
  Users, 
  Award,
  Target,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAuth } from '@/context/AuthContext';
import { showSuccess } from '@/utils/toast';

const MyProgram = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Sample data for demonstration
  const myProgram = {
    name: "NextERP Professional Skills Program",
    degree: "Professional Skills Track",
    duration: "12-24 Months",
    startYear: "2024",
    expectedGraduation: "2026",
    credits: {
      completed: 72,
      total: 144,
      inProgress: 18
    },
    specialization: "Programming (Web + Computer Programming)",
    gpa: 3.8,
    academicStanding: "Excellent"
  };

  const currentSemester = {
    name: "Fall 2024",
    courses: [
      {
        code: "PRG201",
        name: "Programming (Web Programming)",
        credits: 4,
        grade: "A-",
        instructor: "Dr. Reagan Otema",
        progress: 85,
        attendance: 92
      },
      {
        code: "PRG202",
        name: "Programming (Computer Programming)",
        credits: 4,
        grade: "B+",
        instructor: "Prof. Binsobedde Najiib",
        progress: 78,
        attendance: 88
      },
      {
        code: "DPO101",
        name: "Microsoft Office Suite",
        credits: 3,
        grade: "A",
        instructor: "Faculty Team",
        progress: 95,
        attendance: 96
      },
      {
        code: "CMD220",
        name: "Graphics Design & Digital Media",
        credits: 3,
        grade: "B",
        instructor: "Creative Media Faculty",
        progress: 72,
        attendance: 85
      },
      {
        code: "NET301",
        name: "Networking Fundamentals",
        credits: 3,
        grade: "A-",
        instructor: "Prof. Technical Faculty",
        progress: 88,
        attendance: 90
      },
      {
        code: "DBS201",
        name: "Database Management Systems",
        credits: 3,
        grade: "B+",
        instructor: "Dr. Database Faculty",
        progress: 75,
        attendance: 87
      }
    ]
  };

  const allCourses = [
    { code: "PRG201", name: "Programming (Web Programming)", credits: 4, description: "HTML, CSS, JavaScript, React.js" },
    { code: "PRG202", name: "Programming (Computer Programming)", credits: 4, description: "Java, Python, C++, Algorithms" },
    { code: "DPO101", name: "Microsoft Office Suite", credits: 3, description: "Word, Excel, PowerPoint, Access" },
    { code: "CMD220", name: "Graphics Design & Digital Media", credits: 3, description: "Photoshop, Illustrator, Video Editing" },
    { code: "NET301", name: "Networking Fundamentals", credits: 3, description: "CCNA, Network Security, Protocols" },
    { code: "DBS201", name: "Database Management Systems", credits: 3, description: "SQL, Database Design, Administration" },
    { code: "SEC301", name: "Cybersecurity Essentials", credits: 3, description: "Security Fundamentals, Ethical Hacking" },
    { code: "CLO201", name: "Cloud Computing", credits: 3, description: "AWS, Azure, Cloud Architecture" },
    { code: "MOB301", name: "Mobile App Development", credits: 3, description: "Android, iOS, React Native" },
    { code: "PRO401", name: "Professional Development", credits: 2, description: "Communication, Leadership, Ethics" },
    { code: "ENT301", name: "Entrepreneurship", credits: 3, description: "Business Planning, Startup Management" },
    { code: "MKT201", name: "Digital Marketing", credits: 3, description: "SEO, Social Media, Analytics" }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Excellent': return 'bg-emerald-100 text-emerald-800';
      case 'Good': return 'bg-blue-100 text-blue-800';
      case 'Satisfactory': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-emerald-100 text-emerald-800';
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800';
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">My Program</h1>
          <p className="text-slate-500">View your academic program details and progress</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            <ArrowRight className="mr-2" size={18} />
            Degree Progress Audit
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            <BookOpen className="mr-2" size={18} />
            Go to Class
          </Button>
        </div>
      </div>

      {/* Program Overview Cards */}
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
              <p className="text-sm text-slate-500 font-medium">Program</p>
              <h3 className="text-lg font-bold text-slate-900">{myProgram.degree}</h3>
              <p className="text-xs text-slate-500">{myProgram.duration}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Specialization</p>
              <h3 className="text-lg font-bold text-slate-900">{myProgram.specialization}</h3>
              <p className="text-xs text-slate-500">Year {Math.floor(myProgram.credits.completed / 36) + 1}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Program Details */}
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
                <Label>Degree</Label>
                <Input value={myProgram.degree} disabled className="rounded-xl" />
              </div>
              <div>
                <Label>Duration</Label>
                <Input value={myProgram.duration} disabled className="rounded-xl" />
              </div>
              <div>
                <Label>Start Year</Label>
                <Input value={myProgram.startYear} disabled className="rounded-xl" />
              </div>
              <div>
                <Label>Expected Graduation</Label>
                <Input value={myProgram.expectedGraduation} disabled className="rounded-xl" />
              </div>
            </div>
            <div>
              <Label>Specialization</Label>
              <Input value={myProgram.specialization} disabled className="rounded-xl" />
            </div>
            <div>
              <Label>Academic Standing</Label>
              <Badge className={`${getStatusColor(myProgram.academicStanding)} border-none`}>
                {myProgram.academicStanding}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              Current Semester
            </CardTitle>
            <CardDescription>
              {currentSemester.name}
            </CardDescription>
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
              onClick={() => navigate('/school/degree-progress')}
            >
              <BarChart3 className="w-6 h-6" />
              <span className="text-sm">Degree Progress</span>
            </Button>
            <Button 
              variant="outline" 
              className="rounded-xl h-20 flex-col gap-2"
              onClick={() => navigate('/school/class-schedule')}
            >
              <Calendar className="w-6 h-6" />
              <span className="text-sm">Class Schedule</span>
            </Button>
            <Button 
              variant="outline" 
              className="rounded-xl h-20 flex-col gap-2"
              onClick={() => navigate('/school/live-lectures')}
            >
              <Users className="w-6 h-6" />
              <span className="text-sm">Live Lectures</span>
            </Button>
            <Button 
              variant="outline" 
              className="rounded-xl h-20 flex-col gap-2"
              onClick={() => navigate('/school/transcripts')}
            >
              <Award className="w-6 h-6" />
              <span className="text-sm">Transcripts</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyProgram;
