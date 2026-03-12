"use client";

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface PrivateRouteProps {
  children: JSX.Element;
  roles?: string[]; // optional: restrict access by role
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, roles }) => {
  const { isAuthenticated, user } = useAuth();

  // Redirect if not logged in
  if (!isAuthenticated) return <Navigate to="/" replace />;

  // Redirect if role is not allowed
  if (roles && !roles.includes(user?.role || "")) return <Navigate to="/dashboard" replace />;

  return children;
};

export default PrivateRoute;