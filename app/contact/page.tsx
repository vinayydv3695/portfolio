"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Twitter,
} from "lucide-react";
import { useState } from "react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/vasujain275",
    icon: Github,
    description: "Check out my projects and contributions",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/vasujain275",
    icon: Linkedin,
    description: "Connect with me professionally",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/vasujain275",
    icon: Twitter,
    description: "Follow me for tech updates and thoughts",
  },
  {
    name: "Email",
    href: "mailto:vasujain275@gmail.com",
    icon: Mail,
    description: "Send me a direct message",
  },
  {
    name: "Website",
    href: "https://vasujain.me",
    icon: Globe,
    description: "Visit my personal website",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Construct mailto link with form data
    const mailtoSubject = encodeURIComponent(
      formData.subject || "Contact from Portfolio"
    );
    const mailtoBody = encodeURIComponent(
      `Hi Vasu,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoLink = `mailto:vasujain275@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open the mailto link
    window.location.href = mailtoLink;

    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Reset form after showing success
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitStatus("idle");
      }, 3000);
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-base font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-base font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="h-12 text-base"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="subject" className="text-base font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="h-12 text-base"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-base font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                  rows={8}
                  className="text-base resize-none"
                />
              </div>

              {/* Submit Button with Status */}
              <div className="space-y-3">
                <Button
                  type="submit"
                  className="w-full group h-12 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Opening Email Client...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>
                      Email client opened! Please send the email to complete
                      your message.
                    </span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>
                      Something went wrong. Please try again or email directly.
                    </span>
                  </div>
                )}
              </div>

              {/* Alternative: Direct Email Link */}
              <p className="text-sm text-muted-foreground text-center">
                Or email me directly at{" "}
                <a
                  href="mailto:vasujain275@gmail.com"
                  className="text-primary hover:underline font-medium"
                >
                  vasujain275@gmail.com
                </a>
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Let's Connect</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm currently available for new opportunities, collaborations,
                and interesting projects. Whether you want to discuss a
                potential project, have a question about my work, or just want
                to say hello, I'd love to hear from you.
              </p>

              {/* Quick Info */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-medium text-lg">Location</div>
                    <div className="text-muted-foreground">India</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-medium text-lg">Email</div>
                    <div className="text-muted-foreground">
                      vasujain275@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Globe className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-medium text-lg">Website</div>
                    <div className="text-muted-foreground">vasujain.me</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Find me on</h3>
              <div className="grid gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                  >
                    <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="flex-1">
                      <div className="font-medium group-hover:text-primary transition-colors">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {social.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-lg">
                  Available for opportunities
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently open to full-time positions, freelance work, and
                interesting collaborations.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">2+ Years</div>
            <div className="text-muted-foreground">Development Experience</div>
          </div>
          <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">
              15+ Projects
            </div>
            <div className="text-muted-foreground">Completed Successfully</div>
          </div>
          <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Response Time</div>
          </div>
        </div>
      </div>
    </div>
  );
}
