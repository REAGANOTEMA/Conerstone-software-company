import { Assignment, Course } from '@/types';

export interface W3SchoolsContent {
  title: string;
  url: string;
  topics: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedHours: number;
}

export interface GeneratedAssignment {
  id: string;
  title: string;
  description: string;
  instructions: string;
  questions: AssignmentQuestion[];
  markingGuide: MarkingGuideItem[];
  resources: Resource[];
  estimatedTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  rubric: {
    criteria: string[];
    totalPoints: number;
  };
}

export interface AssignmentQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'coding' | 'practical' | 'essay';
  question: string;
  options?: string[];
  correctAnswer?: string;
  points: number;
  explanation?: string;
  hints?: string[];
}

export interface MarkingGuideItem {
  criteria: string;
  description: string;
  points: number;
  excellent: string;
  good: string;
  satisfactory: string;
  needsImprovement: string;
}

export interface Resource {
  title: string;
  url: string;
  type: 'tutorial' | 'documentation' | 'video' | 'exercise' | 'reference';
  description: string;
}

const W3SCHOOLS_COURSES: W3SchoolsContent[] = [
  {
    title: 'HTML',
    url: 'https://www.w3schools.com/html/default.asp',
    topics: [
      'HTML Introduction',
      'HTML Elements',
      'HTML Attributes',
      'HTML Headings',
      'HTML Paragraphs',
      'HTML Styles',
      'HTML Formatting',
      'HTML Quotations',
      'HTML Comments',
      'HTML CSS',
      'HTML Links',
      'HTML Images',
      'HTML Tables',
      'HTML Lists',
      'HTML Forms',
      'HTML Input Types',
      'HTML Input Attributes',
      'HTML5 Semantic Elements',
      'HTML Graphics',
      'HTML Media'
    ],
    difficulty: 'beginner',
    estimatedHours: 15
  },
  {
    title: 'CSS',
    url: 'https://www.w3schools.com/css/default.asp',
    topics: [
      'CSS Introduction',
      'CSS Syntax',
      'CSS Selectors',
      'CSS How To',
      'CSS Comments',
      'CSS Colors',
      'CSS Backgrounds',
      'CSS Borders',
      'CSS Margins',
      'CSS Padding',
      'CSS Height/Width',
      'CSS Box Model',
      'CSS Outline',
      'CSS Text',
      'CSS Fonts',
      'CSS Icons',
      'CSS Links',
      'CSS Lists',
      'CSS Tables',
      'CSS Display',
      'CSS Position',
      'CSS Overflow',
      'CSS Float',
      'CSS Inline-block',
      'CSS Align',
      'CSS Combinators',
      'CSS Pseudo-classes',
      'CSS Pseudo-elements',
      'CSS Opacity',
      'CSS Navigation Bar',
      'CSS Dropdowns',
      'CSS Image Gallery',
      'CSS Image Sprites',
      'CSS Attr Selectors',
      'CSS Forms',
      'CSS Counters',
      'CSS Website Layout',
      'CSS Units',
      'CSS Specificity',
      'CSS !important',
      'CSS Math Functions',
      'CSS Advanced'
    ],
    difficulty: 'intermediate',
    estimatedHours: 20
  },
  {
    title: 'JavaScript',
    url: 'https://www.w3schools.com/js/default.asp',
    topics: [
      'JS Introduction',
      'JS Where To',
      'JS Output',
      'JS Statements',
      'JS Syntax',
      'JS Comments',
      'JS Variables',
      'JS Let',
      'JS Const',
      'JS Operators',
      'JS Arithmetic',
      'JS Assignment',
      'JS Data Types',
      'JS Functions',
      'JS Objects',
      'JS Events',
      'JS Strings',
      'JS String Methods',
      'JS String Search',
      'JS String Templates',
      'JS Numbers',
      'JS Number Methods',
      'JS Arrays',
      'JS Array Methods',
      'JS Array Sort',
      'JS Array Iteration',
      'JS Dates',
      'JS Date Formats',
      'JS Date Get Methods',
      'JS Date Set Methods',
      'JS Math',
      'JS Random',
      'JS Booleans',
      'JS Comparisons',
      'JS If Else',
      'JS Switch',
      'JS For Loop',
      'JS For In',
      'JS For Of',
      'JS While Loop',
      'JS Break',
      'JS Iterables',
      'JS Sets',
      'JS Maps',
      'JS Typeof',
      'JS Type Conversion',
      'JS Bitwise',
      'JS RegExp',
      'JS Errors',
      'JS Scope',
      'JS Hoisting',
      'JS Strict Mode',
      'JS this Keyword',
      'JS Arrow Functions',
      'JS Classes',
      'JS Modules',
      'JS JSON',
      'JS Debugging',
      'JS Style Guide',
      'JS Best Practices',
      'JS Mistakes',
      'JS Performance',
      'JS Reserved Words'
    ],
    difficulty: 'intermediate',
    estimatedHours: 25
  },
  {
    title: 'SQL',
    url: 'https://www.w3schools.com/sql/default.asp',
    topics: [
      'SQL Intro',
      'SQL Syntax',
      'SQL Select',
      'SQL Select Distinct',
      'SQL Where',
      'SQL And, Or, Not',
      'SQL Order By',
      'SQL Insert Into',
      'SQL Null Values',
      'SQL Update',
      'SQL Delete',
      'SQL Select Top',
      'SQL Min and Max',
      'SQL Count, Avg, Sum',
      'SQL Like',
      'SQL Wildcards',
      'SQL In',
      'SQL Between',
      'SQL Aliases',
      'SQL Joins',
      'SQL Inner Join',
      'SQL Left Join',
      'SQL Right Join',
      'SQL Full Join',
      'SQL Self Join',
      'SQL Union',
      'SQL Group By',
      'SQL Having',
      'SQL Exists',
      'SQL Any, All',
      'SQL Select Into',
      'SQL Insert Into Select',
      'SQL Case',
      'SQL Null Functions',
      'SQL Stored Procedures',
      'SQL Comments',
      'SQL Operators',
      'SQL Database',
      'SQL Create DB',
      'SQL Drop DB',
      'SQL Backup DB',
      'SQL Create Table',
      'SQL Drop Table',
      'SQL Alter Table',
      'SQL Constraints',
      'SQL Not Null',
      'SQL Unique',
      'SQL Primary Key',
      'SQL Foreign Key',
      'SQL Check',
      'SQL Default',
      'SQL Create Index',
      'SQL Drop Index',
      'SQL Auto Increment',
      'SQL Dates',
      'SQL Views',
      'SQL Injection',
      'SQL Hosting',
      'SQL Data Types',
      'SQL Functions'
    ],
    difficulty: 'intermediate',
    estimatedHours: 20
  },
  {
    title: 'Python',
    url: 'https://www.w3schools.com/python/default.asp',
    topics: [
      'Python Intro',
      'Python Get Started',
      'Python Syntax',
      'Python Comments',
      'Python Variables',
      'Python Data Types',
      'Python Numbers',
      'Python Casting',
      'Python Strings',
      'Python Booleans',
      'Python Operators',
      'Python Lists',
      'Python Tuples',
      'Python Sets',
      'Python Dictionaries',
      'Python If...Else',
      'Python While Loops',
      'Python For Loops',
      'Python Functions',
      'Python Lambda',
      'Python Arrays',
      'Python Classes/Objects',
      'Python Inheritance',
      'Python Iterators',
      'Python Polymorphism',
      'Python Scope',
      'Python Modules',
      'Python Dates',
      'Python Math',
      'Python JSON',
      'Python RegEx',
      'Python PIP',
      'Python Try...Except',
      'Python User Input',
      'Python String Formatting',
      'File Handling',
      'Python File Open',
      'Python File Read',
      'Python File Write',
      'Python File Delete'
    ],
    difficulty: 'intermediate',
    estimatedHours: 30
  },
  {
    title: 'Java',
    url: 'https://www.w3schools.com/java/default.asp',
    topics: [
      'Java Intro',
      'Java Get Started',
      'Java Syntax',
      'Java Comments',
      'Java Variables',
      'Java Data Types',
      'Java Type Casting',
      'Java Operators',
      'Java Strings',
      'Java Math',
      'Java Booleans',
      'Java If...Else',
      'Java Switch',
      'Java While Loop',
      'Java For Loop',
      'Java Break/Continue',
      'Java Arrays',
      'Java Methods',
      'Java Method Overloading',
      'Java Scope',
      'Java Recursion',
      'Java Classes',
      'Java OOP',
      'Java Class Attributes',
      'Java Class Methods',
      'Java Constructors',
      'Java Modifiers',
      'Java Encapsulation',
      'Java Packages / API',
      'Java Inheritance',
      'Java Polymorphism',
      'Java Abstraction',
      'Java Interface',
      'Java Enums',
      'Java User Input',
      'Java Date',
      'Java ArrayList',
      'Java LinkedList',
      'Java HashMap',
      'Java HashSet',
      'Java Iterator',
      'Java Wrapper Classes',
      'Java Exceptions',
      'Java RegEx',
      'Java Threads',
      'Java Lambda',
      'Java File Handling'
    ],
    difficulty: 'advanced',
    estimatedHours: 35
  },
  {
    title: 'PHP',
    url: 'https://www.w3schools.com/php/default.asp',
    topics: [
      'PHP Intro',
      'PHP Installation',
      'PHP Syntax',
      'PHP Comments',
      'PHP Variables',
      'PHP Variables Scope',
      'PHP Echo and Print',
      'PHP Data Types',
      'PHP Strings',
      'PHP Numbers',
      'PHP Math',
      'PHP Constants',
      'PHP Operators',
      'PHP If...Else...Elseif',
      'PHP Switch',
      'PHP Loops',
      'PHP Functions',
      'PHP Arrays',
      'PHP Arrays Indexed',
      'PHP Arrays Associative',
      'PHP Arrays Multidimensional',
      'PHP Arrays Sort',
      'PHP Superglobals',
      'PHP Form Handling',
      'PHP Form Validation',
      'PHP Form Required',
      'PHP Form URL/E-mail',
      'PHP Form Complete',
      'PHP Advanced',
      'PHP Date and Time',
      'PHP Include',
      'PHP File Handling',
      'PHP File Open/Read',
      'PHP File Create/Write',
      'PHP File Upload',
      'PHP Cookies',
      'PHP Sessions',
      'PHP Filters',
      'PHP Filters Advanced',
      'PHP Callback Functions',
      'PHP JSON',
      'PHP OOP',
      'PHP Exception',
      'PHP MySQL Database'
    ],
    difficulty: 'intermediate',
    estimatedHours: 25
  },
  {
    title: 'React',
    url: 'https://www.w3schools.com/react/default.asp',
    topics: [
      'React Intro',
      'React Get Started',
      'React ES6',
      'React Render HTML',
      'React JSX',
      'React Components',
      'React Class',
      'React Props',
      'React State',
      'React Lifecycle',
      'React Events',
      'React Conditionals',
      'React Lists',
      'React Forms',
      'React Router',
      'React Memo',
      'React CSS Styling',
      'React Sass Styling'
    ],
    difficulty: 'advanced',
    estimatedHours: 20
  }
];

