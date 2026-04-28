import {
  Blocks,
  Bot,
  BrainCircuit,
  Cpu,
  Database,
  GitBranch,
  LockKeyhole,
  Mail,
  Server,
  Workflow
} from "lucide-react";

export const profile = {
  name: "江宏鑫",
  englishName: "Jiang Hongxin",
  brandName: "Orion Jiang",
  role: "Java Backend Engineer / AI Application Builder",
  school: "浙江水利水电学院 · 物联网工程",
  location: "Hangzhou, China",
  github: "https://github.com/jhx77",
  avatar: "https://avatars.githubusercontent.com/u/148064648?v=4",
  emails: ["hongxinjiang@qq.com", "hongxinj91@gmail.com"],
  social: {
    twitter: "https://twitter.com/jhxer_7",
    instagram: "Jiang_7"
  }
};

export const navItems = [
  { label: "首页", path: "/" },
  { label: "项目经历", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "联系方式", path: "/contact" }
] as const;

export const techStack = [
  {
    name: "Java / Spring Boot",
    description: "以领域边界、事务模型和可观测性为核心组织后端服务。",
    icon: Server
  },
  {
    name: "PostgreSQL / MySQL",
    description: "熟悉关系建模、全文检索、索引策略与一致性边界设计。",
    icon: Database
  },
  {
    name: "Redis / Caffeine",
    description: "围绕热点数据、秒杀库存、逻辑过期和多级缓存做性能治理。",
    icon: Cpu
  },
  {
    name: "Kafka",
    description: "使用异步队列削峰、解耦下游处理并保护核心交易链路。",
    icon: GitBranch
  },
  {
    name: "RAG / pgvector",
    description: "把向量召回、全文检索、QueryRewrite 与重排策略组合成可解释检索链路。",
    icon: BrainCircuit
  },
  {
    name: "Workflow / Agent",
    description: "用节点、边、状态流描述智能体执行过程，保持工具扩展能力。",
    icon: Workflow
  },
  {
    name: "RBAC / 权限隔离",
    description: "从用户、部门、岗位和资源授权的关系里设计企业级访问边界。",
    icon: LockKeyhole
  },
  {
    name: "MCP Tool / Function Calling",
    description: "将外部系统能力变成可治理、可审计、可组合的 AI 工具。",
    icon: Bot
  },
  {
    name: "React / TypeScript",
    description: "用强类型组件和静态站点工程呈现技术内容与个人品牌。",
    icon: Blocks
  },
  {
    name: "Technical Writing",
    description: "把项目讲成问题、方案、取舍和结果，而不是技术名词堆叠。",
    icon: Mail
  }
];
