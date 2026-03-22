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
  Star,
  Sparkles,
  Zap,
  Rocket,
  Trophy,
  Heart,
  Flame,
  Target,
  Timer,
  TrendingUp,
  Award,
  MessageSquare,
  Search
} from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

interface Assignment {
  id: number;
  title: string;
  description: string;
  course: string;
  courseName: string;
  instructor: string;
  dueDate: string;
  submittedDate: string;
  grade: string;
  status: 'pending' | 'in-progress' | 'submitted' | 'graded' | 'overdue';
  type: string;
  points: number;
  maxPoints: number;
  attempts: number;
  maxAttempts: number;
  hasTemplate: boolean;
  rubric: {
    criteria: string;
    points: number;
    description: string;
  }[];
  attachments: {
    name: string;
    url: string;
    size: string;
  }[];
  feedback?: string;
}

const IconicAssignments = () => {
  const navigate = useNavigate();
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const assignments: Assignment[] = [
    {
      id: 1,
      title: "Advanced Algorithm Analysis",
      description: "Implement and analyze Dijkstra's algorithm with real-world applications",
      course: "CS301",
      courseName: "Advanced Algorithms",
      instructor: "Dr. Sarah Johnson",
      dueDate: "2024-03-25",
      submittedDate: "2024-03-24",
      grade: "A-",
      status: "graded",
      type: "Programming",
      points: 92,
      maxPoints: 100,
      attempts: 2,
      maxAttempts: 3,
      hasTemplate: true,
      rubric: [
        { criteria: "Algorithm Implementation", points: 40, description: "Correct implementation of Dijkstra's algorithm" },
        { criteria: "Documentation", points: 20, description: "Clear code documentation" },
        { criteria: "Testing", points: 20, description: "Comprehensive test cases" },
        { criteria: "Analysis", points: 20, description: "Performance analysis and comparison" }
      ],
      attachments: [
        { name: "algorithm_template.pdf", url: "#", size: "2.3 MB" },
        { name: "test_cases.zip", url: "#", size: "1.1 MB" }
      ],
      feedback: "Excellent implementation! Your analysis of time complexity was particularly impressive."
    },
    {
      id: 2,
      title: "Database Design Project",
      description: "Design a comprehensive database system for a university management system",
      course: "CS302",
      courseName: "Database Systems",
      instructor: "Prof. Michael Chen",
      dueDate: "2024-03-28",
      submittedDate: "",
      grade: "",
      status: "in-progress",
      type: "Project",
      points: 0,
      maxPoints: 150,
      attempts: 1,
      maxAttempts: 2,
      hasTemplate: true,
      rubric: [
        { criteria: "Schema Design", points: 50, description: "Database schema and relationships" },
        { criteria: "Normalization", points: 30, description: "Proper normalization" },
        { criteria: "Queries", points: 40, description: "Complex SQL queries" },
        { criteria: "Documentation", points: 30, description: "Technical documentation" }
      ],
      attachments: [
        { name: "database_requirements.pdf", url: "#", size: "3.7 MB" }
      ]
    },
    {
      id: 3,
      title: "Web Development Portfolio",
      description: "Create a responsive portfolio website showcasing your projects",
      course: "CS303",
      courseName: "Web Development",
      instructor: "Dr. Emily Rodriguez",
      dueDate: "2024-03-30",
      submittedDate: "",
      grade: "",
      status: "pending",
      type: "Portfolio",
      points: 0,
      maxPoints: 200,
      attempts: 0,
      maxAttempts: 1,
      hasTemplate: false,
      rubric: [
        { criteria: "Design", points: 60, description: "Visual design and UX" },
        { criteria: "Responsiveness", points: 40, description: "Mobile and desktop compatibility" },
        { criteria: "Functionality", points: 60, description: "Interactive features" },
        { criteria: "Code Quality", points: 40, description: "Clean, maintainable code" }
      ],
      attachments: []
    }
  ];

  const filteredAssignments = assignments.filter(assignment => {
    const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assignment.courseName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = selectedCourse === 'all' || assignment.course === selectedCourse;
    const matchesStatus = selectedStatus === 'all' || assignment.status === selectedStatus;
    return matchesSearch && matchesCourse && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'graded': return 'from-green-400 to-emerald-500';
      case 'submitted': return 'from-blue-400 to-cyan-500';
      case 'in-progress': return 'from-yellow-400 to-orange-500';
      case 'pending': return 'from-gray-400 to-slate-500';
      case 'overdue': return 'from-red-400 to-pink-500';
      default: return 'from-gray-400 to-slate-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'graded': return <Trophy className="w-4 h-4" />;
      case 'submitted': return <CheckCircle className="w-4 h-4" />;
      case 'in-progress': return <Timer className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'overdue': return <AlertCircle className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleSubmitAssignment = () => {
    // Simulate assignment submission
    showSuccess('Assignment submitted successfully!');
    setSelectedAssignment(null);
    setUploadedFiles([]);
  };

  const showSuccess = (message: string) => {
    // Success notification logic
    console.log('Success:', message);
  };

  return (
    <AnimatedBackground variant="aurora">
      <div className="min-h-screen p-4 md:p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center animate-glow">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Iconic Assignments
                </h1>
                <p className="text-slate-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Complete assignments, submit work, track progress
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl">
                <span className="text-green-400 font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  92% Average
                </span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl">
                <span className="text-blue-400 font-semibold flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  3 Due Soon
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: <FileText className="w-5 h-5" />, label: "Total", value: "12", color: "from-blue-500 to-cyan-500" },
            { icon: <Clock className="w-5 h-5" />, label: "Pending", value: "3", color: "from-yellow-500 to-orange-500" },
            { icon: <CheckCircle className="w-5 h-5" />, label: "Submitted", value: "7", color: "from-green-500 to-emerald-500" },
            { icon: <Trophy className="w-5 h-5" />, label: "Graded", value: "5", color: "from-purple-500 to-pink-500" }
          ].map((stat, index) => (
            <GlassCard key={index} variant="glass" hover glow>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center animate-pulse`}>
                  {stat.icon}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Filters */}
        <GlassCard variant="glass" className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search assignments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>
            
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
            >
              <option value="all">All Courses</option>
              <option value="CS301">CS301 - Advanced Algorithms</option>
              <option value="CS302">CS302 - Database Systems</option>
              <option value="CS303">CS303 - Web Development</option>
            </select>
            
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="submitted">Submitted</option>
              <option value="graded">Graded</option>
            </select>
          </div>
        </GlassCard>

        {/* Assignment List */}
        <div className="space-y-4">
          {filteredAssignments.map((assignment) => (
            <GlassCard key={assignment.id} variant="glass" hover>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${getStatusColor(assignment.status)} rounded-lg flex items-center justify-center text-white`}>
                      {getStatusIcon(assignment.status)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{assignment.title}</h3>
                      <p className="text-slate-300 text-sm mb-2">{assignment.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-xs">
                          {assignment.courseName}
                        </span>
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-xs">
                          {assignment.type}
                        </span>
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-xs">
                          {assignment.points}/{assignment.maxPoints} pts
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Due: {assignment.dueDate}
                        </span>
                        {assignment.submittedDate && (
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" />
                            Submitted: {assignment.submittedDate}
                          </span>
                        )}
                        {assignment.grade && (
                          <span className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            Grade: {assignment.grade}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {assignment.hasTemplate && (
                    <NeonButton variant="secondary" size="sm" icon={<Download />}>
                      Template
                    </NeonButton>
                  )}
                  <NeonButton 
                    variant="gradient" 
                    size="sm" 
                    icon={<Upload />}
                    onClick={() => setSelectedAssignment(assignment)}
                  >
                    {assignment.status === 'graded' ? 'View' : assignment.status === 'submitted' ? 'View' : 'Submit'}
                  </NeonButton>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Assignment Modal */}
        {selectedAssignment && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <GlassCard variant="neon" className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{selectedAssignment.title}</h2>
                <NeonButton variant="secondary" size="sm" onClick={() => setSelectedAssignment(null)}>
                  Close
                </NeonButton>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                  <p className="text-slate-300">{selectedAssignment.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Grading Rubric</h3>
                  <div className="space-y-2">
                    {selectedAssignment.rubric.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <div>
                          <p className="text-white font-medium">{item.criteria}</p>
                          <p className="text-slate-400 text-sm">{item.description}</p>
                        </div>
                        <span className="text-purple-400 font-bold">{item.points} pts</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {selectedAssignment.attachments.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Attachments</h3>
                    <div className="space-y-2">
                      {selectedAssignment.attachments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-slate-400" />
                            <span className="text-white">{file.name}</span>
                            <span className="text-slate-400 text-sm">{file.size}</span>
                          </div>
                          <NeonButton variant="secondary" size="sm" icon={<Download />}>
                            Download
                          </NeonButton>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedAssignment.feedback && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Instructor Feedback</h3>
                    <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg">
                      <p className="text-green-400">{selectedAssignment.feedback}</p>
                    </div>
                  </div>
                )}
                
                {selectedAssignment.status !== 'graded' && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Submit Assignment</h3>
                    <div className="border-2 border-dashed border-slate-600 rounded-xl p-6 text-center">
                      <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-300 mb-4">Drag and drop files here or click to browse</p>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <NeonButton variant="gradient" onClick={() => document.getElementById('file-upload')?.click()}>
                        Choose Files
                      </NeonButton>
                    </div>
                    
                    {uploadedFiles.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-white font-medium mb-2">Selected Files:</h4>
                        <div className="space-y-2">
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-slate-800/50 rounded-lg">
                              <span className="text-slate-300">{file.name}</span>
                              <span className="text-slate-400 text-sm">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                            </div>
                          ))}
                        </div>
                        <NeonButton 
                          variant="gradient" 
                          className="w-full mt-4" 
                          onClick={handleSubmitAssignment}
                          icon={<Rocket />}
                        >
                          Submit Assignment
                        </NeonButton>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </AnimatedBackground>
  );
};

export default IconicAssignments;
