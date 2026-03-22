"use client";

import React, { useState } from "react";
import {
  User,
  Bell,
  Shield,
  Globe,
  CreditCard,
  Save,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { showSuccess } from "@/utils/toast";

const Settings = () => {
  // Organization state
  const [orgData, setOrgData] = useState({
    name: "NextERP Systems",
    email: "contact@nexterp.com",
    phone: "+256 700 000 000",
    website: "https://nexterp.com",
    address: "Hamdan Building, Main Street, Iganga, Uganda",
  });

  // System preferences
  const [prefs, setPrefs] = useState({
    multiTenant: true,
    backups: true,
    maintenance: false,
  });

  // Personal profile state
  const [profile, setProfile] = useState({
    firstName: "Reagan",
    lastName: "Otema",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  });

  // Notifications state
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    projectUpdates: true,
    taskReminders: true,
    teamMessages: true,
    systemAlerts: true,
    marketingEmails: false,
  });

  // Security state
  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    sessionTimeout: true,
    loginAlerts: true,
    passwordExpiry: false,
  });

  // Billing state
  const [billing, setBilling] = useState({
    plan: "Professional",
    billingCycle: "Monthly",
    autoRenew: true,
    paymentMethod: "Credit Card",
  });

  // Handle organization data changes
  const handleOrgChange = (field: string, value: string) => {
    setOrgData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle personal profile changes
  const handleProfileChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  // Handle profile image upload
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, avatar: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle preferences toggle
  const handlePrefsToggle = (field: string) => {
    setPrefs((prev) => ({ ...prev, [field]: !prev[field as keyof typeof prefs] }));
  };

  // Handle notifications toggle
  const handleNotificationToggle = (field: string) => {
    setNotifications((prev) => ({ ...prev, [field]: !prev[field as keyof typeof notifications] }));
  };

  // Handle security toggle
  const handleSecurityToggle = (field: string) => {
    setSecurity((prev) => ({ ...prev, [field]: !prev[field as keyof typeof security] }));
  };

  // Handle billing change
  const handleBillingChange = (field: string, value: string | boolean) => {
    setBilling((prev) => ({ ...prev, [field]: value }));
  };

  // Save organization details
  const saveOrg = () => {
    showSuccess("Organization settings saved!");
  };

  // Save personal profile details
  const saveProfile = () => {
    showSuccess("Profile updated!");
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
                      <Input value={orgData.name} onChange={(e) => handleOrgChange("name", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Business Email</Label>
                      <Input value={orgData.email} onChange={(e) => handleOrgChange("email", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone Number</Label>
                      <Input value={orgData.phone} onChange={(e) => handleOrgChange("phone", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Website</Label>
                      <Input value={orgData.website} onChange={(e) => handleOrgChange("website", e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Headquarters Address</Label>
                    <Input value={orgData.address} onChange={(e) => handleOrgChange("address", e.target.value)} />
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700 flex items-center" onClick={saveOrg}>
                      <Save className="mr-2" size={18} /> Save Changes
                    </Button>
                  </div>
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
                      <input type="file" id="profile-upload" className="hidden" accept="image/*" onChange={handleImageChange} />
                      <Button variant="outline" size="sm" onClick={() => (document.querySelector('#profile-upload') as HTMLInputElement)?.click()}>
                        Change Photo
                      </Button>
                      <p className="text-xs text-slate-500">JPG, GIF or PNG. Max size of 2MB.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>First Name</Label>
                      <Input value={profile.firstName} onChange={(e) => handleProfileChange("firstName", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Last Name</Label>
                      <Input value={profile.lastName} onChange={(e) => handleProfileChange("lastName", e.target.value)} />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700 flex items-center" onClick={saveProfile}>Save Profile</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="mt-0 space-y-6">
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Choose how you want to receive notifications.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Delivery Methods</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Email Notifications</Label>
                          <p className="text-sm text-slate-500">Receive updates via email</p>
                        </div>
                        <Switch checked={notifications.emailNotifications} onCheckedChange={() => handleNotificationToggle('emailNotifications')} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Push Notifications</Label>
                          <p className="text-sm text-slate-500">Browser push notifications</p>
                        </div>
                        <Switch checked={notifications.pushNotifications} onCheckedChange={() => handleNotificationToggle('pushNotifications')} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>SMS Notifications</Label>
                          <p className="text-sm text-slate-500">Receive text messages for urgent updates</p>
                        </div>
                        <Switch checked={notifications.smsNotifications} onCheckedChange={() => handleNotificationToggle('smsNotifications')} />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Notification Types</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Project Updates</Label>
                          <p className="text-sm text-slate-500">Changes to project status and milestones</p>
                        </div>
                        <Switch checked={notifications.projectUpdates} onCheckedChange={() => handleNotificationToggle('projectUpdates')} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Task Reminders</Label>
                          <p className="text-sm text-slate-500">Deadlines and upcoming tasks</p>
                        </div>
                        <Switch checked={notifications.taskReminders} onCheckedChange={() => handleNotificationToggle('taskReminders')} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Team Messages</Label>
                          <p className="text-sm text-slate-500">Direct messages and team communications</p>
                        </div>
                        <Switch checked={notifications.teamMessages} onCheckedChange={() => handleNotificationToggle('teamMessages')} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>System Alerts</Label>
                          <p className="text-sm text-slate-500">System maintenance and security updates</p>
                        </div>
                        <Switch checked={notifications.systemAlerts} onCheckedChange={() => handleNotificationToggle('systemAlerts')} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Marketing Emails</Label>
                          <p className="text-sm text-slate-500">Product updates and promotional content</p>
                        </div>
                        <Switch checked={notifications.marketingEmails} onCheckedChange={() => handleNotificationToggle('marketingEmails')} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => showSuccess("Notification preferences saved!")}>Save Preferences</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="mt-0 space-y-6">
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security and authentication preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Authentication</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Two-Factor Authentication</Label>
                          <p className="text-sm text-slate-500">Add an extra layer of security to your account</p>
                        </div>
                        <Switch checked={security.twoFactorAuth} onCheckedChange={() => handleSecurityToggle('twoFactorAuth')} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Session Timeout</Label>
                          <p className="text-sm text-slate-500">Automatically log out after inactivity</p>
                        </div>
                        <Switch checked={security.sessionTimeout} onCheckedChange={() => handleSecurityToggle('sessionTimeout')} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Login Alerts</Label>
                          <p className="text-sm text-slate-500">Get notified of new login attempts</p>
                        </div>
                        <Switch checked={security.loginAlerts} onCheckedChange={() => handleSecurityToggle('loginAlerts')} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Password Expiry</Label>
                          <p className="text-sm text-slate-500">Require password changes every 90 days</p>
                        </div>
                        <Switch checked={security.passwordExpiry} onCheckedChange={() => handleSecurityToggle('passwordExpiry')} />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Password Management</h3>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Current Password</Label>
                          <Input type="password" placeholder="Enter current password" className="rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <Label>New Password</Label>
                          <Input type="password" placeholder="Enter new password" className="rounded-xl" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Confirm New Password</Label>
                        <Input type="password" placeholder="Confirm new password" className="rounded-xl" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => showSuccess("Security settings updated!")}>Update Security</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Billing Tab */}
            <TabsContent value="billing" className="mt-0 space-y-6">
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Billing & Plans</CardTitle>
                  <CardDescription>Manage your subscription and payment methods.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Current Plan</h3>
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-blue-900">{billing.plan} Plan</h4>
                          <p className="text-blue-600">{billing.billingCycle} billing</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-blue-900">$29</p>
                          <p className="text-sm text-blue-600">/{billing.billingCycle === 'Monthly' ? 'month' : 'year'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Billing Settings</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Auto-Renew</Label>
                          <p className="text-sm text-slate-500">Automatically renew your subscription</p>
                        </div>
                        <Switch checked={billing.autoRenew} onCheckedChange={(checked) => handleBillingChange('autoRenew', checked)} />
                      </div>
                      <div className="space-y-2">
                        <Label>Billing Cycle</Label>
                        <select 
                          className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm"
                          value={billing.billingCycle}
                          onChange={(e) => handleBillingChange('billingCycle', e.target.value)}
                        >
                          <option value="Monthly">Monthly</option>
                          <option value="Yearly">Yearly (Save 20%)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label>Payment Method</Label>
                        <div className="p-4 border border-slate-200 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <CreditCard className="text-slate-400" size={20} />
                              <div>
                                <p className="font-medium">Visa ending in 4242</p>
                                <p className="text-sm text-slate-500">Expires 12/25</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">Update</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Billing History</h3>
                    <div className="space-y-2">
                      {[
                        { date: '2024-03-15', amount: '$29.00', status: 'Paid' },
                        { date: '2024-02-15', amount: '$29.00', status: 'Paid' },
                        { date: '2024-01-15', amount: '$29.00', status: 'Paid' },
                      ].map((invoice, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                          <div>
                            <p className="font-medium">Invoice #{1000 + index}</p>
                            <p className="text-sm text-slate-500">{invoice.date}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-medium">{invoice.amount}</span>
                            <Badge className="bg-emerald-50 text-emerald-600 border-none">{invoice.status}</Badge>
                            <Button variant="outline" size="sm">Download</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => showSuccess("Billing settings updated!")}>Save Changes</Button>
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