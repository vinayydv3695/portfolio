"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = [
  "Backend Developer",
  "DevOps Engineer",
  "AI Engineer",
  "Full-Stack Developer",
];

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Built", value: "15+" },
  { label: "Technologies", value: "12+" },
  { label: "Open Source", value: "5+" },
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < role.length) {
            setCurrentText(role.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentRoleIndex, isDeleting]);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 lg:py-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-10 lg:pr-12">
            <div className="space-y-8">
              {/* Profile Picture and Name */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
                    <Image
                      src="https://avatars.githubusercontent.com/u/69643310?v=4"
                      alt="Vasu Jain"
                      width={144}
                      height={144}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-3 text-center sm:text-left">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                    Hi, I&apos;m <span className="text-primary">Vasu Jain</span>
                  </h1>
                  <div className="text-lg sm:text-xl lg:text-2xl text-muted-foreground">
                    I&apos;m a{" "}
                    <span className="text-primary font-mono typing-animation">
                      {currentText}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Passionate about building robust backend microservices, DevOps
                automation, and practical GenAI applications. Currently working
                on secure, scalable systems and exploring advanced AI
                orchestration patterns.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center text-center p-3 sm:p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg aspect-square sm:aspect-auto"
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group px-8 py-3 text-lg">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="px-8 py-3 text-lg"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-4">
              <a
                href="https://github.com/vasujain275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-muted"
                aria-label="Visit my GitHub profile"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://linkedin.com/in/vasujain275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-muted"
                aria-label="Connect with me on LinkedIn"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="mailto:vasujain275@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-muted"
                aria-label="Send me an email"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Terminal/Code Demo */}
          <div className="space-y-6 sm:space-y-8 lg:pl-12">
            <div className="terminal p-4 sm:p-6 bg-card border border-border rounded-xl">
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <div className="flex space-x-1">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground font-mono">
                  vasu@backend:~
                </span>
              </div>
              <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-primary">$</span>
                  <span>whoami</span>
                </div>
                <div className="text-secondary pl-4">vasu-jain</div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">$</span>
                  <span>cat skills.txt</span>
                </div>
                <div className="text-secondary pl-4 leading-relaxed">
                  Languages: Java, Go, Python, TypeScript
                  <br />
                  Backend: Spring Boot, Express.js, FastAPI, Gin
                  <br />
                  DevOps: Docker, K8s, AWS, GitHub Actions
                  <br />
                  AI: LangChain, LangGraph, RAG
                  <br />
                  Databases: PostgreSQL, MongoDB, Redis, Neo4j
                  <br />
                  Tools: Linux, Neovim, Zed, Git, Bruno
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">$</span>
                  <span>ls projects/</span>
                </div>
                <div className="text-secondary pl-4 leading-relaxed">
                  shelfwise/
                  <br />
                  task-genie/
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Link
                href="/projects/shelfwise"
                className="flex items-center justify-between p-4 sm:p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <div>
                  <div className="font-semibold text-base sm:text-lg">
                    ShelfWise
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Library System
                  </div>
                </div>
                <ArrowRight
                  className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/projects/task-genie"
                className="flex items-center justify-between p-4 sm:p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <div>
                  <div className="font-semibold text-base sm:text-lg">
                    Task Genie
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    AI Agent Bot
                  </div>
                </div>
                <ArrowRight
                  className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
