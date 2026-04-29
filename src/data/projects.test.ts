import { describe, expect, it } from "vitest";
import { getProjectBySlug, projects } from "./projects";

describe("project narratives", () => {
  it("lists resume-backed projects in reverse chronological order", () => {
    expect(projects.map((project) => project.slug)).toEqual(["fastkb", "zhijian-life"]);
    expect(projects.map((project) => project.period)).toEqual(["2025.10 - 2026.03", "2025.07 - 2025.09"]);
    expect(projects.every((project) => project.highlights.length >= 2)).toBe(true);
  });

  it("keeps FastKB detail sections focused on implementation work", () => {
    const fastkb = getProjectBySlug("fastkb");
    const fullText = `${fastkb?.summary}\n${fastkb?.highlights.join("\n")}\n${fastkb?.sections.flatMap((section) => section.body).join("\n")}`;

    expect(fastkb?.title).toBe("FastKB 企业私有 AI 平台");
    expect(fastkb?.sections.map((section) => section.title)).toEqual([
      "项目背景",
      "重要内容",
      "知识入库",
      "RAG 检索召回",
      "Workflow 节点编排",
      "AI 会话记忆",
      "模型策略抽象",
      "MCP Tool 扩展",
      "权限治理",
      "项目反思"
    ]);
    expect(fullText).toContain("Tika");
    expect(fullText).toContain("QueryRewrite");
    expect(fullText).toContain("pgvector");
    expect(fullText).toContain("PostgreSQL 全文检索");
    expect(fullText).toContain("Spring AI Alibaba");
    expect(fullText).toContain("滑动窗口");
    expect(fullText).toContain("RBAC");
    expect(fullText).toContain("MCP Tool");
    expect(fullText).not.toMatch(/行业领先|极大提升|全链路赋能|个人品牌/);
  });

  it("keeps the smart life platform factual and avoids the old name", () => {
    const platform = getProjectBySlug("zhijian-life");
    const fullText = `${platform?.summary}\n${platform?.highlights.join("\n")}\n${platform?.sections.flatMap((section) => section.body).join("\n")}`;

    expect(platform?.title).toBe("智荐生活平台");
    expect(fullText).toContain("Redis 预减库存");
    expect(fullText).toContain("Lua");
    expect(fullText).toContain("Kafka");
    expect(fullText).toContain("逻辑过期");
    expect(fullText).toContain("缓存空值");
    expect(fullText).toContain("Caffeine");
    expect(fullText).toContain("LangChain4j");
    expect(fullText).toContain("Function Calling");
    expect(fullText).not.toContain("智荟生活平台");
    expect(fullText).not.toMatch(/QPS|用户量|提升 \\d+%|极大提升/);
  });
});
