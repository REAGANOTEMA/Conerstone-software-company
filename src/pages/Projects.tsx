"use client";

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter,
  Users,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Eye,
  Download,
  Settings,
  BarChart3,
  Target,
  Activity,
  UserCheck,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { showSuccess, showError } from '@/utils/toast';
import { storage, initialData } from '@/lib/data-service';
import { useAuth } from '@/context/AuthContext';
import { 
  SAMPLE_PROJECTS, 
  PROJECT_CATEGORIES, 
  PROJECT_STATUS_COLORS, 
  PRIORITY_COLORS,
  CATEGORY_IMAGES,
  Project 
} from '@/data/projects';

const Projects = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [newProject, setNewProject] = useState({
    name: '',
    client: '',
    clientId: '',
    category: PROJECT_CATEGORIES[0],
    description: '',
    budget: '',
    startDate: new Date().toISOString().split('T')[0],
    estimatedEndDate: '',
    priority: 'medium' as const,
    clientAccess: true
  });

  useEffect(() => {
    // Load sample projects if none exist
    const savedProjects = storage.get('projects', []);
    if (savedProjects.length === 0) {
      storage.set('projects', SAMPLE_PROJECTS);
      setProjects(SAMPLE_PROJECTS);
    } else {
      setProjects(savedProjects);
    }
  }, []);

  // Filter projects based on search and filters
  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         p.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || p.status === selectedStatus;
    
    // Client users can only see their own projects
    const isClient = user?.role === 'client';
    const canAccess = !isClient || p.clientId === user?.id || p.clientAccess;
    
    return matchesSearch && matchesCategory && matchesStatus && canAccess;
  });

  const handleAddProject = () => {
    if (!newProject.name || !newProject.client || !newProject.clientId) {
      showError('Please fill in all required fields');
      return;
    }
    
    const projectData: Project = {
      id: `proj_${Date.now()}`,
      name: newProject.name,
      client: newProject.client,
      clientId: newProject.clientId,
      description: newProject.description,
      category: newProject.category,
      status: 'planning',
      priority: newProject.priority,
      startDate: newProject.startDate,
      estimatedEndDate: newProject.estimatedEndDate,
      budget: newProject.budget,
      spent: 'UGX 0',
      progress: 0,
      team: [],
      milestones: [],
      tasks: [],
      documents: [],
      updates: [],
      technologies: [],
      image: CATEGORY_IMAGES[newProject.category],
      clientAccess: newProject.clientAccess,
      lastUpdated: new Date().toISOString()
    };
    
    const updated = [...projects, projectData];
    storage.set('projects', updated);
    setProjects(updated);
    setIsAddOpen(false);
    setNewProject({
      name: '',
      client: '',
      clientId: '',
      category: PROJECT_CATEGORIES[0],
      description: '',
      budget: '',
      startDate: new Date().toISOString().split('T')[0],
      estimatedEndDate: '',
      priority: 'medium',
      clientAccess: true
    });
    showSuccess("Project created successfully!");
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'in-progress': return <Activity className="w-4 h-4" />;
      case 'planning': return <Clock className="w-4 h-4" />;
      case 'testing': return <AlertCircle className="w-4 h-4" />;
      case 'on-hold': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch(priority) {
      case 'urgent': return <AlertCircle className="w-4 h-4 text-red-600" />;
      case 'high': return <TrendingUp className="w-4 h-4 text-orange-600" />;
      case 'medium': return <Target className="w-4 h-4 text-yellow-600" />;
      case 'low': return <CheckCircle className="w-4 h-4 text-green-600" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  const isDirector = user?.role === 'director';
  const isClient = user?.role === 'client';
  const canCreateProject = isDirector || user?.role === 'staff';
  
  // Calculate stats
  const totalProjects = projects.length;
  const activeProjects = projects.filter(p => p.status === 'in-progress').length;
  const completedProjects = projects.filter(p => p.status === 'completed').length;
  const totalBudget = projects.reduce((sum, p) => {
    const amount = parseInt(p.budget.replace(/[^0-9]/g, '')) || 0;
    return sum + amount;
  }, 0);
  const totalSpent = projects.reduce((sum, p) => {
    const amount = parseInt(p.spent.replace(/[^0-9]/g, '')) || 0;
    return sum + amount;
  }, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Project Management</h1>
          <p className="text-slate-500">
            {isClient ? "Monitor your project progress and communicate with our team." :
             isDirector ? "Oversee all projects and manage client relationships." :
             "Track development projects and team performance."}
          </p>
        </div>
        {canCreateProject && (
          <Button onClick={() => setIsAddOpen(true)} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            <Plus className="mr-2" size={18} /> New Project
          </Button>
        )}
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Briefcase size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Total Projects</p>
              <h3 className="text-2xl font-bold text-slate-900">{totalProjects}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><Activity size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Active</p>
              <h3 className="text-2xl font-bold text-slate-900">{activeProjects}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-xl"><CheckCircle size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Completed</p>
              <h3 className="text-2xl font-bold text-slate-900">{completedProjects}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl"><DollarSign size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Total Budget</p>
              <h3 className="text-2xl font-bold text-slate-900">UGX {totalBudget.toLocaleString()}</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input 
              placeholder="Search projects by name, client, or description..." 
              className="pl-10 rounded-xl" 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 rounded-xl">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {PROJECT_CATEGORIES.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-40 rounded-xl">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="planning">Planning</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="testing">Testing</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="on-hold">On Hold</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" className="rounded-xl">
              <Filter size={18} />
            </Button>
          </div>
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
            <div className="h-48 relative overflow-hidden">
              <img 
                src={project.image || 'https://images.unsplash.com/photo-1559028012-c4848dbe6c6f?auto=format&fit=crop&q=80&w=400'} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className={PROJECT_STATUS_COLORS[project.status]}>
                  {getStatusIcon(project.status)}
                  <span className="ml-1">{project.status}</span>
                </Badge>
                <Badge className={PRIORITY_COLORS[project.priority]}>
                  {getPriorityIcon(project.priority)}
                  <span className="ml-1 capitalize">{project.priority}</span>
                </Badge>
              </div>
              {project.clientAccess && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-emerald-100 text-emerald-800 border-none">
                    <UserCheck className="w-3 h-3 mr-1" />
                    Client Access
                  </Badge>
                </div>
              )}
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-xl mt-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                {project.name}
              </CardTitle>
              <CardDescription className="text-sm flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {project.client}
              </CardDescription>
              <p className="text-sm text-slate-600 line-clamp-2 mt-2">{project.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(project.estimatedEndDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Users className="w-4 h-4" />
                  <span>{project.team.length} Team</span>
                </div>
              </div>
              
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">+{project.technologies.length - 3}</Badge>
                  )}
                </div>
              )}
            </CardContent>
            <CardFooter className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-900">{project.budget}</span>
                <span className="text-xs text-slate-500">of {project.spent} spent</span>
              </div>
              <div className="flex items-center gap-1 text-blue-600">
                <Eye size={16} />
                <span className="text-sm">View Details</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Add Project Dialog */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="sm:max-w-[600px] rounded-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create New Project</DialogTitle>
            <DialogDescription>Enter project details to start tracking client work.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Project Name *</Label>
                <Input 
                  value={newProject.name} 
                  onChange={e => setNewProject({...newProject, name: e.target.value})} 
                  placeholder="e.g. E-Commerce Platform" 
                  className="rounded-xl" 
                />
              </div>
              <div className="grid gap-2">
                <Label>Client Name *</Label>
                <Input 
                  value={newProject.client} 
                  onChange={e => setNewProject({...newProject, client: e.target.value})} 
                  placeholder="e.g. TechMart Uganda" 
                  className="rounded-xl" 
                />
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label>Client ID *</Label>
              <Input 
                value={newProject.clientId} 
                onChange={e => setNewProject({...newProject, clientId: e.target.value})} 
                placeholder="e.g. client_techmart" 
                className="rounded-xl" 
              />
            </div>
            
            <div className="grid gap-2">
              <Label>Project Description</Label>
              <textarea 
                value={newProject.description}
                onChange={e => setNewProject({...newProject, description: e.target.value})}
                placeholder="Describe the project scope and objectives..."
                className="flex min-h-[80px] w-full rounded-xl border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Category</Label>
                <Select value={newProject.category} onValueChange={(value) => setNewProject({...newProject, category: value})}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {PROJECT_CATEGORIES.map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Priority</Label>
                <Select value={newProject.priority} onValueChange={(value: any) => setNewProject({...newProject, priority: value})}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Budget (UGX)</Label>
                <Input 
                  value={newProject.budget} 
                  onChange={e => setNewProject({...newProject, budget: e.target.value})} 
                  placeholder="e.g. 10,000,000" 
                  className="rounded-xl" 
                />
              </div>
              <div className="grid gap-2">
                <Label>Start Date</Label>
                <Input 
                  type="date" 
                  value={newProject.startDate} 
                  onChange={e => setNewProject({...newProject, startDate: e.target.value})} 
                  className="rounded-xl" 
                />
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label>Estimated End Date</Label>
              <Input 
                type="date" 
                value={newProject.estimatedEndDate} 
                onChange={e => setNewProject({...newProject, estimatedEndDate: e.target.value})} 
                className="rounded-xl" 
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="client-access"
                checked={newProject.clientAccess}
                onChange={(e) => setNewProject({...newProject, clientAccess: e.target.checked})}
                className="rounded"
              />
              <Label htmlFor="client-access" className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-600" />
                Allow client access to this project
              </Label>
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