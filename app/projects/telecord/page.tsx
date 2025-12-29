"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ArrowLeft,
    Bot,
    CheckCircle2,
    Download,
    Github,
    MessageSquare,
    Package,
    Send,
    Terminal,
    Workflow,
    Zap
} from "lucide-react";
import Link from "next/link";

export default function TelecordPage() {
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
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Telecord
              </h1>
              <p className="text-2xl text-muted-foreground font-light">
                Discord to Telegram Chat Exporter
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/vinayydv3695/telecord" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <Github className="h-5 w-5" />
                  View Code
                </Button>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Node.js", "JavaScript", "Telegram Bot API", "Axios", "CLI", "npm"].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Telecord is a CLI tool that seamlessly exports
            <span className="text-primary font-semibold"> Discord chat history to Telegram</span>.
            It supports media attachments, customizable message delays, interactive and CLI modes, and reverse message ordering.
            Built with Node.js and the Telegram Bot API for a smooth migration experience.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <MessageSquare className="h-6 w-6 text-primary" />
                Export with Media Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Full message history export
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Images and videos included
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  All attachment types supported
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Preserves message formatting
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Terminal className="h-6 w-6 text-primary" />
                Flexible CLI Interface
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Interactive step-by-step mode
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Command-line automation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Customizable message delays
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Verbose logging for debugging
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Package className="h-6 w-6 text-primary" />
                Multi-Platform Installation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Arch Linux (AUR)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Debian/Ubuntu (.deb)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Nix/NixOS support
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  npm global installation
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Zap className="h-6 w-6 text-primary" />
                Smart Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Reverse message order option
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Rate limiting protection
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Graceful error handling
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Real-time progress updates
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
                <Workflow className="h-6 w-6 text-primary" />
                How It Works
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Telecord works in conjunction with <strong>discord-chat-exporter-cli</strong>. First, you export your
                Discord messages to a JSON file with media attachments. Then Telecord parses the JSON, uploads media
                files to Telegram, and sends messages one-by-one to your specified chat. You can control the delay
                between messages to avoid rate limiting and even reverse the order to send newest messages first.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Bot className="h-6 w-6 text-primary" />
                Interactive Mode
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The interactive mode provides a guided experience where you're prompted step-by-step for all required
                information: JSON file path, media folder, Telegram bot token, chat ID, message delay, and preferences
                for message order and logging. This makes the tool accessible even if you're not familiar with CLI tools.
              </p>
            </div>
          </div>
        </div>

        {/* Installation Methods */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Installation Options</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Download className="h-5 w-5" />
                Package Managers
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold mb-2">Arch Linux (AUR)</p>
                  <code className="text-muted-foreground">yay -S telecord</code>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold mb-2">Debian/Ubuntu</p>
                  <code className="text-muted-foreground">dpkg-buildpackage -us -uc</code>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold mb-2">Nix/NixOS</p>
                  <code className="text-muted-foreground">nix-build && nix-env -i -f .</code>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Terminal className="h-5 w-5" />
                npm Installation
              </div>
              <div className="bg-card border border-border rounded-lg p-4 space-y-3 text-sm">
                <p className="text-muted-foreground">Clone and install globally:</p>
                <pre className="text-xs overflow-x-auto">
{`git clone https://github.com/vinayydv3695/telecord
cd telecord
npm install
npm link`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Usage Examples</h2>
          
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Send className="h-4 w-4 text-primary" />
                Basic CLI Mode
              </p>
              <code className="text-sm text-muted-foreground break-all">
                telecord -f media.json -m media.json_Files -t BOT_TOKEN -c CHAT_ID
              </code>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                With Custom Delay & Reverse Order
              </p>
              <code className="text-sm text-muted-foreground break-all">
                telecord -f media.json -m media.json_Files -t BOT_TOKEN -c CHAT_ID --delay 0.5 --reverse
              </code>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                Interactive Mode
              </p>
              <code className="text-sm text-muted-foreground">
                telecord --interactive
              </code>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Technical Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-4 space-y-2">
              <p className="font-semibold text-primary">Runtime</p>
              <p className="text-sm text-muted-foreground">Node.js</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 space-y-2">
              <p className="font-semibold text-primary">HTTP Client</p>
              <p className="text-sm text-muted-foreground">Axios</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 space-y-2">
              <p className="font-semibold text-primary">API</p>
              <p className="text-sm text-muted-foreground">Telegram Bot API</p>
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Prerequisites</h2>
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <div className="space-y-2">
              <p className="font-semibold">1. discord-chat-exporter-cli</p>
              <p className="text-sm text-muted-foreground">Install from GitHub releases to export Discord chats</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">2. Discord Token</p>
              <p className="text-sm text-muted-foreground">Your Discord authentication token</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">3. Telegram Bot Token</p>
              <p className="text-sm text-muted-foreground">Create a bot via @BotFather on Telegram</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">4. Telegram Chat ID</p>
              <p className="text-sm text-muted-foreground">Get your chat ID from @userinfobot</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
