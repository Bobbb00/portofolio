import { SectionHeading } from "./ui/section/SectionHeading";
import { EducationCard } from "./education/EducationCard";
import { CertificationCard } from "./education/CertificationCard";
import { RevealOnScroll } from "./common/RevealOnScroll";
import type { Education, Certification } from "../types/portfolio";

interface EducationSectionProps {
  education: Education;
  certification: Certification;
}

export const EducationSection = ({
  education,
  certification,
}: EducationSectionProps) => {
  return (
    <section
      id="education"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24 scroll-mt-24"
    >
      <RevealOnScroll>
        <SectionHeading
          eyebrow="Academic Foundation"
          title="Education & Credentials"
          description="Academic background and professional certifications."
        />
      </RevealOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevealOnScroll delayMs={0} className="h-full">
          <EducationCard education={education} />
        </RevealOnScroll>
        <RevealOnScroll delayMs={140} className="h-full">
          <CertificationCard certification={certification} />
        </RevealOnScroll>
      </div>
    </section>
  );
};
