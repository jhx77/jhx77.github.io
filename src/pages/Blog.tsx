import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Link, useParams, useSearchParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { SectionHeading } from "../components/SectionHeading";
import { getPaginatedPosts, getPostBySlug } from "../lib/blog";

const PAGE_SIZE = 3;

export function Blog() {
  const { slug } = useParams();

  if (slug) {
    return <BlogDetail slug={slug} />;
  }

  return <BlogList />;
}

function BlogList() {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") ?? "1");
  const { items, page, totalPages } = getPaginatedPosts(currentPage, PAGE_SIZE);

  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Blog"
          title="记录"
          description="一些学习笔记、项目复盘和临时想法。现在先放两篇示例笔记，后面会慢慢补真实内容。"
        />

        <div className="grid gap-5">
          {items.map((post) => (
            <article className="content-card" key={post.slug}>
              <div className="flex flex-wrap gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                <span className="inline-flex items-center gap-2">
                  <Calendar size={16} />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock size={16} />
                  {post.readingTime} min read
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-zinc-950 dark:text-white">{post.title}</h2>
              <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-300">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link to={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-800 hover:text-cyan-700 dark:text-zinc-100 dark:hover:text-cyan">
                阅读
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <PaginationLink page={page - 1} disabled={page <= 1} direction="prev" />
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {page} / {totalPages}
          </span>
          <PaginationLink page={page + 1} disabled={page >= totalPages} direction="next" />
        </div>
      </div>
    </section>
  );
}

function PaginationLink({
  page,
  disabled,
  direction
}: {
  page: number;
  disabled: boolean;
  direction: "prev" | "next";
}) {
  const content =
    direction === "prev" ? (
      <>
        <ArrowLeft size={16} />
        上一页
      </>
    ) : (
      <>
        下一页
        <ArrowRight size={16} />
      </>
    );

  if (disabled) {
    return <span className="pagination-button opacity-40">{content}</span>;
  }

  return (
    <Link to={`/blog?page=${page}`} className="pagination-button">
      {content}
    </Link>
  );
}

function BlogDetail({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <section className="px-5 py-24 text-center md:px-8">
        <h1 className="text-3xl font-semibold text-zinc-950 dark:text-white">文章不存在</h1>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-cyan-700 dark:text-cyan">
          <ArrowLeft size={16} />
          返回 Blog
        </Link>
      </section>
    );
  }

  return (
    <article className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-cyan">
          <ArrowLeft size={16} />
          返回 Blog
        </Link>
        <div className="mt-8">
          <div className="flex flex-wrap gap-3 text-sm text-zinc-500 dark:text-zinc-400">
            <span>{post.date}</span>
            <span>{post.readingTime} min read</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-zinc-950 dark:text-white md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">{post.excerpt}</p>
        </div>
        <div className="prose-content mt-10">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
