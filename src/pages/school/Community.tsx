"use client";

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Users, 
  Heart, 
  FileText, 
  MessageSquare, 
  Share2, 
  ThumbsUp, 
  Calendar,
  Search,
  Filter,
  Plus
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Community = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'wellness';

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Student Community</h1>
        <p className="text-slate-500">Connect with peers, access wellness resources, and join events.</p>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
        <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-100 w-full justify-start overflow-x-auto">
          <TabsTrigger value="wellness" className="rounded-lg px-6 flex items-center gap-2">
            <Heart size={16} /> Student Wellness
          </TabsTrigger>
          <TabsTrigger value="resources" className="rounded-lg px-6 flex items-center gap-2">
            <FileText size={16} /> Resources
          </TabsTrigger>
          <TabsTrigger value="engagement" className="rounded-lg px-6 flex items-center gap-2">
            <Users size={16} /> Engagement
          </TabsTrigger>
        </TabsList>

        <TabsContent value="wellness" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-sm rounded-2xl bg-emerald-50">
              <CardHeader>
                <CardTitle className="text-emerald-900">Mental Health Support</CardTitle>
                <CardDescription className="text-emerald-700">24/7 confidential counseling services.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-emerald-600 hover:bg-emerald-700 rounded-xl w-full">Talk to Someone</Button>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm rounded-2xl bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900">Fitness & Health</CardTitle>
                <CardDescription className="text-blue-700">Campus gym schedules and health tips.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl w-full">View Schedules</Button>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm rounded-2xl bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900">Peer Support Groups</CardTitle>
                <CardDescription className="text-purple-700">Join student-led interest groups.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-purple-600 hover:bg-purple-700 rounded-xl w-full">Find a Group</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="m-0">
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FileText size={20} /></div>
                <div>
                  <p className="font-bold text-slate-900">Student Handbook 2024</p>
                  <p className="text-xs text-slate-500">PDF • 2.4 MB</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-600">Download</Button>
            </div>
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><Calendar size={20} /></div>
                <div>
                  <p className="font-bold text-slate-900">Academic Calendar</p>
                  <p className="text-xs text-slate-500">Updated 2 days ago</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-600">View</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="m-0">
          <div className="space-y-6">
            <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
              <CardHeader className="border-b border-slate-50">
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Discussions</CardTitle>
                  <Button size="sm" className="bg-blue-600 rounded-xl"><Plus size={16} className="mr-2" /> New Post</Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-6 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-slate-900">Study Group for CS301</p>
                          <span className="text-[10px] text-slate-400">2 hours ago</span>
                        </div>
                        <p className="text-sm text-slate-600">Anyone interested in forming a study group for the upcoming algorithms midterm? We can meet in the library or on Zoom.</p>
                        <div className="flex items-center gap-4 pt-2">
                          <button className="flex items-center gap-1 text-xs text-slate-400 hover:text-blue-600"><ThumbsUp size={14} /> 12</button>
                          <button className="flex items-center gap-1 text-xs text-slate-400 hover:text-blue-600"><MessageSquare size={14} /> 5</button>
                          <button className="flex items-center gap-1 text-xs text-slate-400 hover:text-blue-600"><Share2 size={14} /> Share</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Community;