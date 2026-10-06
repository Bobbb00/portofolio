import { Award } from "lucide-react";
import type { Certification } from "../../types/portfolio";

interface CertificationCardProps {
  certification: Certification;
}

export const CertificationCard = ({
  certification,
}: CertificationCardProps) => {
  return (
    <div className="group relative flex flex-col bg-surface-container-lowest border border-outline-variant p-6 shadow-[4px_4px_0px_#feb63c] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#805600]">
      {/* Corner tag */}
      <span className="absolute top-3 right-3 font-mono text-[10px] text-secondary opacity-80 uppercase tracking-widest">
        CERT::DBS-DICODING
      </span>

      {/* Badge baris */}
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed font-mono text-[11px] uppercase font-bold tracking-wider">
          Professional Certification
        </span>
        <span className="font-mono text-[11px] text-outline">
          {certification.cohort}
        </span>
      </div>

      {/* Nama program */}
      <h3 className="font-headline text-xl font-bold text-on-surface">
        {certification.program}
      </h3>
      <p className="text-secondary font-semibold mt-1">
        {certification.organizer}
      </p>
      <p className="text-[11px] uppercase tracking-wider text-outline mt-0.5">
        {certification.track}
      </p>

      {/* Standing Highlight */}
      <div className="my-5 p-4 bg-secondary-fixed/30 border border-secondary flex items-center justify-between transition-colors group-hover:bg-secondary-fixed/40">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-secondary font-bold">
            Cohort Graduation Standing
          </span>
          <div className="font-headline text-2xl sm:text-3xl font-extrabold text-secondary leading-none mt-1 flex items-center gap-2">
            {certification.standing}
            <Award className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <span className="relative inline-flex items-center justify-center px-3 py-1.5 bg-secondary text-on-secondary font-mono text-sm font-bold uppercase tracking-wider shadow-brutal-secondary transition-transform group-hover:scale-105">
            <span className="absolute -inset-0.5 border border-secondary/40 animate-pulse" />
            {certification.standingBadge}
          </span>
          <Award className="w-5 h-5 text-secondary/60" />
        </div>
      </div>

      <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
        {certification.description}
      </p>

      {/* Tags */}
      {certification.skills && certification.skills.length > 0 && (
        <div className="mt-auto pt-4 border-t border-outline-variant flex flex-wrap gap-2">
          {certification.skills.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 bg-surface-container border border-outline-variant text-on-surface hover:border-secondary transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
