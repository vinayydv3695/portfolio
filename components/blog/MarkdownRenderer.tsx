"use client";

import { ComponentPropsWithoutRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-code:text-secondary prose-pre:bg-muted prose-pre:border prose-pre:border-border">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Custom heading styles
          h1: ({ children, ...props }: ComponentPropsWithoutRef<"h1">) => (
            <h1
              className="text-3xl font-bold text-foreground mt-10 mb-6 first:mt-0"
              {...props}
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
            <h2
              className="text-2xl font-semibold text-foreground mt-8 mb-4 pb-2 border-b border-border"
              {...props}
            >
              {children}
            </h2>
          ),
          h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
            <h3
              className="text-xl font-semibold text-foreground mt-6 mb-3"
              {...props}
            >
              {children}
            </h3>
          ),
          h4: ({ children, ...props }: ComponentPropsWithoutRef<"h4">) => (
            <h4
              className="text-lg font-medium text-foreground mt-4 mb-2"
              {...props}
            >
              {children}
            </h4>
          ),

          // Paragraph styling
          p: ({ children, ...props }: ComponentPropsWithoutRef<"p">) => (
            <p
              className="text-muted-foreground leading-relaxed mb-4"
              {...props}
            >
              {children}
            </p>
          ),

          // Link styling
          a: ({ children, href, ...props }: ComponentPropsWithoutRef<"a">) => (
            <a
              href={href}
              className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
              {...props}
            >
              {children}
            </a>
          ),

          // Code block styling
          pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
            <pre
              className="bg-muted border border-border rounded-lg p-4 overflow-x-auto my-6 text-sm"
              {...props}
            >
              {children}
            </pre>
          ),

          // Inline code styling
          code: ({
            className,
            children,
            ...props
          }: ComponentPropsWithoutRef<"code">) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code
                  className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-secondary"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },

          // List styling
          ul: ({ children, ...props }: ComponentPropsWithoutRef<"ul">) => (
            <ul
              className="list-disc pl-6 space-y-2 mb-4 text-muted-foreground"
              {...props}
            >
              {children}
            </ul>
          ),
          ol: ({ children, ...props }: ComponentPropsWithoutRef<"ol">) => (
            <ol
              className="list-decimal pl-6 space-y-2 mb-4 text-muted-foreground"
              {...props}
            >
              {children}
            </ol>
          ),
          li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => (
            <li className="text-muted-foreground pl-2" {...props}>
              {children}
            </li>
          ),

          // Blockquote styling
          blockquote: ({
            children,
            ...props
          }: ComponentPropsWithoutRef<"blockquote">) => (
            <blockquote
              className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground"
              {...props}
            >
              {children}
            </blockquote>
          ),

          // Horizontal rule
          hr: ({ ...props }: ComponentPropsWithoutRef<"hr">) => (
            <hr className="border-border my-8" {...props} />
          ),

          // Table styling
          table: ({
            children,
            ...props
          }: ComponentPropsWithoutRef<"table">) => (
            <div className="overflow-x-auto my-6">
              <table
                className="w-full border-collapse border border-border"
                {...props}
              >
                {children}
              </table>
            </div>
          ),
          th: ({ children, ...props }: ComponentPropsWithoutRef<"th">) => (
            <th
              className="border border-border bg-muted px-4 py-2 text-left font-semibold text-foreground"
              {...props}
            >
              {children}
            </th>
          ),
          td: ({ children, ...props }: ComponentPropsWithoutRef<"td">) => (
            <td
              className="border border-border px-4 py-2 text-muted-foreground"
              {...props}
            >
              {children}
            </td>
          ),

          // Image styling
          img: ({ src, alt, ...props }: ComponentPropsWithoutRef<"img">) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt || ""}
              className="rounded-lg border border-border my-6 max-w-full h-auto"
              {...props}
            />
          ),

          // Strong/Bold
          strong: ({
            children,
            ...props
          }: ComponentPropsWithoutRef<"strong">) => (
            <strong className="font-semibold text-foreground" {...props}>
              {children}
            </strong>
          ),

          // Emphasis/Italic
          em: ({ children, ...props }: ComponentPropsWithoutRef<"em">) => (
            <em className="italic" {...props}>
              {children}
            </em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
