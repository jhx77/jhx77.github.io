import { describe, expect, it } from "vitest";
import { getBlogPosts, getPaginatedPosts, getPostBySlug } from "./blog";

describe("blog content pipeline", () => {
  it("loads formal markdown posts with parsed metadata sorted by date descending", () => {
    const posts = getBlogPosts();

    expect(posts.map((post) => post.slug)).toEqual([
      "workflow-agent-react-tot-ai-thinking",
      "the-art-of-asking",
      "rag-engineering-reflection",
      "seckill-system-stability-and-life"
    ]);
    expect(posts.map((post) => post.date)).toEqual([
      "2026-04-05",
      "2026-01-19",
      "2025-11-03",
      "2025-08-06"
    ]);
    expect(posts.every((post) => post.summary.length > 0)).toBe(true);
    expect(posts.some((post) => /示例|demo|sample/i.test(`${post.title}${post.summary}${post.content}`))).toBe(false);
  });

  it("supports pagination and detail lookup", () => {
    expect(getPaginatedPosts(1, 3).items.map((post) => post.slug)).toEqual([
      "workflow-agent-react-tot-ai-thinking",
      "the-art-of-asking",
      "rag-engineering-reflection"
    ]);
    expect(getPaginatedPosts(2, 3).items.map((post) => post.slug)).toEqual([
      "seckill-system-stability-and-life"
    ]);
    expect(getPostBySlug("rag-engineering-reflection")?.content).toContain("RRF");
    expect(getPostBySlug("seckill-system-stability-and-life")?.readingTime).toBeGreaterThan(3);
  });
});
