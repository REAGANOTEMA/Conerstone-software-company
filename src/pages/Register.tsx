"use client";

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth, Role } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, UserPlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { showError, showSuccess } from "@/utils/toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("client");
  const [password, setPassword] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !role || !password) {
      return showError("All fields are required.");
    }

    if (password.length < 6) {
      return showError("Password must be at least 6 characters.");
    }

    try {
      register(name, email, role);
      showSuccess("Account created successfully!");

      navigate("/dashboard");
    } catch (err) {
      showError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
      
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md px-4 relative z-10">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-2xl shadow-xl shadow-blue-900/20 mb-4">
            <Building2 className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Join NextERP Systems
          </h1>
          <p className="text-slate-400 mt-2">
            Create your enterprise account
          </p>
        </div>

        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-xl text-white">
          
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription className="text-slate-400">
              Enter your details to get started
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleRegister}>
            <CardContent className="space-y-4">

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white focus:ring-blue-500"
                />
              </div>

              {/* Role */}
              <div className="space-y-2">
                <Label>Account Type</Label>

                <Select
                  defaultValue="client"
                  onValueChange={(value) => setRole(value as Role)}
                >
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                    <SelectValue placeholder="Select account type" />
                  </SelectTrigger>

                  <SelectContent className="bg-slate-900 border-slate-800 text-white">
                    <SelectItem value="client">Client Portal</SelectItem>
                    <SelectItem value="student">Student Academy</SelectItem>
                    <SelectItem value="staff">Staff Member</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>

                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white focus:ring-blue-500"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11 flex items-center justify-center"
              >
                Create Account
                <UserPlus className="ml-2" size={18} />
              </Button>

            </CardContent>
          </form>

          <CardFooter className="flex justify-center border-t border-slate-800 pt-4">
            <p className="text-slate-400 text-sm">
              Already have an account?{" "}
              <Link to="/" className="text-blue-400 hover:underline">
                Sign In
              </Link>
            </p>
          </CardFooter>

        </Card>
      </div>
    </div>
  );
};

export default Register;