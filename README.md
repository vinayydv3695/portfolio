# Vasu Jain - Backend Developer Portfolio

A beautiful, professional portfolio website showcasing backend development, DevOps expertise, and AI applications. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, professional design with Rose Pine theme
- **Responsive**: Mobile-first responsive design
- **Dark/Light Mode**: Toggle between themes
- **Animated Typing**: Hero section with animated typing effect
- **Project Showcase**: Filterable project grid with detailed descriptions
- **Skills Visualization**: Interactive skill bars with proficiency levels
- **Blog Section**: Technical blog with syntax highlighting
- **Contact Form**: Professional contact form with validation
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Package Manager**: pnpm
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: Rose Pine (Dark/Light variants)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx (Homepage)
│   ├── about/page.tsx (About page)
│   ├── projects/page.tsx (Projects showcase)
│   ├── blog/page.tsx (Blog listing)
│   ├── blog/[slug]/page.tsx (Individual blog posts)
│   ├── contact/page.tsx (Contact form)
│   ├── layout.tsx (Root layout)
│   └── globals.css (Global styles)
├── components/
│   ├── ui/ (shadcn components)
│   ├── layout/
│   │   ├── Header.tsx (Navigation + theme toggle)
│   │   └── Footer.tsx (Footer + social links)
│   └── home/
│       └── Hero.tsx (Homepage hero section)
├── lib/
│   ├── projects.ts (Project data)
│   ├── experience.ts (Experience & skills data)
│   └── utils.ts (Utility functions)
└── public/
    └── (Static assets)
```

## 🎨 Design System

### Color Palette (Rose Pine)
- **Primary**: #eb6f92 (rose)
- **Secondary**: #9ccfd8 (foam)
- **Accent**: #f6c177 (gold)
- **Background**: #191724 (dark) / #faf4ed (light)
- **Text**: #e0def4 (dark) / #575279 (light)

### Typography
- **Headings**: Inter (Bold)
- **Body**: Inter (Regular)
- **Code**: JetBrains Mono

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Update your personal information in:
- `components/layout/Header.tsx` - Name and logo
- `components/layout/Footer.tsx` - Social links
- `lib/projects.ts` - Your projects
- `lib/experience.ts` - Your experience and skills

### Styling
- Modify `app/globals.css` for theme colors
- Update component styles in respective files
- Customize Tailwind classes as needed

### Content
- Add your projects to `lib/projects.ts`
- Update experience in `lib/experience.ts`
- Add blog posts to `app/blog/[slug]/page.tsx`

## 🎯 Key Components

### Hero Section
- Animated typing effect for role description
- Terminal-style code display
- Quick stats and social links
- Call-to-action buttons

### Projects Page
- Filterable project grid
- Technology badges
- Live demo and GitHub links
- Project statistics

### About Page
- Skills visualization with progress bars
- Experience timeline
- Certifications and goals
- Personal background

### Blog Section
- Featured posts grid
- All posts list
- Newsletter signup
- Individual blog post pages

### Contact Page
- Professional contact form
- Social media links
- Availability status
- Contact information

## 🔧 Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# shadcn/ui
pnpm dlx shadcn@latest add <component>  # Add new components
```

## 📦 Dependencies

### Core
- `next`: React framework
- `react`: UI library
- `typescript`: Type safety

### Styling
- `tailwindcss`: Utility-first CSS
- `lucide-react`: Icons
- `framer-motion`: Animations

### UI Components
- `@radix-ui/react-slot`: Radix UI primitives
- `class-variance-authority`: Component variants
- `clsx`: Conditional classes

### Forms & Validation
- `@hookform/resolvers`: Form validation
- `react-hook-form`: Form handling

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with Next.js
- **Image Optimization**: Next.js Image component

## 🔒 Security

- **HTTPS**: Enforced in production
- **CSP**: Content Security Policy headers
- **Form Validation**: Client and server-side validation
- **XSS Protection**: Sanitized content rendering

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons
- [Rose Pine](https://rosepinetheme.com/) for the color theme

---

**Built with ❤️ by Vasu Jain**

Connect with me:
- [GitHub](https://github.com/vasujain275)
- [LinkedIn](https://linkedin.com/in/vasujain275)
- [Twitter](https://twitter.com/vasujain275)
- [Email](mailto:vasujain275@gmail.com)
