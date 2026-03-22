"use client";

import React, { useState } from 'react';
import { 
  Brain, 
  Sparkles, 
  Zap, 
  Target, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  MessageSquare, 
  FileText, 
  Lightbulb, 
  Search,
  Filter,
  Plus,
  ExternalLink,
  Rocket,
  Trophy,
  Flame
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { showSuccess } from '@/utils/toast';
import { cn } from '@/lib/utils';

const AIAssignments = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const aiChallenges = [
    {
      id: 1,
      title: "Algorithm Optimization Challenge",
      difficulty: "Hard",
      estimatedTime: "45 mins",
      points: 500,
      description: "Optimize a recursive Fibonacci function to O(n) time complexity using dynamic programming.",
      category: "Algorithms",
      status: "available"
    },
    {
      id: 2,
      title: "SQL Query Debugger",
      difficulty: "Medium",
      estimatedTime: "20 mins",
      points: 250,
      description: "Identify and fix the performance bottleneck in a complex JOIN query involving 5 tables.",
      category: "Databases",
      status: "in-progress"
    },
    {
      id: 3,
      title: "React State Management Quiz",
      difficulty: "Easy",
      estimatedTime: "15 mins",
      points: 150,
      description: "Interactive quiz on Context API vs Redux for enterprise applications.",
      category: "Web Dev",
      status: "completed",
      score: "100%"
    }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      showSuccess("New AI challenge generated based on your recent progress!");
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative bg-slate-900 rounded-3xl p-8 overflow-hidden border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">AI-Powered Learning</span>
            </div>
            <h1 className="text-4xl font-bold text-white">Personalized AI Challenges</h1>
            <p className="text-slate-400 text-lg">
              Our AI analyzes your course progress and generates custom assignments to strengthen your weak areas and accelerate your learning.
            </p>
            <div className="flex gap-3 pt-2">
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 h-12 font-bold shadow-lg shadow-blue-900/20"
              >
                {isGenerating ? "Analyzing Progress..." : "Generate New Challenge"}
                {!isGenerating && <Zap size={18} className="ml-2 fill-current" />}
              </Button>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-xl h-12 px-6">
                View History
              </Button>
            </div>
          </div>
          <div className="shrink-0">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20 rotate-3">
              <Brain size={80} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none shadow-sm bg-white rounded-3xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-orange-50 text-orange-600 rounded-xl"><Flame size={24} /></div>
              <Badge className="bg-orange-50 text-orange-600 border-none">7 Day Streak</Badge>
            </div>
            <p className="text-slate-500 text-sm font-medium">Learning Momentum</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">Excellent</h3>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white rounded-3xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-xl"><Trophy size={24} /></div>
              <Badge className="bg-purple-50 text-purple-600 border-none">Top 5%</Badge>
            </div>
            <p className="text-slate-500 text-sm font-medium">Total AI Points</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">12,450</h3>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white rounded-3xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl"><Target size={24} /></div>
              <Badge className="bg-emerald-50 text-emerald-600 border-none">85% Mastery</Badge>
            </div>
            <p className="text-slate-500 text-sm font-medium">Skill Proficiency</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">Web Development</h3>
          </CardContent>
        </Card>
      </div>

      {/* Challenges List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Active Challenges</h2>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="text-blue-600 font-bold">View All</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiChallenges.map(challenge => (
            <Card key={challenge.id} className="border-none shadow-sm rounded-3xl overflow-hidden group hover:shadow-md transition-all">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-slate-100 text-slate-600 border-none">{challenge.category}</Badge>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
                    <Clock size={12} />
                    {challenge.estimatedTime}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 line-clamp-3">{challenge.description}</p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <Badge className={cn(
                      "border-none",
                      challenge.difficulty === 'Hard' ? 'bg-red-50 text-red-600' :
                      challenge.difficulty === 'Medium' ? 'bg-orange-50 text-orange-600' :
                      'bg-emerald-50 text-emerald-600'
                    )}>
                      {challenge.difficulty}
                    </Badge>
                    <span className="text-xs font-bold text-slate-400">+{challenge.points} XP</span>
                  </div>
                  {challenge.status === 'completed' && (
                    <div className="flex items-center gap-1 text-emerald-600 font-bold text-sm">
                      <CheckCircle size={16} />
                      {challenge.score}
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="bg-slate-50/50 border-t border-slate-100 p-4">
                {challenge.status === 'completed' ? (
                  <Button variant="outline" className="w-full rounded-xl border-slate-200">Review Solution</Button>
                ) : (
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl">
                    {challenge.status === 'in-progress' ? 'Continue Challenge' : 'Start Challenge'}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <Card className="border-none shadow-sm rounded-3xl bg-blue-600 text-white">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="p-4 bg-white/20 rounded-2xl shrink-0">
              <Lightbulb size={40} className="text-white" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-bold">AI Learning Insight</h3>
              <p className="text-blue-100">
                "You've shown great progress in React Hooks, but your SQL optimization scores are slightly below average. I've prepared a specialized 'Query Performance' challenge to help you master indexing and execution plans."
              </p>
            </div>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 border-none rounded-xl px-8 h-12 font-bold shrink-0">
              Accept Recommendation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIAssignments;