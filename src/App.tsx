"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import DashboardLayout from "./components/layout/DashboardLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Finance from "./pages/Finance";
import Training from "./pages/Training";
import CoursePlayer from "./pages/CoursePlayer";
import CourseManagement from "./pages/CourseManagement";
import Clients from "./pages/Clients";
import HR from "./pages/HR";
import Marketing from "./pages/Marketing";
import Assets from "./pages/Assets";
import Compliance from "./pages/Compliance";
import Settings from "./pages/Settings";
import Calendar from "./pages/Calendar";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route path="/dashboard" element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            } />
            
            <Route path="/projects" element={
              <DashboardLayout>
                <Projects />
              </DashboardLayout>
            } />

            <Route path="/projects/:id" element={
              <DashboardLayout>
                <ProjectDetails />
              </DashboardLayout>
            } />

            <Route path="/calendar" element={
              <DashboardLayout>
                <Calendar />
              </DashboardLayout>
            } />

            <Route path="/messages" element={
              <DashboardLayout>
                <Messages />
              </DashboardLayout>
            } />

            <Route path="/finance" element={
              <DashboardLayout>
                <Finance />
              </DashboardLayout>
            } />

            <Route path="/training" element={
              <DashboardLayout>
                <Training />
              </DashboardLayout>
            } />

            <Route path="/training/player/:id" element={<CoursePlayer />} />
            
            <Route path="/training/manage/:id" element={
              <DashboardLayout>
                <CourseManagement />
              </DashboardLayout>
            } />

            <Route path="/clients" element={
              <DashboardLayout>
                <Clients />
              </DashboardLayout>
            } />

            <Route path="/hr" element={
              <DashboardLayout>
                <HR />
              </DashboardLayout>
            } />

            <Route path="/marketing" element={
              <DashboardLayout>
                <Marketing />
              </DashboardLayout>
            } />

            <Route path="/assets" element={
              <DashboardLayout>
                <Assets />
              </DashboardLayout>
            } />

            <Route path="/compliance" element={
              <DashboardLayout>
                <Compliance />
              </DashboardLayout>
            } />

            <Route path="/settings" element={
              <DashboardLayout>
                <Settings />
              </DashboardLayout>
            } />

            <Route path="/profile" element={
              <DashboardLayout>
                <Profile />
              </DashboardLayout>
            } />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;