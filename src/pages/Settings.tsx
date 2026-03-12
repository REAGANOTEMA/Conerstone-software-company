"use client";

import React from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  CreditCard, 
  Database,
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

const Settings = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500">Manage your account, organization, and system preferences.</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <div className="flex flex-col md:flex-row gap-8">
          <TabsList className="flex flex-col h-auto bg-transparent space-y-1 w-full md:w-64">
            <TabsTrigger value="general" className="justify-start px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl">
              <Building2 className="mr-3" size={18} />
              Organization
            </TabsTrigger>
            <TabsTrigger value="profile" className="justify-start px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl">
              <User className="mr-3" size={18} />
              My Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="justify-start px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl">
              <Bell className="mr-3" size={18} />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="justify-start px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl">
              <Shield className="mr-3" size={18} />
              Security
            </TabsTrigger>
            <TabsTrigger value="billing" className="justify-start px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl">
              <CreditCard className="mr-3" size={18} />
              Billing & Plans
            </TabsTrigger>
          </TabsList>

          <div className="flex-1">
            <TabsContent value="general" className="mt-0 space-y-6">
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Organization Profile</CardTitle>
                  <CardDescription>Update your company information and branding.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="org-name">Organization Name</Label>
                      <Input id="org-name" defaultValue="NextERP Systems" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="org-email">Business Email</Label>
                      <Input id="org-email" defaultValue="contact@nexterp.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="org-phone">Phone Number</Label>
                      <Input id="org-phone" defaultValue="+256 700 000 000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="org-website">Website</Label>
                      <Input id="org-website" defaultValue="https://nexterp.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="org-address">Headquarters Address</Label>
                    <Input id="org-address" defaultValue="Hamdan Building, Main Street, Iganga, Uganda" />
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Save className="mr-2" size={18} />
                      Save Changes
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
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Multi-tenant Isolation</Label>
                      <p className="text-sm text-slate-500">Strict data separation between client organizations.</p>
                    </div>
                    <Switch checked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Automatic Backups</Label>
                      <p className="text-sm text-slate-500">Daily database backups to secure cloud storage.</p>
                    </div>
                    <Switch checked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Maintenance Mode</Label>
                      <p className="text-sm text-slate-500">Temporarily disable access for system updates.</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="mt-0">
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Manage your personal details and avatar.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6 mb-6">
                    <Avatar className="h-24 w-24 border-4 border-white shadow-md">
                      <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" />
                      <AvatarFallback>RO</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm">Change Photo</Button>
                      <p className="text-xs text-slate-500">JPG, GIF or PNG. Max size of 2MB.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" defaultValue="Reagan" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="Otema" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700">Save Profile</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Settings;