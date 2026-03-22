"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Building2, 
  GraduationCap, 
  ShieldCheck, 
  Zap, 
  Users, 
  Globe, 
  CheckCircle2,
  Briefcase,
  Code,
  Rocket,
  Monitor,
  Brain,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LogoImg from "@/assets/logo.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="h-20 border-b border-slate-100 flex items-center justify-between px-8 md:px-20 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg">
            <img src={LogoImg} alt="NextERP Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">NextERP Systems</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#solutions" className="hover:text-blue-600 transition-colors">Solutions</a>
          <a href="#academy" className="hover:text-blue-600 transition-colors">Academy</a>
          <button onClick={() => navigate('/careers')} className="hover:text-blue-600 transition-colors">Careers</button>
          <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate('/login')} className="text-slate-600 font-semibold">Sign In</Button>
          <Button onClick={() => navigate('/apply')} className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6">Apply Now</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-8 md:px-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-xs font-bold uppercase tracking-widest animate-fade-in">
              <Rocket size={14} />
              Empowering East Africa's Digital Future
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              The Operating System for <span className="text-blue-600">Modern Enterprise.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              NextERP Systems provides world-class software solutions and professional IT training to bridge the technology gap in Africa.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button size="lg" onClick={() => navigate('/apply')} className="bg-blue-600 hover:bg-blue-700 rounded-2xl h-16 px-10 text-lg font-bold shadow-xl shadow-blue-200 group w-full sm:w-auto">
                Join Our Academy
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/login')} className="rounded-2xl h-16 px-10 text-lg font-bold border-slate-200 hover:bg-slate-50 w-full sm:w-auto">
                Access Portal
              </Button>
            </div>
          </div>

          {/* Hero Image Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="space-y-4 pt-12">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" 
                  alt="Software Development" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" 
                  alt="Computer Training" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" 
                  alt="System Design" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" 
                  alt="Students Collaborating" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 animate-bounce">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">ISO Certified</p>
                <p className="text-[10px] text-slate-500">Quality Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-20 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Projects Delivered", value: "120+", icon: Briefcase },
            { label: "Students Trained", value: "1,500+", icon: GraduationCap },
            { label: "Client Satisfaction", value: "99%", icon: CheckCircle2 },
            { label: "Years Experience", value: "7+", icon: Globe }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="inline-flex p-3 bg-white/5 rounded-2xl text-blue-400 mb-2">
                <stat.icon size={24} />
              </div>
              <h3 className="text-4xl font-bold text-white">{stat.value}</h3>
              <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-32 px-8 md:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Enterprise Solutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Custom-built software designed to scale with your organization's unique needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "School Management", desc: "Complete ERP for educational institutions from primary to university level.", icon: GraduationCap, color: "bg-blue-500" },
              { title: "Healthcare Systems", desc: "Secure patient records and hospital management for modern clinics.", icon: ShieldCheck, color: "bg-emerald-500" },
              { title: "Custom Development", desc: "Bespoke web and mobile applications built with cutting-edge tech stacks.", icon: Code, color: "bg-purple-500" }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all group rounded-3xl overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  <Button variant="ghost" className="p-0 text-blue-600 font-bold hover:bg-transparent group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section id="academy" className="py-32 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
                alt="Academy Students" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block">
              <Sparkles className="mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2">AI-Powered Learning</h4>
              <p className="text-sm text-blue-100">Our curriculum is enhanced by AI to provide personalized learning paths for every student.</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">NextERP Academy</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We train the next generation of tech leaders in East Africa. Our professional certification courses are designed by industry experts to get you job-ready.
            </p>
            <ul className="space-y-4">
              {[
                "Full-Stack Web Development",
                "Cybersecurity Professional",
                "Data Science & Analytics",
                "Mobile App Development"
              ].map((course, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={14} />
                  </div>
                  {course}
                </li>
              ))}
            </ul>
            <Button size="lg" onClick={() => navigate('/apply')} className="bg-slate-900 hover:bg-slate-800 text-white rounded-2xl h-16 px-10 text-lg font-bold">
              Browse Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-24 px-8 md:px-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">Want to join our team?</h2>
          <p className="text-xl text-blue-100">We're always looking for talented developers, designers, and educators to join our mission.</p>
          <Button size="lg" onClick={() => navigate('/careers')} className="bg-white text-blue-600 hover:bg-blue-50 rounded-2xl h-16 px-10 text-lg font-bold">
            View Careers <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-20 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg">
                <img src={LogoImg} alt="NextERP Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">NextERP Systems</span>
            </div>
            <p className="text-slate-500 max-sm leading-relaxed">
              Leading the digital transformation in East Africa through innovative software and professional training.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900">Company</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li><button onClick={() => navigate('/about')} className="hover:text-blue-600">About Us</button></li>
              <li><button onClick={() => navigate('/careers')} className="hover:text-blue-600">Careers</button></li>
              <li><button onClick={() => navigate('/apply')} className="hover:text-blue-600">Apply</button></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900">Legal</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-100 text-center text-slate-400 text-xs">
          © {new Date().getFullYear()} NextERP Systems. All rights reserved. Built by Reagan Otema & Binsobedde Najiib.
        </div>
      </footer>
    </div>
  );
};

export default Landing;