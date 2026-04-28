export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
  readingTime: number;
};

type Frontmatter = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

const rawModules = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true
}) as Record<string, string>;

function parseFrontmatter(raw: string): { metadata: Frontmatter; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    throw new Error("Blog post is missing frontmatter.");
  }

  const entries = match[1].split("\n").reduce<Record<string, string>>((acc, line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return acc;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^"|"$/g, "");
    acc[key] = value;
    return acc;
  }, {});

  return {
    metadata: {
      title: entries.title,
      date: entries.date,
      excerpt: entries.excerpt,
      tags: entries.tags ? entries.tags.split(",").map((tag) => tag.trim()) : []
    },
    content: match[2].trim()
  };
}

function getSlugFromPath(path: string) {
  return path.split("/").pop()?.replace(".md", "") ?? "";
}

function estimateReadingTime(content: string) {
  return Math.max(1, Math.ceil(content.replace(/\s/g, "").length / 520));
}

export function getBlogPosts(): BlogPost[] {
  return Object.entries(rawModules)
    .map(([path, raw]) => {
      const { metadata, content } = parseFrontmatter(raw);

      return {
        slug: getSlugFromPath(path),
        ...metadata,
        content,
        readingTime: estimateReadingTime(content)
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug);
}

export function getPaginatedPosts(page: number, pageSize: number) {
  const posts = getBlogPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    page: safePage,
    total: posts.length,
    totalPages,
    items: posts.slice(start, start + pageSize)
  };
}
