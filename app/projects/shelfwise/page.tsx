"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ArrowLeft,
    ArrowRightLeft,
    BookOpen,
    CheckCircle2,
    Database,
    FileText,
    Github,
    Layout,
    Lock,
    Server,
    Shield,
    Terminal
} from "lucide-react";
import Link from "next/link";

export default function ShelfwisePage() {
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
                ShelfWise
              </h1>
              <p className="text-2xl text-muted-foreground font-light">
                Modern Library Management System
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/vasujain275/shelfwise" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <Github className="h-5 w-5" />
                  View Code
                </Button>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Spring Boot 3.3", "React 19", "MySQL 8", "Docker", "TypeScript", "Java 21", "Spring Security 6", "Tailwind CSS"].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-muted-foreground">
            ShelfWise is a full-featured, production-ready library management system designed specifically for
            <span className="text-primary font-semibold"> offline-first operations</span>.
            Built with React and Spring Boot, it provides a seamless experience for managing books, members,
            and transactions with role-based access control and comprehensive reporting capabilities.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Shield className="h-6 w-6 text-primary" />
                Authentication & Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  JWT-based Auth with HttpOnly cookies
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  RBAC (Member, Admin, Super Admin)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Secure Spring Security implementation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Refresh Token mechanism
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <BookOpen className="h-6 w-6 text-primary" />
                Book Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Complete CRUD operations
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Bulk Book Upload via JSON
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Advanced Search with pagination
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Custom Barcode Generation
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <ArrowRightLeft className="h-6 w-6 text-primary" />
                Transaction Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Issue, Return, and Renew workflows
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Automatic late fee calculation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Overdue transaction alerts
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Transaction receipt generation
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <FileText className="h-6 w-6 text-primary" />
                Reports & Export
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  PDF Report Generation (Inventory, Users)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  CSV Export/Import functionality
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Printable Barcode Sheets
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  Real-time Admin Dashboard
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
                <Lock className="h-6 w-6 text-primary" />
                Secure Authentication Flow
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The system employs a robust security model where the server validates credentials and generates JWT tokens.
                Access and refresh tokens are stored in <strong>HttpOnly cookies</strong> to prevent XSS attacks.
                The client automatically refreshes tokens when needed, ensuring a seamless user experience while maintaining high security.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Terminal className="h-6 w-6 text-primary" />
                Barcode Sheet Generation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A sophisticated feature allowing admins to search and select books, choose from 18+ barcode standards
                (CODE128, EAN13, etc.), customize layout dimensions, and generate printable PDF sheets directly from the browser.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Detail */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Technical Architecture</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Server className="h-5 w-5" />
                Backend
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Spring Boot 3.3.13</li>
                <li>• Spring Security 6.x</li>
                <li>• Spring Data JPA</li>
                <li>• MySQL 8.x</li>
                <li>• JWT (JJWT)</li>
                <li>• MapStruct</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Layout className="h-5 w-5" />
                Frontend
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• React 19</li>
                <li>• TypeScript 5.8</li>
                <li>• Tailwind CSS 4</li>
                <li>• shadcn/ui</li>
                <li>• TanStack Query</li>
                <li>• Zustand</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Database className="h-5 w-5" />
                DevOps
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Docker (Multi-arch)</li>
                <li>• GitHub Actions CI/CD</li>
                <li>• Maven & pnpm</li>
                <li>• Docker Hub Registry</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Structure */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-border pb-4">Project Structure</h2>
          <div className="bg-card border border-border rounded-xl p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
{`shelfwise/
├── api/                          # Spring Boot Backend
│   ├── src/main/java/            # Controllers, Services, Models
│   └── src/main/resources/       # Config, Static Assets
├── web/                          # React Frontend
│   ├── src/components/           # UI, Auth, Dashboard Components
│   ├── src/lib/                  # Utilities
│   └── src/store/                # Zustand State
├── docker-compose.prod.yml       # Production Config
└── Dockerfile                    # Multi-stage Build`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
