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
    id: "hollowdots",
    slug: "hollowdots",
    title: "HollowDots",
    description: "Hollow Knight inspired dotfiles for Hyprland on Arch Linux with automated Ansible setup.",
    longDescription: "A complete and beautiful Hyprland dotfiles setup inspired by Hollow Knight. Features a cohesive design across all applications including Waybar, Rofi, Neovim, Kitty, and more. Automated deployment using Ansible playbooks makes setup effortless. Includes custom themes, efficient keybindings, and comprehensive system configuration for a productivity-focused workflow.",
    technologies: ["Hyprland", "Waybar", "Rofi", "Neovim", "Kitty", "Ansible", "Lua", "CSS", "Bash"],
    category: "open-source",
    github: "https://github.com/vinayydv3695/HollowDots",
    featured: true,
    year: 2024,
  },
  {
    id: "telecord",
    slug: "telecord",
    title: "Telecord",
    description: "Export Discord chats (JSON + media) to Telegram using a simple CLI tool.",
    longDescription: "Telecord is a CLI tool that seamlessly exports Discord chat history to Telegram. It supports media attachments, customizable message delays, interactive and CLI modes, and reverse message ordering. Built with Node.js and the Telegram Bot API, it provides a smooth migration experience with verbose logging and graceful error handling. Available on AUR, Debian, Nix, and npm.",
    technologies: ["Node.js", "JavaScript", "Telegram Bot API", "Axios", "CLI", "npm"],
    category: "open-source",
    github: "https://github.com/vinayydv3695/telecord",
    featured: true,
    year: 2024,
  },
  {
    id: "keyarch",
    slug: "keyarch",
    title: "Keyarch",
    description: "A fast, minimal CLI typing test to measure your speed and accuracy with gamification.",
    longDescription: "Keyarch is a beautiful terminal-based typing test built with Go. Features multiple test modes (timer, word, quote, code), 10 stunning themes, real-time WPM graphs, and a comprehensive gamification system with 23 achievements. Supports 10 programming languages for code practice, includes a typing heatmap, sound effects, and difficulty levels. All data stored locally with detailed performance tracking and streak monitoring.",
    technologies: ["Go", "BubbleTea", "Lipgloss", "Cobra", "SQLite", "TUI"],
    category: "open-source",
    github: "https://github.com/vinayydv3695/Keyarch",
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
