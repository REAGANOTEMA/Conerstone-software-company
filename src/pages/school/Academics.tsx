"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  TrendingUp, 
  Calendar, 
  Users, 
  Play, 
  Clock, 
  Award,
  Target,
  BarChart3,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Video,
  MessageSquare,
  Download,
  Star,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/context/AuthContext';

const Academics = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('program');

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Academics</h1>
          <p className="text-slate-500">Manage your academic journey and stay on track</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="program">My Program</TabsTrigger>
          <TabsTrigger value="progress">Degree Progress</TabsTrigger>
          <TabsTrigger value="class">Go to Class</TabsTrigger>
          <TabsTrigger value="schedule">Class Schedule</TabsTrigger>
        </TabsList>
        <TabsContent value="program">
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader><CardTitle>Program Overview</CardTitle></CardHeader>
            <CardContent><p>Academic program details for {user?.name}</p></CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Academics;