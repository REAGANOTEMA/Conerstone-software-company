export interface Project {
  id: string;
  name: string;
  client: string;
  clientId: string;
  description: string;
  category: string;
  status: 'planning' | 'in-progress' | 'testing' | 'completed' | 'on-hold';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  startDate: string;
  endDate?: string;
  estimatedEndDate: string;
  budget: string;
  spent: string;
  progress: number;
  team: TeamMember[];
  milestones: Milestone[];
  tasks: Task[];
  documents: Document[];
  updates: ProjectUpdate[];
  technologies: string[];
  image?: string;
  clientAccess: boolean;
  lastUpdated: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  responsibility: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  completedDate?: string;
  dependencies?: string[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  status: 'todo' | 'in-progress' | 'review' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  estimatedHours: number;
  actualHours?: number;
  tags: string[];
}

export interface Document {
  id: string;
  name: string;
  type: 'specification' | 'design' | 'contract' | 'report' | 'other';
  url: string;
  uploadedBy: string;
  uploadedDate: string;
  size: string;
  version: string;
}

export interface ProjectUpdate {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  type: 'milestone' | 'progress' | 'issue' | 'announcement';
  visibleToClient: boolean;
}

export const PROJECT_CATEGORIES = [
  'Web Development',
  'Mobile App', 
  'Software Development',
  'System Integration',
  'Database Design',
  'Cloud Infrastructure',
  'Security Implementation',
  'IT Consulting',
  'Network Setup',
  'Custom Solution'
] as const;

export const PROJECT_STATUS_COLORS = {
  'planning': 'bg-blue-100 text-blue-800',
  'in-progress': 'bg-emerald-100 text-emerald-800', 
  'testing': 'bg-orange-100 text-orange-800',
  'completed': 'bg-green-100 text-green-800',
  'on-hold': 'bg-slate-100 text-slate-800'
};

export const PRIORITY_COLORS = {
  'low': 'bg-gray-100 text-gray-800',
  'medium': 'bg-yellow-100 text-yellow-800',
  'high': 'bg-orange-100 text-orange-800', 
  'urgent': 'bg-red-100 text-red-800'
};

export const CATEGORY_IMAGES: Record<string, string> = {
  'Web Development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400',
  'Mobile App': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400',
  'Software Development': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400',
  'System Integration': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400',
  'Database Design': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
  'Cloud Infrastructure': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400',
  'Security Implementation': 'https://images.unsplash.com/photo-1605902711622-cfb43c443e92?auto=format&fit=crop&q=80&w=400',
  'IT Consulting': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=400',
  'Network Setup': 'https://images.unsplash.com/photo-1554415492-92994c50b7b4?auto=format&fit=crop&q=80&w=400',
  'Custom Solution': 'https://images.unsplash.com/photo-1559028012-c4848dbe6c6f?auto=format&fit=crop&q=80&w=400'
};

// Sample project data
export const SAMPLE_PROJECTS: Project[] = [
  {
    id: 'proj_001',
    name: 'E-Commerce Platform Redesign',
    client: 'TechMart Uganda',
    clientId: 'client_techmart',
    description: 'Complete redesign and redevelopment of the e-commerce platform with modern UI/UX and enhanced performance.',
    category: 'Web Development',
    status: 'in-progress',
    priority: 'high',
    startDate: '2024-01-15',
    estimatedEndDate: '2024-03-30',
    budget: 'UGX 15,000,000',
    spent: 'UGX 8,500,000',
    progress: 65,
    team: [
      {
        id: 'tm_001',
        name: 'Reagan Otema',
        role: 'Project Manager',
        avatar: '/src/assets/reagan.png',
        email: 'reagan@nexterp.com',
        responsibility: 'Project coordination and client communication'
      },
      {
        id: 'tm_002', 
        name: 'Binsobedde Najiib',
        role: 'Lead Developer',
        avatar: '/src/assets/najiib.jpg',
        email: 'najiib@nexterp.com',
        responsibility: 'Backend development and system architecture'
      },
      {
        id: 'tm_003',
        name: 'Sarah Johnson',
        role: 'UI/UX Designer',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
        email: 'sarah@nexterp.com',
        responsibility: 'Design and user experience'
      }
    ],
    milestones: [
      {
        id: 'ms_001',
        title: 'Design Phase Completion',
        description: 'Complete UI/UX design and get client approval',
        dueDate: '2024-02-01',
        status: 'completed',
        completedDate: '2024-01-28'
      },
      {
        id: 'ms_002',
        title: 'Backend Development',
        description: 'Develop core backend functionality and APIs',
        dueDate: '2024-02-28',
        status: 'completed',
        completedDate: '2024-02-25'
      },
      {
        id: 'ms_003',
        title: 'Frontend Development',
        description: 'Implement frontend interface and user interactions',
        dueDate: '2024-03-15',
        status: 'in-progress'
      },
      {
        id: 'ms_004',
        title: 'Testing & Deployment',
        description: 'Comprehensive testing and production deployment',
        dueDate: '2024-03-30',
        status: 'pending'
      }
    ],
    tasks: [
      {
        id: 'task_001',
        title: 'Setup React project structure',
        description: 'Initialize React project with TypeScript and required dependencies',
        assignedTo: 'Binsobedde Najiib',
        status: 'completed',
        priority: 'high',
        dueDate: '2024-02-05',
        estimatedHours: 8,
        actualHours: 6,
        tags: ['frontend', 'setup']
      },
      {
        id: 'task_002',
        title: 'Design product catalog pages',
        description: 'Create mockups for product listing and detail pages',
        assignedTo: 'Sarah Johnson',
        status: 'completed',
        priority: 'high',
        dueDate: '2024-02-01',
        estimatedHours: 16,
        actualHours: 14,
        tags: ['design', 'ui']
      },
      {
        id: 'task_003',
        title: 'Implement shopping cart functionality',
        description: 'Develop shopping cart with add/remove items and checkout flow',
        assignedTo: 'Binsobedde Najiib',
        status: 'in-progress',
        priority: 'high',
        dueDate: '2024-03-10',
        estimatedHours: 24,
        tags: ['frontend', 'ecommerce']
      }
    ],
    documents: [
      {
        id: 'doc_001',
        name: 'Project Requirements Document',
        type: 'specification',
        url: '/documents/techmart_requirements.pdf',
        uploadedBy: 'Reagan Otema',
        uploadedDate: '2024-01-15',
        size: '2.4 MB',
        version: 'v2.1'
      },
      {
        id: 'doc_002',
        name: 'UI Design Mockups',
        type: 'design',
        url: '/documents/techmart_designs.fig',
        uploadedBy: 'Sarah Johnson',
        uploadedDate: '2024-01-25',
        size: '15.7 MB',
        version: 'v1.0'
      }
    ],
    updates: [
      {
        id: 'update_001',
        title: 'Design Phase Completed',
        content: 'All UI/UX designs have been completed and approved by the client. We are now moving to the development phase.',
        author: 'Reagan Otema',
        date: '2024-01-28',
        type: 'milestone',
        visibleToClient: true
      },
      {
        id: 'update_002',
        title: 'Backend Development Progress',
        content: 'Core backend APIs for user authentication and product management are complete. Database schema has been implemented.',
        author: 'Binsobedde Najiib',
        date: '2024-02-25',
        type: 'progress',
        visibleToClient: true
      }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe API', 'AWS'],
    image: CATEGORY_IMAGES['Web Development'],
    clientAccess: true,
    lastUpdated: '2024-02-25'
  },
  {
    id: 'proj_002',
    name: 'Mobile Banking App',
    client: 'FinanceTrust Bank',
    clientId: 'client_financetrust',
    description: 'Secure mobile banking application with transaction management and biometric authentication.',
    category: 'Mobile App',
    status: 'planning',
    priority: 'urgent',
    startDate: '2024-02-20',
    estimatedEndDate: '2024-05-30',
    budget: 'UGX 25,000,000',
    spent: 'UGX 2,000,000',
    progress: 15,
    team: [
      {
        id: 'tm_004',
        name: 'Reagan Otema',
        role: 'Project Manager',
        avatar: '/src/assets/reagan.png',
        email: 'reagan@nexterp.com',
        responsibility: 'Project management and security oversight'
      },
      {
        id: 'tm_005',
        name: 'Michael Chen',
        role: 'Mobile Developer',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael',
        email: 'michael@nexterp.com',
        responsibility: 'React Native development'
      }
    ],
    milestones: [
      {
        id: 'ms_005',
        title: 'Security Architecture Design',
        description: 'Design comprehensive security framework for mobile banking',
        dueDate: '2024-03-01',
        status: 'in-progress'
      },
      {
        id: 'ms_006',
        title: 'Core Banking Integration',
        description: 'Integrate with core banking systems and APIs',
        dueDate: '2024-04-15',
        status: 'pending'
      }
    ],
    tasks: [
      {
        id: 'task_004',
        title: 'Security requirements analysis',
        description: 'Analyze security requirements and compliance standards',
        assignedTo: 'Reagan Otema',
        status: 'in-progress',
        priority: 'urgent',
        dueDate: '2024-02-28',
        estimatedHours: 16,
        tags: ['security', 'planning']
      }
    ],
    documents: [
      {
        id: 'doc_003',
        name: 'Security Requirements',
        type: 'specification',
        url: '/documents/financetrust_security.pdf',
        uploadedBy: 'Reagan Otema',
        uploadedDate: '2024-02-20',
        size: '3.1 MB',
        version: 'v1.0'
      }
    ],
    updates: [
      {
        id: 'update_003',
        title: 'Project Kickoff',
        content: 'Project has been officially kicked off with FinanceTrust Bank. Initial requirements gathering completed.',
        author: 'Reagan Otema',
        date: '2024-02-20',
        type: 'announcement',
        visibleToClient: true
      }
    ],
    technologies: ['React Native', 'TypeScript', 'Blockchain', 'Biometric APIs', 'AWS'],
    image: CATEGORY_IMAGES['Mobile App'],
    clientAccess: true,
    lastUpdated: '2024-02-20'
  },
  {
    id: 'proj_003',
    name: 'HR Management System',
    client: 'Ministry of Public Service',
    clientId: 'client_ministry',
    description: 'Comprehensive HR management system for government employees with payroll and performance tracking.',
    category: 'Software Development',
    status: 'testing',
    priority: 'high',
    startDate: '2023-11-01',
    endDate: '2024-02-15',
    estimatedEndDate: '2024-02-15',
    budget: 'UGX 30,000,000',
    spent: 'UGX 28,500,000',
    progress: 95,
    team: [
      {
        id: 'tm_006',
        name: 'Binsobedde Najiib',
        role: 'Tech Lead',
        avatar: '/src/assets/najiib.jpg',
        email: 'najiib@nexterp.com',
        responsibility: 'Technical architecture and development'
      },
      {
        id: 'tm_007',
        name: 'Grace Namulondo',
        role: 'Database Administrator',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=grace',
        email: 'grace@nexterp.com',
        responsibility: 'Database design and optimization'
      }
    ],
    milestones: [
      {
        id: 'ms_007',
        title: 'System Development',
        description: 'Complete core system development',
        dueDate: '2024-01-15',
        status: 'completed',
        completedDate: '2024-01-12'
      },
      {
        id: 'ms_008',
        title: 'User Acceptance Testing',
        description: 'Conduct UAT with ministry staff',
        dueDate: '2024-02-10',
        status: 'completed',
        completedDate: '2024-02-08'
      },
      {
        id: 'ms_009',
        title: 'System Deployment',
        description: 'Deploy to production environment',
        dueDate: '2024-02-15',
        status: 'in-progress'
      }
    ],
    tasks: [
      {
        id: 'task_005',
        title: 'Performance optimization',
        description: 'Optimize database queries and application performance',
        assignedTo: 'Grace Namulondo',
        status: 'completed',
        priority: 'medium',
        dueDate: '2024-02-01',
        estimatedHours: 20,
        actualHours: 18,
        tags: ['database', 'performance']
      }
    ],
    documents: [
      {
        id: 'doc_004',
        name: 'System Architecture Document',
        type: 'specification',
        url: '/documents/hr_system_architecture.pdf',
        uploadedBy: 'Binsobedde Najiib',
        uploadedDate: '2023-11-01',
        size: '4.2 MB',
        version: 'v3.0'
      }
    ],
    updates: [
      {
        id: 'update_004',
        title: 'System Ready for Deployment',
        content: 'All development and testing phases completed. System is ready for production deployment.',
        author: 'Binsobedde Najiib',
        date: '2024-02-10',
        type: 'milestone',
        visibleToClient: true
      }
    ],
    technologies: ['Java Spring Boot', 'React', 'PostgreSQL', 'Docker', 'Kubernetes'],
    image: CATEGORY_IMAGES['Software Development'],
    clientAccess: true,
    lastUpdated: '2024-02-10'
  }
];
