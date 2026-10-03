import type { ProjectItem } from "../types/portfolio";
import { ProjectCard } from "./common/ProjectCard";
import { SectionHeading } from "./ui/section/SectionHeading";

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24 scroll-mt-24"
    >
      <SectionHeading
        eyebrow="Featured Projects"
        title="Things I've built"
        description="Four projects across web, backend, and AI, each with its own stack and trade-offs."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
