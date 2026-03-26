"use client";

/**
 * API Service for Conerstone Software Company
 * Connects React frontend to PHP backend
 */

const API_BASE_URL = '/api';

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  [key: string]: any;
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    // Get token from localStorage
    const token = localStorage.getItem('conerstone_token');
    if (token) {
      defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Generic HTTP methods
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }

  // Authentication
  async login(email: string, password: string) {
    return this.request('/login-clean.php', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(userData: {
    student_id?: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role?: string;
    gender?: string;
    age?: number;
    mobile_number?: string;
    country?: string;
    bio?: string;
    location?: string;
  }) {
    return this.request('/register-clean.php', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async getCurrentUser() {
    return this.request('/auth/me');
  }

  // Courses
  async getCourses() {
    return this.request('/courses');
  }

  async getCourse(id: string | number) {
    return this.request(`/courses/${id}`);
  }

  async createCourse(courseData: {
    course_code: string;
    course_name: string;
    description?: string;
    credits?: number;
    instructor?: string;
    semester?: string;
    year?: number;
  }) {
    return this.request('/courses', {
      method: 'POST',
      body: JSON.stringify(courseData),
    });
  }

  async updateCourse(id: string | number, courseData: Partial<{
    course_code: string;
    course_name: string;
    description: string;
    credits: number;
    instructor: string;
    semester: string;
    year: number;
  }>) {
    return this.request(`/courses/${id}`, {
      method: 'PUT',
      body: JSON.stringify(courseData),
    });
  }

  async deleteCourse(id: string | number) {
    return this.request(`/courses/${id}`, {
      method: 'DELETE',
    });
  }

  // Assignments
  async getAssignments() {
    return this.request('/assignments');
  }

  async getAssignment(id: string | number) {
    return this.request(`/assignments/${id}`);
  }

  async createAssignment(assignmentData: {
    title: string;
    description?: string;
    course_id: number;
    week_number?: number;
    block_number?: number;
    due_date?: string;
    points?: number;
    assignment_type?: string;
    status?: string;
  }) {
    return this.request('/assignments', {
      method: 'POST',
      body: JSON.stringify(assignmentData),
    });
  }

  async updateAssignment(id: string | number, assignmentData: Partial<{
    title: string;
    description: string;
    course_id: number;
    week_number: number;
    block_number: number;
    due_date: string;
    points: number;
    assignment_type: string;
    status: string;
  }>) {
    return this.request(`/assignments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(assignmentData),
    });
  }

  async deleteAssignment(id: string | number) {
    return this.request(`/assignments/${id}`, {
      method: 'DELETE',
    });
  }

  // Submissions
  async getSubmissions() {
    return this.request('/submissions');
  }

  async getSubmission(id: string | number) {
    return this.request(`/submissions/${id}`);
  }

  async createSubmission(submissionData: {
    assignment_id: number;
    submission_text?: string;
    file_path?: string;
    status?: string;
  }) {
    return this.request('/submissions', {
      method: 'POST',
      body: JSON.stringify(submissionData),
    });
  }

  async updateSubmission(id: string | number, submissionData: Partial<{
    submission_text: string;
    file_path: string;
    status: string;
    points_earned: number;
    feedback: string;
  }>) {
    return this.request(`/submissions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(submissionData),
    });
  }

  async deleteSubmission(id: string | number) {
    return this.request(`/submissions/${id}`, {
      method: 'DELETE',
    });
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }

  // Utility method to set token
  setToken(token: string) {
    localStorage.setItem('conerstone_token', token);
  }

  // Utility method to get token
  getToken(): string | null {
    return localStorage.getItem('conerstone_token');
  }

  // Utility method to remove token
  removeToken() {
    localStorage.removeItem('conerstone_token');
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export const apiService = new ApiService();
export default apiService;
