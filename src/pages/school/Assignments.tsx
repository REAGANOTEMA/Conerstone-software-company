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
  Eye
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

  const assignments = [
    {
      id: 1,
      title: "Advanced Algorithms - Problem Set 5",
      course: "CS301",
      courseName: "Advanced Algorithms",
      dueDate: "2024-03-28",
      status: "pending",
      priority: "high",
      points: 100,
      description: "Implement and analyze the complexity of various graph traversal algorithms including BFS and DFS.",
      instructor: "Dr. Sarah Johnson"
    },
    {
      id: 2,
      title: "Database Normalization Project",
      course: "CS302",
      courseName: "Database Systems",
      dueDate: "2024-03-25",
      status: "submitted",
      priority: "medium",
      points: 150,
      description: "Normalize a given unnormalized dataset to 3NF and provide the ER diagram.",
      instructor: "Prof. Michael Chen"
    },
    {
      id: 3,
      title: "React Component Architecture",
      course: "CS303",
      courseName: "Web Development",
      dueDate: "2024-03-20",
      status: "graded",
      priority: "high",
      points: 200,
      grade: "A",
      feedback: "Excellent use of custom hooks and performance optimization techniques.",
      instructor: "Dr. Reagan Otema"
    },
    {
      id: 4,
      title: "Network Security Audit",
      course: "CS304",
      courseName: "Cybersecurity Fundamentals",
      dueDate: "2024-03-15",
      status: "overdue",
      priority: "urgent",
      points: 100,
      description: "Perform a basic security audit on the provided virtual network environment.",
      instructor: "Prof. Binsobedde Najiib"
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

  const filteredAssignments = assignments.filter(a => 
    (selectedCourse === 'all' || a.course === selectedCourse) &&
    (a.title.toLowerCase().includes(searchTerm.toLowerCase()) || a.courseName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
            <SelectTrigger className="w-48 rounded-xl">
              <SelectValue placeholder="Filter by Course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              <SelectItem value="CS301">CS301 - Algorithms</SelectItem>
              <SelectItem value="CS302">CS302 - Databases</SelectItem>
              <SelectItem value="CS303">CS303 - Web Dev</SelectItem>
              <SelectItem value="CS304">CS304 - Security</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredAssignments.map(assignment => (
          <Card key={assignment.id} className="border-none shadow-sm rounded-3xl overflow-hidden hover:shadow-md transition-all group">
            <div className="flex flex-col md:flex-row">
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 rounded-lg text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{assignment.title}</h3>
                      <p className="text-sm text-slate-500">{assignment.courseName} • {assignment.instructor}</p>
                    </div>
                  </div>
                  {getStatusBadge(assignment.status)}
                </div>
                
                <p className="text-sm text-slate-600 line-clamp-2 mb-6">
                  {assignment.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
    </div>
  );
};

export default Assignments;