"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  Bell, 
  Lock, 
  Eye, 
  EyeOff, 
  Smartphone, 
  Mail, 
  MessageSquare, 
  Globe, 
  Users, 
  Save,
  X,
  Check,
  AlertTriangle,
  Key,
  UserCheck,
  ToggleLeft,
  ToggleRight,
  Wifi,
  Database,
  FileText,
  MapPin,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/context/AuthContext';
import { showSuccess, showError } from '@/utils/toast';

const PrivacySettings = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [twoFactorCode, setTwoFactorCode] = useState('');

  const [privacySettings, setPrivacySettings] = useState({
    // Profile Visibility
    showEmail: true,
    showPhone: false,
    showLocation: true,
    showBio: true,
    showAcademicInfo: true,
    showProfilePicture: true,
    
    // Communication Preferences
    allowMessages: true,
    allowEmailNotifications: true,
    allowSmsNotifications: false,
    allowPushNotifications: true,
    allowMarketingEmails: false,
    
    // Privacy Settings
    profileVisibility: 'public', // public, private, friends-only
    searchEngineIndexing: true,
    socialMediaIntegration: true,
    dataSharing: false,
    
    // Security Settings
    twoFactorAuth: false,
    sessionTimeout: '30', // minutes
    loginAlerts: true,
    deviceManagement: true,
    
    // Notification Settings
    emailFrequency: 'daily', // immediate, daily, weekly
    notificationTypes: {
      assignments: true,
      grades: true,
      announcements: true,
      events: true,
      discussions: true,
      deadlines: true
    }
  });

  const handleSaveSettings = () => {
    // Save privacy settings to backend
    setHasUnsavedChanges(false);
    showSuccess('Privacy settings saved successfully!');
  };

  const handleToggleSetting = (setting: string, value: boolean) => {
    setPrivacySettings({...privacySettings, [setting]: value});
    setHasUnsavedChanges(true);
  };

  const handleEnable2FA = () => {
    if (twoFactorCode.length === 6) {
      setPrivacySettings({...privacySettings, twoFactorAuth: true});
      setShowPasswordForm(false);
      setTwoFactorCode('');
      showSuccess('Two-factor authentication enabled successfully!');
    } else {
      showError('Please enter a valid 6-digit code');
    }
  };

  const handleDisable2FA = () => {
    setPrivacySettings({...privacySettings, twoFactorAuth: false});
    showSuccess('Two-factor authentication disabled');
  };

  const handlePasswordChange = () => {
    if (!showPasswordForm) {
      setShowPasswordForm(true);
    } else {
      setShowPasswordForm(false);
      showSuccess('Password change instructions sent to your email!');
    }
  };

  const getVisibilityIcon = (visibility: string) => {
    switch(visibility) {
      case 'public': return <Globe className="w-4 h-4" />;
      case 'private': return <Lock className="w-4 h-4" />;
      case 'friends-only': return <Users className="w-4 h-4" />;
      default: return <Eye className="w-4 h-4" />;
    }
  };

  const getNotificationIcon = (type: string) => {
    switch(type) {
      case 'assignments': return <FileText className="w-4 h-4" />;
      case 'grades': return <TrendingUp className="w-4 h-4" />;
      case 'announcements': return <Bell className="w-4 h-4" />;
      case 'events': return <Calendar className="w-4 h-4" />;
      case 'discussions': return <MessageSquare className="w-4 h-4" />;
      case 'deadlines': return <AlertTriangle className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Privacy Settings</h1>
          <p className="text-slate-500">Manage your privacy and security preferences</p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="rounded-xl"
            onClick={() => navigate('/school/my-information')}
          >
            <X className="mr-2" size={18} />
            Back to Profile
          </Button>
          <Button 
            onClick={handleSaveSettings} 
            disabled={!hasUnsavedChanges}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-xl"
          >
            <Save className="mr-2" size={18} />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Profile Visibility
          </TabsTrigger>
          <TabsTrigger value="communication" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Communication
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
        </TabsList>

        {/* Profile Visibility Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-600" />
                Profile Visibility Settings
              </CardTitle>
              <CardDescription>
                Control who can see your profile information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900">Basic Information</h4>
                <div className="space-y-3">
                  {[
                    { key: 'showEmail', label: 'Email Address', description: 'Show email on public profile' },
                    { key: 'showPhone', label: 'Phone Number', description: 'Show phone number on public profile' },
                    { key: 'showLocation', label: 'Location', description: 'Show your location on profile' },
                    { key: 'showBio', label: 'Bio', description: 'Show your bio on public profile' }
                  ].map((setting) => (
                    <div key={setting.key} className="flex items-center justify-between">
                      <div>
                        <Label className="font-medium">{setting.label}</Label>
                        <p className="text-sm text-slate-500">{setting.description}</p>
                      </div>
                      <Switch 
                        checked={privacySettings[setting.key as keyof typeof privacySettings]}
                        onCheckedChange={(checked) => handleToggleSetting(setting.key, checked)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900">Academic Information</h4>
                <div className="space-y-3">
                  {[
                    { key: 'showAcademicInfo', label: 'Academic Details', description: 'Show courses and grades on profile' },
                    { key: 'showProfilePicture', label: 'Profile Picture', description: 'Show profile picture publicly' }
                  ].map((setting) => (
                    <div key={setting.key} className="flex items-center justify-between">
                      <div>
                        <Label className="font-medium">{setting.label}</Label>
                        <p className="text-sm text-slate-500">{setting.description}</p>
                      </div>
                      <Switch 
                        checked={privacySettings[setting.key as keyof typeof privacySettings]}
                        onCheckedChange={(checked) => handleToggleSetting(setting.key, checked)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900">Privacy Level</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-medium">Profile Visibility</Label>
                      <p className="text-sm text-slate-500">Control who can see your profile</p>
                    </div>
                    <Select 
                      value={privacySettings.profileVisibility}
                      onValueChange={(value) => setPrivacySettings({...privacySettings, profileVisibility: value})}
                    >
                      <SelectTrigger className="w-48 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            Public - Anyone can view
                          </div>
                        </SelectItem>
                        <SelectItem value="private">
                          <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4" />
                            Private - Only you can view
                          </div>
                        </SelectItem>
                        <SelectItem value="friends-only">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Friends Only - Only connections can view
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Communication Tab */}
        <TabsContent value="communication" className="space-y-6">
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                Communication Preferences
              </CardTitle>
              <CardDescription>
                Manage how others can contact you and what notifications you receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900">Messaging</h4>
                <div className="space-y-3">
                  {[
                    { key: 'allowMessages', label: 'Allow Messages', description: 'Receive messages from other users' },
                    { key: 'allowEmailNotifications', label: 'Email Notifications', description: 'Get email updates' },
                    { key: 'allowSmsNotifications', label: 'SMS Notifications', description: 'Get text message alerts' },
                    { key: 'allowPushNotifications', label: 'Push Notifications', description: 'Browser push notifications' }
                  ].map((setting) => (
                    <div key={setting.key} className="flex items-center justify-between">
                      <div>
                        <Label className="font-medium">{setting.label}</Label>
                        <p className="text-sm text-slate-500">{setting.description}</p>
                      </div>
                      <Switch 
                        checked={privacySettings[setting.key as keyof typeof privacySettings]}
                        onCheckedChange={(checked) => handleToggleSetting(setting.key, checked)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900">Marketing Communications</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Marketing Emails</Label>
                    <p className="text-sm text-slate-500">Receive promotional and marketing emails</p>
                  </div>
                  <Switch 
                    checked={privacySettings.allowMarketingEmails}
                    onCheckedChange={(checked) => handleToggleSetting('allowMarketingEmails', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-600" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Protect your account with enhanced security features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900">Authentication</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-medium">Two-Factor Authentication</Label>
                      <p className="text-sm text-slate-500">Add an extra layer of security to your account</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch 
                        checked={privacySettings.twoFactorAuth}
                        onCheckedChange={(checked) => handleToggleSetting('twoFactorAuth', checked)}
                      />
                      <Badge className={privacySettings.twoFactorAuth ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-800'}>
                        {privacySettings.twoFactorAuth ? 'Enabled' : 'Disabled'}
                      </Badge>
                    </div>
                  </div>
                  
                  {privacySettings.twoFactorAuth && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800 mb-2">Two-factor authentication is enabled</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={handleDisable2FA}
                        className="text-red-600 border-red-600 hover:bg-red-50"
                      >
                        Disable 2FA
                      </Button>
                    </div>
                  )}
                  
                  {!privacySettings.twoFactorAuth && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                      <p className="text-sm text-gray-800 mb-4">Enable two-factor authentication</p>
                      <div className="flex gap-2">
                        <Input 
                          placeholder="Enter 6-digit code"
                          value={twoFactorCode}
                          onChange={(e) => setTwoFactorCode(e.target.value)}
                          className="rounded-xl"
                          maxLength={6}
                        />
                        <Button 
                          onClick={handleEnable2FA}
                          disabled={twoFactorCode.length !== 6}
                          className="bg-blue-600 hover:bg-blue-700 rounded-xl"
                        >
                          <Key className="w-4 h-4 mr-1" />
                          Enable
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900">Session Management</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-medium">Session Timeout</Label>
                      <p className="text-sm text-slate-500">Auto-logout after inactivity</p>
                    </div>
                    <Select 
                      value={privacySettings.sessionTimeout}
                      onValueChange={(value) => setPrivacySettings({...privacySettings, sessionTimeout: value})}
                    >
                      <SelectTrigger className="w-32 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Login Alerts</Label>
                    <p className="text-sm text-slate-500">Get notified of new login attempts</p>
                  </div>
                  <Switch 
                    checked={privacySettings.loginAlerts}
                    onCheckedChange={(checked) => handleToggleSetting('loginAlerts', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-purple-600" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Customize what notifications you receive and how often
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900">Email Frequency</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Email Digest</Label>
                    <p className="text-sm text-slate-500">How often to receive email summaries</p>
                  </div>
                  <Select 
                    value={privacySettings.emailFrequency}
                    onValueChange={(value) => setPrivacySettings({...privacySettings, emailFrequency: value})}
                  >
                    <SelectTrigger className="w-40 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900">Notification Types</h4>
                <p className="text-sm text-slate-500 mb-4">Choose what types of notifications you want to receive</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(privacySettings.notificationTypes).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-3 border border-slate-200 rounded-xl">
                      <div className="flex items-center gap-2">
                        {getNotificationIcon(key)}
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      </div>
                      <Switch 
                        checked={value}
                        onCheckedChange={(checked) => setPrivacySettings({...privacySettings, notificationTypes: {...privacySettings.notificationTypes, [key]: checked}})}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card className="border-none shadow-sm rounded-2xl">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="rounded-xl h-20 flex-col gap-2"
              onClick={() => navigate('/school/my-information')}
            >
              <User className="w-6 h-6" />
              <span className="text-sm">My Information</span>
            </Button>
            <Button 
              variant="outline" 
              className="rounded-xl h-20 flex-col gap-2"
              onClick={() => navigate('/school/username-email')}
            >
              <Mail className="w-6 h-6" />
              <span className="text-sm">Username & Email</span>
            </Button>
            <Button 
              variant="outline" 
              className="rounded-xl h-20 flex-col gap-2"
              onClick={() => navigate('/school/finances')}
            >
              <Database className="w-6 h-6" />
              <span className="text-sm">Finances</span>
            </Button>
            <Button 
              variant="outline" 
              className="rounded-xl h-20 flex-col gap-2"
              onClick={() => navigate('/school/documents')}
            >
              <FileText className="w-6 h-6" />
              <span className="text-sm">Documents</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacySettings;