class AIAssignmentGenerator {
  private generateQuestions(topic: string, difficulty: string): AssignmentQuestion[] {
    const questions: AssignmentQuestion[] = [];
    
    // Multiple Choice Questions
    questions.push({
      id: `mcq-${topic.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'multiple-choice',
      question: `What is the primary purpose of ${topic} in web development?`,
      options: [
        `To handle ${topic.toLowerCase()} specific functionality`,
        `To style web pages`,
        `To create database connections`,
        `To manage server-side logic`
      ],
      correctAnswer: `To handle ${topic.toLowerCase()} specific functionality`,
      points: 5,
      explanation: `${topic} is designed specifically for ${topic.toLowerCase()} operations in web development.`,
      hints: [`Think about what ${topic} is primarily used for`, `Consider the main purpose of ${topic}`]
    });

    // True/False Questions
    questions.push({
      id: `tf-${topic.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'true-false',
      question: `${topic} is essential for modern web development.`,
      correctAnswer: 'True',
      points: 3,
      explanation: `${topic} plays a crucial role in contemporary web development practices.`
    });

    // Short Answer Questions
    questions.push({
      id: `sa-${topic.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'short-answer',
      question: `Explain the importance of ${topic} in a web application.`,
      points: 10,
      explanation: `A good answer should cover the main benefits and use cases of ${topic}.`
    });

    // Coding/Practical Questions
    if (['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'PHP', 'React'].includes(topic)) {
      questions.push({
        id: `code-${topic.toLowerCase().replace(/\s+/g, '-')}`,
        type: 'coding',
        question: `Write a basic ${topic} example that demonstrates fundamental concepts.`,
        points: 15,
        explanation: `The solution should show understanding of ${topic} syntax and basic principles.`,
        hints: [`Start with basic syntax`, `Include comments to explain your code`]
      });
    }

    return questions;
  }

  private generateMarkingGuide(topic: string, difficulty: string): MarkingGuideItem[] {
    return [
      {
        criteria: 'Understanding of Concepts',
        description: `Demonstrates clear understanding of ${topic} fundamentals`,
        points: 25,
        excellent: `Comprehensive understanding with advanced insights into ${topic}`,
        good: `Solid understanding of ${topic} concepts with some depth`,
        satisfactory: `Basic understanding of ${topic} fundamentals`,
        needsImprovement: `Limited understanding of ${topic} concepts`
      },
      {
        criteria: 'Practical Application',
        description: `Ability to apply ${topic} concepts in practical scenarios`,
        points: 30,
        excellent: `Exceptional practical application with innovative solutions`,
        good: `Strong practical application with effective solutions`,
        satisfactory: `Adequate practical application with basic solutions`,
        needsImprovement: `Limited practical application of ${topic}`
      },
      {
        criteria: 'Code Quality/Structure',
        description: `Quality and organization of ${topic} implementation`,
        points: 20,
        excellent: `Outstanding code quality with excellent structure and documentation`,
        good: `Good code quality with clear structure and some documentation`,
        satisfactory: `Acceptable code quality with basic structure`,
        needsImprovement: `Poor code quality with minimal structure`
      },
      {
        criteria: 'Problem Solving',
        description: `Ability to solve problems using ${topic}`,
        points: 15,
        excellent: `Exceptional problem-solving with creative solutions`,
        good: `Strong problem-solving with effective approaches`,
        satisfactory: `Adequate problem-solving with basic approaches`,
        needsImprovement: `Limited problem-solving abilities`
      },
      {
        criteria: 'Documentation',
        description: `Quality of explanations and documentation`,
        points: 10,
        excellent: `Excellent documentation with detailed explanations`,
        good: `Good documentation with clear explanations`,
        satisfactory: `Basic documentation with minimal explanations`,
        needsImprovement: `Poor or missing documentation`
      }
    ];
  }

  private generateResources(topic: string, url: string): Resource[] {
    return [
      {
        title: `${topic} Official Documentation`,
        url: url,
        type: 'documentation',
        description: `Complete ${topic} reference and documentation from W3Schools`
      },
      {
        title: `${topic} Interactive Tutorial`,
        url: `${url}intro.asp`,
        type: 'tutorial',
        description: `Interactive ${topic} tutorial with hands-on exercises`
      },
      {
        title: `${topic} Examples`,
        url: `${url}examples.asp`,
        type: 'exercise',
        description: `Collection of ${topic} code examples and exercises`
      },
      {
        title: `${topic} Reference`,
        url: `${url}ref_default.asp`,
        type: 'reference',
        description: `Quick reference guide for ${topic} syntax and functions`
      }
    ];
  }

  private generateAssignmentTitle(topic: string, difficulty: string): string {
    const difficultyPrefix = {
      'easy': 'Introduction to',
      'medium': 'Intermediate',
      'hard': 'Advanced'
    };
    
    return `${difficultyPrefix[difficulty as keyof typeof difficultyPrefix]} ${topic} Development`;
  }

  private generateInstructions(topic: string, difficulty: string): string {
    return `
This assignment will test your understanding and practical skills in ${topic} development.

## Objectives:
1. Demonstrate understanding of ${topic} fundamentals
2. Apply ${topic} concepts to solve practical problems
3. Write clean, well-structured ${topic} code
4. Document your solutions effectively

## Requirements:
- Complete all questions to the best of your ability
- Provide clear explanations for your solutions
- Include comments in your code where applicable
- Follow best practices for ${topic} development

## Submission Guidelines:
- Submit your work in the appropriate format
- Ensure all files are properly named
- Include any necessary dependencies or libraries
- Test your solutions before submission

## Evaluation:
Your work will be evaluated based on:
- Understanding of ${topic} concepts
- Quality of implementation
- Problem-solving approach
- Documentation and explanation quality

Good luck!
    `.trim();
  }

  public async generateAssignment(
    course: W3SchoolsContent,
    difficulty: 'easy' | 'medium' | 'hard' = 'medium',
    selectedTopics?: string[]
  ): Promise<GeneratedAssignment> {
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));

    const topicsToGenerate = selectedTopics && selectedTopics.length > 0 
      ? selectedTopics 
      : course.topics.slice(0, 5); // Generate for first 5 topics by default

    const allQuestions: AssignmentQuestion[] = [];
    const allMarkingGuide: MarkingGuideItem[] = [];

    // Generate questions for each topic
    topicsToGenerate.forEach(topic => {
      allQuestions.push(...this.generateQuestions(topic, course.difficulty));
    });

    // Generate comprehensive marking guide
    allMarkingGuide.push(...this.generateMarkingGuide(course.title, course.difficulty));

    const totalPoints = allQuestions.reduce((sum, q) => sum + q.points, 0);
    const estimatedTime = `${Math.ceil(totalPoints / 10)} hours`;

    return {
      id: `assignment-${course.title.toLowerCase()}-${Date.now()}`,
      title: this.generateAssignmentTitle(course.title, difficulty),
      description: `Comprehensive ${course.title} assignment covering key concepts and practical applications.`,
      instructions: this.generateInstructions(course.title, difficulty),
      questions: allQuestions,
      markingGuide: allMarkingGuide,
      resources: this.generateResources(course.title, course.url),
      estimatedTime,
      difficulty,
      points: totalPoints,
      rubric: {
        criteria: allMarkingGuide.map(item => item.criteria),
        totalPoints: totalPoints
      }
    };
  }

  public async generateMultipleAssignments(
    courses: W3SchoolsContent[],
    difficulty: 'easy' | 'medium' | 'hard' = 'medium'
  ): Promise<GeneratedAssignment[]> {
    const assignments: GeneratedAssignment[] = [];

    for (const course of courses) {
      try {
        const assignment = await this.generateAssignment(course, difficulty);
        assignments.push(assignment);
      } catch (error) {
        console.error(`Error generating assignment for ${course.title}:`, error);
      }
    }

    return assignments;
  }

  public getAvailableCourses(): W3SchoolsContent[] {
    return W3SCHOOLS_COURSES;
  }

  public getCourseByTitle(title: string): W3SchoolsContent | undefined {
    return W3SCHOOLS_COURSES.find(course => 
      course.title.toLowerCase() === title.toLowerCase()
    );
  }
}

export const aiAssignmentGenerator = new AIAssignmentGenerator();
export default AIAssignmentGenerator;
