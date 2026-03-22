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
  curriculum: WeekModule[];
  prerequisites?: string[];
  learningOutcomes?: string[];
  certification?: string;
}

export interface WeekModule {
  week: number;
  title: string;
  description: string;
  topics: string[];
  assignment: string;
  resources: Resource[];
  aiGeneratedContent?: boolean;
}

export interface Resource {
  type: 'video' | 'article' | 'book' | 'tool' | 'website';
  title: string;
  url: string;
  description: string;
}

export const COURSE_CATEGORIES = [
  'Web Programming',
  'Computer Programming', 
  'Cybersecurity',
  'Information Technology',
  'Microsoft Office Suites',
  'Computer Graphics Design',
  'Software Development',
  'Data Science',
  'AI & Machine Learning',
  'Network Administration',
  'Database Management',
  'Cloud Computing'
] as const;

export const CATEGORY_IMAGES: Record<string, string> = {
  'Web Programming': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400',
  'Computer Programming': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400',
  'Cybersecurity': 'https://images.unsplash.com/photo-1605902711622-cfb43c443e92?auto=format&fit=crop&q=80&w=400',
  'Information Technology': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400',
  'Microsoft Office Suites': 'https://images.unsplash.com/photo-1554224154-260325c0596c?auto=format&fit=crop&q=80&w=400',
  'Computer Graphics Design': 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&q=80&w=400',
  'Software Development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400',
  'Data Science': 'https://images.unsplash.com/photo-1555949963-aa79dcee981b?auto=format&fit=crop&q=80&w=400',
  'AI & Machine Learning': 'https://images.unsplash.com/photo-1581092334437-77a3a04c636f?auto=format&fit=crop&q=80&w=400',
  'Network Administration': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400',
  'Database Management': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
  'Cloud Computing': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400'
};

