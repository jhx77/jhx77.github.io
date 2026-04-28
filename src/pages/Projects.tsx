import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Projects"
          title="项目经历"
          description="这里保留一些项目的背景、实现过程和遇到的问题，语气尽量写得接近真实开发记录。"
        />

        <div className="space-y-12">
          {projects.map((project) => (
            <article className="project-article" key={project.slug}>
              <header className="max-w-3xl">
                <div className="flex flex-wrap gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <span>{project.period}</span>
                  <span>·</span>
                  <span>{project.role}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-zinc-950 dark:text-white md:text-3xl">
                  {project.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {project.narrative.split("\n\n").map((paragraph) => (
                    <p className="text-base leading-8 text-zinc-600 dark:text-zinc-300" key={paragraph.slice(0, 32)}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </header>

              <div className="mt-8 grid gap-4">
                {project.sections.map((section) => (
                  <section className="content-card" key={section.title}>
                    <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{section.title}</h3>
                    <div className="mt-3 space-y-3">
                      {section.body.map((paragraph) => (
                        <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300" key={paragraph.slice(0, 32)}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
