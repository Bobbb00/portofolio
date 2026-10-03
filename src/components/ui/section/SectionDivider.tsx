interface SectionDividerProps {
  label: string;
}

export function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div className="w-full h-px bg-outline-variant flex items-center justify-between">
        <span className="w-2 h-2 bg-primary -ml-1" />
        <span className="bg-surface px-4 font-mono text-xs uppercase tracking-widest text-outline">
          {label}
        </span>
        <span className="w-2 h-2 bg-primary -mr-1" />
      </div>
    </div>
  );
}
