"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ArrowLeft,
    Award,
    CheckCircle2,
    Code,
    Github,
    Keyboard,
    LineChart,
    Palette,
    Target,
    Terminal,
    Trophy,
    Volume2
} from "lucide-react";
import Link from "next/link";

export default function KeyarchPage() {
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
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
                Keyarch
              </h1>
              <p className="text-2xl text-muted-foreground font-light">
                Beautiful Terminal Typing Test
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/vinayydv3695/Keyarch" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <Github className="h-5 w-5" />
                  View Code
                </Button>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Go", "BubbleTea", "Lipgloss", "Cobra", "SQLite", "TUI"].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Keyarch is a fast, minimal CLI typing test built with
            <span className="text-primary font-semibold"> Go and BubbleTea</span>.
            Features multiple test modes, 10 stunning themes, real-time WPM graphs, and a comprehensive gamification
            system with 23 achievements. Perfect for developers who want to improve their typing speed without leaving
            the terminal.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Keyboard className="h-6 w-6 text-primary" />
                Multiple Test Modes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Timer mode (15s - 120s)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Word count mode (25 - 200 words)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Random quote mode
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Code snippets (10 languages)
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Trophy className="h-6 w-6 text-primary" />
                Gamification System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  23 unique achievements
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Daily & weekly goals
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Hidden expert achievements
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Progress dashboard (3 tabs)
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <LineChart className="h-6 w-6 text-primary" />
                Advanced Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Live WPM graph (sparkline)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Typing heatmap (color-coded keys)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Weak keys identification
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Daily streak tracking
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Palette className="h-6 w-6 text-primary" />
                Beautiful Themes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  10 carefully crafted themes
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Catppuccin, Nord, Dracula, Gruvbox
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Tokyo Night, Rose Pine, One Dark
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Monokai, Solarized, Material
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
                <Award className="h-6 w-6 text-primary" />
                Achievement System
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The gamification system includes <strong>23 achievements</strong> across multiple categories: Speed
                (50+ WPM to 150+ WPM), Accuracy (95% to 100%), Dedication (100 to 1000 tests), and Consistency
                (daily streaks). Hidden achievements unlock at expert milestones, creating surprises for dedicated users.
                Daily and weekly goals auto-reset with progress tracking displayed in a comprehensive 3-tab dashboard.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Difficulty Levels
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Choose from <strong>Easy, Medium, or Hard</strong> word sets with over 300 words total. Each difficulty
                level is carefully curated to match your skill level, helping you progress from basic typing to advanced
                speed. The system tracks your performance across difficulty levels to provide personalized insights.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Volume2 className="h-6 w-6 text-primary" />
                Sound Effects
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Immersive audio feedback includes keystroke sounds and achievement/goal notification sounds. This adds
                a satisfying tactile dimension to your typing practice, making each session more engaging and rewarding.
              </p>
            </div>
          </div>
        </div>

        {/* Code Mode Languages */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Code Mode Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Go", "JavaScript", "TypeScript", "Python", "Rust", "C++", "Java", "C#", "Ruby", "PHP"].map((lang) => (
              <div key={lang} className="bg-card border border-border rounded-lg p-4 text-center">
                <Code className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-semibold">{lang}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Installation */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Installation</h2>
          
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Terminal className="h-4 w-4 text-primary" />
                Quick Install
              </p>
              <code className="text-sm text-muted-foreground">
                go install github.com/vinayydv3695/keyarch/cmd/keyarch@latest
              </code>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                From Source
              </p>
              <pre className="text-xs text-muted-foreground overflow-x-auto">
{`git clone https://github.com/vinayydv3695/keyarch.git
cd keyarch
go mod tidy
go build -o keyarch ./cmd/keyarch
sudo mv keyarch /usr/local/bin/`}
              </pre>
            </div>
          </div>
        </div>

        {/* Usage */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Usage Examples</h2>
          
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-semibold mb-2">Launch TUI</p>
              <code className="text-sm text-muted-foreground">keyarch</code>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-semibold mb-2">Direct Mode (Skip Menu)</p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p><code>keyarch --mode quick --duration 30</code> - 30 second test</p>
                <p><code>keyarch --mode words --words 50</code> - 50 word test</p>
                <p><code>keyarch --mode quote</code> - Random quote</p>
                <p><code>keyarch --mode code</code> - Code snippet</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-semibold mb-2">With Theme</p>
              <code className="text-sm text-muted-foreground">keyarch --theme dracula</code>
            </div>
          </div>
        </div>

        {/* Keyboard Shortcuts */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Keyboard Shortcuts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4 space-y-2">
              <p className="font-mono text-sm"><span className="text-primary">↑/↓ or j/k</span> - Navigate</p>
              <p className="font-mono text-sm"><span className="text-primary">Enter</span> - Select</p>
              <p className="font-mono text-sm"><span className="text-primary">ESC</span> - Back</p>
              <p className="font-mono text-sm"><span className="text-primary">Ctrl+C</span> - Quit</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 space-y-2">
              <p className="font-mono text-sm"><span className="text-primary">Backspace</span> - Delete character</p>
              <p className="text-sm text-muted-foreground mt-2">During test, ESC exits to menu</p>
            </div>
          </div>
        </div>

        {/* Tech Stack Detail */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Technical Stack</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Terminal className="h-5 w-5" />
                TUI Framework
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• BubbleTea</li>
                <li>• Lipgloss</li>
                <li>• Bubbles</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Code className="h-5 w-5" />
                CLI
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Cobra</li>
                <li>• Viper</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Award className="h-5 w-5" />
                Storage
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• SQLite</li>
                <li>• Local (~/.keyarch/)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Keyboard className="h-5 w-5" />
                Language
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Go 1.22+</li>
                <li>• Pure Go</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Performance Tracking</h2>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-muted-foreground mb-4">
              All data is stored locally in <code className="text-primary">~/.keyarch/keyarch.db</code>
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Test history with timestamps
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Best and average WPM
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Accuracy trends over time
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Daily streak monitoring
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Weak keys analysis
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Achievement progress
              </li>
            </ul>
          </div>
        </div>

        {/* Project Structure */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Project Structure</h2>
          <div className="bg-card border border-border rounded-xl p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
{`keyarch/
├── cmd/keyarch/
│   └── main.go              # Entry point
├── internal/
│   ├── engine/              # Typing test logic
│   ├── tui/                 # BubbleTea UI
│   │   ├── home/            # Menu screen
│   │   ├── test/            # Test screen
│   │   ├── summary/         # Results
│   │   ├── stats/           # Statistics
│   │   └── theme/           # Theme selector
│   ├── storage/             # SQLite database
│   ├── config/              # App settings
│   └── data/                # Text generation
├── assets/
│   ├── words/               # Word lists (easy/medium/hard)
│   └── snippets/            # Code snippets (10 languages)
└── go.mod`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
