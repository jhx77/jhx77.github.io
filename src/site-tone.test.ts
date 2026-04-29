import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { navItems } from "./data/profile";
import { projects } from "./data/projects";

const scannedDirectories = ["components", "content", "data", "pages"];

const bannedPhrases = [
  "把复杂系统讲清楚",
  "以工程视角组织个人成长",
  "技术栈不是标签",
  "个人品牌",
  "AI Application Builder",
  "高级个人品牌",
  "工程视角",
  "系统能力",
  "高级感",
  "赋能",
  "全链路",
  "行业领先",
  "极大提升",
  "深度沉淀",
  "打造闭环",
  "高并发巅峰",
  "复杂系统掌控力",
  "Personal Brand",
  "ready"
];

function collectSourceFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      return collectSourceFiles(path);
    }

    return /\.(tsx?|md)$/.test(entry) && !/\.test\.tsx?$/.test(entry) ? [path] : [];
  });
}

describe("site tone", () => {
  it("uses simple navigation labels for a personal blog", () => {
    expect(navItems.map((item) => item.label)).toEqual([
      "Home",
      "About",
      "Projects",
      "Blog",
      "Contact"
    ]);
  });

  it("keeps marketing-like phrases out of user-facing content", () => {
    const sourceFiles = scannedDirectories.flatMap((directory) => collectSourceFiles(join("src", directory)));

    const matches = sourceFiles.flatMap((file) => {
      const content = readFileSync(file, "utf8");
      return bannedPhrases.filter((phrase) => content.includes(phrase)).map((phrase) => `${file}: ${phrase}`);
    });

    expect(matches).toEqual([]);
  });

  it("keeps project descriptions structured but natural", () => {
    expect(projects.map((project) => project.title)).toEqual([
      "FastKB 企业私有 AI 平台",
      "智荐生活平台"
    ]);

    const allProjectText = projects
      .map((project) => `${project.title}\n${project.summary}\n${project.highlights.join("\n")}`)
      .join("\n");

    expect(allProjectText).not.toContain("智荟生活平台");
    expect(allProjectText).not.toMatch(/136\\d{8}|预备党员/);
  });
});
