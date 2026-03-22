"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Role = "admin" | "director" | "staff" | "client" | "student";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  title?: string;
  avatar?: string;
  bio?: string;
  phone?: string;
  location?: string;
  organizationId?: string;
  password?: string;
  isApproved?: boolean;
  registrationDate?: string;
  enrolledCourses?: string[];
  projectIds?: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: Role) => boolean;
  register: (name: string, email: string, role: Role) => void;
  updateProfile: (data: Partial<User>) => void;
  logout: () => void;
  isAuthenticated: boolean;
  pendingUsers: User[];
  approveUser: (userId: string) => void;
  rejectUser: (userId: string) => void;
  getPendingUsers: () => User[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Company Directors
const DIRECTORS: User[] = [
  {
    id: "dir_reagan",
    name: "Reagan Otema",
    email: "reagan@nexterp.com",
    password: "password123",
    role: "director",
    title: "Executive Director - Technology",
    avatar: "/src/assets/reagan.png",
    bio: "Co-Founder & Executive Director leading Technology and Innovation.",
    phone: "+256 700 000 001",
    location: "Iganga, Uganda",
    organizationId: "org_nexterp"
  },
  {
    id: "dir_najiib",
    name: "Binsobedde Najiib",
    email: "najiib@nexterp.com",
    password: "password123",
    role: "director",
    title: "Executive Director - Business",
    avatar: "/src/assets/najiib.jpg",
    bio: "Co-Founder & Executive Director leading Business Strategy and Growth.",
    phone: "+256 700 000 002",
    location: "Iganga, Uganda",
    organizationId: "org_nexterp"
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [pendingUsers, setPendingUsers] = useState<User[]>([]);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("nexterp_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    // Load pending users
    const savedPending = localStorage.getItem("nexterp_pending_users");
    if (savedPending) {
      setPendingUsers(JSON.parse(savedPending));
    }
  }, []);

  // Login function with approval check
  const login = (email: string, password: string, role: Role): boolean => {
    const director = DIRECTORS.find(d => d.email.toLowerCase() === email.toLowerCase());

    // Directors login (auto-approved)
    if (director) {
      if (director.password === password) {
        const approvedDirector = { ...director, isApproved: true };
        setUser(approvedDirector);
        localStorage.setItem("nexterp_user", JSON.stringify(approvedDirector));
        return true;
      }
      return false;
    }

    // Check approved users
    const approvedUsers = JSON.parse(localStorage.getItem("nexterp_approved_users") || "[]");
    const approvedUser = approvedUsers.find((u: User) => 
      u.email.toLowerCase() === email.toLowerCase() && u.role === role
    );

    if (approvedUser && password === "password123") {
      setUser(approvedUser);
      localStorage.setItem("nexterp_user", JSON.stringify(approvedUser));
      return true;
    }

    return false; // Not approved or wrong password
  };

  // Registration with approval requirement
  const register = (name: string, email: string, role: Role) => {
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      role,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      organizationId: "org_nexterp",
      isApproved: false,
      registrationDate: new Date().toISOString(),
      enrolledCourses: [],
      projectIds: []
    };
    
    // Add to pending users for director approval
    const updated = [...pendingUsers, newUser];
    setPendingUsers(updated);
    localStorage.setItem("nexterp_pending_users", JSON.stringify(updated));
  };

  // Approve user (directors only)
  const approveUser = (userId: string) => {
    const userToApprove = pendingUsers.find(u => u.id === userId);
    if (userToApprove) {
      const approvedUser = { ...userToApprove, isApproved: true };
      
      // Remove from pending and add to approved users storage
      const updatedPending = pendingUsers.filter(u => u.id !== userId);
      setPendingUsers(updatedPending);
      localStorage.setItem("nexterp_pending_users", JSON.stringify(updatedPending));
      
      // Save to approved users
      const approvedUsers = JSON.parse(localStorage.getItem("nexterp_approved_users") || "[]");
      approvedUsers.push(approvedUser);
      localStorage.setItem("nexterp_approved_users", JSON.stringify(approvedUsers));
    }
  };

  // Reject user (directors only)
  const rejectUser = (userId: string) => {
    const updatedPending = pendingUsers.filter(u => u.id !== userId);
    setPendingUsers(updatedPending);
    localStorage.setItem("nexterp_pending_users", JSON.stringify(updatedPending));
  };

  // Get pending users
  const getPendingUsers = () => pendingUsers;

  // Update profile
  const updateProfile = (data: Partial<User>) => {
    if (!user) return;
    const updatedUser = { ...user, ...data };
    setUser(updatedUser);
    localStorage.setItem("nexterp_user", JSON.stringify(updatedUser));
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("nexterp_user");
  };

  return (
    <AuthContext.Provider
      value={{ 
        user, 
        login, 
        register, 
        updateProfile, 
        logout, 
        isAuthenticated: !!user,
        pendingUsers,
        approveUser,
        rejectUser,
        getPendingUsers
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook for easy access
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};