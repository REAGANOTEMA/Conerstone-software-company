"use client";

import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Printer, Download, Building2, Mail, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface PayslipModalProps {
  isOpen: boolean;
  onClose: () => void;
  employee: any;
}

const PayslipModal: React.FC<PayslipModalProps> = ({ isOpen, onClose, employee }) => {
  if (!employee) return null;

  const formatUGX = (amount: number) =>
    new Intl.NumberFormat('en-UG', { style: 'currency', currency: 'UGX', maximumFractionDigits: 0 }).format(amount);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] rounded-3xl p-0 overflow-hidden">
        <div className="p-8 bg-white dark:bg-slate-900" id="payslip-content">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Building2 className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">NextERP Systems</h2>
                <p className="text-xs text-slate-500">Enterprise Management Ecosystem</p>
              </div>
            </div>
            <div className="text-right">
              <h3 className="text-lg font-bold text-blue-600 uppercase tracking-widest">Payslip</h3>
              <p className="text-xs text-slate-500">Month: October 2024</p>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Employee Info */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Employee Details</p>
              <p className="font-bold text-slate-900 dark:text-white">{employee.name}</p>
              <p className="text-sm text-slate-600">{employee.role}</p>
              <p className="text-sm text-slate-600">{employee.department}</p>
            </div>
            <div className="space-y-1 text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Payment Info</p>
              <p className="text-sm text-slate-600">Employee ID: EMP-00{employee.id}</p>
              <p className="text-sm text-slate-600">Pay Date: Oct 30, 2024</p>
              <p className="text-sm text-slate-600">Method: Bank Transfer</p>
            </div>
          </div>

          {/* Earnings & Deductions */}
          <div className="grid grid-cols-2 gap-12 mb-8">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white border-b pb-2">Earnings</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Basic Salary</span>
                  <span className="font-medium">{formatUGX(employee.salary)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Performance Bonus</span>
                  <span className="font-medium text-emerald-600">{formatUGX(employee.bonus || 0)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Allowances</span>
                  <span className="font-medium">{formatUGX(150000)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white border-b pb-2">Deductions</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">PAYE Tax</span>
                  <span className="font-medium text-red-600">-{formatUGX(employee.salary * 0.15)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">NSSF (5%)</span>
                  <span className="font-medium text-red-600">-{formatUGX(employee.salary * 0.05)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Health Insurance</span>
                  <span className="font-medium text-red-600">-{formatUGX(50000)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Net Pay (Take Home)</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {formatUGX(employee.salary + (employee.bonus || 0) + 150000 - (employee.salary * 0.2) - 50000)}
                </h3>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-500 italic">This is a computer generated document.</p>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="p-6 bg-slate-50 dark:bg-slate-800 border-t dark:border-slate-700">
          <Button variant="outline" onClick={onClose} className="rounded-xl">Close</Button>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-xl"><Download size={16} className="mr-2" /> PDF</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl"><Printer size={16} className="mr-2" /> Print</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PayslipModal;