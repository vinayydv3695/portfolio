export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  type: "Work" | "Education" | "Open Source";
  description: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  category: "backend" | "frontend" | "devops" | "ai" | "database" | "languages" | "tools";
  proficiency: number;
  icon: string; // React-icon name
}

export const experience: Experience[] = [
  {
    id: "drdo-intern",
    title: "Software Engineering Intern",
    company: "DIPR, DRDO",
    period: "Jun 2025 – Jul 2025",
    type: "Work",
    description: "Engineered a secure Library Management System (ShelfWise) using Spring Boot and React, replacing a legacy system. Designed Role-Based Access Control (RBAC) with Spring Security and JWT. Migrated 12,000+ book records using a GenAI pipeline, reducing data entry time by 95%. Implemented barcode generation and bulk data upload.",
    technologies: ["Spring Boot", "React", "Java", "MySQL", "Docker", "Spring Security"],
  },
  {
    id: "palisadoes",
    title: "Open Source Contributor",
    company: "Palisadoes Foundation",
    period: "Sep 2023 – Dec 2024",
    type: "Open Source",
    description: "Dockerized the Talawa platform (Express/GraphQL backend, React frontend). Optimized GitHub Actions CI/CD pipelines for automated testing and building. Configured Caddy reverse proxy for automatic SSL termination. Collaborated with a global distributed team to improve documentation and code quality.",
    technologies: ["Docker", "GitHub Actions", "Caddy", "React", "GraphQL"],
  },
  {
    id: "ncu",
    title: "B.Tech Computer Science",
    company: "The NorthCap University",
    period: "Aug 2023 – May 2027",
    type: "Education",
    description: "Current GPA: 8.79. Focusing on Backend Systems, Cloud Computing, and AI/ML.",
    technologies: ["DSA", "System Design", "OS", "DBMS"],
  },
];

export const skills: Skill[] = [
  // Languages
  { name: "Java", category: "languages", proficiency: 90, icon: "SiOpenjdk" },
  { name: "Go", category: "languages", proficiency: 85, icon: "SiGo" },
  { name: "Python", category: "languages", proficiency: 90, icon: "SiPython" },
  { name: "TypeScript", category: "languages", proficiency: 85, icon: "SiTypescript" },
  { name: "SQL", category: "languages", proficiency: 80, icon: "SiPostgresql" },

  // Frameworks (Backend)
  { name: "Spring Boot", category: "backend", proficiency: 90, icon: "SiSpringboot" },
  { name: "Express.js", category: "backend", proficiency: 85, icon: "SiExpress" },
  { name: "FastAPI", category: "backend", proficiency: 85, icon: "SiFastapi" },
  { name: "Gin", category: "backend", proficiency: 80, icon: "SiGin" },

  // Frameworks (Frontend)
  { name: "React", category: "frontend", proficiency: 85, icon: "SiReact" },
  { name: "Next.js", category: "frontend", proficiency: 80, icon: "SiNextdotjs" },
  { name: "shadcn/ui", category: "frontend", proficiency: 85, icon: "SiShadcnui" },
  { name: "Tailwind CSS", category: "frontend", proficiency: 85, icon: "SiTailwindcss" },

  // AI
  { name: "LangChain", category: "ai", proficiency: 85, icon: "SiLangchain" },
  { name: "LangGraph", category: "ai", proficiency: 80, icon: "SiLangchain" },

  // DevOps
  { name: "Docker", category: "devops", proficiency: 90, icon: "SiDocker" },
  { name: "Kubernetes", category: "devops", proficiency: 75, icon: "SiKubernetes" },
  { name: "AWS", category: "devops", proficiency: 70, icon: "SiAmazonwebservices" },
  { name: "GitHub Actions", category: "devops", proficiency: 85, icon: "SiGithubactions" },
  { name: "Ansible", category: "devops", proficiency: 60, icon: "SiAnsible" },
  { name: "Caddy", category: "devops", proficiency: 75, icon: "SiCaddy" },
  { name: "NixOS", category: "devops", proficiency: 60, icon: "SiNixos" },

  // Databases
  { name: "PostgreSQL", category: "database", proficiency: 85, icon: "SiPostgresql" },
  { name: "MySQL", category: "database", proficiency: 85, icon: "SiMysql" },
  { name: "SQLite", category: "database", proficiency: 80, icon: "SiSqlite" },
  { name: "MongoDB", category: "database", proficiency: 80, icon: "SiMongodb" },
  { name: "Neo4j", category: "database", proficiency: 70, icon: "SiNeo4j" },
  { name: "Redis", category: "database", proficiency: 75, icon: "SiRedis" },
  { name: "Qdrant", category: "database", proficiency: 70, icon: "SiElasticsearch" },

  // Tools
  { name: "Linux", category: "tools", proficiency: 90, icon: "SiLinux" },
  { name: "Neovim", category: "tools", proficiency: 85, icon: "SiNeovim" },
  { name: "Zed", category: "tools", proficiency: 80, icon: "SiZedindustries" },
  { name: "Git", category: "tools", proficiency: 90, icon: "SiGit" },
  { name: "Bruno", category: "tools", proficiency: 85, icon: "SiBruno" },
];

export const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category);
};

export const getTopSkills = (limit: number = 8) => {
  return skills
    .sort((a, b) => b.proficiency - a.proficiency)
    .slice(0, limit);
};
