"use client";

import React, { useState } from 'react';
import {
  FileText,
  Download,
  Upload,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Plus,
  Folder,
  FolderOpen,
  File,
  FilePlus,
  FileCheck,
  FileX,
  FileWarning,
  Clock,
  Calendar,
  User,
  Mail,
  Phone,
  Building,
  GraduationCap,
  Award,
  BookOpen,
  Briefcase,
  Heart,
  Star,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle,
  HelpCircle,
  Shield,
  Globe,
  Printer,
  Share,
  Link,
  Copy,
  Archive,
  Unarchive,
  Lock,
  Unlock,
  MoreHorizontal,
  ChevronRight,
  ChevronDown,
  Grid,
  List,
  SortAsc,
  SortDesc,
  RefreshCw,
  Settings,
  DownloadCloud,
  UploadCloud,
  Database,
  HardDrive,
  Cloud,
  Wifi,
  Smartphone,
  Laptop,
  Monitor,
  Headphones,
  Camera,
  Palette,
  Code,
  Image,
  Video,
  Music,
  FileSpreadsheet,
  FileChart,
  FileImage,
  FileVideo,
  FileAudio,
  FileCode,
  FileArchive,
  FileDigit,
  FileQuestion,
  FileLock,
  FileUnlock,
  FileHeart,
  FileStar,
  FileCheck2,
  FileX2,
  FileWarning2,
  FileSearch,
  FilePlus2,
  FileMinus,
  FileUp,
  FileDown,
  FileLeft,
  FileRight,
  FileDot,
  FileLine,
  FilePlusCircle,
  FileMinusCircle,
  FileCheckCircle,
  FileXCircle,
  FilePlusSquare,
  FileMinusSquare,
  FileCheckSquare,
  FileXSquare,
  FilePlusTriangle,
  FileMinusTriangle,
  FileCheckTriangle,
  FileXTriangle,
  FilePlusDiamond,
  FileMinusDiamond,
  FileCheckDiamond,
  FileXDiamond,
  FilePlusHexagon,
  FileMinusHexagon,
  FileCheckHexagon,
  FileXHexagon,
  FilePlusOctagon,
  FileMinusOctagon,
  FileCheckOctagon,
  FileXOctagon,
  FilePlusCircle2,
  FileMinusCircle2,
  FileCheckCircle2,
  FileXCircle2,
  FilePlusSquare2,
  FileMinusSquare2,
  FileCheckSquare2,
  FileXSquare2,
  FilePlusTriangle2,
  FileMinusTriangle2,
  FileCheckTriangle2,
  FileXTriangle2,
  FilePlusDiamond2,
  FileMinusDiamond2,
  FileCheckDiamond2,
  FileXDiamond2,
  FilePlusHexagon2,
  FileMinusHexagon2,
  FileCheckHexagon2,
  FileXHexagon2,
  FilePlusOctagon2,
  FileMinusOctagon2,
  FileCheckOctagon2,
  FileXOctagon2,
  FilePlusCircle3,
  FileMinusCircle3,
  FileCheckCircle3,
  FileXCircle3,
  FilePlusSquare3,
  FileMinusSquare3,
  FileCheckSquare3,
  FileXSquare3,
  FilePlusTriangle3,
  FileMinusTriangle3,
  FileCheckTriangle3,
  FileXTriangle3,
  FilePlusDiamond3,
  FileMinusDiamond3,
  FileCheckDiamond3,
  FileXDiamond3,
  FilePlusHexagon3,
  FileMinusHexagon3,
  FileCheckHexagon3,
  FileXHexagon3,
  FilePlusOctagon3,
  FileMinusOctagon3,
  FileCheckOctagon3,
  FileXOctagon3,
  FilePlusCircle4,
  FileMinusCircle4,
  FileCheckCircle4,
  FileXCircle4,
  FilePlusSquare4,
  FileMinusSquare4,
  FileCheckSquare4,
  FileXSquare4,
  FilePlusTriangle4,
  FileMinusTriangle4,
  FileCheckTriangle4,
  FileXTriangle4,
  FilePlusDiamond4,
  FileMinusDiamond4,
  FileCheckDiamond4,
  FileXDiamond4,
  FilePlusHexagon4,
  FileMinusHexagon4,
  FileCheckHexagon4,
  FileXHexagon4,
  FilePlusOctagon4,
  FileMinusOctagon4,
  FileCheckOctagon4,
  FileXOctagon4,
  FilePlusCircle5,
  FileMinusCircle5,
  FileCheckCircle5,
  FileXCircle5,
  FilePlusSquare5,
  FileMinusSquare5,
  FileCheckSquare5,
  FileXSquare5,
  FilePlusTriangle5,
  FileMinusTriangle5,
  FileCheckTriangle5,
  FileXTriangle5,
  FilePlusDiamond5,
  FileMinusDiamond5,
  FileCheckDiamond5,
  FileXDiamond5,
  FilePlusHexagon5,
  FileMinusHexagon5,
  FileCheckHexagon5,
  FileXHexagon5,
  FilePlusOctagon5,
  FileMinusOctagon5,
  FileCheckOctagon5,
  FileXOctagon5,
  FilePlusCircle6,
  FileMinusCircle6,
  FileCheckCircle6,
  FileXCircle6,
  FilePlusSquare6,
  FileMinusSquare6,
  FileCheckSquare6,
  FileXSquare6,
  FilePlusTriangle6,
  FileMinusTriangle6,
  FileCheckTriangle6,
  FileXTriangle6,
  FilePlusDiamond6,
  FileMinusDiamond6,
  FileCheckDiamond6,
  FileXDiamond6,
  FilePlusHexagon6,
  FileMinusHexagon6,
  FileCheckHexagon6,
  FileXHexagon6,
  FilePlusOctagon6,
  FileMinusOctagon6,
  FileCheckOctagon6,
  FileXOctagon6,
  FilePlusCircle7,
  FileMinusCircle7,
  FileCheckCircle7,
  FileXCircle7,
  FilePlusSquare7,
  FileMinusSquare7,
  FileCheckSquare7,
  FileXSquare7,
  FilePlusTriangle7,
  FileMinusTriangle7,
  FileCheckTriangle7,
  FileXTriangle7,
  FilePlusDiamond7,
  FileMinusDiamond7,
  FileCheckDiamond7,
  FileXDiamond7,
  FilePlusHexagon7,
  FileMinusHexagon7,
  FileCheckHexagon7,
  FileXHexagon7,
  FilePlusOctagon7,
  FileMinusOctagon7,
  FileCheckOctagon7,
  FileXOctagon7,
  FilePlusCircle8,
  FileMinusCircle8,
  FileCheckCircle8,
  FileXCircle8,
  FilePlusSquare8,
  FileMinusSquare8,
  FileCheckSquare8,
  FileXSquare8,
  FilePlusTriangle8,
  FileMinusTriangle8,
  FileCheckTriangle8,
  FileXTriangle8,
  FilePlusDiamond8,
  FileMinusDiamond8,
  FileCheckDiamond8,
  FileXDiamond8,
  FilePlusHexagon8,
  FileMinusHexagon8,
  FileCheckHexagon8,
  FileXHexagon8,
  FilePlusOctagon8,
  FileMinusOctagon8,
  FileCheckOctagon8,
  FileXOctagon8,
  FilePlusCircle9,
  FileMinusCircle9,
  FileCheckCircle9,
  FileXCircle9,
  FilePlusSquare9,
  FileMinusSquare9,
  FileCheckSquare9,
  FileXSquare9,
  FilePlusTriangle9,
  FileMinusTriangle9,
  FileCheckTriangle9,
  FileXTriangle9,
  FilePlusDiamond9,
  FileMinusDiamond9,
  FileCheckDiamond9,
  FileXDiamond9,
  FilePlusHexagon9,
  FileMinusHexagon9,
  FileCheckHexagon9,
  FileXHexagon9,
  FilePlusOctagon9,
  FileMinusOctagon9,
  FileCheckOctagon9,
  FileXOctagon9,
  FilePlusCircle10,
  FileMinusCircle10,
  FileCheckCircle10,
  FileXCircle10,
  FilePlusSquare10,
  FileMinusSquare10,
  FileCheckSquare10,
  FileXSquare10,
  FilePlusTriangle10,
  FileMinusTriangle10,
  FileCheckTriangle10,
  FileXTriangle10,
  FilePlusDiamond10,
  FileMinusDiamond10,
  FileCheckDiamond10,
  FileXDiamond10,
  FilePlusHexagon10,
  FileMinusHexagon10,
  FileCheckHexagon10,
  FileXHexagon10,
  FilePlusOctagon10,
  FileMinusOctagon10,
  FileCheckOctagon10,
  FileXOctagon10
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

const Documents = () => {
  const [activeTab, setActiveTab] = useState('my-documents');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc');

  const documents = [
    {
      id: 1,
      name: 'Academic Transcript 2024',
      type: 'PDF',
      size: '2.4 MB',
      category: 'Academic',
      date: '2024-03-15',
      status: 'approved',
      description: 'Official academic transcript for Spring 2024 semester',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 2,
      name: 'Tuition Receipt - Spring 2024',
      type: 'PDF',
      size: '156 KB',
      category: 'Financial',
      date: '2024-03-10',
      status: 'approved',
      description: 'Payment receipt for Spring 2024 tuition',
      icon: FileText,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      id: 3,
      name: 'Student ID Card',
      type: 'PNG',
      size: '1.2 MB',
      category: 'Identity',
      date: '2024-01-20',
      status: 'approved',
      description: 'Official student identification card',
      icon: FileImage,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      id: 4,
      name: 'Course Registration Form',
      type: 'DOCX',
      size: '89 KB',
      category: 'Academic',
      date: '2024-02-28',
      status: 'pending',
      description: 'Course registration form for Fall 2024',
      icon: FileText,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      id: 5,
      name: 'Scholarship Application',
      type: 'PDF',
      size: '3.1 MB',
      category: 'Financial',
      date: '2024-03-01',
      status: 'under-review',
      description: 'Academic Excellence Scholarship application',
      icon: FileText,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      id: 6,
      name: 'Research Paper - AI in Healthcare',
      type: 'PDF',
      size: '5.7 MB',
      category: 'Academic',
      date: '2024-03-20',
      status: 'approved',
      description: 'Research paper for CS301 Advanced Topics',
      icon: FileText,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      id: 7,
      name: 'Health Insurance Card',
      type: 'PDF',
      size: '780 KB',
      category: 'Health',
      date: '2024-01-15',
      status: 'approved',
      description: 'Student health insurance coverage card',
      icon: FileText,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      id: 8,
      name: 'Housing Agreement',
      type: 'PDF',
      size: '1.8 MB',
      category: 'Housing',
      date: '2024-01-05',
      status: 'approved',
      description: 'Campus housing agreement for 2024-2025',
      icon: FileText,
      color: 'text-teal-600',
      bgColor: 'bg-teal-100'
    }
  ];

  const folders = [
    { id: 1, name: 'Academic Documents', count: 24, icon: FolderOpen, color: 'text-blue-600' },
    { id: 2, name: 'Financial Records', count: 18, icon: FolderOpen, color: 'text-green-600' },
    { id: 3, name: 'Identity Documents', count: 6, icon: FolderOpen, color: 'text-purple-600' },
    { id: 4, name: 'Health Records', count: 12, icon: FolderOpen, color: 'text-red-600' },
    { id: 5, name: 'Housing Documents', count: 8, icon: FolderOpen, color: 'text-teal-600' },
    { id: 6, name: 'Research Papers', count: 15, icon: FolderOpen, color: 'text-indigo-600' }
  ];

  const sharedDocuments = [
    {
      id: 1,
      name: 'Group Project - CS301',
      sharedBy: 'Dr. Sarah Johnson',
      sharedDate: '2024-03-25',
      type: 'PDF',
      size: '3.2 MB',
      permissions: 'view'
    },
    {
      id: 2,
      name: 'Study Materials - MATH201',
      sharedBy: 'Prof. Michael Chen',
      sharedDate: '2024-03-22',
      type: 'ZIP',
      size: '15.7 MB',
      permissions: 'edit'
    },
    {
      id: 3,
      name: 'Lab Report Template',
      sharedBy: 'TA Emily Davis',
      sharedDate: '2024-03-20',
      type: 'DOCX',
      size: '245 KB',
      permissions: 'view'
    }
  ];

  const recentActivity = [
    { action: 'Uploaded', document: 'Academic Transcript 2024', time: '2 hours ago', icon: Upload },
    { action: 'Shared', document: 'Research Paper - AI in Healthcare', time: '1 day ago', icon: Share },
    { action: 'Downloaded', document: 'Tuition Receipt - Spring 2024', time: '3 days ago', icon: Download },
    { action: 'Edited', document: 'Course Registration Form', time: '5 days ago', icon: Edit },
    { action: 'Approved', document: 'Scholarship Application', time: '1 week ago', icon: CheckCircle }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const sortedDocuments = [...filteredDocuments].sort((a, b) => {
    switch (sortBy) {
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'date-asc':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'date-desc':
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'under-review':
        return <Badge className="bg-blue-100 text-blue-800">Under Review</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-slate-900">Documents Center</h1>
              <Badge variant="secondary">8.2 GB Used</Badge>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <UploadCloud className="w-4 h-4 mr-2" />
                Upload
              </Button>
              <Button variant="outline" size="sm">
                <FolderPlus className="w-4 h-4 mr-2" />
                New Folder
              </Button>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Document
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="my-documents">My Documents</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="archive">Archive</TabsTrigger>
          </TabsList>

          {/* My Documents Tab */}
          <TabsContent value="my-documents" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search documents..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="financial">Financial</SelectItem>
                        <SelectItem value="identity">Identity</SelectItem>
                        <SelectItem value="health">Health</SelectItem>
                        <SelectItem value="housing">Housing</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="date-desc">Date (Newest)</SelectItem>
                        <SelectItem value="date-asc">Date (Oldest)</SelectItem>
                        <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                        <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex items-center border rounded-md">
                      <Button
                        variant={viewMode === 'grid' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('grid')}
                      >
                        <Grid className="w-4 h-4" />
                      </Button>
                      <Button
                        variant={viewMode === 'list' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('list')}
                      >
                        <List className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Folders Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {folders.map((folder) => {
                const Icon = folder.icon;
                return (
                  <Card key={folder.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${folder.color} bg-opacity-10`}>
                          <Icon className={`w-6 h-6 ${folder.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{folder.name}</h3>
                          <p className="text-sm text-slate-600">{folder.count} items</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Documents Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {sortedDocuments.map((doc) => {
                  const Icon = doc.icon;
                  return (
                    <Card key={doc.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center space-y-3">
                          <div className={`p-3 rounded-lg ${doc.bgColor}`}>
                            <Icon className={`w-8 h-8 ${doc.color}`} />
                          </div>
                          <div className="flex-1 w-full">
                            <h3 className="font-semibold text-sm truncate">{doc.name}</h3>
                            <p className="text-xs text-slate-600 truncate">{doc.description}</p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs text-slate-500">{doc.size}</span>
                              {getStatusBadge(doc.status)}
                            </div>
                            <div className="flex items-center justify-between mt-3">
                              <span className="text-xs text-slate-500">{doc.date}</span>
                              <div className="flex gap-1">
                                <Button variant="ghost" size="sm">
                                  <Eye className="w-3 h-3" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Download className="w-3 h-3" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Share className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-4">Name</th>
                          <th className="text-left p-4">Category</th>
                          <th className="text-left p-4">Size</th>
                          <th className="text-left p-4">Date</th>
                          <th className="text-left p-4">Status</th>
                          <th className="text-left p-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedDocuments.map((doc) => {
                          const Icon = doc.icon;
                          return (
                            <tr key={doc.id} className="border-b hover:bg-slate-50">
                              <td className="p-4">
                                <div className="flex items-center gap-3">
                                  <div className={`p-1 rounded ${doc.bgColor}`}>
                                    <Icon className={`w-4 h-4 ${doc.color}`} />
                                  </div>
                                  <div>
                                    <p className="font-medium">{doc.name}</p>
                                    <p className="text-sm text-slate-600">{doc.description}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4">
                                <Badge variant="outline">{doc.category}</Badge>
                              </td>
                              <td className="p-4 text-sm text-slate-600">{doc.size}</td>
                              <td className="p-4 text-sm text-slate-600">{doc.date}</td>
                              <td className="p-4">{getStatusBadge(doc.status)}</td>
                              <td className="p-4">
                                <div className="flex gap-1">
                                  <Button variant="ghost" size="sm">
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Download className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Share className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="w-4 h-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Shared Tab */}
          <TabsContent value="shared" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share className="w-5 h-5" />
                  Shared Documents
                </CardTitle>
                <CardDescription>Documents shared with you or by you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sharedDocuments.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{doc.name}</h3>
                          <p className="text-sm text-slate-600">
                            Shared by {doc.sharedBy} • {doc.sharedDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-600">{doc.size}</span>
                        <Badge variant={doc.permissions === 'edit' ? 'default' : 'secondary'}>
                          {doc.permissions}
                        </Badge>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Requests Tab */}
          <TabsContent value="requests" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FilePlus className="w-5 h-5" />
                    Document Requests
                  </CardTitle>
                  <CardDescription>Pending document requests from faculty and staff</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">Official Transcript Request</h3>
                        <p className="text-sm text-slate-600 mt-1">
                          Requested by: Graduate Admissions Office
                        </p>
                        <p className="text-sm text-slate-600">Due: March 30, 2024</p>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800">Pending</Badge>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Button size="sm">Upload Document</Button>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">Financial Aid Verification</h3>
                        <p className="text-sm text-slate-600 mt-1">
                          Requested by: Financial Aid Office
                        </p>
                        <p className="text-sm text-slate-600">Due: April 5, 2024</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Button size="sm">Continue Upload</Button>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>Your recent document-related activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentActivity.map((activity, index) => {
                      const Icon = activity.icon;
                      return (
                        <div key={index} className="flex items-center gap-3 p-2">
                          <div className="p-1 bg-slate-100 rounded">
                            <Icon className="w-4 h-4 text-slate-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">
                              <span className="font-medium">{activity.action}</span> {activity.document}
                            </p>
                            <p className="text-xs text-slate-600">{activity.time}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Templates Tab */}
          <TabsContent value="templates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Document Templates
                </CardTitle>
                <CardDescription>Common templates for various document types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Course Registration Form', category: 'Academic', icon: FileText },
                    { name: 'Scholarship Application', category: 'Financial', icon: FileText },
                    { name: 'Medical Leave Request', category: 'Health', icon: FileText },
                    { name: 'Housing Application', category: 'Housing', icon: FileText },
                    { name: 'Research Proposal', category: 'Academic', icon: FileText },
                    { name: 'Internship Report', category: 'Career', icon: FileText }
                  ].map((template, index) => {
                    const Icon = template.icon;
                    return (
                      <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <Icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold">{template.name}</h3>
                              <p className="text-sm text-slate-600">{template.category}</p>
                            </div>
                          </div>
                          <div className="mt-3">
                            <Button size="sm" className="w-full">Use Template</Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Archive Tab */}
          <TabsContent value="archive" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Archive className="w-5 h-5" />
                  Archived Documents
                </CardTitle>
                <CardDescription>Old and inactive documents stored for archival purposes</CardDescription>
              </CardHeader>
              <CardContent>
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Archived documents are stored for 7 years. Contact administration if you need to restore any documents.
                  </AlertDescription>
                </Alert>
                <div className="mt-4 space-y-2">
                  {[
                    { name: 'Academic Transcript 2022', date: '2023-06-15', size: '2.1 MB' },
                    { name: 'Tuition Receipt - Fall 2022', date: '2023-01-10', size: '145 KB' },
                    { name: 'Previous Housing Agreement', date: '2023-08-20', size: '1.6 MB' }
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Archive className="w-5 h-5 text-slate-400" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-sm text-slate-600">{doc.date} • {doc.size}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Unarchive className="w-4 h-4 mr-1" />
                          Restore
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-600">
            <div className="flex items-center gap-4">
              <span>Home</span>
              <span>|</span>
              <span>Logout</span>
              <span>|</span>
              <span>Site Index</span>
              <span>|</span>
              <span>Privacy Policy</span>
            </div>
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <span>Version: 26.0.1.10</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Documents;