import { ArrowRight, Github, Mail, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { profile, techStack } from "../data/profile";

export function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white/72 px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-white/15 dark:bg-white/8 dark:text-zinc-200">
              <Sparkles size={16} className="text-gold" />
              Java 后端 · AI 应用工程 · 技术内容表达
            </p>
            <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight text-zinc-950 dark:text-white md:text-6xl">
              {profile.name}
              <span className="block text-gradient">把复杂系统讲清楚，也把它做扎实。</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-zinc-600 dark:text-zinc-300">
              我关注 Java 后端、RAG、智能体工具调用与高并发交易系统。这个网站不是模板简历，而是一个面向实习与求职展示的技术档案：用项目叙事解释问题、架构取舍和工程结果。
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/projects" className="primary-button">
                查看项目经历
                <ArrowRight size={18} />
              </Link>
              <a href={profile.github} target="_blank" rel="noreferrer" className="secondary-button">
                <Github size={18} />
                GitHub 账号
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-panel">
              <div className="flex items-center gap-5">
                <img src={profile.avatar} alt={profile.englishName} className="h-24 w-24 rounded-lg object-cover" />
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-500 dark:text-cyan">
                    Personal Brand
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-zinc-950 dark:text-white">{profile.brandName}</h2>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{profile.role}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                {["RAG 混合检索", "Workflow Graph", "Redis 秒杀削峰", "RBAC 权限隔离"].map((item, index) => (
                  <div key={item} className="metric-row" style={{ animationDelay: `${index * 90}ms` }}>
                    <span>{item}</span>
                    <span className="text-cyan-600 dark:text-cyan">ready</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="About"
            title="以工程视角组织个人成长"
            description="我希望展示的不只是会用哪些技术，而是能否把业务问题拆成可靠的系统边界：数据如何进入系统，状态如何流动，权限如何生效，失败如何恢复。"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "后端系统设计",
                body: "以 Spring Boot、数据库、缓存和消息队列为主线，关注交易链路、缓存治理、异步削峰和一致性收敛。"
              },
              {
                title: "AI 应用工程",
                body: "从 RAG、Workflow、模型抽象和 MCP Tool 入手，把 AI 能力接入可观测、可审计、可扩展的业务系统。"
              },
              {
                title: "技术表达",
                body: "项目不是技术名词清单，而是一个完整的工程故事：背景、问题、方案、取舍、结果都要能被面试官追问。"
              }
            ].map((item) => (
              <article className="content-card" key={item.title}>
                <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Stack"
            title="技术栈不是标签，而是系统能力"
            description="每一项技术都对应一个工程问题：性能、成本、权限、可扩展性、可解释性或交付效率。"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <article className="content-card min-h-[190px]" key={tech.name}>
                  <Icon size={24} className="text-cyan-600 dark:text-cyan" />
                  <h3 className="mt-5 text-base font-semibold text-zinc-950 dark:text-white">{tech.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{tech.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl rounded-lg border border-zinc-200 bg-zinc-950 p-8 text-white shadow-card dark:border-white/10 dark:bg-white/8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-gold">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">欢迎交流后端、AI 应用与实习机会</h2>
              <p className="mt-4 text-zinc-300">我更喜欢围绕具体问题交流：架构怎么拆、检索怎么稳、缓存怎么抗压、项目如何讲得更有说服力。</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a href={`mailto:${profile.emails[0]}`} className="light-button">
                <Mail size={18} />
                发送邮件
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="light-button">
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-300">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} />
              {profile.location}
            </span>
            <span>{profile.school}</span>
          </div>
        </div>
      </section>
    </>
  );
}
