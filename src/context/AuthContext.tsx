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
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: Role) => boolean;
  register: (name: string, email: string, role: Role) => void;
  updateProfile: (data: Partial<User>) => void;
  logout: () => void;
  isAuthenticated: boolean;
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

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("nexterp_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Login function
  const login = (email: string, password: string, role: Role): boolean => {
    const director = DIRECTORS.find(d => d.email.toLowerCase() === email.toLowerCase());

    // Directors login
    if (director) {
      if (director.password === password) {
        setUser(director);
        localStorage.setItem("nexterp_user", JSON.stringify(director));
        return true;
      }
      return false;
    }

    // Staff / client / student login (default password: password123)
    if (password === "password123") {
      const userData: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1),
        email,
        role,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        organizationId: "org_nexterp"
      };
      setUser(userData);
      localStorage.setItem("nexterp_user", JSON.stringify(userData));
      return true;
    }

    return false; // Wrong password
  };

  // Registration
  const register = (name: string, email: string, role: Role) => {
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      role,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      organizationId: "org_nexterp"
    };
    setUser(newUser);
    localStorage.setItem("nexterp_user", JSON.stringify(newUser));
  };

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
      value={{ user, login, register, updateProfile, logout, isAuthenticated: !!user }}
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