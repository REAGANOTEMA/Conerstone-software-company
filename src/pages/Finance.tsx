"use client";

import React, { useState, useEffect } from 'react';
import { Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { storage, initialData } from '@/lib/data-service';
import { showSuccess } from '@/utils/toast';

const Finance = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newTx, setNewTx] = useState({
    client: '',
    amount: '',
    type: 'Revenue',
    status: 'Paid',
    date: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    const saved = storage.get('transactions', initialData.transactions);
    setTransactions(saved);
  }, []);

  const formatUGX = (amount: number) =>
    new Intl.NumberFormat('en-UG', { style: 'currency', currency: 'UGX', maximumFractionDigits: 0 }).format(amount);

  const totalRevenue = transactions.filter(t => t.type === 'Revenue').reduce((acc, t) => acc + t.amount, 0);
  const totalExpenses = transactions.filter(t => t.type === 'Expense').reduce((acc, t) => acc + t.amount, 0);

  const handleAddTx = () => {
    if (!newTx.client || !newTx.amount) return;

    const id = `${newTx.type === 'Revenue' ? 'INV' : 'EXP'}-${Math.floor(100 + Math.random() * 900)}`;
    const transaction = { ...newTx, id, amount: parseFloat(newTx.amount) };

    const updated = storage.add('transactions', transaction); // updates storage internally
    setTransactions(updated);

    // reset form
    setNewTx({
      client: '',
      amount: '',
      type: 'Revenue',
      status: 'Paid',
      date: new Date().toISOString().split('T')[0],
    });
    setIsAddOpen(false);
    showSuccess("Transaction recorded!");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Finance & Accounting</h1>
          <p className="text-slate-500">Track revenue, expenses, and profit distribution in UGX.</p>
        </div>
        <Button onClick={() => setIsAddOpen(true)} className="bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center gap-2">
          <Coins size={18} /> New Transaction
        </Button>
      </div>

      {/* Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none shadow-sm bg-blue-600 text-white rounded-3xl">
          <CardContent className="p-6">
            <p className="text-blue-100 text-sm font-medium">Total Revenue</p>
            <h3 className="text-2xl font-bold mt-1">{formatUGX(totalRevenue)}</h3>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-white rounded-3xl">
          <CardContent className="p-6">
            <p className="text-slate-500 text-sm font-medium">Total Expenses</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">{formatUGX(totalExpenses)}</h3>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-emerald-600 text-white rounded-3xl">
          <CardContent className="p-6">
            <p className="text-emerald-100 text-sm font-medium">Net Profit</p>
            <h3 className="text-2xl font-bold mt-1">{formatUGX(totalRevenue - totalExpenses)}</h3>
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/50">
                <TableHead className="pl-6">ID</TableHead>
                <TableHead>Entity</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right pr-6">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map(tx => (
                <TableRow key={tx.id}>
                  <TableCell className="pl-6 font-medium">{tx.id}</TableCell>
                  <TableCell>{tx.client}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={tx.type === 'Revenue' ? 'text-emerald-600 border-emerald-200' : 'text-red-600 border-red-200'}
                    >
                      {tx.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-bold">
                    {tx.type === 'Revenue' ? '+' : '-'}
                    {formatUGX(tx.amount)}
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-slate-50 text-slate-600 border-none">{tx.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right pr-6 text-slate-500">{tx.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Transaction Dialog */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="sm:max-w-[500px] rounded-3xl">
          <DialogHeader>
            <DialogTitle>Record Transaction</DialogTitle>
            <DialogDescription>Enter the details of the revenue or expense.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label>Entity / Client</Label>
              <Input
                value={newTx.client}
                onChange={e => setNewTx({ ...newTx, client: e.target.value })}
                placeholder="e.g. AWS or Iganga High"
                className="rounded-xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Type</Label>
                <select
                  className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm"
                  value={newTx.type}
                  onChange={e => setNewTx({ ...newTx, type: e.target.value })}
                >
                  <option value="Revenue">Revenue</option>
                  <option value="Expense">Expense</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label>Amount (UGX)</Label>
                <Input
                  type="number"
                  value={newTx.amount}
                  onChange={e => setNewTx({ ...newTx, amount: e.target.value })}
                  placeholder="0"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
          <DialogFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsAddOpen(false)} className="rounded-xl">Cancel</Button>
            <Button onClick={handleAddTx} className="bg-blue-600 hover:bg-blue-700 rounded-xl">Save Transaction</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Finance;