"use client";

import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Users, 
  Calendar, 
  Briefcase, 
  DollarSign,
  UserPlus,
  FileText,
  MoreVertical,
  CheckCircle2,
  XCircle,
  Clock,
  Plane
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { storage, initialData } from '@/lib/data-service';
import { showSuccess } from '@/utils/toast';

const HR = () => {
  const [employees, setEmployees] = useState<any[]>([]);
  const [leaveRequests, setLeaveRequests] = useState<any[]>([]);

  useEffect(() => {
    const savedEmployees = storage.get('employees', [
      {
        id: 1,
        name: "Reagan Otema",
        role: "Executive Director - Technology",
        department: "Executive",
        status: "Active",
        email: "reagan@nexterp.com",
        performance: 98,
        avatar: "/src/assets/reagan.png"
      },
      {
        id: 2,
        name: "Binsobedde Najiib",
        role: "Executive Director - Business",
        department: "Executive",
        status: "Active",
        email: "najiib@nexterp.com",
        performance: 99,
        avatar: "/src/assets/najiib.jpg"
      },
      {
        id: 3,
        name: "Alice Kyomugisha",
        role: "Senior Developer",
        department: "Engineering",
        status: "Active",
        email: "alice@nexterp.com",
        performance: 92,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice"
      },
      {
        id: 4,
        name: "John Ssekandi",
        role: "UI/UX Designer",
        department: "Design",
        status: "On Leave",
        email: "john@nexterp.com",
        performance: 88,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
      }
    ]);
    setEmployees(savedEmployees);

    const savedLeaves = storage.get('leave_requests', [
      { id: 1, employee: "John Ssekandi", type: "Annual Leave", start: "2024-10-10", end: "2024-10-20", status: "Approved", days: 10 },
      { id: 2, employee: "Alice Kyomugisha", type: "Sick Leave", start: "2024-10-15", end: "2024-10-16", status: "Pending", days: 1 },
      { id: 3, employee: "Binsobedde Najiib", type: "Business Trip", start: "2024-11-01", end: "2024-11-05", status: "Pending", days: 4 }
    ]);
    setLeaveRequests(savedLeaves);
  }, []);

  const handleApproveLeave = (id: number) => {
    const updated = leaveRequests.map(l => l.id === id ? { ...l, status: 'Approved' } : l);
    setLeaveRequests(updated);
    storage.set('leave_requests', updated);
    showSuccess("Leave request approved!");
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Human Resources</h1>
          <p className="text-slate-500">Manage employee records, payroll, and performance.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            <FileText className="mr-2" size={18} />
            Reports
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            <UserPlus className="mr-2" size={18} />
            Add Employee
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <Users size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Total Staff</p>
                <h3 className="text-2xl font-bold text-slate-900">{employees.length}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                <Briefcase size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Departments</p>
                <h3 className="text-2xl font-bold text-slate-900">6</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                <Plane size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">On Leave</p>
                <h3 className="text-2xl font-bold text-slate-900">{employees.filter(e => e.status === 'On Leave').length}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                <DollarSign size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Monthly Payroll</p>
                <h3 className="text-2xl font-bold text-slate-900">UGX 32M</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="staff" className="w-full">
        <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-100 mb-8">
          <TabsTrigger value="staff" className="rounded-lg px-8">Staff Directory</TabsTrigger>
          <TabsTrigger value="leave" className="rounded-lg px-8">Leave Management</TabsTrigger>
          <TabsTrigger value="payroll" className="rounded-lg px-8">Payroll</TabsTrigger>
        </TabsList>

        <TabsContent value="staff" className="space-y-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl shadow-sm">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input placeholder="Search employees..." className="pl-10 rounded-xl" />
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="bg-blue-50 text-blue-600 rounded-lg">All Staff</Button>
              <Button variant="ghost" size="sm" className="rounded-lg">Engineering</Button>
              <Button variant="ghost" size="sm" className="rounded-lg">Design</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {employees.map((emp) => (
              <Card key={emp.id} className="border-none shadow-sm hover:shadow-md transition-all group rounded-3xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Avatar className="h-16 w-16 border-2 border-white shadow-sm rounded-2xl">
                      <AvatarImage src={emp.avatar} />
                      <AvatarFallback>{emp.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical size={18} />
                    </Button>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-lg">{emp.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{emp.role}</p>
                    <p className="text-slate-500 text-xs">{emp.department}</p>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500 font-medium">Performance</span>
                        <span className="font-bold text-slate-900">{emp.performance}%</span>
                      </div>
                      <Progress value={emp.performance} className="h-1.5 rounded-full" />
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <Badge className={cn(
                        "border-none",
                        emp.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'
                      )}>
                        {emp.status}
                      </Badge>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-bold">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="leave">
          <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
            <CardHeader>
              <CardTitle>Leave Requests</CardTitle>
              <CardDescription>Review and approve employee time-off requests.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-100">
                      <th className="p-4 pl-8 text-xs font-bold text-slate-500 uppercase tracking-wider">Employee</th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Duration</th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Days</th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="p-4 pr-8 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {leaveRequests.map((leave) => (
                      <tr key={leave.id} className="hover:bg-slate-50/30 transition-colors">
                        <td className="p-4 pl-8">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                              {leave.employee.charAt(0)}
                            </div>
                            <span className="font-bold text-slate-900 text-sm">{leave.employee}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline" className="rounded-lg text-[10px]">{leave.type}</Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Calendar size={14} />
                            <span>{leave.start} to {leave.end}</span>
                          </div>
                        </td>
                        <td className="p-4 text-sm font-bold text-slate-700">{leave.days} Days</td>
                        <td className="p-4">
                          <Badge className={cn(
                            "border-none",
                            leave.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'
                          )}>
                            {leave.status}
                          </Badge>
                        </td>
                        <td className="p-4 pr-8 text-right">
                          {leave.status === 'Pending' ? (
                            <div className="flex items-center justify-end gap-2">
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="h-8 w-8 p-0 text-emerald-600 hover:bg-emerald-50 rounded-lg"
                                onClick={() => handleApproveLeave(leave.id)}
                              >
                                <CheckCircle2 size={18} />
                              </Button>
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 rounded-lg">
                                <XCircle size={18} />
                              </Button>
                            </div>
                          ) : (
                            <Button variant="ghost" size="sm" className="text-slate-400 h-8 rounded-lg">View Details</Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HR;