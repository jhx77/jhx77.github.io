import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { getProjectBySlug, projects } from "../data/projects";

export function Projects() {
  const { slug } = useParams();

  if (slug) {
    return <ProjectDetail slug={slug} />;
  }

  return <ProjectList />;
}

function ProjectList() {
  return (
    <section className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Projects"
          title="项目经历"
          description="一些项目的背景、实现过程和复盘，列表先保留概要，细节放在详情里慢慢展开。"
        />

        <div className="grid gap-5">
          {projects.map((project) => (
            <article className="content-card" key={project.slug}>
              <div className="flex flex-wrap gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <span>{project.period}</span>
                <span>·</span>
                <span>{project.role}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-zinc-950 dark:text-white">{project.title}</h2>
              <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-300">{project.summary}</p>
              <div className="mt-4 grid gap-2">
                {project.highlights.map((highlight) => (
                  <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300" key={highlight}>
                    {highlight}
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
              <Link
                to={`/projects/${project.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-800 hover:text-cyan-700 dark:text-zinc-100 dark:hover:text-cyan"
              >
                查看详情
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectDetail({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="px-5 py-24 text-center md:px-8">
        <h1 className="text-3xl font-semibold text-zinc-950 dark:text-white">项目不存在</h1>
        <Link to="/projects" className="mt-6 inline-flex items-center gap-2 text-cyan-700 dark:text-cyan">
          <ArrowLeft size={16} />
          返回 Projects
        </Link>
      </section>
    );
  }

  return (
    <article className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-cyan">
          <ArrowLeft size={16} />
          返回 Projects
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <span>{project.period}</span>
            <span>·</span>
            <span>{project.role}</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-zinc-950 dark:text-white md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span className="tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-10 grid gap-4">
          {project.sections.map((section) => (
            <section className="content-card" key={section.title}>
              <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">{section.title}</h2>
              <div className="mt-4 space-y-3">
                {section.body.map((paragraph) => (
                  <p className="text-base leading-8 text-zinc-600 dark:text-zinc-300" key={paragraph.slice(0, 48)}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
