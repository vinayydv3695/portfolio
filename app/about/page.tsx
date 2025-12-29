import { Badge } from "@/components/ui/badge";
import { experience, getSkillsByCategory } from "@/lib/experience";
import { Calendar, Github, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import * as SiIcons from "react-icons/si";

// Helper to get icon component
const getIcon = (iconName: string) => {
  const Icon = (SiIcons as any)[iconName];
  return Icon ? <Icon className="h-8 w-8" /> : null;
};

export default function AboutPage() {
  const categories = [
    "languages",
    "backend",
    "frontend",
    "devops",
    "ai",
    "database",
    "tools",
  ];

  return (
    <div className="container max-w-7xl mx-auto px-4 py-12 sm:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
                <Image
                  src="/vinay-profile.jpg"
                  alt="Vinay Yadav"
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
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A DevOps & Full-Stack Engineer focused on building scalable, cloud-native applications.
            I work with AWS, GCP, Linux, CI/CD, Docker, Kubernetes, Terraform, Ansible, and GitOps.
          </p>
        </div>

        {/* Personal Info */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Background</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm Vinay, a Computer Science undergraduate from India, driven by a deep curiosity for how systems run at scale. 
                My journey into DevOps grew from a love for Linux and backend systems into a focused passion for automation and deployment.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Today, I work on building reliable, cloud-native pipelines and continuously sharpen my skills in DevOps and full-stack development.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <span className="text-base sm:text-lg">India</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <a
                  href="mailto:vinayydv343@gmail.com"
                  className="text-base sm:text-lg hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label="Send email to vinayydv343@gmail.com"
                >
                  vinayydv343@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Github className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <a
                  href="https://github.com/vinayydv3695"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label="Visit Vinay Yadav's GitHub profile (opens in new tab)"
                >
                  github.com/vinayydv3695
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Current Focus</h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="p-4 sm:p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">
                  DevOps
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Automation, CI/CD pipelines, cloud infrastructure, and scalable deployments
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">
                  Generative AI
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Exploring AI-driven automation and intelligent system workflows
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">
                  Computer Networking
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Understanding how systems communicate, scale, and stay reliable
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-8 sm:space-y-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            Skills & Technologies
          </h2>

          <div className="space-y-8 sm:space-y-12">
            {categories.map((category) => {
              const categorySkills = getSkillsByCategory(category);
              if (categorySkills.length === 0) return null;

              return (
                <div key={category} className="space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-semibold capitalize border-b border-border pb-2">
                    {category === "ai" ? "AI / ML" : category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
                    {categorySkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center p-4 sm:p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                      >
                        <div className="text-muted-foreground group-hover:text-primary transition-colors mb-2 sm:mb-3">
                          {getIcon(skill.icon)}
                        </div>
                        <span className="font-medium text-center text-sm sm:text-base">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 sm:space-y-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            Experience Timeline
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
                    <Calendar className="h-5 w-5 sm:h-7 sm:w-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1 space-y-3 sm:space-y-4 bg-card p-4 sm:p-6 rounded-xl border border-border hover:border-primary/50 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium text-base sm:text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="w-fit text-xs sm:text-sm"
                      >
                        {exp.period}
                      </Badge>
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                {index < experience.length - 1 && (
                  <div className="absolute left-5 sm:left-7 top-10 sm:top-14 bottom-0 w-0.5 bg-border -z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
