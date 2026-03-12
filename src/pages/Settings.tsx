"use client";

import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  CreditCard, 
  Save, 
  Building2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { showSuccess } from '@/utils/toast';

const Settings = () => {
  // Organization state
  const [orgData, setOrgData] = useState({
    name: 'NextERP Systems',
    email: 'contact@nexterp.com',
    phone: '+256 700 000 000',
    website: 'https://nexterp.com',
    address: 'Hamdan Building, Main Street, Iganga, Uganda'
  });

  // System preferences
  const [prefs, setPrefs] = useState({
    multiTenant: true,
    backups: true,
    maintenance: false
  });

  // Personal profile
  const [profile, setProfile] = useState({
    firstName: 'Reagan',
    lastName: 'Otema',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  });

  const handleOrgChange = (field: string, value: string) => {
    setOrgData(prev => ({ ...prev, [field]: value }));
  };

  const handleProfileChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handlePrefsToggle = (field: string) => {
    setPrefs(prev => ({ ...prev, [field]: !prev[field as keyof typeof prefs] }));
  };

  const saveOrg = () => {
    showSuccess('Organization settings saved!');
  };

  const saveProfile = () => {
    showSuccess('Profile updated!');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500">Manage your account, organization, and system preferences.</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Tabs */}
          <TabsList className="flex flex-col h-auto bg-transparent space-y-1 w-full md:w-64">
            <TabsTrigger value="general" className="justify-start px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl flex items-center">
              <Building2 className="mr-3" size={18} /> Organization
            </TabsTrigger>
            <TabsTrigger value="profile" className="justify-start px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl flex items-center">
              <User className="mr-3" size={18} /> My Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="justify-start px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl flex items-center">
              <Bell className="mr-3" size={18} /> Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="justify-start px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl flex items-center">
              <Shield className="mr-3" size={18} /> Security
            </TabsTrigger>
            <TabsTrigger value="billing" className="justify-start px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl flex items-center">
              <CreditCard className="mr-3" size={18} /> Billing & Plans
            </TabsTrigger>
          </TabsList>

          <div className="flex-1">
            {/* Organization Tab */}
            <TabsContent value="general" className="mt-0 space-y-6">
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Organization Profile</CardTitle>
                  <CardDescription>Update your company information and branding.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Organization Name</Label>
                      <Input value={orgData.name} onChange={e => handleOrgChange('name', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Business Email</Label>
                      <Input value={orgData.email} onChange={e => handleOrgChange('email', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone Number</Label>
                      <Input value={orgData.phone} onChange={e => handleOrgChange('phone', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Website</Label>
                      <Input value={orgData.website} onChange={e => handleOrgChange('website', e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Headquarters Address</Label>
                    <Input value={orgData.address} onChange={e => handleOrgChange('address', e.target.value)} />
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700 flex items-center" onClick={saveOrg}>
                      <Save className="mr-2" size={18} /> Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>System Preferences</CardTitle>
                  <CardDescription>Configure global system behavior.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {Object.entries(prefs).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>{key === 'multiTenant' ? 'Multi-tenant Isolation' : key === 'backups' ? 'Automatic Backups' : 'Maintenance Mode'}</Label>
                          <p className="text-sm text-slate-500">
                            {key === 'multiTenant' && 'Strict data separation between client organizations.'}
                            {key === 'backups' && 'Daily database backups to secure cloud storage.'}
                            {key === 'maintenance' && 'Temporarily disable access for system updates.'}
                          </p>
                        </div>
                        <Switch checked={value} onCheckedChange={() => handlePrefsToggle(key)} />
                      </div>
                      <Separator className="my-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="mt-0">
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Manage your personal details and avatar.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6 mb-6">
                    <Avatar className="h-24 w-24 border-4 border-white shadow-md">
                      <AvatarImage src={profile.avatar} />
                      <AvatarFallback>RO</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm">Change Photo</Button>
                      <p className="text-xs text-slate-500">JPG, GIF or PNG. Max size of 2MB.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>First Name</Label>
                      <Input value={profile.firstName} onChange={e => handleProfileChange('firstName', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Last Name</Label>
                      <Input value={profile.lastName} onChange={e => handleProfileChange('lastName', e.target.value)} />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700 flex items-center" onClick={saveProfile}>Save Profile</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Placeholder Tabs */}
            <TabsContent value="notifications" className="mt-0">
              <Card className="border-none shadow-sm p-6 text-slate-500">Notifications settings coming soon...</Card>
            </TabsContent>
            <TabsContent value="security" className="mt-0">
              <Card className="border-none shadow-sm p-6 text-slate-500">Security settings coming soon...</Card>
            </TabsContent>
            <TabsContent value="billing" className="mt-0">
              <Card className="border-none shadow-sm p-6 text-slate-500">Billing & Plans settings coming soon...</Card>
            </TabsContent>

          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Settings;