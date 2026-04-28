type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-500 dark:text-cyan">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-zinc-950 dark:text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-zinc-600 dark:text-zinc-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
