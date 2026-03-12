"use client";

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Scale, 
  Lock, 
  Download, 
  Plus,
  AlertCircle,
  CheckCircle2,
  Clock,
  Upload
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

const Compliance = () => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newDoc, setNewDoc] = useState({
    title: '',
    type: 'Legal',
    expiry: 'N/A',
    status: 'Valid',
    lastAudit: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    const saved = storage.get('documents', initialData.documents);
    setDocuments(saved);
  }, []);

  const handleAddDoc = () => {
    const id = documents.length + 1;
    const updated = storage.add('documents', { ...newDoc, id });
    setDocuments(updated);
    setIsAddOpen(false);
    showSuccess("Document uploaded successfully!");
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Legal & Compliance</h1>
          <p className="text-slate-500">Manage company registration, permits, IP, and regulatory reporting.</p>
        </div>
        <Button onClick={() => setIsAddOpen(true)} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
          <Plus className="mr-2" size={18} />
          Upload Document
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-none shadow-sm rounded-3xl">
            <CardHeader>
              <CardTitle>Compliance Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {documents.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{doc.title}</h4>
                      <span className="text-xs text-slate-500">Type: {doc.type}</span>
                    </div>
                  </div>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none">
                    {doc.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="sm:max-w-[500px] rounded-3xl">
          <DialogHeader>
            <DialogTitle>Upload Document</DialogTitle>
            <DialogDescription>Add a new legal or compliance document.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label>Document Title</Label>
              <Input value={newDoc.title} onChange={e => setNewDoc({...newDoc, title: e.target.value})} placeholder="e.g. Tax Clearance" className="rounded-xl" />
            </div>
            <div className="grid gap-2">
              <Label>Document Type</Label>
              <select 
                className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm"
                value={newDoc.type}
                onChange={e => setNewDoc({...newDoc, type: e.target.value})}
              >
                <option value="Legal">Legal</option>
                <option value="Permit">Permit</option>
                <option value="IP">IP</option>
                <option value="Compliance">Compliance</option>
              </select>
            </div>
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center">
              <Upload className="mx-auto text-slate-400 mb-2" size={32} />
              <p className="text-sm text-slate-500">Click to select file or drag and drop</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddOpen(false)} className="rounded-xl">Cancel</Button>
            <Button onClick={handleAddDoc} className="bg-blue-600 hover:bg-blue-700 rounded-xl">Upload</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Compliance;