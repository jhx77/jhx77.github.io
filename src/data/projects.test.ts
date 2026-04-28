import { describe, expect, it } from "vitest";
import { projects } from "./projects";

describe("project narratives", () => {
  it("keeps FastKB as a complete interview-grade technical narrative", () => {
    const fastkb = projects.find((project) => project.slug === "fastkb");

    expect(fastkb?.narrative).toContain("Tika");
    expect(fastkb?.narrative).toContain("pgvector");
    expect(fastkb?.narrative).toContain("PostgreSQL 全文检索");
    expect(fastkb?.narrative).toContain("QueryRewrite");
    expect(fastkb?.narrative).toContain("Graph 编排模型");
    expect(fastkb?.narrative).toContain("滑动窗口");
    expect(fastkb?.narrative).toContain("RBAC");
    expect(fastkb?.narrative).toContain("MCP Tool");
    expect(fastkb?.narrative.length).toBeGreaterThan(1400);
  });

  it("frames the smart life platform as an optimization story instead of a resume list", () => {
    const platform = projects.find((project) => project.slug === "smart-life");

    expect(platform?.narrative).toContain("Redis 预扣库存");
    expect(platform?.narrative).toContain("Lua");
    expect(platform?.narrative).toContain("Kafka");
    expect(platform?.narrative).toContain("逻辑过期");
    expect(platform?.narrative).toContain("Caffeine + Redis");
    expect(platform?.narrative).toContain("LangChain4j");
    expect(platform?.narrative.length).toBeGreaterThan(900);
  });
});
