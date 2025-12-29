# Backend Developer Portfolio - Quick Instructions

## Tech Stack
- Next.js 14 + TypeScript + Tailwind CSS
- shadcn/ui components
- pnpm package manager
- Rose Pine theme (dark/light variants)

## Theme Colors (Rose Pine)
- **Primary**: #eb6f92 (rose)
- **Secondary**: #9ccfd8 (foam)
- **Accent**: #f6c177 (gold)
- **Background**: #191724 (base) / #faf4ed (surface)
- **Text**: #e0def4 (text) / #575279 (muted)

## Core Features
1. **Homepage**: Hero with typing animation, stats, featured projects/blog
2. **About**: Skills grid, experience timeline, certifications
3. **Projects**: Filterable grid with backend/DevOps focus
4. **Blog**: Markdown posts with syntax highlighting
5. **Contact**: Form + social links

## Backend Focus Elements
- Terminal/code editor aesthetic
- API demos and architecture diagrams
- Tech stack: Node.js, Python, Go, Docker, Kubernetes, AWS, PostgreSQL, Redis
- Performance metrics and system monitoring
- Code snippets with syntax highlighting

## Project Structure
```
app/
├── page.tsx (home)
├── about/page.tsx
├── projects/page.tsx
├── blog/[slug]/page.tsx
└── contact/page.tsx

components/
├── ui/ (shadcn)
├── layout/ (Header, Footer, Nav)
├── home/ (Hero, Stats, Featured)
├── projects/ (ProjectCard, Filter)
└── blog/ (BlogCard, Post)

lib/
├── projects.ts (project data)
├── blog.ts (blog utilities)
└── experience.ts (timeline data)
```

## Key Components Needed
- Animated typing effect for role description
- Project cards with tech badges
- Blog post renderer with syntax highlighting
- Skills grid with progress bars
- Experience timeline
- Contact form with validation
- Dark/light theme toggle

## Content Focus
- Backend architecture patterns
- DevOps best practices
- Database optimization
- API design principles
- Cloud deployment strategies
- System monitoring and logging

## Dependencies to Add
```bash
pnpm add framer-motion react-markdown rehype-highlight remark-gfm
pnpm add -D @types/react-syntax-highlight
```

## Design Principles
- Clean, professional backend developer aesthetic
- Rose Pine color scheme throughout
- Responsive mobile-first design
- Subtle animations and transitions
- Code syntax highlighting
- Terminal-style elements for backend focus 