"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Headphones, 
  MessageSquare, 
  BookOpen, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  AlertCircle,
  Search,
  Plus,
  ExternalLink,
  Download,
  Video,
  FileText,
  HelpCircle,
  Send,
  Calendar,
  TrendingUp,
  Star,
  Award,
  Target,
  Activity,
  Zap,
  Shield,
  Globe,
  ChevronRight,
  Filter,
  Bell,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from '@/context/AuthContext';
import { showSuccess, showError } from '@/utils/toast';

const Support = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('team');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    category: 'technical',
    priority: 'medium',
    description: '',
    attachments: []
  });

  // Success team members
  const successTeam = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Student Success Manager",
      department: "Academic Support",
      email: "sarah.j@nexterp.com",
      phone: "+256 700 001 001",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      specialization: "Academic Advising",
      available: true,
      rating: 4.9,
      responseTime: "2 hours"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Technical Support Lead",
      department: "IT Services",
      email: "michael.c@nexterp.com",
      phone: "+256 700 001 002",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      specialization: "Technical Issues",
      available: true,
      rating: 4.8,
      responseTime: "1 hour"
    },
    {
      id: 3,
      name: "Grace Namulondo",
      role: "Wellness Coordinator",
      department: "Student Services",
      email: "grace.n@nexterp.com",
      phone: "+256 700 001 003",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=grace",
      specialization: "Student Wellness",
      available: true,
      rating: 4.9,
      responseTime: "3 hours"
    },
    {
      id: 4,
      name: "David Mwanga",
      role: "Career Counselor",
      department: "Career Services",
      email: "david.m@nexterp.com",
      phone: "+256 700 001 004",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      specialization: "Career Guidance",
      available: false,
      rating: 4.7,
      responseTime: "4 hours"
    }
  ];

  const helpCategories = [
    {
      id: 1,
      title: "Technical Support",
      description: "Help with login, account issues, and system problems",
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      articles: 45,
      faq: 23,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "Academic Support",
      description: "Course registration, grades, and academic policies",
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />,
      articles: 67,
      faq: 34,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      id: 3,
      title: "Financial Aid",
      description: "Scholarships, tuition payments, and financial assistance",
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      articles: 28,
      faq: 19,
      color: "bg-green-100 text-green-600"
    },
    {
      id: 4,
      title: "Student Life",
      description: "Housing, clubs, events, and campus services",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      articles: 52,
      faq: 28,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 5,
      title: "Career Services",
      description: "Job search, resume help, and career planning",
      icon: <Target className="w-6 h-6 text-orange-600" />,
      articles: 38,
      faq: 21,
      color: "bg-orange-100 text-orange-600"
    },
    {
      id: 6,
      title: "Wellness Support",
      description: "Mental health, counseling, and wellness resources",
      icon: <Heart className="w-6 h-6 text-red-600" />,
      articles: 31,
      faq: 17,
      color: "bg-red-100 text-red-600"
    }
  ];

  const helpArticles = [
    {
      id: 1,
      title: "How to Reset Your Password",
      category: "Technical Support",
      content: "Step-by-step guide to reset your account password...",
      views: 1234,
      helpful: 89,
      lastUpdated: "2024-03-15"
    },
    {
      id: 2,
      title: "Course Registration Guide",
      category: "Academic Support",
      content: "Complete guide to registering for courses each semester...",
      views: 892,
      helpful: 76,
      lastUpdated: "2024-03-10"
    },
    {
      id: 3,
      title: "Scholarship Application Process",
      category: "Financial Aid",
      content: "How to apply for scholarships and financial aid...",
      views: 756,
      helpful: 82,
      lastUpdated: "2024-03-12"
    },
    {
      id: 4,
      title: "Mental Health Resources",
      category: "Wellness Support",
      content: "Available mental health services and how to access them...",
      views: 567,
      helpful: 91,
      lastUpdated: "2024-03-08"
    }
  ];

  const faqItems = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on 'Forgot Password' on the login page. Enter your email address and follow the instructions sent to your email.",
      category: "Technical Support",
      helpful: 45
    },
    {
      id: 2,
      question: "Where can I find my course schedule?",
      answer: "Your course schedule is available in the Academics section under 'Class Schedule'. You can also sync it with your personal calendar.",
      category: "Academic Support",
      helpful: 38
    },
    {
      id: 3,
      question: "How do I apply for scholarships?",
      answer: "Visit the Financial Aid section in your Profile to see available scholarships. Click on any scholarship to view requirements and application deadlines.",
      category: "Financial Aid",
      helpful: 52
    },
    {
      id: 4,
      question: "What mental health services are available?",
      answer: "We offer free counseling services, mental health workshops, and wellness programs. Contact the Wellness Center for confidential support.",
      category: "Wellness Support",
      helpful: 67
    }
  ];

  const companions = [
    {
      id: 1,
      name: "NextERP Mobile App",
      description: "Access all features on your mobile device",
      platform: "iOS & Android",
      features: ["Push notifications", "Offline access", "Biometric login"],
      downloadUrl: "#",
      icon: <Smartphone className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      name: "Browser Extension",
      description: "Quick access to NextERP features in your browser",
      platform: "Chrome, Firefox, Safari",
      features: ["Quick login", "Notifications", "Auto-fill forms"],
      downloadUrl: "#",
      icon: <Globe className="w-8 h-8" />,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      id: 3,
      name: "Desktop Client",
      description: "Full-featured desktop application",
      platform: "Windows, Mac, Linux",
      features: ["Offline mode", "Advanced features", "System integration"],
      downloadUrl: "#",
      icon: <Monitor className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const handleSubmitTicket = () => {
    if (!ticketForm.subject || !ticketForm.description) {
      showError('Please fill in all required fields');
      return;
    }
    
    showSuccess('Support ticket submitted successfully! We will respond within 24 hours.');
    setTicketForm({
      subject: '',
      category: 'technical',
      priority: 'medium',
      description: '',
      attachments: []
    });
  };

  const handleContactTeam = (teamMemberId: number) => {
    showSuccess('Contact request sent to team member!');
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (available: boolean) => {
    return available ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Support</h1>
          <p className="text-slate-500">Get help from our support team and access resources</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input 
              placeholder="Search help articles..." 
              className="pl-10 rounded-xl w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="rounded-xl">
            <Bell className="mr-2" size={18} />
            Notifications
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-none shadow-sm rounded-2xl hover:shadow-md transition-all cursor-pointer">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-slate-900">Call Us</h4>
            <p className="text-sm text-slate-600">+256 700 000 001</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl hover:shadow-md transition-all cursor-pointer">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-slate-900">Email Support</h4>
            <p className="text-sm text-slate-600">support@nexterp.com</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl hover:shadow-md transition-all cursor-pointer">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-slate-900">Live Chat</h4>
            <p className="text-sm text-slate-600">Available 24/7</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl hover:shadow-md transition-all cursor-pointer">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-slate-900">Help Center</h4>
            <p className="text-sm text-slate-600">Browse articles</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="team" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Success Team
          </TabsTrigger>
          <TabsTrigger value="help" className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Help Center
          </TabsTrigger>
          <TabsTrigger value="companion" className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Companion
          </TabsTrigger>
          <TabsTrigger value="tickets" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            My Tickets
          </TabsTrigger>
        </TabsList>

        {/* Success Team Tab */}
        <TabsContent value="team" className="space-y-6">
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Your Success Team
              </CardTitle>
              <CardDescription>
                Dedicated team members to help you succeed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {successTeam.map((member) => (
                  <div key={member.id} className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-slate-900">{member.name}</h4>
                          <p className="text-sm text-slate-600">{member.role}</p>
                        </div>
                        <Badge className={`${getStatusColor(member.available)} border-none text-xs`}>
                          {member.available ? 'Available' : 'Busy'}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-500 mb-2">{member.specialization}</p>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          {member.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {member.responseTime}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 rounded-xl"
                          onClick={() => handleContactTeam(member.id)}
                        >
                          <Mail className="w-4 h-4 mr-1" />
                          Email
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 rounded-xl"
                          onClick={() => handleContactTeam(member.id)}
                        >
                          <Phone className="w-4 h-4 mr-1" />
                          Call
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Help Center Tab */}
        <TabsContent value="help" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-600" />
                  Help Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {helpCategories.map((category) => (
                  <div key={category.id} className="flex items-center justify-between p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${category.color}`}>
                        {category.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{category.title}</h4>
                        <p className="text-sm text-slate-600">{category.description}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Popular Articles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {helpArticles.map((article) => (
                  <div key={article.id} className="border-b border-slate-100 pb-4 last:border-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-900 hover:text-blue-600 cursor-pointer">
                        {article.title}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-2 line-clamp-2">{article.content}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span>{article.views} views</span>
                      <span>{article.helpful}% helpful</span>
                      <span>Updated {article.lastUpdated}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-600" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {faqItems.map((faq) => (
                <div key={faq.id} className="border-b border-slate-100 pb-4 last:border-0">
                  <h4 className="font-semibold text-slate-900 mb-2 cursor-pointer hover:text-blue-600">
                    {faq.question}
                  </h4>
                  <p className="text-sm text-slate-600 mb-2">{faq.answer}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {faq.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <ThumbsUp className="w-4 h-4" />
                      {faq.helpful}% helpful
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Companion Tab */}
        <TabsContent value="companion" className="space-y-6">
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600" />
                NextERP Companion Apps
              </CardTitle>
              <CardDescription>
                Enhance your experience with our companion applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {companions.map((companion) => (
                  <Card key={companion.id} className="border border-slate-200 rounded-xl">
                    <CardContent className="p-4 text-center">
                      <div className={`w-16 h-16 ${companion.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        {companion.icon}
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2">{companion.name}</h4>
                      <p className="text-sm text-slate-600 mb-4">{companion.description}</p>
                      <div className="text-xs text-slate-500 mb-4">{companion.platform}</div>
                      <div className="space-y-2 mb-4">
                        {companion.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-3 h-3 text-emerald-600" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button className="w-full rounded-xl">
                        <Download className="mr-2" size={16} />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* My Tickets Tab */}
        <TabsContent value="tickets" className="space-y-6">
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-red-600" />
                Submit Support Ticket
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Subject *</Label>
                  <Input 
                    value={ticketForm.subject}
                    onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                    placeholder="Brief description of your issue"
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <Label>Category</Label>
                  <Select value={ticketForm.category} onValueChange={(value) => setTicketForm({...ticketForm, category: value})}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="academic">Academic Support</SelectItem>
                      <SelectItem value="financial">Financial Aid</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Priority</Label>
                  <Select value={ticketForm.priority} onValueChange={(value) => setTicketForm({...ticketForm, priority: value})}>
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
              <div>
                <Label>Description *</Label>
                <Textarea 
                  value={ticketForm.description}
                  onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                  placeholder="Provide detailed information about your issue..."
                  className="rounded-xl min-h-[120px]"
                />
              </div>
              <Button onClick={handleSubmitTicket} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                <Send className="mr-2" size={18} />
                Submit Ticket
              </Button>
            </CardContent>
          </Card>

          {/* Recent Tickets */}
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle>Recent Support Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-slate-200 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-slate-900">Login Issue</h4>
                    <p className="text-sm text-slate-600">Cannot access my account</p>
                  </div>
                  <div className="text-right">
                    <Badge className={`${getPriorityColor('high')} border-none text-xs`}>High</Badge>
                    <p className="text-xs text-slate-500 mt-1">Status: In Progress</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border border-slate-200 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-slate-900">Course Registration</h4>
                    <p className="text-sm text-slate-600">Help with registration process</p>
                  </div>
                  <div className="text-right">
                    <Badge className={`${getPriorityColor('medium')} border-none text-xs`}>Medium</Badge>
                    <p className="text-xs text-slate-500 mt-1">Status: Resolved</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Support;
