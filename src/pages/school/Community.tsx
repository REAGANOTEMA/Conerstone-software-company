"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Heart, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  ThumbsUp, 
  Share, 
  Plus,
  Search,
  Filter,
  MapPin,
  Clock,
  Star,
  Award,
  Target,
  Activity,
  Globe,
  Phone,
  Mail,
  Video,
  FileText,
  Download,
  Bell,
  Settings,
  User,
  TrendingUp,
  Coffee,
  Gamepad2,
  Music,
  Palette,
  Dumbbell,
  Camera,
  Code,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from '@/context/AuthContext';
import { showSuccess } from '@/utils/toast';

const Community = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('wellness');
  const [searchTerm, setSearchTerm] = useState('');

  // Student wellness resources
  const wellnessResources = [
    {
      id: 1,
      title: "Counseling Services",
      description: "Professional mental health support and counseling",
      category: "Mental Health",
      icon: <Heart className="w-6 h-6 text-red-500" />,
      contact: "counseling@nexterp.com",
      available: true,
      emergency: false
    },
    {
      id: 2,
      title: "Medical Center",
      description: "On-campus medical care and health services",
      category: "Physical Health",
      icon: <Activity className="w-6 h-6 text-emerald-500" />,
      contact: "+256 700 003 000",
      available: true,
      emergency: true
    },
    {
      id: 3,
      title: "Career Guidance",
      description: "Career planning and professional development support",
      category: "Career Support",
      icon: <Target className="w-6 h-6 text-blue-500" />,
      contact: "careers@nexterp.com",
      available: true,
      emergency: false
    },
    {
      id: 4,
      title: "Academic Support",
      description: "Tutoring and academic assistance programs",
      category: "Academic Support",
      icon: <BookOpen className="w-6 h-6 text-purple-500" />,
      contact: "academics@nexterp.com",
      available: true,
      emergency: false
    },
    {
      id: 5,
      title: "Financial Aid Office",
      description: "Scholarships, loans, and financial assistance",
      category: "Financial Support",
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      contact: "financial@nexterp.com",
      available: true,
      emergency: false
    },
    {
      id: 6,
      title: "Student Housing",
      description: "Accommodation and residence life support",
      category: "Housing Support",
      icon: <Home className="w-6 h-6 text-orange-500" />,
      contact: "housing@nexterp.com",
      available: true,
      emergency: false
    }
  ];

  const clubsAndOrganizations = [
    {
      id: 1,
      name: "Computer Science Club",
      description: "Programming competitions and tech workshops",
      category: "Academic",
      members: 156,
      meetingTime: "Every Tuesday, 5:00 PM",
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      name: "Entrepreneurship Society",
      description: "Business ideas and startup incubation",
      category: "Professional",
      members: 89,
      meetingTime: "Every Thursday, 6:00 PM",
      icon: <Briefcase className="w-6 h-6" />,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      id: 3,
      name: "Photography Club",
      description: "Photography workshops and exhibitions",
      category: "Creative",
      members: 67,
      meetingTime: "Every Wednesday, 4:00 PM",
      icon: <Camera className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 4,
      name: "Sports & Fitness",
      description: "Various sports activities and fitness programs",
      category: "Sports",
      members: 234,
      meetingTime: "Daily, various times",
      icon: <Dumbbell className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-600"
    },
    {
      id: 5,
      name: "Music Society",
      description: "Musical performances and jam sessions",
      category: "Creative",
      members: 78,
      meetingTime: "Every Friday, 7:00 PM",
      icon: <Music className="w-6 h-6" />,
      color: "bg-pink-100 text-pink-600"
    },
    {
      id: 6,
      name: "Art & Design",
      description: "Creative workshops and art exhibitions",
      category: "Creative",
      members: 92,
      meetingTime: "Every Monday, 5:00 PM",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      description: "Annual technology conference featuring industry leaders",
      date: "2024-04-15",
      time: "9:00 AM - 6:00 PM",
      location: "Main Auditorium",
      category: "Conference",
      attendees: 500,
      registrationRequired: true,
      image: "https://images.unsplash.com/photo-1540575161846-63b2d3a5b9c?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      title: "Spring Career Fair",
      description: "Connect with top employers and explore opportunities",
      date: "2024-04-20",
      time: "10:00 AM - 4:00 PM",
      location: "Sports Complex",
      category: "Career",
      attendees: 300,
      registrationRequired: true,
      image: "https://images.unsplash.com/photo-1515182368027-8469d896e0c?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      title: "Cultural Festival",
      description: "Celebrate diversity with music, food, and art",
      date: "2024-04-25",
      time: "12:00 PM - 10:00 PM",
      location: "Campus Grounds",
      category: "Cultural",
      attendees: 1000,
      registrationRequired: false,
      image: "https://images.unsplash.com/photo-1514528746650-b7183b5a17a5?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 4,
      title: "Hackathon Weekend",
      description: "48-hour coding competition with amazing prizes",
      date: "2024-05-01",
      time: "6:00 PM (May 1) - 6:00 PM (May 3)",
      location: "Computer Lab",
      category: "Competition",
      attendees: 150,
      registrationRequired: true,
      image: "https://images.unsplash.com/photo-1517070207929-37e1f184e3a0?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const discussionForums = [
    {
      id: 1,
      title: "Study Groups",
      description: "Find study partners and form study groups",
      posts: 1234,
      members: 567,
      lastActivity: "2 hours ago",
      category: "Academic"
    },
    {
      id: 2,
      title: "Course Discussions",
      description: "Discuss course content and get help",
      posts: 3456,
      members: 1234,
      lastActivity: "5 minutes ago",
      category: "Academic"
    },
    {
      id: 3,
      title: "Career Advice",
      description: "Share career tips and job opportunities",
      posts: 892,
      members: 445,
      lastActivity: "1 hour ago",
      category: "Career"
    },
    {
      id: 4,
      title: "Student Life",
      description: "General discussions about student experiences",
      posts: 2341,
      members: 890,
      lastActivity: "30 minutes ago",
      category: "General"
    },
    {
      id: 5,
      title: "Tech Talk",
      description: "Latest technology trends and discussions",
      posts: 1567,
      members: 678,
      lastActivity: "15 minutes ago",
      category: "Technology"
    }
  ];

  const resources = [
    {
      category: "Academic Resources",
      items: [
        { name: "Online Library", description: "Access to digital books and journals", available: true },
        { name: "Research Database", description: "Academic research papers and articles", available: true },
        { name: "Writing Center", description: "Help with academic writing", available: true },
        { name: "Math Tutoring", description: "Mathematics help and tutoring", available: true }
      ]
    },
    {
      category: "Career Resources",
      items: [
        { name: "Resume Builder", description: "Create professional resumes", available: true },
        { name: "Interview Prep", description: "Practice interview skills", available: true },
        { name: "Job Portal", description: "Student job opportunities", available: true },
        { name: "Internship Board", description: "Internship opportunities", available: true }
      ]
    },
    {
      category: "Student Life",
      items: [
        { name: "Event Calendar", description: "Upcoming campus events", available: true },
        { name: "Student Handbook", description: "Rules and guidelines", available: true },
        { name: "Campus Map", description: "Navigate the campus", available: true },
        { name: "Transportation", description: "Campus transport services", available: true }
      ]
    }
  ];

  const handleJoinClub = (clubId: number) => {
    showSuccess(`Successfully joined the club!`);
  };

  const handleRegisterEvent = (eventId: number) => {
    showSuccess(`Successfully registered for the event!`);
  };

  const handleJoinForum = (forumId: number) => {
    showSuccess(`Successfully joined the discussion forum!`);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Community</h1>
          <p className="text-slate-500">Connect with peers and access student resources</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input 
              placeholder="Search community..." 
              className="pl-10 rounded-xl w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="rounded-xl">
            <Filter size={18} />
          </Button>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="wellness" className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Student Wellness
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Resources
          </TabsTrigger>
          <TabsTrigger value="engagement" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Engagement
          </TabsTrigger>
        </TabsList>

        {/* Student Wellness Tab */}
        <TabsContent value="wellness" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wellnessResources.map((resource) => (
              <Card key={resource.id} className="border-none shadow-sm rounded-2xl hover:shadow-md transition-all">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-50 rounded-xl">
                      {resource.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <CardDescription className="text-sm">{resource.category}</CardDescription>
                    </div>
                    {resource.emergency && (
                      <Badge className="bg-red-100 text-red-800 border-none text-xs">Emergency</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm">{resource.description}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Mail className="w-4 h-4" />
                    <span>{resource.contact}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 rounded-xl"
                      onClick={() => navigate(`/community/wellness/${resource.id}`)}
                    >
                      Learn More
                    </Button>
                    {resource.available && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                        Contact
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-6">
          <div className="space-y-8">
            {resources.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="border-none shadow-sm rounded-2xl hover:shadow-md transition-all">
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <h4 className="font-semibold text-slate-900 mb-2">{item.name}</h4>
                        <p className="text-sm text-slate-600 mb-4">{item.description}</p>
                        <Button 
                          className={`w-full rounded-xl ${item.available ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                          disabled={!item.available}
                        >
                          {item.available ? 'Access' : 'Coming Soon'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Engagement Tab */}
        <TabsContent value="engagement" className="space-y-8">
          {/* Upcoming Events */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Upcoming Events</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="border-none shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-all">
                  <div className="h-48 relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/90 text-slate-900 border-none text-xs">
                        {event.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">{event.title}</h4>
                    <p className="text-sm text-slate-600 mb-3">{event.description}</p>
                    <div className="space-y-2 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {event.attendees} attending
                      </div>
                    </div>
                    <Button 
                      className="w-full rounded-xl"
                      onClick={() => handleRegisterEvent(event.id)}
                    >
                      {event.registrationRequired ? 'Register Now' : 'Join Event'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Clubs and Organizations */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Clubs & Organizations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {clubsAndOrganizations.map((club) => (
                <Card key={club.id} className="border-none shadow-sm rounded-2xl hover:shadow-md transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-xl ${club.color}`}>
                        {club.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{club.name}</h4>
                        <p className="text-sm text-slate-500">{club.category}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{club.description}</p>
                    <div className="space-y-2 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {club.members} members
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {club.meetingTime}
                      </div>
                    </div>
                    <Button 
                      className="w-full rounded-xl"
                      onClick={() => handleJoinClub(club.id)}
                    >
                      Join Club
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Discussion Forums */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Discussion Forums</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {discussionForums.map((forum) => (
                <Card key={forum.id} className="border-none shadow-sm rounded-2xl hover:shadow-md transition-all cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-slate-900">{forum.title}</h4>
                        <p className="text-sm text-slate-600">{forum.description}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {forum.category}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          {forum.posts} posts
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {forum.members} members
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {forum.lastActivity}
                      </div>
                    </div>
                    <Button 
                      className="w-full rounded-xl"
                      onClick={() => handleJoinForum(forum.id)}
                    >
                      Join Discussion
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Community;
