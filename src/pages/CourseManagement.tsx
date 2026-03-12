"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Save, 
  Plus, 
  Trash2, 
  BookOpen, 
  FileText,
  Calendar,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { storage, initialData } from '@/lib/data-service';
import { showSuccess } from '@/utils/toast';

const CourseManagement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState<any>(null);

  useEffect(() => {
    const courses = storage.get('courses', initialData.courses);
    const found = courses.find((c: any) => c.id === Number(id));
    setCourse(found);
  }, [id]);

  const handleUpdateWeek = (week: number, field: string, value: string) => {
    const updatedCurriculum = course.curriculum.map((m: any) => 
      m.week === week ? { ...m, [field]: value } : m
    );
    setCourse({ ...course, curriculum: updatedCurriculum });
  };

  const handleSave = () => {
    storage.update('courses', course.id, course);
    showSuccess("Course curriculum updated successfully!");
    navigate('/training');
  };

  if (!course) return null;

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/training')} className="rounded-xl">
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Manage Curriculum</h1>
            <p className="text-slate-500">{course.title}</p>
          </div>
        </div>
        <Button onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-700 rounded-xl">
          <Save className="mr-2" size={18} />
          Save All Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {course.curriculum.map((module: any) => (
          <Card key={module.week} className="border-none shadow-sm rounded-3xl overflow-hidden">
            <CardHeader className="bg-slate-50/50 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold">
                    {module.week}
                  </div>
                  <div>
                    <CardTitle className="text-lg">Week {module.week} Module</CardTitle>
                    <CardDescription>Define the study topic and assignment for this week.</CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="rounded-lg">Term Block</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <Label>Module Title</Label>
                <Input 
                  value={module.title} 
                  onChange={(e) => handleUpdateWeek(module.week, 'title', e.target.value)}
                  className="rounded-xl"
                  placeholder="e.g. Introduction to Database Design"
                />
              </div>
              <div className="space-y-2">
                <Label>Weekly Assignment Details</Label>
                <Textarea 
                  value={module.assignment} 
                  onChange={(e) => handleUpdateWeek(module.week, 'assignment', e.target.value)}
                  className="rounded-xl min-h-[100px]"
                  placeholder="Describe the assignment students must complete..."
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseManagement;