"use client";

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Calendar, 
  Clock, 
  Upload, 
  Download, 
  CheckCircle, 
  AlertCircle, 
  Edit, 
  Save, 
  Eye, 
  EyeOff,
  Plus,
  Search,
  Filter,
  Star,
  MessageSquare,
  Paperclip,
  Link,
  Users,
  Award,
  TrendingUp,
  BookOpen,
  Target,
  Play,
  Pause,
  RotateCcw,
  Trash2,
  Copy,
  Share,
  Printer,
  Send,
  Check,
  X,
  ChevronRight,
  ChevronDown,
  MoreVertical,
  AlertTriangle,
  FileCheck,
  Timer,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAuth } from '@/context/AuthContext';
import { showSuccess, showError } from '@/utils/toast';

const Assignments = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('dueDate');

  // Sample assignment data
  const assignments = [
    {
      id: 1,
      title: "Advanced Algorithms - Problem Set 5",
      description: "Complete problems 1-5 from Chapter 8: Dynamic Programming",
      course: "CS301",
      courseName: "Advanced Algorithms",
      instructor: "Dr. Sarah Johnson",
      dueDate: "2024-03-28",
      submittedDate: null,
      grade: null,
      status: "pending",
      type: "homework",
      points: 100,
      difficulty: "medium",
      estimatedTime: "3 hours",
      attachments: [
        { name: "Problem_Set_5.pdf", size: "2.4 MB", type: "pdf" },
        { name: "algorithm_examples.zip", size: "1.8 MB", type: "zip" }
      ],
      instructions: "1. Read Chapter 8 carefully\n2. Implement each algorithm step-by-step\n3. Include time complexity analysis\n4. Submit as a single PDF with all solutions",
      rubric: {
        criteria: ["Correctness (40%)", "Efficiency (30%)", "Documentation (20%)", "Code Quality (10%)"],
        totalPoints: 100
      },
      submissionType: "file",
      hasTemplate: true,
      allowsLateSubmission: true,
      maxAttempts: 3
    },
    {
      id: 2,
      title: "Database Systems - Final Project",
      description: "Design and implement a complete database system for a small business",
      course: "CS302",
      courseName: "Database Systems",
      instructor: "Prof. Michael Chen",
      dueDate: "2024-04-05",
      submittedDate: "2024-03-25",
      grade: "A-",
      status: "graded",
      type: "project",
      points: 150,
      difficulty: "hard",
      estimatedTime: "15 hours",
      attachments: [
        { name: "project_proposal.pdf", size: "1.2 MB", type: "pdf" },
        { name: "database_schema.sql", size: "45 KB", type: "sql" },
        { name: "final_submission.zip", size: "8.5 MB", type: "zip" }
      ],
      instructions: "Create a complete database system with:\n1. Entity-Relationship Diagram\n2. Normalized schema\n3. Sample data\n4. CRUD operations\n5. Security considerations",
      rubric: {
        criteria: ["Database Design (35%)", "Implementation (40%)", "Documentation (15%)", "Testing (10%)"],
        totalPoints: 150
      },
      submissionType: "file",
      hasTemplate: true,
      allowsLateSubmission: false,
      maxAttempts: 2
    },
    {
      id: 3,
      title: "Web Development - React Portfolio",
      description: "Build a personal portfolio website using React and modern web technologies",
      course: "CS303",
      courseName: "Web Development",
      instructor: "Dr. Reagan Otema",
      dueDate: "2024-04-10",
      submittedDate: null,
      grade: null,
      status: "in-progress",
      type: "project",
      points: 200,
      difficulty: "medium",
      estimatedTime: "20 hours",
      attachments: [
        { name: "portfolio_requirements.pdf", size: "856 KB", type: "pdf" },
        { name: "react_starter_template.zip", size: "3.2 MB", type: "zip" }
      ],
      instructions: "Create a responsive portfolio with:\n1. Personal introduction\n2. Projects showcase\n3. Skills section\n4. Contact form\n5. Modern design and animations",
      rubric: {
        criteria: ["Design (30%)", "Functionality (40%)", "Code Quality (20%)", "Responsiveness (10%)"],
        totalPoints: 200
      },
      submissionType: "file",
      hasTemplate: true,
      allowsLateSubmission: true,
      maxAttempts: 3
    },
    {
      id: 4,
      title: "Cybersecurity - Security Audit Report",
      description: "Conduct a comprehensive security audit of a provided network infrastructure",
      course: "CS304",
      courseName: "Cybersecurity Fundamentals",
      instructor: "Prof. Binsobedde Najiib",
      dueDate: "2024-04-15",
      submittedDate: "2024-03-20",
      grade: "B+",
      status: "graded",
      type: "report",
      points: 120,
      difficulty: "hard",
      estimatedTime: "10 hours",
      attachments: [
        { name: "audit_checklist.pdf", size: "1.5 MB", type: "pdf" },
        { name: "network_diagram.png", size: "2.8 MB", type: "image" },
        { name: "security_report.docx", size: "890 KB", type: "docx" }
      ],
      instructions: "Perform security audit covering:\n1. Network scanning\n2. Vulnerability assessment\n3. Policy review\n4. Risk analysis\n5. Recommendations",
      rubric: {
        criteria: ["Analysis (40%)", "Findings (30%)", "Recommendations (20%)", "Report Quality (10%)"],
        totalPoints: 120
      },
      submissionType: "file",
      hasTemplate: true,
      allowsLateSubmission: false,
      maxAttempts: 2
    }
  ];

  const submissionHistory = [
    {
      id: 1,
      assignmentId: 2,
      assignmentTitle: "Database Systems - Final Project",
      submittedDate: "2024-03-25",
      submittedTime: "14:30",
      status: "graded",
      grade: "A-",
      score: 135,
      feedback: "Excellent work! Your database design is well-structured and your implementation is solid. Consider adding more error handling in future projects.",
      instructor: "Prof. Michael Chen"
    },
    {
      id: 2,
      assignmentId: 4,
      assignmentTitle: "Cybersecurity - Security Audit Report",
      submittedDate: "2024-03-20",
      submittedTime: "16:45",
      status: "graded",
      grade: "B+",
      score: 102,
      feedback: "Good analysis of the network infrastructure. Your recommendations were practical and well-researched. Next time, include more quantitative risk assessment.",
      instructor: "Prof. Binsobedde Najiib"
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'submitted': return 'bg-purple-100 text-purple-800';
      case 'graded': return 'bg-green-100 text-green-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'easy': return 'bg-emerald-100 text-emerald-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'homework': return <FileText className="w-4 h-4" />;
      case 'project': return <Target className="w-4 h-4" />;
      case 'quiz': return <CheckCircle className="w-4 h-4" />;
      case 'exam': return <Award className="w-4 h-4" />;
      case 'report': return <BarChart3 className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const filteredAssignments = assignments.filter(assignment => {
    const matchesCourse = selectedCourse === 'all' || assignment.course === selectedCourse;
    const matchesStatus = selectedStatus === 'all' || assignment.status === selectedStatus;
    const matchesSearch = searchTerm === '' || 
      assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.course.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCourse && matchesStatus && matchesSearch;
  });

  const handleDownloadTemplate = (assignmentId: number) => {
    showSuccess('Assignment template downloaded successfully!');
  };

  const handleSubmitAssignment = (assignmentId: number) => {
    setSelectedAssignment(assignmentId);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      showSuccess(`File "${file.name}" uploaded successfully!`);
    }
  };

  const handleSubmission = () => {
    if (!selectedAssignment) {
      showError('Please select an assignment to submit');
      return;
    }
    
    showSuccess('Assignment submitted successfully for grading!');
    setSelectedAssignment(null);
  };

  const handleViewGrades = () => {
    navigate('/school/grades');
  };

  const handleViewFeedback = (assignmentId: number) => {
    const assignment = assignments.find(a => a.id === assignmentId);
    if (assignment && assignment.status === 'graded') {
      setSelectedAssignment(assignmentId);
    }
  };

  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Overdue';
    if (diffDays === 0) return 'Due Today';
    if (diffDays === 1) return 'Due Tomorrow';
    return `${diffDays} Days`;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Assignments</h1>
          <p className="text-slate-500">Complete assignments, submit for grading, and track your progress</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            <Download className="mr-2" size={18} />
            Download All
          </Button>
          <Button onClick={handleViewGrades} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            <TrendingUp className="mr-2" size={18} />
            View Grades
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
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
          <div className="flex gap-2">
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger className="w-48 rounded-xl">
                <SelectValue placeholder="All Courses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                <SelectItem value="CS301">CS301 - Advanced Algorithms</SelectItem>
                <SelectItem value="CS302">CS302 - Database Systems</SelectItem>
                <SelectItem value="CS303">CS303 - Web Development</SelectItem>
                <SelectItem value="CS304">CS304 - Cybersecurity</SelectItem>
              </SelectContent>
            </Select>
          </Select>
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-40 rounded-xl">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="submitted">Submitted</SelectItem>
              <SelectItem value="graded">Graded</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40 rounded-xl">
              <SelectValue placeholder="Sort by Due Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dueDate">Due Date</SelectItem>
              <SelectItem value="title">Title</SelectItem>
              <SelectItem value="course">Course</SelectItem>
              <SelectItem value="points">Points</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="rounded-xl">
            <Filter size={18} />
          </Button>
        </div>
      </div>

      {/* Assignment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              {assignments.filter(a => a.status === 'pending').length}
            </h3>
            <p className="text-sm text-slate-600">Pending</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Edit className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              {assignments.filter(a => a.status === 'in-progress').length}
            </h3>
            <p className="text-sm text-slate-600">In Progress</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              {assignments.filter(a => a.status === 'submitted').length}
            </h3>
            <p className="text-sm text-slate-600">Submitted</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              {assignments.filter(a => a.status === 'graded').length}
            </h3>
            <p className="text-sm text-slate-600">Graded</p>
          </CardContent>
        </Card>
      </div>

      {/* Assignment List */}
      <div className="space-y-6">
        {filteredAssignments.map((assignment) => (
          <Card key={assignment.id} className="border-none shadow-sm rounded-2xl hover:shadow-md transition-all">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${getDifficultyColor(assignment.difficulty)}`}>
                      {getTypeIcon(assignment.type)}
                    </div>
                    <div>
                      <Badge className={`${getStatusColor(assignment.status)} border-none`}>
                        {assignment.status}
                      </Badge>
                      <Badge variant="outline" className="ml-2 text-xs">
                        {assignment.points} pts
                      </Badge>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 hover:text-blue-600 cursor-pointer">
                    {assignment.title}
                  </h3>
                  <p className="text-sm text-slate-600">{assignment.courseName}</p>
                  <p className="text-sm text-slate-500 line-clamp-2">{assignment.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {assignment.dueDate}
                    </div>
                    <div className={`font-medium ${getDaysUntilDue(assignment.dueDate) === 'Overdue' ? 'text-red-600' : 'text-slate-700'}`}>
                      {getDaysUntilDue(assignment.dueDate)}
                    </div>
                  </div>
                  <div className="text-sm text-slate-500">
                    ~{assignment.estimatedTime}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Instructions */}
              <div className="bg-slate-50 p-4 rounded-xl">
                <h4 className="font-semibold text-slate-900 mb-2">Instructions</h4>
                <p className="text-sm text-slate-700 whitespace-pre-line">{assignment.instructions}</p>
                {assignment.hasTemplate && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDownloadTemplate(assignment.id)}
                    className="mt-3"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download Template
                  </Button>
                )}
              </div>

              {/* Attachments */}
              {assignment.attachments && assignment.attachments.length > 0 && (
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Attachments</h4>
                  <div className="space-y-2">
                    {assignment.attachments.map((attachment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl">
                        <div className="flex items-center gap-3">
                          <Paperclip className="w-4 h-4 text-slate-400" />
                          <div>
                            <p className="font-medium text-sm text-slate-900">{attachment.name}</p>
                            <p className="text-xs text-slate-500">{attachment.size} • {attachment.type}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(`/assignments/${assignment.id}/${attachment.name}`, '_blank')}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              const link = document.createElement('a');
                              link.href = `/assignments/${assignment.id}/${attachment.name}`;
                              link.download = attachment.name;
                              link.click();
                            }}
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Rubric */}
              {assignment.rubric && (
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-slate-900 mb-2">Grading Rubric</h4>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="font-medium text-slate-700">Total Points:</div>
                      <div className="font-bold text-slate-900">{assignment.rubric.totalPoints}</div>
                    </div>
                    <div className="space-y-1">
                      {assignment.rubric.criteria.map((criterion, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-slate-700">{criterion}</span>
                          <span className="text-slate-900">{assignment.rubric.totalPoints * (parseFloat(criterion.match(/\d+/)?.[0]) / 100)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Submission Area */}
              <div className="border-t border-slate-200 pt-4">
                <h4 className="font-semibold text-slate-900 mb-4">Submission</h4>
                {assignment.status === 'graded' ? (
                  <div className="bg-emerald-50 p-4 rounded-xl text-center">
                    <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                    <p className="text-lg font-semibold text-emerald-800">Already Submitted</p>
                    <p className="text-sm text-emerald-700">Grade: {assignment.grade}</p>
                    {assignment.feedback && (
                      <div className="mt-3 p-3 bg-white rounded-xl">
                        <p className="text-sm text-slate-600"><strong>Instructor Feedback:</strong></p>
                        <p className="text-sm text-slate-700 mt-2">{assignment.feedback}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Upload Your Work</Label>
                        <p className="text-xs text-slate-500">Accepted formats: PDF, DOC, ZIP (Max: 50MB)</p>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-blue-100 text-blue-800 text-xs">
                          {assignment.maxAttempts - (submissionHistory.filter(s => s.assignmentId === assignment.id).length + 1)} attempts left
                        </Badge>
                      </div>
                    </div>
                    <div className="relative">
                      <Input 
                        type="file"
                        onChange={handleFileUpload}
                        className="w-full p-3 border-2 border-dashed border-slate-300 rounded-xl"
                        accept=".pdf,.doc,.doc,.zip"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Upload className="w-8 h-8 text-slate-400" />
                        <p className="text-sm text-slate-500 mt-2">Click to upload or drag and drop</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button 
                      variant="outline" 
                      className="rounded-xl"
                      onClick={() => setSelectedAssignment(null)}
                    >
                      <X className="w-4 h-4 mr-1" />
                      Clear
                    </Button>
                    <Button 
                      onClick={handleSubmission}
                      disabled={!selectedAssignment}
                      className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-xl"
                    >
                      <Send className="w-4 h-4 mr-1" />
                      Submit Assignment
                    </Button>
                  </div>
                </div>
              </div>
            )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Submission Modal */}
      {selectedAssignment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-900">Submit Assignment</h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setSelectedAssignment(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <FileCheck className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <p className="text-lg font-semibold text-emerald-800">Assignment Ready!</p>
                <p className="text-sm text-slate-600">Your assignment has been prepared and is ready to submit</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="rounded-xl"
                  onClick={() => setSelectedAssignment(null)}
                >
                  Review Again
                </Button>
                <Button 
                  onClick={handleSubmission}
                  className="bg-emerald-600 hover:bg-emerald-700 rounded-xl"
                >
                  <Check className="w-4 h-4 mr-1" />
                  Confirm Submission
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

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
              onClick={() => navigate('/school/class-schedule')}
            >
              <Calendar className="w-6 h-6" />
              <span className="text-sm">Class Schedule</span>
            </Button>
            <Button 
              variant="outline" 
              className="rounded-xl h-20 flex-col gap-2"
              onClick={() => navigate('/school/go-to-class')}
            >
              <Play className="w-6 h-6" />
              <span className="text-sm">Go to Class</span>
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

export default Assignments;
