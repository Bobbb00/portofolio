import { ArrowDown, FileText } from "lucide-react";
import { Badge } from "./ui/badge";
import { type Personal, type Stat } from "../types/portfolio";
import { Button } from "./ui/button";
import { MediaPlaceholder } from "./common/MediaPlaceholder.tsx";

interface HeroSectionProps {
  personal: Personal;
  stats: Stat[];
}

export const HeroSection = ({ personal, stats }: HeroSectionProps) => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-16 lg:pt-40 lg:pb-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Kiri: teks */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <Badge
            isPulse
            className="self-start uppercase tracking-wider shadow-brutal-primary"
          >
            {personal.availability}
          </Badge>

          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs uppercase tracking-widest font-semibold text-primary">
              {personal.name} — Full-Stack Developer
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-on-surface">
            {personal.headline}
          </h1>

          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
            {personal.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="#projects" size="lg">
              Explore Projects
              <ArrowDown className="w-4 h-4" />
            </Button>
            <Button
              href={personal.cvUrl}
              variant="outline"
              size="lg"
              isExternal
            >
              <FileText className="w-4 h-4" />
              Download CV
            </Button>
          </div>

          <dl className="grid grid-cols-3 max-w-lg pt-6 mt-2 border-t border-outline-variant">
            {stats.map((stats, i) => (
              <div
                key={stats.label}
                className={i > 0 ? "pl-4 border-l border-outline-variant" : ""}
              >
                <dt className="sr-only">{stats.label}</dt>
                <dd className="font-headline text-2xl font-bold text-primary">
                  {stats.value}
                </dd>
                <p className="text-[11px] uppercase tracking-wide text-on-surface-variant">
                  {stats.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        {/* Kanan: bingkai foto */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md p-4 bg-surface-container-lowest border border-outline-variant shadow-[6px_6px_0px_#9a3412]">
            {[
              "-top-2 -left-2",
              "-top-2 -right-2",
              "-bottom-2 -left-2",
              "-bottom-2 -right-2",
            ].map((pos) => (
              <span
                key={pos}
                aria-hidden
                className={`absolute ${pos} text-primary font-mono text-sm leading-none select-none`}
              >
                +
              </span>
            ))}

            <div className="aspect-square bg-surface-container border border-outline-variant overflow-hidden">
              <MediaPlaceholder
                src={personal.photoUrl}
                alt={`Foto profil ${personal.name}`}
                hint="Foto profil · 1:1"
              />
            </div>

            <div className="flex justify-between items-center pt-3 font-mono text-[11px] uppercase tracking-wider text-outline">
              <span>{personal.name}</span>
              <span>{personal.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
