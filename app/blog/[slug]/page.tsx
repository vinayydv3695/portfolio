import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import { Badge } from "@/components/ui/badge";
import {
  formatDate,
  generateBlogStaticParams,
  getBlogPost,
  getRelatedPosts,
} from "@/lib/blog";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Github,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for all blog posts
export function generateStaticParams() {
  return generateBlogStaticParams();
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.frontmatter.title} | Vasu Jain`,
    description: post.frontmatter.excerpt,
    keywords: post.frontmatter.tags.join(", "),
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author || "Vasu Jain"],
      tags: post.frontmatter.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          aria-label="Back to all blog posts"
        >
          <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <time dateTime={post.frontmatter.date}>
              {formatDate(post.frontmatter.date)}
            </time>
            <span aria-hidden="true">•</span>
            <Clock className="h-4 w-4" aria-hidden="true" />
            <span>{post.readTime}</span>
            {post.frontmatter.author && (
              <>
                <span aria-hidden="true">•</span>
                <span>By {post.frontmatter.author}</span>
              </>
            )}
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            {post.frontmatter.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <Link key={tag} href={`/blog/tag/${encodeURIComponent(tag)}`}>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </header>

        {/* Content */}
        <article className="mb-12">
          <MarkdownRenderer content={post.content} />
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section
            className="mb-12 pt-8 border-t border-border"
            aria-labelledby="related-posts-heading"
          >
            <h2 id="related-posts-heading" className="text-2xl font-bold mb-6">
              Related Posts
            </h2>
            <div className="grid gap-4">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold group-hover:text-primary transition-colors truncate">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        <time dateTime={relatedPost.date}>
                          {formatDate(relatedPost.date)}
                        </time>{" "}
                        • {relatedPost.readTime}
                      </p>
                    </div>
                    <ArrowRight
                      className="h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Written by {post.frontmatter.author || "Vasu Jain"}
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/vasujain275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/vasujain275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
