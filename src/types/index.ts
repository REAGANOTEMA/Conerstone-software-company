export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'director' | 'staff' | 'client' | 'student';
  avatar?: string;
  registrationDate?: string;
  enrolledCourses?: string[];
}

export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  instructor: string;
  price: string;
  duration: string;
  image: string;
  students: number;
  rating: number;
  curriculum: any[];
  prerequisites?: string[];
  learningOutcomes?: string[];
  certification?: string;
}

export interface Assignment {
  id: number | string;
  title: string;
  description: string;
  course: string;
  courseName: string;
  instructor: string;
  dueDate: string;
  submittedDate: string | null;
  grade: string | null;
  status: string;
  type: string;
  points: number;
  difficulty: string;
  estimatedTime: string;
  feedback?: string | null;
  instructions?: string;
  attachments?: any[];
  rubric?: any;
  submissionType?: string;
  hasTemplate?: boolean;
  allowsLateSubmission?: boolean;
  maxAttempts?: number;
}

export interface Grade {
  id: string;
  courseId: string;
  studentId: string;
  score: number;
  grade: string;
  date: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  date: string;
  read: boolean;
}