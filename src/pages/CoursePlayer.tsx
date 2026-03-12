"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  PlayCircle, 
  CheckCircle2, 
  FileText, 
  MessageSquare, 
  Download, 
  ChevronRight,
  ChevronDown,
  Star,
  Clock,
  Award,
  BookOpen,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
import { storage, initialData } from '@/lib/data-service';

const CoursePlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState<any>(null);
  const [activeWeek, setActiveWeek] = useState(1);

  useEffect(() => {
    const courses = storage.get('courses', initialData.courses);
    const found = courses.find((c: any) => c.id === Number(id));
    setCourse(found);
  }, [id]);

  if (!course) return null;

  const currentModule = course.curriculum.find((m: any) => m.week === activeWeek);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <header className="h-16 border-b border-slate-800 px-6 flex items-center justify-between bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/training')}
            className="text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <ArrowLeft size={20} />
          </Button>
          <div className="h-8 w-[1px] bg-slate-800 mx-2"></div>
          <div>
            <h1 className="text-sm font-bold truncate max-w-[300px]">{course.title}</h1>
            <p className="text-[10px] text-slate-500">Instructor: {course.instructor}</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end gap-1">
            <div className="flex items-center gap-2 text-[10px] text-slate-400">
              <span>Progress: Week {activeWeek}/7</span>
            </div>
            <Progress value={(activeWeek / 7) * 100} className="h-1.5 w-32 bg-slate-800" />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-xs h-9 rounded-xl">
            <Award className="mr-2" size={16} />
            Claim Certificate
          </Button>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <div className="flex-1 flex flex-col overflow-y-auto">
          <div className="aspect-video bg-black relative group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform cursor-pointer">
                  <PlayCircle size={48} className="text-blue-500" />
                </div>
                <p className="text-slate-400 text-sm">Week {activeWeek}: {currentModule.title}</p>
              </div>
            </div>
          </div>

          <div className="p-8 max-w-4xl mx-auto w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold">Week {activeWeek}: {currentModule.title}</h2>
                <div className="flex items-center gap-4 mt-2 text-slate-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>Term Block: Week {activeWeek} of 7</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="border-slate-800 hover:bg-slate-900 rounded-xl">
                Mark Week as Completed
              </Button>
            </div>

            <Tabs defaultValue="assignment" className="w-full">
              <TabsList className="bg-slate-900 border border-slate-800 p-1 rounded-xl">
                <TabsTrigger value="assignment" className="rounded-lg">Assignment</TabsTrigger>
                <TabsTrigger value="resources" className="rounded-lg">Resources</TabsTrigger>
                <TabsTrigger value="discussions" className="rounded-lg">Discussions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="assignment" className="mt-6">
                <Card className="bg-slate-900 border-slate-800 text-white rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <FileText className="text-blue-500" size={20} />
                      Weekly Assignment
                    </CardTitle>
                    <CardDescription className="text-slate-400">Submit your work for review by the end of the week.</CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-slate-300 leading-relaxed">
                      {currentModule.assignment}
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-slate-800 pt-6">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl">
                      Submit Assignment
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between group hover:border-blue-500/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg">
                        <BookOpen size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Reading_Material_W{activeWeek}.pdf</p>
                        <p className="text-[10px] text-slate-500">Professional Study Guide</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-slate-500 group-hover:text-white">
                      <Download size={18} />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="w-full lg:w-96 border-l border-slate-800 bg-slate-900/30 flex flex-col">
          <div className="p-6 border-b border-slate-800">
            <h3 className="font-bold text-lg">Course Curriculum</h3>
            <p className="text-xs text-slate-500 mt-1">Standard 7-Week Term Structure</p>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-2">
              {course.curriculum.map((module: any) => (
                <button
                  key={module.week}
                  onClick={() => setActiveWeek(module.week)}
                  className={cn(
                    "w-full flex items-center gap-3 p-4 rounded-2xl transition-all text-left",
                    activeWeek === module.week 
                      ? "bg-blue-600/20 text-blue-400 border border-blue-500/20" 
                      : "hover:bg-slate-800/30 text-slate-400 hover:text-slate-200"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold",
                    activeWeek === module.week ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"
                  )}>
                    {module.week}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate">{module.title}</p>
                    <p className="text-[10px] opacity-60 mt-0.5">Week {module.week} Assignment Included</p>
                  </div>
                  {activeWeek > module.week && <CheckCircle2 size={16} className="text-emerald-500" />}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default CoursePlayer;