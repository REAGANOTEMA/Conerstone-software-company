"use client";

import React, { useState } from 'react';
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
  BookOpen,
  MoreHorizontal,
  Share2,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';

const GoToClass = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [volume, setVolume] = useState(75);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState("01:24:15");
  const [messages, setMessages] = useState([
    { user: "Dr. Sarah Johnson", text: "Welcome everyone! Today we're discussing Graph Theory.", time: "10:00 AM", isInstructor: true },
    { user: "Alice Kyomugisha", text: "Will be slides available after class?", time: "10:02 AM" },
    { user: "Dr. Sarah Johnson", text: "Yes, Alice. I'll upload them to the Resources tab.", time: "10:03 AM", isInstructor: true }
  ]);

  const participants = [
    { name: "Dr. Sarah Johnson", role: "Instructor", avatar: "SJ", isHost: true, isSpeaking: true },
    { name: "Reagan Otema", role: "Student", avatar: "RO", hasHand: false },
    { name: "Binsobedde Najiib", role: "Student", avatar: "BN", hasHand: true },
    { name: "Alice Kyomugisha", role: "Student", avatar: "AK", hasHand: false },
    { name: "John Ssekandi", role: "Student", avatar: "JS", hasHand: false }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      const newMessage = {
        user: "Reagan Otema",
        text: chatMessage,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        isInstructor: false
      };
      setMessages([...messages, newMessage]);
      setChatMessage("");
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col lg:flex-row gap-6">
      
      {/* Main Classroom Area */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Video Stream Container */}
        <div className="relative flex-1 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 group">
          {/* Main Stream with Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900">
            <div className="absolute inset-0 bg-black/20"></div>
            {/* Animated particles for live effect */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Main Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-6 z-10">
              {/* Live Indicator */}
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30 animate-pulse">
                  LIVE • {currentTime}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-white font-bold text-2xl">CS301: Advanced Algorithms</h3>
                <p className="text-slate-300">Live Lecture with Dr. Sarah Johnson</p>
                <p className="text-slate-400 text-sm">Topic: Graph Theory and Network Analysis</p>
              </div>
              
              {/* Viewer Count */}
              <div className="flex items-center justify-center gap-4 text-slate-400 text-sm">
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>{participants.length} viewers</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>Started 1h 24m ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Instructor Picture-in-Picture */}
          <div className="absolute top-6 right-6 w-48 aspect-video bg-slate-800 rounded-2xl border-2 border-slate-700 shadow-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" 
              className="w-full h-full object-cover opacity-80"
              alt="Instructor"
            />
            <div className="absolute bottom-2 left-2">
              <Badge className="bg-black/50 backdrop-blur-md text-[10px] border-none">Dr. Sarah Johnson</Badge>
            </div>
          </div>

          {/* Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-white/20 rounded-full"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </Button>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-white/20 rounded-full"
                    onClick={() => handleVolumeChange(isMuted ? 50 : 0)}
                  >
                    {isMuted ? <Volume2 size={20} className="text-slate-400" /> : <Volume2 size={20} />}
                  </Button>
                  <div className="w-24 h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer" onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const newVolume = Math.round((x / rect.width) * 100);
                    handleVolumeChange(newVolume);
                  }}>
                    <div 
                      className="h-full bg-blue-500 transition-all"
                      style={{ width: `${volume}%` }}
                    ></div>
                  </div>
                  <span className="text-white text-xs">{volume}%</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
                  <Settings size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
                  <Maximize2 size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
                  <Share2 size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Interaction Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button 
              variant={isMuted ? "outline" : "default"} 
              size="icon" 
              className={cn("rounded-xl h-12 w-12", isMuted && "text-red-500 border-red-100 bg-red-50")}
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
            </Button>
            <Button 
              variant={!isVideoOn ? "outline" : "default"} 
              size="icon" 
              className={cn("rounded-xl h-12 w-12", !isVideoOn && "text-red-500 border-red-100 bg-red-50")}
              onClick={() => setIsVideoOn(!isVideoOn)}
            >
              {!isVideoOn ? <VideoOff size={20} /> : <Video size={20} />}
            </Button>
            <div className="w-[1px] h-8 bg-slate-100 mx-2"></div>
            <Button 
              variant={isHandRaised ? "default" : "outline"} 
              size="icon" 
              className={cn("rounded-xl h-12 w-12", isHandRaised && "bg-blue-600 text-white border-blue-600")}
              onClick={() => setIsHandRaised(!isHandRaised)}
            >
              <Hand size={20} className={isHandRaised ? "animate-pulse" : ""} />
            </Button>
            <Button 
              variant={isScreenSharing ? "default" : "outline"} 
              size="icon" 
              className={cn("rounded-xl h-12 w-12", isScreenSharing && "bg-blue-600 text-white border-blue-600")}
              onClick={() => setIsScreenSharing(!isScreenSharing)}
            >
              <Monitor size={20} />
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
              <Shield size={16} className="text-emerald-500" />
              <span className="text-xs font-bold text-slate-600">Secure Connection</span>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-6">
              Leave Class
            </Button>
          </div>
        </div>
      </div>

      {/* Sidebar (Chat & Participants) */}
      <div className="w-full lg:w-96 flex flex-col gap-6">
        <Card className="flex-1 border-none shadow-sm rounded-3xl overflow-hidden flex flex-col">
          <Tabs defaultValue="chat" className="flex-1 flex flex-col">
            <CardHeader className="p-0">
              <TabsList className="w-full bg-slate-50 rounded-none h-14 border-b border-slate-100">
                <TabsTrigger value="chat" className="flex-1 data-[state=active]:bg-white rounded-none border-b-2 data-[state=active]:border-blue-600">
                  <MessageSquare size={16} className="mr-2" /> Chat
                </TabsTrigger>
                <TabsTrigger value="participants" className="flex-1 data-[state=active]:bg-white rounded-none border-b-2 data-[state=active]:border-blue-600">
                  <Users size={16} className="mr-2" /> People ({participants.length})
                </TabsTrigger>
              </TabsList>
            </CardHeader>

            <TabsContent value="chat" className="flex-1 flex flex-col m-0 overflow-hidden">
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-6">
                  {messages.map((msg, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className={cn("text-xs font-bold", msg.isInstructor ? "text-blue-600" : "text-slate-900")}>
                          {msg.user}
                        </span>
                        <span className="text-[10px] text-slate-400">{msg.time}</span>
                      </div>
                      <div className={cn(
                        "p-3 rounded-2xl text-sm",
                        msg.isInstructor ? "bg-blue-50 text-blue-900 rounded-tl-none" : "bg-slate-100 text-slate-700 rounded-tl-none"
                      )}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                <form className="flex gap-2" onSubmit={handleSendMessage}>
                  <Input 
                    placeholder="Type a message..." 
                    className="rounded-xl bg-white border-slate-200"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                  />
                  <Button size="icon" className="bg-blue-600 rounded-xl shrink-0" type="submit">
                    <Send size={18} />
                  </Button>
                </form>
              </div>
            </TabsContent>

            <TabsContent value="participants" className="flex-1 m-0 overflow-hidden">
              <ScrollArea className="h-full p-4">
                <div className="space-y-2">
                  {participants.map((p, i) => (
                    <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-2xl transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                            <AvatarFallback>{p.avatar}</AvatarFallback>
                          </Avatar>
                          {p.isSpeaking && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-white"></div>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{p.name}</p>
                          <p className="text-[10px] text-slate-500">{p.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {p.hasHand && <Hand size={14} className="text-blue-500" />}
                        {p.isHost && <Badge className="bg-blue-50 text-blue-600 border-none text-[10px]">Host</Badge>}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Class Resources Quick Access */}
        <Card className="border-none shadow-sm rounded-3xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Class Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 group hover:border-blue-200 transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg text-blue-600 shadow-sm"><FileText size={16} /></div>
                <span className="text-xs font-bold text-slate-700">Lecture_Slides_W5.pdf</span>
              </div>
              <Download size={14} className="text-slate-400 group-hover:text-blue-600" />
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 group hover:border-blue-200 transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg text-purple-600 shadow-sm"><BookOpen size={16} /></div>
                <span className="text-xs font-bold text-slate-700">Reading_List.docx</span>
              </div>
              <Download size={14} className="text-slate-400 group-hover:text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GoToClass;