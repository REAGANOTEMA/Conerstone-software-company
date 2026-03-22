"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  CheckCircle, 
  Award,
  Target,
  Calendar,
  BookOpen,
  Clock,
  Users,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAuth } from '@/context/AuthContext';

const DegreeProgressAudit = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const degreeProgress = {
    overall: 50,
    firstYear: 100,
    secondYear: 85,
    thirdYear: 30,
    fourthYear: 0
  };

  const creditRequirements = {
    completed: 72,
    inProgress: 18,
    total: 144,
    remaining: 54
  };

  const milestones = [
    {
      id: 1,
      title: "First Year Foundation",
      description: "Complete first year core courses",
      completed: true,
      date: "2023-12-15",
      credits: 36
    },
    {
      id: 2,
      title: "Second Year Specialization",
      description: "Complete second year with specialization courses",
      completed: true,
      date: "2024-05-20",
      credits: 36
    },
    {
      id: 3,
      title: "Third Year Advanced Topics",
      description: "Complete third year advanced courses",
      completed: false,
      date: null,
      credits: 36
    },
    {
      id: 4,
      title: "Fourth Year Capstone",
      description: "Complete final year and capstone project",
      completed: false,
      date: null,
      credits: 36
    }
  ];

  const academicRequirements = [
    {
      category: "Core Courses",
      completed: 8,
      total: 10,
      description: "Fundamental computer science courses"
    },
    {
      category: "Mathematics",
      completed: 4,
      total: 4,
      description: "Calculus, discrete math, statistics"
    },
    {
      category: "Laboratory Work",
      completed: 6,
      total: 8,
      description: "Programming labs and practical sessions"
    },
    {
      category: "Electives",
      completed: 2,
      total: 6,
      description: "Optional courses in chosen specialization"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Degree Progress Audit</h1>
          <p className="text-slate-500">Track your academic progress and graduation requirements</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            <ArrowRight className="mr-2" size={18} />
            My Program
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            <BookOpen className="mr-2" size={18} />
            Go to Class
          </Button>
        </div>
      </div>

      {/* Overall Progress */}
      <Card className="border-none shadow-sm rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            Overall Progress Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Overall Progress</span>
              <span className="text-sm text-slate-500">{degreeProgress.overall}% Complete</span>
            </div>
            <Progress value={degreeProgress.overall} className="h-3" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { year: "First Year", progress: degreeProgress.firstYear },
              { year: "Second Year", progress: degreeProgress.secondYear },
              { year: "Third Year", progress: degreeProgress.thirdYear },
              { year: "Fourth Year", progress: degreeProgress.fourthYear }
            ].map((year, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{year.year}</span>
                  <span className="text-sm text-slate-500">{year.progress}%</span>
                </div>
                <Progress value={year.progress} className="h-2" />
                {year.progress === 100 && (
                  <div className="flex items-center gap-1 mt-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm text-emerald-600">Completed</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl">
            <h4 className="font-semibold mb-2">Credit Requirements</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-blue-600">{creditRequirements.completed}</p>
                <p className="text-sm text-slate-600">Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">{creditRequirements.inProgress}</p>
                <p className="text-sm text-slate-600">In Progress</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-600">{creditRequirements.remaining}</p>
                <p className="text-sm text-slate-600">Remaining</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Total Credits Required</span>
                <span className="text-sm text-slate-500">{creditRequirements.total} credits</span>
              </div>
              <Progress value={(creditRequirements.completed / creditRequirements.total) * 100} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Milestones */}
      <Card className="border-none shadow-sm rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-600" />
            Academic Milestones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{milestone.title}</h4>
                  <p className="text-sm text-slate-600">{milestone.description}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {milestone.completed ? milestone.date : 'Not completed'}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {milestone.credits} credits
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={`${milestone.completed ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-800'} border-none`}>
                    {milestone.completed ? 'Completed' : 'Pending'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Academic Requirements */}
      <Card className="border-none shadow-sm rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-orange-600" />
            Academic Requirements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {academicRequirements.map((requirement, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{requirement.category}</h4>
                  <p className="text-sm text-slate-600">{requirement.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-slate-900">
                    {requirement.completed}/{requirement.total}
                  </div>
                  <Progress value={(requirement.completed / requirement.total) * 100} className="h-2 mt-2 w-24" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

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
              onClick={() => navigate('/school/live-lectures')}
            >
              <Users className="w-6 h-6" />
              <span className="text-sm">Live Lectures</span>
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

export default DegreeProgressAudit;
