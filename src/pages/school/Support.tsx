"use client";

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Headphones, 
  Users, 
  HelpCircle, 
  MessageSquare, 
  Mail, 
  Phone, 
  Search,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Support = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'team';

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Help & Support</h1>
        <p className="text-slate-500">Get the assistance you need from our team or AI companion.</p>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
        <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-100 w-full justify-start overflow-x-auto">
          <TabsTrigger value="team" className="rounded-lg px-6 flex items-center gap-2">
            <Users size={16} /> My Success Team
          </TabsTrigger>
          <TabsTrigger value="help" className="rounded-lg px-6 flex items-center gap-2">
            <HelpCircle size={16} /> Help Center
          </TabsTrigger>
          <TabsTrigger value="companion" className="rounded-lg px-6 flex items-center gap-2">
            <Sparkles size={16} /> AI Companion
          </TabsTrigger>
        </TabsList>

        <TabsContent value="team" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm rounded-3xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=advisor" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">Dr. Sarah Johnson</h3>
                    <p className="text-sm text-blue-600 font-medium">Academic Advisor</p>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline" className="rounded-xl"><Mail size={14} className="mr-2" /> Email</Button>
                      <Button size="sm" className="bg-blue-600 rounded-xl">Book Meeting</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm rounded-3xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=finance" />
                    <AvatarFallback>FC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">James Okello</h3>
                    <p className="text-sm text-emerald-600 font-medium">Financial Counselor</p>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline" className="rounded-xl"><Mail size={14} className="mr-2" /> Email</Button>
                      <Button size="sm" className="bg-emerald-600 rounded-xl">Inquiry</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="help" className="m-0">
          <div className="space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <Input placeholder="Search for help articles, guides, and FAQs..." className="pl-12 h-14 rounded-2xl bg-white border-slate-200 shadow-sm" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Registration Guide', 'Fee Payment Methods', 'Accessing Course Material', 'Exam Regulations'].map((item) => (
                <button key={item} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all text-left group">
                  <span className="font-bold text-slate-700 group-hover:text-blue-600">{item}</span>
                  <ChevronRight size={18} className="text-slate-400 group-hover:text-blue-600" />
                </button>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="companion" className="m-0">
          <Card className="border-none shadow-sm rounded-3xl bg-slate-900 text-white overflow-hidden">
            <CardHeader className="bg-blue-600 p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-xl"><Sparkles size={24} /></div>
                <div>
                  <CardTitle>NextERP AI Companion</CardTitle>
                  <CardDescription className="text-blue-100">Ask me anything about your courses, schedule, or campus life.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 h-80 flex flex-col justify-end">
              <div className="space-y-4 mb-6">
                <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
                  <p className="text-sm">Hello! I'm your AI academic assistant. How can I help you today?</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Input className="bg-slate-800 border-slate-700 text-white rounded-xl h-12" placeholder="Type your question..." />
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl h-12 px-6">Send</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Support;