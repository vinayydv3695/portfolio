"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ArrowLeft,
    Bot,
    CheckCircle2,
    Clock,
    Cpu,
    Database,
    Github,
    MessageSquare,
    Shield,
    Terminal,
    Workflow
} from "lucide-react";
import Link from "next/link";

export default function TaskGeniePage() {
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
                Task Genie
              </h1>
              <p className="text-2xl text-muted-foreground font-light">
                AI-Powered Task Management Telegram Bot
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/vasujain275/task-genie" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <Github className="h-5 w-5" />
                  View Code
                </Button>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Python 3.11", "FastAPI", "LangGraph", "LangChain", "MongoDB", "Redis", "Aiogram", "Docker"].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Task Genie is an intelligent Telegram bot that helps you manage tasks and reminders through
            <span className="text-primary font-semibold"> natural conversation</span>.
            Instead of clicking through menus or using strict commands, just tell the bot what you need to do in plain English!
            The bot uses a **custom LangGraph AI agent** powered by OpenAI to understand your intent, extract task details,
            and manage your schedule intelligently.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Bot className="h-6 w-6 text-primary" />
                Natural Language Processing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Conversational Interface
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Smart Date Parsing ("tomorrow", "next Monday")
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Timezone Aware scheduling
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Advanced Intent Recognition
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <MessageSquare className="h-6 w-6 text-primary" />
                Task Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Create, edit, delete tasks via chat
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Organize with tags and priority levels
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Recurring tasks support
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Task statistics and summaries
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Clock className="h-6 w-6 text-primary" />
                Smart Reminders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Automatic reminders before deadlines
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Custom reminder times
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Timezone-aware notifications
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Multiple reminders per task
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Shield className="h-6 w-6 text-primary" />
                Security & Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Encrypted API key storage (Fernet)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Personal workspace for each user
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Secure MongoDB data storage
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  No data sharing between users
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Architecture Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold border-b border-border pb-4">System Architecture</h2>

          <div className="bg-card border border-border rounded-xl p-8 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
{`┌─────────────────────────────────────────────────────────┐
│                    Telegram User                        │
└───────────────────┬─────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────┐
│              Aiogram Bot (Telegram API)                 │
│  • Command Handlers (/start, /settings, /stats)         │
│  • Natural Language Message Handler                     │
│  • FSM State Management (Redis)                         │
└───────────────────┬─────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────┐
│              LangGraph AI Agent                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │  Custom Graph Workflow:                         │    │
│  │  START → agent → [decide] → tools → agent       │    │
│  └─────────────────────────────────────────────────┘    │
│  • Conversation Memory (MongoDB Checkpointing)          │
└───────────────────┬─────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────┐
│                   LangChain Tools                       │
│  • create_task     • edit_task                          │
│  • list_tasks      • mark_task_done                     │
└─────────────────────────────────────────────────────────┘`}
            </pre>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" />
                Bot Layer
              </h3>
              <p className="text-muted-foreground">
                Built with <strong>Aiogram</strong>, handling Telegram API interactions, command routing,
                and FSM state management via Redis. It provides the interactive UI with inline keyboards.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Workflow className="h-5 w-5 text-primary" />
                AI Layer
              </h3>
              <p className="text-muted-foreground">
                A custom <strong>LangGraph Agent</strong> with explicit control over behavior.
                It uses MongoDB for conversation memory and a set of LangChain tools to perform actions.
              </p>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Usage Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted/30 p-6 rounded-xl border border-border">
              <p className="font-semibold mb-2 text-primary">Creating a Task</p>
              <div className="space-y-2 font-mono text-sm">
                <p className="text-muted-foreground">You: Remind me to call mom tomorrow at 5pm</p>
                <div className="pl-4 border-l-2 border-primary/50">
                  <p>Bot: ✅ I've created a reminder: "Call mom"</p>
                  <p>Due: Tomorrow at 5:00 PM</p>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 p-6 rounded-xl border border-border">
              <p className="font-semibold mb-2 text-primary">Managing Tasks</p>
              <div className="space-y-2 font-mono text-sm">
                <p className="text-muted-foreground">You: Show me all my pending tasks</p>
                <div className="pl-4 border-l-2 border-primary/50">
                  <p>Bot: 📋 You have 3 pending tasks:</p>
                  <p>1. 🔴 Team meeting - Mon, 10:00 AM</p>
                  <p>2. 🟡 Buy groceries - Tue, 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Detail */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Technical Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Cpu className="h-5 w-5" />
                Core
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Python 3.11+</li>
                <li>• FastAPI</li>
                <li>• Aiogram</li>
                <li>• Pydantic</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Bot className="h-5 w-5" />
                AI & ML
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• LangChain</li>
                <li>• LangGraph</li>
                <li>• OpenAI API</li>
                <li>• Fernet Encryption</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Database className="h-5 w-5" />
                Data & Infra
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• MongoDB (Beanie ODM)</li>
                <li>• Redis (FSM)</li>
                <li>• Docker Compose</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
