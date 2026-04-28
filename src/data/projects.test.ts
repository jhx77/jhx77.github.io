import { describe, expect, it } from "vitest";
import { projects } from "./projects";

describe("project narratives", () => {
  it("keeps FastKB technical details without turning it into a slogan", () => {
    const fastkb = projects.find((project) => project.slug === "fastkb");
    const fullText = `${fastkb?.narrative}\n${fastkb?.sections.flatMap((section) => section.body).join("\n")}`;

    expect(fullText).toContain("Tika");
    expect(fullText).toContain("pgvector");
    expect(fullText).toContain("PostgreSQL 全文检索");
    expect(fullText).toContain("QueryRewrite");
    expect(fullText).toContain("Graph 编排模型");
    expect(fullText).toContain("滑动窗口");
    expect(fullText).toContain("RBAC");
    expect(fullText).toContain("MCP Tool");
    expect(fullText.length).toBeGreaterThan(1200);
  });

  it("keeps the smart life platform focused on implementation details", () => {
    const platform = projects.find((project) => project.slug === "smart-life");
    const fullText = `${platform?.narrative}\n${platform?.sections.flatMap((section) => section.body).join("\n")}`;

    expect(fullText).toContain("Redis 做库存预扣");
    expect(fullText).toContain("Lua");
    expect(fullText).toContain("Kafka");
    expect(fullText).toContain("逻辑过期");
    expect(fullText).toContain("Caffeine + Redis");
    expect(fullText).toContain("LangChain4j");
    expect(fullText).toContain("Function Calling");
    expect(fullText.length).toBeGreaterThan(900);
  });
});
