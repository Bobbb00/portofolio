import { GraduationCap, Star } from "lucide-react";
import type { Education } from "../../types/portfolio";

interface EducationCardProps {
  education: Education;
}

export const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="group relative flex flex-col bg-surface-container-lowest border border-outline-variant p-6 shadow-[4px_4px_0px_#dec0b7] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#9a3412]">
      {/* Corner tag */}
      <span className="absolute top-3 right-3 font-mono text-[10px] text-outline opacity-60 uppercase tracking-widest">
        REG::UNIV-ID
      </span>

      {/* Badge baris */}
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2 py-0.5 bg-primary-fixed text-on-primary-fixed font-mono text-[11px] uppercase font-bold tracking-wider">
          Undergraduate Degree
        </span>
        <span className="font-mono text-[11px] text-outline">
          {education.period}
        </span>
      </div>

      {/* Nama institusi */}
      <h3 className="font-headline text-xl font-bold text-on-surface">
        {education.institution}
      </h3>
      <p className="text-primary font-semibold mt-1">{education.degree}</p>
      {education.faculty && (
        <p className="text-[11px] uppercase tracking-wider text-outline mt-0.5">
          {education.faculty}
        </p>
      )}

      {/* GPA Highlight */}
      <div className="my-5 p-4 bg-surface-container-low border border-outline-variant flex items-center justify-between transition-colors group-hover:border-primary/40">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-outline">
            Cumulative GPA
          </span>
          <div className="font-headline text-5xl font-extrabold text-primary leading-none mt-1">
            {education.gpa}
            <span className="text-xl text-outline-variant font-mono ml-1">
              / {education.gpaScale}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <GraduationCap className="w-8 h-8 text-primary opacity-30 group-hover:opacity-60 transition-opacity" />
          {education.honors && (
            <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold px-2 py-1 bg-surface-container border border-outline-variant text-on-surface">
              <Star className="w-3 h-3 text-primary" />
              {education.honors}
            </span>
          )}
        </div>
      </div>

      <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
        {education.description}
      </p>

      {/* Kursus tags */}
      {education.courses && education.courses.length > 0 && (
        <div className="mt-auto pt-4 border-t border-outline-variant flex flex-wrap gap-2">
          {education.courses.map((course) => (
            <span
              key={course}
              className="font-mono text-xs px-2 py-0.5 bg-surface-container border border-outline-variant text-on-surface hover:border-primary/50 transition-colors"
            >
              {course}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