// AI-powered curriculum templates for each course type
export const CURRICULUM_TEMPLATES: Record<string, WeekModule[]> = {
  'Web Programming': [
    {
      week: 1,
      title: "Introduction to Web Development",
      description: "Learn the fundamentals of web development and modern web technologies",
      topics: ["HTML5 Semantic Elements", "CSS3 Fundamentals", "JavaScript Basics", "Developer Tools"],
      assignment: "Create a personal portfolio webpage with HTML5 semantic structure and CSS styling",
      resources: [
        { type: 'website', title: 'MDN Web Docs', url: 'https://developer.mozilla.org', description: 'Comprehensive web development documentation' },
        { type: 'video', title: 'HTML & CSS Crash Course', url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE', description: 'Beginner-friendly introduction' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 2,
      title: "Advanced CSS & Responsive Design",
      description: "Master modern CSS techniques and responsive web design principles",
      topics: ["Flexbox Layout", "CSS Grid", "Media Queries", "CSS Animations", "Responsive Design"],
      assignment: "Build a responsive landing page that adapts to mobile, tablet, and desktop views",
      resources: [
        { type: 'website', title: 'CSS Tricks', url: 'https://css-tricks.com', description: 'Advanced CSS techniques and tutorials' },
        { type: 'tool', title: 'Flexbox Froggy', url: 'https://flexboxfroggy.com', description: 'Interactive flexbox learning game' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 3,
      title: "JavaScript DOM Manipulation",
      description: "Learn to manipulate web pages dynamically with JavaScript",
      topics: ["DOM Selection", "Event Handling", "Form Validation", "Dynamic Content", "Local Storage"],
      assignment: "Create an interactive to-do list application with local storage persistence",
      resources: [
        { type: 'website', title: 'JavaScript.info', url: 'https://javascript.info', description: 'Modern JavaScript tutorial' },
        { type: 'video', title: 'DOM Manipulation Tutorial', url: 'https://www.youtube.com/watch?v=2cZP_jDl9e8', description: 'Complete DOM manipulation guide' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 4,
      title: "Modern JavaScript (ES6+)",
      description: "Master modern JavaScript features and best practices",
      topics: ["Arrow Functions", "Destructuring", "Promises", "Async/Await", "Modules", "Classes"],
      assignment: "Refactor your to-do list app using modern ES6+ features and async operations",
      resources: [
        { type: 'website', title: 'ES6 Features', url: 'https://es6-features.org', description: 'Complete ES6 feature reference' },
        { type: 'article', title: 'Modern JavaScript Best Practices', url: 'https://medium.com/better-programming', description: 'Industry best practices' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 5,
      title: "Frontend Frameworks - React",
      description: "Learn component-based development with React",
      topics: ["Components", "Props & State", "Hooks", "React Router", "State Management"],
      assignment: "Build a React-based weather application with API integration",
      resources: [
        { type: 'website', title: 'React Documentation', url: 'https://react.dev', description: 'Official React documentation' },
        { type: 'video', title: 'React Crash Course', url: 'https://www.youtube.com/watch?v=SqcY0GlETPk', description: 'Comprehensive React tutorial' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 6,
      title: "Backend Development with Node.js",
      description: "Learn server-side JavaScript and API development",
      topics: ["Node.js Fundamentals", "Express.js", "RESTful APIs", "Database Integration", "Authentication"],
      assignment: "Create a RESTful API for your weather application with user authentication",
      resources: [
        { type: 'website', title: 'Node.js Docs', url: 'https://nodejs.org/docs', description: 'Official Node.js documentation' },
        { type: 'tool', title: 'Postman API Client', url: 'https://www.postman.com', description: 'API testing tool' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 7,
      title: "Full-Stack Project & Deployment",
      description: "Combine frontend and backend skills to build a complete application",
      topics: ["Full-Stack Architecture", "Database Design", "Authentication Flow", "Deployment", "Performance Optimization"],
      assignment: "Deploy your full-stack weather application to a cloud platform with proper CI/CD",
      resources: [
        { type: 'website', title: 'Vercel Docs', url: 'https://vercel.com/docs', description: 'Modern deployment platform' },
        { type: 'article', title: 'Full-Stack Best Practices', url: 'https://www.freecodecamp.org', description: 'Production-ready applications' }
      ],
      aiGeneratedContent: true
    }
  ],
  'Cybersecurity': [
    {
      week: 1,
      title: "Introduction to Cybersecurity",
      description: "Fundamental concepts of cybersecurity and information protection",
      topics: ["Security Principles", "Threat Landscape", "Risk Management", "Security Frameworks"],
      assignment: "Conduct a security assessment of a small organization and identify vulnerabilities",
      resources: [
        { type: 'website', title: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework', description: 'Industry standard framework' },
        { type: 'article', title: 'Cybersecurity Fundamentals', url: 'https://www.coursera.org', description: 'Comprehensive introduction' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 2,
      title: "Network Security",
      description: "Protecting network infrastructure and communications",
      topics: ["Network Protocols", "Firewalls", "VPN Technology", "Network Monitoring", "Intrusion Detection"],
      assignment: "Configure a network firewall and analyze network traffic for security threats",
      resources: [
        { type: 'tool', title: 'Wireshark', url: 'https://www.wireshark.org', description: 'Network protocol analyzer' },
        { type: 'website', title: 'Cisco Security', url: 'https://www.cisco.com/c/en/us/products/security', description: 'Network security solutions' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 3,
      title: "Cryptography and Encryption",
      description: "Understanding cryptographic principles and encryption methods",
      topics: ["Symmetric Encryption", "Asymmetric Encryption", "Hash Functions", "Digital Signatures", "PKI"],
      assignment: "Implement secure communication using encryption algorithms",
      resources: [
        { type: 'website', title: 'CryptoTool', url: 'https://www.cryptool.org', description: 'Cryptography learning tools' },
        { type: 'book', title: 'Applied Cryptography', url: 'https://www.schneier.com/books/applied_cryptography', description: 'Comprehensive cryptography guide' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 4,
      title: "Web Application Security",
      description: "Securing web applications against common attacks",
      topics: ["OWASP Top 10", "XSS Prevention", "SQL Injection", "CSRF Protection", "Secure Coding"],
      assignment: "Audit a web application for security vulnerabilities and implement fixes",
      resources: [
        { type: 'website', title: 'OWASP Foundation', url: 'https://owasp.org', description: 'Web security standards' },
        { type: 'tool', title: 'Burp Suite', url: 'https://portswigger.net/burp', description: 'Web security testing' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 5,
      title: "Ethical Hacking and Penetration Testing",
      description: "Learning to think like an attacker to defend systems",
      topics: ["Reconnaissance", "Scanning Techniques", "Exploitation", "Post-Exploitation", "Report Writing"],
      assignment: "Conduct a penetration test on a vulnerable test system",
      resources: [
        { type: 'tool', title: 'Metasploit Framework', url: 'https://www.metasploit.com', description: 'Penetration testing framework' },
        { type: 'website', title: 'HackerOne', url: 'https://www.hackerone.com', description: 'Bug bounty platform' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 6,
      title: "Security Operations and Monitoring",
      description: "Implementing security monitoring and incident response",
      topics: ["SIEM Systems", "Log Analysis", "Incident Response", "Security Automation", "Threat Intelligence"],
      assignment: "Set up a security monitoring dashboard and respond to simulated incidents",
      resources: [
        { type: 'tool', title: 'Splunk', url: 'https://www.splunk.com', description: 'Security information management' },
        { type: 'website', title: 'SANS Institute', url: 'https://www.sans.org', description: 'Security training and research' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 7,
      title: "Compliance and Security Governance",
      description: "Understanding regulatory requirements and security governance",
      topics: ["GDPR Compliance", "HIPAA Security", "ISO 27001", "Security Policies", "Risk Assessment"],
      assignment: "Develop a comprehensive security policy framework for an organization",
      resources: [
        { type: 'website', title: 'ISO Standards', url: 'https://www.iso.org/isoiec-27001-information-security.html', description: 'Security management standards' },
        { type: 'article', title: 'Security Compliance Guide', url: 'https://www.complianceonline.com', description: 'Regulatory compliance' }
      ],
      aiGeneratedContent: true
    }
  ],
  'Microsoft Office Suites': [
    {
      week: 1,
      title: "Microsoft Word Fundamentals",
      description: "Master document creation and formatting in Microsoft Word",
      topics: ["Document Formatting", "Styles and Templates", "Tables and Graphics", "Mail Merge", "Collaboration"],
      assignment: "Create a professional business report with advanced formatting and collaboration features",
      resources: [
        { type: 'website', title: 'Microsoft Word Support', url: 'https://support.microsoft.com/word', description: 'Official Word documentation' },
        { type: 'video', title: 'Word Complete Tutorial', url: 'https://www.youtube.com/watch?v=' + Math.random().toString(36).substr(2, 11), description: 'Comprehensive Word training' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 2,
      title: "Microsoft Excel Advanced",
      description: "Advanced spreadsheet operations and data analysis in Excel",
      topics: ["Advanced Formulas", "Pivot Tables", "Data Visualization", "Macros", "Power Query"],
      assignment: "Create a comprehensive business dashboard with pivot tables and data visualization",
      resources: [
        { type: 'website', title: 'Excel Easy', url: 'https://www.excel-easy.com', description: 'Excel tutorials and examples' },
        { type: 'tool', title: 'Power BI', url: 'https://powerbi.microsoft.com', description: 'Advanced business analytics' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 3,
      title: "Microsoft PowerPoint Professional",
      description: "Creating compelling presentations with PowerPoint",
      topics: ["Slide Design Principles", "Animation and Transitions", "Multimedia Integration", "Template Creation", "Presentation Delivery"],
      assignment: "Design and deliver a professional business presentation with advanced features",
      resources: [
        { type: 'website', title: 'PowerPoint Templates', url: 'https://templates.office.com', description: 'Official PowerPoint templates' },
        { type: 'article', title: 'Presentation Design Tips', url: 'https://www.canva.com', description: 'Design best practices' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 4,
      title: "Microsoft Outlook and Communication",
      description: "Email management and professional communication",
      topics: ["Email Management", "Calendar Integration", "Contact Management", "Meeting Organization", "Email Automation"],
      assignment: "Set up an efficient email management system with automated workflows",
      resources: [
        { type: 'website', title: 'Outlook Support', url: 'https://support.microsoft.com/outlook', description: 'Official Outlook documentation' },
        { type: 'tool', title: 'Microsoft Teams', url: 'https://teams.microsoft.com', description: 'Team collaboration platform' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 5,
      title: "Microsoft Access Database Management",
      description: "Database creation and management with Access",
      topics: ["Database Design", "Query Creation", "Forms and Reports", "Data Relationships", "Database Security"],
      assignment: "Design and implement a small business database system",
      resources: [
        { type: 'website', title: 'Access Support', url: 'https://support.microsoft.com/access', description: 'Official Access documentation' },
        { type: 'article', title: 'Database Design Principles', url: 'https://www.guru99.com', description: 'Database design fundamentals' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 6,
      title: "Microsoft OneNote and Information Management",
      description: "Digital note-taking and information organization",
      topics: ["Note Organization", "Multimedia Notes", "Collaboration Features", "Integration with Office", "Search and Retrieval"],
      assignment: "Create a comprehensive digital notebook system for project management",
      resources: [
        { type: 'website', title: 'OneNote Support', url: 'https://support.microsoft.com/onenote', description: 'Official OneNote documentation' },
        { type: 'tool', title: 'Microsoft To Do', url: 'https://todo.microsoft.com', description: 'Task management integration' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 7,
      title: "Office 365 Integration and Collaboration",
      description: "Mastering cloud-based collaboration and integration",
      topics: ["Cloud Storage", "Real-time Collaboration", "SharePoint Integration", "Office Online", "Mobile Applications"],
      assignment: "Implement a complete Office 365 collaboration workflow for a team project",
      resources: [
        { type: 'website', title: 'Office 365 Admin Center', url: 'https://admin.microsoft.com', description: 'Office 365 management' },
        { type: 'article', title: 'Cloud Collaboration Best Practices', url: 'https://products.office.com', description: 'Collaboration guidelines' }
      ],
      aiGeneratedContent: true
    }
  ],
  'Computer Graphics Design': [
    {
      week: 1,
      title: "Introduction to Digital Design",
      description: "Fundamentals of digital design and visual communication",
      topics: ["Design Principles", "Color Theory", "Typography Basics", "Layout Fundamentals", "Design Software Overview"],
      assignment: "Create a basic brand identity with logo and color palette",
      resources: [
        { type: 'website', title: 'Adobe Creative Cloud', url: 'https://www.adobe.com/creativecloud', description: 'Professional design tools' },
        { type: 'article', title: 'Design Principles', url: 'https://www.canva.com', description: 'Design fundamentals' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 2,
      title: "Vector Graphics with Adobe Illustrator",
      description: "Creating scalable vector graphics and illustrations",
      topics: ["Illustrator Interface", "Pen Tool Mastery", "Shape Building", "Path Manipulation", "Gradient Techniques"],
      assignment: "Design a complete set of vector icons and illustrations for a mobile app",
      resources: [
        { type: 'website', title: 'Illustrator Tutorials', url: 'https://helpx.adobe.com/illustrator', description: 'Official Illustrator tutorials' },
        { type: 'video', title: 'Illustrator Complete Course', url: 'https://www.youtube.com/watch?v=' + Math.random().toString(36).substr(2, 11), description: 'Comprehensive Illustrator training' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 3,
      title: "Raster Graphics with Adobe Photoshop",
      description: "Photo editing and digital painting techniques",
      topics: ["Photo Retouching", "Layer Management", "Masking Techniques", "Color Correction", "Digital Painting"],
      assignment: "Create a photo composite and digital artwork for a marketing campaign",
      resources: [
        { type: 'website', title: 'Photoshop Tutorials', url: 'https://helpx.adobe.com/photoshop', description: 'Official Photoshop tutorials' },
        { type: 'tool', title: 'Unsplash', url: 'https://unsplash.com', description: 'Free high-quality photos' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 4,
      title: "Layout Design with Adobe InDesign",
      description: "Professional page layout and publication design",
      topics: ["InDesign Interface", "Master Pages", "Text Flow", "Image Integration", "Print Preparation"],
      assignment: "Design a multi-page brochure and magazine layout",
      resources: [
        { type: 'website', title: 'InDesign Tutorials', url: 'https://helpx.adobe.com/indesign', description: 'Official InDesign tutorials' },
        { type: 'article', title: 'Publication Design', url: 'https://www.behance.net', description: 'Design inspiration and examples' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 5,
      title: "Motion Graphics with Adobe After Effects",
      description: "Creating animations and motion graphics",
      topics: ["After Effects Interface", "Keyframe Animation", "Text Animation", "Visual Effects", "Rendering and Export"],
      assignment: "Create an animated logo reveal and promotional video",
      resources: [
        { type: 'website', title: 'After Effects Tutorials', url: 'https://helpx.adobe.com/after-effects', description: 'Official After Effects tutorials' },
        { type: 'video', title: 'Motion Graphics Basics', url: 'https://www.youtube.com/watch?v=' + Math.random().toString(36).substr(2, 11), description: 'Motion graphics introduction' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 6,
      title: "3D Design and Modeling",
      description: "Introduction to 3D design and modeling techniques",
      topics: ["3D Principles", "Modeling Basics", "Texturing and Materials", "Lighting", "Rendering"],
      assignment: "Create a 3D product model and environment visualization",
      resources: [
        { type: 'tool', title: 'Blender', url: 'https://www.blender.org', description: 'Free 3D creation software' },
        { type: 'website', title: 'Sketchfab', url: 'https://sketchfab.com', description: '3D model library' }
      ],
      aiGeneratedContent: true
    },
    {
      week: 7,
      title: "UI/UX Design for Digital Products",
      description: "User interface and user experience design principles",
      topics: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Design Systems"],
      assignment: "Design a complete mobile app UI/UX with interactive prototype",
      resources: [
        { type: 'tool', title: 'Figma', url: 'https://www.figma.com', description: 'Collaborative design tool' },
        { type: 'website', title: 'UX Design Principles', url: 'https://www.nngroup.com', description: 'UX research and guidelines' }
      ],
      aiGeneratedContent: true
    }
  ]
};

// Default courses with comprehensive curriculum
export const DEFAULT_COURSES: Course[] = [
  {
    id: 'course_web_001',
    title: 'Complete Web Development Bootcamp',
    category: 'Web Programming',
    description: 'Master modern web development from HTML basics to full-stack applications',
    instructor: 'Reagan Otema',
    price: 'UGX 1,500,000',
    duration: '7 Weeks',
    image: CATEGORY_IMAGES['Web Programming'],
    students: 245,
    rating: 4.9,
    curriculum: CURRICULUM_TEMPLATES['Web Programming'],
    prerequisites: ['Basic computer skills', 'Logical thinking'],
    learningOutcomes: ['Build responsive websites', 'Create RESTful APIs', 'Deploy full-stack applications', 'Master modern frameworks'],
    certification: 'NextERP Web Development Certificate'
  },
  {
    id: 'course_cyber_001',
    title: 'Cybersecurity Professional Certification',
    category: 'Cybersecurity',
    description: 'Comprehensive cybersecurity training from fundamentals to advanced penetration testing',
    instructor: 'Binsobedde Najiib',
    price: 'UGX 2,000,000',
    duration: '7 Weeks',
    image: CATEGORY_IMAGES['Cybersecurity'],
    students: 189,
    rating: 4.8,
    curriculum: CURRICULUM_TEMPLATES['Cybersecurity'],
    prerequisites: ['Basic networking knowledge', 'Understanding of IT concepts'],
    learningOutcomes: ['Conduct security assessments', 'Implement security controls', 'Perform penetration testing', 'Manage security operations'],
    certification: 'NextERP Cybersecurity Professional Certificate'
  },
  {
    id: 'course_office_001',
    title: 'Microsoft Office Mastery',
    category: 'Microsoft Office Suites',
    description: 'Master all Microsoft Office applications for professional productivity',
    instructor: 'Reagan Otema',
    price: 'UGX 800,000',
    duration: '7 Weeks',
    image: CATEGORY_IMAGES['Microsoft Office Suites'],
    students: 312,
    rating: 4.7,
    curriculum: CURRICULUM_TEMPLATES['Microsoft Office Suites'],
    prerequisites: ['Basic computer literacy'],
    learningOutcomes: ['Master Word, Excel, PowerPoint', 'Advanced data analysis', 'Professional document creation', 'Office 365 collaboration'],
    certification: 'NextERP Microsoft Office Specialist Certificate'
  },
  {
    id: 'course_graphics_001',
    title: 'Computer Graphics Design Professional',
    category: 'Computer Graphics Design',
    description: 'Complete graphics design training from basics to professional portfolio development',
    instructor: 'Binsobedde Najiib',
    price: 'UGX 1,800,000',
    duration: '7 Weeks',
    image: CATEGORY_IMAGES['Computer Graphics Design'],
    students: 156,
    rating: 4.9,
    curriculum: CURRICULUM_TEMPLATES['Computer Graphics Design'],
    prerequisites: ['Creative mindset', 'Basic computer skills'],
    learningOutcomes: ['Master Adobe Creative Suite', 'Create professional designs', 'Develop brand identities', 'Build design portfolio'],
    certification: 'NextERP Graphics Design Professional Certificate'
  }
];
