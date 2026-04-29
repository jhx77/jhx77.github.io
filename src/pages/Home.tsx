import { ArrowRight, Github, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/projects";
import { profile, techStack } from "../data/profile";
import { getBlogPosts } from "../lib/blog";

export function Home() {
  const recentPosts = getBlogPosts().slice(0, 3);

  return (
    <>
      <section className="px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{profile.englishName}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300 md:text-lg">
            物联网工程本科生，正在学习 Java 后端开发。本小站用来记录一些项目、学习笔记和生活里的想法。
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <Link to="/blog" className="primary-button home-button">
              最近写的东西
              <ArrowRight size={17} />
            </Link>
            <Link to="/projects" className="secondary-button home-button">
              项目经历
            </Link>
            <a href={profile.github} target="_blank" rel="noreferrer" className="secondary-button home-button">
              <Github size={17} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-8 md:px-8 md:py-10">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="About" title="About Me" />
          <div className="content-card home-about-card max-w-3xl">
            <p className="text-base leading-8 text-zinc-700 dark:text-zinc-300">
              你好，我是江宏鑫，目前是浙江水利水电学院物联网工程专业本科生。最近主要在学习 Java
              后端开发、数据库、Redis、RAG 和一些 AI 应用相关内容。这个网站主要用来记录学习过程、项目经历和一些个人想法。
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Stack" title="技术栈" description="目前主要接触和练习的内容。" />
          <div className="flex max-w-3xl flex-wrap gap-2">
            {techStack.map((tech) => (
              <span className="tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Projects" title="项目经历" description="整理几个最近做过的阶段性项目，记录一些实现思路和复盘。" />
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article className="content-card" key={project.slug}>
                <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to="/projects" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-zinc-800 hover:text-cyan-700 dark:text-zinc-100 dark:hover:text-cyan">
                  查看详情
                  <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Blog" title="最近写的东西" description="写一点学习笔记、项目复盘，也写一些阶段性的想法。" />
          <div className="grid gap-4">
            {recentPosts.map((post) => (
              <article className="content-card" key={post.slug}>
                <div className="flex flex-wrap gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.tags.join(" / ")}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-zinc-950 dark:text-white">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-800 hover:text-cyan-700 dark:text-zinc-100 dark:hover:text-cyan">
                  阅读
                  <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Contact" title="联系我" description="欢迎交流项目、学习或实习相关的内容。" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-card">
              <Github size={20} />
              <span>
                <strong>GitHub</strong>
                <small>github.com/jhx77</small>
              </span>
            </a>
            <a href={`mailto:${profile.emails[0]}`} className="contact-card">
              <Mail size={20} />
              <span>
                <strong>Email</strong>
                <small>{profile.emails[0]}</small>
              </span>
            </a>
            <div className="contact-card">
              <MapPin size={20} />
              <span>
                <strong>Location</strong>
                <small>{profile.location}</small>
              </span>
            </div>
            <div className="contact-card">
              <span className="grid h-5 w-5 place-items-center rounded border border-zinc-300 text-[10px] dark:border-white/20">
                Z
              </span>
              <span>
                <strong>School</strong>
                <small>{profile.school}</small>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
