import { SectionHeading } from "../components/SectionHeading";
import { profile, techStack } from "../data/profile";

export function About() {
  return (
    <section className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="About" title="About Me" />
        <div className="grid gap-5 lg:grid-cols-[1fr_0.7fr]">
          <article className="content-card">
            <p className="text-base leading-8 text-zinc-700 dark:text-zinc-300">
              你好，我是江宏鑫，目前是浙江水利水电学院物联网工程专业本科生。最近主要在学习 Java
              后端开发、数据库、Redis、RAG 和一些 AI 应用相关内容。
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-700 dark:text-zinc-300">
              这个网站会慢慢记录学习过程、项目经历和一些个人想法。内容可能不会很完整，但希望它更像一个真实的笔记本，而不是包装过的展示页。
            </p>
          </article>

          <aside className="content-card">
            <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">最近在看</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              <p>{profile.school}</p>
              <p>{profile.location}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
