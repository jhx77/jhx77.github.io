import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="项目经历：从技术名词到工程叙事"
          description="这里保留面试时真正有价值的信息：为什么做、难点在哪里、系统怎么拆、取舍是什么，以及最后解决了什么问题。"
        />

        <div className="space-y-10">
          {projects.map((project, index) => (
            <article className="project-article" key={project.slug}>
              <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
                <aside className="project-side">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-600 dark:text-cyan">
                    Case {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-white md:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">{project.subtitle}</p>
                  <div className="mt-6 grid gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                    <span>{project.period}</span>
                    <span>{project.role}</span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.keywords.map((keyword) => (
                      <span className="tag" key={keyword}>
                        {keyword}
                      </span>
                    ))}
                  </div>
                </aside>

                <div>
                  <div className="narrative">
                    {project.narrative.split("\n\n").map((paragraph) => (
                      <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {project.engineeringLens.map((lens) => (
                      <section className="lens-card" key={lens.title}>
                        <div className="flex items-center justify-between gap-3">
                          <h3>{lens.title}</h3>
                          <ArrowUpRight size={17} />
                        </div>
                        <p>{lens.body}</p>
                      </section>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
