"use client";

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Brain, 
  Sparkles, 
  Download, 
  PlayCircle, 
  CheckCircle, 
  Clock, 
  Award, 
  BookOpen, 
  Target, 
  Zap,
  Rocket,
  Star,
  FileText,
  Settings,
  RefreshCw,
  Eye,
  Plus,
  Search,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import { 
  aiAssignmentGenerator, 
  GeneratedAssignment, 
  AssignmentQuestion, 
  MarkingGuideItem,
  W3SchoolsContent 
} from '@/services/aiAssignmentGenerator';

const AIAssignments = () => {
  const navigate = useNavigate();
  const [availableCourses, setAvailableCourses] = useState<W3SchoolsContent[]>([]);
  const [generatedAssignments, setGeneratedAssignments] = useState<GeneratedAssignment[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [selectedAssignment, setSelectedAssignment] = useState<GeneratedAssignment | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const courses = aiAssignmentGenerator.getAvailableCourses();
    setAvailableCourses(courses);
  }, []);

  const handleGenerateAssignment = async () => {
    if (!selectedCourse) return;

    setIsGenerating(true);
    setGenerationProgress(0);

    try {
      const course = aiAssignmentGenerator.getCourseByTitle(selectedCourse);
      if (!course) return;

      // Simulate progress
      const progressInterval = setInterval(() => {
        setGenerationProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      const assignment = await aiAssignmentGenerator.generateAssignment(
        course,
        selectedDifficulty,
        selectedTopics.length > 0 ? selectedTopics : undefined
      );

      clearInterval(progressInterval);
      setGenerationProgress(100);
      
      setTimeout(() => {
        setGeneratedAssignments(prev => [assignment, ...prev]);
        setIsGenerating(false);
        setGenerationProgress(0);
        setSelectedAssignment(assignment);
        setShowPreview(true);
      }, 500);
    } catch (error) {
      console.error('Error generating assignment:', error);
      setIsGenerating(false);
      setGenerationProgress(0);
    }
  };

  const handleGenerateAllAssignments = async () => {
    setIsGenerating(true);
    setGenerationProgress(0);

    try {
      const progressInterval = setInterval(() => {
        setGenerationProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 5;
        });
      }, 300);

      const assignments = await aiAssignmentGenerator.generateMultipleAssignments(
        availableCourses,
        selectedDifficulty
      );

      clearInterval(progressInterval);
      setGenerationProgress(100);
      
      setTimeout(() => {
        setGeneratedAssignments(assignments);
        setIsGenerating(false);
        setGenerationProgress(0);
      }, 500);
    } catch (error) {
      console.error('Error generating assignments:', error);
      setIsGenerating(false);
      setGenerationProgress(0);
    }
  };

  const handleTopicToggle = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const filteredAssignments = generatedAssignments.filter(assignment =>
    assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assignment.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'from-green-500 to-emerald-500';
      case 'medium': return 'from-yellow-500 to-orange-500';
      case 'hard': return 'from-red-500 to-pink-500';
      default: return 'from-blue-500 to-purple-500';
    }
  };

  const getQuestionTypeIcon = (type: string) => {
    switch (type) {
      case 'multiple-choice': return <CheckCircle className="w-4 h-4" />;
      case 'true-false': return <Target className="w-4 h-4" />;
      case 'short-answer': return <FileText className="w-4 h-4" />;
      case 'coding': return <Brain className="w-4 h-4" />;
      case 'practical': return <PlayCircle className="w-4 h-4" />;
      case 'essay': return <BookOpen className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  return (
    <AnimatedBackground variant="aurora">
      <div className="min-h-screen p-4 md:p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center animate-glow">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Assignment Generator
                </h1>
                <p className="text-slate-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Generate intelligent assignments from W3Schools content
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl">
                <span className="text-green-400 font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  {generatedAssignments.length} Generated
                </span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl">
                <span className="text-blue-400 font-semibold flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  AI Powered
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: <BookOpen className="w-5 h-5" />, label: "Courses", value: availableCourses.length.toString(), color: "from-blue-500 to-cyan-500" },
            { icon: <Brain className="w-5 h-5" />, label: "Assignments", value: generatedAssignments.length.toString(), color: "from-purple-500 to-pink-500" },
            { icon: <Target className="w-5 h-5" />, label: "Questions", value: generatedAssignments.reduce((sum, a) => sum + a.questions.length, 0).toString(), color: "from-green-500 to-emerald-500" },
            { icon: <Award className="w-5 h-5" />, label: "Total Points", value: generatedAssignments.reduce((sum, a) => sum + a.points, 0).toString(), color: "from-yellow-500 to-orange-500" }
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

        {/* Generator Section */}
        <GlassCard variant="glass" className="mb-6">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Zap className="w-5 h-5" />
              AI Assignment Generator
            </CardTitle>
            <CardDescription className="text-slate-300">
              Generate intelligent assignments with AI-powered questions and marking guides
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Course Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="text-white">Select Course</Label>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                  <SelectTrigger className="bg-slate-800/50 border-slate-600/30 text-white">
                    <SelectValue placeholder="Choose a course" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600/30">
                    {availableCourses.map((course) => (
                      <SelectItem key={course.title} value={course.title} className="text-white">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          {course.title}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-white">Difficulty Level</Label>
                <Select value={selectedDifficulty} onValueChange={(value: any) => setSelectedDifficulty(value)}>
                  <SelectTrigger className="bg-slate-800/50 border-slate-600/30 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600/30">
                    <SelectItem value="easy" className="text-white">Easy</SelectItem>
                    <SelectItem value="medium" className="text-white">Medium</SelectItem>
                    <SelectItem value="hard" className="text-white">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-white">Estimated Time</Label>
                <div className="p-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white">
                  {selectedCourse ? (
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {availableCourses.find(c => c.title === selectedCourse)?.estimatedHours || 0} hours
                    </span>
                  ) : (
                    <span className="text-slate-400">Select a course</span>
                  )}
                </div>
              </div>
            </div>

            {/* Topic Selection */}
            {selectedCourse && (
              <div>
                <Label className="text-white mb-3 block">Select Topics (Optional)</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-40 overflow-y-auto">
                  {availableCourses.find(c => c.title === selectedCourse)?.topics.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => handleTopicToggle(topic)}
                      className={`p-2 rounded-lg text-sm transition-all ${
                        selectedTopics.includes(topic)
                          ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/50 text-white'
                          : 'bg-slate-800/50 border border-slate-600/30 text-slate-300 hover:bg-slate-700/50'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Generation Progress */}
            {isGenerating && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white">Generating Assignment...</span>
                  <span className="text-purple-400">{generationProgress}%</span>
                </div>
                <Progress value={generationProgress} className="h-2" />
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              <NeonButton
                variant="gradient"
                onClick={handleGenerateAssignment}
                disabled={!selectedCourse || isGenerating}
                icon={<Brain />}
              >
                {isGenerating ? 'Generating...' : 'Generate Assignment'}
              </NeonButton>
              
              <NeonButton
                variant="secondary"
                onClick={handleGenerateAllAssignments}
                disabled={isGenerating}
                icon={<Rocket />}
              >
                Generate All Courses
              </NeonButton>
            </div>
          </CardContent>
        </GlassCard>

        {/* Search and Filter */}
        <GlassCard variant="glass" className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search assignments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-800/50 border-slate-600/30 text-white placeholder-slate-400"
                />
              </div>
            </div>
            
            <Select defaultValue="all">
              <SelectTrigger className="bg-slate-800/50 border-slate-600/30 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600/30">
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </GlassCard>

        {/* Generated Assignments */}
        <div className="space-y-4">
          {filteredAssignments.map((assignment) => (
            <GlassCard key={assignment.id} variant="glass" hover>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${getDifficultyColor(assignment.difficulty)} rounded-lg flex items-center justify-center text-white`}>
                      <Brain className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{assignment.title}</h3>
                      <p className="text-slate-300 text-sm mb-2">{assignment.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-xs">
                          {assignment.questions.length} Questions
                        </span>
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-xs">
                          {assignment.points} Points
                        </span>
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-xs">
                          {assignment.estimatedTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {assignment.estimatedTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          {assignment.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <NeonButton variant="secondary" size="sm" icon={<Eye />}>
                    Preview
                  </NeonButton>
                  <NeonButton 
                    variant="gradient" 
                    size="sm" 
                    icon={<Download />}
                    onClick={() => {
                      setSelectedAssignment(assignment);
                      setShowPreview(true);
                    }}
                  >
                    View Details
                  </NeonButton>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Assignment Preview Modal */}
        {selectedAssignment && showPreview && (
          <Dialog open={showPreview} onOpenChange={setShowPreview}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900/95 border border-slate-700/50">
              <DialogHeader>
                <DialogTitle className="text-white text-xl">{selectedAssignment.title}</DialogTitle>
                <DialogDescription className="text-slate-300">
                  {selectedAssignment.description}
                </DialogDescription>
              </DialogHeader>
              
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="questions">Questions</TabsTrigger>
                  <TabsTrigger value="marking">Marking Guide</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <GlassCard variant="glass">
                      <div className="text-center">
                        <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                        <p className="text-slate-400 text-sm">Difficulty</p>
                        <p className="text-white font-bold capitalize">{selectedAssignment.difficulty}</p>
                      </div>
                    </GlassCard>
                    
                    <GlassCard variant="glass">
                      <div className="text-center">
                        <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <p className="text-slate-400 text-sm">Estimated Time</p>
                        <p className="text-white font-bold">{selectedAssignment.estimatedTime}</p>
                      </div>
                    </GlassCard>
                    
                    <GlassCard variant="glass">
                      <div className="text-center">
                        <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <p className="text-slate-400 text-sm">Total Points</p>
                        <p className="text-white font-bold">{selectedAssignment.points}</p>
                      </div>
                    </GlassCard>
                  </div>
                  
                  <GlassCard variant="glass">
                    <h3 className="text-white font-semibold mb-3">Instructions</h3>
                    <div className="prose prose-invert max-w-none">
                      <pre className="whitespace-pre-wrap text-slate-300 text-sm">
                        {selectedAssignment.instructions}
                      </pre>
                    </div>
                  </GlassCard>
                </TabsContent>
                
                <TabsContent value="questions" className="space-y-4">
                  {selectedAssignment.questions.map((question, index) => (
                    <GlassCard key={question.id} variant="glass">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {getQuestionTypeIcon(question.type)}
                            <span className="text-purple-400 text-sm capitalize">{question.type}</span>
                            <span className="text-slate-400 text-sm">{question.points} points</span>
                          </div>
                          <p className="text-white mb-3">{question.question}</p>
                          
                          {question.options && (
                            <div className="space-y-2 mb-3">
                              {question.options.map((option, optIndex) => (
                                <div key={optIndex} className="p-2 bg-slate-800/50 rounded-lg text-slate-300">
                                  {String.fromCharCode(65 + optIndex)}. {option}
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {question.explanation && (
                            <div className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                              <p className="text-blue-400 text-sm">{question.explanation}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </TabsContent>
                
                <TabsContent value="marking" className="space-y-4">
                  {selectedAssignment.markingGuide.map((item, index) => (
                    <GlassCard key={index} variant="glass">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-white font-semibold">{item.criteria}</h4>
                          <span className="text-purple-400 font-bold">{item.points} points</span>
                        </div>
                        <p className="text-slate-300 text-sm">{item.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div className="p-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                            <p className="text-green-400 text-sm font-medium">Excellent</p>
                            <p className="text-green-300 text-xs">{item.excellent}</p>
                          </div>
                          <div className="p-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                            <p className="text-blue-400 text-sm font-medium">Good</p>
                            <p className="text-blue-300 text-xs">{item.good}</p>
                          </div>
                          <div className="p-2 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                            <p className="text-yellow-400 text-sm font-medium">Satisfactory</p>
                            <p className="text-yellow-300 text-xs">{item.satisfactory}</p>
                          </div>
                          <div className="p-2 bg-red-500/20 border border-red-500/30 rounded-lg">
                            <p className="text-red-400 text-sm font-medium">Needs Improvement</p>
                            <p className="text-red-300 text-xs">{item.needsImprovement}</p>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </TabsContent>
                
                <TabsContent value="resources" className="space-y-4">
                  {selectedAssignment.resources.map((resource, index) => (
                    <GlassCard key={index} variant="glass">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                            <BookOpen className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{resource.title}</h4>
                            <p className="text-slate-300 text-sm">{resource.description}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs capitalize">
                                {resource.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        <NeonButton variant="secondary" size="sm" icon={<ExternalLink />}>
                          Open
                        </NeonButton>
                      </div>
                    </GlassCard>
                  ))}
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </AnimatedBackground>
  );
};

export default AIAssignments;
