// Common types for the application

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'director' | 'staff' | 'client' | 'student';
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

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  enrolled: number;
  capacity: number;
  image?: string;
  category: string;
  topics: string[];
  progress?: number;
  grade?: string;
  status?: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  course: string;
  courseName: string;
  instructor: string;
  dueDate: string;
  submittedDate: string;
  grade: string;
  status: 'pending' | 'in-progress' | 'submitted' | 'graded' | 'overdue';
  type: string;
  points: number;
  maxPoints: number;
  attempts: number;
  maxAttempts: number;
  hasTemplate: boolean;
  rubric: {
    criteria: string;
    points: number;
    description: string;
  }[];
  attachments: {
    name: string;
    url: string;
    size: string;
  }[];
  feedback?: string;
}

export interface Grade {
  id: string;
  assignmentId: string;
  assignmentTitle: string;
  score: number;
  maxScore: number;
  grade: string;
  feedback?: string;
  submittedDate: string;
  gradedDate?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  timestamp: string;
  actionUrl?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'document' | 'video' | 'link' | 'tool';
  url: string;
  category: string;
  tags: string[];
  downloadCount?: number;
  rating?: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'lecture' | 'workshop' | 'meeting' | 'deadline' | 'social';
  attendees: number;
  maxAttendees?: number;
  organizer: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}

export interface Discussion {
  id: string;
  title: string;
  content: string;
  author: string;
  authorId: string;
  category: string;
  tags: string[];
  replies: number;
  views: number;
  lastActivity: string;
  isPinned: boolean;
  isLocked: boolean;
  createdAt: string;
}

export interface Reply {
  id: string;
  discussionId: string;
  content: string;
  author: string;
  authorId: string;
  likes: number;
  isAnswer: boolean;
  createdAt: string;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  assignedTo?: string;
  createdBy: string;
  createdById: string;
  createdAt: string;
  updatedAt: string;
  replies: number;
}

export interface Progress {
  courseId: string;
  courseName: string;
  completedLessons: number;
  totalLessons: number;
  completedAssignments: number;
  totalAssignments: number;
  averageGrade: number;
  lastActivity: string;
  timeSpent: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  unlockedAt: string;
  progress: number;
  maxProgress: number;
  isUnlocked: boolean;
}

export interface Analytics {
  totalAssignments: number;
  completedAssignments: number;
  averageGrade: number;
  timeSpent: number;
  coursesEnrolled: number;
  coursesCompleted: number;
  achievementsUnlocked: number;
  streakDays: number;
  weeklyProgress: {
    week: string;
    assignments: number;
    studyTime: number;
  }[];
}

export interface Settings {
  theme: 'light' | 'dark' | 'system';
  language: string;
  notifications: {
    email: boolean;
    push: boolean;
    assignments: boolean;
    grades: boolean;
    discussions: boolean;
  };
  privacy: {
    profileVisibility: 'public' | 'private' | 'friends';
    showOnlineStatus: boolean;
    allowMessages: boolean;
  };
  accessibility: {
    fontSize: 'small' | 'medium' | 'large';
    highContrast: boolean;
    reducedMotion: boolean;
  };
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface FilterOptions {
  search?: string;
  category?: string;
  status?: string;
  dateRange?: {
    start: string;
    end: string;
  };
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
  }[];
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalCourses: number;
  totalAssignments: number;
  completionRate: number;
  averageGrade: number;
  recentActivity: {
    type: string;
    message: string;
    timestamp: string;
  }[];
}

// Export all types for easy importing
export type {
  User,
  Course,
  Assignment,
  Grade,
  Notification,
  Resource,
  Event,
  Discussion,
  Reply,
  Ticket,
  Progress,
  Achievement,
  Analytics,
  Settings,
  ApiResponse,
  PaginatedResponse,
  FilterOptions,
  ChartData,
  DashboardStats
};
