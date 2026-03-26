export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  instructor: string;
  price: number;
  duration: string;
  image: string;
  students?: number;
  rating?: number;
  level?: string;
  prerequisites?: string[];
  objectives?: string[];
  curriculum?: any[];
}

export const COURSE_CATEGORIES = [
  'Web Development',
  'Mobile Development',
  'Data Science',
  'Machine Learning',
  'Cloud Computing',
  'DevOps',
  'Cybersecurity',
  'UI/UX Design',
  'Project Management',
  'Digital Marketing'
];

export const CATEGORY_IMAGES = {
  'Web Development': '/images/web-dev.jpg',
  'Mobile Development': '/images/mobile-dev.jpg',
  'Data Science': '/images/data-science.jpg',
  'Machine Learning': '/images/ml.jpg',
  'Cloud Computing': '/images/cloud.jpg',
  'DevOps': '/images/devops.jpg',
  'Cybersecurity': '/images/cybersec.jpg',
  'UI/UX Design': '/images/design.jpg',
  'Project Management': '/images/pm.jpg',
  'Digital Marketing': '/images/marketing.jpg'
};

export const CURRICULUM_TEMPLATES = {
  'Web Development': [
    { title: 'HTML & CSS Basics', duration: '2 weeks', topics: ['HTML5', 'CSS3', 'Responsive Design'] },
    { title: 'JavaScript Fundamentals', duration: '3 weeks', topics: ['Variables', 'Functions', 'DOM Manipulation'] },
    { title: 'React.js', duration: '4 weeks', topics: ['Components', 'State Management', 'Hooks'] },
    { title: 'Node.js & Express', duration: '3 weeks', topics: ['REST APIs', 'Database Integration', 'Authentication'] }
  ],
  'Data Science': [
    { title: 'Python for Data Science', duration: '3 weeks', topics: ['NumPy', 'Pandas', 'Data Cleaning'] },
    { title: 'Statistics & Probability', duration: '2 weeks', topics: ['Descriptive Stats', 'Inference', 'Hypothesis Testing'] },
    { title: 'Machine Learning Basics', duration: '4 weeks', topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'] },
    { title: 'Data Visualization', duration: '2 weeks', topics: ['Matplotlib', 'Seaborn', 'Interactive Charts'] }
  ]
};

export const DEFAULT_COURSES: Course[] = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive course.',
    category: 'Web Development',
    instructor: 'John Smith',
    price: 89.99,
    duration: '12 weeks',
    image: '/images/web-bootcamp.jpg',
    students: 15420,
    rating: 4.8,
    level: 'Beginner',
    prerequisites: ['Basic computer skills'],
    objectives: ['Build modern web applications', 'Master frontend and backend technologies'],
    curriculum: CURRICULUM_TEMPLATES['Web Development']
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    description: 'Master the fundamentals of data science with Python and machine learning.',
    category: 'Data Science',
    instructor: 'Dr. Sarah Johnson',
    price: 129.99,
    duration: '16 weeks',
    image: '/images/data-science.jpg',
    students: 8930,
    rating: 4.9,
    level: 'Intermediate',
    prerequisites: ['Basic Python knowledge', 'Statistics basics'],
    objectives: ['Analyze complex datasets', 'Build machine learning models'],
    curriculum: CURRICULUM_TEMPLATES['Data Science']
  },
  {
    id: 3,
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile applications using React Native.',
    category: 'Mobile Development',
    instructor: 'Mike Chen',
    price: 99.99,
    duration: '10 weeks',
    image: '/images/mobile-dev.jpg',
    students: 6750,
    rating: 4.7,
    level: 'Intermediate',
    prerequisites: ['JavaScript knowledge', 'React basics'],
    objectives: ['Build iOS and Android apps', 'Deploy to app stores'],
    curriculum: [
      { title: 'React Native Setup', duration: '1 week', topics: ['Environment Setup', 'Basic Components'] },
      { title: 'Navigation & Routing', duration: '2 weeks', topics: ['React Navigation', 'Tab Navigation'] },
      { title: 'State Management', duration: '2 weeks', topics: ['Redux', 'Context API'] },
      { title: 'Native Features', duration: '3 weeks', topics: ['Camera', 'GPS', 'Push Notifications'] },
      { title: 'Deployment', duration: '2 weeks', topics: ['App Store', 'Play Store', 'CI/CD'] }
    ]
  }
];

export const getCourseById = (id: number): Course | undefined => {
  return DEFAULT_COURSES.find(course => course.id === id);
};

export const getCoursesByCategory = (category: string): Course[] => {
  return DEFAULT_COURSES.filter(course => course.category === category);
};

export const searchCourses = (query: string): Course[] => {
  const lowercaseQuery = query.toLowerCase();
  return DEFAULT_COURSES.filter(course => 
    course.title.toLowerCase().includes(lowercaseQuery) ||
    course.description.toLowerCase().includes(lowercaseQuery) ||
    course.category.toLowerCase().includes(lowercaseQuery)
  );
};
