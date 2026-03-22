"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Camera,
  Edit,
  Save,
  X,
  Check,
  Globe,
  Languages,
  Heart,
  Award,
  Briefcase,
  Plus,
  Upload
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useAuth } from '@/context/AuthContext';
import { showSuccess, showError } from '@/utils/toast';

const MyInformation = () => {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ')[1] || '',
    email: user?.email || '',
    phone: '+256 700 000 001',
    bio: 'Computer Science student passionate about technology and innovation. Interested in AI, web development, and cybersecurity.',
    location: 'Iganga, Uganda',
    emergencyContact: '+256 700 000 002',
    dateOfBirth: '2000-01-01',
    nationality: 'Ugandan',
    languages: ['English', 'Luganda', 'Swahili'],
    interests: ['Programming', 'Cybersecurity', 'AI', 'Web Development', 'Data Science'],
    hobbies: ['Reading tech blogs', 'Contributing to open source', 'Attending tech meetups', 'Playing chess'],
    skills: ['JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'Git', 'AWS', 'Docker'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/studentprofile',
      github: 'https://github.com/studentusername',
      twitter: 'https://twitter.com/studenthandle',
      portfolio: 'https://studentportfolio.com'
    }
  });

  const handleSaveProfile = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      showError('Please fill in all required fields');
      return;
    }
    
    const updatedUser = {
      ...user,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      bio: formData.bio,
      location: formData.location,
      dateOfBirth: formData.dateOfBirth,
      nationality: formData.nationality,
      languages: formData.languages,
      interests: formData.interests,
      hobbies: formData.hobbies,
      skills: formData.skills,
      socialLinks: formData.socialLinks
    };
    
    updateProfile(updatedUser);
    setIsEditing(false);
    showSuccess('Profile updated successfully!');
  };

  const handleCancel = () => {
    setFormData({
      firstName: user?.name?.split(' ')[0] || '',
      lastName: user?.name?.split(' ')[1] || '',
      email: user?.email || '',
      phone: '+256 700 000 001',
      bio: 'Computer Science student passionate about technology and innovation. Interested in AI, web development, and cybersecurity.',
      location: 'Iganga, Uganda',
      emergencyContact: '+256 700 000 002',
      dateOfBirth: '2000-01-01',
      nationality: 'Ugandan',
      languages: ['English', 'Luganda', 'Swahili'],
      interests: ['Programming', 'Cybersecurity', 'AI', 'Web Development', 'Data Science'],
      hobbies: ['Reading tech blogs', 'Contributing to open source', 'Attending tech meetups', 'Playing chess'],
      skills: ['JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'Git', 'AWS', 'Docker'],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/studentprofile',
        github: 'https://github.com/studentusername',
        twitter: 'https://twitter.com/studenthandle',
        portfolio: 'https://studentportfolio.com'
      }
    });
    setIsEditing(false);
  };

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle avatar upload logic here
      showSuccess('Avatar uploaded successfully!');
    }
  };

  const addLanguage = () => {
    const newLanguage = prompt('Enter new language:');
    if (newLanguage && !formData.languages.includes(newLanguage)) {
      setFormData({...formData, languages: [...formData.languages, newLanguage]});
    }
  };

  const removeLanguage = (index: number) => {
    setFormData({
      ...formData,
      languages: formData.languages.filter((_, i) => i !== index)
    });
  };

  const addInterest = () => {
    const newInterest = prompt('Enter new interest:');
    if (newInterest && !formData.interests.includes(newInterest)) {
      setFormData({...formData, interests: [...formData.interests, newInterest]});
    }
  };

  const removeInterest = (index: number) => {
    setFormData({
      ...formData,
      interests: formData.interests.filter((_, i) => i !== index)
    });
  };

  const addSkill = () => {
    const newSkill = prompt('Enter new skill:');
    if (newSkill && !formData.skills.includes(newSkill)) {
      setFormData({...formData, skills: [...formData.skills, newSkill]});
    }
  };

  const removeSkill = (index: number) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">My Information</h1>
          <p className="text-slate-500">Manage your personal information and profile details</p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="rounded-xl"
            onClick={() => navigate('/school/profile')}
          >
            <X className="mr-2" size={18} />
            Back to Profile
          </Button>
          {isEditing ? (
            <Button variant="outline" onClick={handleCancel} className="rounded-xl">
              <X className="mr-2" size={18} />
              Cancel
            </Button>
          ) : (
            <Button onClick={() => setIsEditing(true)} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
              <Edit className="mr-2" size={18} />
              Edit Profile
            </Button>
          )}
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
                className="w-24 h-24 rounded-full object-cover border-4 border-slate-200"
              />
              {isEditing && (
                <div className="absolute bottom-0 right-0">
                  <label htmlFor="avatar-upload" className="cursor-pointer">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <Camera className="w-4 h-4" />
                    </div>
                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900">{user?.name}</h2>
              <p className="text-slate-600">{formData.bio}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>{user?.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>{formData.phone}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{formData.location}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form Sections */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Personal Information */}
        <Card className="border-none shadow-sm rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
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
            </div>
            <div>
              <Label>Email</Label>
              <Input 
                type="email"
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
            <div>
              <Label>Location</Label>
              <Input 
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                disabled={!isEditing}
                className="rounded-xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
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
          </CardContent>
        </Card>

        {/* Bio & Interests */}
        <Card className="border-none shadow-sm rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-emerald-600" />
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
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
              <div className="space-y-2">
                {formData.languages.map((language, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Badge variant="secondary" className="rounded-xl">
                      <Languages className="w-3 h-3 mr-1" />
                      {language}
                    </Badge>
                    {isEditing && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => removeLanguage(index)}
                        className="ml-2"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={addLanguage}
                    className="mt-2"
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    Add Language
                  </Button>
                )}
              </div>
            </div>
            <div>
              <Label>Interests</Label>
              <div className="space-y-2">
                {formData.interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Badge variant="outline" className="rounded-xl">
                      <Heart className="w-3 h-3 mr-1" />
                      {interest}
                    </Badge>
                    {isEditing && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => removeInterest(index)}
                        className="ml-2"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={addInterest}
                    className="mt-2"
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    Add Interest
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skills & Social */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-none shadow-sm rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-600" />
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              {formData.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Badge className="bg-purple-100 text-purple-800 rounded-xl">
                    <Award className="w-3 h-3 mr-1" />
                    {skill}
                  </Badge>
                  {isEditing && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => removeSkill(index)}
                      className="ml-2"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  )}
                </div>
              ))}
              {isEditing && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={addSkill}
                  className="mt-2"
                >
                  <Plus className="w-3 h-3 mr-1" />
                  Add Skill
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-orange-600" />
              Social Links
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>LinkedIn</Label>
              <Input 
                value={formData.socialLinks.linkedin}
                onChange={(e) => setFormData({...formData, socialLinks: {...formData.socialLinks, linkedin: e.target.value}})}
                disabled={!isEditing}
                placeholder="https://linkedin.com/in/yourprofile"
                className="rounded-xl"
              />
            </div>
            <div>
              <Label>GitHub</Label>
              <Input 
                value={formData.socialLinks.github}
                onChange={(e) => setFormData({...formData, socialLinks: {...formData.socialLinks, github: e.target.value}})}
                disabled={!isEditing}
                placeholder="https://github.com/yourusername"
                className="rounded-xl"
              />
            </div>
            <div>
              <Label>Portfolio</Label>
              <Input 
                value={formData.socialLinks.portfolio}
                onChange={(e) => setFormData({...formData, socialLinks: {...formData.socialLinks, portfolio: e.target.value}})}
                disabled={!isEditing}
                placeholder="https://yourportfolio.com"
                className="rounded-xl"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      {isEditing && (
        <div className="flex justify-center">
          <Button onClick={handleSaveProfile} className="bg-blue-600 hover:bg-blue-700 rounded-xl px-8">
            <Save className="mr-2" size={18} />
            Save Changes
          </Button>
        </div>
      )}

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
              onClick={() => navigate('/school/privacy-settings')}
            >
              <User className="w-6 h-6" />
              <span className="text-sm">Privacy Settings</span>
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
              <Award className="w-6 h-6" />
              <span className="text-sm">Finances</span>
            </Button>
            <Button 
              variant="outline" 
              className="rounded-xl h-20 flex-col gap-2"
              onClick={() => navigate('/school/documents')}
            >
              <Briefcase className="w-6 h-6" />
              <span className="text-sm">Documents</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyInformation;
