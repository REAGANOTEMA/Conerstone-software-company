"use client";

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { 
  Mail, Phone, MapPin, Briefcase, Camera, Save, Link as LinkIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { showSuccess } from '@/utils/toast';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    location: user?.location || '',
    bio: user?.bio || '',
    avatar: user?.avatar || '',
    title: user?.title || ''
  });

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
    showSuccess("Profile updated successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 px-4">
      {/* Header Banner */}
      <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>

      {/* Profile Top Section */}
      <div className="-mt-20 relative z-10 flex flex-col md:flex-row gap-8 items-start">
        {/* Avatar */}
        <div className="relative group">
          <Avatar className="h-40 w-40 border-8 border-white shadow-2xl rounded-3xl">
            <AvatarImage src={formData.avatar} />
            <AvatarFallback className="text-4xl">{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          {isEditing && (
            <div className="absolute -bottom-2 -right-2 p-2 bg-blue-600 text-white rounded-xl shadow-lg cursor-pointer">
              <Camera size={20} />
            </div>
          )}
        </div>

        {/* Profile Info */}
        <div className="flex-1 pt-20 md:pt-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-bold text-slate-900">{formData.name}</h1>
                <Badge className="bg-blue-50 text-blue-600 border-none px-3 py-1 capitalize">
                  {user?.role}
                </Badge>
              </div>
              <p className="text-slate-500 mt-2 flex items-center gap-2">
                <Briefcase size={16} />
                NextERP Systems • {formData.title || (user?.role === 'director' ? 'Executive Board' : 'Team Member')}
              </p>
            </div>
            <div className="flex gap-3">
              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                  Edit Profile
                </Button>
              ) : (
                <>
                  <Button variant="outline" onClick={() => setIsEditing(false)} className="rounded-xl">
                    Cancel
                  </Button>
                  <Button onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-700 rounded-xl flex items-center gap-2">
                    <Save size={18} /> Save Changes
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="border-none shadow-sm rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-3 text-slate-600">
                <div className="p-2 bg-slate-50 rounded-lg"><Mail size={18} /></div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase text-slate-400">Email</p>
                  <p className="text-sm font-medium">{formData.email}</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-3 text-slate-600">
                <div className="p-2 bg-slate-50 rounded-lg"><Phone size={18} /></div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase text-slate-400">Phone</p>
                  <p className="text-sm font-medium">{formData.phone || 'Not provided'}</p>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-center gap-3 text-slate-600">
                <div className="p-2 bg-slate-50 rounded-lg"><MapPin size={18} /></div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase text-slate-400">Location</p>
                  <p className="text-sm font-medium">{formData.location || 'Not provided'}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Details / Edit Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-none shadow-sm rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg">Profile Details</CardTitle>
              <CardDescription>Update your personal information and avatar.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {isEditing ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label>Professional Title</Label>
                      <Input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="rounded-xl" placeholder="e.g. Executive Director" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 relative">
                      <Label>Avatar URL</Label>
                      <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <Input value={formData.avatar} onChange={e => setFormData({...formData, avatar: e.target.value})} className="pl-10 rounded-xl" placeholder="https://..." />
                    </div>
                    <div className="space-y-2">
                      <Label>Location</Label>
                      <Input value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="rounded-xl" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Bio</Label>
                    <Textarea value={formData.bio} onChange={e => setFormData({...formData, bio: e.target.value})} className="rounded-xl min-h-[120px]" placeholder="Write a short bio..." />
                  </div>
                </div>
              ) : (
                <p className="text-slate-600 leading-relaxed">{formData.bio || "No bio provided yet. Click edit to add one!"}</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;