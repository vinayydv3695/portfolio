import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* About Preview Section */}
      <section className="container max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Backend Developer & DevOps Engineer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a CSE undergrad passionate about building robust backend
              microservices, DevOps automation, and practical GenAI
              applications. Currently working on secure, scalable systems and
              exploring advanced AI orchestration patterns.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="font-semibold text-lg">Backend</div>
                <div className="text-muted-foreground leading-relaxed">
                  Java, Go, TypeScript, Python, Spring Boot, FastAPI
                </div>
              </div>
              <div className="space-y-3">
                <div className="font-semibold text-lg">DevOps</div>
                <div className="text-muted-foreground leading-relaxed">
                  Docker, Kubernetes, AWS, CI/CD, GitHub Actions
                </div>
              </div>
              <div className="space-y-3">
                <div className="font-semibold text-lg">AI/ML</div>
                <div className="text-muted-foreground leading-relaxed">
                  LangChain, RAG, Vector DBs, Qdrant, LangGraph
                </div>
              </div>
              <div className="space-y-3">
                <div className="font-semibold text-lg">Frontend</div>
                <div className="text-muted-foreground leading-relaxed">
                  React, TypeScript, shadcn/ui, Vite, Zustand
                </div>
              </div>
            </div>
          </div>

          <div className="terminal p-8 bg-card border border-border rounded-xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-muted-foreground font-mono">
                vasu@backend:~
              </span>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center space-x-3">
                <span className="text-primary font-bold">$</span>
                <span>cat experience.txt</span>
              </div>
              <div className="text-secondary leading-relaxed pl-6">
                • ShelfWise (Spring Boot + React)
                <br />
                • Task Genie (AI Agent + Python)
                <br />
                • Open Source: talawa-api, talawa-admin
                <br />• CSE Undergrad (University)
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary font-bold">$</span>
                <span>cat certifications.txt</span>
              </div>
              <div className="text-secondary leading-relaxed pl-6">
                • AWS Cloud Practitioner (In Progress)
                <br />
                • AWS Developer Associate (In Progress)
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
