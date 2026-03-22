"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  Award, 
  Calendar, 
  BarChart3, 
  Target,
  Download,
  Filter,
  Search,
  Eye,
  MessageSquare,
  Bell,
  AlertCircle,
  CheckCircle,
  Info,
  BookOpen,
  Users,
  Star,
  FileText,
  ChevronDown,
  ChevronRight,
  Printer,
  Share,
  Mail,
  Grid,
  List
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAuth } from '@/context/AuthContext';
import { showSuccess } from '@/utils/toast';

const Grades = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSemester, setSelectedSemester] = useState('current');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  // Sample grade data
  const gradesData = {
    overview: {
      currentGPA: 3.8,
      cumulativeGPA: 3.75,
      totalCredits: 144,
      earnedCredits: 72,
      currentSemesterCredits: 18,
      academicStanding: 'Excellent',
      classRank: 15,
      totalStudents: 156,
      honorRoll: true
    },
    semesters: [
      {
        id: 1,
        name: 'Fall 2024',
        status: 'current',
        courses: [
          {
            id: 1,
            code: 'CS301',
            name: 'Advanced Algorithms',
            credits: 4,
            grade: 'A-',
            gradePoints: 3.7,
            letterGrade: 'A-',
            percentage: 92,
            status: 'graded',
            instructor: 'Dr. Sarah Johnson',
            assignments: [
              { title: 'Problem Set 1', grade: 'A', points: 20, earned: 20 },
              { title: 'Problem Set 2', grade: 'A-', points: 20, earned: 18 },
              { title: 'Midterm Exam', grade: 'B+', points: 30, earned: 25 },
              { title: 'Final Project', grade: 'A', points: 30, earned: 30 }
            ],
            attendance: 95,
            lastUpdated: '2024-03-20'
          },
          {
            id: 2,
            code: 'CS302',
            name: 'Database Systems',
            credits: 3,
            grade: 'B+',
            gradePoints: 3.3,
            letterGrade: 'B+',
            percentage: 87,
            status: 'graded',
            instructor: 'Prof. Michael Chen',
            assignments: [
              { title: 'Lab 1', grade: 'A', points: 15, earned: 15 },
              { title: 'Lab 2', grade: 'B+', points: 15, earned: 13 },
              { title: 'Midterm', grade: 'B', points: 35, earned: 28 },
              { title: 'Final Exam', grade: 'A-', points: 35, earned: 31 }
            ],
            attendance: 92,
            lastUpdated: '2024-03-22'
          },
          {
            id: 3,
            code: 'CS303',
            name: 'Web Development',
            credits: 4,
            grade: 'A',
            gradePoints: 4.0,
            letterGrade: 'A',
            percentage: 95,
            status: 'graded',
            instructor: 'Dr. Reagan Otema',
            assignments: [
              { title: 'Project 1', grade: 'A', points: 25, earned: 25 },
              { title: 'Project 2', grade: 'A', points: 25, earned: 25 },
              { title: 'Project 3', grade: 'A-', points: 25, earned: 22 },
              { title: 'Final Exam', grade: 'A', points: 25, earned: 25 }
            ],
            attendance: 96,
            lastUpdated: '2024-03-21'
          },
          {
            id: 4,
            code: 'CS304',
            name: 'Cybersecurity Fundamentals',
            credits: 3,
            grade: 'B',
            gradePoints: 3.0,
            letterGrade: 'B',
            percentage: 83,
            status: 'in-progress',
            instructor: 'Prof. Binsobedde Najiib',
            assignments: [
              { title: 'Assignment 1', grade: 'B+', points: 20, earned: 17 },
              { title: 'Assignment 2', grade: 'A-', points: 20, earned: 18 },
              { title: 'Midterm', grade: 'B', points: 30, earned: 24 }
            ],
            attendance: 88,
            lastUpdated: '2024-03-19'
          }
        ],
        semesterGPA: 3.5,
        totalCredits: 14,
        earnedCredits: 11,
        enrollmentStatus: 'current'
      },
      {
        id: 2,
        name: 'Spring 2024',
        status: 'upcoming',
        courses: [],
        semesterGPA: 0,
        totalCredits: 15,
        earnedCredits: 0,
        enrollmentStatus: 'upcoming'
      },
      {
        id: 3,
        name: 'Fall 2023',
        status: 'completed',
        courses: [
          {
            id: 5,
            code: 'CS201',
            name: 'Data Structures',
            credits: 4,
            grade: 'A',
            gradePoints: 4.0,
            letterGrade: 'A',
            percentage: 96,
            status: 'graded',
            instructor: 'Dr. Sarah Johnson',
            assignments: [
              { title: 'Lab 1', grade: 'A', points: 20, earned: 20 },
              { title: 'Lab 2', grade: 'A', points: 20, earned: 20 },
              { title: 'Midterm', grade: 'A-', points: 30, earned: 27 },
              { title: 'Final Exam', grade: 'A', points: 30, earned: 30 }
            ],
            attendance: 98,
            lastUpdated: '2023-12-15'
          },
          {
            id: 6,
            code: 'CS202',
            name: 'Computer Architecture',
            credits: 3,
            grade: 'B+',
            gradePoints: 3.3,
            letterGrade: 'B+',
            percentage: 88,
            status: 'graded',
            instructor: 'Prof. Michael Chen',
            assignments: [
              { title: 'Assignment 1', grade: 'B+', points: 25, earned: 22 },
              { title: 'Assignment 2', grade: 'A-', points: 25, earned: 21 },
              { title: 'Final Exam', grade: 'A', points: 50, earned: 50 }
            ],
            attendance: 94,
            lastUpdated: '2023-12-18'
          }
        ],
        semesterGPA: 3.65,
        totalCredits: 7,
        earnedCredits: 7,
        enrollmentStatus: 'completed'
      }
    ]
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-emerald-600 bg-emerald-50';
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-50';
    if (grade.startsWith('C')) return 'text-yellow-600 bg-yellow-50';
    if (grade.startsWith('D')) return 'text-orange-600 bg-orange-50';
    if (grade === 'F') return 'text-red-600 bg-red-50';
    return 'text-slate-600 bg-slate-50';
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'graded': return 'bg-emerald-100 text-emerald-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-gray-100 text-gray-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStandingColor = (standing: string) => {
    switch(standing) {
      case 'Excellent': return 'bg-emerald-100 text-emerald-800';
      case 'Good': return 'bg-blue-100 text-blue-800';
      case 'Satisfactory': return 'bg-yellow-100 text-yellow-800';
      case 'Needs Improvement': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDownloadTranscript = () => {
    showSuccess('Transcript downloaded successfully!');
  };

  const handleEmailGrades = () => {
    showSuccess('Grades emailed successfully!');
  };

  const handleViewAssignment = (assignmentId: number) => {
    navigate(`/school/assignments?assignment=${assignmentId}`);
  };

  const filteredSemesters = gradesData.semesters.filter(semester => {
    const matchesCourse = selectedCourse === 'all' || semester.courses.some(course => course.code === selectedCourse);
    const matchesSearch = searchTerm === '' || 
      semester.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      semester.courses.some(course => 
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.code.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCourse && matchesSearch;
  });

  const currentSemester = gradesData.semesters.find(s => s.status === 'current');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Grades</h1>
          <p className="text-slate-500">View your academic performance and track your progress</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            <Download className="mr-2" size={18} />
            Download Transcript
          </Button>
          <Button onClick={handleEmailGrades} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            <Mail className="mr-2" size={18} />
            Email Grades
          </Button>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="courses" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Course Grades
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Analytics
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Academic Performance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-none shadow-sm rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{gradesData.overview.currentGPA}</h3>
                <p className="text-sm text-slate-600">Current GPA</p>
                <p className="text-xs text-emerald-600">+0.05 from last semester</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{gradesData.overview.cumulativeGPA}</h3>
                <p className="text-sm text-slate-600">Cumulative GPA</p>
                <p className="text-xs text-slate-500">All semesters</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{gradesData.overview.earnedCredits}/{gradesData.overview.totalCredits}</h3>
                <p className="text-sm text-slate-600">Credits Earned</p>
                <p className="text-xs text-slate-500">{gradesData.overview.totalCredits - gradesData.overview.earnedCredits} remaining</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">#{gradesData.overview.classRank}</h3>
                <p className="text-sm text-slate-600">Class Rank</p>
                <p className="text-xs text-slate-500">of {gradesData.overview.totalStudents} students</p>
              </CardContent>
            </Card>
          </div>

          {/* Academic Standing */}
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-600" />
                Academic Standing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className={`${getStandingColor(gradesData.overview.academicStanding)} border-none text-sm`}>
                      {gradesData.overview.academicStanding}
                    </Badge>
                    {gradesData.overview.honorRoll && (
                      <Badge className="bg-yellow-100 text-yellow-800 border-none text-xs">
                        Honor Roll
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600">Current Semester Credits:</span>
                      <span className="font-semibold">{gradesData.overview.currentSemesterCredits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600">Overall Progress:</span>
                      <span className="font-semibold">{Math.round((gradesData.overview.earnedCredits / gradesData.overview.totalCredits) * 100)}%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">GPA Trend</h4>
                  <div className="space-y-2">
                    {gradesData.semesters.slice(0, 4).map((semester) => (
                      <div key={semester.id} className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">{semester.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{semester.semesterGPA}</span>
                          {semester.status === 'current' && (
                            <Badge className="bg-blue-100 text-blue-800 border-none text-xs">Current</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Course Grades Tab */}
        <TabsContent value="courses" className="space-y-6">
          {/* Filters */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <Input 
                  placeholder="Search courses or grades..." 
                  className="pl-10 rounded-xl" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                  <SelectTrigger className="w-48 rounded-xl">
                    <SelectValue placeholder="Select Semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current">Current Semester</SelectItem>
                    <SelectItem value="all">All Semesters</SelectItem>
                    {gradesData.semesters.map((semester) => (
                      <SelectItem key={semester.id} value={semester.name}>{semester.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                  <SelectTrigger className="w-40 rounded-xl">
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
                <div className="flex gap-2">
                  <Button 
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    onClick={() => setViewMode('grid')}
                    className="rounded-xl"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    onClick={() => setViewMode('list')}
                    className="rounded-xl"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Course Grid/List */}
          <div className="space-y-6">
            {filteredSemesters.map((semester) => (
              <div key={semester.id}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{semester.name}</h3>
                  <div className="flex items-center gap-2">
                    <Badge className={`${getStatusColor(semester.status)} border-none text-sm`}>
                      {semester.status}
                    </Badge>
                    <div className="text-sm text-slate-600">
                      GPA: <span className="font-semibold">{semester.semesterGPA}</span>
                    </div>
                  </div>
                </div>
                
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {semester.courses.map((course) => (
                      <Card key={course.id} className="border-none shadow-sm rounded-2xl hover:shadow-md transition-all cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="font-semibold text-slate-900">{course.code}</h4>
                              <p className="text-sm text-slate-600">{course.name}</p>
                              <p className="text-xs text-slate-500">Prof. {course.instructor}</p>
                            </div>
                            <div className="text-right">
                              <div className={`text-2xl font-bold ${getGradeColor(course.grade)}`}>
                                {course.grade || 'In Progress'}
                              </div>
                              <p className="text-sm text-slate-500">{course.credits} credits</p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-sm text-slate-600">Grade Points:</span>
                              <span className="font-semibold">{course.gradePoints || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-slate-600">Percentage:</span>
                              <span className="font-semibold">{course.percentage || 'N/A'}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-slate-600">Attendance:</span>
                              <span className="font-semibold">{course.attendance}%</span>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleViewAssignment(course.id)}
                              className="flex-1"
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              View Details
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => navigate(`/school/assignments?course=${course.code}`)}
                              className="flex-1"
                            >
                              <FileText className="w-4 h-4 mr-1" />
                              Assignments
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {semester.courses.map((course) => (
                      <Card key={course.id} className="border-none shadow-sm rounded-2xl">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div>
                                <h4 className="font-semibold text-slate-900">{course.code}</h4>
                                <p className="text-sm text-slate-600">{course.name}</p>
                                <p className="text-xs text-slate-500">Prof. {course.instructor}</p>
                              </div>
                              <div className="text-right">
                                <div className={`text-xl font-bold ${getGradeColor(course.grade)}`}>
                                  {course.grade || 'In Progress'}
                                </div>
                                <p className="text-sm text-slate-500">{course.credits} credits</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleViewAssignment(course.id)}
                              >
                                <Eye className="w-4 h-4 mr-1" />
                                Details
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => navigate(`/school/assignments?course=${course.code}`)}
                              >
                                <FileText className="w-4 h-4 mr-1" />
                                Assignments
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle>Grade Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { grade: 'A', count: 12, percentage: 35 },
                    { grade: 'B', count: 15, percentage: 44 },
                    { grade: 'C', count: 5, percentage: 15 },
                    { grade: 'D', count: 2, percentage: 6 }
                  ].map((item) => (
                    <div key={item.grade} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded ${getGradeColor(item.grade)}`}>
                          <span className="text-xs font-bold">{item.grade}</span>
                        </div>
                        <span className="text-sm text-slate-600">{item.count} courses</span>
                      </div>
                      <span className="text-sm text-slate-500">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600">Best Semester:</span>
                      <span className="font-semibold text-emerald-600">Fall 2023 (3.65 GPA)</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600">Most Improved:</span>
                      <span className="font-semibold text-blue-600">Data Structures (+0.65)</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600">Consistent Performance:</span>
                      <span className="font-semibold text-purple-600">Web Development (A average)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600">Areas for Improvement:</span>
                      <span className="font-semibold text-orange-600">Database Systems</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              onClick={() => navigate('/school/assignments')}
            >
              <FileText className="w-6 h-6" />
              <span className="text-sm">Assignments</span>
            </Button>
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

export default Grades;
