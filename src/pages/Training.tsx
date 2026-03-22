use client
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, BookOpen, Users, Clock, Star, Award, Settings, Brain, Download, PlayCircle, CheckCircle, ExternalLink, UserCheck, UserX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { storage, initialData } from '@/lib/data-service';
import { useAuth } from '@/context/AuthContext';
import { showSuccess, showError } from '@/utils/toast';
import { COURSE_CATEGORIES, CATEGORY_IMAGES, CURRICULUM_TEMPLATES, DEFAULT_COURSES, Course } from '@/data/courses';

const Training = () => {
  const navigate = useNavigate();
  const { user, getPendingUsers, approveUser, rejectUser } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isApprovalOpen, setIsApprovalOpen] = useState(false);
  const [pendingUsers, setPendingUsers] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [newCourse, setNewCourse] = useState({
    title: '',
    instructor: user?.name || '',
    category: COURSE_CATEGORIES[1],
    price: 'UGX 0',
    duration: '7 Weeks',
    image: CATEGORY_IMAGES[COURSE_CATEGORIES[1]],
    description: '',
    prerequisites: '',
    learningOutcomes: ''
  });
  const [useAICurriculum, setUseAICurriculum] = useState(true);

  useEffect(() => {
    // Load default courses if none exist
    const savedCourses = storage.get('courses', []);
    if (savedCourses.length === 0) {
      storage.set('courses', DEFAULT_COURSES);
      setCourses(DEFAULT_COURSES);
    } else {
      setCourses(savedCourses);
    }
  }, []);

  useEffect(() => {
    if (user?.role === 'director') {
      setPendingUsers(getPendingUsers());
    }
  }, [user, getPendingUsers]);

  const handleAddCourse = () => {
    const id = `course_${Date.now()}`;
    const curriculum = useAICurriculum && CURRICULUM_TEMPLATES[newCourse.category] 
      ? CURRICULUM_TEMPLATES[newCourse.category]
      : Array.from({ length: 7 }, (_, i) => ({
          week: i + 1,
          title: `Week ${i + 1} Module`,
          description: "Module description to be added by instructor.",
          topics: [],
          assignment: "Assignment details to be added by instructor.",
          resources: [],
          aiGeneratedContent: false
        }));

    const courseData: Course = {
      id,
      title: newCourse.title,
      category: newCourse.category,
      description: newCourse.description,
      instructor: newCourse.instructor,
      price: newCourse.price,
      duration: newCourse.duration,
      image: newCourse.image,
      students: 0,
      rating: 5.0,
      curriculum,
      prerequisites: newCourse.prerequisites ? newCourse.prerequisites.split(',').map(p => p.trim()) : [],
      learningOutcomes: newCourse.learningOutcomes ? newCourse.learningOutcomes.split(',').map(l => l.trim()) : [],
      certification: `NextERP ${newCourse.category} Certificate`
    };

    const updated = storage.add('courses', courseData);
    setCourses(updated);
    setIsAddOpen(false);
    setNewCourse({
      title: '',
      instructor: user?.name || '',
      category: COURSE_CATEGORIES[1],
      price: 'UGX 0',
      duration: '7 Weeks',
      image: CATEGORY_IMAGES[COURSE_CATEGORIES[1]],
      description: '',
      prerequisites: '',
      learningOutcomes: ''
    });
    showSuccess("Course created successfully with AI-powered curriculum!");
  };

  const handleApproveUser = (userId: string) => {
    approveUser(userId);
    setPendingUsers(pendingUsers.filter(u => u.id !== userId));
    showSuccess("User approved successfully!");
  };

  const handleRejectUser = (userId: string) => {
    rejectUser(userId);
    setPendingUsers(pendingUsers.filter(u => u.id !== userId));
    showError("User registration rejected.");
  };

  const isDirector = user?.role === 'director';
  const isStudent = user?.role === 'student';
  
  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const enrolledCourses = user?.enrolledCourses || [];
  const myCourses = courses.filter(course => enrolledCourses.includes(course.id));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">NextERP Training Academy</h1>
          <p className="text-slate-500">
            {isDirector ? "Manage courses, students, and curriculum with AI assistance." : 
             isStudent ? "Access your enrolled courses and AI-powered assignments." : 
             "Browse our comprehensive course catalog."}
          </p>
        </div>
        <div className="flex gap-2">
          {isStudent && (
            <Button onClick={() => navigate('/my-courses')} className="bg-emerald-600 hover:bg-emerald-700 rounded-xl">
              <BookOpen className="mr-2" size={18} /> My Courses
            </Button>
          )}
          {isDirector && (
            <>
              <Button onClick={() => setIsApprovalOpen(true)} className="bg-orange-600 hover:bg-orange-700 rounded-xl">
                <UserCheck className="mr-2" size={18} /> Approve Users ({pendingUsers.length})
              </Button>
              <Button onClick={() => setIsAddOpen(true)} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                <Plus className="mr-2" size={18} /> Create Course
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><BookOpen size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Active Courses</p>
              <h3 className="text-2xl font-bold text-slate-900">{courses.length}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><Users size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Total Students</p>
              <h3 className="text-2xl font-bold text-slate-900">{courses.reduce((sum, c) => sum + c.students, 0)}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><Award size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Certificates</p>
              <h3 className="text-2xl font-bold text-slate-900">{Math.floor(courses.reduce((sum, c) => sum + c.students, 0) * 0.65)}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl"><Brain size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">AI-Powered</p>
              <h3 className="text-2xl font-bold text-slate-900">{courses.filter(c => c.curriculum.some(w => w.aiGeneratedContent)).length}</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Tabs */}
      <Tabs defaultValue={isStudent ? "my-courses" : "all-courses"} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="all-courses">All Courses</TabsTrigger>
          {isStudent && <TabsTrigger value="my-courses">My Courses</TabsTrigger>}
        </TabsList>
        
        <TabsContent value="all-courses" className="space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
              className="rounded-xl"
            >
              All Courses
            </Button>
            {COURSE_CATEGORIES.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-xl"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <Card key={course.id} className="border-none shadow-sm overflow-hidden group flex flex-col rounded-3xl">
                <div className="h-48 relative overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <Badge className="absolute top-4 right-4 bg-white/90 text-slate-900 backdrop-blur-sm border-none">
                    {course.category}
                  </Badge>
                  {course.curriculum.some(w => w.aiGeneratedContent) && (
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white backdrop-blur-sm border-none">
                      <Brain className="mr-1" size={12} /> AI
                    </Badge>
                  )}
                </div>
                <CardHeader className="p-6 pb-2">
                  <CardTitle className="text-xl leading-tight group-hover:text-blue-600 transition-colors">{course.title}</CardTitle>
                  <CardDescription className="text-sm mt-1">Instructor: {course.instructor}</CardDescription>
                  <p className="text-sm text-slate-600 mt-2 line-clamp-2">{course.description}</p>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-1">
                  <div className="flex items-center gap-4 mt-4 text-slate-500">
                    <div className="flex items-center gap-1 text-xs"><Users size={14} /><span>{course.students} Students</span></div>
                    <div className="flex items-center gap-1 text-xs"><Clock size={14} /><span>{course.duration}</span></div>
                    <div className="flex items-center gap-1 text-xs"><Star size={14} /><span>{course.rating}</span></div>
                  </div>
                  {course.learningOutcomes && course.learningOutcomes.length > 0 && (
                    <div className="mt-3">
                      <p className="text-xs text-slate-500 font-medium">What you'll learn:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {course.learningOutcomes.slice(0, 3).map((outcome, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{outcome}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="p-6 pt-0 border-t border-slate-50 flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-slate-900">{course.price}</span>
                  <div className="flex gap-2">
                    {isDirector && (
                      <Button variant="outline" size="sm" className="rounded-xl" onClick={() => navigate(`/training/manage/${course.id}`)}>
                        <Settings size={16} />
                      </Button>
                    )}
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-xl" onClick={() => navigate(`/training/player/${course.id}`)}>
                      {isStudent && enrolledCourses.includes(course.id) ? 'Continue' : 'View Course'}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {isStudent && (
          <TabsContent value="my-courses" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myCourses.map(course => (
                <Card key={course.id} className="border-none shadow-sm overflow-hidden group flex flex-col rounded-3xl">
                  <div className="h-48 relative overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <Badge className="absolute top-4 right-4 bg-emerald-600 text-white backdrop-blur-sm border-none">
                      Enrolled
                    </Badge>
                  </div>
                  <CardHeader className="p-6 pb-2">
                    <CardTitle className="text-xl leading-tight group-hover:text-blue-600 transition-colors">{course.title}</CardTitle>
                    <CardDescription className="text-sm mt-1">Instructor: {course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-1">
                    <div className="flex items-center gap-4 mt-4 text-slate-500">
                      <div className="flex items-center gap-1 text-xs"><Clock size={14} /><span>{course.duration}</span></div>
                      <div className="flex items-center gap-1 text-xs"><Star size={14} /><span>{course.rating}</span></div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 border-t border-slate-50 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-emerald-600" size={16} />
                      <span className="text-sm text-emerald-600 font-medium">Enrolled</span>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-xl" onClick={() => navigate(`/training/player/${course.id}`)}>
                      <PlayCircle className="mr-1" size={14} /> Continue
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        )}
      </Tabs>

      {/* Add Course Dialog */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="sm:max-w-[600px] rounded-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Brain className="text-blue-600" size={24} />
              Create AI-Powered Course
            </DialogTitle>
            <DialogDescription>Enter course details and let AI generate comprehensive curriculum.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label>Course Title</Label>
              <Input 
                value={newCourse.title} 
                onChange={e => setNewCourse({...newCourse, title: e.target.value})} 
                placeholder="e.g. Advanced Web Development" 
                className="rounded-xl" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Category</Label>
                <Select value={newCourse.category} onValueChange={(value) => setNewCourse({
                  ...newCourse,
                  category: value,
                  image: CATEGORY_IMAGES[value] || newCourse.image
                })}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {COURSE_CATEGORIES.map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Price (UGX)</Label>
                <Input 
                  value={newCourse.price} 
                  onChange={e => setNewCourse({...newCourse, price: e.target.value})} 
                  placeholder="UGX 1,000,000" 
                  className="rounded-xl" 
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Course Description</Label>
              <textarea 
                value={newCourse.description}
                onChange={e => setNewCourse({...newCourse, description: e.target.value})}
                placeholder="Describe what students will learn in this course..."
                className="flex min-h-[80px] w-full rounded-xl border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="grid gap-2">
              <Label>Prerequisites (comma-separated)</Label>
              <Input 
                value={newCourse.prerequisites}
                onChange={e => setNewCourse({...newCourse, prerequisites: e.target.value})}
                placeholder="e.g. Basic HTML, CSS knowledge"
                className="rounded-xl"
              />
            </div>
            <div className="grid gap-2">
              <Label>Learning Outcomes (comma-separated)</Label>
              <Input 
                value={newCourse.learningOutcomes}
                onChange={e => setNewCourse({...newCourse, learningOutcomes: e.target.value})}
                placeholder="e.g. Build responsive websites, Master JavaScript, Create APIs"
                className="rounded-xl"
              />
            </div>
            <div className="grid gap-2">
              <Label>Image URL</Label>
              <Input 
                value={newCourse.image} 
                onChange={e => setNewCourse({...newCourse, image: e.target.value})} 
                className="rounded-xl" 
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="ai-curriculum"
                checked={useAICurriculum}
                onChange={(e) => setUseAICurriculum(e.target.checked)}
                className="rounded"
              />
              <Label htmlFor="ai-curriculum" className="flex items-center gap-2">
                <Brain size={16} className="text-blue-600" />
                Use AI to generate comprehensive curriculum (recommended)
              </Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddOpen(false)} className="rounded-xl">Cancel</Button>
            <Button onClick={handleAddCourse} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
              {useAICurriculum ? 'Create AI-Powered Course' : 'Create Course'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* User Approval Dialog */}
      <Dialog open={isApprovalOpen} onOpenChange={setIsApprovalOpen}>
        <DialogContent className="sm:max-w-[700px] rounded-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <UserCheck className="text-orange-600" size={24} />
              User Approval Management
            </DialogTitle>
            <DialogDescription>Review and approve pending user registrations.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {pendingUsers.length === 0 ? (
              <div className="text-center py-8">
                <CheckCircle className="mx-auto text-emerald-600 mb-2" size={48} />
                <p className="text-slate-500">No pending user approvals</p>
              </div>
            ) : (
              pendingUsers.map(pendingUser => (
                <Card key={pendingUser.id} className="border border-slate-200 rounded-2xl">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img src={pendingUser.avatar} alt={pendingUser.name} className="w-12 h-12 rounded-full" />
                        <div>
                          <h3 className="font-semibold">{pendingUser.name}</h3>
                          <p className="text-sm text-slate-500">{pendingUser.email}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">{pendingUser.role}</Badge>
                            <span className="text-xs text-slate-400">
                              Registered {new Date(pendingUser.registrationDate || '').toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleRejectUser(pendingUser.id)}
                          className="rounded-xl text-red-600 hover:bg-red-50"
                        >
                          <UserX size={16} className="mr-1" /> Reject
                        </Button>
                        <Button 
                          size="sm" 
                          onClick={() => handleApproveUser(pendingUser.id)}
                          className="bg-emerald-600 hover:bg-emerald-700 rounded-xl"
                        >
                          <UserCheck size={16} className="mr-1" /> Approve
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
          <DialogFooter>
            <Button onClick={() => setIsApprovalOpen(false)} className="rounded-xl">Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Training;