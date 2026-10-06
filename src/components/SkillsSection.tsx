import { Code, Layers, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./ui/section/SectionHeading";
import { RevealOnScroll } from "./common/RevealOnScroll";
import type { SkillGroup, SkillIcon } from "../types/portfolio";

const skillIconLookup: Record<SkillIcon, LucideIcon> = {
  code: Code,
  layers: Layers,
  sparkles: Sparkles,
};

export const SkillsSection = ({
  skillGroups,
}: {
  skillGroups: SkillGroup[];
}) => {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24 scroll-mt-24"
    >
      <RevealOnScroll>
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools I work with"
          description="Grouped by what I use them for, based on the projects above."
        />
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map((group, index) => {
          const Icon = skillIconLookup[group.icon];

          return (
            <RevealOnScroll key={group.id} delayMs={index * 120} className="h-full">
              <div className="group flex flex-col h-full bg-surface-container-lowest border border-outline-variant p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#9a3412]">
                {/* Header kartu */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-outline-variant transition-colors group-hover:border-primary/30">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="font-headline text-lg font-bold text-on-surface">
                      {group.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-bold text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Skills chips */}
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-mono text-sm px-2.5 py-1 bg-surface-container-low border border-outline-variant text-on-surface transition-all duration-200 hover:border-primary hover:text-primary hover:bg-surface-container hover:-translate-y-0.5 cursor-default"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                {/* Footer kartu */}
                <div className="mt-auto pt-4">
                  <div className="flex items-center justify-between pt-3 border-t border-outline-variant font-mono text-[11px] uppercase tracking-wider text-outline">
                    <span>{group.skills.length} items</span>
                    <span className="w-1.5 h-1.5 bg-primary group-hover:scale-125 transition-transform" />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
};
