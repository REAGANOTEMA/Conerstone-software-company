"use client";

import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  Globe, 
  MoreHorizontal,
  Building,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { storage, initialData } from '@/lib/data-service';
import { showSuccess } from '@/utils/toast';

const Clients = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newClient, setNewClient] = useState({
    name: '',
    industry: 'Education',
    contact: '',
    email: '',
    status: 'Active',
    projects: 0,
    revenue: '$0'
  });

  useEffect(() => {
    const saved = storage.get('clients', initialData.clients);
    setClients(saved);
  }, []);

  const handleAddClient = () => {
    const id = clients.length + 1;
    const logo = `https://api.dicebear.com/7.x/initials/svg?seed=${newClient.name}`;
    const updated = storage.add('clients', { ...newClient, id, logo });
    setClients(updated);
    setIsAddOpen(false);
    showSuccess("Client added successfully!");
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Client Management</h1>
          <p className="text-slate-500">Manage your customer relationships and SaaS subscriptions.</p>
        </div>
        <Button onClick={() => setIsAddOpen(true)} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
          <Plus className="mr-2" size={18} />
          Add New Client
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Building size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Total Clients</p>
              <h3 className="text-2xl font-bold text-slate-900">{clients.length}</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
        <CardHeader className="border-b border-slate-50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input placeholder="Search clients..." className="pl-10 rounded-xl" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/50">
                <TableHead className="pl-6">Client</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead>Primary Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id} className="hover:bg-slate-50/50 transition-colors">
                  <TableCell className="pl-6">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9 rounded-lg">
                        <AvatarImage src={client.logo} />
                        <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-slate-900">{client.name}</p>
                        <p className="text-xs text-slate-500">ID: CL-00{client.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="rounded-lg">
                      {client.industry}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-700">{client.contact}</p>
                      <p className="text-xs text-slate-500">{client.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-emerald-50 text-emerald-600 border-none">
                      {client.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal size={18} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="sm:max-w-[500px] rounded-3xl">
          <DialogHeader>
            <DialogTitle>Add New Client</DialogTitle>
            <DialogDescription>Enter the client's organization details.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label>Organization Name</Label>
              <Input value={newClient.name} onChange={e => setNewClient({...newClient, name: e.target.value})} placeholder="e.g. Iganga High School" className="rounded-xl" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Industry</Label>
                <select 
                  className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm"
                  value={newClient.industry}
                  onChange={e => setNewClient({...newClient, industry: e.target.value})}
                >
                  <option value="Education">Education</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="NGO">NGO</option>
                  <option value="Transport">Transport</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label>Contact Person</Label>
                <Input value={newClient.contact} onChange={e => setNewClient({...newClient, contact: e.target.value})} placeholder="e.g. Dr. James" className="rounded-xl" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Email Address</Label>
              <Input type="email" value={newClient.email} onChange={e => setNewClient({...newClient, email: e.target.value})} placeholder="admin@company.com" className="rounded-xl" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddOpen(false)} className="rounded-xl">Cancel</Button>
            <Button onClick={handleAddClient} className="bg-blue-600 hover:bg-blue-700 rounded-xl">Add Client</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Clients;