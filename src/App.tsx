"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

// Main Pages
import Landing from "./pages/Landing";
import Apply from "./pages/Apply";
import Careers from "./pages/Careers";
import Company from "./pages/Company";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Training from "./pages/Training";
import CourseManagement from "./pages/CourseManagement";
import Recruitment from "./pages/Recruitment";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import HR from "./pages/HR";
import Finance from "./pages/Finance";
import Assets from "./pages/Assets";
import Compliance from "./pages/Compliance";
import Calendar from "./pages/Calendar";
import Messages from "./pages/Messages";

// School Portal Pages
import StudentDashboard from "./pages/school/StudentDashboard";
import Academics from "./pages/school/Academics";
import MyProgram from "./pages/school/MyProgram";
import DegreeProgressAudit from "./pages/school/DegreeProgressAudit";
import ClassSchedule from "./pages/school/ClassSchedule";
import GoToClass from "./pages/school/GoToClass";
import Gatherings from "./pages/school/Gatherings";
import SchoolProfile from "./pages/school/Profile";
import SchoolFinances from "./pages/school/Finances";
import SchoolDocuments from "./pages/school/Documents";
import SchoolResources from "./pages/school/Resources";
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
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<Company />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Main Routes */}
          <Route path="/dashboard" element={<PrivateRoute><DashboardLayout><Dashboard /></DashboardLayout></PrivateRoute>} />
          <Route path="/projects" element={<PrivateRoute><DashboardLayout><Projects /></DashboardLayout></PrivateRoute>} />
          <Route path="/projects/:id" element={<PrivateRoute><DashboardLayout><ProjectDetails /></DashboardLayout></PrivateRoute>} />
          <Route path="/training" element={<PrivateRoute><DashboardLayout><Training /></DashboardLayout></PrivateRoute>} />
          <Route path="/training/manage/:id" element={<PrivateRoute><DashboardLayout><CourseManagement /></DashboardLayout></PrivateRoute>} />
          <Route path="/recruitment" element={<PrivateRoute><DashboardLayout><Recruitment /></DashboardLayout></PrivateRoute>} />
          <Route path="/hr" element={<PrivateRoute><DashboardLayout><HR /></DashboardLayout></PrivateRoute>} />
          <Route path="/finance" element={<PrivateRoute><DashboardLayout><Finance /></DashboardLayout></PrivateRoute>} />
          <Route path="/assets" element={<PrivateRoute><DashboardLayout><Assets /></DashboardLayout></PrivateRoute>} />
          <Route path="/compliance" element={<PrivateRoute><DashboardLayout><Compliance /></DashboardLayout></PrivateRoute>} />
          <Route path="/calendar" element={<PrivateRoute><DashboardLayout><Calendar /></DashboardLayout></PrivateRoute>} />
          <Route path="/messages" element={<PrivateRoute><DashboardLayout><Messages /></DashboardLayout></PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute><DashboardLayout><Settings /></DashboardLayout></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><DashboardLayout><Profile /></DashboardLayout></PrivateRoute>} />

          {/* School Portal Routes */}
          <Route path="/school/dashboard" element={<PrivateRoute><SchoolLayout><StudentDashboard /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/academics" element={<PrivateRoute><SchoolLayout><Academics /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/academics/program" element={<PrivateRoute><SchoolLayout><MyProgram /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/academics/audit" element={<PrivateRoute><SchoolLayout><DegreeProgressAudit /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/academics/schedule" element={<PrivateRoute><SchoolLayout><ClassSchedule /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/academics/class" element={<PrivateRoute><SchoolLayout><GoToClass /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/academics/gatherings" element={<PrivateRoute><SchoolLayout><Gatherings /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/academics/english-connect" element={<PrivateRoute><SchoolLayout><Academics /></SchoolLayout></PrivateRoute>} />
          
          <Route path="/school/profile" element={<PrivateRoute><SchoolLayout><SchoolProfile /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/profile/messages" element={<PrivateRoute><SchoolLayout><SchoolProfile /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/profile/info" element={<PrivateRoute><SchoolLayout><SchoolProfile /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/profile/privacy" element={<PrivateRoute><SchoolLayout><SchoolProfile /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/profile/account" element={<PrivateRoute><SchoolLayout><SchoolProfile /></SchoolLayout></PrivateRoute>} />
          
          <Route path="/school/finances" element={<PrivateRoute><SchoolLayout><SchoolFinances /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/finances/account" element={<PrivateRoute><SchoolLayout><SchoolFinances /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/finances/discounts" element={<PrivateRoute><SchoolLayout><SchoolFinances /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/finances/pay" element={<PrivateRoute><SchoolLayout><SchoolFinances /></SchoolLayout></PrivateRoute>} />
          
          <Route path="/school/documents" element={<PrivateRoute><SchoolLayout><SchoolDocuments /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/documents/center" element={<PrivateRoute><SchoolLayout><SchoolDocuments /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/documents/endorsement" element={<PrivateRoute><SchoolLayout><SchoolDocuments /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/documents/transcripts" element={<PrivateRoute><SchoolLayout><SchoolDocuments /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/documents/transfer" element={<PrivateRoute><SchoolLayout><SchoolDocuments /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/documents/tax" element={<PrivateRoute><SchoolLayout><SchoolDocuments /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/documents/assessment" element={<PrivateRoute><SchoolLayout><SchoolDocuments /></SchoolLayout></PrivateRoute>} />
          
          <Route path="/school/resources" element={<PrivateRoute><SchoolLayout><SchoolResources /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/resources/software" element={<PrivateRoute><SchoolLayout><SchoolResources /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/resources/careers" element={<PrivateRoute><SchoolLayout><SchoolResources /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/resources/tools" element={<PrivateRoute><SchoolLayout><SchoolResources /></SchoolLayout></PrivateRoute>} />
          
          <Route path="/school/community/wellness" element={<PrivateRoute><SchoolLayout><Community /></SchoolLayout></PrivateRoute>} />
          
          <Route path="/school/support" element={<PrivateRoute><SchoolLayout><Support /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/support/team" element={<PrivateRoute><SchoolLayout><Support /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/support/help" element={<PrivateRoute><SchoolLayout><Support /></SchoolLayout></PrivateRoute>} />
          <Route path="/school/support/companion" element={<PrivateRoute><SchoolLayout><Support /></SchoolLayout></PrivateRoute>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;