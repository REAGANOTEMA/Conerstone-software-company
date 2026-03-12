"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Building2, School, Hospital, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface Location {
  id: number;
  name: string;
  type: string;
  status: string;
  x: number;
  y: number;
  icon: any;
  color: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: "NextERP Headquarters",
    type: "Company Office",
    status: "Active",
    x: 45,
    y: 40,
    icon: Building2,
    color: "text-blue-600"
  },
  {
    id: 2,
    name: "Iganga High School",
    type: "Education Project",
    status: "Deployment",
    x: 65,
    y: 30,
    icon: School,
    color: "text-emerald-600"
  },
  {
    id: 3,
    name: "Main Street Clinic",
    type: "Healthcare Project",
    status: "Live",
    x: 30,
    y: 60,
    icon: Hospital,
    color: "text-red-600"
  },
  {
    id: 4,
    name: "Hope Foundation",
    type: "NGO Client",
    status: "Active",
    x: 80,
    y: 70,
    icon: Users,
    color: "text-purple-600"
  }
];

const MapIntegration = () => {
  const [selected, setSelected] = useState<Location | null>(locations[0]);

  return (
    <Card className="border-none shadow-sm overflow-hidden">
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">

          <div>
            <CardTitle>NextERP Operational Map</CardTitle>
            <CardDescription>
              Company HQ, client locations, and project deployments in Iganga.
            </CardDescription>
          </div>

          {/* Legend */}
          <div className="flex gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Office</span>
            </div>

            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
              <span>Education</span>
            </div>

            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <span>Healthcare</span>
            </div>

            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span>NGO</span>
            </div>
          </div>

        </div>
      </CardHeader>

      <CardContent className="p-0 relative h-[420px] bg-slate-100">

        {/* Map Background Grid */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
              backgroundSize: "22px 22px"
            }}
          />
        </div>

        {/* Locations */}
        {locations.map((loc) => (
          <div
            key={loc.id}
            onClick={() => setSelected(loc)}
            className="absolute group cursor-pointer transition-transform hover:scale-110"
            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
          >
            <div
              className={`p-2 bg-white rounded-full shadow-lg border-2 border-white ${loc.color}`}
            >
              <loc.icon size={20} />
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              <div className="bg-slate-900 text-white text-[11px] px-3 py-2 rounded shadow-xl">
                <p className="font-semibold">{loc.name}</p>
                <p className="text-slate-400">{loc.type}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Map Controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">

          <button className="p-2 bg-white rounded-lg shadow hover:bg-slate-50 text-slate-600">
            <Navigation size={18} />
          </button>

          <div className="flex flex-col bg-white rounded-lg shadow overflow-hidden">
            <button className="p-2 hover:bg-slate-50 border-b">+</button>
            <button className="p-2 hover:bg-slate-50">-</button>
          </div>

        </div>

        {/* Selected Location Info */}
        {selected && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border max-w-[240px]">

            <h4 className="text-sm font-bold text-slate-900">
              {selected.name}
            </h4>

            <p className="text-xs text-slate-500 mt-1">
              {selected.type}
            </p>

            <div className="mt-3 flex items-center justify-between border-t pt-2">

              <span className="text-xs font-semibold text-blue-600">
                {selected.status}
              </span>

              <MapPin size={14} className="text-blue-600" />

            </div>

            <p className="text-[10px] text-slate-500 mt-2">
              Iganga District • Eastern Uganda
            </p>

          </div>
        )}

      </CardContent>
    </Card>
  );
};

export default MapIntegration;