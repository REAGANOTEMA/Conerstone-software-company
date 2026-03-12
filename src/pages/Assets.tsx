"use client";

import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Monitor, 
  Globe, 
  Key, 
  MoreVertical,
  Wrench,
  X,
  Upload
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

const Assets = () => {
  const [assets, setAssets] = useState<any[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newAsset, setNewAsset] = useState({
    name: '',
    category: 'Hardware',
    owner: '',
    status: 'Active',
    value: '',
    purchaseDate: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    const saved = storage.get('assets', initialData.assets);
    setAssets(saved);
  }, []);

  const handleAddAsset = () => {
    const id = `AST-${Math.floor(100 + Math.random() * 900)}`;
    const updated = storage.add('assets', { ...newAsset, id });
    setAssets(updated);
    setIsAddOpen(false);
    setNewAsset({ name: '', category: 'Hardware', owner: '', status: 'Active', value: '', purchaseDate: new Date().toISOString().split('T')[0] });
    showSuccess("Asset added successfully!");
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Assets & Inventory</h1>
          <p className="text-slate-500">Track and manage company hardware, digital assets, and licenses.</p>
        </div>
        <Button onClick={() => setIsAddOpen(true)} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
          <Plus className="mr-2" size={18} />
          Add Asset
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Monitor size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Hardware</p>
              <h3 className="text-2xl font-bold text-slate-900">{assets.filter(a => a.category === 'Hardware').length}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Globe size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Digital Assets</p>
              <h3 className="text-2xl font-bold text-slate-900">{assets.filter(a => a.category === 'Digital').length}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <Key size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Licenses</p>
              <h3 className="text-2xl font-bold text-slate-900">{assets.filter(a => a.category === 'License').length}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
              <Wrench size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">In Maintenance</p>
              <h3 className="text-2xl font-bold text-slate-900">{assets.filter(a => a.status === 'Maintenance').length}</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input placeholder="Search assets..." className="pl-10 rounded-xl" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-xl">Filter</Button>
              <Button variant="outline" size="sm" className="rounded-xl">Export CSV</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/50">
                <TableHead className="pl-6">Asset ID</TableHead>
                <TableHead>Asset Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Value</TableHead>
                <TableHead className="text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assets.map((asset) => (
                <TableRow key={asset.id} className="hover:bg-slate-50/50 transition-colors">
                  <TableCell className="pl-6 font-medium text-slate-500">{asset.id}</TableCell>
                  <TableCell className="font-semibold text-slate-900">{asset.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 rounded-lg">
                      {asset.category}
                    </Badge>
                  </TableCell>
                  <TableCell>{asset.owner}</TableCell>
                  <TableCell>
                    <Badge className={
                      asset.status === 'Active' 
                        ? 'bg-emerald-50 text-emerald-600 border-none' 
                        : 'bg-orange-50 text-orange-600 border-none'
                    }>
                      {asset.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-bold">{asset.value}</TableCell>
                  <TableCell className="text-right pr-6">
                    <Button variant="ghost" size="icon">
                      <MoreVertical size={18} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Asset Dialog */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="sm:max-w-[500px] rounded-3xl">
          <DialogHeader>
            <DialogTitle>Add New Asset</DialogTitle>
            <DialogDescription>Enter the details of the new company asset.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Asset Name</Label>
              <Input id="name" value={newAsset.name} onChange={e => setNewAsset({...newAsset, name: e.target.value})} placeholder="e.g. MacBook Pro M3" className="rounded-xl" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <select 
                  id="category" 
                  className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  value={newAsset.category}
                  onChange={e => setNewAsset({...newAsset, category: e.target.value})}
                >
                  <option value="Hardware">Hardware</option>
                  <option value="Digital">Digital</option>
                  <option value="License">License</option>
                  <option value="Infrastructure">Infrastructure</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="value">Value ($)</Label>
                <Input id="value" value={newAsset.value} onChange={e => setNewAsset({...newAsset, value: e.target.value})} placeholder="e.g. 2500" className="rounded-xl" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="owner">Assigned To</Label>
              <Input id="owner" value={newAsset.owner} onChange={e => setNewAsset({...newAsset, owner: e.target.value})} placeholder="Employee name" className="rounded-xl" />
            </div>
            <div className="grid gap-2">
              <Label>Upload Documentation (Optional)</Label>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <Upload className="mx-auto text-slate-400 mb-2" size={24} />
                <p className="text-xs text-slate-500">Click to upload invoice or warranty docs</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddOpen(false)} className="rounded-xl">Cancel</Button>
            <Button onClick={handleAddAsset} className="bg-blue-600 hover:bg-blue-700 rounded-xl">Save Asset</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Assets;