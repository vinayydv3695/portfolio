import { ArrowLeft, FileQuestion } from "lucide-react";
import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="container py-20">
      <div className="max-w-2xl mx-auto text-center">
        <FileQuestion className="h-20 w-20 mx-auto mb-6 text-muted-foreground" />
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The blog post you&apos;re looking for doesn&apos;t exist or has been
          removed.
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
