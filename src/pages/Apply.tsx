"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Send, 
  Upload, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  FileText,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { showSuccess, showError } from '@/utils/toast';
import { storage } from '@/lib/data-service';

const Apply = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'student', // student, staff, intern
    position: '',
    bio: '',
    location: '',
    experience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.bio) {
      showError("Please fill in all required fields.");
      return;
    }

    // Save application to local storage for directors to see
    const applications = storage.get('company_applications', []);
    const newApp = {
      ...formData,
      id: Date.now(),
      date: new Date().toISOString(),
      status: 'pending'
    };
    storage.set('company_applications', [...applications, newApp]);

    setIsSubmitted(true);
    showSuccess("Application submitted successfully!");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
        <Card className="max-w-md w-full border-none shadow-2xl rounded-3xl text-center p-8">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Application Received!</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Thank you for your interest in NextERP Systems. Our team will review your application and get back to you via email within 3-5 business days.
          </p>
          <Button onClick={() => navigate('/')} className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl h-12 font-bold">
            Return to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-8 md:px-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <Button variant="ghost" onClick={() => navigate('/')} className="text-slate-600 hover:text-blue-600">
          <ArrowLeft className="mr-2" size={18} /> Back to Home
        </Button>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side: Info */}
          <div className="md:w-1/3 space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles size={32} />
              </div>
              <h1 className="text-4xl font-bold text-slate-900">Join NextERP</h1>
              <p className="text-slate-500 leading-relaxed">
                Be part of the team building the future of enterprise management in Africa.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600 h-fit"><GraduationCap size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Student Academy</h4>
                  <p className="text-xs text-slate-500">Apply for our professional certification courses.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-2 bg-white rounded-lg shadow-sm text-emerald-600 h-fit"><Briefcase size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Career Opportunities</h4>
                  <p className="text-xs text-slate-500">Join our engineering, design, or business teams.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <Card className="flex-1 border-none shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-white border-b border-slate-100 p-8">
              <CardTitle>Application Form</CardTitle>
              <CardDescription>Tell us about yourself and why you want to join us.</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><User size={14} /> Full Name *</Label>
                    <Input 
                      placeholder="John Doe" 
                      className="rounded-xl" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><Mail size={14} /> Email Address *</Label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="rounded-xl" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><Phone size={14} /> Phone Number</Label>
                    <Input 
                      placeholder="+256..." 
                      className="rounded-xl" 
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><MapPin size={14} /> Location</Label>
                    <Input 
                      placeholder="City, Country" 
                      className="rounded-xl" 
                      value={formData.location}
                      onChange={e => setFormData({...formData, location: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>What are you applying for? *</Label>
                  <Select value={formData.type} onValueChange={val => setFormData({...formData, type: val})}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select application type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student Academy Enrollment</SelectItem>
                      <SelectItem value="staff">Full-time Staff Position</SelectItem>
                      <SelectItem value="intern">Internship Program</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><FileText size={14} /> Professional Bio / Statement *</Label>
                  <Textarea 
                    placeholder="Tell us about your background and goals..." 
                    className="rounded-xl min-h-[120px]" 
                    value={formData.bio}
                    onChange={e => setFormData({...formData, bio: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Upload CV / Portfolio (Optional)</Label>
                  <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer group">
                    <Upload className="mx-auto text-slate-400 mb-2 group-hover:text-blue-600 transition-colors" size={32} />
                    <p className="text-sm text-slate-500">Click to upload or drag and drop</p>
                    <p className="text-[10px] text-slate-400 mt-1">PDF, DOCX or ZIP (Max 10MB)</p>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl h-14 text-lg font-bold shadow-lg shadow-blue-200">
                  Submit Application <Send className="ml-2" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Apply;