"use client";

import React, { useState, useEffect } from 'react';
import { Search, Command, FileText, Users, Briefcase, Settings as SettingsIcon, ArrowRight } from 'lucide-react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useNavigate } from 'react-router-dom';

const GlobalSearch = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <div 
        onClick={() => setOpen(true)}
        className="relative w-full max-w-md group cursor-pointer"
      >
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-blue-500 transition-colors" size={18} />
        <div className="w-full h-10 pl-10 pr-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-slate-400 text-sm group-hover:border-blue-200 transition-all">
          <span>Search anything...</span>
          <div className="flex items-center gap-1 bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px] font-mono">
            <Command size={10} />
            <span>K</span>
          </div>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Quick Actions">
            <CommandItem onSelect={() => runCommand(() => navigate('/projects'))}>
              <Briefcase className="mr-2 h-4 w-4" />
              <span>View Projects</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate('/clients'))}>
              <Users className="mr-2 h-4 w-4" />
              <span>Manage Clients</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate('/settings'))}>
              <SettingsIcon className="mr-2 h-4 w-4" />
              <span>System Settings</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Recent Projects">
            <CommandItem>
              <FileText className="mr-2 h-4 w-4" />
              <span>School Management System</span>
              <CommandShortcut>Education</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <FileText className="mr-2 h-4 w-4" />
              <span>Hospital ERP v2.0</span>
              <CommandShortcut>Healthcare</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default GlobalSearch;