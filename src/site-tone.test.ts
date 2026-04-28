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

    return /\.(tsx?|md)$/.test(entry) ? [path] : [];
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
    for (const project of projects) {
      expect(project.summary.length).toBeGreaterThan(20);
      expect(project.sections.map((section) => section.title)).toEqual([
        "项目背景",
        "主要功能",
        "技术实现",
        "我负责的部分",
        "遇到的问题与解决思路"
      ]);
    }
  });
});
