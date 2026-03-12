"use client";

import React from 'react';
import { MoreHorizontal, Plus, GripVertical } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Task {
  id: number;
  title: string;
  status: string;
  priority: string;
  assignee: string;
}

interface KanbanBoardProps {
  tasks: Task[];
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks }) => {
  const columns = [
    { id: 'Todo', title: 'To Do', color: 'bg-slate-100' },
    { id: 'In Progress', title: 'In Progress', color: 'bg-blue-50' },
    { id: 'Review', title: 'In Review', color: 'bg-purple-50' },
    { id: 'Completed', title: 'Done', color: 'bg-emerald-50' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4">
      {columns.map((column) => (
        <div key={column.id} className="flex flex-col min-w-[280px] space-y-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-900 text-sm">{column.title}</h3>
              <Badge variant="secondary" className="bg-slate-200 text-slate-600 rounded-full h-5 px-1.5 text-[10px]">
                {tasks.filter(t => t.status === column.id).length}
              </Badge>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
              <Plus size={16} />
            </Button>
          </div>

          <div className={cn("flex-1 p-3 rounded-2xl space-y-3 min-h-[500px]", column.color)}>
            {tasks
              .filter((task) => task.status === column.id)
              .map((task) => (
                <Card key={task.id} className="border-none shadow-sm hover:shadow-md transition-all cursor-grab active:cursor-grabbing group">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <Badge className={cn(
                        "text-[10px] px-1.5 py-0 h-4 border-none",
                        task.priority === 'High' ? 'bg-red-100 text-red-600' :
                        task.priority === 'Critical' ? 'bg-orange-100 text-orange-600' :
                        'bg-blue-100 text-blue-600'
                      )}>
                        {task.priority}
                      </Badge>
                      <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal size={14} />
                      </Button>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">{task.title}</h4>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                          {task.assignee}
                        </div>
                        <span className="text-[10px] text-slate-500 font-medium">Assigned</span>
                      </div>
                      <GripVertical size={14} className="text-slate-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;