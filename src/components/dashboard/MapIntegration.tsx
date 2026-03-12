"use client";

import React from 'react';
import { MapPin, Navigation, Building2, School, Hospital, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const locations = [
  { id: 1, name: "NextERP HQ", type: "Office", x: 45, y: 40, icon: Building2, color: "text-blue-600" },
  { id: 2, name: "Iganga High School", type: "Project", x: 65, y: 30, icon: School, color: "text-emerald-600" },
  { id: 3, name: "Main Street Clinic", type: "Project", x: 30, y: 60, icon: Hospital, color: "text-red-600" },
  { id: 4, name: "Hope Foundation", type: "Project", x: 80, y: 70, icon: Users, color: "text-purple-600" },
];

const MapIntegration = () => {
  return (
    <Card className="border-none shadow-sm overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Operational Map</CardTitle>
            <CardDescription>HQ, client sites, and project locations in Iganga.</CardDescription>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Office</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
              <span>Projects</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 relative h-[400px] bg-slate-100">
        {/* Mock Map Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', 
            backgroundSize: '20px 20px' 
          }}></div>
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-300 -translate-y-1/2"></div>
          <div className="absolute top-0 left-1/2 w-1 h-full bg-slate-300 -translate-x-1/2"></div>
        </div>

        {/* Location Pins */}
        {locations.map((loc) => (
          <div 
            key={loc.id}
            className="absolute group cursor-pointer transition-transform hover:scale-110"
            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
          >
            <div className={`p-2 bg-white rounded-full shadow-lg border-2 border-white ${loc.color}`}>
              <loc.icon size={20} />
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              <div className="bg-slate-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap shadow-xl">
                <p className="font-bold">{loc.name}</p>
                <p className="text-slate-400">{loc.type}</p>
              </div>
              <div className="w-2 h-2 bg-slate-900 rotate-45 mx-auto -mt-1"></div>
            </div>
          </div>
        ))}

        {/* Map Controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button className="p-2 bg-white rounded-lg shadow-md hover:bg-slate-50 text-slate-600">
            <Navigation size={18} />
          </button>
          <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
            <button className="p-2 hover:bg-slate-50 text-slate-600 border-b border-slate-100">+</button>
            <button className="p-2 hover:bg-slate-50 text-slate-600">-</button>
          </div>
        </div>

        {/* Location Info Overlay */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/50 max-w-[200px]">
          <h4 className="text-xs font-bold text-slate-900">Hamdan Building</h4>
          <p className="text-[10px] text-slate-500 mt-1">Main Street, Iganga, Eastern Uganda</p>
          <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-between">
            <span className="text-[10px] font-medium text-blue-600">HQ Active</span>
            <MapPin size={12} className="text-blue-600" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapIntegration;