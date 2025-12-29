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
              DevOps & Full-Stack Engineer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              DevOps and Full-Stack Engineer focused on building, automating, and scaling modern applications. Proficient in AWS, GCP, Linux, CI/CD pipelines, Docker, Kubernetes, Terraform, Ansible.
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
                  Docker, Kubernetes, AWS, CI/CD, GitHub Actions, Terraform, GitOps
                </div>
              </div>
              <div className="space-y-3">
                <div className="font-semibold text-lg">Linux</div>
                <div className="text-muted-foreground leading-relaxed">
                  Arch, Debian, Ubuntu, Bash Scripting, Systemd, Networking
                </div>
              </div>
              <div className="space-y-3">
                <div className="font-semibold text-lg">Frontend</div>
                <div className="text-muted-foreground leading-relaxed">
                  React, TypeScript, Tailwind, Vite
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
                vinay@Arch:~
              </span>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center space-x-3">
                <span className="text-primary font-bold">$</span>
                <span>cat experience.txt</span>
              </div>
              <div className="text-secondary leading-relaxed pl-6">
                • HollowDots (Ansible)
                <br />
                • Keyarch (CLI typing test)
                <br />
                • Telecord (Node.js)
                <br />• CSE Undergrad (University)
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary font-bold">$</span>
                <span>cat certifications.txt</span>
              </div>
              <div className="text-secondary leading-relaxed pl-6">
                • Decoding DevOps (In Progress)
                <br />
                • Full Stack Generative and Agentic AI (In Progress)
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
