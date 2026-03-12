"use client";

/**
 * NextERP Systems
 * Local Data Service
 * Used by all ERP modules
 */

type ID = string | number;

const PREFIX = "nexterp_";

/* ---------------- STORAGE ENGINE ---------------- */

export const storage = {

  get<T>(key: string, defaultValue: T): T {
    try {
      const saved = localStorage.getItem(PREFIX + key);
      return saved ? JSON.parse(saved) : defaultValue;
    } catch {
      return defaultValue;
    }
  },

  set<T>(key: string, value: T) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch (err) {
      console.error("Storage set error:", err);
    }
  },

  add<T extends { id?: ID }>(key: string, item: T) {
    const current = storage.get<T[]>(key, []);

    const newItem = {
      ...item,
      id: item.id ?? Date.now()
    };

    const updated = [newItem, ...current];

    storage.set(key, updated);

    return updated;
  },

  update<T extends { id: ID }>(key: string, id: ID, data: Partial<T>) {
    const current = storage.get<T[]>(key, []);

    const updated = current.map(item =>
      item.id === id ? { ...item, ...data } : item
    );

    storage.set(key, updated);

    return updated;
  },

  delete(key: string, id: ID) {
    const current = storage.get<any[]>(key, []);

    const updated = current.filter(item => item.id !== id);

    storage.set(key, updated);

    return updated;
  },

  reset(key: string, defaultValue: any) {
    storage.set(key, defaultValue);
    return defaultValue;
  }
};

/* ---------------- INITIAL ERP DATA ---------------- */

export const initialData = {

  /* PROJECTS */

  projects: [
    {
      id: 1,
      name: "School Management System",
      client: "Iganga High School",
      status: "In Progress",
      progress: 85,
      deadline: "2024-10-24",
      team: ["RO", "BN"],
      priority: "High",
      category: "Education"
    },
    {
      id: 2,
      name: "Hospital ERP v2.0",
      client: "Main Street Clinic",
      status: "Planning",
      progress: 15,
      deadline: "2024-12-12",
      team: ["BN"],
      priority: "Medium",
      category: "Healthcare"
    }
  ],

  /* COMPANY ASSETS */

  assets: [
    {
      id: "AST-001",
      name: "MacBook Pro M2",
      category: "Hardware",
      owner: "Reagan Otema",
      status: "Active",
      value: "UGX 8,500,000",
      purchaseDate: "2023-05-10"
    },
    {
      id: "AST-002",
      name: "Dell UltraSharp 27\"",
      category: "Hardware",
      owner: "Binsobedde Najiib",
      status: "Active",
      value: "UGX 2,200,000",
      purchaseDate: "2023-06-15"
    }
  ],

  /* CLIENTS */

  clients: [
    {
      id: 1,
      name: "Iganga High School",
      industry: "Education",
      contact: "Dr. James Okello",
      email: "admin@igangahigh.sc.ug",
      status: "Active",
      projects: 2,
      revenue: "UGX 45,000,000",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=IH"
    }
  ],

  /* FINANCE */

  transactions: [
    {
      id: "INV-001",
      client: "Iganga High School",
      amount: 9500000,
      status: "Paid",
      date: "2024-09-15",
      type: "Revenue"
    },
    {
      id: "EXP-042",
      client: "Cloud Hosting (AWS)",
      amount: 1800000,
      status: "Completed",
      date: "2024-09-14",
      type: "Expense"
    }
  ],

  /* TRAINING ACADEMY */

  courses: [
    {
      id: 1,
      title: "Full-Stack Web Development",
      instructor: "Binsobedde Najiib",
      students: 45,
      duration: "7 Weeks",
      rating: 4.9,
      price: "UGX 1,200,000",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400",
      category: "Development",

      curriculum: [
        {
          week: 1,
          title: "Introduction & Environment Setup",
          assignment: "Setup local dev environment and push first React app to GitHub."
        },
        {
          week: 2,
          title: "Advanced TypeScript & React Patterns",
          assignment: "Build a reusable component library with custom hooks."
        },
        {
          week: 3,
          title: "Backend Architecture with Node.js",
          assignment: "Design a RESTful API with Express and middleware."
        },
        {
          week: 4,
          title: "Database Design & Multi-tenancy",
          assignment: "Create a multi-tenant schema for an ERP system."
        },
        {
          week: 5,
          title: "Security & Authentication",
          assignment: "Implement JWT auth and RBAC for the API."
        },
        {
          week: 6,
          title: "Deployment & CI/CD",
          assignment: "Deploy the full-stack app with CI/CD."
        },
        {
          week: 7,
          title: "Final Project & Certification",
          assignment: "Submit the completed ERP module for review."
        }
      ]
    }
  ],

  /* HR MODULE */

  leave_requests: [
    {
      id: 1,
      employee: "John Ssekandi",
      type: "Annual Leave",
      start: "2024-10-10",
      end: "2024-10-20",
      status: "Approved",
      days: 10
    },
    {
      id: 2,
      employee: "Alice Kyomugisha",
      type: "Sick Leave",
      start: "2024-10-15",
      end: "2024-10-16",
      status: "Pending",
      days: 1
    },
    {
      id: 3,
      employee: "Binsobedde Najiib",
      type: "Business Trip",
      start: "2024-11-01",
      end: "2024-11-05",
      status: "Pending",
      days: 4
    }
  ],

  /* COMPLIANCE */

  documents: [
    {
      id: 1,
      title: "Company Registration Certificate",
      type: "Legal",
      status: "Valid",
      expiry: "N/A"
    },
    {
      id: 2,
      title: "Tax Clearance Certificate",
      type: "Compliance",
      status: "Valid",
      expiry: "2027-01-01"
    }
  ]
};