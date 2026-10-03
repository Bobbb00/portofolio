import { ArrowUpRight, Code } from "lucide-react";
import type { ProjectItem } from "../../types/portfolio";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MediaPlaceholder } from "./MediaPlaceholder";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const hasLinks = Boolean(project.githubUrl || project.liveUrl);

  return (
    <article className="group flex flex-col bg-surface-container-lowest border border-outline-variant p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#9a3412]">
      {/* Window chrome */}
      <div className="flex items-center justify-between bg-surface-container-low border border-outline-variant px-3 py-2 mb-4">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
          <span className="w-2.5 h-2.5 rounded-full bg-outline/40" />
        </div>
        <span className="font-mono text-[11px] text-outline">
          {`~/projects/${project.id}`}
        </span>
        <span className="w-10" aria-hidden />
      </div>

      {/* Area screenshot */}
      <div className="aspect-video bg-surface-container border border-outline-variant overflow-hidden mb-4">
        <MediaPlaceholder
          src={project.screenshot}
          alt={`Screenshot ${project.title}`}
          hint="Screenshot · 16:9"
        />
      </div>

      {/* Judul */}
      <h3 className="font-headline text-xl font-bold text-primary">
        {project.title}
      </h3>
      <p className="font-mono text-[11px] uppercase tracking-wider text-outline mt-1">
        {project.subtitle}
      </p>

      <p className="text-sm text-on-surface-variant leading-relaxed mt-3">
        {project.highlight}
      </p>

      {project.note && (
        <div className="mt-3 px-3 py-2 border border-dashed border-secondary bg-secondary-fixed/40 text-xs font-mono text-on-secondary-fixed">
          {project.note}
        </div>
      )}

      {/* Tech stack */}
      <ul className="flex flex-wrap gap-1.5 mt-4">
        {project.techStack.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>

      {/* Footer link, mt-auto agar sejajar di dasar kartu */}
      {hasLinks && (
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between pt-3 border-t border-outline-variant">
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                variant="ghost"
                size="sm"
                isExternal
              >
                <Code className="w-3.5 h-3.5" />
                GitHub
              </Button>
            )}
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                variant="ghost"
                size="sm"
                isExternal
              >
                Live Demo
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            )}
          </div>
        </div>
      )}
    </article>
  );
};
