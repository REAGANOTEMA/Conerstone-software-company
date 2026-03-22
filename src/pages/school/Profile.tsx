"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Settings, 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  CreditCard,
  FileText,
  Download,
  Upload,
  Bell,
  Lock,
  Eye,
  EyeOff,
  Save,
  Camera,
  Edit,
  Check,
  X,
  AlertTriangle,
  Info,
  DollarSign,
  GraduationCap,
  Award,
  BookOpen,
  Briefcase,
  Users,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useAuth } from '@/context/AuthContext';
import { showSuccess, showError } from '@/utils/toast';

const Profile = () => {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  const [activeTab, setActiveTab] = useState('information');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ')[1] || '',
    email: user?.email || '',
    phone: '+256 700 000 001',
    bio: 'Computer Science student passionate about technology and innovation.',
    location: 'Iganga, Uganda',
    emergencyContact: '+256 700 000 002',
    dateOfBirth: '2000-01-01',
    nationality: 'Ugandan',
    languages: ['English', 'Luganda'],
    interests: ['Programming', 'Cybersecurity', 'AI']
  });

  const [privacySettings, setPrivacySettings] = useState({
    showEmail: true,
    showPhone: false,
    showLocation: true,
    allowMessages: true,
    showAcademicInfo: true,
    dataSharing: false,
    twoFactorAuth: false,
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true
  });

  const [accountInfo, setAccountInfo] = useState({
    studentId: 'STU2024001',
    username: user?.email?.split('@')[0] || 'student',
    email: user?.email || '',
    alternativeEmail: 'alternative@email.com',
    lastPasswordChange: '2024-01-15',
    accountCreated: '2023-09-01',
    accountStatus: 'Active',
    accountType: 'Student',
    verificationStatus: 'Verified'
  });

  const [financialInfo, setFinancialInfo] = useState({
    tuitionBalance: 'UGX 2,500,000',
    totalPaid: 'UGX 7,500,000',
    totalTuition: 'UGX 10,000,000',
    paymentPlan: 'Semester',
    nextPaymentDue: '2024-04-15',
    nextPaymentAmount: 'UGX 1,250,000',
    paymentHistory: [
      { date: '2024-01-15', amount: 'UGX 2,500,000', method: 'Bank Transfer', status: 'Completed' },
      { date: '2024-02-15', amount: 'UGX 2,500,000', method: 'Mobile Money', status: 'Completed' },
      { date: '2024-03-15', amount: 'UGX 2,500,000', method: 'Bank Transfer', status: 'Completed' }
    ],
    scholarships: [
      { name: 'Academic Excellence', amount: 'UGX 1,000,000', status: 'Active' },
      { name: 'Need-Based Aid', amount: 'UGX 500,000', status: 'Active' }
    ]
  });

  const documents = [
    {
      id: 1,
      name: 'Academic Transcript 2023',
      type: 'transcript',
      uploadDate: '2024-01-10',
      size: '2.4 MB',
      status: 'Available'
    },
    {
      id: 2,
      name: 'Transfer Credits Form',
      type: 'transfer',
      uploadDate: '2024-02-15',
      size: '1.2 MB',
      status: 'Processing'
    },
    {
      id: 3,
      name: 'Tax Information 2024',
      type: 'tax',
      uploadDate: '2024-01-20',
      size: '856 KB',
      status: 'Available'
    },
    {
      id: 4,
      name: 'English Assessment Certificate',
      type: 'assessment',
      uploadDate: '2023-12-05',
      size: '1.8 MB',
      status: 'Available'
    }
  ];

  const resources = [
    {
      category: 'Student Software',
      items: [
        { name: 'Microsoft Office 365', description: 'Free access to Office applications', available: true },
        { name: 'Adobe Creative Cloud', description: 'Design and multimedia software', available: true },
        { name: 'MATLAB', description: 'Mathematical computing software', available: true },
        { name: 'SPSS', description: 'Statistical analysis software', available: false }
      ]
    },
    {
      category: 'Career Services',
      items: [
        { name: 'Resume Builder', description: 'Create professional resumes', available: true },
        { name: 'Job Portal', description: 'Access job opportunities', available: true },
        { name: 'Career Counseling', description: 'One-on-one career guidance', available: true },
        { name: 'Interview Prep', description: 'Practice interview skills', available: true }
      ]
    },
    {
      category: 'Academic Tools',
      items: [
        { name: 'Online Library', description: 'Access to digital resources', available: true },
        { name: 'Research Database', description: 'Academic research papers', available: true },
        { name: 'Writing Center', description: 'Academic writing support', available: true },
        { name: 'Math Tutoring', description: 'Mathematics help center', available: true }
      ]
    }
  ];

  const handleSaveProfile = () => {
    const updatedUser = {
      ...user,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      bio: formData.bio,
      location: formData.location
    };
    updateProfile(updatedUser);
    setIsEditing(false);
    showSuccess('Profile updated successfully!');
  };

  const handleSavePrivacy = () => {
    showSuccess('Privacy settings updated successfully!');
  };

  const handlePasswordChange = () => {
    showSuccess('Password change instructions sent to email!');
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Active': return 'bg-emerald-100 text-emerald-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Available': return 'bg-blue-100 text-blue-800';
      case 'Verified': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">My Profile</h1>
          <p className="text-slate-500">Manage your personal information and account settings</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            <Download className="mr-2" size={18} />
            Export Data
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            <Settings className="mr-2" size={18} />
            Account Settings
          </Button>
        </div>
      </div>

      {/* Profile Overview Card */}
      <Card className="border-none shadow-sm rounded-2xl">
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <img 
                src={user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=student'} 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover"
              />
              <Button size="sm" className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0">
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900">{user?.name}</h2>
              <p className="text-slate-600">{formData.bio}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {user?.email}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {formData.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined {accountInfo.accountCreated}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="information" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            My Information
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Privacy Settings
          </TabsTrigger>
          <TabsTrigger value="username" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Username & Email
          </TabsTrigger>
          <TabsTrigger value="finances" className="flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Finances
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Documents
          </TabsTrigger>
        </TabsList>

        {/* My Information Tab */}
        <TabsContent value="information" className="space-y-6">
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Personal Information
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                  className="rounded-xl"
                >
                  {isEditing ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                  {isEditing ? 'Cancel' : 'Edit'}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label>First Name</Label>
                    <Input 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <Label>Last Name</Label>
                    <Input 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label>Date of Birth</Label>
                    <Input 
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <Label>Location</Label>
                    <Input 
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <Label>Nationality</Label>
                    <Select value={formData.nationality} onValueChange={(value) => setFormData({...formData, nationality: value})} disabled={!isEditing}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ugandan">Ugandan</SelectItem>
                        <SelectItem value="Kenyan">Kenyan</SelectItem>
                        <SelectItem value="Tanzanian">Tanzanian</SelectItem>
                        <SelectItem value="Rwandan">Rwandan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Emergency Contact</Label>
                    <Input 
                      value={formData.emergencyContact}
                      onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>
              <div>
                <Label>Bio</Label>
                <Textarea 
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                  disabled={!isEditing}
                  placeholder="Tell us about yourself..."
                  className="rounded-xl min-h-[100px]"
                />
              </div>
              <div>
                <Label>Languages</Label>
                <div className="flex flex-wrap gap-2">
                  {formData.languages.map((lang, index) => (
                    <Badge key={index} variant="secondary" className="rounded-xl">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <Label>Interests</Label>
                <div className="flex flex-wrap gap-2">
                  {formData.interests.map((interest, index) => (
                    <Badge key={index} variant="outline" className="rounded-xl">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
              {isEditing && (
                <div className="flex gap-2">
                  <Button onClick={handleSaveProfile} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                    <Save className="mr-2" size={18} />
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)} className="rounded-xl">
                    Cancel
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy Settings Tab */}
        <TabsContent value="privacy" className="space-y-6">
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-600" />
                Privacy Settings
              </CardTitle>
              <CardDescription>
                Control who can see your information and how you're contacted
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Profile Visibility</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Show Email Address</Label>
                      <p className="text-sm text-slate-500">Allow others to see your email</p>
                    </div>
                    <Switch 
                      checked={privacySettings.showEmail}
                      onCheckedChange={(checked) => setPrivacySettings({...privacySettings, showEmail: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Show Phone Number</Label>
                      <p className="text-sm text-slate-500">Allow others to see your phone</p>
                    </div>
                    <Switch 
                      checked={privacySettings.showPhone}
                      onCheckedChange={(checked) => setPrivacySettings({...privacySettings, showPhone: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Show Location</Label>
                      <p className="text-sm text-slate-500">Display your location on profile</p>
                    </div>
                    <Switch 
                      checked={privacySettings.showLocation}
                      onCheckedChange={(checked) => setPrivacySettings({...privacySettings, showLocation: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Show Academic Information</Label>
                      <p className="text-sm text-slate-500">Display courses and grades</p>
                    </div>
                    <Switch 
                      checked={privacySettings.showAcademicInfo}
                      onCheckedChange={(checked) => setPrivacySettings({...privacySettings, showAcademicInfo: checked})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Communication</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Allow Messages</Label>
                      <p className="text-sm text-slate-500">Receive messages from other users</p>
                    </div>
                    <Switch 
                      checked={privacySettings.allowMessages}
                      onCheckedChange={(checked) => setPrivacySettings({...privacySettings, allowMessages: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-slate-500">Receive email updates</p>
                    </div>
                    <Switch 
                      checked={privacySettings.emailNotifications}
                      onCheckedChange={(checked) => setPrivacySettings({...privacySettings, emailNotifications: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>SMS Notifications</Label>
                      <p className="text-sm text-slate-500">Receive text message alerts</p>
                    </div>
                    <Switch 
                      checked={privacySettings.smsNotifications}
                      onCheckedChange={(checked) => setPrivacySettings({...privacySettings, smsNotifications: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-slate-500">Browser push notifications</p>
                    </div>
                    <Switch 
                      checked={privacySettings.pushNotifications}
                      onCheckedChange={(checked) => setPrivacySettings({...privacySettings, pushNotifications: checked})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Security</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-slate-500">Add extra security to your account</p>
                    </div>
                    <Switch 
                      checked={privacySettings.twoFactorAuth}
                      onCheckedChange={(checked) => setPrivacySettings({...privacySettings, twoFactorAuth: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Data Sharing</Label>
                      <p className="text-sm text-slate-500">Share data with partners</p>
                    </div>
                    <Switch 
                      checked={privacySettings.dataSharing}
                      onCheckedChange={(checked) => setPrivacySettings({...privacySettings, dataSharing: checked})}
                    />
                  </div>
                </div>
              </div>

              <Button onClick={handleSavePrivacy} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                <Save className="mr-2" size={18} />
                Save Privacy Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Username & Email Tab */}
        <TabsContent value="username" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-purple-600" />
                  Account Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Student ID</Label>
                  <Input value={accountInfo.studentId} disabled className="rounded-xl" />
                </div>
                <div>
                  <Label>Username</Label>
                  <Input value={accountInfo.username} disabled className="rounded-xl" />
                </div>
                <div>
                  <Label>Primary Email</Label>
                  <Input value={accountInfo.email} disabled className="rounded-xl" />
                </div>
                <div>
                  <Label>Alternative Email</Label>
                  <Input value={accountInfo.alternativeEmail} className="rounded-xl" />
                </div>
                <div>
                  <Label>Account Status</Label>
                  <div className="flex items-center gap-2">
                    <Badge className={`${getStatusColor(accountInfo.accountStatus)} border-none`}>
                      {accountInfo.accountStatus}
                    </Badge>
                    <Badge className={`${getStatusColor(accountInfo.verificationStatus)} border-none`}>
                      {accountInfo.verificationStatus}
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Account Created</Label>
                    <Input value={accountInfo.accountCreated} disabled className="rounded-xl" />
                  </div>
                  <div>
                    <Label>Last Password Change</Label>
                    <Input value={accountInfo.lastPasswordChange} disabled className="rounded-xl" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-red-600" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Current Password</Label>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter current password"
                      className="rounded-xl pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                <div>
                  <Label>New Password</Label>
                  <Input type="password" placeholder="Enter new password" className="rounded-xl" />
                </div>
                <div>
                  <Label>Confirm New Password</Label>
                  <Input type="password" placeholder="Confirm new password" className="rounded-xl" />
                </div>
                <Button onClick={handlePasswordChange} className="bg-red-600 hover:bg-red-700 rounded-xl w-full">
                  <Lock className="mr-2" size={18} />
                  Change Password
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Finances Tab */}
        <TabsContent value="finances" className="space-y-6">
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Account Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <p className="text-sm text-slate-500">Total Tuition</p>
                  <p className="text-2xl font-bold text-slate-900">{financialInfo.totalTuition}</p>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <p className="text-sm text-slate-500">Total Paid</p>
                  <p className="text-2xl font-bold text-emerald-600">{financialInfo.totalPaid}</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <p className="text-sm text-slate-500">Balance</p>
                  <p className="text-2xl font-bold text-orange-600">{financialInfo.tuitionBalance}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Payment Plan</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Payment Plan</Label>
                    <Select value={financialInfo.paymentPlan}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Semester">Semester</SelectItem>
                        <SelectItem value="Annual">Annual</SelectItem>
                        <SelectItem value="Monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Next Payment Due</Label>
                    <Input value={financialInfo.nextPaymentDue} disabled className="rounded-xl" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Scholarships & Financial Aid</h4>
                <div className="space-y-2">
                  {financialInfo.scholarships.map((scholarship, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl">
                      <div>
                        <p className="font-medium">{scholarship.name}</p>
                        <p className="text-sm text-slate-600">{scholarship.amount}</p>
                      </div>
                      <Badge className={`${getStatusColor(scholarship.status)} border-none`}>
                        {scholarship.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Payment History</h4>
                <div className="space-y-2">
                  {financialInfo.paymentHistory.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-slate-200 rounded-xl">
                      <div>
                        <p className="font-medium">{payment.date}</p>
                        <p className="text-sm text-slate-600">{payment.method}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{payment.amount}</p>
                        <Badge className={`${getStatusColor(payment.status)} border-none text-xs`}>
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Document Center
                </CardTitle>
                <CardDescription>
                  Access and manage your academic documents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-3 border border-slate-200 rounded-xl">
                    <div className="flex-1">
                      <p className="font-medium">{doc.name}</p>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <span>{doc.uploadDate}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={`${getStatusColor(doc.status)} border-none text-xs`}>
                        {doc.status}
                      </Badge>
                      <Button variant="outline" size="sm" className="rounded-xl">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full rounded-xl">
                  <Upload className="mr-2" size={18} />
                  Upload New Document
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Resources
                </CardTitle>
                <CardDescription>
                  Student software, careers, and academic tools
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {resources.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-3">{category.category}</h4>
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-slate-600">{item.description}</p>
                          </div>
                          <Badge className={`${item.available ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-800'} border-none text-xs`}>
                            {item.available ? 'Available' : 'Coming Soon'}
                          </Badge>
                        </div>
                      ))}
                    </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
