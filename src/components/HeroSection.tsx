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
            <Button href="#projects" size="lg" className="group">
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </Button>
            <Button
              href={personal.cvUrl}
              variant="outline"
              size="lg"
              isExternal
              download="CV_SyafaAliAzmi.pdf"
              className="group"
            >
              <FileText className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </Button>
          </div>

          <dl className="grid grid-cols-3 max-w-lg pt-6 mt-2 border-t border-outline-variant">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`transition-colors hover:border-primary/60 ${
                  i > 0 ? "pl-4 border-l border-outline-variant" : ""
                }`}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-headline text-2xl font-bold text-primary">
                  {stat.value}
                </dd>
                <p className="text-[11px] uppercase tracking-wide text-on-surface-variant font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        {/* Kanan: bingkai foto */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="group relative w-full max-w-md p-4 bg-surface-container-lowest border border-outline-variant shadow-[6px_6px_0px_#9a3412] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#9a3412]">
            {[
              "-top-2 -left-2",
              "-top-2 -right-2",
              "-bottom-2 -left-2",
              "-bottom-2 -right-2",
            ].map((pos) => (
              <span
                key={pos}
                aria-hidden
                className={`absolute ${pos} text-primary font-mono text-sm leading-none select-none transition-transform duration-500 group-hover:rotate-90`}
              >
                +
              </span>
            ))}

            {/* Top Specification Header Bar */}
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-outline-variant font-mono text-[10px] uppercase tracking-wider text-outline">
              <span className="flex items-center gap-1.5 font-bold text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                PORTRAIT
              </span>
              <span>++</span>
            </div>

            <div className="relative aspect-square bg-surface-container border border-outline-variant overflow-hidden">
              <MediaPlaceholder
                src={personal.photoUrl}
                alt={`Foto profil ${personal.name}`}
                hint="Foto profil · 1:1"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Floating Architectural Badge (Bottom Left) */}
              <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-surface/90 backdrop-blur-md border border-outline-variant shadow-sm flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-0.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-mono text-[10px] font-bold tracking-wider text-on-surface uppercase">
                  Full-Stack Eng.
                </span>
              </div>

              {/* Floating Location Tag (Top Right) */}
              <div className="absolute top-3 right-3 px-2 py-0.5 bg-surface/90 backdrop-blur-md border border-outline-variant font-mono text-[9px] uppercase tracking-widest text-outline">
                JKT · UTC+7
              </div>
            </div>

            <div className="flex justify-between items-center pt-3 font-mono text-[11px] uppercase tracking-wider text-outline">
              <span className="font-bold text-on-surface">{personal.name}</span>
              <span className="text-[10px] text-primary font-bold tracking-wider">
                {personal.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
