// Utility for handling external links and content fetching

export interface ExternalContent {
  title: string;
  content: string;
  topics: string[];
  examples: string[];
  exercises: string[];
  references: string[];
}

export class ExternalLinkFetcher {
  private static instance: ExternalLinkFetcher;
  
  public static getInstance(): ExternalLinkFetcher {
    if (!ExternalLinkFetcher.instance) {
      ExternalLinkFetcher.instance = new ExternalLinkFetcher();
    }
    return ExternalLinkFetcher.instance;
  }

  /**
   * Fetch content from W3Schools URLs
   * Note: In production, this would require CORS proxy or server-side fetching
   */
  async fetchW3SchoolsContent(url: string): Promise<ExternalContent> {
    try {
      // For demo purposes, return structured content based on URL
      // In production, you'd use a CORS proxy or server-side fetching
      const courseName = this.extractCourseName(url);
      return this.generateMockContent(courseName, url);
    } catch (error) {
      console.error('Error fetching external content:', error);
      throw new Error('Failed to fetch external content');
    }
  }

  private extractCourseName(url: string): string {
    const match = url.match(/\/([a-z]+)\.asp/);
    return match ? match[1] : 'unknown';
  }

  private generateMockContent(courseName: string, url: string): ExternalContent {
    const contentMap: Record<string, ExternalContent> = {
      html: {
        title: 'HTML Tutorial',
        content: 'HTML is the standard markup language for creating web pages. It describes the structure and content of a web page using elements and tags.',
        topics: [
          'HTML Elements',
          'HTML Attributes',
          'HTML Headings',
          'HTML Paragraphs',
          'HTML Links',
          'HTML Images',
          'HTML Tables',
          'HTML Lists',
          'HTML Forms',
          'HTML5 Semantic Elements'
        ],
        examples: [
          '<h1>Hello World</h1>',
          '<a href="https://example.com">Link</a>',
          '<img src="image.jpg" alt="Description">',
          '<table><tr><td>Cell</td></tr></table>',
          '<form><input type="text"></form>'
        ],
        exercises: [
          'Create a basic HTML page with headings and paragraphs',
          'Add links and images to your page',
          'Create a table with sample data',
          'Build a simple contact form',
          'Use semantic HTML5 elements'
        ],
        references: [
          'https://developer.mozilla.org/en-US/docs/Web/HTML',
          'https://html.spec.whatwg.org/',
          'https://www.w3.org/html/'
        ]
      },
      css: {
        title: 'CSS Tutorial',
        content: 'CSS is used to style and layout web pages. It describes how HTML elements should be displayed, including colors, fonts, spacing, and positioning.',
        topics: [
          'CSS Syntax',
          'CSS Selectors',
          'CSS Colors',
          'CSS Backgrounds',
          'CSS Borders',
          'CSS Margins and Padding',
          'CSS Text and Fonts',
          'CSS Display and Position',
          'CSS Flexbox',
          'CSS Grid',
          'CSS Transitions and Animations'
        ],
        examples: [
          'body { font-family: Arial, sans-serif; }',
          '.container { max-width: 1200px; margin: 0 auto; }',
          'button { background-color: #007bff; color: white; }',
          '@media (max-width: 768px) { .responsive { width: 100%; } }',
          '.animate { transition: all 0.3s ease; }'
        ],
        exercises: [
          'Style a navigation bar with CSS',
          'Create responsive layouts with Flexbox',
          'Build a card component with hover effects',
          'Design a responsive grid layout',
          'Add animations and transitions'
        ],
        references: [
          'https://developer.mozilla.org/en-US/docs/Web/CSS',
          'https://www.w3.org/Style/CSS/',
          'https://css-tricks.com/'
        ]
      },
      js: {
        title: 'JavaScript Tutorial',
        content: 'JavaScript is a programming language that enables interactive web pages. It is an essential part of web applications, providing dynamic behavior and user interactions.',
        topics: [
          'JavaScript Syntax',
          'Variables and Data Types',
          'Functions',
          'Objects and Arrays',
          'DOM Manipulation',
          'Event Handling',
          'Async JavaScript',
          'ES6+ Features',
          'Error Handling',
          'Modules and Imports'
        ],
        examples: [
          'const greeting = "Hello, World!";',
          'function add(a, b) { return a + b; }',
          'document.getElementById("myElement").textContent = "Updated";',
          'fetch("/api/data").then(response => response.json());',
          'const [count, setCount] = useState(0);'
        ],
        exercises: [
          'Create a simple calculator',
          'Build a to-do list application',
          'Implement form validation',
          'Create an interactive game',
          'Build a weather app with API integration'
        ],
        references: [
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          'https://tc39.es/ecma262/',
          'https://javascript.info/'
        ]
      },
      sql: {
        title: 'SQL Tutorial',
        content: 'SQL (Structured Query Language) is used to manage and manipulate data in relational databases. It enables you to create, read, update, and delete data.',
        topics: [
          'SQL SELECT',
          'SQL WHERE',
          'SQL INSERT',
          'SQL UPDATE',
          'SQL DELETE',
          'SQL JOINs',
          'SQL GROUP BY',
          'SQL Aggregates',
          'SQL Subqueries',
          'Database Design'
        ],
        examples: [
          'SELECT * FROM users WHERE age > 18;',
          'INSERT INTO customers (name, email) VALUES ("John", "john@example.com");',
          'UPDATE products SET price = 29.99 WHERE id = 1;',
          'DELETE FROM orders WHERE status = "cancelled";',
          'SELECT u.name, o.total FROM users u JOIN orders o ON u.id = o.user_id;'
        ],
        exercises: [
          'Create a database schema for an e-commerce site',
          'Write complex queries with multiple JOINs',
          'Design reports with GROUP BY and aggregates',
          'Optimize slow queries',
          'Create stored procedures and functions'
        ],
        references: [
          'https://www.w3schools.com/sql/',
          'https://dev.mysql.com/doc/',
          'https://www.postgresql.org/docs/'
        ]
      },
      python: {
        title: 'Python Tutorial',
        content: 'Python is a high-level, interpreted programming language known for its simplicity and readability. It is widely used in web development, data science, AI, and automation.',
        topics: [
          'Python Basics',
          'Data Types and Variables',
          'Control Flow',
          'Functions',
          'Lists and Dictionaries',
          'Object-Oriented Programming',
          'File Handling',
          'Modules and Packages',
          'Error Handling',
          'Python Standard Library'
        ],
        examples: [
          'print("Hello, World!")',
          'def greet(name): return f"Hello, {name}!"',
          'numbers = [1, 2, 3, 4, 5]',
          'class Person: def __init__(self, name): self.name = name',
          'with open("file.txt", "r") as f: content = f.read()'
        ],
        exercises: [
          'Create a text-based adventure game',
          'Build a contact book application',
          'Implement data analysis with pandas',
          'Create a web scraper',
          'Build a simple REST API'
        ],
        references: [
          'https://docs.python.org/3/',
          'https://realpython.com/',
          'https://www.python.org/dev/peps/pep-0008/'
        ]
      },
      java: {
        title: 'Java Tutorial',
        content: 'Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is widely used for enterprise applications.',
        topics: [
          'Java Syntax',
          'Object-Oriented Programming',
          'Classes and Objects',
          'Inheritance and Polymorphism',
          'Exception Handling',
          'Collections Framework',
          'Java I/O',
          'Multithreading',
          'Java 8+ Features',
          'Spring Framework'
        ],
        examples: [
          'public class HelloWorld { public static void main(String[] args) { System.out.println("Hello, World!"); } }',
          'String name = "Java";',
          'List<String> items = new ArrayList<>();',
          'try { riskyOperation(); } catch (Exception e) { e.printStackTrace(); }',
          'Stream.of(1, 2, 3).map(n -> n * 2).collect(Collectors.toList());'
        ],
        exercises: [
          'Create a banking application',
          'Build a library management system',
          'Implement design patterns',
          'Create a web application with Spring Boot',
          'Develop a multiplayer game'
        ],
        references: [
          'https://docs.oracle.com/javase/',
          'https://spring.io/guides',
          'https://www.baeldung.com/java'
        ]
      },
      php: {
        title: 'PHP Tutorial',
        content: 'PHP is a server-side scripting language designed for web development. It is widely used for creating dynamic web pages and web applications.',
        topics: [
          'PHP Syntax',
          'Variables and Data Types',
          'Control Structures',
          'Functions',
          'Arrays',
          'Form Handling',
          'Database Connectivity',
          'Session Management',
          'File Operations',
          'Security Best Practices'
        ],
        examples: [
          '<?php echo "Hello, World!"; ?>',
          '$name = "PHP";',
          'function calculate($a, $b) { return $a + $b; }',
          '$_POST["username"]',
          '$pdo = new PDO("mysql:host=localhost;dbname=test", "user", "password");'
        ],
        exercises: [
          'Create a blog system',
          'Build a user authentication system',
          'Develop an e-commerce platform',
          'Create a content management system',
          'Build a REST API with PHP'
        ],
        references: [
          'https://www.php.net/docs.php',
          'https://laravel.com/docs',
          'https://www.w3schools.com/php/'
        ]
      },
      react: {
        title: 'React Tutorial',
        content: 'React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage application state efficiently.',
        topics: [
          'React Components',
          'JSX Syntax',
          'Props and State',
          'Component Lifecycle',
          'Hooks (useState, useEffect)',
          'Conditional Rendering',
          'Lists and Keys',
          'Forms and Events',
          'React Router',
          'Context API'
        ],
        examples: [
          'function Welcome(props) { return <h1>Hello, {props.name}</h1>; }',
          'const [count, setCount] = useState(0);',
          'useEffect(() => { document.title = count; }, [count]);',
          '<button onClick={() => setCount(count + 1)}>Click me</button>',
          'const items = data.map(item => <li key={item.id}>{item.name}</li>);'
        ],
        exercises: [
          'Create a todo application',
          'Build a weather app',
          'Develop a social media dashboard',
          'Create an e-commerce product listing',
          'Build a real-time chat application'
        ],
        references: [
          'https://reactjs.org/docs/',
          'https://reactrouter.com/',
          'https://redux.js.org/'
        ]
      }
    };

    return contentMap[courseName] || {
      title: `${courseName.toUpperCase()} Tutorial`,
      content: `Learn ${courseName.toUpperCase()} programming with comprehensive tutorials and examples.`,
      topics: [`Basic ${courseName.toUpperCase()} concepts`, `Advanced ${courseName.toUpperCase()} features`],
      examples: [`// ${courseName.toUpperCase()} example code`],
      exercises: [`Practice ${courseName.toUpperCase()} exercises`],
      references: [`https://www.w3schools.com/${courseName}/`]
    };
  }

