"use client";

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  Paperclip, 
  Plus, 
  MoreVertical,
  LayoutGrid,
  List,
  Users,
  Settings,
  Trello
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import KanbanBoard from '@/components/projects/KanbanBoard';

const ProjectDetails = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'list' | 'kanban'>('list');

  const project = {
    id: 1,
    name: "School Management System",
    client: "Iganga High School",
    status: "In Progress",
    progress: 85,
    deadline: "Oct 24, 2024",
    description: "A comprehensive ERP solution for secondary schools in Uganda, featuring student records, fee management, and academic reporting.",
    team: [
      { name: "Reagan Otema", role: "Project Lead", avatar: "RO" },
      { name: "Binsobedde Najiib", role: "Technical Lead", avatar: "BN" },
      { name: "Alice Kyomugisha", role: "Senior Dev", avatar: "AK" }
    ],
    tasks: [
      { id: 1, title: "Fee Module Integration", status: "Completed", priority: "High", assignee: "AK" },
      { id: 2, title: "Report Card Generator", status: "In Progress", priority: "High", assignee: "BN" },
      { id: 3, title: "Parent Portal UI", status: "Todo", priority: "Medium", assignee: "RO" },
      { id: 4, title: "Database Migration", status: "Completed", priority: "Critical", assignee: "BN" },
      { id: 5, title: "SMS Notification API", status: "In Progress", priority: "Medium", assignee: "AK" },
      { id: 6, title: "User Role Permissions", status: "Review", priority: "High", assignee: "RO" }
    ]
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/projects')} className="rounded-xl">
          <ArrowLeft size={20} />
        </Button>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-slate-900">{project.name}</h1>
            <Badge className="bg-blue-50 text-blue-600 border-none">{project.status}</Badge>
          </div>
          <p className="text-slate-500 mt-1">Client: {project.client}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-none shadow-sm rounded-3xl">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-600 leading-relaxed">
                {project.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 font-medium uppercase">Deadline</p>
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <Calendar size={16} className="text-blue-600" />
                    <span>{project.deadline}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 font-medium uppercase">Progress</p>
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <Clock size={16} className="text-orange-600" />
                    <span>{project.progress}%</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 font-medium uppercase">Tasks</p>
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>{project.tasks.filter(t => t.status === 'Completed').length}/{project.tasks.length}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 font-medium uppercase">Team</p>
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <Users size={16} className="text-purple-600" />
                    <span>{project.team.length} Members</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Overall Completion</span>
                  <span className="font-bold text-slate-900">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2 rounded-full" />
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="tasks" className="w-full">
            <div className="flex items-center justify-between mb-6">
              <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-100">
                <TabsTrigger value="tasks" className="rounded-lg px-6">Tasks</TabsTrigger>
                <TabsTrigger value="timeline" className="rounded-lg px-6">Timeline</TabsTrigger>
                <TabsTrigger value="files" className="rounded-lg px-6">Files</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
                <Button 
                  variant={viewMode === 'list' ? 'white' : 'ghost'} 
                  size="sm" 
                  className={cn("h-8 rounded-lg px-3", viewMode === 'list' && "bg-white shadow-sm")}
                  onClick={() => setViewMode('list')}
                >
                  <List size={16} className="mr-2" />
                  List
                </Button>
                <Button 
                  variant={viewMode === 'kanban' ? 'white' : 'ghost'} 
                  size="sm" 
                  className={cn("h-8 rounded-lg px-3", viewMode === 'kanban' && "bg-white shadow-sm")}
                  onClick={() => setViewMode('kanban')}
                >
                  <Trello size={16} className="mr-2" />
                  Board
                </Button>
              </div>
            </div>

            <TabsContent value="tasks" className="mt-0">
              {viewMode === 'list' ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-900">Project Tasks</h3>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                      <Plus size={16} className="mr-2" />
                      Add Task
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {project.tasks.map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 transition-all group shadow-sm">
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "p-2 rounded-xl",
                            task.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                            task.status === 'In Progress' ? 'bg-blue-50 text-blue-600' :
                            'bg-slate-50 text-slate-400'
                          )}>
                            <CheckCircle2 size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900">{task.title}</h4>
                            <div className="flex items-center gap-3 mt-1">
                              <Badge variant="outline" className="text-[10px] py-0 h-4 rounded-md">{task.priority}</Badge>
                              <span className="text-xs text-slate-500">Assigned to: {task.assignee}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge className={cn(
                            "border-none",
                            task.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                            task.status === 'In Progress' ? 'bg-blue-50 text-blue-600' :
                            'bg-slate-50 text-slate-500'
                          )}>
                            {task.status}
                          </Badge>
                          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreVertical size={18} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <KanbanBoard tasks={project.tasks} />
              )}
            </TabsContent>

            <TabsContent value="timeline" className="mt-0">
              <Card className="border-none shadow-sm rounded-3xl">
                <CardContent className="p-8">
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <CheckCircle2 size={16} />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl border border-slate-100 bg-white shadow-sm">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                          <div className="font-bold text-slate-900">Project Kickoff</div>
                          <time className="text-xs font-bold text-blue-600">Aug 15, 2024</time>
                        </div>
                        <div className="text-slate-500 text-sm">Initial meeting with Iganga High School administration.</div>
                      </div>
                    </div>
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <CheckCircle2 size={16} />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl border border-slate-100 bg-white shadow-sm">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                          <div className="font-bold text-slate-900">Database Schema Design</div>
                          <time className="text-xs font-bold text-blue-600">Sep 02, 2024</time>
                        </div>
                        <div className="text-slate-500 text-sm">Core database architecture finalized and deployed.</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          <Card className="border-none shadow-sm rounded-3xl">
            <CardHeader>
              <CardTitle>Project Team</CardTitle>
              <CardDescription>Active members on this project.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {project.team.map((member, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-11 w-11 border-2 border-white shadow-sm rounded-xl">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.avatar}`} />
                      <AvatarFallback>{member.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{member.name}</p>
                      <p className="text-xs text-slate-500">{member.role}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <MessageSquare size={16} className="text-slate-400" />
                  </Button>
                </div>
              ))}
              <Separator className="my-4" />
              <Button variant="outline" className="w-full rounded-xl">
                <Plus size={16} className="mr-2" />
                Invite Member
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm rounded-3xl">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-24 flex flex-col gap-2 rounded-2xl hover:bg-blue-50 hover:border-blue-200 transition-all">
                <Paperclip size={24} className="text-blue-600" />
                <span className="text-xs font-bold">Add File</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-2 rounded-2xl hover:bg-purple-50 hover:border-purple-200 transition-all">
                <MessageSquare size={24} className="text-purple-600" />
                <span className="text-xs font-bold">Discussion</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-2 rounded-2xl hover:bg-slate-50 transition-all">
                <Settings size={24} className="text-slate-600" />
                <span className="text-xs font-bold">Settings</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-2 rounded-2xl text-red-600 hover:text-red-700 hover:bg-red-50 hover:border-red-200 transition-all">
                <ArrowLeft size={24} />
                <span className="text-xs font-bold">Archive</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;