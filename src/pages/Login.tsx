"use client";

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { showError } from "@/utils/toast";

// Import images directly
import LogoImg from "@/assets/logo.jpg";
import ReaganImg from "@/assets/reagan.png";
import NajiibImg from "@/assets/najiib.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPassword, setClientPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (
    e: React.FormEvent,
    role: "director" | "client" | "staff" | "student",
    specificEmail?: string,
    specificPassword?: string
  ) => {
    e.preventDefault();
    const loginEmail =
      specificEmail || (role === "client" ? clientEmail : email);
    const loginPassword =
      specificPassword || (role === "client" ? clientPassword : password);

    const success = login(loginEmail, loginPassword || "password123", role);

    if (success) {
      navigate("/dashboard");
    } else {
      showError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md px-4 relative z-10">
        {/* Back to Home */}
        <div className="mb-6">
          <Button variant="ghost" onClick={() => navigate('/')} className="text-slate-400 hover:text-white">
            <ArrowLeft className="mr-2" size={16} /> Back to Home
          </Button>
        </div>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-1 bg-white rounded-2xl shadow-xl shadow-blue-900/20 mb-4 w-20 h-20 overflow-hidden">
            <img src={LogoImg} alt="NextERP Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            NextERP Systems
          </h1>
          <p className="text-slate-400 mt-2">Enterprise Management Ecosystem</p>
        </div>

        {/* Login Card */}
        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-xl text-white">
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription className="text-slate-400">
              Select your portal to continue
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="director" className="w-full">
              {/* Tabs Header */}
              <TabsList className="grid grid-cols-2 bg-slate-800 mb-6">
                <TabsTrigger value="director">Directors</TabsTrigger>
                <TabsTrigger value="client">Clients</TabsTrigger>
                <TabsTrigger value="staff">Staff</TabsTrigger>
                <TabsTrigger value="student">Students</TabsTrigger>
              </TabsList>

              {/* Directors Tab */}
              <TabsContent value="director" className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <Button
                    onClick={(e) => handleLogin(e, "director", "reagan@nexterp.com")}
                    className="w-full bg-slate-800 hover:bg-blue-600 text-white h-16 justify-between px-6 rounded-xl border border-slate-700 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500">
                        <img src={ReaganImg} alt="Reagan" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold">Reagan Otema</p>
                        <p className="text-[10px] text-slate-400 group-hover:text-blue-100">
                          Executive Director - Technology
                        </p>
                      </div>
                    </div>
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>

                  <Button
                    onClick={(e) => handleLogin(e, "director", "najiib@nexterp.com")}
                    className="w-full bg-slate-800 hover:bg-purple-600 text-white h-16 justify-between px-6 rounded-xl border border-slate-700 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500">
                        <img src={NajiibImg} alt="Najiib" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold">Binsobedde Najiib</p>
                        <p className="text-[10px] text-slate-400 group-hover:text-purple-100">
                          Executive Director - Business
                        </p>
                      </div>
                    </div>
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </div>

                {/* Divider */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-800"></span>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-slate-900 px-2 text-slate-500">Or custom login</span>
                  </div>
                </div>

                {/* Custom Director Login */}
                <form onSubmit={(e) => handleLogin(e, "director")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="reagan@nexterp.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-slate-800 border-slate-700 text-white focus:ring-blue-500"
                    />
                  </div>
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
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11">
                    Sign In
                  </Button>
                </form>
              </TabsContent>

              {/* Client, Staff, Student Tabs */}
              <TabsContent value="client">
                <form onSubmit={(e) => handleLogin(e, "client")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="client-email">Email / Client ID</Label>
                    <Input
                      id="client-email"
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="client@company.com"
                      className="bg-slate-800 border-slate-700 text-white focus:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-password">Password</Label>
                    <Input
                      id="client-password"
                      type="password"
                      value={clientPassword}
                      onChange={(e) => setClientPassword(e.target.value)}
                      placeholder="••••••••"
                      className="bg-slate-800 border-slate-700 text-white focus:ring-emerald-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-11 mt-4 flex items-center justify-center gap-2"
                  >
                    Access Client Portal
                    <ArrowRight size={18} />
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="staff">
                <form onSubmit={(e) => handleLogin(e, "staff")} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="staff@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                  <Input
                    type="password"
                    placeholder="••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                  <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Staff Login</Button>
                </form>
              </TabsContent>

              <TabsContent value="student">
                <form onSubmit={(e) => handleLogin(e, "student")} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="student@school.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                  <Input
                    type="password"
                    placeholder="••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                  <Button type="submit" className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white">Student Login</Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>

          {/* Footer */}
          <CardFooter className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck size={14} />
              <span>Secure 256-bit SSL Encrypted Connection</span>
            </div>
            <div className="text-center text-sm text-slate-400">
              Don't have an account? <Link to="/register" className="text-blue-400 hover:underline">Register here</Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;