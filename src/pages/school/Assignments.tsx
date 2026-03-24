"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Calendar, 
  Clock, 
  Upload, 
  Download, 
  CheckCircle, 
  AlertCircle, 
  Search,
  Filter,
  Star,
  MessageSquare,
  Paperclip,
  TrendingUp,
  BookOpen,
  Target,
  Play,
  ChevronRight,
  MoreVertical,
  Plus,
  Eye,
  Users,
  Award,
  Video,
  FileCode,
  Image,
  FileSpreadsheet,
  Presentation,
  Globe,
  Shield,
  Smartphone,
  Cloud,
  Briefcase,
  Megaphone,
  UserCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useAuth } from '@/context/AuthContext';
import { showSuccess } from '@/utils/toast';
import { cn } from '@/lib/utils';

const Assignments = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedWeek, setSelectedWeek] = useState('all');

  // Course icons mapping
  const getCourseIcon = (courseCode: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'PRG201': <FileCode className="w-5 h-5" />,
      'PRG202': <FileCode className="w-5 h-5" />,
      'DPO101': <FileSpreadsheet className="w-5 h-5" />,
      'CMD220': <Image className="w-5 h-5" />,
      'NET301': <Globe className="w-5 h-5" />,
      'DBS201': <FileSpreadsheet className="w-5 h-5" />,
      'SEC301': <Shield className="w-5 h-5" />,
      'CLO201': <Cloud className="w-5 h-5" />,
      'MOB301': <Smartphone className="w-5 h-5" />,
      'PRO401': <UserCheck className="w-5 h-5" />,
      'ENT301': <Briefcase className="w-5 h-5" />,
      'MKT201': <Megaphone className="w-5 h-5" />
    };
    return iconMap[courseCode] || <BookOpen className="w-5 h-5" />;
  };

  // Comprehensive assignments for 14-week semester
  const assignments = [
    // Block 1: Weeks 1-7
    // Week 1
    {
      id: 1,
      title: "Introduction to Web Development - HTML Basics",
      course: "PRG201",
      courseName: "Programming (Web Programming)",
      week: 1,
      block: 1,
      dueDate: "2024-03-28",
      status: "graded",
      priority: "medium",
      points: 50,
      grade: "A",
      description: "Create a basic HTML structure for a personal portfolio website with semantic tags.",
      instructor: "Dr. Reagan Otema",
      type: "project",
      feedback: "Excellent use of semantic HTML5 tags!"
    },
    {
      id: 2,
      title: "Microsoft Word - Document Formatting",
      course: "DPO101",
      courseName: "Microsoft Office Suite",
      week: 1,
      block: 1,
      dueDate: "2024-03-30",
      status: "graded",
      priority: "low",
      points: 30,
      grade: "A+",
      description: "Format a professional business document using advanced Word features.",
      instructor: "Faculty Team",
      type: "exercise"
    },
    // Week 2
    {
      id: 3,
      title: "CSS Fundamentals - Styling Web Pages",
      course: "PRG201",
      courseName: "Programming (Web Programming)",
      week: 2,
      block: 1,
      dueDate: "2024-04-04",
      status: "graded",
      priority: "high",
      points: 75,
      grade: "A-",
      description: "Apply CSS styling to the HTML portfolio including responsive design.",
      instructor: "Dr. Reagan Otema",
      type: "project"
    },
    {
      id: 4,
      title: "Programming Fundamentals - Variables & Data Types",
      course: "PRG202",
      courseName: "Programming (Computer Programming)",
      week: 2,
      block: 1,
      dueDate: "2024-04-05",
      status: "graded",
      priority: "high",
      points: 60,
      grade: "B+",
      description: "Write basic Python programs demonstrating variables, data types, and operators.",
      instructor: "Prof. Binsobedde Najiib",
      type: "coding"
    },
    // Week 3
    {
      id: 5,
      title: "JavaScript Basics - DOM Manipulation",
      course: "PRG201",
      courseName: "Programming (Web Programming)",
      week: 3,
      block: 1,
      dueDate: "2024-04-11",
      status: "graded",
      priority: "high",
      points: 80,
      grade: "A",
      description: "Add interactivity to portfolio using JavaScript DOM manipulation.",
      instructor: "Dr. Reagan Otema",
      type: "project"
    },
    {
      id: 6,
      title: "Microsoft Excel - Formulas & Functions",
      course: "DPO101",
      courseName: "Microsoft Office Suite",
      week: 3,
      block: 1,
      dueDate: "2024-04-12",
      status: "graded",
      priority: "medium",
      points: 40,
      grade: "A",
      description: "Create a budget spreadsheet with advanced formulas and charts.",
      instructor: "Faculty Team",
      type: "exercise"
    },
    // Week 4
    {
      id: 7,
      title: "Control Structures - Loops & Conditionals",
      course: "PRG202",
      courseName: "Programming (Computer Programming)",
      week: 4,
      block: 1,
      dueDate: "2024-04-18",
      status: "graded",
      priority: "high",
      points: 70,
      grade: "B+",
      description: "Implement programs using loops, conditionals, and functions in Python.",
      instructor: "Prof. Binsobedde Najiib",
      type: "coding"
    },
    {
      id: 8,
      title: "Graphic Design Principles - Color Theory",
      course: "CMD220",
      courseName: "Graphics Design & Digital Media",
      week: 4,
      block: 1,
      dueDate: "2024-04-19",
      status: "graded",
      priority: "medium",
      points: 50,
      grade: "A-",
      description: "Create a color palette and apply design principles to a poster.",
      instructor: "Creative Media Faculty",
      type: "design"
    },
    // Week 5
    {
      id: 9,
      title: "React.js Fundamentals - Components",
      course: "PRG201",
      courseName: "Programming (Web Programming)",
      week: 5,
      block: 1,
      dueDate: "2024-04-25",
      status: "graded",
      priority: "high",
      points: 100,
      grade: "A",
      description: "Convert HTML portfolio to React.js with component-based architecture.",
      instructor: "Dr. Reagan Otema",
      type: "project"
    },
    {
      id: 10,
      title: "Network Topologies & OSI Model",
      course: "NET301",
      courseName: "Networking Fundamentals",
      week: 5,
      block: 1,
      dueDate: "2024-04-26",
      status: "graded",
      priority: "medium",
      points: 60,
      grade: "B+",
      description: "Design network diagrams and explain OSI model layers.",
      instructor: "Prof. Technical Faculty",
      type: "theory"
    },
    // Week 6
    {
      id: 11,
      title: "Database Design - ER Diagrams",
      course: "DBS201",
      courseName: "Database Management Systems",
      week: 6,
      block: 1,
      dueDate: "2024-05-02",
      status: "graded",
      priority: "high",
      points: 80,
      grade: "A-",
      description: "Design ER diagrams for a student management system.",
      instructor: "Dr. Database Faculty",
      type: "design"
    },
    {
      id: 12,
      title: "Microsoft PowerPoint - Presentations",
      course: "DPO101",
      courseName: "Microsoft Office Suite",
      week: 6,
      block: 1,
      dueDate: "2024-05-03",
      status: "graded",
      priority: "low",
      points: 30,
      grade: "A+",
      description: "Create a professional business presentation with animations.",
      instructor: "Faculty Team",
      type: "presentation"
    },
    // Week 7
    {
      id: 13,
      title: "Block 1 Comprehensive Project",
      course: "PRG201",
      courseName: "Programming (Web Programming)",
      week: 7,
      block: 1,
      dueDate: "2024-05-09",
      status: "graded",
      priority: "high",
      points: 150,
      grade: "A",
      description: "Complete full-stack web application using React.js and Node.js.",
      instructor: "Dr. Reagan Otema",
      type: "project",
      feedback: "Outstanding work! Your application demonstrates excellent understanding of full-stack development."
    },
    {
      id: 14,
      title: "Block 1 Theory Assessment",
      course: "PRG202",
      courseName: "Programming (Computer Programming)",
      week: 7,
      block: 1,
      dueDate: "2024-05-10",
      status: "graded",
      priority: "high",
      points: 100,
      grade: "A-",
      description: "Written assessment covering programming fundamentals and algorithms.",
      instructor: "Prof. Binsobedde Najiib",
      type: "exam"
    },

    // Block 2: Weeks 8-14
    // Week 8
    {
      id: 15,
      title: "Advanced JavaScript - Async Programming",
      course: "PRG201",
      courseName: "Programming (Web Programming)",
      week: 8,
      block: 2,
      dueDate: "2024-05-16",
      status: "submitted",
      priority: "high",
      points: 90,
      description: "Implement async/await and API integration in React application.",
      instructor: "Dr. Reagan Otema",
      type: "project"
    },
    {
      id: 16,
      title: "Object-Oriented Programming",
      course: "PRG202",
      courseName: "Programming (Computer Programming)",
      week: 8,
      block: 2,
      dueDate: "2024-05-17",
      status: "submitted",
      priority: "high",
      points: 85,
      description: "Create classes and objects in Python with inheritance.",
      instructor: "Prof. Binsobedde Najiib",
      type: "coding"
    },
    // Week 9
    {
      id: 17,
      title: "Cybersecurity Fundamentals",
      course: "SEC301",
      courseName: "Cybersecurity Essentials",
      week: 9,
      block: 2,
      dueDate: "2024-05-23",
      status: "pending",
      priority: "high",
      points: 70,
      description: "Analyze security vulnerabilities and propose solutions.",
      instructor: "Security Faculty",
      type: "analysis"
    },
    {
      id: 18,
      title: "Adobe Photoshop - Image Editing",
      course: "CMD220",
      courseName: "Graphics Design & Digital Media",
      week: 9,
      block: 2,
      dueDate: "2024-05-24",
      status: "pending",
      priority: "medium",
      points: 60,
      description: "Edit and enhance images using advanced Photoshop techniques.",
      instructor: "Creative Media Faculty",
      type: "design"
    },
    // Week 10
    {
      id: 19,
      title: "Cloud Computing - AWS Basics",
      course: "CLO201",
      courseName: "Cloud Computing",
      week: 10,
      block: 2,
      dueDate: "2024-05-30",
      status: "pending",
      priority: "high",
      points: 80,
      description: "Deploy web application to AWS cloud platform.",
      instructor: "Cloud Faculty",
      type: "practical"
    },
    {
      id: 20,
      title: "SQL Queries & Database Operations",
      course: "DBS201",
      courseName: "Database Management Systems",
      week: 10,
      block: 2,
      dueDate: "2024-05-31",
      status: "pending",
      priority: "high",
      points: 75,
      description: "Write complex SQL queries and optimize database performance.",
      instructor: "Dr. Database Faculty",
      type: "coding"
    },
    // Week 11
    {
      id: 21,
      title: "Mobile App Development - React Native",
      course: "MOB301",
      courseName: "Mobile App Development",
      week: 11,
      block: 2,
      dueDate: "2024-06-06",
      status: "pending",
      priority: "high",
      points: 100,
      description: "Create a cross-platform mobile application using React Native.",
      instructor: "Mobile Faculty",
      type: "project"
    },
    {
      id: 22,
      title: "Professional Communication",
      course: "PRO401",
      courseName: "Professional Development",
      week: 11,
      block: 2,
      dueDate: "2024-06-07",
      status: "pending",
      priority: "medium",
      points: 40,
      description: "Deliver professional presentation and write business correspondence.",
      instructor: "Prof. Development Faculty",
      type: "presentation"
    },
    // Week 12
    {
      id: 23,
      title: "Entrepreneurship - Business Plan",
      course: "ENT301",
      courseName: "Entrepreneurship",
      week: 12,
      block: 2,
      dueDate: "2024-06-13",
      status: "pending",
      priority: "high",
      points: 90,
      description: "Develop comprehensive business plan for tech startup.",
      instructor: "Business Faculty",
      type: "research"
    },
    {
      id: 24,
      title: "Digital Marketing - SEO & Analytics",
      course: "MKT201",
      courseName: "Digital Marketing",
      week: 12,
      block: 2,
      dueDate: "2024-06-14",
      status: "pending",
      priority: "medium",
      points: 60,
      description: "Implement SEO strategies and analyze website traffic.",
      instructor: "Marketing Faculty",
      type: "practical"
    },
    // Week 13
    {
      id: 25,
      title: "Network Security Implementation",
      course: "SEC301",
      courseName: "Cybersecurity Essentials",
      week: 13,
      block: 2,
      dueDate: "2024-06-20",
      status: "pending",
      priority: "high",
      points: 85,
      description: "Implement security measures for network infrastructure.",
      instructor: "Security Faculty",
      type: "practical"
    },
    {
      id: 26,
      title: "Video Production & Editing",
      course: "CMD220",
      courseName: "Graphics Design & Digital Media",
      week: 13,
      block: 2,
      dueDate: "2024-06-21",
      status: "pending",
      priority: "medium",
      points: 70,
      description: "Produce and edit professional video content.",
      instructor: "Creative Media Faculty",
      type: "media"
    },
    // Week 14
    {
      id: 27,
      title: "Final Comprehensive Project",
      course: "PRG201",
      courseName: "Programming (Web Programming)",
      week: 14,
      block: 2,
      dueDate: "2024-06-27",
      status: "pending",
      priority: "high",
      points: 200,
      description: "Develop complete full-stack application with all learned technologies.",
      instructor: "Dr. Reagan Otema",
      type: "project"
    },
    {
      id: 28,
      title: "Final Assessment - All Courses",
      course: "ALL",
      courseName: "Comprehensive Assessment",
      week: 14,
      block: 2,
      dueDate: "2024-06-28",
      status: "pending",
      priority: "high",
      points: 150,
      description: "Comprehensive final exam covering all subjects from the semester.",
      instructor: "All Faculty",
      type: "exam"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'graded': return <Badge className="bg-emerald-50 text-emerald-600 border-none">Graded</Badge>;
      case 'submitted': return <Badge className="bg-blue-50 text-blue-600 border-none">Submitted</Badge>;
      case 'pending': return <Badge className="bg-orange-50 text-orange-600 border-none">Pending</Badge>;
      case 'overdue': return <Badge className="bg-red-50 text-red-600 border-none">Overdue</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    const typeMap: { [key: string]: { color: string; icon: React.ReactNode } } = {
      'project': { color: 'bg-purple-50 text-purple-600', icon: <FileCode size={14} /> },
      'coding': { color: 'bg-blue-50 text-blue-600', icon: <FileCode size={14} /> },
      'design': { color: 'bg-pink-50 text-pink-600', icon: <Image size={14} /> },
      'exercise': { color: 'bg-green-50 text-green-600', icon: <CheckCircle size={14} /> },
      'theory': { color: 'bg-yellow-50 text-yellow-600', icon: <BookOpen size={14} /> },
      'exam': { color: 'bg-red-50 text-red-600', icon: <AlertCircle size={14} /> },
      'presentation': { color: 'bg-indigo-50 text-indigo-600', icon: <Presentation size={14} /> },
      'analysis': { color: 'bg-orange-50 text-orange-600', icon: <TrendingUp size={14} /> },
      'practical': { color: 'bg-teal-50 text-teal-600', icon: <Play size={14} /> },
      'research': { color: 'bg-cyan-50 text-cyan-600', icon: <Search size={14} /> },
      'media': { color: 'bg-rose-50 text-rose-600', icon: <Video size={14} /> }
    };
    
    const typeInfo = typeMap[type] || { color: 'bg-gray-50 text-gray-600', icon: <FileText size={14} /> };
    
    return (
      <Badge className={`${typeInfo.color} border-none flex items-center gap-1`}>
        {typeInfo.icon}
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Badge>
    );
  };

  const filteredAssignments = assignments.filter(a => 
    (selectedCourse === 'all' || a.course === selectedCourse) &&
    (selectedWeek === 'all' || a.week === parseInt(selectedWeek)) &&
    (a.title.toLowerCase().includes(searchTerm.toLowerCase()) || a.courseName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const weeks = Array.from({ length: 14 }, (_, i) => i + 1);
  const blocks = [
    { id: 1, name: "Block 1", weeks: "Weeks 1-7", description: "Foundation Courses" },
    { id: 2, name: "Block 2", weeks: "Weeks 8-14", description: "Advanced Courses" }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Assignments</h1>
          <p className="text-slate-500">Track your coursework, submit projects, and view feedback.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            <Download className="mr-2" size={18} />
            Download All
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            <Plus className="mr-2" size={18} />
            New Submission
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><FileText size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Total</p>
              <h3 className="text-2xl font-bold text-slate-900">{assignments.length}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl"><Clock size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Pending</p>
              <h3 className="text-2xl font-bold text-slate-900">{assignments.filter(a => a.status === 'pending').length}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><CheckCircle size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Graded</p>
              <h3 className="text-2xl font-bold text-slate-900">{assignments.filter(a => a.status === 'graded').length}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl"><AlertCircle size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Overdue</p>
              <h3 className="text-2xl font-bold text-slate-900">{assignments.filter(a => a.status === 'overdue').length}</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Block Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blocks.map(block => (
          <Card key={block.id} className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                {block.name}
              </CardTitle>
              <CardDescription>{block.weeks} • {block.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Assignments</span>
                  <span className="font-semibold">{assignments.filter(a => a.block === block.id).length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Completed</span>
                  <span className="font-semibold text-emerald-600">
                    {assignments.filter(a => a.block === block.id && a.status === 'graded').length}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Pending</span>
                  <span className="font-semibold text-orange-600">
                    {assignments.filter(a => a.block === block.id && a.status === 'pending').length}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input 
              placeholder="Search assignments..." 
              className="pl-10 rounded-xl" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={selectedCourse} onValueChange={setSelectedCourse}>
            <SelectTrigger className="w-64 rounded-xl">
              <SelectValue placeholder="Filter by Course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              <SelectItem value="PRG201">PRG201 - Web Programming</SelectItem>
              <SelectItem value="PRG202">PRG202 - Computer Programming</SelectItem>
              <SelectItem value="DPO101">DPO101 - Microsoft Office</SelectItem>
              <SelectItem value="CMD220">CMD220 - Graphics Design</SelectItem>
              <SelectItem value="NET301">NET301 - Networking</SelectItem>
              <SelectItem value="DBS201">DBS201 - Database Systems</SelectItem>
              <SelectItem value="SEC301">SEC301 - Cybersecurity</SelectItem>
              <SelectItem value="CLO201">CLO201 - Cloud Computing</SelectItem>
              <SelectItem value="MOB301">MOB301 - Mobile Development</SelectItem>
              <SelectItem value="PRO401">PRO401 - Professional Dev</SelectItem>
              <SelectItem value="ENT301">ENT301 - Entrepreneurship</SelectItem>
              <SelectItem value="MKT201">MKT201 - Digital Marketing</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedWeek} onValueChange={setSelectedWeek}>
            <SelectTrigger className="w-48 rounded-xl">
              <SelectValue placeholder="Filter by Week" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Weeks</SelectItem>
              {weeks.map(week => (
                <SelectItem key={week} value={week.toString()}>
                  Week {week}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Weekly Breakdown Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 w-full justify-start overflow-x-auto">
          <TabsTrigger value="all" className="rounded-lg px-6 flex items-center gap-2">
            <FileText size={16} /> All Assignments
          </TabsTrigger>
          <TabsTrigger value="block1" className="rounded-lg px-6 flex items-center gap-2">
            <Target size={16} /> Block 1 (Weeks 1-7)
          </TabsTrigger>
          <TabsTrigger value="block2" className="rounded-lg px-6 flex items-center gap-2">
            <TrendingUp size={16} /> Block 2 (Weeks 8-14)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="m-0">
          <div className="grid gap-6">
            {filteredAssignments.map(assignment => (
              <Card key={assignment.id} className="border-none shadow-sm rounded-3xl overflow-hidden hover:shadow-md transition-all group">
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-100 rounded-lg text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                          {getCourseIcon(assignment.course)}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg">{assignment.title}</h3>
                          <p className="text-sm text-slate-500">{assignment.courseName} • {assignment.instructor}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(assignment.status)}
                        {getTypeBadge(assignment.type)}
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-600 line-clamp-2 mb-6">
                      {assignment.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Week</p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                          <Calendar size={14} className="text-blue-500" />
                          Week {assignment.week}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Due Date</p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                          <Calendar size={14} className="text-blue-500" />
                          {assignment.dueDate}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Points</p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                          <Target size={14} className="text-purple-500" />
                          {assignment.points} pts
                        </div>
                      </div>
                      {assignment.grade && (
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Grade</p>
                          <div className="flex items-center gap-2 text-sm font-bold text-emerald-600">
                            <Star size={14} className="fill-emerald-600" />
                            {assignment.grade}
                          </div>
                        </div>
                      )}
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Priority</p>
                        <div className={`text-sm font-semibold ${
                          assignment.priority === 'high' ? 'text-red-600' : 
                          assignment.priority === 'medium' ? 'text-orange-600' : 
                          'text-green-600'
                        }`}>
                          {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50/50 p-6 border-t md:border-t-0 md:border-l border-slate-100 flex flex-col justify-center gap-3 w-full md:w-48">
                    {assignment.status === 'pending' || assignment.status === 'overdue' ? (
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl">
                        <Upload size={16} className="mr-2" /> Submit
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full rounded-xl">
                        <Eye size={16} className="mr-2" /> View
                      </Button>
                    )}
                    <Button variant="ghost" className="w-full rounded-xl text-slate-500">
                      Details <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </div>
                {assignment.feedback && (
                  <div className="px-6 py-4 bg-blue-50/50 border-t border-blue-100 flex items-start gap-3">
                    <MessageSquare size={16} className="text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold text-blue-600 uppercase">Instructor Feedback</p>
                      <p className="text-sm text-slate-700 italic">"{assignment.feedback}"</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="block1" className="m-0">
          <div className="grid gap-6">
            {filteredAssignments.filter(a => a.block === 1).map(assignment => (
              <Card key={assignment.id} className="border-none shadow-sm rounded-3xl overflow-hidden hover:shadow-md transition-all group">
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-100 rounded-lg text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                          {getCourseIcon(assignment.course)}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg">{assignment.title}</h3>
                          <p className="text-sm text-slate-500">{assignment.courseName} • {assignment.instructor}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(assignment.status)}
                        {getTypeBadge(assignment.type)}
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-600 line-clamp-2 mb-6">
                      {assignment.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Week</p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                          <Calendar size={14} className="text-blue-500" />
                          Week {assignment.week}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Due Date</p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                          <Calendar size={14} className="text-blue-500" />
                          {assignment.dueDate}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Points</p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                          <Target size={14} className="text-purple-500" />
                          {assignment.points} pts
                        </div>
                      </div>
                      {assignment.grade && (
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Grade</p>
                          <div className="flex items-center gap-2 text-sm font-bold text-emerald-600">
                            <Star size={14} className="fill-emerald-600" />
                            {assignment.grade}
                          </div>
                        </div>
                      )}
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Priority</p>
                        <div className={`text-sm font-semibold ${
                          assignment.priority === 'high' ? 'text-red-600' : 
                          assignment.priority === 'medium' ? 'text-orange-600' : 
                          'text-green-600'
                        }`}>
                          {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50/50 p-6 border-t md:border-t-0 md:border-l border-slate-100 flex flex-col justify-center gap-3 w-full md:w-48">
                    {assignment.status === 'pending' || assignment.status === 'overdue' ? (
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl">
                        <Upload size={16} className="mr-2" /> Submit
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full rounded-xl">
                        <Eye size={16} className="mr-2" /> View
                      </Button>
                    )}
                    <Button variant="ghost" className="w-full rounded-xl text-slate-500">
                      Details <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </div>
                {assignment.feedback && (
                  <div className="px-6 py-4 bg-blue-50/50 border-t border-blue-100 flex items-start gap-3">
                    <MessageSquare size={16} className="text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold text-blue-600 uppercase">Instructor Feedback</p>
                      <p className="text-sm text-slate-700 italic">"{assignment.feedback}"</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="block2" className="m-0">
          <div className="grid gap-6">
            {filteredAssignments.filter(a => a.block === 2).map(assignment => (
              <Card key={assignment.id} className="border-none shadow-sm rounded-3xl overflow-hidden hover:shadow-md transition-all group">
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-100 rounded-lg text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                          {getCourseIcon(assignment.course)}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg">{assignment.title}</h3>
                          <p className="text-sm text-slate-500">{assignment.courseName} • {assignment.instructor}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(assignment.status)}
                        {getTypeBadge(assignment.type)}
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-600 line-clamp-2 mb-6">
                      {assignment.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Week</p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                          <Calendar size={14} className="text-blue-500" />
                          Week {assignment.week}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Due Date</p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                          <Calendar size={14} className="text-blue-500" />
                          {assignment.dueDate}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Points</p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                          <Target size={14} className="text-purple-500" />
                          {assignment.points} pts
                        </div>
                      </div>
                      {assignment.grade && (
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Grade</p>
                          <div className="flex items-center gap-2 text-sm font-bold text-emerald-600">
                            <Star size={14} className="fill-emerald-600" />
                            {assignment.grade}
                          </div>
                        </div>
                      )}
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Priority</p>
                        <div className={`text-sm font-semibold ${
                          assignment.priority === 'high' ? 'text-red-600' : 
                          assignment.priority === 'medium' ? 'text-orange-600' : 
                          'text-green-600'
                        }`}>
                          {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50/50 p-6 border-t md:border-t-0 md:border-l border-slate-100 flex flex-col justify-center gap-3 w-full md:w-48">
                    {assignment.status === 'pending' || assignment.status === 'overdue' ? (
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl">
                        <Upload size={16} className="mr-2" /> Submit
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full rounded-xl">
                        <Eye size={16} className="mr-2" /> View
                      </Button>
                    )}
                    <Button variant="ghost" className="w-full rounded-xl text-slate-500">
                      Details <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </div>
                {assignment.feedback && (
                  <div className="px-6 py-4 bg-blue-50/50 border-t border-blue-100 flex items-start gap-3">
                    <MessageSquare size={16} className="text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold text-blue-600 uppercase">Instructor Feedback</p>
                      <p className="text-sm text-slate-700 italic">"{assignment.feedback}"</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

    </div>
  );
};

export default Assignments;