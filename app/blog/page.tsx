import { Badge } from "@/components/ui/badge";
import { formatDate, getAllBlogPosts, getAllTags } from "@/lib/blog";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const featuredPosts = allPosts.filter((post) => post.featured);
  const allTags = getAllTags();

  return (
    <div className="container max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Thoughts on backend development, DevOps practices, AI applications,
          and everything in between.
        </p>
      </div>

      {/* Tags Filter */}
      {allTags.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center justify-center flex-wrap gap-3">
            <span className="flex items-center text-sm text-muted-foreground mr-2">
              <Tag className="h-4 w-4 mr-1" />
              Topics:
            </span>
            {allTags.map((tag) => (
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
        </div>
      )}

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Posts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="project-card group">
                <Link href={`/blog/${post.slug}`} className="block space-y-6">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true">•</span>
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-sm text-primary group-hover:underline">
                    Read more
                    <ArrowRight
                      className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* All Posts */}
      <div>
        <h2 className="text-3xl font-bold mb-12 text-center">All Posts</h2>
        {allPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {allPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <Link href={`/blog/${post.slug}`} className="block p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        <time dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                        <span aria-hidden="true">•</span>
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        <span>{post.readTime}</span>
                      </div>
                      {post.featured && (
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <span className="inline-flex items-center text-sm text-primary group-hover:underline">
                        Read more
                        <ArrowRight
                          className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-20 p-8 bg-card border border-border rounded-xl text-center">
        <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Get notified when I publish new articles about backend development,
          DevOps, and AI.
        </p>
        <div className="flex max-w-md mx-auto space-x-3">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            aria-label="Email address for newsletter"
            className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-base"
          />
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-base font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
