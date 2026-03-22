"use client";

import React from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  Settings, 
  Maximize2, 
  MessageSquare, 
  Users, 
  Hand, 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  Monitor, 
  X,
  Send,
  FileText,
  Download,
  Clock,
  Calendar,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const GoToClass = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Virtual Classroom</h1>
      <div className="aspect-video bg-slate-900 rounded-3xl flex items-center justify-center">
        <Play className="w-20 h-20 text-white opacity-50" />
      </div>
    </div>
  );
};

export default GoToClass;