  /**
   * Validate if a URL is accessible and contains educational content
   */
  async validateUrl(url: string): Promise<boolean> {
    try {
      // Basic URL validation
      const urlObj = new URL(url);
      const validDomains = ['w3schools.com', 'developer.mozilla.org', 'github.com'];
      
      return validDomains.some(domain => urlObj.hostname.includes(domain));
    } catch (error) {
      return false;
    }
  }

  /**
   * Extract key topics from external content
   */
  extractTopics(content: string): string[] {
    // Simple topic extraction - in production, use NLP or more sophisticated parsing
    const topicRegex = /(?:learn|understand|master|explore)\s+([a-zA-Z\s]+)/gi;
    const matches = content.match(topicRegex);
    
    if (matches) {
      return matches.map(match => match.replace(/(?:learn|understand|master|explore)\s+/i, '').trim());
    }
    
    return [];
  }

  /**
   * Generate quiz questions from content
   */
  generateQuestions(content: ExternalContent, count: number = 5): Array<{
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }> {
    const questions = [];
    
    for (let i = 0; i < Math.min(count, content.topics.length); i++) {
      const topic = content.topics[i];
      questions.push({
        question: `What is the primary purpose of ${topic} in ${content.title}?`,
        options: [
          `To handle ${topic.toLowerCase()} functionality`,
          `To style web pages`,
          `To create database connections`,
          `To manage server-side logic`
        ],
        correctAnswer: 0,
        explanation: `${topic} is specifically designed for ${topic.toLowerCase()} operations in ${content.title}.`
      });
    }
    
    return questions;
  }
}

export const externalLinkFetcher = ExternalLinkFetcher.getInstance();
export default ExternalLinkFetcher;
