import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Globe } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/vasujain275",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/vasujain275",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/vasujain275",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:vasujain275@gmail.com",
    icon: Mail,
  },
  {
    name: "Website",
    href: "https://vasujain.me",
    icon: Globe,
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg">VJ</span>
              </div>
              <span className="font-bold text-2xl">Vasu Jain</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Backend developer and DevOps engineer passionate about building robust microservices, 
              AI applications, and sharing knowledge through code and writing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted">
                About
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted">
                Projects
              </Link>
              <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted">
                Blog
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-muted"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Vasu Jain. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Available for new opportunities</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 