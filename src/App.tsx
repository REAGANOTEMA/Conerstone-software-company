"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

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
import Company from "./pages/Company";
import Academics from "./pages/school/Academics";
import MyProgram from "./pages/school/MyProgram";
import DegreeProgressAudit from "./pages/school/DegreeProgressAudit";
import GoToClass from "./pages/school/GoToClass";
import ClassSchedule from "./pages/school/ClassSchedule";
import Transcripts from "./pages/school/Transcripts";
import Assignments from "./pages/school/Assignments";
import AIAssignments from "./pages/school/AIAssignments";
import Grades from "./pages/school/Grades";
import MyInformation from "./pages/school/MyInformation";
import PrivacySettings from "./pages/school/PrivacySettings";
import UsernameEmail from "./pages/school/UsernameEmail";
import Finances from "./pages/school/Finances";
import Documents from "./pages/school/Documents";
import Resources from "./pages/school/Resources";
import Community from "./pages/school/Community";
import StudentWellness from "./pages/school/StudentWellness";
import CommunityResources from "./pages/school/CommunityResources";
import Engagement from "./pages/school/Engagement";
import Support from "./pages/school/Support";
import SuccessTeam from "./pages/school/SuccessTeam";
import HelpCenter from "./pages/school/HelpCenter";
import Companion from "./pages/school/Companion";
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
            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Dashboard />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />

            <Route
              path="/projects"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Projects />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/projects/:id"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <ProjectDetails />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />

            <Route
              path="/finance"
              element={
                <PrivateRoute roles={["director", "admin"]}>
                  <DashboardLayout>
                    <Finance />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />

            <Route
              path="/training"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Training />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/training/player/:id"
              element={
                <PrivateRoute>
                  <CoursePlayer />
                </PrivateRoute>
              }
            />
            <Route
              path="/training/manage/:id"
              element={
                <PrivateRoute roles={["director", "staff"]}>
                  <DashboardLayout>
                    <CourseManagement />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />

            <Route
              path="/clients"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Clients />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/hr"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <HR />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Marketing />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/assets"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Assets />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/compliance"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Compliance />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Settings />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/calendar"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Calendar />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/messages"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Messages />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Profile />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />

            <Route
              path="/company"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Company />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />

            {/* School Portal Routes */}
            <Route
              path="/school/academics"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Academics />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/school/profile"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <ProfileSchool />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/school/community"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Community />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/school/support"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Support />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />

            <Route
              path="/school/assignments"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Assignments />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/school/grades"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Grades />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/school/ai-assignments"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <AIAssignments />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;