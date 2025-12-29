import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

// Define the content directory for blog posts
const BLOG_CONTENT_DIR = path.join(process.cwd(), "content", "blog");

// Blog post frontmatter interface
export interface BlogFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  featured?: boolean;
  author?: string;
  coverImage?: string;
  published?: boolean;
}

// Full blog post interface
export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readTime: string;
}

// Blog post metadata (without content) for listing
export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  featured: boolean;
  readTime: string;
  author?: string;
  coverImage?: string;
}

/**
 * Get all blog post slugs from the content directory
 */
export function getAllBlogSlugs(): string[] {
  // Ensure the directory exists
  if (!fs.existsSync(BLOG_CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_CONTENT_DIR);
  return files
    .filter((file) => (file.endsWith(".md") || file.endsWith(".mdx")) && file.toLowerCase() !== "readme.md")
    .map((file) => file.replace(/\.mdx?$/, ""));
}

/**
 * Get a single blog post by slug
 */
export function getBlogPost(slug: string): BlogPost | null {
  const mdPath = path.join(BLOG_CONTENT_DIR, `${slug}.md`);
  const mdxPath = path.join(BLOG_CONTENT_DIR, `${slug}.mdx`);

  let filePath: string;
  if (fs.existsSync(mdPath)) {
    filePath = mdPath;
  } else if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  } else {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const frontmatter = data as BlogFrontmatter;

  // Skip unpublished posts in production
  if (process.env.NODE_ENV === "production" && frontmatter.published === false) {
    return null;
  }

  const stats = readingTime(content);

  return {
    slug,
    frontmatter: {
      ...frontmatter,
      tags: frontmatter.tags ?? [],
      featured: frontmatter.featured ?? false,
      author: frontmatter.author ?? "Vasu Jain",
    },
    content,
    readTime: stats.text,
  };
}

/**
 * Get all blog posts with metadata (for listing pages)
 */
export function getAllBlogPosts(): BlogPostMeta[] {
  const slugs = getAllBlogSlugs();

  const posts: BlogPostMeta[] = [];

  for (const slug of slugs) {
    const post = getBlogPost(slug);
    if (!post) continue;

    posts.push({
      slug: post.slug,
      title: post.frontmatter.title,
      excerpt: post.frontmatter.excerpt,
      date: post.frontmatter.date,
      tags: post.frontmatter.tags,
      featured: post.frontmatter.featured ?? false,
      readTime: post.readTime,
      author: post.frontmatter.author,
      coverImage: post.frontmatter.coverImage,
    });
  }

  // Sort by date (newest first)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get featured blog posts
 */
export function getFeaturedBlogPosts(): BlogPostMeta[] {
  return getAllBlogPosts().filter((post) => post.featured);
}

/**
 * Get blog posts by tag
 */
export function getBlogPostsByTag(tag: string): BlogPostMeta[] {
  return getAllBlogPosts().filter((post) =>
    (post.tags ?? []).some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get all unique tags from all blog posts
 */
export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tagSet = new Set<string>();

  posts.forEach((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag) => tagSet.add(tag));
    }
  });

  return Array.from(tagSet).sort();
}

/**
 * Get related posts based on shared tags
 */
export function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): BlogPostMeta[] {
  const currentPost = getBlogPost(currentSlug);
  if (!currentPost) return [];

  const allPosts = getAllBlogPosts().filter((post) => post.slug !== currentSlug);

  // Score posts by number of shared tags
  const scoredPosts = allPosts.map((post) => {
    const postTags = post.tags ?? [];
    const currentTags = currentPost.frontmatter.tags ?? [];
    const sharedTags = postTags.filter((tag) => currentTags.includes(tag));
    return { post, score: sharedTags.length };
  });

  // Sort by score (descending) and then by date
  scoredPosts.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
  });

  return scoredPosts.slice(0, limit).map((item) => item.post);
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Generate static params for blog posts (for Next.js static generation)
 */
export function generateBlogStaticParams(): { slug: string }[] {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}
