export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  technologies: string[];
  category: "backend" | "fullstack" | "ai" | "devops" | "open-source";
  github?: string;
  live?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "shelfwise",
    slug: "shelfwise",
    title: "ShelfWise",
    description: "A comprehensive, offline-first library management solution built with enterprise-grade security and modern UI/UX.",
    longDescription: "ShelfWise is a full-featured, production-ready library management system designed specifically for offline-first operations. Built with React and Spring Boot, it provides a seamless experience for managing books, members, and transactions with role-based access control and comprehensive reporting capabilities.",
    technologies: ["Spring Boot", "React", "MySQL", "Docker", "TypeScript", "Java", "Spring Security", "Tailwind CSS"],
    category: "fullstack",
    github: "https://github.com/vasujain275/shelfwise",
    featured: true,
    year: 2024,
  },
  {
    id: "task-genie",
    slug: "task-genie",
    title: "Task Genie",
    description: "AI-Powered Task Management Telegram Bot that helps you manage tasks and reminders using natural language.",
    longDescription: "Task Genie is an intelligent Telegram bot that helps you manage tasks and reminders through natural conversation. Instead of clicking through menus or using strict commands, just tell the bot what you need to do in plain English! The bot uses a custom LangGraph AI agent powered by OpenAI to understand your intent.",
    technologies: ["Python", "FastAPI", "LangGraph", "LangChain", "MongoDB", "Redis", "Telegram API", "Docker"],
    category: "ai",
    github: "https://github.com/vasujain275/task-genie",
    featured: true,
    year: 2024,
  }
];

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category);
};

export const getAllProjects = () => {
  return projects.sort((a, b) => b.year - a.year);
};

export const getProjectBySlug = (slug: string) => {
  return projects.find(project => project.slug === slug);
};
