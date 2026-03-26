export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  status: 'planning' | 'in-progress' | 'testing' | 'completed' | 'on-hold';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: string;
  endDate?: string;
  budget?: number;
  team: TeamMember[];
  progress: number;
  client?: string;
  technologies: string[];
  deliverables: string[];
  risks: string[];
  milestones: Milestone[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar?: string;
  email: string;
}

export interface Milestone {
  id: number;
  title: string;
  dueDate: string;
  completed: boolean;
  description?: string;
}

export const PROJECT_CATEGORIES = [
  'Web Development',
  'Mobile Development',
  'Software Development',
  'Consulting',
  'Research & Development',
  'Infrastructure',
  'Data Analytics',
  'UI/UX Design',
  'Quality Assurance',
  'Training'
];

export const PROJECT_STATUSES = [
  { value: 'planning', label: 'Planning', color: 'blue' },
  { value: 'in-progress', label: 'In Progress', color: 'yellow' },
  { value: 'testing', label: 'Testing', color: 'purple' },
  { value: 'completed', label: 'Completed', color: 'green' },
  { value: 'on-hold', label: 'On Hold', color: 'red' }
];

export const PRIORITY_LEVELS = [
  { value: 'low', label: 'Low', color: 'gray' },
  { value: 'medium', label: 'Medium', color: 'blue' },
  { value: 'high', label: 'High', color: 'orange' },
  { value: 'critical', label: 'Critical', color: 'red' }
];

export const STATUS_COLORS = {
  'planning': 'bg-blue-100 text-blue-800',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  'testing': 'bg-purple-100 text-purple-800',
  'completed': 'bg-green-100 text-green-800',
  'on-hold': 'bg-red-100 text-red-800'
};

export const PRIORITY_COLORS = {
  'low': 'bg-gray-100 text-gray-800',
  'medium': 'bg-blue-100 text-blue-800',
  'high': 'bg-orange-100 text-orange-800',
  'critical': 'bg-red-100 text-red-800'
};

export const CATEGORY_IMAGES = {
  'Web Development': '/images/web-dev-project.jpg',
  'Mobile Development': '/images/mobile-dev-project.jpg',
  'Software Development': '/images/software-project.jpg',
  'Consulting': '/images/consulting-project.jpg',
  'Research & Development': '/images/rd-project.jpg',
  'Infrastructure': '/images/infra-project.jpg',
  'Data Analytics': '/images/analytics-project.jpg',
  'UI/UX Design': '/images/design-project.jpg',
  'Quality Assurance': '/images/qa-project.jpg',
  'Training': '/images/training-project.jpg'
};

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform Development',
    description: 'Full-stack e-commerce solution with payment integration and inventory management',
    category: 'Web Development',
    status: 'in-progress',
    priority: 'high',
    startDate: '2024-01-15',
    endDate: '2024-04-30',
    budget: 50000,
    team: [
      { id: 1, name: 'John Smith', role: 'Project Manager', email: 'john@example.com' },
      { id: 2, name: 'Sarah Johnson', role: 'Lead Developer', email: 'sarah@example.com' },
      { id: 3, name: 'Mike Chen', role: 'Frontend Developer', email: 'mike@example.com' }
    ],
    progress: 65,
    client: 'TechMart Inc.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    deliverables: ['User Authentication', 'Product Catalog', 'Shopping Cart', 'Payment Gateway'],
    risks: ['Timeline constraints', 'Third-party API limitations'],
    milestones: [
      { id: 1, title: 'Design Phase Complete', dueDate: '2024-02-01', completed: true },
      { id: 2, title: 'Backend API Development', dueDate: '2024-03-01', completed: true },
      { id: 3, title: 'Frontend Development', dueDate: '2024-03-30', completed: false },
      { id: 4, title: 'Testing & Deployment', dueDate: '2024-04-30', completed: false }
    ]
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transactions',
    category: 'Mobile Development',
    status: 'planning',
    priority: 'critical',
    startDate: '2024-02-01',
    endDate: '2024-06-30',
    budget: 120000,
    team: [
      { id: 4, name: 'Emily Davis', role: 'Product Manager', email: 'emily@example.com' },
      { id: 5, name: 'Alex Wilson', role: 'Mobile Developer', email: 'alex@example.com' },
      { id: 6, name: 'Lisa Brown', role: 'Security Specialist', email: 'lisa@example.com' }
    ],
    progress: 15,
    client: 'SecureBank Ltd.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
    deliverables: ['Secure Authentication', 'Account Management', 'Transaction Processing', 'Push Notifications'],
    risks: ['Security compliance', 'Performance optimization'],
    milestones: [
      { id: 5, title: 'Security Requirements Analysis', dueDate: '2024-02-15', completed: false },
      { id: 6, title: 'UI/UX Design', dueDate: '2024-03-01', completed: false },
      { id: 7, title: 'Core Development', dueDate: '2024-05-15', completed: false },
      { id: 8, title: 'Security Audit & Launch', dueDate: '2024-06-30', completed: false }
    ]
  },
  {
    id: 3,
    title: 'Data Analytics Dashboard',
    description: 'Business intelligence dashboard with real-time data visualization and reporting',
    category: 'Data Analytics',
    status: 'completed',
    priority: 'medium',
    startDate: '2023-11-01',
    endDate: '2024-01-31',
    budget: 35000,
    team: [
      { id: 7, name: 'David Lee', role: 'Data Scientist', email: 'david@example.com' },
      { id: 8, name: 'Anna Martinez', role: 'Backend Developer', email: 'anna@example.com' }
    ],
    progress: 100,
    client: 'Analytics Corp',
    technologies: ['Python', 'React', 'D3.js', 'PostgreSQL'],
    deliverables: ['Data Pipeline', 'Visualization Components', 'Report Generator', 'API Integration'],
    risks: [],
    milestones: [
      { id: 9, title: 'Data Integration', dueDate: '2023-12-01', completed: true },
      { id: 10, title: 'Dashboard Development', dueDate: '2024-01-15', completed: true },
      { id: 11, title: 'Testing & Deployment', dueDate: '2024-01-31', completed: true }
    ]
  }
];

export const getProjectById = (id: number): Project | undefined => {
  return DEFAULT_PROJECTS.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return DEFAULT_PROJECTS.filter(project => project.category === category);
};

export const getProjectsByStatus = (status: string): Project[] => {
  return DEFAULT_PROJECTS.filter(project => project.status === status);
};

export const searchProjects = (query: string): Project[] => {
  const lowercaseQuery = query.toLowerCase();
  return DEFAULT_PROJECTS.filter(project => 
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.category.toLowerCase().includes(lowercaseQuery) ||
    project.client?.toLowerCase().includes(lowercaseQuery)
  );
};
