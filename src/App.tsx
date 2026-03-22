"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

// Main Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Training from "./pages/Training";
import CourseManagement from "./pages/CourseManagement";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

// School Portal Pages
import Academics from "./pages/school/Academics";
import Assignments from "./pages/school/Assignments";
import AIAssignments from "./pages/school/AIAssignments";
import Grades from "./pages/school/Grades";
import Transcripts from "./pages/school/Transcripts";
import GoToClass from "./pages/school/GoToClass";
import Community from "./pages/school/Community";
import Support from "./pages/school/Support";
import PrivacySettings from "./pages/school/PrivacySettings";
import DegreeProgressAudit from "./pages/school/DegreeProgressAudit";

// Removed non-existent imports (UsernameEmail, Finances, etc. are tabs within Profile/Support)

import DashboardLayout from "./components/layout/DashboardLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={<PrivateRoute><DashboardLayout><Dashboard /></DashboardLayout></PrivateRoute>} />
          <Route path="/projects" element={<PrivateRoute><DashboardLayout><Projects /></DashboardLayout></PrivateRoute>} />
          <Route path="/projects/:id" element={<PrivateRoute><DashboardLayout><ProjectDetails /></DashboardLayout></PrivateRoute>} />
          <Route path="/training" element={<PrivateRoute><DashboardLayout><Training /></DashboardLayout></PrivateRoute>} />
          <Route path="/training/manage/:id" element={<PrivateRoute><DashboardLayout><CourseManagement /></DashboardLayout></PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute><DashboardLayout><Settings /></DashboardLayout></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><DashboardLayout><Profile /></DashboardLayout></PrivateRoute>} />

          {/* School Portal Routes */}
          <Route path="/school/academics" element={<PrivateRoute><DashboardLayout><Academics /></DashboardLayout></PrivateRoute>} />
          <Route path="/school/assignments" element={<PrivateRoute><DashboardLayout><Assignments /></DashboardLayout></PrivateRoute>} />
          <Route path="/school/ai-assignments" element={<PrivateRoute><DashboardLayout><AIAssignments /></DashboardLayout></PrivateRoute>} />
          <Route path="/school/grades" element={<PrivateRoute><DashboardLayout><Grades /></DashboardLayout></PrivateRoute>} />
          <Route path="/school/transcripts" element={<PrivateRoute><DashboardLayout><Transcripts /></DashboardLayout></PrivateRoute>} />
          <Route path="/school/go-to-class" element={<PrivateRoute><DashboardLayout><GoToClass /></DashboardLayout></PrivateRoute>} />
          <Route path="/school/community" element={<PrivateRoute><DashboardLayout><Community /></DashboardLayout></PrivateRoute>} />
          <Route path="/school/support" element={<PrivateRoute><DashboardLayout><Support /></DashboardLayout></PrivateRoute>} />
          <Route path="/school/privacy" element={<PrivateRoute><DashboardLayout><PrivacySettings /></DashboardLayout></PrivateRoute>} />
          <Route path="/school/degree-audit" element={<PrivateRoute><DashboardLayout><DegreeProgressAudit /></DashboardLayout></PrivateRoute>} />
          
          {/* Fixed ProfileSchool reference to Profile */}
          <Route path="/school/profile" element={<PrivateRoute><DashboardLayout><Profile /></DashboardLayout></PrivateRoute>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;