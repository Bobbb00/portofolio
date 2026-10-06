import { ImageIcon } from "lucide-react";
import { cn } from "../../lib/utils.ts";

interface MediaPlaceholderProps {
  src?: string;
  alt: string;
  hint: string;
  className?: string;
  loading?: "lazy" | "eager";
}

export function MediaPlaceholder({
  src,
  alt,
  hint,
  className,
  loading = "lazy",
}: MediaPlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={cn("w-full h-full object-cover", className)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "w-full h-full flex flex-col items-center justify-center gap-2 text-outline",
        className,
      )}
    >
      <ImageIcon className="w-8 h-8" strokeWidth={1.5} />
      <span className="font-mono text-[11px] uppercase tracking-wider">
        {hint}
      </span>
    </div>
  );
}
