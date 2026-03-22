"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Calendar, 
  Clock, 
  Upload, 
  Download, 
  CheckCircle, 
  AlertCircle, 
  Edit, 
  Plus,
  Search,
  Filter,
  Star,
  MessageSquare,
  Paperclip,
  Award,
  TrendingUp,
  BookOpen,
  Target,
  Play,
  Send,
  Check,
  X,
  FileCheck,
  BarChart3,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from '@/context/AuthContext';
import { showSuccess, showError } from '@/utils/toast';

const Assignments = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  const assignments = [
    {
      id: 1,
      title: "Advanced Algorithms - Problem Set 5",
      courseName: "Advanced Algorithms",
      dueDate: "2024-03-28",
      status: "pending",
      points: 100,
      feedback: null as string | null
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Assignments</h1>
      <div className="grid gap-6">
        {assignments.map(assignment => (
          <Card key={assignment.id} className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle>{assignment.title}</CardTitle>
              <CardDescription>{assignment.courseName}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Due: {assignment.dueDate}</p>
              {assignment.feedback && <p>Feedback: {assignment.feedback}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Assignments;