"use client";

import React from 'react';
import { Plus, TrendingUp, Target, MousePointer2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const campaignData = [
  { name: 'Mon', leads: 12, clicks: 45 },
  { name: 'Tue', leads: 18, clicks: 52 },
  { name: 'Wed', leads: 15, clicks: 48 },
  { name: 'Thu', leads: 22, clicks: 65 },
  { name: 'Fri', leads: 30, clicks: 82 },
  { name: 'Sat', leads: 25, clicks: 70 },
  { name: 'Sun', leads: 20, clicks: 58 },
];

const campaigns = [
  { id: 1, name: "Back to School SMS Promo", channel: "SMS/Email", status: "Active", leads: 145, conversion: 12.4, budget: "$450" },
  { id: 2, name: "Hospital ERP LinkedIn Ads", channel: "Social Media", status: "Paused", leads: 82, conversion: 8.2, budget: "$1,200" },
  { id: 3, name: "NGO Charity Portal Webinar", channel: "Events", status: "Completed", leads: 210, conversion: 15.8, budget: "$300" }
];

const Marketing = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Marketing & Communications</h1>
          <p className="text-slate-500">Track campaigns, lead generation, and digital engagement.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
          <Plus size={18} />
          New Campaign
        </Button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-none shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Target size={20} /></div>
              <Badge className="bg-emerald-50 text-emerald-600 border-none">+15%</Badge>
            </div>
            <p className="text-sm text-slate-500 font-medium">Total Leads</p>
            <h3 className="text-2xl font-bold text-slate-900">437</h3>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><MousePointer2 size={20} /></div>
              <Badge className="bg-emerald-50 text-emerald-600 border-none">+8%</Badge>
            </div>
            <p className="text-sm text-slate-500 font-medium">Click Rate</p>
            <h3 className="text-2xl font-bold text-slate-900">12.4%</h3>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><TrendingUp size={20} /></div>
              <Badge className="bg-emerald-50 text-emerald-600 border-none">+22%</Badge>
            </div>
            <p className="text-sm text-slate-500 font-medium">Conversion</p>
            <h3 className="text-2xl font-bold text-slate-900">9.8%</h3>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><MessageSquare size={20} /></div>
              <Badge className="bg-slate-50 text-slate-500 border-none">Stable</Badge>
            </div>
            <p className="text-sm text-slate-500 font-medium">Engagement</p>
            <h3 className="text-2xl font-bold text-slate-900">2.4k</h3>
          </CardContent>
        </Card>
      </div>

      {/* Charts & Campaigns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Lead Performance Chart */}
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader>
            <CardTitle>Lead Generation Performance</CardTitle>
            <CardDescription>Daily lead acquisition vs. clicks</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={campaignData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="leads" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, fill: '#2563eb' }} />
                <Line type="monotone" dataKey="clicks" stroke="#7c3aed" strokeWidth={3} dot={{ r: 4, fill: '#7c3aed' }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Active Campaigns */}
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Active Campaigns</CardTitle>
            <CardDescription>Performance of current marketing efforts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {campaigns.map((camp) => (
              <div key={camp.id} className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{camp.name}</h4>
                    <p className="text-xs text-slate-500">{camp.channel}</p>
                  </div>
                  <Badge className={
                    camp.status === 'Active' 
                      ? 'bg-emerald-50 text-emerald-600 border-none' 
                      : camp.status === 'Paused'
                      ? 'bg-orange-50 text-orange-600 border-none'
                      : 'bg-slate-50 text-slate-600 border-none'
                  }>
                    {camp.status}
                  </Badge>
                </div>
                <div className="flex justify-between text-xs pt-1">
                  <span className="text-slate-500">Leads: <span className="font-bold text-slate-900">{camp.leads}</span></span>
                  <span className="text-slate-500">Conv: <span className="font-bold text-slate-900">{camp.conversion}%</span></span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full" 
                    style={{ width: `${camp.conversion}%` }}
                  ></div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">View All Campaigns</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Marketing;