# Blog Content

This folder contains all the blog posts for the portfolio website. Blog posts are written in Markdown format with YAML frontmatter for metadata.

## How to Add a New Blog Post

1. Create a new `.md` file in this directory
2. The filename will become the URL slug (e.g., `my-new-post.md` → `/blog/my-new-post`)
3. Add the required frontmatter at the top of the file
4. Write your content in Markdown below the frontmatter
5. Push to the repository - the blog will update automatically on build

## Frontmatter Template

```yaml
---
title: "Your Blog Post Title"
excerpt: "A brief description of your post (shown in listings and meta tags)"
date: "2024-01-15"
tags:
  - Tag1
  - Tag2
  - Tag3
featured: false
author: "Your Name"
published: true
coverImage: "/images/blog/cover.jpg"  # Optional
---
```

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | The title of your blog post |
| `excerpt` | string | A short description (1-2 sentences) |
| `date` | string | Publication date in YYYY-MM-DD format |
| `tags` | array | List of tags for categorization |

### Optional Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `featured` | boolean | `false` | Show in featured section |
| `author` | string | `"Vinay Yadav"` | Author name |
| `published` | boolean | `true` | Set to `false` for drafts |
| `coverImage` | string | none | Path to cover image |

## Markdown Features

The blog supports full GitHub Flavored Markdown including:

### Code Blocks with Syntax Highlighting

Use triple backticks with the language name:

````markdown
```python
def hello_world():
    print("Hello, World!")
```
````

Supported languages include: Python, JavaScript, TypeScript, Java, Go, Rust, SQL, YAML, Docker, and many more.

### Tables

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

### Task Lists

```markdown
- [x] Completed task
- [ ] Pending task
```

### Blockquotes

```markdown
> This is a blockquote
```

### Images

```markdown
![Alt text](/images/blog/my-image.png)
```

## File Organization Tips

- Use descriptive, URL-friendly filenames (lowercase, hyphens)
- Keep filenames concise but meaningful
- Group related posts with common tag prefixes

## Draft Posts

To create a draft that won't appear on the site, add:

```yaml
published: false
```

The post will be visible during development (`pnpm dev`) but not in production builds.

## Tag Guidelines

Tags are used for filtering and related posts. Recommended tags:

- **Languages**: Python, JavaScript, TypeScript, Go, Rust, Shell
- **Frameworks**: React, Next.js, FastAPI, Express
- **Topics**: DevOps, Linux, Customization, Tutorial, Advanced
- **Tools**: Docker, Kubernetes, Ansible, Terraform, Git
- **Concepts**: CI/CD, Infrastructure, Automation, Arch Linux, Tiling Managers

## Example Post

```markdown
---
title: "Getting Started with Hyprland"
excerpt: "Learn how to set up and configure Hyprland, the beautiful Wayland compositor."
date: "2024-01-20"
tags:
  - Linux
  - Hyprland
  - Customization
featured: true
author: "Vinay Yadav"
published: true
---

Hyprland is a modern, dynamic tiling Wayland compositor with stunning animations.

## Installation

\`\`\`bash
yay -S hyprland-git
\`\`\`

## Basic Configuration

\`\`\`conf
# ~/.config/hypr/hyprland.conf
general {
    gaps_in = 5
    gaps_out = 10
    border_size = 2
}

decoration {
    rounding = 10
    blur {
        enabled = true
    }
}
\`\`\`

Launch Hyprland and start customizing!
```
