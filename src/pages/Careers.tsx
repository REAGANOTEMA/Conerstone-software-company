"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Zap, 
  Globe, 
  Users, 
  ArrowRight, 
  CheckCircle2,
  Star,
  Coffee,
  Laptop,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Careers = () => {
  const navigate = useNavigate();

  const openPositions = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Iganga / Remote",
      type: "Full-time",
      salary: "Competitive",
      icon: <Laptop className="text-blue-600" />
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Iganga, Uganda",
      type: "Full-time",
      salary: "Competitive",
      icon: <Star className="text-purple-600" />
    },
    {
      id: 3,
      title: "Academy Instructor (Web Dev)",
      department: "Training",
      location: "Iganga, Uganda",
      type: "Contract",
      salary: "Per Session",
      icon: <GraduationCap className="text-emerald-600" />
    },
    {
      id: 4,
      title: "Business Development Associate",
      department: "Sales",
      location: "Kampala / Iganga",
      type: "Full-time",
      salary: "Base + Commission",
      icon: <Briefcase className="text-orange-600" />
    }
  ];

  const benefits = [
    { title: "Continuous Learning", desc: "Free access to all NextERP Academy courses and certifications.", icon: <GraduationCap /> },
    { title: "Modern Tech Stack", desc: "Work with React, Node.js, AWS, and the latest AI tools.", icon: <Zap /> },
    { title: "Health & Wellness", desc: "Comprehensive health insurance and wellness programs.", icon: <Heart /> },
    { title: "Flexible Work", desc: "Hybrid work options and flexible hours for better balance.", icon: <Globe /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-8 md:px-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="Team working" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-blue-600 text-white border-none px-4 py-1">We're Hiring!</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Build the Future of <span className="text-blue-400">Enterprise Tech</span> in Africa
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join a team of innovators, creators, and educators dedicated to bridging the technology gap through world-class software and training.
          </p>
          <div className="pt-4">
            <Button size="lg" onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })} className="bg-blue-600 hover:bg-blue-700 rounded-2xl h-14 px-8 font-bold">
              View Open Positions <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Join NextERP Systems?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At NextERP, we don't just build software; we build careers. We foster a culture of curiosity, collaboration, and impact. Whether you're an experienced engineer or a rising star, you'll find a home here.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="space-y-2">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                  <p className="text-sm text-slate-500">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" 
                alt="Office culture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100" alt="Team" />
                  ))}
                </div>
                <div>
                  <p className="font-bold text-slate-900">Join 50+ Innovators</p>
                  <p className="text-xs text-slate-500">Growing every month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 px-8 md:px-20 bg-slate-50">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Current Openings</h2>
            <p className="text-slate-500">Find the role that matches your passion and skills.</p>
          </div>

          <div className="grid gap-4">
            {openPositions.map((job) => (
              <Card key={job.id} className="border-none shadow-sm hover:shadow-md transition-all group cursor-pointer rounded-2xl overflow-hidden" onClick={() => navigate('/apply')}>
                <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-blue-50 transition-colors">
                      {job.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-1">
                        <span className="text-xs text-slate-500 flex items-center gap-1"><Globe size={12} /> {job.location}</span>
                        <span className="text-xs text-slate-500 flex items-center gap-1"><Briefcase size={12} /> {job.department}</span>
                        <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">{job.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="rounded-xl group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    Apply Now <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-slate-500 mb-4">Don't see a role that fits? We're always looking for talent.</p>
            <Button variant="ghost" onClick={() => navigate('/apply')} className="text-blue-600 font-bold hover:bg-blue-50 rounded-xl">
              Send a Spontaneous Application
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-8 md:px-20 text-center">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} NextERP Systems • Careers Portal
        </p>
      </footer>
    </div>
  );
};

export default Careers;