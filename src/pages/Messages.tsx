"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Edit, MoreVertical, Phone, Video, Send, Paperclip, Smile, CheckCheck 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from '@/lib/utils';
import { storage } from '@/lib/data-service';
import { useAuth } from '@/context/AuthContext';
import { showSuccess } from '@/utils/toast';

const contacts = [
  { id: 1, name: "Binsobedde Najiib", role: "Technical Lead", online: true, avatar: "/src/assets/najiib.jpg" },
  { id: 2, name: "Alice Kyomugisha", role: "Senior Developer", online: false, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" },
  { id: 3, name: "Dr. James Okello", role: "Client (Iganga High)", online: true, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James" }
];

const Messages = () => {
  const { user } = useAuth();
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messageText, setMessageText] = useState("");
  const [allMessages, setAllMessages] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load saved messages on mount
  useEffect(() => {
    const saved = storage.get('messages', [
      { id: 1, contactId: 1, text: "Hey Reagan, did you review the new ERP module?", sender: 'them', time: '10:30 AM', status: 'read' },
      { id: 2, contactId: 1, text: "Just finishing up the security audit now.", sender: 'me', time: '10:35 AM', status: 'read' }
    ]);
    setAllMessages(saved);
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [allMessages, selectedContact]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!messageText.trim()) return;

    const newMessage = {
      id: Date.now(),
      contactId: selectedContact.id,
      text: messageText,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    const updated = [...allMessages, newMessage];
    setAllMessages(updated);
    storage.set('messages', updated);
    setMessageText("");

    // Simulate a reply after 2 seconds
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        contactId: selectedContact.id,
        text: `Thanks for the update! I'll check it out.`,
        sender: 'them',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'delivered'
      };
      const withReply = [...updated, reply];
      setAllMessages(withReply);
      storage.set('messages', withReply);
      showSuccess(`New message from ${selectedContact.name}`);
    }, 2000);
  };

  const currentChatMessages = allMessages.filter(m => m.contactId === selectedContact.id);

  return (
    <div className="h-[calc(100vh-12rem)] flex bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
      
      {/* Sidebar */}
      <div className="w-80 border-r border-slate-100 flex flex-col bg-slate-50/50">
        <div className="p-6 border-b border-slate-100 bg-white">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Chats</h2>
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100">
              <Edit size={20} />
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input placeholder="Search conversations..." className="pl-10 bg-slate-100 border-none h-11 rounded-xl text-sm focus-visible:ring-blue-500" />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-3 space-y-2">
            {contacts.map((contact) => {
              const lastMsg = allMessages.filter(m => m.contactId === contact.id).pop();
              return (
                <button
                  key={contact.id}
                  onClick={() => setSelectedContact(contact)}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left group",
                    selectedContact.id === contact.id 
                      ? "bg-white shadow-md border border-slate-100" 
                      : "hover:bg-white/80"
                  )}
                >
                  <div className="relative">
                    <Avatar className="h-12 w-12 border-2 border-white shadow-sm rounded-xl">
                      <AvatarImage src={contact.avatar} />
                      <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {contact.online && (
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-sm"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-slate-900 text-sm truncate">{contact.name}</p>
                      <span className="text-[10px] text-slate-400 font-medium">{lastMsg?.time || ''}</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate leading-relaxed">
                      {lastMsg ? (lastMsg.sender === 'me' ? 'You: ' : '') + lastMsg.text : 'No messages yet'}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="h-20 border-b border-slate-100 px-8 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-12 w-12 rounded-xl border-2 border-blue-50 shadow-sm">
                <AvatarImage src={selectedContact.avatar} />
                <AvatarFallback>{selectedContact.name.charAt(0)}</AvatarFallback>
              </Avatar>
              {selectedContact.online && (
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
              )}
            </div>
            <div>
              <p className="font-bold text-slate-900 text-base">{selectedContact.name}</p>
              <span className={cn("text-[10px] font-bold uppercase tracking-wider", selectedContact.online ? "text-emerald-500" : "text-slate-400")}>
                {selectedContact.online ? 'Active Now' : 'Offline'}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50">
              <Phone size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50">
              <Video size={20} />
            </Button>
            <div className="w-[1px] h-6 bg-slate-100 mx-2"></div>
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-50">
              <MoreVertical size={20} />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-8 bg-slate-50/30">
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex justify-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100">Today</span>
            </div>
            {currentChatMessages.map((msg, idx) => (
              <div key={msg.id} className={cn(
                "flex flex-col max-w-[80%] animate-in fade-in slide-in-from-bottom-2 duration-300",
                msg.sender === 'me' ? "ml-auto items-end" : "items-start"
              )}>
                <div className={cn(
                  "p-4 rounded-2xl text-sm shadow-sm leading-relaxed",
                  msg.sender === 'me' ? "bg-blue-600 text-white rounded-tr-none shadow-blue-200" : "bg-white text-slate-700 border border-slate-100 rounded-tl-none"
                )}>
                  {msg.text}
                </div>
                <div className="flex items-center gap-2 mt-2 px-1">
                  <span className="text-[10px] font-medium text-slate-400">{msg.time}</span>
                  {msg.sender === 'me' && (
                    <CheckCheck size={14} className={cn(msg.status === 'read' ? "text-blue-500" : "text-slate-300")} />
                  )}
                </div>
                {idx === currentChatMessages.length - 1 && <div ref={scrollRef} />}
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-6 bg-white border-t border-slate-100">
          <form onSubmit={handleSendMessage} className="flex items-center gap-3 bg-slate-50 rounded-2xl p-2 border border-slate-100 focus-within:border-blue-200 focus-within:bg-white focus-within:shadow-lg focus-within:shadow-blue-500/5 transition-all max-w-4xl mx-auto">
            <Button type="button" variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50"><Paperclip size={22} /></Button>
            <Input placeholder="Write a message..." className="border-none bg-transparent focus-visible:ring-0 text-sm h-11" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
            <Button type="button" variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50"><Smile size={22} /></Button>
            <Button type="submit" disabled={!messageText.trim()} className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-11 px-6 shadow-lg shadow-blue-500/20 transition-all active:scale-95 disabled:opacity-50 disabled:scale-100">
              <Send size={18} className="mr-2" /> Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Messages;