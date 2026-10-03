interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
      <div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-secondary-container inline-block" />
          <span className="text-xs uppercase tracking-widest font-bold text-primary">
            {eyebrow}
          </span>
        </div>
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface mt-1">
          {title}
        </h2>
      </div>
      {description && (
        <p className="text-on-surface-variant max-w-md">{description}</p>
      )}
    </div>
  );
}
