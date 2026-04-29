type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-7 max-w-3xl md:mb-9">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-zinc-950 dark:text-white md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2.5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
