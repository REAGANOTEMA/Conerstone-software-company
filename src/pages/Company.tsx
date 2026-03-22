"use client";

import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  Award, 
  Target, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  Briefcase,
  TrendingUp,
  Shield,
  Zap,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Calendar,
  Clock,
  DollarSign,
  BarChart3,
  UserCheck,
  GraduationCap,
  Code,
  Lock,
  Palette
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAuth } from '@/context/AuthContext';

const Company = () => {
  const { user } = useAuth();
  const isDirector = user?.role === 'director';
  
  const stats = [
    {
      title: "Total Projects",
      value: "127",
      change: "+12%",
      icon: <Briefcase className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Happy Clients",
      value: "89",
      change: "+8%", 
      icon: <Users className="w-6 h-6" />,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Students Trained",
      value: "1,245",
      change: "+25%",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Years Experience",
      value: "7+",
      change: "",
      icon: <Award className="w-6 h-6" />,
      color: "bg-orange-50 text-orange-600"
    }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["React/Vue/Angular", "Node.js/Python", "Database Design", "API Development"],
      projects: 45
    },
    {
      icon: <Lock className="w-8 h-8 text-emerald-600" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions and penetration testing",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Security Training"],
      projects: 28
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      title: "IT Training",
      description: "Professional training programs for individuals and organizations",
      features: ["Certification Courses", "Corporate Training", "Mentorship", "Career Guidance"],
      projects: 156
    },
    {
      icon: <Palette className="w-8 h-8 text-orange-600" />,
      title: "Graphics Design",
      description: "Creative design solutions for branding and marketing",
      features: ["Logo Design", "Brand Identity", "UI/UX Design", "Marketing Materials"],
      projects: 67
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Microsoft Office",
      description: "Complete Office suite training and automation solutions",
      features: ["Excel Advanced", "Word Processing", "PowerPoint Design", "Office Automation"],
      projects: 89
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "IT Consulting",
      description: "Strategic IT consulting and system integration services",
      features: ["System Architecture", "Cloud Migration", "Process Optimization", "Digital Transformation"],
      projects: 34
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "Expanded Training Programs",
      description: "Launched 5 new certification courses in partnership with international tech companies",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      year: "2023", 
      title: "100+ Projects Completed",
      description: "Achieved milestone of 100+ successful project deliveries across East Africa",
      icon: <Target className="w-6 h-6" />
    },
    {
      year: "2022",
      title: "ISO Certification",
      description: "Obtained ISO 9001:2015 certification for quality management systems",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2021",
      title: "Strategic Partnership",
      description: "Formed partnership with Microsoft for official training programs",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const team = [
    {
      name: "Reagan Otema",
      role: "Executive Director - Technology",
      avatar: "/src/assets/reagan.png",
      bio: "Co-founder with 10+ years experience in software development and system architecture.",
      expertise: ["Full-Stack Development", "Cloud Architecture", "Cybersecurity", "Team Leadership"],
      email: "reagan@nexterp.com",
      phone: "+256 700 000 001"
    },
    {
      name: "Binsobedde Najiib",
      role: "Executive Director - Business",
      avatar: "/src/assets/najiib.jpg", 
      bio: "Co-founder with expertise in business strategy, client relations, and project management.",
      expertise: ["Business Strategy", "Client Management", "Project Planning", "Financial Management"],
      email: "najiib@nexterp.com",
      phone: "+256 700 000 002"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechMart Uganda",
      content: "NextERP Systems delivered our e-commerce platform on time and exceeded our expectations. Their team is professional and skilled.",
      rating: 5,
      project: "E-Commerce Platform"
    },
    {
      name: "David Mwanga",
      role: "IT Director, FinanceTrust Bank",
      content: "The cybersecurity training and implementation has significantly improved our security posture. Highly recommended!",
      rating: 5,
      project: "Security Implementation"
    },
    {
      name: "Grace Nakato",
      role: "Student, Web Development Course",
      content: "The training program transformed my career. I went from zero knowledge to landing a developer job in 3 months!",
      rating: 5,
      project: "Web Development Training"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              NextERP Systems
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transforming Businesses Through Technology and Education
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl">
                <Briefcase className="mr-2" size={20} />
                View Our Work
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 rounded-xl">
                <Mail className="mr-2" size={20} />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
      </section>

      {/* Stats Overview */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.color}`}>
                    {stat.icon}
                  </div>
                  {stat.change && (
                    <Badge className="bg-emerald-100 text-emerald-800 border-none">
                      {stat.change}
                    </Badge>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                <p className="text-sm text-slate-500">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">About NextERP Systems</h2>
          <p className="text-slate-600 leading-relaxed">
            NextERP Systems is a leading technology solutions provider based in Uganda, specializing in 
            software development, cybersecurity, IT training, and digital transformation. Founded by 
            Reagan Otema and Binsobedde Najiib, we have been empowering businesses and individuals 
            with cutting-edge technology solutions since 2017.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our mission is to bridge the technology gap in Africa by providing world-class solutions 
            and training that enable businesses to thrive in the digital age. We combine technical 
            expertise with business acumen to deliver solutions that drive real results.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-slate-700">ISO 9001 Certified</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-slate-700">Microsoft Partner</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-slate-700">7+ Years Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-slate-700">1000+ Students Trained</span>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-3xl p-8 flex items-center justify-center">
          <Building2 className="w-32 h-32 text-slate-400" />
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive technology solutions and training programs designed to meet your specific needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all rounded-2xl group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-50 rounded-xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <p className="text-sm text-slate-500">{service.projects} projects</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 text-sm">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Meet the visionary leaders driving NextERP Systems forward
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-none shadow-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                    <p className="text-slate-600 mb-2">{member.role}</p>
                    <p className="text-slate-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {member.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {member.phone}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Journey</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Key milestones and achievements in our growth story
          </p>
        </div>
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  {achievement.icon}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-blue-100 text-blue-800 border-none">
                    {achievement.year}
                  </Badge>
                  <h3 className="text-lg font-semibold text-slate-900">{achievement.title}</h3>
                </div>
                <p className="text-slate-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Client Testimonials</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            What our clients and students say about working with us
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                  <p className="text-xs text-blue-600 mt-1">{testimonial.project}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-slate-50 rounded-3xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-slate-600">Ready to start your next project or training program?</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-none shadow-sm rounded-2xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
              <p className="text-slate-600 text-sm">
                Iganga, Uganda<br />
                East Africa Region
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm rounded-2xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600 text-sm">
                info@nexterp.com<br />
                support@nexterp.com
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm rounded-2xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600 text-sm">
                +256 700 000 001<br />
                +256 700 000 002
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Company;
