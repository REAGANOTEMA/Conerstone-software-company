"use client";

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  User, 
  Shield, 
  Mail, 
  DollarSign, 
  FileText,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
  CreditCard
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import MyInformation from './MyInformation';
import PrivacySettings from './PrivacySettings';

const Profile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'information';

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Student Profile</h1>
        <p className="text-slate-500">Manage your personal details, privacy, and financial records.</p>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
        <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-100 w-full justify-start overflow-x-auto">
          <TabsTrigger value="information" className="rounded-lg px-6 flex items-center gap-2">
            <User size={16} /> My Information
          </TabsTrigger>
          <TabsTrigger value="privacy" className="rounded-lg px-6 flex items-center gap-2">
            <Shield size={16} /> Privacy Settings
          </TabsTrigger>
          <TabsTrigger value="username" className="rounded-lg px-6 flex items-center gap-2">
            <Mail size={16} /> Username & Email
          </TabsTrigger>
          <TabsTrigger value="finances" className="rounded-lg px-6 flex items-center gap-2">
            <DollarSign size={16} /> Finances
          </TabsTrigger>
          <TabsTrigger value="documents" className="rounded-lg px-6 flex items-center gap-2">
            <FileText size={16} /> Documents
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="information" className="m-0">
            <MyInformation />
          </TabsContent>
          
          <TabsContent value="privacy" className="m-0">
            <PrivacySettings />
          </TabsContent>
          
          <TabsContent value="username" className="m-0">
            <Card className="border-none shadow-sm rounded-3xl">
              <CardHeader>
                <CardTitle>Account Credentials</CardTitle>
                <CardDescription>Manage your login email and system username.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Primary Email</p>
                    <p className="font-bold text-slate-900">student@school.com</p>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-xl">Change</Button>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">System Username</p>
                    <p className="font-bold text-slate-900">STU-2024-001</p>
                  </div>
                  <Badge className="bg-blue-50 text-blue-600 border-none">Permanent</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="finances" className="m-0">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-none shadow-sm rounded-2xl bg-blue-600 text-white">
                  <CardContent className="p-6">
                    <p className="text-blue-100 text-sm font-medium">Total Balance Due</p>
                    <h3 className="text-2xl font-bold mt-1">UGX 1,250,000</h3>
                    <Button className="w-full mt-4 bg-white text-blue-600 hover:bg-blue-50 border-none rounded-xl">Pay Now</Button>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm rounded-2xl">
                  <CardContent className="p-6">
                    <p className="text-slate-500 text-sm font-medium">Last Payment</p>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">UGX 800,000</h3>
                    <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1"><CheckCircle2 size={12} /> Confirmed</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm rounded-2xl">
                  <CardContent className="p-6">
                    <p className="text-slate-500 text-sm font-medium">Next Deadline</p>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">Oct 15, 2024</h3>
                    <p className="text-xs text-orange-600 mt-1 flex items-center gap-1"><Clock size={12} /> 12 days left</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100">
                          <th className="p-4 pl-8 text-xs font-bold text-slate-500 uppercase">Invoice ID</th>
                          <th className="p-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                          <th className="p-4 text-xs font-bold text-slate-500 uppercase">Amount</th>
                          <th className="p-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                          <th className="p-4 pr-8 text-xs font-bold text-slate-500 uppercase text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {[
                          { id: 'INV-001', date: 'Sep 15, 2024', amount: 'UGX 800,000', status: 'Paid' },
                          { id: 'INV-002', date: 'Aug 10, 2024', amount: 'UGX 1,500,000', status: 'Paid' }
                        ].map((inv) => (
                          <tr key={inv.id} className="hover:bg-slate-50/30 transition-colors">
                            <td className="p-4 pl-8 font-bold text-slate-900">{inv.id}</td>
                            <td className="p-4 text-sm text-slate-500">{inv.date}</td>
                            <td className="p-4 font-bold text-slate-900">{inv.amount}</td>
                            <td className="p-4"><Badge className="bg-emerald-50 text-emerald-600 border-none">{inv.status}</Badge></td>
                            <td className="p-4 pr-8 text-right"><Button variant="ghost" size="sm" className="text-blue-600"><Download size={16} /></Button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="documents" className="m-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Admission Letter', date: 'Jan 12, 2024', type: 'Official' },
                { title: 'Term 1 Transcript', date: 'May 20, 2024', type: 'Academic' },
                { title: 'Tuition Receipt #001', date: 'Sep 15, 2024', type: 'Financial' },
                { title: 'Student ID Card Copy', date: 'Jan 15, 2024', type: 'Identity' }
              ].map((doc) => (
                <Card key={doc.title} className="border-none shadow-sm rounded-2xl hover:border-blue-200 border border-transparent transition-all group">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-100 text-slate-600 rounded-xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{doc.title}</h4>
                        <p className="text-xs text-slate-500">{doc.type} • {doc.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-xl text-slate-400 hover:text-blue-600">
                      <Download size={20} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Profile;