"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllProjects, getProjectsByCategory, projects } from "@/lib/projects";
import { ArrowRight, ExternalLink, Filter, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "backend", name: "Backend" },
  { id: "fullstack", name: "Full Stack" },
  { id: "ai", name: "AI/ML" },
  { id: "devops", name: "DevOps" },
  { id: "open-source", name: "Open Source" },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all"
    ? getAllProjects()
    : getProjectsByCategory(selectedCategory);

  return (
    <div className="container max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold">My Projects</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A collection of my work showcasing backend development, DevOps automation,
          AI applications, and open source contributions.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className="flex items-center space-x-2 px-6 py-3"
          >
            <Filter className="h-4 w-4" />
            <span>{category.name}</span>
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card group">
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <Link href={`/projects/${project.slug}`} className="group-hover:text-primary transition-colors">
                    <h3 className="text-xl font-semibold">
                      {project.title}
                    </h3>
                  </Link>
                  {project.featured && (
                    <Badge variant="secondary" className="text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.technologies.length - 4} more
                  </Badge>
                )}
              </div>

              {/* Year */}
              <div className="text-sm text-muted-foreground">
                {project.year}
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4 pt-6 border-t border-border">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex items-center space-x-2 text-sm font-medium text-primary hover:underline"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="flex-1" />
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">No projects found in this category.</p>
        </div>
      )}

      {/* Stats */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
          <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
          <div className="text-sm text-muted-foreground">Total Projects</div>
        </div>
        <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
          <div className="text-3xl font-bold text-primary mb-2">
            {projects.filter(p => p.featured).length}
          </div>
          <div className="text-sm text-muted-foreground">Featured</div>
        </div>
        <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
          <div className="text-3xl font-bold text-primary mb-2">
            {projects.filter(p => p.live).length}
          </div>
          <div className="text-sm text-muted-foreground">Live Demos</div>
        </div>
        <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
          <div className="text-3xl font-bold text-primary mb-2">
            {projects.filter(p => p.category === "open-source").length}
          </div>
          <div className="text-sm text-muted-foreground">Open Source</div>
        </div>
      </div>
    </div>
  );
}
