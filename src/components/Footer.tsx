import type { Personal, SocialLink, NavLink } from "../types/portfolio";
import { footerIndexLinks } from "../data/navigation";

interface FooterProps {
  personal: Personal;
  socials: SocialLink[];
  indexLinks?: NavLink[];
}

export const Footer = ({
  personal,
  socials,
  indexLinks = footerIndexLinks,
}: FooterProps) => {
  return (
    <footer className="w-full bg-surface-container-low pt-12 pb-8 border-t border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-headline text-lg font-bold text-on-surface">
                {personal.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
            </div>
            <p className="text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Crafting robust digital solutions with software architecture, tactile experiences, and precision.
            </p>
          </div>

          {/* Index links */}
          <div className="md:col-span-3 flex flex-col gap-1">
            <span className="text-[11px] uppercase font-semibold tracking-wider text-primary mb-1">
              Index
            </span>
            {indexLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-on-surface-variant hover:text-primary transition-colors py-0.5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Network links */}
          <div className="md:col-span-4 flex flex-col gap-1">
            <span className="text-[11px] uppercase font-semibold tracking-wider text-primary mb-1">
              Network & Signal
            </span>
            {[
              ...socials,
              {
                id: "email",
                label: "Email",
                handle: "",
                href: `mailto:${personal.email}`,
              },
            ].map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.id !== "email" ? "_blank" : undefined}
                rel={link.id !== "email" ? "noopener noreferrer" : undefined}
                className="group text-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-between py-1"
              >
                <span className="group-hover:translate-x-0.5 transition-transform">
                  {link.label}
                </span>
                <span className="text-[11px] text-outline group-hover:text-primary transition-colors">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] uppercase text-outline font-mono">
            © 2026 {personal.name}. All rights reserved.
          </p>
          <p className="text-[11px] uppercase text-on-surface-variant font-mono">
            Crafted with precision & warmth
          </p>
        </div>
      </div>
    </footer>
  );
};
