import { Badge } from "@/components/ui/badge";
import { formatDate, getAllTags, getBlogPostsByTag } from "@/lib/blog";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for all tags
export function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({ tag: encodeURIComponent(tag) }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  return {
    title: `Posts tagged "${decodedTag}" | Vasu Jain`,
    description: `Blog posts about ${decodedTag}`,
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = getBlogPostsByTag(decodedTag);
  const allTags = getAllTags();

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-20">
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
      <div className="text-center space-y-6 mb-16">
        <div className="flex items-center justify-center gap-3">
          <Tag className="h-8 w-8 text-primary" aria-hidden="true" />
          <h1 className="text-4xl lg:text-5xl font-bold">{decodedTag}</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {posts.length} {posts.length === 1 ? "post" : "posts"} tagged with
          &quot;{decodedTag}&quot;
        </p>
      </div>

      {/* Other Tags */}
      <div className="mb-12">
        <div className="flex items-center justify-center flex-wrap gap-3">
          <span className="text-sm text-muted-foreground mr-2">
            Other topics:
          </span>
          {allTags
            .filter((t) => t.toLowerCase() !== decodedTag.toLowerCase())
            .map((t) => (
              <Link key={t} href={`/blog/tag/${encodeURIComponent(t)}`}>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {t}
                </Badge>
              </Link>
            ))}
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
          >
            <Link href={`/blog/${post.slug}`} className="block p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
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
                    {(post.tags ?? []).map((t) => (
                      <Badge
                        key={t}
                        variant={
                          t.toLowerCase() === decodedTag.toLowerCase()
                            ? "default"
                            : "outline"
                        }
                        className="text-xs"
                      >
                        {t}
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
    </div>
  );
}
