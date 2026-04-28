import { describe, expect, it } from "vitest";
import { getBlogPosts, getPaginatedPosts, getPostBySlug } from "./blog";

describe("blog content pipeline", () => {
  it("loads markdown posts with parsed metadata sorted by date descending", () => {
    const posts = getBlogPosts();

    expect(posts).toHaveLength(2);
    expect(posts[0]).toMatchObject({
      slug: "rag-hybrid-retrieval",
      title: "RAG 为什么需要混合检索"
    });
    expect(posts[0].content).toContain("QueryRewrite");
    expect(posts[1].slug).toBe("seckill-cache-consistency");
  });

  it("supports pagination and detail lookup", () => {
    expect(getPaginatedPosts(1, 1).items.map((post) => post.slug)).toEqual([
      "rag-hybrid-retrieval"
    ]);
    expect(getPaginatedPosts(2, 1).items.map((post) => post.slug)).toEqual([
      "seckill-cache-consistency"
    ]);
    expect(getPostBySlug("rag-hybrid-retrieval")?.readingTime).toBeGreaterThan(1);
  });
});
