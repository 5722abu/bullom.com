export interface User {
  id: string;
  email: string;
  name: string;
  role: "job_seeker" | "employer" | "admin";
  created_at: string;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  category: string;
  experience: string;
  description?: string;
  postedDate?: string;
  logo?: string;
}

export interface Company {
  id: number;
  name: string;
  industry: string;
  location: string;
  openPositions: number;
  rating: number;
  employees: string;
  description?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}
