import { ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";

export default function TagNotFound() {
  return (
    <div className="container py-20">
      <div className="max-w-2xl mx-auto text-center">
        <Tag className="h-20 w-20 mx-auto mb-6 text-muted-foreground" />
        <h1 className="text-3xl font-bold mb-4">Tag Not Found</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          No posts found with this tag, or the tag doesn&apos;t exist.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
