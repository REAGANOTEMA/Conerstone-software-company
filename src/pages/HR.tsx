"use client";

import React, { useState, useEffect } from 'react';
import { 
  Plus, Search, Users, Calendar, Briefcase, DollarSign,
  UserPlus, FileText, MoreVertical, CheckCircle2, XCircle, Plane,
  TrendingUp, Download, Eye, CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { storage } from '@/lib/data-service';
import { showSuccess } from '@/utils/toast';
import { cn } from '@/lib/utils';
import PayslipModal from '@/components/hr/PayslipModal';

const HR = () => {
  const [employees, setEmployees] = useState<any[]>([]);
  const [leaveRequests, setLeaveRequests] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
  const [isPayslipOpen, setIsPayslipOpen] = useState(false);

  useEffect(() => {
    const savedEmployees = storage.get('employees', [
      { id: 1, name: "Reagan Otema", role: "Executive Director - Technology", department: "Executive", status: "Active", email: "reagan@nexterp.com", performance: 98, avatar: "/src/assets/reagan.png", salary: 8500000, bonus: 1200000 },
      { id: 2, name: "Binsobedde Najiib", role: "Executive Director - Business", department: "Executive", status: "Active", email: "najiib@nexterp.com", performance: 99, avatar: "/src/assets/najiib.jpg", salary: 8500000, bonus: 1100000 },
      { id: 3, name: "Alice Kyomugisha", role: "Senior Developer", department: "Engineering", status: "Active", email: "alice@nexterp.com", performance: 92, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice", salary: 4500000, bonus: 500000 },
      { id: 4, name: "John Ssekandi", role: "UI/UX Designer", department: "Design", status: "On Leave", email: "john@nexterp.com", performance: 88, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John", salary: 3800000, bonus: 300000 }
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

  const handleRejectLeave = (id: number) => {
    const updated = leaveRequests.map(l => l.id === id ? { ...l, status: 'Rejected' } : l);
    setLeaveRequests(updated);
    storage.set('leave_requests', updated);
    showSuccess("Leave request rejected!");
  };

  const formatUGX = (amount: number) =>
    new Intl.NumberFormat('en-UG', { style: 'currency', currency: 'UGX', maximumFractionDigits: 0 }).format(amount);

  const totalPayroll = employees.reduce((sum, emp) => sum + emp.salary + (emp.bonus || 0), 0);

  const filteredEmployees = employees.filter(emp => emp.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Human Resources</h1>
          <p className="text-slate-500">Manage employee records, payroll, and performance.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            <FileText className="mr-2" size={18} /> Reports
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            <UserPlus className="mr-2" size={18} /> Add Employee
          </Button>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Users size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Total Staff</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{employees.length}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><Briefcase size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Departments</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">6</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl"><Plane size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">On Leave</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{employees.filter(e => e.status === 'On Leave').length}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><DollarSign size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Monthly Payroll</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{formatUGX(totalPayroll)}</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="staff" className="w-full">
        <TabsList className="bg-white dark:bg-slate-900 p-1 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 mb-8">
          <TabsTrigger value="staff" className="rounded-lg px-8">Staff Directory</TabsTrigger>
          <TabsTrigger value="leave" className="rounded-lg px-8">Leave Management</TabsTrigger>
          <TabsTrigger value="payroll" className="rounded-lg px-8">Payroll</TabsTrigger>
        </TabsList>

        {/* Staff Directory */}
        <TabsContent value="staff" className="space-y-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input placeholder="Search employees..." className="pl-10 rounded-xl" value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button variant="ghost" size="sm" className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-lg">All Staff</Button>
              <Button variant="ghost" size="sm" className="rounded-lg">Engineering</Button>
              <Button variant="ghost" size="sm" className="rounded-lg">Design</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredEmployees.map(emp => (
              <Card key={emp.id} className="border-none shadow-sm hover:shadow-md transition-all group rounded-3xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Avatar className="h-16 w-16 border-2 border-white dark:border-slate-800 shadow-sm rounded-2xl">
                      <AvatarImage src={emp.avatar} />
                      <AvatarFallback>{emp.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical size={18} />
                    </Button>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">{emp.name}</h3>
                  <p className="text-blue-600 text-sm font-medium">{emp.role}</p>
                  <p className="text-slate-500 text-xs">{emp.department}</p>

                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500 font-medium">Performance</span>
                        <span className="font-bold text-slate-900 dark:text-white">{emp.performance}%</span>
                      </div>
                      <Progress value={emp.performance} className="h-1.5 rounded-full" />
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
                      <Badge className={cn("border-none", emp.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600')}>
                        {emp.status}
                      </Badge>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-0 h-auto font-bold">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Leave Management */}
        <TabsContent value="leave">
          <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
            <CardHeader>
              <CardTitle>Leave Requests</CardTitle>
              <CardDescription>Review and approve employee time-off requests.</CardDescription>
            </CardHeader>
            <CardContent className="p-0 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                    <th className="p-4 pl-8 text-xs font-bold text-slate-500 uppercase tracking-wider">Employee</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Duration</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Days</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="p-4 pr-8 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                  {leaveRequests.map(leave => (
                    <tr key={leave.id} className="hover:bg-slate-50/30 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 pl-8 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center font-bold text-xs">
                          {leave.employee.charAt(0)}
                        </div>
                        <span className="font-bold text-slate-900 dark:text-white text-sm">{leave.employee}</span>
                      </td>
                      <td className="p-4"><Badge variant="outline" className="rounded-lg text-[10px]">{leave.type}</Badge></td>
                      <td className="p-4 text-xs text-slate-500 flex items-center gap-1"><Calendar size={14}/>{leave.start} - {leave.end}</td>
                      <td className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">{leave.days} Days</td>
                      <td className="p-4">
                        <Badge className={cn("border-none", leave.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' : leave.status === 'Rejected' ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600')}>
                          {leave.status}
                        </Badge>
                      </td>
                      <td className="p-4 pr-8 text-right">
                        {leave.status === 'Pending' ? (
                          <div className="flex items-center justify-end gap-2">
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-emerald-600 hover:bg-emerald-50 rounded-lg" onClick={() => handleApproveLeave(leave.id)}>
                              <CheckCircle2 size={18} />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 rounded-lg" onClick={() => handleRejectLeave(leave.id)}>
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
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payroll Management */}
        <TabsContent value="payroll" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-sm bg-blue-600 text-white rounded-3xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-white/20 rounded-lg"><CreditCard size={24} /></div>
                  <Badge className="bg-white/20 text-white border-none">Next Pay: Oct 30</Badge>
                </div>
                <p className="text-blue-100 text-sm font-medium">Total Net Pay</p>
                <h3 className="text-2xl font-bold mt-1">{formatUGX(totalPayroll * 0.8)}</h3>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm bg-white dark:bg-slate-900 rounded-3xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-lg"><TrendingUp size={24} /></div>
                  <Badge className="bg-red-50 dark:bg-red-900/20 text-red-600 border-none">20% Avg</Badge>
                </div>
                <p className="text-slate-500 text-sm font-medium">Total Tax/Deductions</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{formatUGX(totalPayroll * 0.2)}</h3>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm bg-emerald-600 text-white rounded-3xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-white/20 rounded-lg"><CheckCircle2 size={24} /></div>
                  <Badge className="bg-white/20 text-white border-none">Ready</Badge>
                </div>
                <p className="text-emerald-100 text-sm font-medium">Payroll Status</p>
                <h3 className="text-2xl font-bold mt-1">Verified</h3>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
            <CardHeader className="border-b dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Employee Payroll</CardTitle>
                  <CardDescription>Manage salaries, bonuses, and generate payslips.</CardDescription>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                  <Plus size={16} className="mr-2" /> Run Payroll
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                    <th className="p-4 pl-8 text-xs font-bold text-slate-500 uppercase tracking-wider">Employee</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Base Salary</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Bonus</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Net Pay</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="p-4 pr-8 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                  {employees.map(emp => (
                    <tr key={emp.id} className="hover:bg-slate-50/30 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 pl-8">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8 rounded-lg">
                            <AvatarImage src={emp.avatar} />
                            <AvatarFallback>{emp.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-slate-900 dark:text-white text-sm">{emp.name}</p>
                            <p className="text-[10px] text-slate-500">{emp.role}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm font-medium">{formatUGX(emp.salary)}</td>
                      <td className="p-4 text-sm font-medium text-emerald-600">+{formatUGX(emp.bonus || 0)}</td>
                      <td className="p-4 text-sm font-bold text-slate-900 dark:text-white">
                        {formatUGX((emp.salary + (emp.bonus || 0)) * 0.8)}
                      </td>
                      <td className="p-4">
                        <Badge className="bg-emerald-50 text-emerald-600 border-none">Processed</Badge>
                      </td>
                      <td className="p-4 pr-8 text-right">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl"
                          onClick={() => {
                            setSelectedEmployee(emp);
                            setIsPayslipOpen(true);
                          }}
                        >
                          <Eye size={16} className="mr-2" /> Payslip
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Payslip Modal */}
      <PayslipModal 
        isOpen={isPayslipOpen} 
        onClose={() => setIsPayslipOpen(false)} 
        employee={selectedEmployee} 
      />
    </div>
  );
};

export default HR;