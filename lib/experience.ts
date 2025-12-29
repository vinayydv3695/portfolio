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
    id: "agnirva-intern",
    title: "Web Development Internship",
    company: "Agnirva Software Internship Program",
    period: "May 28, 2025 – July 28, 2025",
    type: "Work",
    description: "Gained hands-on experience in AI/ML, blockchain, NASA APIs, and space-related applications. Designed and implemented practical projects with daily coding challenges and mentorship. Developed a capstone project integrating web technologies and data visualization tools.",
    technologies: ["AI/ML", "Blockchain", "NASA APIs", "Web Development", "Data Visualization"],
  },
  {
    id: "ncu",
    title: "B.Tech Computer Science",
    company: "The NorthCap University",
    period: "Aug 2023 – May 2027",
    type: "Education",
    description: "Current GPA: 7.78. Focusing on Backend Systems, Cloud Computing, and AI/ML.",
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

  // Backend
  { name: "Spring Boot", category: "backend", proficiency: 90, icon: "SiSpringboot" },
  { name: "FastAPI", category: "backend", proficiency: 85, icon: "SiFastapi" },

  // Frontend
  { name: "React", category: "frontend", proficiency: 85, icon: "SiReact" },
  { name: "Tailwind CSS", category: "frontend", proficiency: 85, icon: "SiTailwindcss" },

  // DevOps
  { name: "Docker", category: "devops", proficiency: 90, icon: "SiDocker" },
  { name: "Kubernetes", category: "devops", proficiency: 75, icon: "SiKubernetes" },
  { name: "AWS", category: "devops", proficiency: 70, icon: "SiAmazonwebservices" },
  { name: "GitHub Actions", category: "devops", proficiency: 85, icon: "SiGithubactions" },
  { name: "Ansible", category: "devops", proficiency: 70, icon: "SiAnsible" },
  { name: "Caddy", category: "devops", proficiency: 75, icon: "SiCaddy" },
  { name: "NixOS", category: "devops", proficiency: 60, icon: "SiNixos" },

  // Databases
  { name: "PostgreSQL", category: "database", proficiency: 85, icon: "SiPostgresql" },
  { name: "MySQL", category: "database", proficiency: 85, icon: "SiMysql" },
  { name: "SQLite", category: "database", proficiency: 80, icon: "SiSqlite" },
  { name: "MongoDB", category: "database", proficiency: 80, icon: "SiMongodb" },

  // Tools
  { name: "Linux", category: "tools", proficiency: 90, icon: "SiLinux" },
  { name: "Neovim", category: "tools", proficiency: 85, icon: "SiNeovim" },
  { name: "Ghostty", category: "tools", proficiency: 80, icon: "SiGnometerminal" },
  { name: "Git", category: "tools", proficiency: 90, icon: "SiGit" },
  { name: "Postman", category: "tools", proficiency: 85, icon: "SiPostman" },
];

export const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category);
};

export const getTopSkills = (limit: number = 8) => {
  return skills
    .sort((a, b) => b.proficiency - a.proficiency)
    .slice(0, limit);
};
