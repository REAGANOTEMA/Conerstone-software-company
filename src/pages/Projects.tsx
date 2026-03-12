"use client";

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter, 
  ArrowRight, 
  Calendar 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { showSuccess } from '@/utils/toast';
import { storage, initialData } from '@/lib/data-service';

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<any[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newProject, setNewProject] = useState({
    name: '',
    client: '',
    category: 'Education',
    deadline: new Date().toISOString().split('T')[0],
    progress: 0,
    status: 'Planning'
  });

  useEffect(() => {
    const saved = storage.get('projects', initialData.projects);
    setProjects(saved);
  }, []);

  // Filter projects based on search
  const filteredProjects = projects.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProject = () => {
    if (!newProject.name || !newProject.client) {
      return; // Simple validation
    }
    const id = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
    const updated = [...projects, { ...newProject, id, team: [] }];
    storage.set('projects', updated);
    setProjects(updated);
    setIsAddOpen(false);
    setNewProject({
      name: '',
      client: '',
      category: 'Education',
      deadline: new Date().toISOString().split('T')[0],
      progress: 0,
      status: 'Planning'
    });
    showSuccess("Project created successfully!");
  };

  const categoryBadge = (category: string) => {
    switch(category) {
      case 'Education': return 'bg-blue-50 text-blue-600 border-none';
      case 'Healthcare': return 'bg-emerald-50 text-emerald-600 border-none';
      case 'NGO': return 'bg-purple-50 text-purple-600 border-none';
      case 'Transport': return 'bg-orange-50 text-orange-600 border-none';
      default: return 'bg-slate-50 text-slate-600 border-none';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Projects</h1>
          <p className="text-slate-500">Manage and track all active software development projects.</p>
        </div>
        <Button onClick={() => setIsAddOpen(true)} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
          <Plus className="mr-2" size={18} /> New Project
        </Button>
      </div>

      {/* Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input 
              placeholder="Search projects..." 
              className="pl-10 rounded-xl" 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon" className="rounded-xl">
            <Filter size={18} />
          </Button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <Card 
            key={project.id} 
            className="border-none shadow-sm hover:shadow-md transition-all group cursor-pointer rounded-3xl overflow-hidden"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <Badge className={categoryBadge(project.category)}>{project.category}</Badge>
                <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={18} />
                </Button>
              </div>
              <CardTitle className="text-xl mt-4 group-hover:text-blue-600 transition-colors">{project.name}</CardTitle>
              <p className="text-sm text-slate-500">{project.client}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar size={16} />
                  <span className="text-xs font-medium">{project.deadline}</span>
                </div>
                <Badge variant="outline" className="rounded-lg">{project.status}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Project Dialog */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="sm:max-w-[500px] rounded-3xl">
          <DialogHeader>
            <DialogTitle>Create New Project</DialogTitle>
            <DialogDescription>Enter the project details to start tracking.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label>Project Name</Label>
              <Input value={newProject.name} onChange={e => setNewProject({...newProject, name: e.target.value})} placeholder="e.g. School ERP" className="rounded-xl" />
            </div>
            <div className="grid gap-2">
              <Label>Client Name</Label>
              <Input value={newProject.client} onChange={e => setNewProject({...newProject, client: e.target.value})} placeholder="e.g. Iganga High" className="rounded-xl" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Category</Label>
                <select 
                  className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm"
                  value={newProject.category}
                  onChange={e => setNewProject({...newProject, category: e.target.value})}
                >
                  <option value="Education">Education</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="NGO">NGO</option>
                  <option value="Transport">Transport</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label>Deadline</Label>
                <Input type="date" value={newProject.deadline} onChange={e => setNewProject({...newProject, deadline: e.target.value})} className="rounded-xl" />
              </div>
            </div>
          </div>
          <DialogFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsAddOpen(false)} className="rounded-xl">Cancel</Button>
            <Button onClick={handleAddProject} className="bg-blue-600 hover:bg-blue-700 rounded-xl">Create Project</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;