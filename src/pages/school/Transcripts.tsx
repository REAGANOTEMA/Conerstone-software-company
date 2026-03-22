"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Download, 
  FileText, 
  Calendar, 
  Award, 
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Search,
  Filter,
  Eye,
  Share,
  Mail,
  Printer,
  Globe,
  BarChart3,
  Target,
  BookOpen,
  Clock,
  User,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAuth } from '@/context/AuthContext';
import { showSuccess } from '@/utils/toast';

const Transcripts = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('official');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedType, setSelectedType] = useState('all');

  // Sample transcript data
  const transcriptData = {
    official: [
      {
        id: 1,
        year: '2024',
        semester: 'Fall',
        courses: [
          {
            code: 'CS301',
            name: 'Advanced Algorithms',
            credits: 4,
            grade: 'A-',
            gradePoints: 3.7,
            status: 'completed',
            instructor: 'Dr. Sarah Johnson'
          },
          {
            code: 'CS302',
            name: 'Database Systems',
            credits: 3,
            grade: 'B+',
            gradePoints: 3.3,
            status: 'completed',
            instructor: 'Prof. Michael Chen'
          },
          {
            code: 'CS303',
            name: 'Web Development',
            credits: 4,
            grade: 'A',
            gradePoints: 4.0,
            status: 'completed',
            instructor: 'Dr. Reagan Otema'
          },
          {
            code: 'CS304',
            name: 'Cybersecurity Fundamentals',
            credits: 3,
            grade: 'B',
            gradePoints: 3.0,
            status: 'in-progress',
            instructor: 'Prof. Binsobedde Najiib'
          }
        ],
        semesterGPA: 3.5,
        cumulativeGPA: 3.8,
        totalCredits: 14,
        earnedCredits: 11,
        academicStanding: 'Excellent',
        status: 'official'
      },
      {
        id: 2,
        year: '2024',
        semester: 'Spring',
        courses: [],
        semesterGPA: 0,
        cumulativeGPA: 3.8,
        totalCredits: 15,
        earnedCredits: 0,
        academicStanding: 'Excellent',
        status: 'upcoming'
      }
    ],
    unofficial: [
      {
        id: 3,
        year: '2023',
        semester: 'Fall',
        courses: [
          {
            code: 'CS201',
            name: 'Data Structures',
            credits: 4,
            grade: 'A',
            gradePoints: 4.0,
            status: 'completed',
            instructor: 'Dr. Sarah Johnson'
          },
          {
            code: 'CS202',
            name: 'Computer Architecture',
            credits: 3,
            grade: 'B+',
            gradePoints: 3.3,
            status: 'completed',
            instructor: 'Prof. Michael Chen'
          }
        ],
        semesterGPA: 3.65,
        cumulativeGPA: 3.75,
        totalCredits: 7,
        earnedCredits: 7,
        academicStanding: 'Excellent',
        status: 'unofficial'
      }
    ]
  };

  const gradeScale = [
    { grade: 'A', points: 4.0, range: '93-100' },
    { grade: 'A-', points: 3.7, range: '90-92' },
    { grade: 'B+', points: 3.3, range: '87-89' },
    { grade: 'B', points: 3.0, range: '83-86' },
    { grade: 'B-', points: 2.7, range: '80-82' },
    { grade: 'C+', points: 2.3, range: '77-79' },
    { grade: 'C', points: 2.0, range: '73-76' },
    { grade: 'C-', points: 1.7, range: '70-72' },
    { grade: 'D', points: 1.0, range: '60-69' },
    { grade: 'F', points: 0.0, range: '0-59' }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-emerald-600 bg-emerald-50';
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-50';
    if (grade.startsWith('C')) return 'text-yellow-600 bg-yellow-50';
    if (grade === 'D') return 'text-orange-600 bg-orange-50';
    if (grade === 'F') return 'text-red-600 bg-red-50';
    return 'text-slate-600 bg-slate-50';
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed': return 'bg-emerald-100 text-emerald-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDownloadTranscript = (type: string) => {
    showSuccess(`${type} transcript downloaded successfully!`);
  };

  const handleRequestOfficial = () => {
    showSuccess('Official transcript request submitted! You will receive it within 5 business days.');
  };

  const handleEmailTranscript = () => {
    showSuccess('Transcript emailed successfully!');
  };

  const filteredTranscripts = transcriptData.official.filter(transcript => {
    const matchesYear = selectedYear === 'all' || transcript.year === selectedYear;
    const matchesType = selectedType === 'all' || transcript.status === selectedType;
    const matchesSearch = searchTerm === '' || 
      transcript.courses.some(course => 
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesYear && matchesType && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Academic Transcripts</h1>
          <p className="text-slate-500">View and download your official and unofficial transcripts</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            <Globe className="mr-2" size={18} />
            Request Official
          </Button>
          <Button onClick={handleEmailTranscript} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            <Mail className="mr-2" size={18} />
            Email Transcript
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input 
              placeholder="Search transcripts..." 
              className="pl-10 rounded-xl" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-40 rounded-xl">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-40 rounded-xl">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="official">Official</SelectItem>
              <SelectItem value="unofficial">Unofficial</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="rounded-xl">
            <Filter size={18} />
          </Button>
        </div>
      </div>

      {/* Academic Summary */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">3.8</h3>
            <p className="text-sm text-slate-600">Cumulative GPA</p>
            <p className="text-xs text-emerald-600">Excellent Standing</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">72</h3>
            <p className="text-sm text-slate-600">Credits Earned</p>
            <p className="text-xs text-slate-500">of 144 total</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">4</h3>
            <p className="text-sm text-slate-600">Semesters</p>
            <p className="text-xs text-slate-500">Completed</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">2027</h3>
            <p className="text-sm text-slate-600">Expected</p>
            <p className="text-xs text-slate-500">Graduation</p>
          </CardContent>
        </Card>
      </div>

      {/* Grade Scale */}
      <Card className="border-none shadow-sm rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            Grade Scale
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Grade</TableHead>
                  <TableHead>Grade Points</TableHead>
                  <TableHead>Percentage Range</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gradeScale.map((grade) => (
                  <TableRow key={grade.grade}>
                    <TableCell className={`font-semibold ${getGradeColor(grade.grade)}`}>
                      {grade.grade}
                    </TableCell>
                    <TableCell>{grade.points}</TableCell>
                    <TableCell>{grade.range}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Transcript Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="official" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Official Transcripts
          </TabsTrigger>
          <TabsTrigger value="unofficial" className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Unofficial Transcripts
          </TabsTrigger>
        </TabsList>

        {/* Official Transcripts */}
        <TabsContent value="official" className="space-y-6">
          {filteredTranscripts.map((transcript) => (
            <Card key={transcript.id} className="border-none shadow-sm rounded-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      {transcript.year} - {transcript.semester} Semester
                    </CardTitle>
                    <CardDescription>
                      {transcript.totalCredits} credits • GPA: {transcript.semesterGPA}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={`${getStatusColor(transcript.status)} border-none`}>
                      {transcript.status}
                    </Badge>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDownloadTranscript('official')}
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-600">Semester GPA</p>
                      <p className="text-2xl font-bold text-slate-900">{transcript.semesterGPA}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Cumulative GPA</p>
                      <p className="text-2xl font-bold text-slate-900">{transcript.cumulativeGPA}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-600">Credits Earned</p>
                      <p className="text-2xl font-bold text-emerald-600">{transcript.earnedCredits}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Total Credits</p>
                      <p className="text-2xl font-bold text-slate-900">{transcript.totalCredits}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-2">Academic Standing</p>
                    <Badge className="bg-emerald-100 text-emerald-800 border-none">
                      {transcript.academicStanding}
                    </Badge>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-4">Course Details</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Course Code</TableHead>
                          <TableHead>Course Name</TableHead>
                          <TableHead>Credits</TableHead>
                          <TableHead>Grade</TableHead>
                          <TableHead>Grade Points</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Instructor</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {transcript.courses.map((course) => (
                          <TableRow key={course.code}>
                            <TableCell className="font-medium">{course.code}</TableCell>
                            <TableCell>{course.name}</TableCell>
                            <TableCell>{course.credits}</TableCell>
                            <TableCell>
                              <Badge className={`${getGradeColor(course.grade)} border-none`}>
                                {course.grade}
                              </Badge>
                            </TableCell>
                            <TableCell>{course.gradePoints}</TableCell>
                            <TableCell>
                              <Badge className={`${getStatusColor(course.status)} border-none text-xs`}>
                                {course.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{course.instructor}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Unofficial Transcripts */}
        <TabsContent value="unofficial" className="space-y-6">
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle>Unofficial Transcript Request</CardTitle>
              <CardDescription>
                Get an unofficial copy of your transcript for immediate use
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600 mb-2">Available Formats</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start rounded-xl">
                      <FileText className="w-4 h-4 mr-2" />
                      PDF Document
                    </Button>
                    <Button variant="outline" className="w-full justify-start rounded-xl">
                      <Share className="w-4 h-4 mr-2" />
                      Excel Spreadsheet
                    </Button>
                    <Button variant="outline" className="w-full justify-start rounded-xl">
                      <Printer className="w-4 h-4 mr-2" />
                      Print Version
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-2">Delivery Options</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start rounded-xl">
                      <Mail className="w-4 h-4 mr-2" />
                      Email to Student
                    </Button>
                    <Button variant="outline" className="w-full justify-start rounded-xl">
                      <User className="w-4 h-4 mr-2" />
                      Email to Institution
                    </Button>
                    <Button variant="outline" className="w-full justify-start rounded-xl">
                      <Download className="w-4 h-4 mr-2" />
                      Download Now
                    </Button>
                  </div>
                </div>
              </div>
              <Button onClick={handleRequestOfficial} className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl">
                <FileText className="mr-2" size={18} />
                Request Official Transcript
              </Button>
            </CardContent>
          </Card>
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
              <Target className="w-6 h-6" />
              <span className="text-sm">Progress Audit</span>
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
              <Star className="w-6 h-6" />
              <span className="text-sm">Go to Class</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transcripts;
