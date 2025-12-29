"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ArrowLeft,
    CheckCircle2,
    Code,
    Database,
    Github,
    Keyboard,
    Layout,
    Monitor,
    Palette,
    Terminal,
    Zap
} from "lucide-react";
import Link from "next/link";

export default function HollowDotsPage() {
  return (
    <div className="container max-w-5xl mx-auto px-4 py-20">
      <Link href="/projects">
        <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="space-y-16">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                HollowDots
              </h1>
              <p className="text-2xl text-muted-foreground font-light">
                Hollow Knight Inspired Hyprland Dotfiles
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/vinayydv3695/HollowDots" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <Github className="h-5 w-5" />
                  View Code
                </Button>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Hyprland", "Waybar", "Rofi", "Neovim", "Kitty", "Ansible", "Lua", "CSS", "Bash"].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-muted-foreground">
            A complete and beautiful Hyprland dotfiles setup inspired by
            <span className="text-primary font-semibold"> Hollow Knight</span>.
            Features a cohesive design across all applications including Waybar, Rofi, Neovim, Kitty, and more.
            Automated deployment using Ansible playbooks makes setup effortless on Arch Linux.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Palette className="h-6 w-6 text-primary" />
                Beautiful & Consistent Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Hollow Knight inspired theme
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Rose Pine color scheme
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Cohesive design across all apps
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Custom icons and fonts
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Zap className="h-6 w-6 text-primary" />
                Automated Setup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Ansible playbooks for deployment
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  One-command installation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Package management automation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Easy updates and synchronization
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Keyboard className="h-6 w-6 text-primary" />
                Efficient Keybindings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Vim-like navigation (j/k movement)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Super key as main modifier
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Workspace management shortcuts
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Screenshot and clipboard tools
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Monitor className="h-6 w-6 text-primary" />
                Complete Desktop Environment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Hyprland window manager
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Waybar status bar
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Rofi app launcher & switcher
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Dunst notification daemon
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Deep Dive Sections */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Deep Dive</h2>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                Ansible Automation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The dotfiles leverage Ansible for complete automation. Three playbooks handle everything:
                <strong> main.yml</strong> for full system setup, <strong>deploy.yml</strong> for dotfiles and packages,
                and <strong>update.yml</strong> for keeping everything synchronized. This approach ensures reproducibility
                and makes it easy to set up the same environment on multiple machines.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Terminal className="h-6 w-6 text-primary" />
                Developer Workflow
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The setup is optimized for development with Neovim as the primary editor, Kitty and Ghostty terminals,
                Yazi file manager, and integrated clipboard history with cliphist. Theme and wallpaper switching is
                built-in with dedicated keybindings for quick customization.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Detail */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Key Applications</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Layout className="h-5 w-5" />
                Window Management
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Hyprland (Wayland)</li>
                <li>• Waybar</li>
                <li>• Rofi (wayland fork)</li>
                <li>• Dunst notifications</li>
                <li>• Hyprlock & Swayidle</li>
                <li>• Wlogout</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Terminal className="h-5 w-5" />
                Development Tools
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Neovim</li>
                <li>• Kitty Terminal</li>
                <li>• Ghostty Terminal</li>
                <li>• Yazi File Manager</li>
                <li>• Fastfetch</li>
                <li>• Git</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Database className="h-5 w-5" />
                System & Utilities
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Ansible</li>
                <li>• Cliphist</li>
                <li>• Playerctl</li>
                <li>• Blueman</li>
                <li>• NetworkManager</li>
                <li>• Udiskie</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Structure */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Project Structure</h2>
          <div className="bg-card border border-border rounded-xl p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
{`HollowDots/
├── .config/                      # Application configs
│   ├── hypr/                     # Hyprland config
│   ├── waybar/                   # Status bar
│   ├── rofi/                     # App launcher
│   ├── nvim/                     # Neovim setup
│   └── kitty/                    # Terminal config
├── .zsh/                         # ZSH configuration
├── Ansible/
│   ├── playbooks/                # Automation scripts
│   │   ├── main.yml              # Full setup
│   │   ├── deploy.yml            # Deploy dotfiles
│   │   └── update.yml            # Update system
│   └── group_vars/               # Variables
├── .local/share/themes/          # Custom themes
└── screenshots/                  # Workflow demos`}
            </pre>
          </div>
        </div>

        {/* Core Keybindings */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Core Keybindings</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4 space-y-2">
              <p className="font-mono text-sm"><span className="text-primary">Super + C</span> - Open Terminal</p>
              <p className="font-mono text-sm"><span className="text-primary">Super + E</span> - File Manager</p>
              <p className="font-mono text-sm"><span className="text-primary">Super + F</span> - Browser</p>
              <p className="font-mono text-sm"><span className="text-primary">Super + A</span> - App Launcher</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 space-y-2">
              <p className="font-mono text-sm"><span className="text-primary">Super + Q</span> - Close Window</p>
              <p className="font-mono text-sm"><span className="text-primary">Super + L</span> - Lock Screen</p>
              <p className="font-mono text-sm"><span className="text-primary">Super + P</span> - Screenshot</p>
              <p className="font-mono text-sm"><span className="text-primary">Super + V</span> - Clipboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
