// "use client"
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, BookOpen, Users, Clock, Star, Award, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { storage, initialData } from '@/lib/data-service';
import { useAuth } from '@/context/AuthContext';
import { showSuccess } from '@/utils/toast';

const COURSE_CATEGORIES = [
  'Cybersecurity',
  'Software Development',
  'Business Management',
  'Social Media Marketing',
  'AI & Machine Learning',
  'Data Science',
  'Design & UX'
];

// Default images for each category
const CATEGORY_IMAGES: Record<string, string> = {
  'Cybersecurity': 'https://images.unsplash.com/photo-1605902711622-cfb43c443e92?auto=format&fit=crop&q=80&w=400',
  'Software Development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400',
  'Business Management': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=400',
  'Social Media Marketing': 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=400',
  'AI & Machine Learning': 'https://images.unsplash.com/photo-1581092334437-77a3a04c636f?auto=format&fit=crop&q=80&w=400',
  'Data Science': 'https://images.unsplash.com/photo-1555949963-aa79dcee981b?auto=format&fit=crop&q=80&w=400',
  'Design & UX': 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&q=80&w=400'
};

const Training = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [courses, setCourses] = useState<any[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    instructor: user?.name || '',
    category: COURSE_CATEGORIES[1], // Default: Software Development
    price: 'UGX 0',
    duration: '7 Weeks',
    image: CATEGORY_IMAGES[COURSE_CATEGORIES[1]]
  });

  useEffect(() => {
    const saved = storage.get('courses', initialData.courses);
    setCourses(saved);
  }, []);

  const handleAddCourse = () => {
    const id = courses.length + 1;
    const curriculum = Array.from({ length: 7 }, (_, i) => ({
      week: i + 1,
      title: `Week ${i + 1} Module`,
      assignment: "Assignment details to be added by director."
    }));

    const updated = storage.add('courses', {
      ...newCourse,
      id,
      students: 0,
      rating: 5.0,
      curriculum
    });
    setCourses(updated);
    setIsAddOpen(false);
    showSuccess("Course created successfully!");
  };

  const isDirector = user?.role === 'director';

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Training Academy</h1>
          <p className="text-slate-500">
            {isDirector ? "Manage courses, students, and curriculum." : "Access your enrolled courses and assignments."}
          </p>
        </div>
        {isDirector && (
          <Button onClick={() => setIsAddOpen(true)} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            <Plus className="mr-2" size={18} /> Create Course
          </Button>
        )}
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
              <h3 className="text-2xl font-bold text-slate-900">156</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><Award size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Certificates</p>
              <h3 className="text-2xl font-bold text-slate-900">84</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl"><Star size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Avg. Rating</p>
              <h3 className="text-2xl font-bold text-slate-900">4.8</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <Card key={course.id} className="border-none shadow-sm overflow-hidden group flex flex-col rounded-3xl">
            <div className="h-48 relative overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <Badge className="absolute top-4 right-4 bg-white/90 text-slate-900 backdrop-blur-sm border-none">{course.category}</Badge>
            </div>
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-xl leading-tight group-hover:text-blue-600 transition-colors">{course.title}</CardTitle>
              <CardDescription className="text-sm mt-1">Instructor: {course.instructor}</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-1">
              <div className="flex items-center gap-4 mt-4 text-slate-500">
                <div className="flex items-center gap-1 text-xs"><Users size={14} /><span>{course.students} Students</span></div>
                <div className="flex items-center gap-1 text-xs"><Clock size={14} /><span>{course.duration}</span></div>
              </div>
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
                  {user?.role === 'student' ? 'Continue' : 'View Course'}
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Add Course Dialog */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="sm:max-w-[500px] rounded-3xl">
          <DialogHeader>
            <DialogTitle>Create New Course</DialogTitle>
            <DialogDescription>Enter course details and curriculum structure.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label>Course Title</Label>
              <Input value={newCourse.title} onChange={e => setNewCourse({...newCourse, title: e.target.value})} placeholder="e.g. Advanced Cybersecurity" className="rounded-xl" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Category</Label>
                <select className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm"
                  value={newCourse.category}
                  onChange={e => setNewCourse({
                    ...newCourse,
                    category: e.target.value,
                    image: CATEGORY_IMAGES[e.target.value] || newCourse.image
                  })}
                >
                  {COURSE_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
              <div className="grid gap-2">
                <Label>Price (UGX)</Label>
                <Input value={newCourse.price} onChange={e => setNewCourse({...newCourse, price: e.target.value})} placeholder="UGX 1,000,000" className="rounded-xl" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Image URL</Label>
              <Input value={newCourse.image} onChange={e => setNewCourse({...newCourse, image: e.target.value})} className="rounded-xl" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddOpen(false)} className="rounded-xl">Cancel</Button>
            <Button onClick={handleAddCourse} className="bg-blue-600 hover:bg-blue-700 rounded-xl">Create Course</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Training;