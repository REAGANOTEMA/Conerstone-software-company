"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

// Main Pages
import Landing from "./pages/Landing";
import Apply from "./pages/Apply";
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
import Community from "./pages/school/Community";
import Support from "./pages/school/Support";

import DashboardLayout from "./components/layout/DashboardLayout";
import SchoolLayout from "./components/layout/SchoolLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Main Routes */}
          <Route path="/dashboard" element={<PrivateRoute><DashboardLayout><Dashboard /></DashboardLayout></PrivateRoute>} />
          <Route path="/projects" element={<PrivateRoute><DashboardLayout><Projects /></DashboardLayout></PrivateRoute>} />
          <Route path="/projects/:id" element={<PrivateRoute><DashboardLayout><ProjectDetails /></DashboardLayout></PrivateRoute>} />
          <Route path="/training" element={<PrivateRoute><DashboardLayout><Training /></DashboardLayout></PrivateRoute>} />
          <Route path="/training/manage/:id" element={<PrivateRoute><DashboardLayout><CourseManagement /></DashboardLayout></PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute><DashboardLayout><Settings /></DashboardLayout></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><DashboardLayout><Profile /></DashboardLayout></PrivateRoute>} />

          {/* School Portal Routes (Using SchoolLayout) */}
          <Route path="/school/academics" element={<PrivateRoute><SchoolLayout><Academics /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/assignments" element={<PrivateRoute><SchoolLayout><Assignments /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/ai-assignments" element={<PrivateRoute><SchoolLayout><AIAssignments /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/grades" element={<PrivateRoute><SchoolLayout><Grades /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/transcripts" element={<PrivateRoute><SchoolLayout><Transcripts /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/community" element={<PrivateRoute><SchoolLayout><Community /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/support" element={<PrivateRoute><SchoolLayout><Support /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/profile" element={<PrivateRoute><SchoolLayout><Profile /></SchoolLayout></PrivateRoute>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;